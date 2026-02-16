import { sqliteTable, text, integer, real, blob } from 'drizzle-orm/sqlite-core';
import { sql } from 'drizzle-orm';

// ===========================
// Users Table
// ===========================
export const users = sqliteTable('users', {
  id: text('id').primaryKey(), // UUID
  email: text('email').notNull().unique(),
  passwordHash: text('password_hash').notNull(),
  firstName: text('first_name').notNull(),
  middleInitial: text('middle_initial'),
  lastName: text('last_name').notNull(),
  phone: text('phone'),
  address1: text('address1'),
  address2: text('address2'),
  city: text('city'),
  state: text('state'),
  zipCode: text('zip_code'),
  dateOfBirth: text('date_of_birth'),
  gender: text('gender'),
  licenseNumber: text('license_number'),
  licenseState: text('license_state'),
  ssn4: text('ssn4'), // Last 4 digits of SSN (for Florida verification)
  // Florida-specific fields
  floridaCourseType: text('florida_course_type'),
  citationNumber: text('citation_number'),
  county: text('county'),
  courtDueDate: text('court_due_date'),
  // Marketing
  referredBy: text('referred_by'),
  promoCode: text('promo_code'),
  optIn: integer('opt_in', { mode: 'boolean' }).default(true),
  // Account status
  role: text('role').default('student'), // 'student', 'admin'
  isVerified: integer('is_verified', { mode: 'boolean' }).default(false),
  createdAt: text('created_at').default(sql`CURRENT_TIMESTAMP`),
  updatedAt: text('updated_at').default(sql`CURRENT_TIMESTAMP`),
});

// ===========================
// ID Documents Table (Encrypted)
// ===========================
export const idDocuments = sqliteTable('id_documents', {
  id: text('id').primaryKey(),
  userId: text('user_id').notNull().references(() => users.id),
  documentType: text('document_type').notNull(), // 'drivers_license', 'state_id', 'passport'
  encryptedData: blob('encrypted_data').notNull(), // Encrypted file data
  encryptedFileName: text('encrypted_file_name').notNull(),
  iv: text('iv').notNull(), // Initialization vector for decryption
  uploadedAt: text('uploaded_at').default(sql`CURRENT_TIMESTAMP`),
  verifiedAt: text('verified_at'),
  verifiedBy: text('verified_by').references(() => users.id),
  status: text('status').default('pending'), // 'pending', 'verified', 'rejected'
});

// ===========================
// States Table
// ===========================
export const states = sqliteTable('states', {
  id: text('id').primaryKey(),
  code: text('code').notNull().unique(), // 'FL', 'TX', etc.
  name: text('name').notNull(),
  isActive: integer('is_active', { mode: 'boolean' }).default(false),
  requirements: text('requirements'), // JSON string with state-specific requirements
  createdAt: text('created_at').default(sql`CURRENT_TIMESTAMP`),
});

// ===========================
// Courses Table
// ===========================
export const courses = sqliteTable('courses', {
  id: text('id').primaryKey(),
  stateId: text('state_id').notNull().references(() => states.id),
  name: text('name').notNull(),
  slug: text('slug').notNull().unique(),
  description: text('description'),
  durationHours: integer('duration_hours').notNull(), // 4, 8, or 12
  price: real('price').notNull(),
  passingScoreQuiz: integer('passing_score_quiz').default(70), // 70%
  passingScoreFinal: integer('passing_score_final').default(80), // 80%
  finalExamQuestions: integer('final_exam_questions').default(30),
  isActive: integer('is_active', { mode: 'boolean' }).default(true),
  createdAt: text('created_at').default(sql`CURRENT_TIMESTAMP`),
  updatedAt: text('updated_at').default(sql`CURRENT_TIMESTAMP`),
});

// ===========================
// Course Modules Table
// ===========================
export const courseModules = sqliteTable('course_modules', {
  id: text('id').primaryKey(),
  courseId: text('course_id').notNull().references(() => courses.id),
  title: text('title').notNull(),
  description: text('description'),
  orderIndex: integer('order_index').notNull(),
  content: text('content').notNull(), // HTML/Markdown content
  estimatedMinutes: integer('estimated_minutes'),
  isActive: integer('is_active', { mode: 'boolean' }).default(true),
  createdAt: text('created_at').default(sql`CURRENT_TIMESTAMP`),
});

// ===========================
// Module Sections Table
// ===========================
export const moduleSections = sqliteTable('module_sections', {
  id: text('id').primaryKey(),
  moduleId: text('module_id').notNull().references(() => courseModules.id),
  title: text('title').notNull(),
  content: text('content').notNull(), // HTML/Markdown content
  orderIndex: integer('order_index').notNull(),
  hasVideo: integer('has_video', { mode: 'boolean' }).default(false),
  videoUrl: text('video_url'),
  createdAt: text('created_at').default(sql`CURRENT_TIMESTAMP`),
});

// ===========================
// Quiz Questions Table
// ===========================
export const quizQuestions = sqliteTable('quiz_questions', {
  id: text('id').primaryKey(),
  moduleId: text('module_id').references(() => courseModules.id), // Null for final exam questions
  courseId: text('course_id').notNull().references(() => courses.id),
  isFinalExam: integer('is_final_exam', { mode: 'boolean' }).default(false),
  questionText: text('question_text').notNull(),
  questionType: text('question_type').default('multiple_choice'), // 'multiple_choice', 'true_false'
  options: text('options').notNull(), // JSON array of options
  correctAnswer: text('correct_answer').notNull(),
  explanation: text('explanation'), // Explanation shown after answering
  orderIndex: integer('order_index'),
  isActive: integer('is_active', { mode: 'boolean' }).default(true),
  createdAt: text('created_at').default(sql`CURRENT_TIMESTAMP`),
});

