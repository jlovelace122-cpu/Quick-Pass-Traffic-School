import 'dotenv/config';
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import OpenAI from 'openai';
import { db } from './db/index.js';
import { users, states, courses, courseModules, quizQuestions, enrollments, moduleProgress, quizAttempts, certificates, chatSessions, chatMessages } from './db/schema.js';
import { eq, and, desc } from 'drizzle-orm';
import { v4 as uuidv4 } from 'uuid';

// OpenAI client
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// Chatbot system prompt
const CHAT_SYSTEM_PROMPT = `You are "Quick Pass Assistant" - a friendly, knowledgeable AI customer service representative for Quick Pass Traffic School, an online traffic school operating in multiple states.

Your role is to help students with:
1. Course selection and state-specific questions
2. Registration and enrollment assistance
3. Technical support (login issues, navigation, browser compatibility)
4. Course content explanations (but NOT answering quiz or test questions directly)
5. Certificate and completion questions
6. Payment and refund inquiries

IMPORTANT RULES:
- NEVER provide direct answers to quiz or exam questions
- Be friendly, professional, and encouraging
- If you don't know something, suggest they contact support@quickpasstrafficschool.com
- Keep responses concise (under 200 words) unless the user asks for details

COURSE OFFERINGS BY STATE:

🌴 FLORIDA:
- 4-Hour Basic Driver Improvement (BDI) - $18.50: First-time offenders, ticket dismissal
- 8-Hour Intermediate Driver Improvement (IDI) - $55.00: Court-ordered, point reduction
- 12-Hour Advanced Driver Improvement (ADI) - $60.00: License reinstatement, serious violations

🌵 ARIZONA:
- 4-Hour Traffic Survival School - $24.95: ADOT/MVD approved, ticket dismissal

🌴 CALIFORNIA:
- 8-Hour Traffic Violator School - $29.95: DMV licensed, mask violation (once per 18 months)

🍑 GEORGIA:
- 6-Hour Defensive Driving - $24.95: DDS approved, remove up to 7 points

🏎️ INDIANA:
- 4-Hour Defensive Driving - $24.95: BMV approved, point reduction

🌰 OHIO:
- 4-Hour Remedial Driving - $24.95: BMV approved, 2-point credit (once per 3 years)

🤠 TEXAS:
- 6-Hour Driving Safety - $25.00: TEA/TDLR approved, ticket dismissal (request within 20 days)

ALL COURSES INCLUDE:
- 100% online, mobile-friendly
- Available 24/7, complete at your own pace
- Module quizzes (70% to pass) and final exam (80% to pass)
- Instant certificate upon completion
- Unlimited retakes at no extra cost
- 24/7 customer support

WEBSITE NAVIGATION:
- Home: Course overview and state selection
- Register: /register.html
- Login: /login.html
- Dashboard: /dashboard/ (track progress, view certificates)
- Course Player: /course/player.html`;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;
const JWT_SECRET = process.env.JWT_SECRET || 'quickpass-dev-secret-key';

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files with proper MIME types
app.use(express.static(__dirname, {
  setHeaders: (res, filePath) => {
    if (filePath.endsWith('.js')) {
      res.setHeader('Content-Type', 'application/javascript');
    }
  }
}));

// ===========================
// Auth Middleware
// ===========================
function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  
  if (!token) {
    return res.status(401).json({ error: 'Access token required' });
  }
  
  jwt.verify(token, JWT_SECRET, (err, user) => {
    if (err) {
      return res.status(403).json({ error: 'Invalid or expired token' });
    }
    req.user = user;
    next();
  });
}

function requireAdmin(req, res, next) {
  if (req.user.role !== 'admin') {
    return res.status(403).json({ error: 'Admin access required' });
  }
  next();
}

// ===========================
// Auth Routes
// ===========================
app.post('/api/auth/register', async (req, res) => {
  try {
    const { email, password, firstName, lastName, phone } = req.body;
    
    // Check if user exists
    const existing = await db.select().from(users).where(eq(users.email, email)).limit(1);
    if (existing.length > 0) {
      return res.status(400).json({ error: 'Email already registered' });
    }
    
    // Hash password and create user
    const passwordHash = await bcrypt.hash(password, 10);
    const userId = uuidv4();
    
    await db.insert(users).values({
      id: userId,
      email,
      passwordHash,
      firstName,
      lastName,
      phone,
      role: 'student',
    });
    
    // Generate token
    const token = jwt.sign({ id: userId, email, role: 'student' }, JWT_SECRET, { expiresIn: '7d' });
    
    res.json({
      token,
      user: { id: userId, email, firstName, lastName, role: 'student' }
    });
  } catch (error) {
    console.error('Registration error:', error);
    res.status(500).json({ error: 'Registration failed' });
  }
});

