import { db } from '../../db/index.js';
import { quizQuestions, quizAttempts, moduleProgress, enrollments, courses, certificates } from '../../db/schema.js';
import { eq, and, asc } from 'drizzle-orm';
import { v4 as uuidv4 } from 'uuid';
import { authenticate, jsonResponse, handleCors } from '../../lib/auth.js';
import { validate, quizSubmissionSchema } from '../../lib/validation.js';

export default async function handler(req) {
  if (req.method === 'OPTIONS') {
    return handleCors();
  }

  const url = new URL(req.url);
  const path = url.pathname.replace('/api/quiz/', '');

  try {
    switch (path) {
      case 'submit':
        return await submitQuiz(req);
      case 'final-exam':
        return await getFinalExam(req);
      case 'submit-final':
        return await submitFinalExam(req);
      default:
        return jsonResponse({ error: 'Not found' }, 404);
    }
  } catch (error) {
    console.error('Quiz error:', error);
    return jsonResponse({ error: 'Internal server error' }, 500);
  }
}

async function submitQuiz(req) {
  if (req.method !== 'POST') {
    return jsonResponse({ error: 'Method not allowed' }, 405);
  }

  const { user, error: authError } = authenticate(req);
  if (authError) {
    return jsonResponse({ error: authError }, 401);
  }

  const body = await req.json();
  const { enrollmentId, moduleId, answers } = body;

  if (!enrollmentId || !moduleId || !answers) {
    return jsonResponse({ error: 'Missing required fields' }, 400);
  }

  // Verify enrollment
  const enrollment = await db
    .select()
    .from(enrollments)
    .where(and(eq(enrollments.id, enrollmentId), eq(enrollments.userId, user.userId)))
    .get();

  if (!enrollment) {
    return jsonResponse({ error: 'Enrollment not found' }, 404);
  }

  // Get course for passing score
  const course = await db.select().from(courses).where(eq(courses.id, enrollment.courseId)).get();

  // Get quiz questions with correct answers
  const questions = await db
    .select()
    .from(quizQuestions)
    .where(and(eq(quizQuestions.moduleId, moduleId), eq(quizQuestions.isActive, true)));

  // Grade the quiz
  let correctCount = 0;
  const gradedAnswers = [];

  for (const answer of answers) {
    const question = questions.find(q => q.id === answer.questionId);
    if (question) {
      const isCorrect = question.correctAnswer === answer.answer;
      if (isCorrect) correctCount++;
      gradedAnswers.push({
        questionId: answer.questionId,
        userAnswer: answer.answer,
        correctAnswer: question.correctAnswer,
        isCorrect,
        explanation: question.explanation,
      });
    }
  }

  const score = (correctCount / questions.length) * 100;
  const passed = score >= course.passingScoreQuiz;

  // Record quiz attempt
  const attemptId = uuidv4();
  await db.insert(quizAttempts).values({
    id: attemptId,
    enrollmentId,
    moduleId,
    isFinalExam: false,
    score,
    totalQuestions: questions.length,
    correctAnswers: correctCount,
    passed,
    answers: JSON.stringify(gradedAnswers),
    startedAt: new Date().toISOString(),
    completedAt: new Date().toISOString(),
  });

  // If passed, update module progress
  if (passed) {
    const existingProgress = await db
      .select()
      .from(moduleProgress)
      .where(and(eq(moduleProgress.enrollmentId, enrollmentId), eq(moduleProgress.moduleId, moduleId)))
      .get();

    if (existingProgress) {
      await db
        .update(moduleProgress)
        .set({
          status: 'completed',
          completedAt: new Date().toISOString(),
        })
        .where(eq(moduleProgress.id, existingProgress.id));
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

  return jsonResponse({
    attemptId,
    score: Math.round(score * 100) / 100,
    totalQuestions: questions.length,
    correctAnswers: correctCount,
    passed,
    passingScore: course.passingScoreQuiz,
    results: gradedAnswers,
    message: passed 
      ? 'Congratulations! You passed the quiz. You may proceed to the next module.'
      : `You need ${course.passingScoreQuiz}% to pass. Please review the material and try again.`,
  });
}

async function getFinalExam(req) {
  if (req.method !== 'GET') {
    return jsonResponse({ error: 'Method not allowed' }, 405);
  }

  const { user, error: authError } = authenticate(req);
  if (authError) {
    return jsonResponse({ error: authError }, 401);
  }

  const url = new URL(req.url);
  const enrollmentId = url.searchParams.get('enrollmentId');

  if (!enrollmentId) {
    return jsonResponse({ error: 'Enrollment ID required' }, 400);
  }

  // Verify enrollment
  const enrollment = await db
    .select()
    .from(enrollments)
    .where(and(eq(enrollments.id, enrollmentId), eq(enrollments.userId, user.userId)))
    .get();

  if (!enrollment) {
    return jsonResponse({ error: 'Enrollment not found' }, 404);
  }

  // Check if all modules are completed
  const allProgress = await db
    .select()
    .from(moduleProgress)
    .where(eq(moduleProgress.enrollmentId, enrollmentId));

  const course = await db.select().from(courses).where(eq(courses.id, enrollment.courseId)).get();

  // Get module count
  const moduleCount = await db
    .select({ id: quizQuestions.moduleId })
    .from(quizQuestions)
    .where(and(eq(quizQuestions.courseId, course.id), eq(quizQuestions.isFinalExam, false)))
    .groupBy(quizQuestions.moduleId);

  const completedModules = allProgress.filter(p => p.status === 'completed').length;

  if (completedModules < moduleCount.length) {
    return jsonResponse({ 
      error: 'You must complete all modules before taking the final exam',
      completedModules,
      totalModules: moduleCount.length,
    }, 403);
  }

  // Get final exam questions (randomized)
  const questions = await db
    .select({
      id: quizQuestions.id,
      questionText: quizQuestions.questionText,
      questionType: quizQuestions.questionType,
      options: quizQuestions.options,
    })
    .from(quizQuestions)
    .where(and(eq(quizQuestions.courseId, course.id), eq(quizQuestions.isFinalExam, true), eq(quizQuestions.isActive, true)))
    .orderBy(asc(quizQuestions.orderIndex))
    .limit(course.finalExamQuestions);

  // Shuffle questions
  const shuffledQuestions = questions
    .sort(() => Math.random() - 0.5)
    .map(q => ({
      ...q,
      options: JSON.parse(q.options).sort(() => Math.random() - 0.5),
    }));

  return jsonResponse({
    enrollmentId,
    courseName: course.name,
    totalQuestions: shuffledQuestions.length,
    passingScore: course.passingScoreFinal,
    questions: shuffledQuestions,
    timeLimit: null, // No time limit per Florida requirements
  });
}

async function submitFinalExam(req) {
  if (req.method !== 'POST') {
    return jsonResponse({ error: 'Method not allowed' }, 405);
  }

  const { user, error: authError } = authenticate(req);
  if (authError) {
    return jsonResponse({ error: authError }, 401);
  }

  const body = await req.json();
  const { enrollmentId, answers } = body;

  if (!enrollmentId || !answers) {
    return jsonResponse({ error: 'Missing required fields' }, 400);
  }

  // Verify enrollment
  const enrollment = await db
    .select()
    .from(enrollments)
    .where(and(eq(enrollments.id, enrollmentId), eq(enrollments.userId, user.userId)))
    .get();

  if (!enrollment) {
    return jsonResponse({ error: 'Enrollment not found' }, 404);
  }

  const course = await db.select().from(courses).where(eq(courses.id, enrollment.courseId)).get();

  // Get all submitted question IDs
  const questionIds = answers.map(a => a.questionId);

  // Get questions with correct answers
  const questions = await db
    .select()
    .from(quizQuestions)
    .where(and(eq(quizQuestions.courseId, course.id), eq(quizQuestions.isFinalExam, true)));

  // Grade the exam
  let correctCount = 0;
  const gradedAnswers = [];

  for (const answer of answers) {
    const question = questions.find(q => q.id === answer.questionId);
    if (question) {
      const isCorrect = question.correctAnswer === answer.answer;
      if (isCorrect) correctCount++;
      gradedAnswers.push({
        questionId: answer.questionId,
        userAnswer: answer.answer,
        correctAnswer: question.correctAnswer,
        isCorrect,
      });
    }
  }

  const score = (correctCount / answers.length) * 100;
  const passed = score >= course.passingScoreFinal;

  // Record attempt
  const attemptId = uuidv4();
  await db.insert(quizAttempts).values({
    id: attemptId,
    enrollmentId,
    moduleId: null,
    isFinalExam: true,
    score,
    totalQuestions: answers.length,
    correctAnswers: correctCount,
    passed,
    answers: JSON.stringify(gradedAnswers),
    startedAt: new Date().toISOString(),
    completedAt: new Date().toISOString(),
  });

  let certificate = null;

  // If passed, complete enrollment and issue certificate
  if (passed) {
    await db
      .update(enrollments)
      .set({
        status: 'completed',
        completedAt: new Date().toISOString(),
      })
      .where(eq(enrollments.id, enrollmentId));

    // Generate certificate
    const certificateNumber = `FL-${course.durationHours}HR-${Date.now()}-${Math.random().toString(36).substr(2, 9).toUpperCase()}`;
    const certificateId = uuidv4();

    await db.insert(certificates).values({
      id: certificateId,
      enrollmentId,
      userId: user.userId,
      courseId: course.id,
      certificateNumber,
      finalExamScore: score,
    });

    certificate = {
      id: certificateId,
      certificateNumber,
      issuedAt: new Date().toISOString(),
    };
  }

  return jsonResponse({
    attemptId,
    score: Math.round(score * 100) / 100,
    totalQuestions: answers.length,
    correctAnswers: correctCount,
    passed,
    passingScore: course.passingScoreFinal,
    certificate,
    message: passed
      ? 'Congratulations! You passed the final exam. Your certificate is ready for download.'
      : `You need ${course.passingScoreFinal}% to pass. You scored ${Math.round(score)}%. You may retake the exam.`,
  });
}
