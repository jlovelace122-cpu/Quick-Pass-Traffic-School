import { db } from '../../db/index.js';
import { courses, courseModules, states, enrollments, moduleProgress, quizQuestions } from '../../db/schema.js';
import { eq, and, asc } from 'drizzle-orm';
import { authenticate, jsonResponse, handleCors } from '../../lib/auth.js';

export const config = {
  runtime: 'edge',
};

export default async function handler(req) {
  if (req.method === 'OPTIONS') {
    return handleCors();
  }

  const url = new URL(req.url);
  const pathParts = url.pathname.replace('/api/courses/', '').split('/');
  const courseSlug = pathParts[0];
  const action = pathParts[1];

  try {
    // List all courses
    if (!courseSlug || courseSlug === '') {
      return await listCourses(req);
    }

    // Get specific course
    if (!action) {
      return await getCourse(req, courseSlug);
    }

    // Course modules
    if (action === 'modules') {
      return await getCourseModules(req, courseSlug, pathParts[2]);
    }

    // Enroll in course
    if (action === 'enroll') {
      return await enrollInCourse(req, courseSlug);
    }

    return jsonResponse({ error: 'Not found' }, 404);
  } catch (error) {
    console.error('Courses error:', error);
    return jsonResponse({ error: 'Internal server error' }, 500);
  }
}

async function listCourses(req) {
  if (req.method !== 'GET') {
    return jsonResponse({ error: 'Method not allowed' }, 405);
  }

  const url = new URL(req.url);
  const stateCode = url.searchParams.get('state') || 'FL';

  // Get state
  const state = await db.select().from(states).where(eq(states.code, stateCode)).get();

  if (!state || !state.isActive) {
    return jsonResponse({ error: 'State not found or not available' }, 404);
  }

  // Get courses for state
  const courseList = await db
    .select({
      id: courses.id,
      name: courses.name,
      slug: courses.slug,
      description: courses.description,
      durationHours: courses.durationHours,
      price: courses.price,
      passingScoreFinal: courses.passingScoreFinal,
      finalExamQuestions: courses.finalExamQuestions,
    })
    .from(courses)
    .where(and(eq(courses.stateId, state.id), eq(courses.isActive, true)))
    .orderBy(asc(courses.durationHours));

  return jsonResponse({
    state: {
      code: state.code,
      name: state.name,
    },
    courses: courseList,
  });
}

async function getCourse(req, slug) {
  if (req.method !== 'GET') {
    return jsonResponse({ error: 'Method not allowed' }, 405);
  }

  const course = await db
    .select({
      id: courses.id,
      name: courses.name,
      slug: courses.slug,
      description: courses.description,
      durationHours: courses.durationHours,
      price: courses.price,
      passingScoreQuiz: courses.passingScoreQuiz,
      passingScoreFinal: courses.passingScoreFinal,
      finalExamQuestions: courses.finalExamQuestions,
      stateId: courses.stateId,
    })
    .from(courses)
    .where(eq(courses.slug, slug))
    .get();

  if (!course) {
    return jsonResponse({ error: 'Course not found' }, 404);
  }

  // Get state info
  const state = await db.select().from(states).where(eq(states.id, course.stateId)).get();

  // Get module count
  const modules = await db
    .select({ id: courseModules.id, title: courseModules.title, orderIndex: courseModules.orderIndex })
    .from(courseModules)
    .where(and(eq(courseModules.courseId, course.id), eq(courseModules.isActive, true)))
    .orderBy(asc(courseModules.orderIndex));

  return jsonResponse({
    ...course,
    state: {
      code: state.code,
      name: state.name,
    },
    moduleCount: modules.length,
    modules: modules.map(m => ({ id: m.id, title: m.title, orderIndex: m.orderIndex })),
  });
}

async function getCourseModules(req, courseSlug, moduleId) {
  // Require authentication
  const { user, error: authError } = authenticate(req);
  if (authError) {
    return jsonResponse({ error: authError }, 401);
  }

  const course = await db.select().from(courses).where(eq(courses.slug, courseSlug)).get();
  if (!course) {
    return jsonResponse({ error: 'Course not found' }, 404);
  }

  // Check enrollment
  const enrollment = await db
    .select()
    .from(enrollments)
    .where(and(eq(enrollments.userId, user.userId), eq(enrollments.courseId, course.id), eq(enrollments.status, 'active')))
    .get();

  if (!enrollment) {
    return jsonResponse({ error: 'You are not enrolled in this course' }, 403);
  }

  // Get specific module or all modules
  if (moduleId) {
    const module = await db
      .select()
      .from(courseModules)
      .where(and(eq(courseModules.id, moduleId), eq(courseModules.courseId, course.id)))
      .get();

    if (!module) {
      return jsonResponse({ error: 'Module not found' }, 404);
    }

    // Get module progress
    const progress = await db
      .select()
      .from(moduleProgress)
      .where(and(eq(moduleProgress.enrollmentId, enrollment.id), eq(moduleProgress.moduleId, moduleId)))
      .get();

    // Get quiz questions for this module (don't include correct answers)
    const questions = await db
      .select({
        id: quizQuestions.id,
        questionText: quizQuestions.questionText,
        questionType: quizQuestions.questionType,
        options: quizQuestions.options,
        orderIndex: quizQuestions.orderIndex,
      })
      .from(quizQuestions)
      .where(and(eq(quizQuestions.moduleId, moduleId), eq(quizQuestions.isActive, true)))
      .orderBy(asc(quizQuestions.orderIndex));

    return jsonResponse({
      module: {
        id: module.id,
        title: module.title,
        description: module.description,
        content: module.content,
        orderIndex: module.orderIndex,
        estimatedMinutes: module.estimatedMinutes,
      },
      progress: progress || { status: 'not_started', timeSpentSeconds: 0 },
      quiz: {
        questions: questions.map(q => ({
          ...q,
          options: JSON.parse(q.options),
        })),
        passingScore: course.passingScoreQuiz,
      },
    });
  }

  // Get all modules with progress
  const modules = await db
    .select()
    .from(courseModules)
    .where(and(eq(courseModules.courseId, course.id), eq(courseModules.isActive, true)))
    .orderBy(asc(courseModules.orderIndex));

  const modulesWithProgress = await Promise.all(
    modules.map(async (module) => {
      const progress = await db
        .select()
        .from(moduleProgress)
        .where(and(eq(moduleProgress.enrollmentId, enrollment.id), eq(moduleProgress.moduleId, module.id)))
        .get();

      return {
        id: module.id,
        title: module.title,
        description: module.description,
        orderIndex: module.orderIndex,
        estimatedMinutes: module.estimatedMinutes,
        status: progress?.status || 'not_started',
        completedAt: progress?.completedAt,
      };
    })
  );

  return jsonResponse({
    courseId: course.id,
    courseName: course.name,
    enrollmentId: enrollment.id,
    modules: modulesWithProgress,
    passingScoreQuiz: course.passingScoreQuiz,
    passingScoreFinal: course.passingScoreFinal,
  });
}

async function enrollInCourse(req, courseSlug) {
  // This is handled by the payment flow
  // See /api/payments/create-intent
  return jsonResponse({ 
    error: 'Please use the payment flow to enroll',
    redirectTo: `/checkout?course=${courseSlug}`,
  }, 400);
}