app.post('/api/auth/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    
    // Find user
    const result = await db.select().from(users).where(eq(users.email, email)).limit(1);
    const user = result[0];
    
    if (!user) {
      return res.status(401).json({ error: 'Invalid email or password' });
    }
    
    // Check password
    const validPassword = await bcrypt.compare(password, user.passwordHash);
    if (!validPassword) {
      return res.status(401).json({ error: 'Invalid email or password' });
    }
    
    // Generate token
    const token = jwt.sign(
      { id: user.id, email: user.email, role: user.role },
      JWT_SECRET,
      { expiresIn: '7d' }
    );
    
    res.json({
      token,
      user: {
        id: user.id,
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
        role: user.role
      }
    });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ error: 'Login failed' });
  }
});

// ===========================
// Course Routes
// ===========================
app.get('/api/courses', async (req, res) => {
  try {
    const { state } = req.query;
    let query = db.select().from(courses).where(eq(courses.isActive, true));
    
    if (state) {
      const stateResult = await db.select().from(states).where(eq(states.code, state)).limit(1);
      if (stateResult[0]) {
        query = db.select().from(courses).where(
          and(eq(courses.isActive, true), eq(courses.stateId, stateResult[0].id))
        );
      }
    }
    
    const result = await query;
    res.json({ courses: result });
  } catch (error) {
    console.error('Courses error:', error);
    res.status(500).json({ error: 'Failed to fetch courses' });
  }
});

// User's enrollments - MUST be before /api/courses/:slug
app.get('/api/courses/my-enrollments', authenticateToken, async (req, res) => {
  try {
    const userEnrollments = await db.select({
      enrollmentId: enrollments.id,
      status: enrollments.status,
      startedAt: enrollments.startedAt,
      completedAt: enrollments.completedAt,
      expiresAt: enrollments.expiresAt,
      courseId: courses.id,
      courseName: courses.name,
      courseSlug: courses.slug,
      durationHours: courses.durationHours,
      description: courses.description,
    })
    .from(enrollments)
    .innerJoin(courses, eq(enrollments.courseId, courses.id))
    .where(eq(enrollments.userId, req.user.id));
    
    // For each enrollment, calculate progress
    const enrollmentsWithProgress = await Promise.all(
      userEnrollments.map(async (enrollment) => {
        const modules = await db
          .select({ id: courseModules.id })
          .from(courseModules)
          .where(and(eq(courseModules.courseId, enrollment.courseId), eq(courseModules.isActive, true)));

        const completedModules = await db
          .select({ id: moduleProgress.id })
          .from(moduleProgress)
          .where(and(
            eq(moduleProgress.enrollmentId, enrollment.enrollmentId),
            eq(moduleProgress.status, 'completed')
          ));

        const totalModules = modules.length;
        const completedCount = completedModules.length;
        const progressPercent = totalModules > 0 ? Math.round((completedCount / totalModules) * 100) : 0;

        return {
          id: enrollment.enrollmentId,
          courseId: enrollment.courseId,
          courseName: enrollment.courseName,
          courseSlug: enrollment.courseSlug,
          durationHours: enrollment.durationHours,
          description: enrollment.description,
          status: enrollment.status,
          startedAt: enrollment.startedAt,
          completedAt: enrollment.completedAt,
          expiresAt: enrollment.expiresAt,
          progress: {
            completedModules: completedCount,
            totalModules: totalModules,
            percent: progressPercent,
          },
        };
      })
    );
    
    res.json({ enrollments: enrollmentsWithProgress });
  } catch (error) {
    console.error('My enrollments error:', error);
    res.status(500).json({ error: 'Failed to fetch enrollments' });
  }
});

app.get('/api/courses/:slug', async (req, res) => {
  try {
    const { slug } = req.params;
    
    const courseResult = await db.select().from(courses).where(eq(courses.slug, slug)).limit(1);
    const course = courseResult[0];
    
    if (!course) {
      return res.status(404).json({ error: 'Course not found' });
    }
    
    // Get modules
    const modules = await db.select().from(courseModules)
      .where(eq(courseModules.courseId, course.id))
      .orderBy(courseModules.orderIndex);
    
    res.json({ course, modules });
  } catch (error) {
    console.error('Course detail error:', error);
    res.status(500).json({ error: 'Failed to fetch course' });
  }
});

