import 'dotenv/config';
import { db } from './index.js';
import { states, courses, courseModules, quizQuestions } from './schema.js';
import { v4 as uuidv4 } from 'uuid';
// Use EXPANDED curriculum with comprehensive content
import { floridaCourseDataExpanded as floridaCourseData } from './curriculum-expanded.js';

// ===========================
// Seed Florida State and Courses with Full Curriculum
// ===========================

async function seedDatabase() {
  console.log('🌱 Starting database seed...');

  // Create Florida state
  const floridaId = uuidv4();
  await db.insert(states).values({
    id: floridaId,
    code: 'FL',
    name: 'Florida',
    isActive: true,
    requirements: JSON.stringify({
      quizPassingScore: 70,
      finalExamPassingScore: 80,
      finalExamMinQuestions: 30,
      requiresIdVerification: true,
      requiresProctoring: false,
      certificateValidity: 'permanent',
      courseAccess: '30 days',
    }),
  }).onConflictDoNothing();

  console.log('✅ Florida state created');

  // ===========================
  // Seed 4-Hour Course
  // ===========================
  const course4hr = floridaCourseData.course4Hour;
  const course4hrId = uuidv4();
  
  await db.insert(courses).values({
    id: course4hrId,
    stateId: floridaId,
    name: course4hr.name,
    slug: course4hr.slug,
    description: course4hr.description,
    durationHours: course4hr.durationHours,
    price: course4hr.price,
    passingScoreQuiz: 70,
    passingScoreFinal: 80,
    finalExamQuestions: course4hr.finalExamQuestions.length,
    isActive: true,
  }).onConflictDoNothing();

  // ===========================
  // Seed 8-Hour Course
  // ===========================
  const course8hr = floridaCourseData.course8Hour;
  const course8hrId = uuidv4();
  
  await db.insert(courses).values({
    id: course8hrId,
    stateId: floridaId,
    name: course8hr.name,
    slug: course8hr.slug,
    description: course8hr.description,
    durationHours: course8hr.durationHours,
    price: course8hr.price,
    passingScoreQuiz: 70,
    passingScoreFinal: 80,
    finalExamQuestions: course8hr.finalExamQuestions.length,
    isActive: true,
  }).onConflictDoNothing();

  // ===========================
  // Seed 12-Hour Course
  // ===========================
  const course12hr = floridaCourseData.course12Hour;
  const course12hrId = uuidv4();
  
  await db.insert(courses).values({
    id: course12hrId,
    stateId: floridaId,
    name: course12hr.name,
    slug: course12hr.slug,
    description: course12hr.description,
    durationHours: course12hr.durationHours,
    price: course12hr.price,
    passingScoreQuiz: 70,
    passingScoreFinal: 80,
    finalExamQuestions: course12hr.finalExamQuestions.length,
    isActive: true,
  }).onConflictDoNothing();

  console.log('✅ Florida courses created');

  // ===========================
  // Seed 4-Hour Course Modules
  // ===========================
  
  for (let i = 0; i < course4hr.modules.length; i++) {
    const module = course4hr.modules[i];
    const moduleId = uuidv4();
    
    await db.insert(courseModules).values({
      id: moduleId,
      courseId: course4hrId,
      title: module.title,
      description: module.description,
      orderIndex: i + 1,
      content: module.content,
      estimatedMinutes: module.estimatedMinutes,
      isActive: true,
    }).onConflictDoNothing();

    // Add module quiz questions
    if (module.quizQuestions && module.quizQuestions.length > 0) {
      for (let j = 0; j < module.quizQuestions.length; j++) {
        const q = module.quizQuestions[j];
        await db.insert(quizQuestions).values({
          id: uuidv4(),
          moduleId: moduleId,
          courseId: course4hrId,
          isFinalExam: false,
          questionText: q.questionText,
          questionType: q.questionType || 'multiple_choice',
          options: JSON.stringify(q.options),
          correctAnswer: q.correctAnswer,
          explanation: q.explanation,
          orderIndex: j + 1,
          isActive: true,
        }).onConflictDoNothing();
      }
    }
  }

  // Add 4-Hour final exam questions
  for (let i = 0; i < course4hr.finalExamQuestions.length; i++) {
    const q = course4hr.finalExamQuestions[i];
    await db.insert(quizQuestions).values({
      id: uuidv4(),
      moduleId: null,
      courseId: course4hrId,
      isFinalExam: true,
      questionText: q.questionText,
      questionType: q.questionType || 'multiple_choice',
      options: JSON.stringify(q.options),
      correctAnswer: q.correctAnswer,
      explanation: q.explanation,
      orderIndex: i + 1,
      isActive: true,
    }).onConflictDoNothing();
  }

  console.log('✅ 4-Hour course modules and quizzes seeded');

  // ===========================
  // Seed 8-Hour Course Modules
  // ===========================
  
  for (let i = 0; i < course8hr.modules.length; i++) {
    const module = course8hr.modules[i];
    const moduleId = uuidv4();
    
    await db.insert(courseModules).values({
      id: moduleId,
      courseId: course8hrId,
      title: module.title,
      description: module.description,
      orderIndex: i + 1,
      content: module.content,
      estimatedMinutes: module.estimatedMinutes,
      isActive: true,
    }).onConflictDoNothing();

    // Add module quiz questions
    if (module.quizQuestions && module.quizQuestions.length > 0) {
      for (let j = 0; j < module.quizQuestions.length; j++) {
        const q = module.quizQuestions[j];
        await db.insert(quizQuestions).values({
          id: uuidv4(),
          moduleId: moduleId,
          courseId: course8hrId,
          isFinalExam: false,
          questionText: q.questionText,
          questionType: q.questionType || 'multiple_choice',
          options: JSON.stringify(q.options),
          correctAnswer: q.correctAnswer,
          explanation: q.explanation,
          orderIndex: j + 1,
          isActive: true,
        }).onConflictDoNothing();
      }
    }
  }

  // Add 8-Hour final exam questions
  for (let i = 0; i < course8hr.finalExamQuestions.length; i++) {
    const q = course8hr.finalExamQuestions[i];
    await db.insert(quizQuestions).values({
      id: uuidv4(),
      moduleId: null,
      courseId: course8hrId,
      isFinalExam: true,
      questionText: q.questionText,
      questionType: q.questionType || 'multiple_choice',
      options: JSON.stringify(q.options),
      correctAnswer: q.correctAnswer,
      explanation: q.explanation,
      orderIndex: i + 1,
      isActive: true,
    }).onConflictDoNothing();
  }

  console.log('✅ 8-Hour course modules and quizzes seeded');

  // ===========================
  // Seed 12-Hour Course Modules
  // ===========================
  
  for (let i = 0; i < course12hr.modules.length; i++) {
    const module = course12hr.modules[i];
    const moduleId = uuidv4();
    
    await db.insert(courseModules).values({
      id: moduleId,
      courseId: course12hrId,
      title: module.title,
      description: module.description,
      orderIndex: i + 1,
      content: module.content,
      estimatedMinutes: module.estimatedMinutes,
      isActive: true,
    }).onConflictDoNothing();

    // Add module quiz questions
    if (module.quizQuestions && module.quizQuestions.length > 0) {
      for (let j = 0; j < module.quizQuestions.length; j++) {
        const q = module.quizQuestions[j];
        await db.insert(quizQuestions).values({
          id: uuidv4(),
          moduleId: moduleId,
          courseId: course12hrId,
          isFinalExam: false,
          questionText: q.questionText,
          questionType: q.questionType || 'multiple_choice',
          options: JSON.stringify(q.options),
          correctAnswer: q.correctAnswer,
          explanation: q.explanation,
          orderIndex: j + 1,
          isActive: true,
        }).onConflictDoNothing();
      }
    }
  }

  // Add 12-Hour final exam questions
  for (let i = 0; i < course12hr.finalExamQuestions.length; i++) {
    const q = course12hr.finalExamQuestions[i];
    await db.insert(quizQuestions).values({
      id: uuidv4(),
      moduleId: null,
      courseId: course12hrId,
      isFinalExam: true,
      questionText: q.questionText,
      questionType: q.questionType || 'multiple_choice',
      options: JSON.stringify(q.options),
      correctAnswer: q.correctAnswer,
      explanation: q.explanation,
      orderIndex: i + 1,
      isActive: true,
    }).onConflictDoNothing();
  }

  console.log('✅ 12-Hour course modules and quizzes seeded');

  console.log('');
  console.log('🎉 Database seeding complete!');
  console.log('');
  console.log('Summary:');
  console.log('  - Florida state created');
  console.log(`  - 4-Hour BDI: ${course4hr.modules.length} modules, ${course4hr.finalExamQuestions.length} final exam questions`);
  console.log(`  - 8-Hour IDI: ${course8hr.modules.length} modules, ${course8hr.finalExamQuestions.length} final exam questions`);
  console.log(`  - 12-Hour ADI: ${course12hr.modules.length} modules, ${course12hr.finalExamQuestions.length} final exam questions`);
}

// Run the seed
seedDatabase()
  .then(() => {
    console.log('');
    console.log('✅ Seeding completed successfully');
    process.exit(0);
  })
  .catch((error) => {
    console.error('❌ Seeding failed:', error);
    process.exit(1);
  });
