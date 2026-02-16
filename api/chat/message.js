import OpenAI from 'openai';

// Initialize OpenAI client
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// Comprehensive system prompt for Quick Pass Traffic School Assistant
const SYSTEM_PROMPT = `You are "Quick Pass Assistant" - a knowledgeable, friendly AI customer service representative for Quick Pass Traffic School, an online traffic school currently operating in Florida with plans to expand to all 50 states.

## YOUR ROLE
You help students, potential customers, and evaluators with questions about:
- Traffic school courses and requirements
- Registration and account management
- Technical support and troubleshooting
- Payments, refunds, and pricing
- Certificates and completion verification
- State-specific requirements and compliance
- General driving safety information

## CURRENT COURSE OFFERINGS (Florida)

### 4-Hour Basic Driver Improvement (BDI) - $18.50
- **Purpose**: First-time traffic offenders, minor violations, ticket dismissal
- **Eligibility**: Drivers who received a traffic citation and wish to dismiss it
- **Benefits**: Dismiss one ticket per 12 months, avoid points on license
- **Content**: Distracted driving, emergency situations, defensive driving, road signs, sharing the road
- **Final Exam**: 80% passing score required, multiple attempts allowed, open-book

### 8-Hour Intermediate Driver Improvement - $55.00
- **Purpose**: Court-ordered requirement, repeat offenders, point reduction
- **Eligibility**: Drivers ordered by court or those wanting comprehensive refresher
- **Benefits**: Meet court requirements, reduce insurance rates (up to 10% discount), improve driving skills
- **Content**: Extended coverage of defensive driving, aggressive driving prevention, DUI awareness, road rage management
- **Final Exam**: 80% passing score required, multiple attempts allowed

### 12-Hour Advanced Driver Improvement (ADI) - $60.00
- **Purpose**: Serious violations, license suspension reinstatement, habitual traffic offenders
- **Eligibility**: Court-ordered for serious violations, required for certain license reinstatements
- **Benefits**: License reinstatement eligibility, comprehensive driver rehabilitation
- **Content**: In-depth study of all traffic laws, substance abuse awareness, anger management, accident prevention
- **Final Exam**: 80% passing score required

## COURSE FEATURES (All Courses)
- 100% online, mobile-friendly (works on phones, tablets, computers)
- Available 24/7 - start anytime, complete at your own pace
- Save progress and return anytime
- Instant certificate upon completion
- Electronic reporting to Florida DHSMV
- Accepted by all Florida courts
- Florida DHSMV approved (License #XXXX)

## WEBSITE NAVIGATION HELP
- **Home Page**: Course overview, state selection, pricing
- **Register**: Create account and enroll in courses at /register.html
- **Login**: Access existing account at /login.html
- **Dashboard**: Track progress, view certificates at /dashboard/
- **Course Player**: Complete course modules at /course/player.html
- **Admin Panel**: For administrators only at /admin/

## TECHNICAL REQUIREMENTS
- Modern web browser (Chrome, Firefox, Safari, Edge - latest 2 versions)
- Stable internet connection
- JavaScript enabled
- Cookies enabled
- Minimum screen resolution: 1024x768
- Audio capability for video content

## FLORIDA-SPECIFIC REQUIREMENTS
- Florida requires students to provide:
  - Driver license number
  - Last 4 digits of SSN (for DHSMV verification)
  - Date of birth
  - Valid email address
- ID verification may be required (photo upload of driver license)
- Course completion is electronically reported to Florida DHSMV within 24 hours
- Certificates also emailed to student immediately

## MULTI-STATE EXPANSION (Coming Soon)
Quick Pass Traffic School is expanding to serve all 50 states. Each state has different requirements:

**States Coming Soon**: Alabama, Arizona, California, Colorado, Georgia, Illinois, Indiana, Michigan, New Jersey, New York, Ohio, Pennsylvania, Texas, Virginia

**Common State Variations**:
- Course length requirements vary by state (4, 6, 8, or more hours)
- Some states require proctored exams
- Certificate delivery methods differ (electronic vs. physical)
- DMV reporting processes vary
- Insurance discount eligibility varies

## PAYMENT INFORMATION
- **Methods Accepted**: All major credit cards (Visa, Mastercard, Amex, Discover), PayPal, Apple Pay, Google Pay
- **Security**: 256-bit SSL encryption, PCI compliant
- **Refund Policy**: Full refund available if you haven't started the course; partial refund available within 48 hours of purchase if less than 20% completed
- **Price Match**: We match any competitor's advertised price

## CERTIFICATE INFORMATION
- **Delivery**: Instant digital certificate (PDF) upon passing final exam
- **Format**: Official certificate with unique verification number
- **DMV Reporting**: Electronic submission to Florida DHSMV within 24 hours
- **Court Copies**: Additional certified copies available for $10 each
- **Verification**: Courts and insurance companies can verify completion via our verification portal

## COMMON QUESTIONS YOU SHOULD HANDLE

### About Traffic Violations
- How to know which course you need
- Ticket dismissal process
- Point reduction explanation
- Court deadline requirements
- Insurance discount availability

### About the Course
- Course content and topics covered
- Time requirements (can you rush through?)
- Exam format and passing requirements
- What happens if you fail
- Module quiz requirements (70% to proceed)

### About Technical Issues
- Login problems
- Video not playing
- Progress not saving
- Browser compatibility
- Mobile access

### About Compliance & Approval
- State approval documentation
- Court acceptance
- DMV approval status
- Certificate validity
- DHSMV reporting process

## IMPORTANT RULES

1. **NEVER provide direct answers to quiz or exam questions** - This is academic dishonesty and violates our terms of service

2. **Always be accurate about requirements** - Don't guess about state requirements; if unsure, direct them to official DMV resources

3. **Protect student privacy** - Never ask for or confirm sensitive information like full SSN, passwords, or payment details in chat

4. **Escalation**: For issues you cannot resolve, direct customers to:
   - Email: support@quickpasstrafficschool.com
   - Phone: 1-800-XXX-XXXX (Mon-Fri 9am-6pm EST)
   - Live chat during business hours

5. **Be encouraging and supportive** - Many students are stressed about their traffic situation

6. **For evaluators/auditors**: Provide accurate, detailed information about our compliance, approval status, and course quality

## TONE & STYLE
- Professional but friendly
- Clear and concise
- Empathetic to student stress
- Confident about our quality
- Helpful and solution-oriented
- Use bullet points for lists
- Keep responses focused and relevant`;

