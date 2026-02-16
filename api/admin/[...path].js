import Stripe from 'stripe';
import { db } from '../../db/index.js';
import { users, enrollments, payments, certificates, courses, idDocuments, quizAttempts, auditLog } from '../../db/schema.js';
import { eq, and, desc, sql, gte, lte } from 'drizzle-orm';
import { authenticate, isAdmin, jsonResponse, handleCors } from '../../lib/auth.js';
import { v4 as uuidv4 } from 'uuid';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export const config = {
  runtime: 'edge',
};

export default async function handler(req) {
  if (req.method === 'OPTIONS') {
    return handleCors();
  }

  // All admin routes require authentication and admin role
  const { user, error: authError } = authenticate(req);
  if (authError) {
    return jsonResponse({ error: authError }, 401);
  }

  if (!isAdmin(user)) {
    return jsonResponse({ error: 'Admin access required' }, 403);
  }

  const url = new URL(req.url);
  const path = url.pathname.replace('/api/admin/', '');

  try {
    switch (path) {
      case 'dashboard':
        return await getDashboard(req);
      case 'students':
        return await getStudents(req);
      case 'student':
        return await getStudent(req);
      case 'enrollments':
        return await getEnrollments(req);
      case 'payments':
        return await getPayments(req);
      case 'refund':
        return await processRefund(req, user);
      case 'certificates':
        return await getCertificates(req);
      case 'id-documents':
        return await getIdDocuments(req);
      case 'reports':
        return await generateReport(req);
      default:
        return jsonResponse({ error: 'Not found' }, 404);
    }
  } catch (error) {
    console.error('Admin error:', error);
    return jsonResponse({ error: 'Internal server error' }, 500);
  }
}

async function getDashboard(req) {
  if (req.method !== 'GET') {
    return jsonResponse({ error: 'Method not allowed' }, 405);
  }

  // Get date range (last 30 days by default)
  const url = new URL(req.url);
  const days = parseInt(url.searchParams.get('days') || '30');
  const startDate = new Date();
  startDate.setDate(startDate.getDate() - days);

  // Total students
  const totalStudents = await db.select({ count: sql`count(*)` }).from(users).where(eq(users.role, 'student'));

  // Active enrollments
  const activeEnrollments = await db
    .select({ count: sql`count(*)` })
    .from(enrollments)
    .where(eq(enrollments.status, 'active'));

  // Completed enrollments
  const completedEnrollments = await db
    .select({ count: sql`count(*)` })
    .from(enrollments)
    .where(eq(enrollments.status, 'completed'));

  // Total revenue (successful payments)
  const totalRevenue = await db
    .select({ total: sql`sum(amount)` })
    .from(payments)
    .where(eq(payments.status, 'succeeded'));

  // Revenue in period
  const revenueInPeriod = await db
    .select({ total: sql`sum(amount)` })
    .from(payments)
    .where(and(eq(payments.status, 'succeeded'), gte(payments.createdAt, startDate.toISOString())));

  // Certificates issued
  const certificatesIssued = await db.select({ count: sql`count(*)` }).from(certificates);

  // Pending ID verifications
  const pendingVerifications = await db
    .select({ count: sql`count(*)` })
    .from(idDocuments)
    .where(eq(idDocuments.status, 'pending'));

  // Recent enrollments
  const recentEnrollments = await db
    .select({
      id: enrollments.id,
      userId: enrollments.userId,
      courseId: enrollments.courseId,
      status: enrollments.status,
      createdAt: enrollments.createdAt,
    })
    .from(enrollments)
    .orderBy(desc(enrollments.createdAt))
    .limit(10);

  // Add user and course details
  const enrichedEnrollments = await Promise.all(
    recentEnrollments.map(async (enrollment) => {
      const student = await db.select().from(users).where(eq(users.id, enrollment.userId)).get();
      const course = await db.select().from(courses).where(eq(courses.id, enrollment.courseId)).get();
      return {
        ...enrollment,
        studentName: student ? `${student.firstName} ${student.lastName}` : 'Unknown',
        studentEmail: student?.email,
        courseName: course?.name,
      };
    })
  );

  return jsonResponse({
    stats: {
      totalStudents: totalStudents[0]?.count || 0,
      activeEnrollments: activeEnrollments[0]?.count || 0,
      completedEnrollments: completedEnrollments[0]?.count || 0,
      totalRevenue: totalRevenue[0]?.total || 0,
      revenueInPeriod: revenueInPeriod[0]?.total || 0,
      certificatesIssued: certificatesIssued[0]?.count || 0,
      pendingVerifications: pendingVerifications[0]?.count || 0,
    },
    recentEnrollments: enrichedEnrollments,
    periodDays: days,
  });
}

