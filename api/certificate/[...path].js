import { db } from '../../db/index.js';
import { certificates, enrollments, users, courses } from '../../db/schema.js';
import { eq, and } from 'drizzle-orm';
import { authenticate, jsonResponse, handleCors } from '../../lib/auth.js';

export default async function handler(req) {
  if (req.method === 'OPTIONS') {
    return handleCors();
  }

  const url = new URL(req.url);
  const path = url.pathname.replace('/api/certificate/', '');

  try {
    switch (path) {
      case 'generate':
        return await generateCertificate(req);
      case 'download':
        return await downloadCertificate(req);
      case 'verify':
        return await verifyCertificate(req);
      case 'list':
        return await listCertificates(req);
      default:
        return jsonResponse({ error: 'Not found' }, 404);
    }
  } catch (error) {
    console.error('Certificate error:', error);
    return jsonResponse({ error: 'Internal server error' }, 500);
  }
}

async function generateCertificate(req) {
  if (req.method !== 'GET') {
    return jsonResponse({ error: 'Method not allowed' }, 405);
  }

  const { user, error: authError } = authenticate(req);
  if (authError) {
    return jsonResponse({ error: authError }, 401);
  }

  const url = new URL(req.url);
  const certificateId = url.searchParams.get('id');

  if (!certificateId) {
    return jsonResponse({ error: 'Certificate ID required' }, 400);
  }

  // Get certificate
  const certificate = await db
    .select()
    .from(certificates)
    .where(and(eq(certificates.id, certificateId), eq(certificates.userId, user.userId)))
    .get();

  if (!certificate) {
    return jsonResponse({ error: 'Certificate not found' }, 404);
  }

  // Get user and course details
  const userDetails = await db.select().from(users).where(eq(users.id, user.userId)).get();
  const course = await db.select().from(courses).where(eq(courses.id, certificate.courseId)).get();

  // Generate certificate HTML (can be converted to PDF client-side or via a PDF service)
  const certificateHtml = generateCertificateHtml({
    certificateNumber: certificate.certificateNumber,
    studentName: `${userDetails.firstName} ${userDetails.middleInitial ? userDetails.middleInitial + '. ' : ''}${userDetails.lastName}`,
    licenseNumber: userDetails.licenseNumber,
    licenseState: userDetails.licenseState,
    courseName: course.name,
    courseHours: course.durationHours,
    completionDate: new Date(certificate.issuedAt).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }),
    finalScore: certificate.finalExamScore,
  });

  // Update download count
  await db
    .update(certificates)
    .set({ downloadCount: (certificate.downloadCount || 0) + 1 })
    .where(eq(certificates.id, certificateId));

  return new Response(certificateHtml, {
    headers: {
      'Content-Type': 'text/html',
      'Access-Control-Allow-Origin': '*',
    },
  });
}

async function downloadCertificate(req) {
  if (req.method !== 'GET') {
    return jsonResponse({ error: 'Method not allowed' }, 405);
  }

  const { user, error: authError } = authenticate(req);
  if (authError) {
    return jsonResponse({ error: authError }, 401);
  }

  const url = new URL(req.url);
  const certificateId = url.searchParams.get('id');

  if (!certificateId) {
    return jsonResponse({ error: 'Certificate ID required' }, 400);
  }

  // Get certificate
  const certificate = await db
    .select()
    .from(certificates)
    .where(and(eq(certificates.id, certificateId), eq(certificates.userId, user.userId)))
    .get();

  if (!certificate) {
    return jsonResponse({ error: 'Certificate not found' }, 404);
  }

  // Get user and course details
  const userDetails = await db.select().from(users).where(eq(users.id, user.userId)).get();
  const course = await db.select().from(courses).where(eq(courses.id, certificate.courseId)).get();

  // Return certificate data for client-side PDF generation
  return jsonResponse({
    certificate: {
      id: certificate.id,
      certificateNumber: certificate.certificateNumber,
      issuedAt: certificate.issuedAt,
      finalExamScore: certificate.finalExamScore,
    },
    student: {
      name: `${userDetails.firstName} ${userDetails.middleInitial ? userDetails.middleInitial + '. ' : ''}${userDetails.lastName}`,
      licenseNumber: userDetails.licenseNumber,
      licenseState: userDetails.licenseState,
      dateOfBirth: userDetails.dateOfBirth,
      address: `${userDetails.address1}${userDetails.address2 ? ', ' + userDetails.address2 : ''}, ${userDetails.city}, ${userDetails.state} ${userDetails.zipCode}`,
    },
    course: {
      name: course.name,
      durationHours: course.durationHours,
      slug: course.slug,
    },
  });
}

async function verifyCertificate(req) {
  if (req.method !== 'GET') {
    return jsonResponse({ error: 'Method not allowed' }, 405);
  }

  const url = new URL(req.url);
  const certificateNumber = url.searchParams.get('number');

  if (!certificateNumber) {
    return jsonResponse({ error: 'Certificate number required' }, 400);
  }

  // Find certificate
  const certificate = await db
    .select()
    .from(certificates)
    .where(eq(certificates.certificateNumber, certificateNumber))
    .get();

  if (!certificate) {
    return jsonResponse({
      valid: false,
      message: 'Certificate not found. Please check the certificate number.',
    });
  }

  // Get student and course info
  const student = await db.select().from(users).where(eq(users.id, certificate.userId)).get();
  const course = await db.select().from(courses).where(eq(courses.id, certificate.courseId)).get();

  return jsonResponse({
    valid: true,
    certificate: {
      number: certificate.certificateNumber,
      issuedAt: certificate.issuedAt,
      courseName: course.name,
      courseHours: course.durationHours,
      studentName: `${student.firstName} ${student.lastName}`,
      finalScore: certificate.finalExamScore,
    },
  });
}

