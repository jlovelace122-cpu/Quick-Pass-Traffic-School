import 'dotenv/config';
import { db } from './index.js';
import { users, courses, courseModules, enrollments, moduleProgress } from './schema.js';
import { eq, and } from 'drizzle-orm';
import { v4 as uuidv4 } from 'uuid';

async function completeModulesForTest() {
  console.log('🚀 Auto-completing modules for test user...\n');
  
  // Get the test 4hr user
  const user = await db.select().from(users).where(eq(users.email, 'test4hr@quickpasstrafficschool.com')).get();
  
  if (!user) {
    console.log('❌ Test user not found. Run create-test-users.js first.');
    process.exit(1);
  }
  
  console.log(`Found user: ${user.firstName} ${user.lastName}`);
  
  // Get enrollment
  const enrollment = await db.select()
    .from(enrollments)
    .where(eq(enrollments.userId, user.id))
    .get();
  
  if (!enrollment) {
    console.log('❌ No enrollment found for user.');
    process.exit(1);
  }
  
  console.log(`Found enrollment: ${enrollment.id}`);
  
  // Get all modules for the course
  const modules = await db.select()
    .from(courseModules)
    .where(and(eq(courseModules.courseId, enrollment.courseId), eq(courseModules.isActive, true)));
  
  console.log(`Found ${modules.length} modules\n`);
  
  // Mark each module as completed
  for (const module of modules) {
    // Check if progress exists
    const existing = await db.select()
      .from(moduleProgress)
      .where(and(eq(moduleProgress.enrollmentId, enrollment.id), eq(moduleProgress.moduleId, module.id)))
      .get();
    
    if (existing) {
      await db.update(moduleProgress)
        .set({ status: 'completed', completedAt: new Date().toISOString() })
        .where(eq(moduleProgress.id, existing.id));
      console.log(`✅ Updated: ${module.title}`);
    } else {
      await db.insert(moduleProgress).values({
        id: uuidv4(),
        enrollmentId: enrollment.id,
        moduleId: module.id,
        status: 'completed',
        completedAt: new Date().toISOString(),
      });
      console.log(`✅ Completed: ${module.title}`);
    }
  }
  
  console.log('\n' + '='.repeat(60));
  console.log('🎉 All modules marked as completed!');
  console.log('='.repeat(60));
  console.log('\nYou can now:');
  console.log('1. Go to http://localhost:3000/login.html');
  console.log('2. Login with test4hr@quickpasstrafficschool.com / Test123!');
  console.log('3. Click "Start Course" then "Final Exam" to take the exam');
  console.log('4. Pass the final exam to get your certificate!');
  console.log('='.repeat(60));
  
  process.exit(0);
}

completeModulesForTest().catch(err => {
  console.error('Error:', err);
  process.exit(1);
});
