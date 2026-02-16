import { z } from 'zod';

// Address Schema (nested)
const addressSchema = z.object({
  street: z.string().min(1, 'Street address is required').max(100),
  apt: z.string().max(50).optional(),
  city: z.string().min(1, 'City is required').max(50),
  state: z.string().length(2, 'State must be 2-letter code'),
  zip: z.string().regex(/^\d{5}(-\d{4})?$/, 'Invalid ZIP code'),
});

// Driver License Schema (nested)
const driversLicenseSchema = z.object({
  number: z.string().min(1, 'License number is required'),
  state: z.string().min(2, 'License state is required'),
  ssn4: z.string().length(4, 'SSN must be last 4 digits').optional(),
});

// Florida-specific Schema (nested)
const floridaInfoSchema = z.object({
  courseType: z.string().optional(),
  citationNumber: z.string().optional(),
  county: z.string().optional(),
  dueDate: z.string().optional(),
});

// User Registration Schema - supports both flat and nested formats
export const registerSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(8, 'Password must be at least 8 characters'),
  firstName: z.string().min(1, 'First name is required').max(50),
  middleInitial: z.string().max(1).optional(),
  lastName: z.string().min(1, 'Last name is required').max(50),
  phone: z.string().optional(),
  
  // Support nested address format
  address: addressSchema.optional(),
  // Also support flat format for backwards compatibility
  address1: z.string().min(1).max(100).optional(),
  address2: z.string().max(50).optional(),
  city: z.string().min(1).max(50).optional(),
  state: z.string().length(2).optional(),
  zipCode: z.string().optional(),
  
  // Date of birth
  dateOfBirth: z.string().optional(),
  birthDate: z.string().optional(),
  gender: z.string().optional(),
  
  // Driver's license - support both formats
  driversLicense: driversLicenseSchema.optional(),
  licenseNumber: z.string().optional(),
  licenseState: z.string().optional(),
  
  // Florida-specific info
  florida: floridaInfoSchema.optional(),
  
  // Marketing
  referredBy: z.string().optional(),
  promoCode: z.string().optional(),
  optIn: z.boolean().optional(),
});

// Login Schema
export const loginSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(1, 'Password is required'),
});

// Enrollment Schema
export const enrollmentSchema = z.object({
  courseId: z.string().uuid('Invalid course ID'),
  citationNumber: z.string().optional(),
  courtName: z.string().optional(),
  courtDueDate: z.string().optional(),
});

// Quiz Answer Schema
export const quizAnswerSchema = z.object({
  questionId: z.string().uuid('Invalid question ID'),
  answer: z.string().min(1, 'Answer is required'),
});

// Quiz Submission Schema
export const quizSubmissionSchema = z.object({
  moduleId: z.string().uuid('Invalid module ID').optional(),
  isFinalExam: z.boolean().default(false),
  answers: z.array(quizAnswerSchema).min(1, 'At least one answer required'),
});

// Contact Form Schema
export const contactSchema = z.object({
  name: z.string().min(1, 'Name is required').max(100),
  email: z.string().email('Invalid email address'),
  phone: z.string().optional(),
  message: z.string().min(10, 'Message must be at least 10 characters').max(2000),
});

// Chat Message Schema
export const chatMessageSchema = z.object({
  message: z.string().min(1, 'Message is required').max(1000),
  sessionToken: z.string().optional(),
});

// Payment Intent Schema
export const paymentIntentSchema = z.object({
  courseId: z.string().uuid('Invalid course ID'),
});

// ID Upload Schema
export const idUploadSchema = z.object({
  documentType: z.enum(['drivers_license', 'state_id', 'passport']),
});

// Admin Refund Schema
export const refundSchema = z.object({
  paymentId: z.string().uuid('Invalid payment ID'),
  reason: z.string().min(1, 'Refund reason is required').max(500),
});

// Validate and parse data
export function validate(schema, data) {
  try {
    return { data: schema.parse(data), error: null };
  } catch (error) {
    if (error instanceof z.ZodError) {
      const messages = error.errors.map(e => `${e.path.join('.')}: ${e.message}`);
      return { data: null, error: messages.join(', ') };
    }
    return { data: null, error: 'Validation failed' };
  }
}