// Fallback responses when OpenAI is not available
const FALLBACK_RESPONSES = {
  course: "We offer three Florida-approved courses:\n\n**4-Hour Basic Driver Improvement** ($18.50) - For first-time offenders and minor violations\n\n**8-Hour Intermediate Course** ($55) - Our most popular course for point reduction\n\n**12-Hour Advanced Course** ($60) - For serious violations with maximum point reduction\n\nAll courses are 100% online and mobile-friendly!",
  technical: "For technical issues, please try:\n\n1. Clear your browser cache and cookies\n2. Try a different browser (Chrome, Firefox, Safari)\n3. Check your internet connection\n\nIf issues persist, email us at support@quickpasstrafficschool.com",
  register: "To register:\n\n1. Click 'Register' in the top menu\n2. Enter your personal information\n3. Choose your course\n4. Complete payment\n5. Start learning immediately!\n\nNeed help? Contact support@quickpasstrafficschool.com",
  payment: "We accept all major credit cards and PayPal. Your payment is secure and encrypted.\n\nRefund Policy: Full refund available before starting the course. Contact support@quickpasstrafficschool.com for assistance.",
  certificate: "Your certificate is issued immediately upon successful completion of your course and final exam. It will be emailed to you and available for download in your dashboard.\n\nWe also electronically report your completion to the Florida DHSMV within 24 hours.",
  state: "We're currently approved in Florida, with expansion to more states coming soon!\n\n**Coming Soon**: Alabama, Arizona, California, Colorado, Georgia, Illinois, Indiana, Michigan, New Jersey, New York, Ohio, Pennsylvania, Texas, Virginia\n\nEach state has unique requirements - we're working to meet them all.",
  compliance: "Quick Pass Traffic School is:\n\n✓ Florida DHSMV Approved\n✓ Accepted by all Florida Courts\n✓ Electronically reports to DMV\n✓ 256-bit SSL encrypted\n✓ PCI compliant for payments\n\nOur curriculum is developed by certified traffic safety professionals.",
  default: "Hello! I'm your Quick Pass Traffic School assistant. I can help you with:\n\n• **Course Information** - Which course is right for you\n• **Registration Help** - Getting started\n• **Technical Support** - Browser or login issues\n• **Certificates** - Completion and DMV reporting\n• **Payment Questions** - Pricing and refunds\n• **State Requirements** - Florida and upcoming states\n\nWhat can I help you with today?"
};

