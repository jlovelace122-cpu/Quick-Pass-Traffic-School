import Stripe from 'stripe';
import { db } from '../../db/index.js';
import { users, courses, enrollments, payments } from '../../db/schema.js';
import { eq, and } from 'drizzle-orm';
import { v4 as uuidv4 } from 'uuid';
import { authenticate, jsonResponse, handleCors } from '../../lib/auth.js';
import { validate, paymentIntentSchema } from '../../lib/validation.js';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export const config = {
  runtime: 'edge',
};

export default async function handler(req) {
  if (req.method === 'OPTIONS') {
    return handleCors();
  }

  const url = new URL(req.url);
  const path = url.pathname.replace('/api/payments/', '');

  try {
    switch (path) {
      case 'create-intent':
        return await createPaymentIntent(req);
      case 'webhook':
        return await handleWebhook(req);
      case 'config':
        return await getConfig(req);
      default:
        return jsonResponse({ error: 'Not found' }, 404);
    }
  } catch (error) {
    console.error('Payment error:', error);
    return jsonResponse({ error: 'Internal server error' }, 500);
  }
}

async function getConfig(req) {
  if (req.method !== 'GET') {
    return jsonResponse({ error: 'Method not allowed' }, 405);
  }

  return jsonResponse({
    publishableKey: process.env.STRIPE_PUBLISHABLE_KEY,
  });
}

async function createPaymentIntent(req) {
  if (req.method !== 'POST') {
    return jsonResponse({ error: 'Method not allowed' }, 405);
  }

  // Require authentication
  const { user, error: authError } = authenticate(req);
  if (authError) {
    return jsonResponse({ error: authError }, 401);
  }

  const body = await req.json();
  const { data, error } = validate(paymentIntentSchema, body);

  if (error) {
    return jsonResponse({ error }, 400);
  }

  // Get course
  const course = await db.select().from(courses).where(eq(courses.id, data.courseId)).get();
  if (!course) {
    return jsonResponse({ error: 'Course not found' }, 404);
  }

  // Check if already enrolled
  const existingEnrollment = await db
    .select()
    .from(enrollments)
    .where(
      and(
        eq(enrollments.userId, user.userId),
        eq(enrollments.courseId, course.id),
        eq(enrollments.status, 'active')
      )
    )
    .get();

  if (existingEnrollment) {
    return jsonResponse({ error: 'You are already enrolled in this course' }, 400);
  }

  // Get user details for Stripe
  const userDetails = await db.select().from(users).where(eq(users.id, user.userId)).get();

  // Create or retrieve Stripe customer
  let stripeCustomerId;
  const existingPayment = await db
    .select()
    .from(payments)
    .where(eq(payments.userId, user.userId))
    .get();

  if (existingPayment?.stripeCustomerId) {
    stripeCustomerId = existingPayment.stripeCustomerId;
  } else {
    const customer = await stripe.customers.create({
      email: userDetails.email,
      name: `${userDetails.firstName} ${userDetails.lastName}`,
      metadata: {
        userId: user.userId,
      },
    });
    stripeCustomerId = customer.id;
  }

  // Create payment intent
  const paymentIntent = await stripe.paymentIntents.create({
    amount: Math.round(course.price * 100), // Convert to cents
    currency: 'usd',
    customer: stripeCustomerId,
    metadata: {
      userId: user.userId,
      courseId: course.id,
      courseName: course.name,
    },
    automatic_payment_methods: {
      enabled: true,
    },
  });

  // Create pending payment record
  const paymentId = uuidv4();
  await db.insert(payments).values({
    id: paymentId,
    userId: user.userId,
    stripePaymentIntentId: paymentIntent.id,
    stripeCustomerId,
    amount: course.price,
    currency: 'usd',
    status: 'pending',
  });

  return jsonResponse({
    clientSecret: paymentIntent.client_secret,
    paymentIntentId: paymentIntent.id,
    amount: course.price,
    course: {
      id: course.id,
      name: course.name,
      durationHours: course.durationHours,
    },
  });
}

async function handleWebhook(req) {
  if (req.method !== 'POST') {
    return jsonResponse({ error: 'Method not allowed' }, 405);
  }

  const body = await req.text();
  const signature = req.headers.get('stripe-signature');

  let event;

  try {
    event = stripe.webhooks.constructEvent(
      body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET
    );
  } catch (err) {
    console.error('Webhook signature verification failed:', err.message);
    return jsonResponse({ error: 'Webhook signature verification failed' }, 400);
  }

  // Handle the event
  switch (event.type) {
    case 'payment_intent.succeeded':
      await handlePaymentSuccess(event.data.object);
      break;
    case 'payment_intent.payment_failed':
      await handlePaymentFailed(event.data.object);
      break;
    default:
      console.log(`Unhandled event type: ${event.type}`);
  }

  return jsonResponse({ received: true });
}

async function handlePaymentSuccess(paymentIntent) {
  const { userId, courseId } = paymentIntent.metadata;

  // Update payment record
  await db
    .update(payments)
    .set({ status: 'succeeded' })
    .where(eq(payments.stripePaymentIntentId, paymentIntent.id));

  // Create enrollment
  const enrollmentId = uuidv4();
  const expiresAt = new Date();
  expiresAt.setMonth(expiresAt.getMonth() + 6); // 6 months access

  await db.insert(enrollments).values({
    id: enrollmentId,
    userId,
    courseId,
    status: 'active',
    expiresAt: expiresAt.toISOString(),
  });

  // Update payment with enrollment ID
  await db
    .update(payments)
    .set({ enrollmentId })
    .where(eq(payments.stripePaymentIntentId, paymentIntent.id));

  console.log(`Enrollment created for user ${userId} in course ${courseId}`);
}

async function handlePaymentFailed(paymentIntent) {
  await db
    .update(payments)
    .set({ status: 'failed' })
    .where(eq(payments.stripePaymentIntentId, paymentIntent.id));

  console.log(`Payment failed for intent ${paymentIntent.id}`);
}
