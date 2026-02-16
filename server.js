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
const CHAT_SYSTEM_PROMPT = `You are a helpful customer service assistant for Quick Pass Traffic School, an online Florida-approved traffic school.

Your role is to help students with:
1. General questions about courses (4-hour, 8-hour, 12-hour)
2. Registration and enrollment assistance
3. Technical support (login issues, navigation help, browser compatibility)
4. Course content explanations (but NOT answering quiz or test questions directly)
5. Certificate and completion questions
6. Payment and refund inquiries

IMPORTANT RULES:
- NEVER provide direct answers to quiz or exam questions
- Be friendly, professional, and encouraging
- If you don't know something, suggest they contact support@quickpasstrafficschool.com

Course Information:
- 4-Hour Basic Driver Improvement ($19): For first-time offenders
- 8-Hour Intermediate Course ($58.95): Most popular, for point reduction
- 12-Hour Advanced Course ($95): For serious violations

Requirements:
- Must pass each module quiz with 70% to proceed
- Final exam requires 80% to pass
- Certificate issued immediately upon completion`;

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

// ===========================
// Enrollment Routes
// ===========================
app.get('/api/enrollments', authenticateToken, async (req, res) => {
  try {
    const userEnrollments = await db.select({
      enrollment: enrollments,
      course: courses
    })
    .from(enrollments)
    .innerJoin(courses, eq(enrollments.courseId, courses.id))
    .where(eq(enrollments.userId, req.user.id));
    
    res.json({ enrollments: userEnrollments });
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
      const sessions = await db.select().from(chatSessions).where(eq(chatSessions.id, clientSessionId));
      session = sessions[0];
    }

    if (!session) {
      const newSessionId = uuidv4();
      await db.insert(chatSessions).values({
        id: newSessionId,
        sessionToken: uuidv4(),
      });
      session = { id: newSessionId };
    }

    // Get recent chat history for context
    const recentMessages = await db
      .select()
      .from(chatMessages)
      .where(eq(chatMessages.sessionId, session.id))
      .limit(10);

    // Build messages array for OpenAI
    const aiMessages = [
      { role: 'system', content: CHAT_SYSTEM_PROMPT },
      ...recentMessages.map(m => ({
        role: m.role === 'bot' ? 'assistant' : m.role,
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
      await db.insert(chatMessages).values([
        { id: uuidv4(), sessionId: session.id, role: 'user', content: message },
        { id: uuidv4(), sessionId: session.id, role: 'bot', content: reply },
      ]);

      return res.json({ reply, sessionId: session.id });
    }

    // Call OpenAI
    const completion = await openai.chat.completions.create({
      model: 'gpt-4-turbo-preview',
      messages: aiMessages,
      max_tokens: 500,
      temperature: 0.7,
    });

    const reply = completion.choices[0].message.content;

    // Save messages to database
    await db.insert(chatMessages).values([
      { id: uuidv4(), sessionId: session.id, role: 'user', content: message },
      { id: uuidv4(), sessionId: session.id, role: 'bot', content: reply },
    ]);

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