// Get course modules with progress (requires enrollment)
app.get('/api/courses/:slug/modules', authenticateToken, async (req, res) => {
  try {
    const { slug } = req.params;
    
    // Get course
    const courseResult = await db.select().from(courses).where(eq(courses.slug, slug)).limit(1);
    const course = courseResult[0];
    
    if (!course) {
      return res.status(404).json({ error: 'Course not found' });
    }
    
    // Check enrollment
    const enrollment = await db.select()
      .from(enrollments)
      .where(and(
        eq(enrollments.userId, req.user.id),
        eq(enrollments.courseId, course.id),
        eq(enrollments.status, 'active')
      ))
      .limit(1);
    
    if (!enrollment[0]) {
      return res.status(403).json({ error: 'Not enrolled in this course' });
    }
    
    // Get all modules
    const modules = await db.select()
      .from(courseModules)
      .where(and(eq(courseModules.courseId, course.id), eq(courseModules.isActive, true)))
      .orderBy(courseModules.orderIndex);
    
    // Get progress for each module
    const modulesWithProgress = await Promise.all(
      modules.map(async (module) => {
        const progress = await db.select()
          .from(moduleProgress)
          .where(and(
            eq(moduleProgress.enrollmentId, enrollment[0].id),
            eq(moduleProgress.moduleId, module.id)
          ))
          .limit(1);
        
        return {
          id: module.id,
          title: module.title,
          description: module.description,
          orderIndex: module.orderIndex,
          estimatedMinutes: module.estimatedMinutes,
          status: progress[0]?.status || 'not_started',
          completedAt: progress[0]?.completedAt,
        };
      })
    );
    
    res.json({
      courseId: course.id,
      courseName: course.name,
      enrollmentId: enrollment[0].id,
      modules: modulesWithProgress,
      passingScoreQuiz: course.passingScoreQuiz,
      passingScoreFinal: course.passingScoreFinal,
    });
  } catch (error) {
    console.error('Course modules error:', error);
    res.status(500).json({ error: 'Failed to fetch modules' });
  }
});

// Get specific module content
app.get('/api/courses/:slug/modules/:moduleId', authenticateToken, async (req, res) => {
  try {
    const { slug, moduleId } = req.params;
    
    // Get course
    const courseResult = await db.select().from(courses).where(eq(courses.slug, slug)).limit(1);
    const course = courseResult[0];
    
    if (!course) {
      return res.status(404).json({ error: 'Course not found' });
    }
    
    // Check enrollment
    const enrollment = await db.select()
      .from(enrollments)
      .where(and(
        eq(enrollments.userId, req.user.id),
        eq(enrollments.courseId, course.id),
        eq(enrollments.status, 'active')
      ))
      .limit(1);
    
    if (!enrollment[0]) {
      return res.status(403).json({ error: 'Not enrolled in this course' });
    }
    
    // Get module
    const moduleResult = await db.select()
      .from(courseModules)
      .where(and(eq(courseModules.id, moduleId), eq(courseModules.courseId, course.id)))
      .limit(1);
    
    const module = moduleResult[0];
    if (!module) {
      return res.status(404).json({ error: 'Module not found' });
    }
    
    // Get progress
    const progress = await db.select()
      .from(moduleProgress)
      .where(and(
        eq(moduleProgress.enrollmentId, enrollment[0].id),
        eq(moduleProgress.moduleId, moduleId)
      ))
      .limit(1);
    
    // Get quiz questions (don't include correct answers)
    const questions = await db.select({
      id: quizQuestions.id,
      questionText: quizQuestions.questionText,
      questionType: quizQuestions.questionType,
      options: quizQuestions.options,
      orderIndex: quizQuestions.orderIndex,
    })
    .from(quizQuestions)
    .where(and(eq(quizQuestions.moduleId, moduleId), eq(quizQuestions.isActive, true)))
    .orderBy(quizQuestions.orderIndex);
    
    res.json({
      module: {
        id: module.id,
        title: module.title,
        description: module.description,
        content: module.content,
        orderIndex: module.orderIndex,
        estimatedMinutes: module.estimatedMinutes,
      },
      progress: progress[0] || { status: 'not_started', timeSpentSeconds: 0 },
      quiz: {
        questions: questions.map(q => ({
          ...q,
          options: JSON.parse(q.options),
        })),
        passingScore: course.passingScoreQuiz,
      },
      enrollmentId: enrollment[0].id,
    });
  } catch (error) {
    console.error('Module detail error:', error);
    res.status(500).json({ error: 'Failed to fetch module' });
  }
});

// ===========================
// Quiz Routes
// ===========================
app.post('/api/quiz/submit', authenticateToken, async (req, res) => {
  try {
    const { enrollmentId, moduleId, answers } = req.body;
    
    // Verify enrollment belongs to user
    const enrollment = await db.select()
      .from(enrollments)
      .where(and(eq(enrollments.id, enrollmentId), eq(enrollments.userId, req.user.id)))
      .limit(1);
    
    if (!enrollment[0]) {
      return res.status(403).json({ error: 'Invalid enrollment' });
    }
    
    // Get course for passing score
    const course = await db.select()
      .from(courses)
      .where(eq(courses.id, enrollment[0].courseId))
      .limit(1);
    
    // Get correct answers for questions
    const questionIds = answers.map(a => a.questionId);
    const questions = await db.select()
      .from(quizQuestions)
      .where(eq(quizQuestions.moduleId, moduleId));
    
    // Grade the quiz
    let correctCount = 0;
    const results = answers.map(answer => {
      const question = questions.find(q => q.id === answer.questionId);
      const isCorrect = question?.correctAnswer === answer.answer;
      if (isCorrect) correctCount++;
      return {
        questionId: answer.questionId,
        userAnswer: answer.answer,
        correctAnswer: question?.correctAnswer,
        isCorrect
      };
    });
    
    const totalQuestions = questions.length;
    const score = totalQuestions > 0 ? (correctCount / totalQuestions) * 100 : 0;
    const passingScore = course[0]?.passingScoreQuiz || 70;
    const passed = score >= passingScore;
    
    // Record the attempt
    await db.insert(quizAttempts).values({
      id: uuidv4(),
      enrollmentId,
      moduleId,
      score,
      passed,
      answers: JSON.stringify(answers),
    });
    
    // If passed, update module progress
    if (passed) {
      const existingProgress = await db.select()
        .from(moduleProgress)
        .where(and(eq(moduleProgress.enrollmentId, enrollmentId), eq(moduleProgress.moduleId, moduleId)))
        .limit(1);
      
      if (existingProgress[0]) {
        await db.update(moduleProgress)
          .set({ status: 'completed', completedAt: new Date().toISOString() })
          .where(eq(moduleProgress.id, existingProgress[0].id));
      } else {
        await db.insert(moduleProgress).values({
          id: uuidv4(),
          enrollmentId,
          moduleId,
          status: 'completed',
          completedAt: new Date().toISOString(),
        });
      }
    }
    
    res.json({
      passed,
      score,
      correctAnswers: correctCount,
      totalQuestions,
      results,
      message: passed ? 'Great job! You passed the quiz!' : `You need ${passingScore}% to pass. Try again!`
    });
  } catch (error) {
    console.error('Quiz submit error:', error);
    res.status(500).json({ error: 'Failed to submit quiz' });
  }
});

