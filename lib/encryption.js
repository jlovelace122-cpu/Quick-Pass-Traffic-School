import crypto from 'crypto';

const ALGORITHM = 'aes-256-gcm';
const IV_LENGTH = 16;
const AUTH_TAG_LENGTH = 16;

/**
 * Get encryption key from environment
 */
function getEncryptionKey() {
  const key = process.env.ENCRYPTION_KEY;
  if (!key) {
    throw new Error('ENCRYPTION_KEY environment variable is not set');
  }
  // Ensure key is 32 bytes
  return Buffer.from(key, 'hex');
}

/**
 * Encrypt data using AES-256-GCM
 * @param {Buffer} data - Data to encrypt
 * @returns {{ encrypted: Buffer, iv: string, authTag: string }}
 */
export function encrypt(data) {
  const key = getEncryptionKey();
  const iv = crypto.randomBytes(IV_LENGTH);
  const cipher = crypto.createCipheriv(ALGORITHM, key, iv);
  
  const encrypted = Buffer.concat([cipher.update(data), cipher.final()]);
  const authTag = cipher.getAuthTag();
  
  return {
    encrypted: Buffer.concat([encrypted, authTag]),
    iv: iv.toString('hex'),
  };
}

/**
 * Decrypt data using AES-256-GCM
 * @param {Buffer} encryptedData - Encrypted data with auth tag
 * @param {string} ivHex - Initialization vector in hex
 * @returns {Buffer} Decrypted data
 */
export function decrypt(encryptedData, ivHex) {
  const key = getEncryptionKey();
  const iv = Buffer.from(ivHex, 'hex');
  
  // Separate encrypted data and auth tag
  const authTag = encryptedData.slice(-AUTH_TAG_LENGTH);
  const encrypted = encryptedData.slice(0, -AUTH_TAG_LENGTH);
  
  const decipher = crypto.createDecipheriv(ALGORITHM, key, iv);
  decipher.setAuthTag(authTag);
  
  return Buffer.concat([decipher.update(encrypted), decipher.final()]);
}

/**
 * Hash sensitive data for storage (one-way)
 * @param {string} data - Data to hash
 * @returns {string} Hashed data
 */
export function hashData(data) {
  return crypto.createHash('sha256').update(data).digest('hex');
}

/**
 * Generate a secure random token
 * @param {number} length - Token length in bytes
 * @returns {string} Random token in hex
 */
export function generateSecureToken(length = 32) {
  return crypto.randomBytes(length).toString('hex');
}

/**
 * Encrypt a string (convenience function)
 * @param {string} text - Text to encrypt
 * @returns {{ encrypted: string, iv: string }}
 */
export function encryptString(text) {
  const result = encrypt(Buffer.from(text, 'utf8'));
  return {
    encrypted: result.encrypted.toString('base64'),
    iv: result.iv,
  };
}

/**
 * Decrypt a string (convenience function)
 * @param {string} encryptedBase64 - Encrypted data in base64
 * @param {string} ivHex - IV in hex
 * @returns {string} Decrypted text
 */
export function decryptString(encryptedBase64, ivHex) {
  const encryptedBuffer = Buffer.from(encryptedBase64, 'base64');
  return decrypt(encryptedBuffer, ivHex).toString('utf8');
}
