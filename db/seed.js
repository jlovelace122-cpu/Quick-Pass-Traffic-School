import 'dotenv/config';
import { db } from './index.js';
import { states, courses, courseModules, quizQuestions, enrollments, moduleProgress, quizAttempts, payments, certificates } from './schema.js';
import { v4 as uuidv4 } from 'uuid';
// Use EXPANDED curriculum with comprehensive content
import { floridaCourseDataExpanded as floridaCourseData } from './curriculum-expanded.js';
// Import all state curricula
import { georgiaCourseData } from './curriculum-georgia.js';
import { indianaCourseData } from './curriculum-indiana.js';
import { ohioCourseData } from './curriculum-ohio.js';
import { texasCourseData } from './curriculum-texas.js';
import { californiaCourseData } from './curriculum-california.js';
import { arizonaCourseData } from './curriculum-arizona.js';

// ===========================
// Seed All States and Courses with Full Curriculum
// ===========================

// Helper function to seed a state's course
async function seedStateCourse(stateId, courseData, stateName) {
  const courseId = uuidv4();

  await db.insert(courses).values({
    id: courseId,
    stateId: stateId,
    name: courseData.name,
    slug: courseData.slug,
    description: courseData.description,
    durationHours: courseData.durationHours,
    price: courseData.price,
    passingScoreQuiz: 70,
    passingScoreFinal: 80,
    finalExamQuestions: courseData.finalExamQuestions.length,
    isActive: true,
  }).onConflictDoNothing();

  // Seed modules and quiz questions
  for (let i = 0; i < courseData.modules.length; i++) {
    const module = courseData.modules[i];
    const moduleId = uuidv4();

    await db.insert(courseModules).values({
      id: moduleId,
      courseId: courseId,
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
          courseId: courseId,
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

  // Add final exam questions
  for (let i = 0; i < courseData.finalExamQuestions.length; i++) {
    const q = courseData.finalExamQuestions[i];
    await db.insert(quizQuestions).values({
      id: uuidv4(),
      moduleId: null,
      courseId: courseId,
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

  console.log(`  ✅ ${stateName}: ${courseData.modules.length} modules, ${courseData.finalExamQuestions.length} final exam questions`);
  return courseId;
}

async function seedDatabase() {
  console.log('🌱 Starting database seed...');

  // Clear existing seed data (in FK dependency order)
  await db.delete(certificates);
  await db.delete(quizAttempts);
  await db.delete(moduleProgress);
  await db.delete(payments);
  await db.delete(enrollments);
  await db.delete(quizQuestions);
  await db.delete(courseModules);
  await db.delete(courses);
  await db.delete(states);
  console.log('🧹 Cleared existing seed data');

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
    finalExamQuestions: (course4hr.finalExamQuestions || []).length,
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
    finalExamQuestions: (course8hr.finalExamQuestions || []).length,
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
    finalExamQuestions: (course12hr.finalExamQuestions || []).length,
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
  for (let i = 0; i < (course4hr.finalExamQuestions || []).length; i++) {
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
  for (let i = 0; i < (course8hr.finalExamQuestions || []).length; i++) {
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
  for (let i = 0; i < (course12hr.finalExamQuestions || []).length; i++) {
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

  // ===========================
  // Seed Georgia State and Course
  // ===========================
  const georgiaId = uuidv4();
  await db.insert(states).values({
    id: georgiaId,
    code: 'GA',
    name: 'Georgia',
    isActive: true,
    requirements: JSON.stringify({
      quizPassingScore: 70,
      finalExamPassingScore: 80,
      finalExamMinQuestions: 20,
      requiresIdVerification: true,
      requiresProctoring: false,
      certificateValidity: '5 years',
      courseAccess: '30 days',
      regulatoryBody: 'DDS',
    }),
  }).onConflictDoNothing();
  console.log('✅ Georgia state created');
  await seedStateCourse(georgiaId, georgiaCourseData.course6Hour, 'Georgia 6-Hour');

  // ===========================
  // Seed Indiana State and Course
  // ===========================
  const indianaId = uuidv4();
  await db.insert(states).values({
    id: indianaId,
    code: 'IN',
    name: 'Indiana',
    isActive: true,
    requirements: JSON.stringify({
      quizPassingScore: 70,
      finalExamPassingScore: 80,
      finalExamMinQuestions: 15,
      requiresIdVerification: true,
      requiresProctoring: false,
      certificateValidity: 'permanent',
      courseAccess: '30 days',
      regulatoryBody: 'BMV',
    }),
  }).onConflictDoNothing();
  console.log('✅ Indiana state created');
  await seedStateCourse(indianaId, indianaCourseData.course4Hour, 'Indiana 4-Hour');

  // ===========================
  // Seed Ohio State and Course
  // ===========================
  const ohioId = uuidv4();
  await db.insert(states).values({
    id: ohioId,
    code: 'OH',
    name: 'Ohio',
    isActive: true,
    requirements: JSON.stringify({
      quizPassingScore: 70,
      finalExamPassingScore: 80,
      finalExamMinQuestions: 15,
      requiresIdVerification: true,
      requiresProctoring: false,
      certificateValidity: 'permanent',
      courseAccess: '30 days',
      regulatoryBody: 'BMV',
      pointReduction: 2,
    }),
  }).onConflictDoNothing();
  console.log('✅ Ohio state created');
  await seedStateCourse(ohioId, ohioCourseData.course4Hour, 'Ohio 4-Hour');

  // ===========================
  // Seed Texas State and Course
  // ===========================
  const texasId = uuidv4();
  await db.insert(states).values({
    id: texasId,
    code: 'TX',
    name: 'Texas',
    isActive: true,
    requirements: JSON.stringify({
      quizPassingScore: 70,
      finalExamPassingScore: 80,
      finalExamMinQuestions: 20,
      requiresIdVerification: true,
      requiresProctoring: false,
      certificateValidity: 'permanent',
      courseAccess: '90 days',
      regulatoryBody: 'TEA/TDLR',
      ticketDismissalDeadline: '20 days from ticket',
    }),
  }).onConflictDoNothing();
  console.log('✅ Texas state created');
  await seedStateCourse(texasId, texasCourseData.course6Hour, 'Texas 6-Hour');

  // ===========================
  // Seed California State and Course  
  // ===========================
  const californiaId = uuidv4();
  await db.insert(states).values({
    id: californiaId,
    code: 'CA',
    name: 'California',
    isActive: true,
    requirements: JSON.stringify({
      quizPassingScore: 70,
      finalExamPassingScore: 80,
      finalExamMinQuestions: 20,
      requiresIdVerification: true,
      requiresProctoring: false,
      certificateValidity: '18 months',
      courseAccess: '30 days',
      regulatoryBody: 'DMV',
      trafficSchoolLimit: '18 months between'
    }),
  }).onConflictDoNothing();
  console.log('✅ California state created');
  await seedStateCourse(californiaId, californiaCourseData.course8Hour, 'California 8-Hour');

  // ===========================
  // Seed Arizona State and Course
  // ===========================
  const arizonaId = uuidv4();
  await db.insert(states).values({
    id: arizonaId,
    code: 'AZ',
    name: 'Arizona',
    isActive: true,
    requirements: JSON.stringify({
      quizPassingScore: 70,
      finalExamPassingScore: 80,
      finalExamMinQuestions: 15,
      requiresIdVerification: true,
      requiresProctoring: false,
      certificateValidity: '12 months',
      courseAccess: '30 days',
      regulatoryBody: 'ADOT/MVD',
    }),
  }).onConflictDoNothing();
  console.log('✅ Arizona state created');
  await seedStateCourse(arizonaId, arizonaCourseData.course4Hour, 'Arizona 4-Hour');

  console.log('');
  console.log('🎉 Database seeding complete!');
  console.log('');
  console.log('Summary:');
  console.log('  - Florida: 4-Hour, 8-Hour, 12-Hour courses');
  console.log('  - Georgia: 6-Hour defensive driving course');
  console.log('  - Indiana: 4-Hour defensive driving course');
  console.log('  - Ohio: 4-Hour remedial driving course');
  console.log('  - Texas: 6-Hour driving safety course');
  console.log('  - California: 8-Hour traffic violator school');
  console.log('  - Arizona: 4-Hour traffic survival school');
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
