import { db } from '../../db/index.js';
import { idDocuments, users } from '../../db/schema.js';
import { eq, and } from 'drizzle-orm';
import { v4 as uuidv4 } from 'uuid';
import { authenticate, isAdmin, jsonResponse, handleCors } from '../../lib/auth.js';
import { encrypt, decrypt } from '../../lib/encryption.js';

export const config = {
  runtime: 'edge',
  // Allow larger body for file uploads
  api: {
    bodyParser: false,
  },
};

const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10MB
const ALLOWED_TYPES = ['image/jpeg', 'image/png', 'image/webp', 'application/pdf'];

export default async function handler(req) {
  if (req.method === 'OPTIONS') {
    return handleCors();
  }

  const url = new URL(req.url);
  const path = url.pathname.replace('/api/id-upload/', '');

  try {
    switch (path) {
      case 'upload':
        return await uploadDocument(req);
      case 'status':
        return await getUploadStatus(req);
      case 'verify':
        return await verifyDocument(req);
      case 'download':
        return await downloadDocument(req);
      default:
        return jsonResponse({ error: 'Not found' }, 404);
    }
  } catch (error) {
    console.error('ID Upload error:', error);
    return jsonResponse({ error: 'Internal server error' }, 500);
  }
}

async function uploadDocument(req) {
  if (req.method !== 'POST') {
    return jsonResponse({ error: 'Method not allowed' }, 405);
  }

  const { user, error: authError } = authenticate(req);
  if (authError) {
    return jsonResponse({ error: authError }, 401);
  }

  try {
    const formData = await req.formData();
    const file = formData.get('document');
    const documentType = formData.get('documentType');

    if (!file) {
      return jsonResponse({ error: 'No file uploaded' }, 400);
    }

    if (!documentType || !['drivers_license', 'state_id', 'passport'].includes(documentType)) {
      return jsonResponse({ error: 'Invalid document type' }, 400);
    }

    // Validate file type
    if (!ALLOWED_TYPES.includes(file.type)) {
      return jsonResponse({ 
        error: 'Invalid file type. Allowed: JPEG, PNG, WebP, PDF',
        allowedTypes: ALLOWED_TYPES,
      }, 400);
    }

    // Validate file size
    if (file.size > MAX_FILE_SIZE) {
      return jsonResponse({ 
        error: 'File too large. Maximum size is 10MB',
        maxSize: MAX_FILE_SIZE,
      }, 400);
    }

    // Read file as buffer
    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    // Encrypt the file data
    const { encrypted, iv } = encrypt(buffer);

    // Encrypt the filename
    const encryptedFileName = Buffer.from(file.name).toString('base64');

    // Check for existing document of same type
    const existingDoc = await db
      .select()
      .from(idDocuments)
      .where(and(eq(idDocuments.userId, user.userId), eq(idDocuments.documentType, documentType)))
      .get();

    const documentId = existingDoc?.id || uuidv4();

    if (existingDoc) {
      // Update existing document
      await db
        .update(idDocuments)
        .set({
          encryptedData: encrypted,
          encryptedFileName,
          iv,
          uploadedAt: new Date().toISOString(),
          status: 'pending',
          verifiedAt: null,
          verifiedBy: null,
        })
        .where(eq(idDocuments.id, existingDoc.id));
    } else {
      // Create new document record
      await db.insert(idDocuments).values({
        id: documentId,
        userId: user.userId,
        documentType,
        encryptedData: encrypted,
        encryptedFileName,
        iv,
        status: 'pending',
      });
    }

    return jsonResponse({
      success: true,
      documentId,
      message: 'Document uploaded successfully. Pending verification.',
      status: 'pending',
    });
  } catch (error) {
    console.error('Upload error:', error);
    return jsonResponse({ error: 'Failed to process upload' }, 500);
  }
}

async function getUploadStatus(req) {
  if (req.method !== 'GET') {
    return jsonResponse({ error: 'Method not allowed' }, 405);
  }

  const { user, error: authError } = authenticate(req);
  if (authError) {
    return jsonResponse({ error: authError }, 401);
  }

  const documents = await db
    .select({
      id: idDocuments.id,
      documentType: idDocuments.documentType,
      status: idDocuments.status,
      uploadedAt: idDocuments.uploadedAt,
      verifiedAt: idDocuments.verifiedAt,
    })
    .from(idDocuments)
    .where(eq(idDocuments.userId, user.userId));

  return jsonResponse({
    documents,
    isVerified: documents.some(d => d.status === 'verified'),
  });
}

async function verifyDocument(req) {
  if (req.method !== 'POST') {
    return jsonResponse({ error: 'Method not allowed' }, 405);
  }

  const { user, error: authError } = authenticate(req);
  if (authError) {
    return jsonResponse({ error: authError }, 401);
  }

  // Only admins can verify documents
  if (!isAdmin(user)) {
    return jsonResponse({ error: 'Admin access required' }, 403);
  }

  const body = await req.json();
  const { documentId, action, reason } = body;

  if (!documentId || !['verify', 'reject'].includes(action)) {
    return jsonResponse({ error: 'Invalid request' }, 400);
  }

  const document = await db.select().from(idDocuments).where(eq(idDocuments.id, documentId)).get();

  if (!document) {
    return jsonResponse({ error: 'Document not found' }, 404);
  }

  if (action === 'verify') {
    await db
      .update(idDocuments)
      .set({
        status: 'verified',
        verifiedAt: new Date().toISOString(),
        verifiedBy: user.userId,
      })
      .where(eq(idDocuments.id, documentId));

    // Also update user verification status
    await db
      .update(users)
      .set({ isVerified: true })
      .where(eq(users.id, document.userId));

    return jsonResponse({ success: true, message: 'Document verified successfully' });
  } else {
    await db
      .update(idDocuments)
      .set({
        status: 'rejected',
        verifiedAt: new Date().toISOString(),
        verifiedBy: user.userId,
      })
      .where(eq(idDocuments.id, documentId));

    return jsonResponse({ success: true, message: 'Document rejected', reason });
  }
}

async function downloadDocument(req) {
  if (req.method !== 'GET') {
    return jsonResponse({ error: 'Method not allowed' }, 405);
  }

  const { user, error: authError } = authenticate(req);
  if (authError) {
    return jsonResponse({ error: authError }, 401);
  }

  // Only admins can download documents
  if (!isAdmin(user)) {
    return jsonResponse({ error: 'Admin access required' }, 403);
  }

  const url = new URL(req.url);
  const documentId = url.searchParams.get('id');

  if (!documentId) {
    return jsonResponse({ error: 'Document ID required' }, 400);
  }

  const document = await db.select().from(idDocuments).where(eq(idDocuments.id, documentId)).get();

  if (!document) {
    return jsonResponse({ error: 'Document not found' }, 404);
  }

  // Decrypt the file
  const decryptedData = decrypt(document.encryptedData, document.iv);
  const fileName = Buffer.from(document.encryptedFileName, 'base64').toString('utf8');

  // Determine content type
  const ext = fileName.split('.').pop().toLowerCase();
  const contentTypes = {
    jpg: 'image/jpeg',
    jpeg: 'image/jpeg',
    png: 'image/png',
    webp: 'image/webp',
    pdf: 'application/pdf',
  };

  return new Response(decryptedData, {
    headers: {
      'Content-Type': contentTypes[ext] || 'application/octet-stream',
      'Content-Disposition': `attachment; filename="${fileName}"`,
      'Access-Control-Allow-Origin': '*',
    },
  });
}