async function listCertificates(req) {
  if (req.method !== 'GET') {
    return jsonResponse({ error: 'Method not allowed' }, 405);
  }

  const { user, error: authError } = authenticate(req);
  if (authError) {
    return jsonResponse({ error: authError }, 401);
  }

  const userCertificates = await db
    .select({
      id: certificates.id,
      certificateNumber: certificates.certificateNumber,
      issuedAt: certificates.issuedAt,
      finalExamScore: certificates.finalExamScore,
      courseId: certificates.courseId,
    })
    .from(certificates)
    .where(eq(certificates.userId, user.userId));

  // Get course details for each certificate
  const certificatesWithCourses = await Promise.all(
    userCertificates.map(async (cert) => {
      const course = await db.select().from(courses).where(eq(courses.id, cert.courseId)).get();
      return {
        ...cert,
        courseName: course?.name,
        courseHours: course?.durationHours,
      };
    })
  );

  return jsonResponse({
    certificates: certificatesWithCourses,
  });
}

// Helper function to generate certificate HTML
function generateCertificateHtml(data) {
  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Certificate of Completion - ${data.certificateNumber}</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body {
      font-family: 'Times New Roman', serif;
      background: #f5f5f5;
      padding: 20px;
    }
    .certificate {
      max-width: 900px;
      margin: 0 auto;
      background: white;
      border: 3px solid #155dfc;
      padding: 50px;
      position: relative;
    }
    .certificate::before {
      content: '';
      position: absolute;
      top: 10px;
      left: 10px;
      right: 10px;
      bottom: 10px;
      border: 2px solid #155dfc;
      pointer-events: none;
    }
    .header {
      text-align: center;
      margin-bottom: 30px;
    }
    .logo {
      font-size: 36px;
      font-weight: bold;
      color: #155dfc;
      margin-bottom: 10px;
    }
    .title {
      font-size: 32px;
      color: #333;
      margin-bottom: 10px;
      font-weight: bold;
    }
    .subtitle {
      font-size: 18px;
      color: #666;
    }
    .body {
      text-align: center;
      margin: 40px 0;
    }
    .presented-to {
      font-size: 16px;
      color: #666;
      margin-bottom: 10px;
    }
    .student-name {
      font-size: 36px;
      font-weight: bold;
      color: #333;
      border-bottom: 2px solid #155dfc;
      display: inline-block;
      padding: 10px 50px;
      margin-bottom: 20px;
    }
    .description {
      font-size: 16px;
      color: #666;
      line-height: 1.8;
      max-width: 600px;
      margin: 0 auto;
    }
    .course-name {
      font-weight: bold;
      color: #333;
    }
    .details {
      display: flex;
      justify-content: space-around;
      margin: 40px 0;
      flex-wrap: wrap;
    }
    .detail-item {
      text-align: center;
      padding: 15px;
    }
    .detail-label {
      font-size: 12px;
      color: #666;
      text-transform: uppercase;
      margin-bottom: 5px;
    }
    .detail-value {
      font-size: 16px;
      color: #333;
      font-weight: bold;
    }
    .footer {
      display: flex;
      justify-content: space-between;
      margin-top: 50px;
      padding-top: 30px;
      border-top: 1px solid #ddd;
    }
    .signature {
      text-align: center;
      width: 200px;
    }
    .signature-line {
      border-top: 1px solid #333;
      margin-top: 50px;
      padding-top: 5px;
      font-size: 12px;
      color: #666;
    }
    .certificate-number {
      text-align: center;
      margin-top: 20px;
      font-size: 12px;
      color: #999;
    }
    .state-seal {
      width: 100px;
      height: 100px;
      border: 2px solid #155dfc;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 12px;
      text-align: center;
      color: #155dfc;
      font-weight: bold;
    }
    @media print {
      body { background: white; padding: 0; }
      .certificate { border: none; }
    }
  </style>
</head>
<body>
  <div class="certificate">
    <div class="header">
      <div class="logo">Quick Pass Traffic School</div>
      <div class="title">Certificate of Completion</div>
      <div class="subtitle">Florida Driver Improvement Course</div>
    </div>
    
    <div class="body">
      <div class="presented-to">This is to certify that</div>
      <div class="student-name">${data.studentName}</div>
      <div class="description">
        has successfully completed the 
        <span class="course-name">${data.courseName}</span>
        (${data.courseHours} hours) with a final examination score of 
        <strong>${Math.round(data.finalScore)}%</strong>.
        This course is approved by the State of Florida for driver improvement.
      </div>
    </div>
    
    <div class="details">
      <div class="detail-item">
        <div class="detail-label">License Number</div>
        <div class="detail-value">${data.licenseNumber}</div>
      </div>
      <div class="detail-item">
        <div class="detail-label">License State</div>
        <div class="detail-value">${data.licenseState}</div>
      </div>
      <div class="detail-item">
        <div class="detail-label">Completion Date</div>
        <div class="detail-value">${data.completionDate}</div>
      </div>
      <div class="detail-item">
        <div class="detail-label">Course Hours</div>
        <div class="detail-value">${data.courseHours} Hours</div>
      </div>
    </div>
    
    <div class="footer">
      <div class="signature">
        <div class="signature-line">School Administrator</div>
      </div>
      <div class="state-seal">
        STATE OF<br>FLORIDA<br>APPROVED
      </div>
      <div class="signature">
        <div class="signature-line">Date Issued</div>
      </div>
    </div>
    
    <div class="certificate-number">
      Certificate Number: ${data.certificateNumber}<br>
      Verify at: quickpasstrafficschool.com/verify
    </div>
  </div>
  
  <script>
    // Auto-print option
    // window.onload = () => window.print();
  </script>
</body>
</html>
  `;
}