// Get final exam questions
app.get('/api/quiz/final-exam', authenticateToken, async (req, res) => {
  try {
    const { enrollmentId } = req.query;
    
    // Verify enrollment
    const enrollment = await db.select()
      .from(enrollments)
      .where(and(eq(enrollments.id, enrollmentId), eq(enrollments.userId, req.user.id)))
      .limit(1);
    
    if (!enrollment[0]) {
      return res.status(403).json({ error: 'Invalid enrollment' });
    }
    
    // Check all modules are completed
    const course = await db.select()
      .from(courses)
      .where(eq(courses.id, enrollment[0].courseId))
      .limit(1);
    
    const allModules = await db.select()
      .from(courseModules)
      .where(and(eq(courseModules.courseId, course[0].id), eq(courseModules.isActive, true)));
    
    const completedModules = await db.select()
      .from(moduleProgress)
      .where(and(eq(moduleProgress.enrollmentId, enrollmentId), eq(moduleProgress.status, 'completed')));
    
    if (completedModules.length < allModules.length) {
      return res.status(400).json({ error: 'Please complete all modules before taking the final exam' });
    }
    
    // Get final exam questions (without correct answers)
    const questions = await db.select({
      id: quizQuestions.id,
      questionText: quizQuestions.questionText,
      questionType: quizQuestions.questionType,
      options: quizQuestions.options,
      orderIndex: quizQuestions.orderIndex,
    })
    .from(quizQuestions)
    .where(and(
      eq(quizQuestions.courseId, course[0].id),
      eq(quizQuestions.isFinalExam, true),
      eq(quizQuestions.isActive, true)
    ))
    .orderBy(quizQuestions.orderIndex);
    
    res.json({
      totalQuestions: questions.length,
      passingScore: course[0].passingScoreFinal,
      questions: questions.map(q => ({
        ...q,
        options: JSON.parse(q.options),
      })),
    });
  } catch (error) {
    console.error('Final exam questions error:', error);
    res.status(500).json({ error: 'Failed to load final exam' });
  }
});

// Submit final exam
app.post('/api/quiz/submit-final', authenticateToken, async (req, res) => {
  try {
    const { enrollmentId, answers } = req.body;
    
    // Verify enrollment
    const enrollment = await db.select()
      .from(enrollments)
      .where(and(eq(enrollments.id, enrollmentId), eq(enrollments.userId, req.user.id)))
      .limit(1);
    
    if (!enrollment[0]) {
      return res.status(403).json({ error: 'Invalid enrollment' });
    }
    
    // Get course
    const course = await db.select()
      .from(courses)
      .where(eq(courses.id, enrollment[0].courseId))
      .limit(1);
    
    // Get final exam questions
    const questions = await db.select()
      .from(quizQuestions)
      .where(and(
        eq(quizQuestions.courseId, course[0].id),
        eq(quizQuestions.isFinalExam, true)
      ));
    
    // Grade
    let correctCount = 0;
    const results = answers.map(answer => {
      const question = questions.find(q => q.id === answer.questionId);
      const isCorrect = question?.correctAnswer === answer.answer;
      if (isCorrect) correctCount++;
      return {
        questionId: answer.questionId,
        userAnswer: answer.answer,
        correctAnswer: question?.correctAnswer,
        isCorrect
      };
    });
    
    const totalQuestions = questions.length;
    const score = totalQuestions > 0 ? (correctCount / totalQuestions) * 100 : 0;
    const passingScore = course[0]?.passingScoreFinal || 80;
    const passed = score >= passingScore;
    
    // Record attempt
    await db.insert(quizAttempts).values({
      id: uuidv4(),
      enrollmentId,
      isFinalExam: true,
      score,
      passed,
      answers: JSON.stringify(answers),
    });
    
    // If passed, generate certificate
    let certificateId = null;
    if (passed) {
      certificateId = uuidv4();
      const certNumber = `QPTS-${Date.now().toString(36).toUpperCase()}-${Math.random().toString(36).substr(2, 4).toUpperCase()}`;
      
      await db.insert(certificates).values({
        id: certificateId,
        enrollmentId,
        certificateNumber: certNumber,
        issuedAt: new Date().toISOString(),
      });
      
      // Update enrollment to completed
      await db.update(enrollments)
        .set({ status: 'completed', completedAt: new Date().toISOString() })
        .where(eq(enrollments.id, enrollmentId));
    }
    
    res.json({
      passed,
      score,
      correctAnswers: correctCount,
      totalQuestions,
      results,
      certificate: passed ? { id: certificateId } : null,
      message: passed ? '🎉 Congratulations! You passed! Your certificate is ready.' : `You need ${passingScore}% to pass. Try again!`
    });
  } catch (error) {
    console.error('Final exam error:', error);
    res.status(500).json({ error: 'Failed to submit final exam' });
  }
});

