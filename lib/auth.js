import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

const JWT_SECRET = process.env.JWT_SECRET || 'fallback-secret-change-in-production';
const JWT_EXPIRES_IN = '7d';
const BCRYPT_ROUNDS = 12;

/**
 * Hash a password
 * @param {string} password - Plain text password
 * @returns {Promise<string>} Hashed password
 */
export async function hashPassword(password) {
  return bcrypt.hash(password, BCRYPT_ROUNDS);
}

/**
 * Verify a password against a hash
 * @param {string} password - Plain text password
 * @param {string} hash - Hashed password
 * @returns {Promise<boolean>} True if password matches
 */
export async function verifyPassword(password, hash) {
  return bcrypt.compare(password, hash);
}

/**
 * Generate a JWT token
 * @param {object} payload - Token payload
 * @returns {string} JWT token
 */
export function generateToken(payload) {
  return jwt.sign(payload, JWT_SECRET, { expiresIn: JWT_EXPIRES_IN });
}

/**
 * Verify a JWT token
 * @param {string} token - JWT token
 * @returns {object|null} Decoded payload or null if invalid
 */
export function verifyToken(token) {
  try {
    return jwt.verify(token, JWT_SECRET);
  } catch (error) {
    return null;
  }
}

/**
 * Extract token from request headers
 * @param {Request} req - HTTP request
 * @returns {string|null} Token or null
 */
export function extractToken(req) {
  const authHeader = req.headers.get('authorization') || req.headers.authorization;
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return null;
  }
  return authHeader.substring(7);
}

/**
 * Middleware to authenticate requests
 * @param {Request} req - HTTP request
 * @returns {object} { user, error }
 */
export function authenticate(req) {
  const token = extractToken(req);
  if (!token) {
    return { user: null, error: 'No token provided' };
  }
  
  const decoded = verifyToken(token);
  if (!decoded) {
    return { user: null, error: 'Invalid or expired token' };
  }
  
  return { user: decoded, error: null };
}

/**
 * Check if user is admin
 * @param {object} user - Decoded user from token
 * @returns {boolean} True if admin
 */
export function isAdmin(user) {
  return user && user.role === 'admin';
}

/**
 * Create response with CORS headers
 * @param {object} data - Response data
 * @param {number} status - HTTP status code
 * @returns {Response} HTTP response
 */
export function jsonResponse(data, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    },
  });
}

/**
 * Handle CORS preflight
 * @returns {Response} CORS preflight response
 */
export function handleCors() {
  return new Response(null, {
    status: 204,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
      'Access-Control-Max-Age': '86400',
    },
  });
}
