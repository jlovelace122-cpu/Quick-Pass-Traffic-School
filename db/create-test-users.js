import 'dotenv/config';
import { db } from './index.js';
import { users, enrollments, courses } from './schema.js';
import { eq } from 'drizzle-orm';
import { v4 as uuidv4 } from 'uuid';
import bcrypt from 'bcryptjs';

async function createTestUsers() {
  console.log('🧪 Creating test users for curriculum troubleshooting...\n');
  
  // Hash password (same for all test users)
  const testPassword = 'Test123!';
  const passwordHash = await bcrypt.hash(testPassword, 10);
  const adminPasswordHash = await bcrypt.hash('Admin123!', 10);
  
  // Fixed IDs for test users so we can reference them for enrollments
  const user4hrId = 'test-user-4hr-00000000-0000-0000-0000';
  const user8hrId = 'test-user-8hr-00000000-0000-0000-0000';
  const user12hrId = 'test-user-12hr-0000000-0000-0000-0000';
  const adminId = 'test-admin-0000000000-0000-0000-0000';
  
  // Test user data
  const testUsers = [
    {
      id: user4hrId,
      email: 'test4hr@quickpasstrafficschool.com',
      passwordHash: passwordHash,
      firstName: 'Test',
      lastName: 'Student4Hr',
      role: 'student',
      isVerified: true,
      state: 'FL',
      licenseNumber: 'FL123456789',
      licenseState: 'FL',
      dateOfBirth: '1990-01-01',
      ssn4: '1234',
      floridaCourseType: '4-hour',
    },
    {
      id: user8hrId,
      email: 'test8hr@quickpasstrafficschool.com',
      passwordHash: passwordHash,
      firstName: 'Test',
      lastName: 'Student8Hr',
      role: 'student',
      isVerified: true,
      state: 'FL',
      licenseNumber: 'FL234567890',
      licenseState: 'FL',
      dateOfBirth: '1990-01-01',
      ssn4: '2345',
      floridaCourseType: '8-hour',
    },
    {
      id: user12hrId,
      email: 'test12hr@quickpasstrafficschool.com',
      passwordHash: passwordHash,
      firstName: 'Test',
      lastName: 'Student12Hr',
      role: 'student',
      isVerified: true,
      state: 'FL',
      licenseNumber: 'FL345678901',
      licenseState: 'FL',
      dateOfBirth: '1990-01-01',
      ssn4: '3456',
      floridaCourseType: '12-hour',
    },
    {
      id: adminId,
      email: 'admin@quickpasstrafficschool.com',
      passwordHash: adminPasswordHash,
      firstName: 'Admin',
      lastName: 'User',
      role: 'admin',
      isVerified: true,
    }
  ];
  
  for (const user of testUsers) {
    try {
      await db.insert(users).values(user).onConflictDoNothing();
      console.log(`✅ Created: ${user.email}`);
    } catch (err) {
      console.log(`⏭️  ${user.email}: ${err.message}`);
    }
  }
  
  // Now get the actual user IDs from the database (in case they already existed)
  console.log('\n📚 Creating enrollments for test users...\n');
  
  const user4hrFromDb = await db.select().from(users).where(eq(users.email, 'test4hr@quickpasstrafficschool.com')).get();
  const user8hrFromDb = await db.select().from(users).where(eq(users.email, 'test8hr@quickpasstrafficschool.com')).get();
  const user12hrFromDb = await db.select().from(users).where(eq(users.email, 'test12hr@quickpasstrafficschool.com')).get();
  
  // Get courses from database by slug
  const allCourses = await db.select().from(courses);
  console.log('Available courses:', allCourses.map(c => `${c.slug} (${c.durationHours}hr)`).join(', '));
  
  const course4hr = allCourses.find(c => c.durationHours === 4);
  const course8hr = allCourses.find(c => c.durationHours === 8);
  const course12hr = allCourses.find(c => c.durationHours === 12);
  
  // Enrollment data - 30 days access from now
  const expiresAt = new Date();
  expiresAt.setDate(expiresAt.getDate() + 30);
  const expiresAtStr = expiresAt.toISOString();
  
  const testEnrollments = [];
  
  if (course4hr && user4hrFromDb) {
    testEnrollments.push({
      id: uuidv4(),
      userId: user4hrFromDb.id,
      courseId: course4hr.id,
      status: 'active',
      expiresAt: expiresAtStr,
    });
  }
  
  if (course8hr && user8hrFromDb) {
    testEnrollments.push({
      id: uuidv4(),
      userId: user8hrFromDb.id,
      courseId: course8hr.id,
      status: 'active',
      expiresAt: expiresAtStr,
    });
  }
  
  if (course12hr && user12hrFromDb) {
    testEnrollments.push({
      id: uuidv4(),
      userId: user12hrFromDb.id,
      courseId: course12hr.id,
      status: 'active',
      expiresAt: expiresAtStr,
    });
  }
  
  for (const enrollment of testEnrollments) {
    try {
      await db.insert(enrollments).values(enrollment).onConflictDoNothing();
      const course = allCourses.find(c => c.id === enrollment.courseId);
      console.log(`✅ Enrolled user in ${course?.durationHours || '?'}-hour course`);
    } catch (err) {
      console.log(`⏭️  Enrollment: ${err.message}`);
    }
  }
  
  // Print summary
  console.log('\n' + '='.repeat(60));
  console.log('📋 TEST CREDENTIALS SUMMARY');
  console.log('='.repeat(60));
  console.log('\n📚 STUDENT ACCOUNTS:');
  console.log('-'.repeat(40));
  console.log('4-Hour Course:');
  console.log('  📧 Email:    test4hr@quickpasstrafficschool.com');
  console.log('  🔑 Password: Test123!');
  console.log('');
  console.log('8-Hour Course:');
  console.log('  📧 Email:    test8hr@quickpasstrafficschool.com');
  console.log('  🔑 Password: Test123!');
  console.log('');
  console.log('12-Hour Course:');
  console.log('  📧 Email:    test12hr@quickpasstrafficschool.com');
  console.log('  🔑 Password: Test123!');
  console.log('');
  console.log('🔐 ADMIN ACCOUNT:');
  console.log('-'.repeat(40));
  console.log('  📧 Email:    admin@quickpasstrafficschool.com');
  console.log('  🔑 Password: Admin123!');
  console.log('  🔗 Admin Panel: /admin/');
  console.log('');
  console.log('='.repeat(60));
  console.log('💡 Student Login: /login.html');
  console.log('💡 Admin Login:   /admin/login.html');
  console.log('='.repeat(60));
  
  process.exit(0);
}

createTestUsers().catch(err => {
  console.error('Error creating test users:', err);
  process.exit(1);
});
