import { db } from '../../db/index.js';
import { chatSessions, chatMessages } from '../../db/schema.js';
import { eq } from 'drizzle-orm';
import { v4 as uuidv4 } from 'uuid';
import { jsonResponse, handleCors } from '../../lib/auth.js';

// System prompt for the AI chatbot
const SYSTEM_PROMPT = `You are a helpful customer service assistant for Quick Pass Traffic School, an online Florida-approved traffic school. 

Your role is to help students with:
1. General questions about courses (4-hour, 8-hour, 12-hour)
2. Registration and enrollment assistance
3. Technical support (login issues, navigation help, browser compatibility)
4. Course content explanations (but NOT answering quiz or test questions directly)
5. Certificate and completion questions
6. Payment and refund inquiries

Course Information:
- 4-Hour Basic Driver Improvement ($18.50): For first-time offenders, minor violations
- 8-Hour Intermediate Course ($55): Our most popular, for point reduction and court requirements  
- 12-Hour Advanced Course ($60): For serious violations, maximum point reduction

Requirements:
- Must pass each module quiz with 70% to proceed
- Final exam requires 80% to pass
- Certificate issued immediately upon completion
- 6 months access to complete the course`;

// Fallback responses when OpenAI is not available
const FALLBACK_RESPONSES = {
  course: "We offer three Florida-approved courses:\n\n**4-Hour Basic Driver Improvement** ($18.50) - For first-time offenders and minor violations\n\n**8-Hour Intermediate Course** ($55) - Our most popular course for point reduction\n\n**12-Hour Advanced Course** ($60) - For serious violations with maximum point reduction\n\nAll courses are 100% online and mobile-friendly!",
  technical: "For technical issues, please try:\n\n1. Clear your browser cache and cookies\n2. Try a different browser (Chrome, Firefox, Safari)\n3. Check your internet connection\n\nIf issues persist, email us at support@quickpasstrafficschool.com",
  register: "To register:\n\n1. Click 'Register' in the top menu\n2. Enter your personal information\n3. Choose your course\n4. Complete payment\n5. Start learning immediately!\n\nNeed help? Contact support@quickpasstrafficschool.com",
  payment: "We accept all major credit cards and PayPal. Your payment is secure and encrypted.\n\nRefund Policy: Full refund available before starting the course. Contact support@quickpasstrafficschool.com for assistance.",
  certificate: "Your certificate is issued immediately upon successful completion of your course and final exam. It will be emailed to you and available for download in your dashboard.\n\nWe also electronically report your completion to the Florida DHSMV.",
  default: "Thanks for your message! I'm here to help with course information, registration, technical support, and more.\n\nHere are some things I can help with:\n• Course information and pricing\n• Registration assistance\n• Technical support\n• Payment questions\n• Certificate inquiries\n\nFor immediate assistance, email support@quickpasstrafficschool.com"
};

export default async function handler(req) {
  if (req.method === 'OPTIONS') {
    return handleCors();
  }

  const url = new URL(req.url);
  const path = url.pathname.replace('/api/chat/', '');

  try {
    if (path === 'message' && req.method === 'POST') {
      return await handleMessage(req);
    }
    return jsonResponse({ error: 'Not found' }, 404);
  } catch (error) {
    console.error('Chat error:', error);
    // Return a friendly fallback response instead of error
    return jsonResponse({
      reply: FALLBACK_RESPONSES.default,
      sessionId: uuidv4()
    });
  }
}

async function handleMessage(req) {
  let body;
  try {
    body = await req.json();
  } catch (e) {
    return jsonResponse({ error: 'Invalid JSON' }, 400);
  }
  
  const { message, sessionId: clientSessionId } = body;

  if (!message || message.trim().length === 0) {
    return jsonResponse({ error: 'Message is required' }, 400);
  }

  if (message.length > 1000) {
    return jsonResponse({ error: 'Message too long (max 1000 characters)' }, 400);
  }

  // Generate or use session ID
  let sessionId = clientSessionId || uuidv4();

  // Try to get a smart fallback response
  const fallbackReply = getSmartResponse(message);

  // Try to use OpenAI if available
  if (process.env.OPENAI_API_KEY) {
    try {
      const OpenAI = (await import('openai')).default;
      const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
      
      const completion = await openai.chat.completions.create({
        model: 'gpt-4-turbo-preview',
        messages: [
          { role: 'system', content: SYSTEM_PROMPT },
          { role: 'user', content: message }
        ],
        max_tokens: 500,
        temperature: 0.7,
      });

      const aiReply = completion.choices[0].message.content;
      
      return jsonResponse({ reply: aiReply, sessionId });
    } catch (aiError) {
      console.error('OpenAI error:', aiError);
      // Fall through to fallback response
    }
  }

  // Return fallback response
  return jsonResponse({ reply: fallbackReply, sessionId });
}

function getSmartResponse(message) {
  const lowerMessage = message.toLowerCase();
  
  if (lowerMessage.includes('course') || lowerMessage.includes('hour') || lowerMessage.includes('price') || lowerMessage.includes('cost')) {
    return FALLBACK_RESPONSES.course;
  }
  
  if (lowerMessage.includes('technical') || lowerMessage.includes('problem') || lowerMessage.includes('error') || lowerMessage.includes('not working') || lowerMessage.includes('help')) {
    return FALLBACK_RESPONSES.technical;
  }
  
  if (lowerMessage.includes('register') || lowerMessage.includes('sign up') || lowerMessage.includes('enroll') || lowerMessage.includes('start')) {
    return FALLBACK_RESPONSES.register;
  }
  
  if (lowerMessage.includes('pay') || lowerMessage.includes('credit') || lowerMessage.includes('refund') || lowerMessage.includes('money')) {
    return FALLBACK_RESPONSES.payment;
  }
  
  if (lowerMessage.includes('certificate') || lowerMessage.includes('complete') || lowerMessage.includes('finish') || lowerMessage.includes('done')) {
    return FALLBACK_RESPONSES.certificate;
  }
  
  return FALLBACK_RESPONSES.default;
}