// ===========================
// Enrollments Table
// ===========================
export const enrollments = sqliteTable('enrollments', {
  id: text('id').primaryKey(),
  userId: text('user_id').notNull().references(() => users.id),
  courseId: text('course_id').notNull().references(() => courses.id),
  citationNumber: text('citation_number'),
  courtName: text('court_name'),
  courtDueDate: text('court_due_date'),
  status: text('status').default('active'), // 'active', 'completed', 'expired', 'refunded'
  startedAt: text('started_at').default(sql`CURRENT_TIMESTAMP`),
  completedAt: text('completed_at'),
  expiresAt: text('expires_at'), // Course access expiration
  createdAt: text('created_at').default(sql`CURRENT_TIMESTAMP`),
});

// ===========================
// Module Progress Table
// ===========================
export const moduleProgress = sqliteTable('module_progress', {
  id: text('id').primaryKey(),
  enrollmentId: text('enrollment_id').notNull().references(() => enrollments.id),
  moduleId: text('module_id').notNull().references(() => courseModules.id),
  status: text('status').default('not_started'), // 'not_started', 'in_progress', 'completed'
  timeSpentSeconds: integer('time_spent_seconds').default(0),
  startedAt: text('started_at'),
  completedAt: text('completed_at'),
  lastAccessedAt: text('last_accessed_at'),
});

// ===========================
// Quiz Attempts Table
// ===========================
export const quizAttempts = sqliteTable('quiz_attempts', {
  id: text('id').primaryKey(),
  enrollmentId: text('enrollment_id').notNull().references(() => enrollments.id),
  moduleId: text('module_id').references(() => courseModules.id), // Null for final exam
  isFinalExam: integer('is_final_exam', { mode: 'boolean' }).default(false),
  score: real('score').notNull(),
  totalQuestions: integer('total_questions').notNull(),
  correctAnswers: integer('correct_answers').notNull(),
  passed: integer('passed', { mode: 'boolean' }).notNull(),
  answers: text('answers').notNull(), // JSON of question IDs and answers
  startedAt: text('started_at').notNull(),
  completedAt: text('completed_at').notNull(),
});

// ===========================
// Payments Table
// ===========================
export const payments = sqliteTable('payments', {
  id: text('id').primaryKey(),
  userId: text('user_id').notNull().references(() => users.id),
  enrollmentId: text('enrollment_id').references(() => enrollments.id),
  stripePaymentIntentId: text('stripe_payment_intent_id').unique(),
  stripeCustomerId: text('stripe_customer_id'),
  amount: real('amount').notNull(),
  currency: text('currency').default('usd'),
  status: text('status').default('pending'), // 'pending', 'succeeded', 'failed', 'refunded'
  refundedAt: text('refunded_at'),
  refundReason: text('refund_reason'),
  refundedBy: text('refunded_by').references(() => users.id),
  createdAt: text('created_at').default(sql`CURRENT_TIMESTAMP`),
});

// ===========================
// Certificates Table
// ===========================
export const certificates = sqliteTable('certificates', {
  id: text('id').primaryKey(),
  enrollmentId: text('enrollment_id').notNull().references(() => enrollments.id),
  userId: text('user_id').notNull().references(() => users.id),
  courseId: text('course_id').notNull().references(() => courses.id),
  certificateNumber: text('certificate_number').notNull().unique(),
  issuedAt: text('issued_at').default(sql`CURRENT_TIMESTAMP`),
  expiresAt: text('expires_at'),
  pdfUrl: text('pdf_url'),
  finalExamScore: real('final_exam_score').notNull(),
  downloadCount: integer('download_count').default(0),
});

// ===========================
// Chat Sessions Table (AI Chatbot)
// ===========================
export const chatSessions = sqliteTable('chat_sessions', {
  id: text('id').primaryKey(),
  userId: text('user_id').references(() => users.id), // Can be null for guests
  sessionToken: text('session_token').notNull().unique(),
  createdAt: text('created_at').default(sql`CURRENT_TIMESTAMP`),
  lastMessageAt: text('last_message_at'),
});

// ===========================
// Chat Messages Table
// ===========================
export const chatMessages = sqliteTable('chat_messages', {
  id: text('id').primaryKey(),
  sessionId: text('session_id').notNull().references(() => chatSessions.id),
  role: text('role').notNull(), // 'user', 'assistant'
  content: text('content').notNull(),
  metadata: text('metadata'), // JSON for additional context
  createdAt: text('created_at').default(sql`CURRENT_TIMESTAMP`),
});

// ===========================
// Audit Log Table
// ===========================
export const auditLog = sqliteTable('audit_log', {
  id: text('id').primaryKey(),
  userId: text('user_id').references(() => users.id),
  action: text('action').notNull(), // 'login', 'enrollment', 'quiz_attempt', 'certificate_issued', etc.
  entityType: text('entity_type'), // 'user', 'enrollment', 'payment', etc.
  entityId: text('entity_id'),
  details: text('details'), // JSON with additional details
  ipAddress: text('ip_address'),
  userAgent: text('user_agent'),
  createdAt: text('created_at').default(sql`CURRENT_TIMESTAMP`),
});
