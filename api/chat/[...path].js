import OpenAI from 'openai';
import { db } from '../../db/index.js';
import { chatSessions, chatMessages, courses, states } from '../../db/schema.js';
import { eq } from 'drizzle-orm';
import { v4 as uuidv4 } from 'uuid';
import { authenticate, jsonResponse, handleCors } from '../../lib/auth.js';
import { generateSecureToken } from '../../lib/encryption.js';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// System prompt for the AI chatbot
const SYSTEM_PROMPT = `You are a helpful customer service assistant for Quick Pass Traffic School, an online Florida-approved traffic school. 

Your role is to help students with:
1. General questions about courses (4-hour, 8-hour, 12-hour)
2. Registration and enrollment assistance
3. Technical support (login issues, navigation help, browser compatibility)
4. Course content explanations (but NOT answering quiz or test questions directly)
5. Certificate and completion questions
6. Payment and refund inquiries

IMPORTANT RULES:
- NEVER provide direct answers to quiz or exam questions. If a student asks about a specific quiz question, guide them to review the relevant course material instead.
- If asked to help cheat or provide test answers, politely decline and explain that you're here to help them learn, not bypass the learning process.
- Be friendly, professional, and encouraging.
- If you don't know something, say so and suggest they contact support at support@quickpasstrafficschool.com or use the live chat.

Course Information:
- 4-Hour Basic Driver Improvement ($19): For first-time offenders, minor violations
- 8-Hour Intermediate Course ($58.95): Our most popular, for point reduction and court requirements  
- 12-Hour Advanced Course ($95): For serious violations, maximum point reduction

Requirements:
- Must pass each module quiz with 70% to proceed
- Final exam requires 80% to pass (at least 30 questions)
- Certificate issued immediately upon completion
- 6 months access to complete the course

General Florida Traffic School Facts:
- Courses are 100% online and mobile-friendly
- Log in/out as many times as needed
- Unlimited quiz/exam retakes at no extra cost
- Same-day certificate delivery
- Accepted by all Florida courts`;

export default async function handler(req) {
  if (req.method === 'OPTIONS') {
    return handleCors();
  }

  const url = new URL(req.url);
  const path = url.pathname.replace('/api/chat/', '');

  try {
    switch (path) {
      case 'message':
        return await handleMessage(req);
      case 'history':
        return await getChatHistory(req);
      case 'session':
        return await createSession(req);
      default:
        return jsonResponse({ error: 'Not found' }, 404);
    }
  } catch (error) {
    console.error('Chat error:', error);
    return jsonResponse({ error: 'Internal server error' }, 500);
  }
}

async function createSession(req) {
  if (req.method !== 'POST') {
    return jsonResponse({ error: 'Method not allowed' }, 405);
  }

  // Optional authentication
  const { user } = authenticate(req);

  const sessionToken = generateSecureToken(32);
  const sessionId = uuidv4();

  await db.insert(chatSessions).values({
    id: sessionId,
    userId: user?.userId || null,
    sessionToken,
  });

  return jsonResponse({
    sessionId,
    sessionToken,
  });
}

async function handleMessage(req) {
  if (req.method !== 'POST') {
    return jsonResponse({ error: 'Method not allowed' }, 405);
  }

  const body = await req.json();
  const { message, sessionToken } = body;

  if (!message || message.trim().length === 0) {
    return jsonResponse({ error: 'Message is required' }, 400);
  }

  if (message.length > 1000) {
    return jsonResponse({ error: 'Message too long (max 1000 characters)' }, 400);
  }

  // Get or create session
  let session;
  if (sessionToken) {
    session = await db.select().from(chatSessions).where(eq(chatSessions.sessionToken, sessionToken)).get();
  }

  if (!session) {
    const sessionId = uuidv4();
    const newToken = generateSecureToken(32);
    await db.insert(chatSessions).values({
      id: sessionId,
      sessionToken: newToken,
    });
    session = { id: sessionId, sessionToken: newToken };
  }

  // Get recent chat history for context
  const recentMessages = await db
    .select()
    .from(chatMessages)
    .where(eq(chatMessages.sessionId, session.id))
    .orderBy(chatMessages.createdAt)
    .limit(10);

  // Build messages array for OpenAI
  const messages = [
    { role: 'system', content: SYSTEM_PROMPT },
    ...recentMessages.map(m => ({
      role: m.role,
      content: m.content,
    })),
    { role: 'user', content: message },
  ];

  // Check if this looks like a quiz/test question
  const isQuizQuestion = detectQuizQuestion(message);

  if (isQuizQuestion) {
    messages.push({
      role: 'system',
      content: 'The user appears to be asking about a quiz or exam question. Remember: DO NOT provide direct answers. Instead, guide them to the relevant course material.',
    });
  }

  // Call OpenAI
  const completion = await openai.chat.completions.create({
    model: 'gpt-4-turbo-preview',
    messages,
    max_tokens: 500,
    temperature: 0.7,
  });

  const assistantMessage = completion.choices[0].message.content;

  // Save messages to database
  const userMessageId = uuidv4();
  const assistantMessageId = uuidv4();

  await db.insert(chatMessages).values([
    {
      id: userMessageId,
      sessionId: session.id,
      role: 'user',
      content: message,
    },
    {
      id: assistantMessageId,
      sessionId: session.id,
      role: 'assistant',
      content: assistantMessage,
    },
  ]);

  // Update session last message time
  await db
    .update(chatSessions)
    .set({ lastMessageAt: new Date().toISOString() })
    .where(eq(chatSessions.id, session.id));

  return jsonResponse({
    message: assistantMessage,
    sessionToken: session.sessionToken,
    messageId: assistantMessageId,
  });
}

async function getChatHistory(req) {
  if (req.method !== 'GET') {
    return jsonResponse({ error: 'Method not allowed' }, 405);
  }

  const url = new URL(req.url);
  const sessionToken = url.searchParams.get('sessionToken');

  if (!sessionToken) {
    return jsonResponse({ error: 'Session token required' }, 400);
  }

  const session = await db.select().from(chatSessions).where(eq(chatSessions.sessionToken, sessionToken)).get();

  if (!session) {
    return jsonResponse({ error: 'Session not found' }, 404);
  }

  const messages = await db
    .select({
      id: chatMessages.id,
      role: chatMessages.role,
      content: chatMessages.content,
      createdAt: chatMessages.createdAt,
    })
    .from(chatMessages)
    .where(eq(chatMessages.sessionId, session.id))
    .orderBy(chatMessages.createdAt);

  return jsonResponse({
    sessionId: session.id,
    messages,
  });
}

// Helper function to detect potential quiz/exam questions
function detectQuizQuestion(message) {
  const lowerMessage = message.toLowerCase();
  
  const quizIndicators = [
    'what is the answer',
    'what\'s the answer',
    'answer to question',
    'correct answer',
    'help me with this question',
    'quiz question',
    'exam question',
    'test question',
    'multiple choice',
    'which option',
    'is it a, b, c',
    'is the answer',
    'tell me the answer',
    'give me the answer',
  ];

  return quizIndicators.some(indicator => lowerMessage.includes(indicator));
}