async function getStudents(req) {
  if (req.method !== 'GET') {
    return jsonResponse({ error: 'Method not allowed' }, 405);
  }

  const url = new URL(req.url);
  const page = parseInt(url.searchParams.get('page') || '1');
  const limit = parseInt(url.searchParams.get('limit') || '20');
  const search = url.searchParams.get('search') || '';
  const offset = (page - 1) * limit;

  let query = db
    .select({
      id: users.id,
      email: users.email,
      firstName: users.firstName,
      lastName: users.lastName,
      phone: users.phone,
      city: users.city,
      state: users.state,
      isVerified: users.isVerified,
      createdAt: users.createdAt,
    })
    .from(users)
    .where(eq(users.role, 'student'))
    .orderBy(desc(users.createdAt))
    .limit(limit)
    .offset(offset);

  const students = await query;

  // Get enrollment count for each student
  const studentsWithEnrollments = await Promise.all(
    students.map(async (student) => {
      const enrollmentCount = await db
        .select({ count: sql`count(*)` })
        .from(enrollments)
        .where(eq(enrollments.userId, student.id));
      return {
        ...student,
        enrollmentCount: enrollmentCount[0]?.count || 0,
      };
    })
  );

  // Total count
  const totalCount = await db.select({ count: sql`count(*)` }).from(users).where(eq(users.role, 'student'));

  return jsonResponse({
    students: studentsWithEnrollments,
    pagination: {
      page,
      limit,
      total: totalCount[0]?.count || 0,
      totalPages: Math.ceil((totalCount[0]?.count || 0) / limit),
    },
  });
}

async function getStudent(req) {
  if (req.method !== 'GET') {
    return jsonResponse({ error: 'Method not allowed' }, 405);
  }

  const url = new URL(req.url);
  const studentId = url.searchParams.get('id');

  if (!studentId) {
    return jsonResponse({ error: 'Student ID required' }, 400);
  }

  const student = await db.select().from(users).where(eq(users.id, studentId)).get();

  if (!student || student.role !== 'student') {
    return jsonResponse({ error: 'Student not found' }, 404);
  }

  // Get enrollments
  const studentEnrollments = await db
    .select()
    .from(enrollments)
    .where(eq(enrollments.userId, studentId))
    .orderBy(desc(enrollments.createdAt));

  // Enrich with course info
  const enrichedEnrollments = await Promise.all(
    studentEnrollments.map(async (enrollment) => {
      const course = await db.select().from(courses).where(eq(courses.id, enrollment.courseId)).get();
      return { ...enrollment, courseName: course?.name };
    })
  );

  // Get payments
  const studentPayments = await db
    .select()
    .from(payments)
    .where(eq(payments.userId, studentId))
    .orderBy(desc(payments.createdAt));

  // Get certificates
  const studentCertificates = await db
    .select()
    .from(certificates)
    .where(eq(certificates.userId, studentId));

  // Get ID documents
  const studentDocuments = await db
    .select({
      id: idDocuments.id,
      documentType: idDocuments.documentType,
      status: idDocuments.status,
      uploadedAt: idDocuments.uploadedAt,
      verifiedAt: idDocuments.verifiedAt,
    })
    .from(idDocuments)
    .where(eq(idDocuments.userId, studentId));

  return jsonResponse({
    student: {
      ...student,
      passwordHash: undefined, // Don't expose password hash
    },
    enrollments: enrichedEnrollments,
    payments: studentPayments,
    certificates: studentCertificates,
    idDocuments: studentDocuments,
  });
}

async function getEnrollments(req) {
  if (req.method !== 'GET') {
    return jsonResponse({ error: 'Method not allowed' }, 405);
  }

  const url = new URL(req.url);
  const page = parseInt(url.searchParams.get('page') || '1');
  const limit = parseInt(url.searchParams.get('limit') || '20');
  const status = url.searchParams.get('status');
  const offset = (page - 1) * limit;

  let whereClause = status ? eq(enrollments.status, status) : undefined;

  const enrollmentsList = await db
    .select()
    .from(enrollments)
    .where(whereClause)
    .orderBy(desc(enrollments.createdAt))
    .limit(limit)
    .offset(offset);

  // Enrich with student and course info
  const enrichedEnrollments = await Promise.all(
    enrollmentsList.map(async (enrollment) => {
      const student = await db.select().from(users).where(eq(users.id, enrollment.userId)).get();
      const course = await db.select().from(courses).where(eq(courses.id, enrollment.courseId)).get();
      return {
        ...enrollment,
        studentName: student ? `${student.firstName} ${student.lastName}` : 'Unknown',
        studentEmail: student?.email,
        courseName: course?.name,
        courseHours: course?.durationHours,
      };
    })
  );

  const totalCount = await db.select({ count: sql`count(*)` }).from(enrollments).where(whereClause);

  return jsonResponse({
    enrollments: enrichedEnrollments,
    pagination: {
      page,
      limit,
      total: totalCount[0]?.count || 0,
      totalPages: Math.ceil((totalCount[0]?.count || 0) / limit),
    },
  });
}