// ===========================
// Certificate Routes
// ===========================
app.get('/api/certificate/generate', authenticateToken, async (req, res) => {
  try {
    const { id, enrollmentId } = req.query;
    
    // Get certificate by ID or enrollment ID
    let certificate;
    if (id) {
      certificate = await db.select()
        .from(certificates)
        .where(eq(certificates.id, id))
        .limit(1);
    } else if (enrollmentId) {
      certificate = await db.select()
        .from(certificates)
        .where(eq(certificates.enrollmentId, enrollmentId))
        .limit(1);
    }
    certificate = certificate || [];
    
    if (!certificate[0]) {
      return res.status(404).json({ error: 'Certificate not found' });
    }
    
    // Get enrollment and course info
    const enrollId = certificate[0].enrollmentId;
    const enrollment = await db.select({
      courseName: courses.name,
      durationHours: courses.durationHours,
      completedAt: enrollments.completedAt,
    })
    .from(enrollments)
    .innerJoin(courses, eq(enrollments.courseId, courses.id))
    .where(eq(enrollments.id, enrollId))
    .limit(1);
    
    // Get user info
    const user = await db.select()
      .from(users)
      .where(eq(users.id, req.user.id))
      .limit(1);
    
    // Generate HTML certificate
    const completionDate = new Date(enrollment[0].completedAt).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
    
    const html = `
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Certificate of Completion</title>
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { 
            font-family: 'Times New Roman', serif; 
            background: white;
            padding: 40px;
        }
        .certificate {
            border: 8px double #1e3a5f;
            padding: 60px;
            max-width: 900px;
            margin: 0 auto;
            background: linear-gradient(135deg, #fefefe 0%, #f8f9fa 100%);
            position: relative;
        }
        .certificate::before {
            content: '';
            position: absolute;
            top: 20px;
            left: 20px;
            right: 20px;
            bottom: 20px;
            border: 2px solid #1e3a5f;
            pointer-events: none;
        }
        .header {
            text-align: center;
            margin-bottom: 40px;
        }
        .logo {
            font-size: 28px;
            font-weight: bold;
            color: #1e3a5f;
            margin-bottom: 10px;
        }
        .title {
            font-size: 48px;
            font-style: italic;
            color: #1e3a5f;
            margin: 20px 0;
        }
        .subtitle {
            font-size: 18px;
            color: #666;
            text-transform: uppercase;
            letter-spacing: 3px;
        }
        .content {
            text-align: center;
            margin: 40px 0;
        }
        .presented-to {
            font-size: 16px;
            color: #666;
            margin-bottom: 10px;
        }
        .student-name {
            font-size: 36px;
            font-style: italic;
            color: #1e3a5f;
            border-bottom: 2px solid #1e3a5f;
            display: inline-block;
            padding: 0 40px 10px;
            margin-bottom: 30px;
        }
        .course-info {
            font-size: 16px;
            line-height: 1.8;
            color: #333;
        }
        .course-name {
            font-size: 20px;
            font-weight: bold;
            color: #1e3a5f;
        }
        .footer {
            display: flex;
            justify-content: space-between;
            margin-top: 60px;
            padding-top: 40px;
        }
        .footer-item {
            text-align: center;
            flex: 1;
        }
        .signature-line {
            border-top: 2px solid #333;
            width: 200px;
            margin: 0 auto 10px;
            padding-top: 10px;
        }
        .cert-number {
            text-align: center;
            margin-top: 30px;
            font-size: 12px;
            color: #999;
        }
        .seal {
            text-align: center;
            margin-top: 20px;
        }
        .seal-circle {
            width: 80px;
            height: 80px;
            border: 3px solid #d4af37;
            border-radius: 50%;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            color: #d4af37;
            font-weight: bold;
            font-size: 12px;
        }
        @media print {
            body { padding: 0; }
            .certificate { border-width: 4px; }
        }
    </style>
</head>
<body>
    <div class="certificate">
        <div class="header">
            <div class="logo">🚗 Quick Pass Traffic School</div>
            <div class="subtitle">Florida DHSMV Approved</div>
            <div class="title">Certificate of Completion</div>
        </div>
        
        <div class="content">
            <div class="presented-to">This is to certify that</div>
            <div class="student-name">${user[0].firstName} ${user[0].lastName}</div>
            
            <div class="course-info">
                <p>has successfully completed the</p>
                <p class="course-name">${enrollment[0].courseName}</p>
                <p>(${enrollment[0].durationHours}-Hour Florida Traffic School Course)</p>
                <p style="margin-top: 20px;">on <strong>${completionDate}</strong></p>
            </div>
        </div>
        
        <div class="footer">
            <div class="footer-item">
                <div class="signature-line">Date Issued</div>
                <div>${completionDate}</div>
            </div>
            <div class="footer-item">
                <div class="seal">
                    <div class="seal-circle">OFFICIAL<br>SEAL</div>
                </div>
            </div>
            <div class="footer-item">
                <div class="signature-line">Course Administrator</div>
                <div>Quick Pass Traffic School</div>
            </div>
        </div>
        
        <div class="cert-number">
            Certificate Number: ${certificate[0].certificateNumber}<br>
            License #: ${user[0].licenseNumber || 'N/A'} | State: ${user[0].licenseState || 'FL'}
        </div>
    </div>
    
    <script>window.print();</script>
</body>
</html>
    `;
    
    res.setHeader('Content-Type', 'text/html');
    res.send(html);
  } catch (error) {
    console.error('Certificate generation error:', error);
    res.status(500).json({ error: 'Failed to generate certificate' });
  }
});

