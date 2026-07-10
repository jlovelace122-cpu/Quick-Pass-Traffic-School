import 'dotenv/config';
import { db } from './index.js';
import {
  users,
  courses,
  enrollments,
  courseModules,
  moduleProgress,
  quizQuestions,
  certificates,
} from './schema.js';
import { eq, and } from 'drizzle-orm';
import { v4 as uuidv4 } from 'uuid';

const BASE_URL = 'http://localhost:3000';
const TEST_EMAIL = 'test4hr@quickpasstrafficschool.com';
const TEST_PASSWORD = 'Test123!';

async function ensureEnrollment(userId, courseId) {
  const existing = await db
    .select()
    .from(enrollments)
    .where(and(eq(enrollments.userId, userId), eq(enrollments.courseId, courseId)))
    .get();

  if (existing) return existing;

  const expiresAt = new Date();
  expiresAt.setDate(expiresAt.getDate() + 30);

  const enrollment = {
    id: uuidv4(),
    userId,
    courseId,
    status: 'active',
    expiresAt: expiresAt.toISOString(),
  };

  await db.insert(enrollments).values(enrollment);
  return enrollment;
}

async function completeAllModules(enrollmentId, courseId) {
  const modules = await db
    .select()
    .from(courseModules)
    .where(and(eq(courseModules.courseId, courseId), eq(courseModules.isActive, true)));

  for (const m of modules) {
    const existing = await db
      .select()
      .from(moduleProgress)
      .where(and(eq(moduleProgress.enrollmentId, enrollmentId), eq(moduleProgress.moduleId, m.id)))
      .get();

    if (existing) {
      await db
        .update(moduleProgress)
        .set({ status: 'completed', completedAt: new Date().toISOString() })
        .where(eq(moduleProgress.id, existing.id));
    } else {
      await db.insert(moduleProgress).values({
        id: uuidv4(),
        enrollmentId,
        moduleId: m.id,
        status: 'completed',
        completedAt: new Date().toISOString(),
      });
    }
  }

  return modules.length;
}

async function run() {
  // 1) Basic API health check
  const health = await fetch(`${BASE_URL}/api/courses?state=FL`);
  if (!health.ok) {
    throw new Error(`Local API not reachable: ${health.status}`);
  }

  // 2) Login seeded user for API-auth flows
  const loginResp = await fetch(`${BASE_URL}/api/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email: TEST_EMAIL, password: TEST_PASSWORD }),
  });
  const loginData = await loginResp.json();
  if (!loginResp.ok) {
    throw new Error(`Login failed: ${JSON.stringify(loginData)}`);
  }
  const token = loginData.token;

  const user = await db.select().from(users).where(eq(users.email, TEST_EMAIL)).get();
  if (!user) throw new Error('Seeded test user missing');

  const activeCourses = await db.select().from(courses).where(eq(courses.isActive, true));

  const summary = [];

  for (const c of activeCourses) {
    const enrollment = await ensureEnrollment(user.id, c.id);
    const moduleCount = await completeAllModules(enrollment.id, c.id);

    const finals = await db
      .select()
      .from(quizQuestions)
      .where(and(eq(quizQuestions.courseId, c.id), eq(quizQuestions.isFinalExam, true), eq(quizQuestions.isActive, true)));

    // Use correct answers from seeded data for deterministic pass
    const answers = finals.map((q) => ({ questionId: q.id, answer: q.correctAnswer }));

    const submitResp = await fetch(`${BASE_URL}/api/quiz/submit-final`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ enrollmentId: enrollment.id, answers }),
    });

    const submitData = await submitResp.json();

    // Verify a certificate exists for enrollment
    const cert = await db
      .select()
      .from(certificates)
      .where(eq(certificates.enrollmentId, enrollment.id))
      .get();

    summary.push({
      course: c.slug,
      modules: moduleCount,
      finalQuestions: finals.length,
      submitStatus: submitResp.status,
      passed: !!submitData.passed,
      score: submitData.score ?? null,
      certificateCreated: !!cert,
    });
  }

  console.log('\n=== NON-PAYMENT E2E SUMMARY ===');
  for (const row of summary) {
    console.log(
      `${row.course} | modules=${row.modules} | finalQ=${row.finalQuestions} | status=${row.submitStatus} | passed=${row.passed} | score=${row.score} | cert=${row.certificateCreated}`
    );
  }

  const failed = summary.filter((s) => !s.passed || !s.certificateCreated || s.submitStatus !== 200);
  if (failed.length > 0) {
    console.log('\nFAILED COURSES:');
    failed.forEach((f) => console.log(`- ${f.course}`));
    process.exit(1);
  }

  console.log('\nAll non-payment E2E checks passed.');
}

run().catch((err) => {
  console.error('Non-payment E2E run failed:', err.message);
  process.exit(1);
});