async function getPayments(req) {
  if (req.method !== 'GET') {
    return jsonResponse({ error: 'Method not allowed' }, 405);
  }

  const url = new URL(req.url);
  const page = parseInt(url.searchParams.get('page') || '1');
  const limit = parseInt(url.searchParams.get('limit') || '20');
  const status = url.searchParams.get('status');
  const offset = (page - 1) * limit;

  let whereClause = status ? eq(payments.status, status) : undefined;

  const paymentsList = await db
    .select()
    .from(payments)
    .where(whereClause)
    .orderBy(desc(payments.createdAt))
    .limit(limit)
    .offset(offset);

  // Enrich with student info
  const enrichedPayments = await Promise.all(
    paymentsList.map(async (payment) => {
      const student = await db.select().from(users).where(eq(users.id, payment.userId)).get();
      return {
        ...payment,
        studentName: student ? `${student.firstName} ${student.lastName}` : 'Unknown',
        studentEmail: student?.email,
      };
    })
  );

  const totalCount = await db.select({ count: sql`count(*)` }).from(payments).where(whereClause);

  return jsonResponse({
    payments: enrichedPayments,
    pagination: {
      page,
      limit,
      total: totalCount[0]?.count || 0,
      totalPages: Math.ceil((totalCount[0]?.count || 0) / limit),
    },
  });
}

async function processRefund(req, adminUser) {
  if (req.method !== 'POST') {
    return jsonResponse({ error: 'Method not allowed' }, 405);
  }

  const body = await req.json();
  const { paymentId, reason } = body;

  if (!paymentId || !reason) {
    return jsonResponse({ error: 'Payment ID and reason required' }, 400);
  }

  const payment = await db.select().from(payments).where(eq(payments.id, paymentId)).get();

  if (!payment) {
    return jsonResponse({ error: 'Payment not found' }, 404);
  }

  if (payment.status !== 'succeeded') {
    return jsonResponse({ error: 'Can only refund successful payments' }, 400);
  }

  if (payment.status === 'refunded') {
    return jsonResponse({ error: 'Payment already refunded' }, 400);
  }

  // Process refund through Stripe
  try {
    await stripe.refunds.create({
      payment_intent: payment.stripePaymentIntentId,
    });

    // Update payment record
    await db
      .update(payments)
      .set({
        status: 'refunded',
        refundedAt: new Date().toISOString(),
        refundReason: reason,
        refundedBy: adminUser.userId,
      })
      .where(eq(payments.id, paymentId));

    // Update enrollment status
    if (payment.enrollmentId) {
      await db
        .update(enrollments)
        .set({ status: 'refunded' })
        .where(eq(enrollments.id, payment.enrollmentId));
    }

    // Log the action
    await db.insert(auditLog).values({
      id: uuidv4(),
      userId: adminUser.userId,
      action: 'refund_processed',
      entityType: 'payment',
      entityId: paymentId,
      details: JSON.stringify({ reason, amount: payment.amount }),
    });

    return jsonResponse({
      success: true,
      message: 'Refund processed successfully',
    });
  } catch (error) {
    console.error('Stripe refund error:', error);
    return jsonResponse({ error: 'Failed to process refund' }, 500);
  }
}

async function getCertificates(req) {
  if (req.method !== 'GET') {
    return jsonResponse({ error: 'Method not allowed' }, 405);
  }

  const url = new URL(req.url);
  const page = parseInt(url.searchParams.get('page') || '1');
  const limit = parseInt(url.searchParams.get('limit') || '20');
  const offset = (page - 1) * limit;

  const certificatesList = await db
    .select()
    .from(certificates)
    .orderBy(desc(certificates.issuedAt))
    .limit(limit)
    .offset(offset);

  // Enrich with student and course info
  const enrichedCertificates = await Promise.all(
    certificatesList.map(async (cert) => {
      const student = await db.select().from(users).where(eq(users.id, cert.userId)).get();
      const course = await db.select().from(courses).where(eq(courses.id, cert.courseId)).get();
      return {
        ...cert,
        studentName: student ? `${student.firstName} ${student.lastName}` : 'Unknown',
        studentEmail: student?.email,
        courseName: course?.name,
        courseHours: course?.durationHours,
      };
    })
  );

  const totalCount = await db.select({ count: sql`count(*)` }).from(certificates);

  return jsonResponse({
    certificates: enrichedCertificates,
    pagination: {
      page,
      limit,
      total: totalCount[0]?.count || 0,
      totalPages: Math.ceil((totalCount[0]?.count || 0) / limit),
    },
  });
}