app.get('/api/certificate/list', authenticateToken, async (req, res) => {
  try {
    const userCerts = await db.select({
      id: certificates.id,
      certificateNumber: certificates.certificateNumber,
      issuedAt: certificates.issuedAt,
      courseName: courses.name,
    })
    .from(certificates)
    .innerJoin(enrollments, eq(certificates.enrollmentId, enrollments.id))
    .innerJoin(courses, eq(enrollments.courseId, courses.id))
    .where(eq(enrollments.userId, req.user.id));
    
    res.json({ certificates: userCerts });
  } catch (error) {
    console.error('Certificate list error:', error);
    res.status(500).json({ error: 'Failed to fetch certificates' });
  }
});

// ===========================
// Enrollment Routes
// ===========================
app.get('/api/enrollments', authenticateToken, async (req, res) => {
  try {
    const userEnrollments = await db.select({
      enrollmentId: enrollments.id,
      status: enrollments.status,
      startedAt: enrollments.startedAt,
      completedAt: enrollments.completedAt,
      expiresAt: enrollments.expiresAt,
      courseId: courses.id,
      courseName: courses.name,
      courseSlug: courses.slug,
      durationHours: courses.durationHours,
      description: courses.description,
    })
    .from(enrollments)
    .innerJoin(courses, eq(enrollments.courseId, courses.id))
    .where(eq(enrollments.userId, req.user.id));
    
    // For each enrollment, calculate progress
    const enrollmentsWithProgress = await Promise.all(
      userEnrollments.map(async (enrollment) => {
        // Get all modules for this course
        const modules = await db
          .select({ id: courseModules.id })
          .from(courseModules)
          .where(and(eq(courseModules.courseId, enrollment.courseId), eq(courseModules.isActive, true)));

        // Get completed modules
        const completedModules = await db
          .select({ id: moduleProgress.id })
          .from(moduleProgress)
          .where(and(
            eq(moduleProgress.enrollmentId, enrollment.enrollmentId),
            eq(moduleProgress.status, 'completed')
          ));

        const totalModules = modules.length;
        const completedCount = completedModules.length;
        const progressPercent = totalModules > 0 ? Math.round((completedCount / totalModules) * 100) : 0;

        return {
          id: enrollment.enrollmentId,
          courseId: enrollment.courseId,
          courseName: enrollment.courseName,
          courseSlug: enrollment.courseSlug,
          durationHours: enrollment.durationHours,
          description: enrollment.description,
          status: enrollment.status,
          startedAt: enrollment.startedAt,
          completedAt: enrollment.completedAt,
          expiresAt: enrollment.expiresAt,
          progress: {
            completedModules: completedCount,
            totalModules: totalModules,
            percent: progressPercent,
          },
        };
      })
    );
    
    res.json({ enrollments: enrollmentsWithProgress });
  } catch (error) {
    console.error('Enrollments error:', error);
    res.status(500).json({ error: 'Failed to fetch enrollments' });
  }
});

