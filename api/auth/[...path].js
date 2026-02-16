import { db } from '../db/index.js';
import { users } from '../db/schema.js';
import { eq } from 'drizzle-orm';
import { v4 as uuidv4 } from 'uuid';
import { hashPassword, verifyPassword, generateToken, jsonResponse, handleCors } from '../lib/auth.js';
import { validate, registerSchema, loginSchema } from '../lib/validation.js';

export default async function handler(req) {
  // Handle CORS preflight
  if (req.method === 'OPTIONS') {
    return handleCors();
  }

  const url = new URL(req.url);
  const path = url.pathname.replace('/api/auth/', '');

  try {
    switch (path) {
      case 'register':
        return await handleRegister(req);
      case 'login':
        return await handleLogin(req);
      default:
        return jsonResponse({ error: 'Not found' }, 404);
    }
  } catch (error) {
    console.error('Auth error:', error);
    return jsonResponse({ error: 'Internal server error' }, 500);
  }
}

async function handleRegister(req) {
  if (req.method !== 'POST') {
    return jsonResponse({ error: 'Method not allowed' }, 405);
  }

  const body = await req.json();
  const { data, error } = validate(registerSchema, body);

  if (error) {
    return jsonResponse({ error }, 400);
  }

  // Check if user already exists
  const existingUser = await db.select().from(users).where(eq(users.email, data.email.toLowerCase())).get();

  if (existingUser) {
    return jsonResponse({ error: 'Email already registered' }, 409);
  }

  // Hash password
  const passwordHash = await hashPassword(data.password);

  // Handle both nested and flat data structures
  const address1 = data.address?.street || data.address1;
  const address2 = data.address?.apt || data.address2 || null;
  const city = data.address?.city || data.city;
  const state = data.address?.state || data.state;
  const zipCode = data.address?.zip || data.zipCode;
  const licenseNumber = data.driversLicense?.number || data.licenseNumber;
  const licenseState = data.driversLicense?.state || data.licenseState;
  const dateOfBirth = data.birthDate || data.dateOfBirth;
  const ssn4 = data.driversLicense?.ssn4 || null;

  // Create user
  const userId = uuidv4();
  await db.insert(users).values({
    id: userId,
    email: data.email.toLowerCase(),
    passwordHash,
    firstName: data.firstName,
    middleInitial: data.middleInitial || null,
    lastName: data.lastName,
    phone: data.phone || null,
    address1,
    address2,
    city,
    state,
    zipCode,
    dateOfBirth,
    licenseNumber,
    licenseState,
    gender: data.gender || null,
    ssn4,
    // Florida-specific fields
    floridaCourseType: data.florida?.courseType || null,
    citationNumber: data.florida?.citationNumber || null,
    county: data.florida?.county || null,
    courtDueDate: data.florida?.dueDate || null,
    // Marketing
    referredBy: data.referredBy || null,
    promoCode: data.promoCode || null,
    optIn: data.optIn ?? true,
    role: 'student',
    isVerified: false,
  });

  // Generate token
  const token = generateToken({
    userId,
    email: data.email.toLowerCase(),
    role: 'student',
  });

  return jsonResponse({
    success: true,
    message: 'Registration successful',
    token,
    user: {
      id: userId,
      email: data.email.toLowerCase(),
      firstName: data.firstName,
      lastName: data.lastName,
      role: 'student',
    },
  }, 201);
}

async function handleLogin(req) {
  if (req.method !== 'POST') {
    return jsonResponse({ error: 'Method not allowed' }, 405);
  }

  const body = await req.json();
  const { data, error } = validate(loginSchema, body);

  if (error) {
    return jsonResponse({ error }, 400);
  }

  // Find user
  const user = await db.select().from(users).where(eq(users.email, data.email.toLowerCase())).get();

  if (!user) {
    return jsonResponse({ error: 'Invalid email or password' }, 401);
  }

  // Verify password
  const isValid = await verifyPassword(data.password, user.passwordHash);

  if (!isValid) {
    return jsonResponse({ error: 'Invalid email or password' }, 401);
  }

  // Generate token
  const token = generateToken({
    userId: user.id,
    email: user.email,
    role: user.role,
  });

  return jsonResponse({
    success: true,
    message: 'Login successful',
    token,
    user: {
      id: user.id,
      email: user.email,
      firstName: user.firstName,
      lastName: user.lastName,
      role: user.role,
      isVerified: user.isVerified,
    },
  });
}