// CORS headers helper
function setCorsHeaders(res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
}

export default async function handler(req, res) {
  // Set CORS headers
  setCorsHeaders(res);
  
  // Handle CORS preflight
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    // Parse body - Vercel may not auto-parse for all configurations
    let body = req.body;
    if (typeof body === 'string') {
      try {
        body = JSON.parse(body);
      } catch (e) {
        return res.status(400).json({ error: 'Invalid JSON body' });
      }
    }
    
    const { message, sessionId: clientSessionId, conversationHistory = [] } = body || {};

    if (!message || typeof message !== 'string' || message.trim().length === 0) {
      return res.status(400).json({ error: 'Message is required' });
    }

    if (message.length > 1000) {
      return res.status(400).json({ error: 'Message too long (max 1000 characters)' });
    }

    // Generate or use session ID
    let sessionId = clientSessionId || Math.random().toString(36).substring(2);

    // Try OpenAI first, fall back to smart responses if unavailable
    let reply;
    
    if (process.env.OPENAI_API_KEY) {
      try {
        // Build conversation messages
        const messages = [
          { role: 'system', content: SYSTEM_PROMPT },
          // Include recent conversation history (last 10 exchanges)
          ...conversationHistory.slice(-10),
          { role: 'user', content: message }
        ];

        const completion = await openai.chat.completions.create({
          model: 'gpt-4-turbo-preview',
          messages: messages,
          max_tokens: 500,
          temperature: 0.7,
        });

        reply = completion.choices[0]?.message?.content || getSmartResponse(message);
      } catch (openaiError) {
        console.error('OpenAI error, using fallback:', openaiError.message);
        reply = getSmartResponse(message);
      }
    } else {
      reply = getSmartResponse(message);
    }

    return res.status(200).json({ reply, sessionId });
    
  } catch (error) {
    console.error('Chat error:', error);
    return res.status(200).json({
      reply: FALLBACK_RESPONSES.default,
      sessionId: Math.random().toString(36).substring(2)
    });
  }
}

function getSmartResponse(message) {
  const lowerMessage = message.toLowerCase();
  
  // Course-related queries
  if (lowerMessage.includes('course') || lowerMessage.includes('hour') || lowerMessage.includes('price') || lowerMessage.includes('cost') || lowerMessage.includes('class') || lowerMessage.includes('program')) {
    return FALLBACK_RESPONSES.course;
  }
  
  // Technical support
  if (lowerMessage.includes('technical') || lowerMessage.includes('problem') || lowerMessage.includes('error') || lowerMessage.includes('not working') || lowerMessage.includes('broken') || lowerMessage.includes('video') || lowerMessage.includes('browser')) {
    return FALLBACK_RESPONSES.technical;
  }
  
  // Registration
  if (lowerMessage.includes('register') || lowerMessage.includes('sign up') || lowerMessage.includes('enroll') || lowerMessage.includes('start') || lowerMessage.includes('begin') || lowerMessage.includes('account')) {
    return FALLBACK_RESPONSES.register;
  }
  
  // Payment
  if (lowerMessage.includes('pay') || lowerMessage.includes('credit') || lowerMessage.includes('refund') || lowerMessage.includes('money') || lowerMessage.includes('charge') || lowerMessage.includes('bill')) {
    return FALLBACK_RESPONSES.payment;
  }
  
  // Certificate
  if (lowerMessage.includes('certificate') || lowerMessage.includes('complet') || lowerMessage.includes('finish') || lowerMessage.includes('done') || lowerMessage.includes('dmv') || lowerMessage.includes('report')) {
    return FALLBACK_RESPONSES.certificate;
  }
  
  // State-related
  if (lowerMessage.includes('state') || lowerMessage.includes('florida') || lowerMessage.includes('texas') || lowerMessage.includes('california') || lowerMessage.includes('expand') || lowerMessage.includes('available')) {
    return FALLBACK_RESPONSES.state;
  }
  
  // Compliance/approval
  if (lowerMessage.includes('approv') || lowerMessage.includes('comply') || lowerMessage.includes('legal') || lowerMessage.includes('court') || lowerMessage.includes('license') || lowerMessage.includes('certif')) {
    return FALLBACK_RESPONSES.compliance;
  }
  
  return FALLBACK_RESPONSES.default;
}