// ===========================
// Admin Routes
// ===========================
app.get('/api/admin/dashboard', authenticateToken, requireAdmin, async (req, res) => {
  try {
    const totalStudents = await db.select().from(users).where(eq(users.role, 'student'));
    const activeEnrollments = await db.select().from(enrollments).where(eq(enrollments.status, 'active'));
    const allCertificates = await db.select().from(certificates);
    
    res.json({
      totalStudents: totalStudents.length,
      activeEnrollments: activeEnrollments.length,
      certificatesIssued: allCertificates.length,
      revenueThisMonth: 0, // Would calculate from payments
      pendingIdVerifications: 0,
      recentEnrollments: []
    });
  } catch (error) {
    console.error('Dashboard error:', error);
    res.status(500).json({ error: 'Failed to fetch dashboard data' });
  }
});

app.get('/api/admin/courses', authenticateToken, requireAdmin, async (req, res) => {
  try {
    const allCourses = await db.select({
      course: courses,
      state: states
    })
    .from(courses)
    .leftJoin(states, eq(courses.stateId, states.id));
    
    // Get modules for each course
    const coursesWithModules = await Promise.all(allCourses.map(async (c) => {
      const modules = await db.select().from(courseModules)
        .where(eq(courseModules.courseId, c.course.id))
        .orderBy(courseModules.orderIndex);
      
      return {
        ...c.course,
        state: c.state,
        modules: modules
      };
    }));
    
    res.json({ courses: coursesWithModules });
  } catch (error) {
    console.error('Admin courses error:', error);
    res.status(500).json({ error: 'Failed to fetch courses' });
  }
});

app.get('/api/admin/courses/:id/modules', authenticateToken, requireAdmin, async (req, res) => {
  try {
    const { id } = req.params;
    
    const modules = await db.select().from(courseModules)
      .where(eq(courseModules.courseId, id))
      .orderBy(courseModules.orderIndex);
    
    // Get quiz questions for each module
    const modulesWithQuizzes = await Promise.all(modules.map(async (m) => {
      const quizzes = await db.select().from(quizQuestions)
        .where(and(
          eq(quizQuestions.moduleId, m.id),
          eq(quizQuestions.questionType, 'quiz')
        ));
      
      return {
        ...m,
        quizQuestions: quizzes
      };
    }));
    
    res.json({ modules: modulesWithQuizzes });
  } catch (error) {
    console.error('Modules error:', error);
    res.status(500).json({ error: 'Failed to fetch modules' });
  }
});

app.get('/api/admin/courses/:id/final-exam', authenticateToken, requireAdmin, async (req, res) => {
  try {
    const { id } = req.params;
    
    // Get course details first
    const courseResult = await db.select().from(courses).where(eq(courses.id, id)).limit(1);
    const course = courseResult[0];
    
    if (!course) {
      return res.status(404).json({ error: 'Course not found' });
    }
    
    // Get final exam questions (questions not linked to a specific module or marked as final)
    const examQuestions = await db.select().from(quizQuestions)
      .where(and(
        eq(quizQuestions.courseId, id),
        eq(quizQuestions.questionType, 'final')
      ));
    
    res.json({ 
      course: {
        name: course.name,
        passingScore: course.passingScoreFinal,
        totalQuestions: course.finalExamQuestions
      },
      questions: examQuestions 
    });
  } catch (error) {
    console.error('Final exam error:', error);
    res.status(500).json({ error: 'Failed to fetch final exam' });
  }
});

app.get('/api/admin/students', authenticateToken, requireAdmin, async (req, res) => {
  try {
    const students = await db.select({
      id: users.id,
      email: users.email,
      firstName: users.firstName,
      lastName: users.lastName,
      phone: users.phone,
      createdAt: users.createdAt,
      isVerified: users.isVerified
    }).from(users).where(eq(users.role, 'student'));
    
    res.json({ students });
  } catch (error) {
    console.error('Students error:', error);
    res.status(500).json({ error: 'Failed to fetch students' });
  }
});

app.get('/api/admin/certificates', authenticateToken, requireAdmin, async (req, res) => {
  try {
    const allCerts = await db.select({
      certificate: certificates,
      user: users,
      course: courses
    })
    .from(certificates)
    .leftJoin(users, eq(certificates.userId, users.id))
    .leftJoin(courses, eq(certificates.courseId, courses.id))
    .orderBy(desc(certificates.issuedAt));
    
    res.json({ certificates: allCerts });
  } catch (error) {
    console.error('Certificates error:', error);
    res.status(500).json({ error: 'Failed to fetch certificates' });
  }
});