async function getIdDocuments(req) {
  if (req.method !== 'GET') {
    return jsonResponse({ error: 'Method not allowed' }, 405);
  }

  const url = new URL(req.url);
  const status = url.searchParams.get('status') || 'pending';

  const documents = await db
    .select({
      id: idDocuments.id,
      userId: idDocuments.userId,
      documentType: idDocuments.documentType,
      status: idDocuments.status,
      uploadedAt: idDocuments.uploadedAt,
      verifiedAt: idDocuments.verifiedAt,
    })
    .from(idDocuments)
    .where(eq(idDocuments.status, status))
    .orderBy(desc(idDocuments.uploadedAt));

  // Enrich with student info
  const enrichedDocuments = await Promise.all(
    documents.map(async (doc) => {
      const student = await db.select().from(users).where(eq(users.id, doc.userId)).get();
      return {
        ...doc,
        studentName: student ? `${student.firstName} ${student.lastName}` : 'Unknown',
        studentEmail: student?.email,
      };
    })
  );

  return jsonResponse({
    documents: enrichedDocuments,
  });
}

async function generateReport(req) {
  if (req.method !== 'GET') {
    return jsonResponse({ error: 'Method not allowed' }, 405);
  }

  const url = new URL(req.url);
  const reportType = url.searchParams.get('type') || 'completions';
  const startDate = url.searchParams.get('start');
  const endDate = url.searchParams.get('end');

  // Default to last 30 days
  const start = startDate ? new Date(startDate) : new Date(Date.now() - 30 * 24 * 60 * 60 * 1000);
  const end = endDate ? new Date(endDate) : new Date();

  let reportData;

  switch (reportType) {
    case 'completions':
      reportData = await db
        .select({
          id: certificates.id,
          certificateNumber: certificates.certificateNumber,
          issuedAt: certificates.issuedAt,
          finalExamScore: certificates.finalExamScore,
          userId: certificates.userId,
          courseId: certificates.courseId,
        })
        .from(certificates)
        .where(and(gte(certificates.issuedAt, start.toISOString()), lte(certificates.issuedAt, end.toISOString())))
        .orderBy(desc(certificates.issuedAt));

      // Enrich
      reportData = await Promise.all(
        reportData.map(async (item) => {
          const student = await db.select().from(users).where(eq(users.id, item.userId)).get();
          const course = await db.select().from(courses).where(eq(courses.id, item.courseId)).get();
          return {
            ...item,
            studentName: student ? `${student.firstName} ${student.lastName}` : 'Unknown',
            studentLicense: student?.licenseNumber,
            courseName: course?.name,
            courseHours: course?.durationHours,
          };
        })
      );
      break;

    case 'revenue':
      reportData = await db
        .select()
        .from(payments)
        .where(and(eq(payments.status, 'succeeded'), gte(payments.createdAt, start.toISOString()), lte(payments.createdAt, end.toISOString())))
        .orderBy(desc(payments.createdAt));
      break;

    case 'enrollments':
      reportData = await db
        .select()
        .from(enrollments)
        .where(and(gte(enrollments.createdAt, start.toISOString()), lte(enrollments.createdAt, end.toISOString())))
        .orderBy(desc(enrollments.createdAt));

      // Enrich
      reportData = await Promise.all(
        reportData.map(async (item) => {
          const student = await db.select().from(users).where(eq(users.id, item.userId)).get();
          const course = await db.select().from(courses).where(eq(courses.id, item.courseId)).get();
          return {
            ...item,
            studentName: student ? `${student.firstName} ${student.lastName}` : 'Unknown',
            courseName: course?.name,
          };
        })
      );
      break;

    default:
      return jsonResponse({ error: 'Invalid report type' }, 400);
  }

  return jsonResponse({
    reportType,
    dateRange: { start: start.toISOString(), end: end.toISOString() },
    data: reportData,
    count: reportData.length,
  });
}