// ===========================
// Chat Routes
// ===========================
app.post('/api/chat/message', async (req, res) => {
  try {
    const { message, sessionId: clientSessionId } = req.body;
    
    if (!message || message.trim().length === 0) {
      return res.status(400).json({ error: 'Message is required' });
    }

    if (message.length > 1000) {
      return res.status(400).json({ error: 'Message too long (max 1000 characters)' });
    }

    // Get or create session
    let session;
    if (clientSessionId) {
      try {
        const sessions = await db.select().from(chatSessions).where(eq(chatSessions.id, clientSessionId));
        session = sessions[0];
      } catch (e) {
        console.warn('Could not look up session:', e.message);
      }
    }

    if (!session) {
      const newSessionId = uuidv4();
      try {
        await db.insert(chatSessions).values({
          id: newSessionId,
          sessionToken: uuidv4(),
        });
      } catch (e) {
        console.warn('Could not create session in DB:', e.message);
      }
      session = { id: newSessionId };
    }

    // Get recent chat history for context
    let recentMessages = [];
    try {
      recentMessages = await db
        .select()
        .from(chatMessages)
        .where(eq(chatMessages.sessionId, session.id))
        .limit(10);
    } catch (dbErr) {
      console.warn('Could not fetch chat history, continuing without:', dbErr.message);
    }

    // Build messages array for OpenAI
    const aiMessages = [
      { role: 'system', content: CHAT_SYSTEM_PROMPT },
      ...recentMessages.map(m => ({
        role: m.role === 'user' ? 'user' : 'assistant',
        content: m.content,
      })),
      { role: 'user', content: message },
    ];

    // Check if OpenAI API key is configured
    if (!process.env.OPENAI_API_KEY) {
      // Provide a helpful fallback response without OpenAI
      const fallbackResponses = {
        'course information': "We offer three Florida-approved courses:\n\n**4-Hour Basic Driver Improvement** ($19) - For first-time offenders and minor violations\n\n**8-Hour Intermediate Course** ($58.95) - Our most popular course for point reduction\n\n**12-Hour Advanced Course** ($95) - For serious violations with maximum point reduction\n\nAll courses are 100% online and mobile-friendly!",
        'technical help': "For technical issues, please try:\n\n1. Clear your browser cache and cookies\n2. Try a different browser (Chrome, Firefox, Safari)\n3. Check your internet connection\n\nIf issues persist, email us at support@quickpasstrafficschool.com",
        'how to register': "To register:\n\n1. Click 'Register' in the top menu\n2. Enter your personal information\n3. Choose your course\n4. Complete payment\n5. Start learning immediately!\n\nNeed help? Contact support@quickpasstrafficschool.com",
        'payment questions': "We accept all major credit cards and PayPal. Your payment is secure and encrypted.\n\nRefund Policy: Full refund available before starting the course. Contact support@quickpasstrafficschool.com for assistance.",
      };

      const lowerMessage = message.toLowerCase();
      let reply = "Thanks for your message! I'm here to help with course information, registration, technical support, and more. What can I assist you with today?\n\nFor immediate assistance, email support@quickpasstrafficschool.com";

      for (const [key, response] of Object.entries(fallbackResponses)) {
        if (lowerMessage.includes(key.split(' ')[0])) {
          reply = response;
          break;
        }
      }

      // Save messages
      try {
        await db.insert(chatMessages).values([
          { id: uuidv4(), sessionId: session.id, role: 'user', content: message },
          { id: uuidv4(), sessionId: session.id, role: 'assistant', content: reply },
        ]);
      } catch (e) {
        console.warn('Could not save fallback messages:', e.message);
      }

      return res.json({ reply, sessionId: session.id });
    }

    // Call OpenAI
    const completion = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: aiMessages,
      max_tokens: 500,
      temperature: 0.7,
    });

    const reply = completion.choices[0].message.content;

    // Save messages to database
    try {
      await db.insert(chatMessages).values([
        { id: uuidv4(), sessionId: session.id, role: 'user', content: message },
        { id: uuidv4(), sessionId: session.id, role: 'assistant', content: reply },
      ]);
    } catch (e) {
      console.warn('Could not save chat messages:', e.message);
    }

    res.json({ reply, sessionId: session.id });
  } catch (error) {
    console.error('Chat error:', error);
    res.status(500).json({ 
      reply: "I'm having trouble connecting right now. Please try again or contact support@quickpasstrafficschool.com for immediate help.",
      error: 'Chat service temporarily unavailable' 
    });
  }
});

// ===========================
// Catch-all for SPA routing
// ===========================
app.use((req, res, next) => {
  // If it's an API route that wasn't matched, return 404
  if (req.path.startsWith('/api/')) {
    return res.status(404).json({ error: 'API endpoint not found' });
  }
  
  // Determine file path
  let filePath = req.path;
  
  // If path doesn't have an extension, try adding .html
  if (!path.extname(filePath)) {
    filePath = filePath + '.html';
  }
  
  // Serve the file
  res.sendFile(path.join(__dirname, filePath), (err) => {
    if (err) {
      // If file not found, serve index.html for SPA routing
      res.sendFile(path.join(__dirname, 'index.html'));
    }
  });
});

// ===========================
// Start Server
// ===========================
app.listen(PORT, () => {
  console.log('');
  console.log('🚀 Quick Pass Traffic School - Local Dev Server');
  console.log('================================================');
  console.log(`📍 Local:    http://localhost:${PORT}`);
  console.log(`📍 Admin:    http://localhost:${PORT}/admin/`);
  console.log(`📍 Curriculum: http://localhost:${PORT}/admin/curriculum.html`);
  console.log('');
  console.log('📧 Admin Login: admin@quickpasstrafficschool.com');
  console.log('🔑 Password:    Admin123!');
  console.log('');
});
