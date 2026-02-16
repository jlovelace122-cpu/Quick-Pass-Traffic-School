// ===========================
// Florida Traffic School Curriculum Data
// Extracted from official curriculum documents
// ===========================

// Browser-compatible: use window global
// Node.js compatible: use module.exports
const floridaCourseData = {
  // ===========================
  // 4-Hour Basic Driver Improvement Course
  // ===========================
  course4Hour: {
    name: '4-Hour Basic Driver Improvement (BDI)',
    slug: 'florida-4-hour-bdi',
    description: 'Perfect for first-time offenders looking to dismiss a minor traffic violation. This Florida state-approved course covers distracted driving, emergency situations, defensive driving techniques, and road safety fundamentals.',
    durationHours: 4,
    price: 18.50,
    modules: [
      {
        title: 'Introduction & Course Overview',
        description: 'Welcome to Quick Pass Traffic School and overview of course objectives',
        estimatedMinutes: 15,
        content: `
          <h2>Welcome to Quick Pass Traffic School</h2>
          <p>This program is designed to provide drivers with the critical knowledge and skills needed to operate vehicles safely and responsibly. Our goal is to reduce traffic-related incidents, foster safe driving habits, and ensure that all drivers are well-informed of the latest traffic laws and regulations.</p>
          
          <p>This course will cover key aspects of road safety, from understanding common causes of accidents to mastering defensive driving techniques. Whether you're here as part of a legal requirement or a personal commitment to improving your driving, this course is an essential step toward becoming a safer, more conscientious driver.</p>
          
          <h3>What You'll Learn</h3>
          <ul>
            <li>Florida traffic laws and regulations</li>
            <li>Distracted driving prevention</li>
            <li>Emergency situation handling</li>
            <li>Defensive driving techniques</li>
            <li>Road signs and signals</li>
            <li>Sharing the road safely</li>
            <li>Certification requirements</li>
          </ul>
        `,
        quizQuestions: []
      },
      {
        title: 'Distracted Driving',
        description: 'Understanding the dangers of distracted driving and Florida law',
        estimatedMinutes: 30,
        content: `
          <h2>Distracted Driving</h2>
          <p>Distracted driving is one of the leading causes of collisions, injuries, and fatalities on the road. In Florida, texting while driving is strictly prohibited, even when your vehicle is stopped at a red light.</p>
          
          <h3>Types of Distractions</h3>
          <p>Distractions extend beyond texting and include:</p>
          <ul>
            <li><strong>Visual:</strong> Taking your eyes off the road</li>
            <li><strong>Manual:</strong> Taking your hands off the wheel</li>
            <li><strong>Cognitive:</strong> Taking your mind off driving</li>
          </ul>
          
          <p>Activities such as eating, adjusting the radio, or even engaging in lively conversations with passengers can divert your attention from the road.</p>
          
          <h3>Prevention Strategies</h3>
          <p>To minimize risks, drivers are encouraged to:</p>
          <ul>
            <li>Use hands-free devices when necessary</li>
            <li>Pull over to a safe location if immediate attention is required</li>
            <li>Set devices before driving (GPS, music, phone to "Do Not Disturb")</li>
            <li>Avoid multitasking while driving</li>
            <li>Silence notifications or place your phone out of reach</li>
          </ul>
          
          <div class="alert alert-warning">
            <strong>Remember:</strong> Even a brief glance away from the road can lead to life-altering consequences. Staying focused is not just a good habit—it's a legal obligation and a moral responsibility.
          </div>
          
          <h3>Florida Law</h3>
          <p>Florida Statutes Section 316.305 (the "Wireless Communications While Driving Law") prohibits texting while driving and requires hands-free use in school and work zones. Violations can lead to fines, points on your license, and increased insurance costs.</p>
        `,
        quizQuestions: [
          {
            questionText: 'What is the legal stance on texting and driving in Florida?',
            options: ['Allowed at red lights', 'Allowed only on highways', 'Completely prohibited', 'Allowed if using hands-free features'],
            correctAnswer: 'Completely prohibited',
            explanation: 'In Florida, texting while driving is completely prohibited, even when your vehicle is stopped at a red light.'
          },
          {
            questionText: 'It is legal to use your phone at a red light in Florida.',
            questionType: 'true_false',
            options: ['True', 'False'],
            correctAnswer: 'False',
            explanation: 'Florida law prohibits texting while driving even when stopped at a red light.'
          },
          {
            questionText: 'Why should you avoid distractions like phone use while driving?',
            options: ['It is illegal in all states', 'It increases reaction time and the risk of accidents', 'It ensures your phone battery lasts longer', 'It is only dangerous at high speeds'],
            correctAnswer: 'It increases reaction time and the risk of accidents',
            explanation: 'Distracted driving increases reaction time and significantly raises the risk of accidents.'
          }
        ]
      },
      {
        title: 'Emergency Situations',
        description: 'How to handle vehicle breakdowns and road emergencies',
        estimatedMinutes: 30,
        content: `
          <h2>Emergency Situations</h2>
          <p>Emergencies on the road can be unpredictable, but knowing how to handle them can save lives.</p>
          
          <h3>Vehicle Breakdown Procedures</h3>
          <p>If your vehicle breaks down, the safest course of action is to:</p>
          <ol>
            <li>Pull over to a secure spot, such as the shoulder of the road</li>
            <li>Turn on your hazard lights immediately</li>
            <li>Call for professional assistance</li>
            <li>Stay with your vehicle unless it poses imminent danger</li>
          </ol>
          
          <div class="alert alert-danger">
            <strong>Safety First:</strong> Avoid abandoning your car unless it poses an imminent danger to you or others, such as being in the path of oncoming traffic.
          </div>
          
          <h3>Emergency Kit Essentials</h3>
          <p>Keep an emergency kit in your vehicle that includes:</p>
          <ul>
            <li>Flashlight with extra batteries</li>
            <li>First-aid supplies</li>
            <li>Phone charger</li>
            <li>Reflective triangles or flares</li>
            <li>Basic tools</li>
            <li>Jumper cables</li>
            <li>Water and non-perishable snacks</li>
          </ul>
          
          <h3>Tire Blowout</h3>
          <p>If you experience a sudden tire blowout:</p>
          <ul>
            <li>Resist the urge to brake abruptly</li>
            <li>Maintain a firm grip on the steering wheel</li>
            <li>Gradually ease off the accelerator</li>
            <li>Steer straight and avoid sharp turns</li>
            <li>Guide your car to a safe spot once slowed down</li>
          </ul>
          
          <h3>Brake Failure</h3>
          <p>If your brakes fail:</p>
          <ul>
            <li>Shift into a lower gear for engine braking</li>
            <li>Gently and repeatedly apply the emergency brake</li>
            <li>Look for a safe area to pull over</li>
            <li>Use horn and hazard lights to warn other drivers</li>
          </ul>
        `,
        quizQuestions: [
          {
            questionText: 'If your car breaks down on the road, what is the first thing you should do?',
            options: ['Abandon the car', 'Call a tow truck immediately', 'Pull over safely and turn on hazard lights', 'Attempt to fix the car yourself'],
            correctAnswer: 'Pull over safely and turn on hazard lights',
            explanation: 'The safest first action is to pull over to a secure spot and turn on your hazard lights to alert other drivers.'
          },
          {
            questionText: 'If your vehicle starts to skid, the correct response is to:',
            options: ['Brake hard immediately', 'Steer in the direction you want the vehicle to go', 'Accelerate to regain control', 'Turn the steering wheel sharply'],
            correctAnswer: 'Steer in the direction you want the vehicle to go',
            explanation: 'When your vehicle skids, steer smoothly in the direction you want to go and avoid slamming on the brakes.'
          }
        ]
      },
      {
        title: 'Emergency Vehicles & Move Over Law',
        description: 'Florida\'s Move Over law and responding to emergency vehicles',
        estimatedMinutes: 25,
        content: `
          <h2>Emergency Vehicles & The Move Over Law</h2>
          <p>Florida law requires drivers to slow down and move over for emergency vehicles stopped on the roadside with flashing lights, whether they are police cars, ambulances, or tow trucks.</p>
          
          <h3>Florida's Move Over Law</h3>
          <p>This law is designed to provide a protective buffer zone for emergency responders who are often in vulnerable positions. The law applies to:</p>
          <ul>
            <li>Police vehicles</li>
            <li>Ambulances</li>
            <li>Fire trucks</li>
            <li>Tow trucks</li>
            <li>Utility service vehicles</li>
            <li>Sanitation vehicles</li>
          </ul>
          
          <h3>What You Must Do</h3>
          <p>When approaching an emergency vehicle stopped on the roadside:</p>
          <ol>
            <li><strong>On multi-lane roads:</strong> Move over to a lane away from the stopped vehicle</li>
            <li><strong>If unable to move over:</strong> Slow down to 20 mph below the posted speed limit</li>
            <li><strong>On two-lane roads:</strong> Slow down significantly and proceed with caution</li>
          </ol>
          
          <div class="alert alert-warning">
            <strong>Penalties:</strong> Failure to comply with this law is not only dangerous but can also result in hefty fines and points added to your driving record.
          </div>
          
          <h3>Approaching Emergency Vehicles</h3>
          <p>When an emergency vehicle approaches with flashing lights and sirens:</p>
          <ul>
            <li>Pull to the nearest edge of the roadway</li>
            <li>Stop until the emergency vehicle passes</li>
            <li>Do not follow within 500 feet of the emergency vehicle</li>
            <li>Never stop in an intersection—proceed through first, then pull over</li>
          </ul>
        `,
        quizQuestions: [
          {
            questionText: 'When you see an emergency vehicle stopped on the roadside, what must you do?',
            options: ['Speed up to pass quickly', 'Slow down and move over', 'Stop completely', 'Honk to alert them'],
            correctAnswer: 'Slow down and move over',
            explanation: 'Florida\'s Move Over law requires you to move to another lane or slow down when approaching stopped emergency vehicles.'
          },
          {
            questionText: 'You must always slow down and move over for emergency vehicles stopped on the roadside.',
            questionType: 'true_false',
            options: ['True', 'False'],
            correctAnswer: 'True',
            explanation: 'Florida law requires drivers to move over or slow down for stopped emergency vehicles with flashing lights.'
          },
          {
            questionText: 'What is the primary reason you should slow down and move over for emergency vehicles?',
            options: ['To avoid getting a ticket', 'To ensure the safety of emergency responders', 'To save time', 'To show respect'],
            correctAnswer: 'To ensure the safety of emergency responders',
            explanation: 'The Move Over law is designed to protect emergency responders who are in vulnerable positions while working on the roadside.'
          }
        ]
      },
      {
        title: 'Defensive Driving Techniques',
        description: 'Proactive strategies for anticipating and avoiding hazards',
        estimatedMinutes: 45,
        content: `
          <h2>Defensive Driving Techniques</h2>
          <p>Defensive driving is a proactive approach that prepares you to anticipate and respond to potential hazards on the road.</p>
          
          <h3>Key Principles</h3>
          <ul>
            <li><strong>Maintain a safe following distance:</strong> Use the 3-second rule under normal conditions</li>
            <li><strong>Scan the road ahead:</strong> Look 10-15 seconds ahead for potential obstacles</li>
            <li><strong>Avoid aggressive driving:</strong> Don't tailgate or speed excessively</li>
            <li><strong>Adapt to conditions:</strong> Adjust for weather and traffic</li>
            <li><strong>Use turn signals:</strong> Communicate your intentions to other drivers</li>
          </ul>
          
          <h3>The Three-Second Rule</h3>
          <p>To maintain a safe following distance:</p>
          <ol>
            <li>Pick a stationary object on the road (sign, tree, etc.)</li>
            <li>When the vehicle ahead passes it, start counting</li>
            <li>Count "one-thousand-one, one-thousand-two, one-thousand-three"</li>
            <li>If you reach the object before finishing, increase your distance</li>
          </ol>
          
          <div class="alert alert-info">
            <strong>Tip:</strong> In adverse weather conditions or poor visibility, increase this to 4-6 seconds.
          </div>
          
          <h3>Scanning Techniques</h3>
          <ul>
            <li><strong>Look far ahead:</strong> Observe 10-15 seconds down the road</li>
            <li><strong>Check mirrors:</strong> Every 5-8 seconds</li>
            <li><strong>Check blind spots:</strong> Before every lane change</li>
            <li><strong>Watch for pedestrians and cyclists:</strong> Especially at intersections</li>
          </ul>
          
          <h3>Always Have an Escape Plan</h3>
          <p>A defensive driver is prepared for the unexpected by keeping an eye on alternate routes or escape paths. Whether it's swerving to avoid a collision or stopping suddenly, knowing your options in advance can make the difference in a critical moment.</p>
          
          <h3>Benefits of Defensive Driving</h3>
          <ul>
            <li>Fewer accidents through proactive strategies</li>
            <li>Lower stress levels while driving</li>
            <li>Cost savings from avoiding repairs and insurance claims</li>
            <li>Potential insurance discounts</li>
          </ul>
        `,
        quizQuestions: [
          {
            questionText: 'Defensive driving can help you:',
            options: ['Ignore traffic laws', 'Avoid potential hazards on the road', 'Speed without getting caught', 'Drive more aggressively'],
            correctAnswer: 'Avoid potential hazards on the road',
            explanation: 'Defensive driving helps you anticipate and avoid potential hazards, making you a safer driver.'
          },
          {
            questionText: 'You should always check your blind spots before changing lanes.',
            questionType: 'true_false',
            options: ['True', 'False'],
            correctAnswer: 'True',
            explanation: 'Checking blind spots before lane changes is essential to avoid collisions with vehicles you cannot see in your mirrors.'
          },
          {
            questionText: 'What is the recommended following distance rule under normal driving conditions?',
            options: ['1-second rule', '2-second rule', '3-second rule', '5-second rule'],
            correctAnswer: '3-second rule',
            explanation: 'The 3-second rule provides adequate reaction time under normal driving conditions.'
          }
        ]
      },
      {
        title: 'Road Signs and Signals',
        description: 'Understanding traffic signs, signals, and road markings',
        estimatedMinutes: 30,
        content: `
          <h2>Road Signs and Signals</h2>
          <p>Road signs and signals are the language of the road, providing critical information that ensures the safe and efficient flow of traffic.</p>
          
          <h3>Types of Road Signs</h3>
          
          <h4>Regulatory Signs</h4>
          <p>These signs provide direct instructions that must be obeyed:</p>
          <ul>
            <li>Stop signs (red octagon)</li>
            <li>Yield signs (red and white triangle)</li>
            <li>Speed limit signs</li>
            <li>No U-turn, Do Not Enter signs</li>
          </ul>
          
          <h4>Warning Signs</h4>
          <p>Typically diamond-shaped and yellow or orange, alerting you to potential hazards:</p>
          <ul>
            <li>Sharp curves ahead</li>
            <li>Merging lanes</li>
            <li>School zones</li>
            <li>Animal crossings</li>
            <li>Pedestrian crosswalks</li>
          </ul>
          
          <h4>Guide Signs</h4>
          <p>Often rectangular and green or blue, providing directional information:</p>
          <ul>
            <li>Highway exit signs</li>
            <li>Mile markers</li>
            <li>Rest area locations</li>
            <li>City route directions</li>
          </ul>
          
          <h3>Traffic Signals</h3>
          <ul>
            <li><strong>Red:</strong> Stop completely behind the stop line</li>
            <li><strong>Yellow:</strong> Slow down, prepare to stop</li>
            <li><strong>Green:</strong> Proceed if intersection is clear</li>
            <li><strong>Flashing Red:</strong> Treat as a stop sign</li>
            <li><strong>Flashing Yellow:</strong> Proceed with caution</li>
          </ul>
          
          <h3>Road Markings</h3>
          <ul>
            <li><strong>Solid White Line:</strong> Discourage lane changes</li>
            <li><strong>Broken White Line:</strong> May change lanes when safe</li>
            <li><strong>Double Yellow Lines:</strong> No passing zone</li>
            <li><strong>Crosswalks:</strong> Pedestrians have right-of-way</li>
          </ul>
        `,
        quizQuestions: [
          {
            questionText: 'If you encounter a flashing yellow light, you should:',
            options: ['Stop completely', 'Proceed with caution', 'Speed through the intersection', 'Treat it as a green light'],
            correctAnswer: 'Proceed with caution',
            explanation: 'A flashing yellow light means proceed with caution, remaining alert for cross traffic or hazards.'
          },
          {
            questionText: 'What does a solid white line on the road indicate?',
            options: ['You may change lanes freely', 'Lane changes are discouraged', 'Lane changes are required', 'Speed up in this lane'],
            correctAnswer: 'Lane changes are discouraged',
            explanation: 'Solid white lines indicate lane changes are discouraged or prohibited in that area.'
          }
        ]
      },
      {
        title: 'Sharing the Road',
        description: 'Safely sharing the road with pedestrians, cyclists, and other vehicles',
        estimatedMinutes: 30,
        content: `
          <h2>Sharing the Road</h2>
          <p>The road is for everyone, not just motor vehicles. Sharing the road responsibly means being mindful of pedestrians, cyclists, motorcyclists, and large vehicles like trucks and buses.</p>
          
          <h3>Pedestrians</h3>
          <ul>
            <li>Always yield the right of way at crosswalks</li>
            <li>Remain vigilant in school zones or residential areas</li>
            <li>Watch for children who may suddenly enter the street</li>
            <li>Be extra cautious in low-visibility conditions</li>
          </ul>
          
          <h3>Cyclists</h3>
          <ul>
            <li>Give at least three feet of space when passing</li>
            <li>Watch for bike lanes</li>
            <li>Check for cyclists before opening car doors</li>
            <li>Be patient—they have the same rights as motor vehicles</li>
          </ul>
          
          <h3>Motorcyclists</h3>
          <ul>
            <li>Motorcycles may be harder to spot—double-check blind spots</li>
            <li>Allow extra following distance</li>
            <li>Never share a lane with a motorcycle</li>
            <li>Be alert at intersections</li>
          </ul>
          
          <h3>Large Vehicles (Trucks and Buses)</h3>
          <ul>
            <li>Require extra space for turns and braking</li>
            <li>Have larger blind spots—avoid lingering beside them</li>
            <li>Pass quickly and safely</li>
            <li>Maintain enough distance to see their mirrors</li>
          </ul>
          
          <h3>School Buses</h3>
          <div class="alert alert-danger">
            <strong>Important:</strong> When approaching a school bus with flashing red lights, you MUST stop until the lights stop flashing. This applies to all lanes of traffic unless there is a physical barrier.
          </div>
        `,
        quizQuestions: [
          {
            questionText: 'If you see a pedestrian crossing the road at a crosswalk, you should:',
            options: ['Slow down and let them cross', 'Honk to alert them', 'Speed past them', 'Flash your lights at them'],
            correctAnswer: 'Slow down and let them cross',
            explanation: 'Pedestrians have the right of way at crosswalks. You must slow down and let them cross safely.'
          },
          {
            questionText: 'Drivers must yield to cyclists when making a turn.',
            questionType: 'true_false',
            options: ['True', 'False'],
            correctAnswer: 'True',
            explanation: 'Cyclists have the same rights as motor vehicles, and drivers must yield to them when turning.'
          },
          {
            questionText: 'What should you do when approaching a school bus with flashing red lights?',
            options: ['Stop until the lights stop flashing', 'Pass the bus carefully', 'Honk and proceed slowly', 'Ignore the lights'],
            correctAnswer: 'Stop until the lights stop flashing',
            explanation: 'You must stop for a school bus with flashing red lights until the lights stop flashing.'
          }
        ]
      },
      {
        title: 'Certification & Final Assessment',
        description: 'Course completion requirements and final exam preparation',
        estimatedMinutes: 15,
        content: `
          <h2>Certification Requirements</h2>
          <p>Upon completing this online traffic school course, participants will receive a certificate of completion.</p>
          
          <h3>Certificate Submission</h3>
          <p>This document is required to be submitted to the Florida Department of Highway Safety and Motor Vehicles (FLHSMV) as proof of fulfilling the traffic school requirement.</p>
          
          <p>The certificate not only demonstrates compliance but also reflects your dedication to improving your driving skills and ensuring the safety of others on the road.</p>
          
          <h3>Keep Your Certificate Safe</h3>
          <p>Keep the certificate in a safe place, as it may also be required for:</p>
          <ul>
            <li>Insurance discounts</li>
            <li>Future legal purposes</li>
            <li>Employer verification</li>
            <li>Court documentation</li>
          </ul>
          
          <h3>Final Exam Requirements</h3>
          <p>The final test is designed to assess your understanding of the material covered in this course:</p>
          <ul>
            <li>Minimum 30 questions</li>
            <li>Mix of multiple-choice and true/false questions</li>
            <li>Passing score: 80%</li>
            <li>Multiple attempts allowed</li>
            <li>Open-book format for your convenience</li>
          </ul>
          
          <div class="alert alert-success">
            <strong>Congratulations!</strong> You're almost done! Complete the final exam to receive your certificate.
          </div>
        `,
        quizQuestions: [
          {
            questionText: 'What is the minimum score required to pass the final test?',
            options: ['70%', '75%', '80%', '90%'],
            correctAnswer: '80%',
            explanation: 'The final exam requires a minimum score of 80% to pass.'
          },
          {
            questionText: 'Completing this course guarantees that you will never receive a traffic violation.',
            questionType: 'true_false',
            options: ['True', 'False'],
            correctAnswer: 'False',
            explanation: 'Completing this course improves your driving knowledge but does not guarantee you will never receive a violation.'
          }
        ]
      }
    ],
    finalExamQuestions: [
      {
        questionText: 'What is the legal stance on texting and driving in Florida?',
        options: ['Allowed at red lights', 'Allowed only on highways', 'Completely prohibited', 'Allowed if using hands-free features'],
        correctAnswer: 'Completely prohibited',
        explanation: 'In Florida, texting while driving is completely prohibited, even when stopped at a red light.'
      },
      {
        questionText: 'If your car breaks down on the road, what is the first thing you should do?',
        options: ['Call a tow truck immediately', 'Pull over safely and turn on hazard lights', 'Attempt to fix the car yourself', 'Abandon the car'],
        correctAnswer: 'Pull over safely and turn on hazard lights',
        explanation: 'The safest first action is to pull over to a secure spot and turn on your hazard lights.'
      },
      {
        questionText: 'When approaching a red light in Florida, is it legal to use your phone?',
        options: ['Yes, as long as you are not moving', 'No, it is illegal'],
        correctAnswer: 'No, it is illegal',
        explanation: 'Florida law prohibits texting while driving, even when stopped at a red light.'
      },
      {
        questionText: 'When you see an emergency vehicle stopped on the roadside, what must you do?',
        options: ['Speed up to pass quickly', 'Slow down and move over', 'Stop completely', 'Flash your lights'],
        correctAnswer: 'Slow down and move over',
        explanation: 'Florida\'s Move Over law requires you to slow down and move over for stopped emergency vehicles.'
      },
      {
        questionText: 'It is legal to use your phone at a red light in Florida.',
        questionType: 'true_false',
        options: ['True', 'False'],
        correctAnswer: 'False',
        explanation: 'Florida law prohibits texting while driving, including at red lights.'
      },
      {
        questionText: 'You must always slow down and move over for emergency vehicles stopped on the roadside.',
        questionType: 'true_false',
        options: ['True', 'False'],
        correctAnswer: 'True',
        explanation: 'The Move Over law requires drivers to move over or slow down for stopped emergency vehicles.'
      },
      {
        questionText: 'Passing a traffic school test requires a minimum score of 90%.',
        questionType: 'true_false',
        options: ['True', 'False'],
        correctAnswer: 'False',
        explanation: 'The final exam requires a minimum passing score of 80%, not 90%.'
      },
      {
        questionText: 'The test is open-book for your convenience.',
        questionType: 'true_false',
        options: ['True', 'False'],
        correctAnswer: 'True',
        explanation: 'The course materials remain available during the final exam.'
      },
      {
        questionText: 'Completing this course guarantees that you will never receive a traffic violation.',
        questionType: 'true_false',
        options: ['True', 'False'],
        correctAnswer: 'False',
        explanation: 'Completing this course improves your knowledge but does not guarantee violation-free driving.'
      },
      {
        questionText: 'If you see a pedestrian crossing the road at a crosswalk, you should:',
        options: ['Slow down and let them cross', 'Honk to alert them', 'Speed past them', 'Flash your lights'],
        correctAnswer: 'Slow down and let them cross',
        explanation: 'Pedestrians have the right of way at crosswalks.'
      },
      {
        questionText: 'If you are involved in a minor accident with no injuries, you should:',
        options: ['Leave the scene immediately', 'Exchange information with the other driver and report the accident if required', 'Ignore it and drive away', 'Wait for police without doing anything'],
        correctAnswer: 'Exchange information with the other driver and report the accident if required',
        explanation: 'You must exchange information with the other driver and report the accident if required by law.'
      },
      {
        questionText: 'When driving in rainy conditions, you should:',
        options: ['Increase your speed to avoid hydroplaning', 'Reduce your speed and turn on your headlights', 'Maintain your speed and use hazard lights', 'Turn off all lights'],
        correctAnswer: 'Reduce your speed and turn on your headlights',
        explanation: 'In rain, reduce speed, increase following distance, and turn on headlights for visibility.'
      },
      {
        questionText: 'If your vehicle starts to skid, the correct response is to:',
        options: ['Brake hard immediately', 'Steer in the direction you want the vehicle to go', 'Accelerate to regain control', 'Turn sharply away from the skid'],
        correctAnswer: 'Steer in the direction you want the vehicle to go',
        explanation: 'Steer smoothly in the direction you want to go and avoid sudden braking.'
      },
      {
        questionText: 'When merging onto a highway, you should:',
        options: ['Stop at the end of the on-ramp until traffic clears', 'Adjust your speed to match the flow of traffic and merge safely', 'Speed up aggressively to enter traffic', 'Slow down significantly below highway speed'],
        correctAnswer: 'Adjust your speed to match the flow of traffic and merge safely',
        explanation: 'Match the flow of traffic and merge smoothly using the acceleration lane.'
      },
      {
        questionText: 'What is the primary reason you should slow down and move over for emergency vehicles?',
        options: ['To avoid getting a ticket', 'To ensure the safety of emergency responders', 'To save time', 'To show respect'],
        correctAnswer: 'To ensure the safety of emergency responders',
        explanation: 'The Move Over law protects emergency responders who are in vulnerable positions.'
      },
      {
        questionText: 'What should you do if you encounter dense fog while driving?',
        options: ['Turn on your high-beam headlights', 'Reduce speed and use low-beam headlights', 'Stop on the roadway until the fog clears', 'Speed up to get through the fog faster'],
        correctAnswer: 'Reduce speed and use low-beam headlights',
        explanation: 'Use low-beam headlights in fog as high beams reflect off fog and reduce visibility.'
      },
      {
        questionText: 'Why should you avoid distractions like phone use while driving?',
        options: ['It is illegal in all states', 'It increases reaction time and the risk of accidents', 'It ensures your phone battery lasts longer', 'It is only dangerous at high speeds'],
        correctAnswer: 'It increases reaction time and the risk of accidents',
        explanation: 'Distractions increase reaction time and significantly raise accident risk.'
      },
      {
        questionText: 'When parking downhill, what should you do?',
        options: ['Turn the wheels away from the curb', 'Turn the wheels toward the curb', 'Leave the wheels straight', 'It does not matter'],
        correctAnswer: 'Turn the wheels toward the curb',
        explanation: 'When parking downhill, turn wheels toward the curb so the car rolls into the curb if brakes fail.'
      },
      {
        questionText: 'Defensive driving can help you:',
        options: ['Ignore traffic laws', 'Avoid potential hazards on the road', 'Speed without getting caught', 'Drive more aggressively'],
        correctAnswer: 'Avoid potential hazards on the road',
        explanation: 'Defensive driving helps you anticipate and avoid potential hazards.'
      },
      {
        questionText: 'What should you do when approaching a school bus with flashing red lights?',
        options: ['Stop until the lights stop flashing', 'Pass the bus carefully', 'Honk and proceed slowly', 'Ignore the lights'],
        correctAnswer: 'Stop until the lights stop flashing',
        explanation: 'You must stop for a school bus with flashing red lights.'
      },
      {
        questionText: 'When turning right at an intersection, you should:',
        options: ['Yield to pedestrians crossing the street', 'Speed through the turn', 'Ignore traffic signals', 'Only check for vehicles'],
        correctAnswer: 'Yield to pedestrians crossing the street',
        explanation: 'Always yield to pedestrians when making turns.'
      },
      {
        questionText: 'If you encounter a flashing yellow light, you should:',
        options: ['Stop completely', 'Proceed with caution', 'Speed through the intersection', 'Treat it as a green light'],
        correctAnswer: 'Proceed with caution',
        explanation: 'A flashing yellow light means proceed with caution.'
      },
      {
        questionText: 'When parking on a hill, you should:',
        options: ['Leave the car in neutral', 'Use the parking brake and turn the wheels appropriately', 'Ignore safety precautions', 'Leave the car running'],
        correctAnswer: 'Use the parking brake and turn the wheels appropriately',
        explanation: 'Always use the parking brake and turn wheels appropriately when parking on hills.'
      },
      {
        questionText: 'What does a solid white line on the road indicate?',
        options: ['You may change lanes freely', 'Lane changes are discouraged', 'Lane changes are required', 'Speed limit change ahead'],
        correctAnswer: 'Lane changes are discouraged',
        explanation: 'Solid white lines indicate lane changes are discouraged.'
      },
      {
        questionText: 'You should always check your blind spots before changing lanes.',
        questionType: 'true_false',
        options: ['True', 'False'],
        correctAnswer: 'True',
        explanation: 'Always check blind spots before changing lanes to avoid collisions.'
      },
      {
        questionText: 'It is acceptable to follow another vehicle closely if you are running late.',
        questionType: 'true_false',
        options: ['True', 'False'],
        correctAnswer: 'False',
        explanation: 'Tailgating is dangerous regardless of circumstances. Maintain safe following distance.'
      },
      {
        questionText: 'Drivers must yield to cyclists when making a turn.',
        questionType: 'true_false',
        options: ['True', 'False'],
        correctAnswer: 'True',
        explanation: 'Cyclists have the same rights as motor vehicles and you must yield to them.'
      },
      {
        questionText: 'You should use high-beam headlights in heavy traffic at night.',
        questionType: 'true_false',
        options: ['True', 'False'],
        correctAnswer: 'False',
        explanation: 'Use low-beam headlights in heavy traffic to avoid blinding other drivers.'
      },
      {
        questionText: 'Speed limits are suggestions rather than laws.',
        questionType: 'true_false',
        options: ['True', 'False'],
        correctAnswer: 'False',
        explanation: 'Speed limits are laws that must be obeyed. Violations result in fines and points.'
      },
      {
        questionText: 'How many attempts are allowed to achieve a passing score?',
        options: ['One attempt', 'Multiple attempts', 'Three attempts', 'No limit specified'],
        correctAnswer: 'Multiple attempts',
        explanation: 'You are allowed multiple attempts to pass the final exam.'
      }
    ]
  },

  // ===========================
  // 8-Hour Intermediate Driver Improvement Course
  // ===========================
  course8Hour: {
    name: '8-Hour Intermediate Driver Improvement (IDI)',
    slug: 'florida-8-hour-idi',
    description: 'Court-ordered course for multiple traffic violations. Comprehensive training covering defensive driving techniques, hazard recognition, adverse weather driving, and managing interactions with other road users.',
    durationHours: 8,
    price: 55.00,
    modules: [
      {
        title: 'Module 1: Introduction to Driver Improvement',
        description: 'Course objectives and importance of safe driving',
        estimatedMinutes: 30,
        content: `
          <h2>Introduction to Driver Improvement</h2>
          <p>Driving is an essential skill that requires not only technical expertise but also a profound commitment to safety and responsibility. Driver improvement programs are designed to educate participants on the importance of safe driving practices, traffic laws, and the consequences of risky behavior behind the wheel.</p>
          
          <h3>The Importance of Driver Improvement</h3>
          <p>Driver improvement is a critical aspect of road safety. Every year, thousands of accidents occur due to distracted driving, speeding, impaired driving, and other preventable behaviors. By enrolling in a driver improvement course, individuals can:</p>
          <ul>
            <li>Refresh their knowledge of traffic regulations</li>
            <li>Learn defensive driving techniques</li>
            <li>Understand the importance of maintaining focus on the road</li>
          </ul>
          
          <h3>Goals of the Course</h3>
          <p>This program aims to:</p>
          <ul>
            <li>Enhance participants' understanding of traffic laws and their implications</li>
            <li>Promote safe and responsible driving practices</li>
            <li>Reduce preventable accidents and fatalities on the road</li>
            <li>Improve awareness of how driving habits affect insurance rates and legal standing</li>
            <li>Equip drivers with the tools needed to address emergencies and unforeseen situations</li>
          </ul>
          
          <h3>Who Should Attend?</h3>
          <p>Driver improvement courses are beneficial for:</p>
          <ul>
            <li>Individuals seeking to refresh their knowledge of traffic laws</li>
            <li>Drivers who have received traffic violations and want to avoid future infractions</li>
            <li>New drivers aiming to build a foundation of safe driving habits</li>
            <li>Experienced drivers interested in enhancing their defensive driving techniques</li>
          </ul>
          
          <h3>Course Structure</h3>
          <p>The driver improvement program is divided into multiple modules:</p>
          <ul>
            <li>Module 1: Introduction to Driver Improvement</li>
            <li>Module 2: Defensive Driving Techniques</li>
            <li>Module 3: Handling Adverse Conditions</li>
            <li>Module 4: Managing Interactions with Other Road Users</li>
            <li>Module 5: Navigating Adverse Weather Conditions</li>
            <li>Module 6: Assessment and Review</li>
          </ul>
        `,
        quizQuestions: []
      },
      {
        title: 'Module 2: Defensive Driving Techniques',
        description: 'Mastering the skills to avoid hazards',
        estimatedMinutes: 60,
        content: `
          <h2>Defensive Driving Techniques</h2>
          <p>Defensive driving is a proactive approach to operating a vehicle in which the driver takes into account not only their own behavior but also the potential actions of others on the road. The goal is to anticipate hazards, minimize risks, and ensure the safety of everyone.</p>
          
          <h3>Key Defensive Driving Principles</h3>
          
          <h4>1. Stay Alert and Focused</h4>
          <p>A defensive driver is always attentive to their surroundings. This means:</p>
          <ul>
            <li>Avoiding distractions such as mobile phones and loud music</li>
            <li>Regularly checking mirrors</li>
            <li>Monitoring the behavior of other drivers, pedestrians, and cyclists</li>
          </ul>
          
          <h4>2. Maintain a Safe Following Distance</h4>
          <p>The "three-second rule" is a helpful guideline:</p>
          <ol>
            <li>Pick a stationary object on the road</li>
            <li>Ensure at least three seconds pass between the vehicle in front passing it and your car reaching the same point</li>
            <li>In adverse weather conditions or poor visibility, increase this distance</li>
          </ol>
          
          <h4>3. Anticipate the Actions of Others</h4>
          <p>Drivers should assume that others on the road may not always act predictably. Watch for:</p>
          <ul>
            <li>Sudden lane changes</li>
            <li>Hard braking</li>
            <li>Failure to yield</li>
          </ul>
          
          <h4>4. Adapt to Adverse Conditions</h4>
          <p>Road conditions can change unexpectedly. Defensive drivers adjust their:</p>
          <ul>
            <li>Speed</li>
            <li>Headlights</li>
            <li>Following distance</li>
          </ul>
          
          <h4>5. Always Have an Escape Plan</h4>
          <p>Keep an eye on alternate routes or escape paths. Whether it's swerving to avoid a collision or stopping suddenly, knowing your options in advance can make the difference in a critical moment.</p>
          
          <h3>Scanning Techniques</h3>
          <ul>
            <li><strong>Scanning the Road Ahead:</strong> Observe the road well ahead to identify potential hazards early</li>
            <li><strong>Managing Blind Spots:</strong> Frequently check blind spots, especially when changing lanes</li>
            <li><strong>Using Signals Effectively:</strong> Communicate your intentions through turn signals and brake lights</li>
            <li><strong>Controlling Speed:</strong> Driving at appropriate speeds provides better control and increases reaction time</li>
          </ul>
          
          <h3>Benefits of Defensive Driving</h3>
          <ul>
            <li><strong>Fewer Accidents:</strong> Proactive strategies help avoid collisions</li>
            <li><strong>Lower Stress Levels:</strong> Anticipating hazards makes driving more relaxed</li>
            <li><strong>Cost Savings:</strong> Avoid expenses related to repairs, insurance claims, and medical bills</li>
          </ul>
        `,
        quizQuestions: [
          {
            questionText: 'What is the recommended minimum following distance under normal driving conditions?',
            options: ['One second', 'Two seconds', 'Three seconds', 'Five seconds'],
            correctAnswer: 'Three seconds',
            explanation: 'The three-second rule provides adequate time to react to sudden stops or hazards.'
          },
          {
            questionText: 'A defensive driver should assume that other drivers will always act predictably.',
            questionType: 'true_false',
            options: ['True', 'False'],
            correctAnswer: 'False',
            explanation: 'Defensive drivers should assume others may act unpredictably and be prepared to react.'
          }
        ]
      },
      {
        title: 'Module 3: Handling Adverse Conditions',
        description: 'Weather challenges and emergency handling',
        estimatedMinutes: 45,
        content: `
          <h2>Handling Adverse Conditions</h2>
          
          <h3>Weather Challenges</h3>
          <p>Driving in adverse weather, such as rain, snow, or fog, requires heightened vigilance and adaptability:</p>
          <ul>
            <li>Reduce your speed</li>
            <li>Maintain a greater following distance</li>
            <li>Use headlights appropriately to improve visibility</li>
            <li>Avoid sudden maneuvers that could lead to loss of control on slippery surfaces</li>
          </ul>
          
          <h3>Low-Light and Nighttime Driving</h3>
          <p>Driving at night or in low-light conditions presents unique challenges:</p>
          <ul>
            <li>Use high beams only when appropriate</li>
            <li>Avoid looking directly at oncoming headlights to reduce glare</li>
            <li>Ensure your vehicle's lights are functioning optimally</li>
            <li>Stay alert for pedestrians, cyclists, and animals that may be harder to spot</li>
          </ul>
          
          <h3>Dealing with Emergencies</h3>
          <p>Unexpected situations, such as tire blowouts, engine failures, or obstacles on the road, require a calm and calculated response:</p>
          
          <h4>Tire Blowout</h4>
          <ul>
            <li>Grip the steering wheel firmly</li>
            <li>Ease off the accelerator</li>
            <li>Steer gently to safety</li>
          </ul>
          
          <h4>Engine Failure</h4>
          <ul>
            <li>Activate turn signal</li>
            <li>Steer toward the side of the road</li>
            <li>Shift to neutral and coast safely</li>
            <li>Turn on hazard lights</li>
          </ul>
          
          <h4>Skidding</h4>
          <ul>
            <li>Remove foot from accelerator</li>
            <li>Steer smoothly in the direction you want to go</li>
            <li>Avoid slamming on the brakes</li>
          </ul>
        `,
        quizQuestions: [
          {
            questionText: 'What is the recommended practice for driving in foggy conditions?',
            options: ['Activate high beams to improve visibility', 'Use low-beam headlights or fog lights', 'Accelerate to pass through the fog quickly', 'Depend exclusively on GPS for navigation'],
            correctAnswer: 'Use low-beam headlights or fog lights',
            explanation: 'High beams reflect off fog and reduce visibility. Use low-beam headlights or fog lights instead.'
          },
          {
            questionText: 'High beams are suitable for use in foggy driving conditions.',
            questionType: 'true_false',
            options: ['True', 'False'],
            correctAnswer: 'False',
            explanation: 'High beams reflect off fog particles and actually worsen visibility.'
          }
        ]
      },
      {
        title: 'Module 4: Managing Interactions with Other Road Users',
        description: 'Understanding road user dynamics and sharing the road safely',
        estimatedMinutes: 45,
        content: `
          <h2>Managing Interactions with Other Road Users</h2>
          
          <h3>Understanding Road User Dynamics</h3>
          <p>Driving safely means not only maintaining control of your own vehicle but also anticipating the behaviors and movements of others. Roads are shared spaces requiring awareness of diverse users.</p>
          
          <h3>Sharing the Road with Pedestrians</h3>
          <ul>
            <li>Always yield at crosswalks and intersections, even if unmarked</li>
            <li>Be cautious in areas with heavy foot traffic, schools, and playgrounds</li>
            <li>Never assume that pedestrians see or hear your vehicle</li>
            <li>At night, look for reflective clothing or other indicators</li>
          </ul>
          
          <h3>Dealing with Cyclists</h3>
          <ul>
            <li>Cyclists have equal rights to use the road</li>
            <li>Maintain a safe passing distance of at least four feet (or as mandated by local laws)</li>
            <li>Be vigilant when opening car doors or making turns</li>
            <li>Avoid honking unnecessarily, as it can startle cyclists</li>
          </ul>
          
          <h3>Interacting with Motorcyclists</h3>
          <ul>
            <li>Motorcycles are smaller and less visible than cars</li>
            <li>Double-check blind spots and mirrors when changing lanes</li>
            <li>Allow extra following distance for their shorter stopping distances</li>
            <li>Signal your intentions clearly and early</li>
          </ul>
          
          <h3>Sharing the Road with Commercial Vehicles</h3>
          <ul>
            <li>Large vehicles have limited visibility, longer stopping distances, and larger blind spots</li>
            <li>Avoid lingering in their blind spots</li>
            <li>Pass them quickly and safely</li>
            <li>Be mindful of their wide turns and give them ample space</li>
          </ul>
          
          <h3>Handling Aggressive Drivers</h3>
          <ul>
            <li>Remain calm and avoid confrontation</li>
            <li>Do not match their aggressive behavior</li>
            <li>Allow them to pass and maintain a safe distance</li>
            <li>If necessary, report dangerous driving to local authorities</li>
          </ul>
        `,
        quizQuestions: [
          {
            questionText: 'When passing a cyclist, you should maintain at least how many feet of clearance?',
            options: ['Two feet', 'Three feet', 'Four feet', 'Six feet'],
            correctAnswer: 'Four feet',
            explanation: 'Maintain at least four feet of clearance when passing cyclists for their safety.'
          },
          {
            questionText: 'Strong winds have less impact on lighter vehicles compared to heavier ones.',
            questionType: 'true_false',
            options: ['True', 'False'],
            correctAnswer: 'False',
            explanation: 'Strong winds have more impact on lighter vehicles, making them more difficult to control.'
          }
        ]
      },
      {
        title: 'Module 5: Navigating Adverse Weather Conditions',
        description: 'Safety practices for challenging environments',
        estimatedMinutes: 45,
        content: `
          <h2>Navigating Adverse Weather Conditions</h2>
          
          <h3>Driving in Rain</h3>
          <p>Rainy conditions reduce visibility and increase the risk of hydroplaning:</p>
          <ul>
            <li>Ensure windshield wipers are functioning effectively</li>
            <li>Keep headlights on for better visibility</li>
            <li>Reduce your speed to account for slippery roads</li>
            <li>Maintain a greater following distance for longer stopping times</li>
            <li>Avoid sudden braking or sharp turns</li>
          </ul>
          
          <h3>Handling Snow and Ice</h3>
          <ul>
            <li>Equip your vehicle with winter tires or chains if driving in snowy regions</li>
            <li>Accelerate and brake gently to avoid skidding</li>
            <li>Steer smoothly to maintain control</li>
            <li>Clear your vehicle of snow and ice before driving</li>
            <li>Consider delaying your trip if roads are particularly treacherous</li>
          </ul>
          
          <h3>Adapting to Fog</h3>
          <ul>
            <li>Use low-beam headlights or fog lights</li>
            <li>Avoid using high beams (they reflect off fog and worsen visibility)</li>
            <li>Drive slowly and use road markings as a guide</li>
            <li>Increase your following distance</li>
            <li>If visibility is exceptionally poor, find a safe place to pull over</li>
          </ul>
          
          <h3>Driving in High Winds</h3>
          <ul>
            <li>Grip the steering wheel firmly</li>
            <li>Be prepared for sudden gusts</li>
            <li>Keep a safe distance from large trucks, buses, and other vehicles that may sway</li>
            <li>Avoid driving in areas with high wind warnings unless absolutely necessary</li>
          </ul>
          
          <h3>Navigating Flooded Roads</h3>
          <div class="alert alert-danger">
            <strong>Never attempt to drive through a flooded road!</strong> The depth and current of water can be deceptive. Turn around and find an alternative route.
          </div>
          <ul>
            <li>If caught in rising water, abandon your vehicle if necessary and move to higher ground</li>
            <li>Always stay informed about weather conditions and road closures</li>
          </ul>
        `,
        quizQuestions: [
          {
            questionText: 'How should you respond if trapped in rising floodwaters while driving?',
            options: ['Accelerate to navigate through the water', 'Seek an alternative route and avoid the flooded area', 'Exit the vehicle and move to higher ground if safety requires it', 'Wait for emergency services without leaving the vehicle'],
            correctAnswer: 'Exit the vehicle and move to higher ground if safety requires it',
            explanation: 'If trapped in rising floodwaters, your safety is the priority. Exit and move to higher ground if necessary.'
          },
          {
            questionText: 'Floodwaters can be deceptively hazardous, making it unsafe to drive through them.',
            questionType: 'true_false',
            options: ['True', 'False'],
            correctAnswer: 'True',
            explanation: 'Floodwaters are deceptive and dangerous. Never attempt to drive through flooded roads.'
          },
          {
            questionText: 'Why should winter tires or chains be used in snowy areas?',
            options: ['To improve the aesthetic of the vehicle', 'To optimize traction and minimize the risk of skidding', 'Because their usage is mandatory in all snowy regions', 'To enhance fuel efficiency during colder months'],
            correctAnswer: 'To optimize traction and minimize the risk of skidding',
            explanation: 'Winter tires provide better traction on snow and ice, reducing skidding risk.'
          }
        ]
      },
      {
        title: 'Module 6: Assessment for Modules 2-5',
        description: 'Knowledge evaluation and review',
        estimatedMinutes: 45,
        content: `
          <h2>Module Assessment</h2>
          <p>This module reviews the key concepts covered in Modules 2-5 and prepares you for the final examination.</p>
          
          <h3>Key Concepts Review</h3>
          
          <h4>Defensive Driving</h4>
          <ul>
            <li>Stay alert and focused at all times</li>
            <li>Maintain a safe 3-second following distance</li>
            <li>Anticipate the unpredictable actions of others</li>
            <li>Adapt to changing conditions</li>
            <li>Always have an escape plan</li>
          </ul>
          
          <h4>Handling Adverse Conditions</h4>
          <ul>
            <li>Reduce speed in rain, snow, fog, and wind</li>
            <li>Use appropriate lighting for conditions</li>
            <li>Increase following distance</li>
            <li>Know emergency handling techniques</li>
          </ul>
          
          <h4>Sharing the Road</h4>
          <ul>
            <li>Yield to pedestrians at crosswalks</li>
            <li>Give cyclists at least 4 feet when passing</li>
            <li>Double-check for motorcycles in blind spots</li>
            <li>Give commercial vehicles extra space</li>
            <li>Remain calm with aggressive drivers</li>
          </ul>
          
          <h4>Weather Driving Tips</h4>
          <ul>
            <li>Rain: Reduce speed, use headlights, avoid hydroplaning</li>
            <li>Snow/Ice: Gentle acceleration and braking, use winter tires</li>
            <li>Fog: Low-beam headlights, slow speed, increased distance</li>
            <li>Floods: Turn around, don't drown</li>
          </ul>
        `,
        quizQuestions: [
          {
            questionText: 'What is the safest course of action when encountering a flooded road?',
            options: ['Proceed without evaluating the depth and current of the water', 'Turn around and choose an alternative route', 'Drive through carefully at low speed', 'Wait for the water to recede'],
            correctAnswer: 'Turn around and choose an alternative route',
            explanation: 'Never attempt to drive through flooded roads. Turn around and find an alternative route.'
          },
          {
            questionText: 'When driving in snowy conditions, how should you handle acceleration?',
            options: ['Accelerate quickly to gain momentum', 'Accelerate gently to avoid skidding', 'Avoid acceleration altogether', 'Use high-speed acceleration for efficiency'],
            correctAnswer: 'Accelerate gently to avoid skidding',
            explanation: 'Gentle acceleration prevents wheel spin and skidding on snowy roads.'
          },
          {
            questionText: 'Defensive driving involves preparedness and adapting to challenging circumstances.',
            questionType: 'true_false',
            options: ['True', 'False'],
            correctAnswer: 'True',
            explanation: 'Defensive driving requires constant preparedness and adaptation to changing conditions.'
          }
        ]
      }
    ],
    finalExamQuestions: [
      // Weather and conditions questions
      {
        questionText: 'What is the recommended practice for driving in foggy conditions?',
        options: ['Activate high beams to improve visibility', 'Use low-beam headlights or fog lights', 'Accelerate to pass through the fog quickly', 'Depend exclusively on GPS for navigation'],
        correctAnswer: 'Use low-beam headlights or fog lights',
        explanation: 'High beams reflect off fog and worsen visibility. Use low-beam or fog lights.'
      },
      {
        questionText: 'How should you respond if trapped in rising floodwaters while driving?',
        options: ['Accelerate to navigate through the water', 'Seek an alternative route', 'Exit the vehicle and move to higher ground if safety requires it', 'Wait without leaving the vehicle'],
        correctAnswer: 'Exit the vehicle and move to higher ground if safety requires it',
        explanation: 'Your safety is the priority in rising floodwaters. Exit and seek higher ground if necessary.'
      },
      {
        questionText: 'Which precaution is most effective when driving in high wind conditions?',
        options: ['Utilize cruise control for steady speed', 'Maintain a firm grip on the steering wheel and avoid abrupt movements', 'Follow closely behind large vehicles for stabilization', 'Ignore wind advisories if operating a heavier vehicle'],
        correctAnswer: 'Maintain a firm grip on the steering wheel and avoid abrupt movements',
        explanation: 'A firm grip helps maintain control during sudden wind gusts.'
      },
      {
        questionText: 'Why should winter tires or chains be used in snowy areas?',
        options: ['To improve the aesthetic of the vehicle', 'To optimize traction and minimize the risk of skidding', 'Because their usage is mandatory in all snowy regions', 'To enhance fuel efficiency'],
        correctAnswer: 'To optimize traction and minimize the risk of skidding',
        explanation: 'Winter tires provide better traction on snow and ice.'
      },
      {
        questionText: 'What is the safest course of action when encountering a flooded road?',
        options: ['Proceed without evaluating the water depth', 'Turn around and choose an alternative route', 'Monitor weather updates and road conditions', 'Abandon the vehicle only when trapped'],
        correctAnswer: 'Turn around and choose an alternative route',
        explanation: 'Never drive through flooded roads. Turn around and find another way.'
      },
      // Defensive driving questions
      {
        questionText: 'When driving in snowy conditions, how should you handle acceleration?',
        options: ['Accelerate quickly to gain momentum', 'Accelerate gently to avoid skidding', 'Avoid acceleration altogether', 'Use high-speed acceleration for efficiency'],
        correctAnswer: 'Accelerate gently to avoid skidding',
        explanation: 'Gentle acceleration prevents wheel spin and skidding.'
      },
      {
        questionText: 'What is the purpose of clearing snow and ice off your vehicle before driving?',
        options: ['To save fuel during the trip', 'To reduce the risk of skidding', 'To prevent obstructed visibility', 'To enhance the vehicle appearance'],
        correctAnswer: 'To prevent obstructed visibility',
        explanation: 'Snow and ice on your vehicle can obstruct your view and fall onto other vehicles.'
      },
      {
        questionText: 'How can road markings assist when driving in foggy conditions?',
        options: ['They are unnecessary and can be ignored', 'They can serve as guides for navigation', 'They indicate areas to increase speed', 'They help identify parking spaces'],
        correctAnswer: 'They can serve as guides for navigation',
        explanation: 'Road markings help you stay in your lane when visibility is reduced.'
      },
      {
        questionText: 'What should you do when visibility in fog becomes exceptionally poor?',
        options: ['Speed up to leave the foggy area quickly', 'Find a safe place to pull over and wait for the fog to dissipate', 'Turn on your high beams for better visibility', 'Drive close to other vehicles to use their lights'],
        correctAnswer: 'Find a safe place to pull over and wait for the fog to dissipate',
        explanation: 'If visibility is extremely poor, pull over safely and wait for conditions to improve.'
      },
      {
        questionText: 'If you encounter large vehicles during high winds, what is the safest precaution?',
        options: ['Tailgate them to maintain stability', 'Pass them quickly without assessing conditions', 'Follow at a close distance for wind protection', 'Keep a safe distance to avoid swaying or drifting hazards'],
        correctAnswer: 'Keep a safe distance to avoid swaying or drifting hazards',
        explanation: 'Large vehicles can sway in high winds. Keep a safe distance.'
      },
      // More assessment questions
      {
        questionText: 'What is a general defensive driving strategy for adverse weather conditions?',
        options: ['Ignore weather warnings and proceed as usual', 'Stay prepared, vigilant, and cautious', 'Rely entirely on vehicle technology for safety', 'Speed up to minimize time spent in danger zones'],
        correctAnswer: 'Stay prepared, vigilant, and cautious',
        explanation: 'Being prepared, vigilant, and cautious is key to safe driving in adverse conditions.'
      },
      {
        questionText: 'What is a common cause of loss of control during high winds?',
        options: ['Sudden gusts of wind', 'Improper steering management', 'Driving heavier vehicles', 'Low tire pressure'],
        correctAnswer: 'Sudden gusts of wind',
        explanation: 'Sudden wind gusts can push your vehicle unexpectedly.'
      },
      {
        questionText: 'Why is it unsafe to drive through flooded roads?',
        options: ['It wastes fuel during traversal', 'It damages vehicle tires', 'It could lead to expensive repairs', 'Water depth and current can be deceptive and dangerous'],
        correctAnswer: 'Water depth and current can be deceptive and dangerous',
        explanation: 'Floodwater depth and current are often underestimated, making them extremely dangerous.'
      },
      {
        questionText: 'How should you prepare before setting out in regions prone to heavy snow?',
        options: ['Rely on regular tires and standard equipment', 'Equip your vehicle with winter tires or chains', 'Use off-road paths to avoid snow-covered roads', 'Keep vehicle speed high for better control'],
        correctAnswer: 'Equip your vehicle with winter tires or chains',
        explanation: 'Winter tires or chains provide essential traction in snowy conditions.'
      },
      {
        questionText: 'When faced with a flooded road, what is the best initial action?',
        options: ['Reverse and attempt to drive around the water', 'Turn around and find an alternative route', 'Wait for emergency services to clear the flood', 'Drive through carefully, monitoring water depth'],
        correctAnswer: 'Turn around and find an alternative route',
        explanation: 'Turn around, don\'t drown. Find an alternative route.'
      },
      // True/False
      {
        questionText: 'High beams are suitable for use in foggy driving conditions.',
        questionType: 'true_false',
        options: ['True', 'False'],
        correctAnswer: 'False',
        explanation: 'High beams reflect off fog and reduce visibility.'
      },
      {
        questionText: 'Strong winds have less impact on lighter vehicles compared to heavier ones.',
        questionType: 'true_false',
        options: ['True', 'False'],
        correctAnswer: 'False',
        explanation: 'Lighter vehicles are more affected by strong winds.'
      },
      {
        questionText: 'Floodwaters can be deceptively hazardous, making it unsafe to drive through them.',
        questionType: 'true_false',
        options: ['True', 'False'],
        correctAnswer: 'True',
        explanation: 'Floodwaters hide dangers and should never be driven through.'
      },
      {
        questionText: 'Clearing snow and ice from your vehicle is unnecessary if visibility is only partially obstructed.',
        questionType: 'true_false',
        options: ['True', 'False'],
        correctAnswer: 'False',
        explanation: 'Always clear all snow and ice for full visibility and safety.'
      },
      {
        questionText: 'Defensive driving involves preparedness and adapting to challenging circumstances.',
        questionType: 'true_false',
        options: ['True', 'False'],
        correctAnswer: 'True',
        explanation: 'Defensive driving requires constant adaptation and preparedness.'
      },
      {
        questionText: 'Speeding during fog improves visibility and reduces driving time in hazardous conditions.',
        questionType: 'true_false',
        options: ['True', 'False'],
        correctAnswer: 'False',
        explanation: 'Speeding in fog is extremely dangerous. Always slow down.'
      },
      {
        questionText: 'Using winter tires enhances traction and control in snowy conditions.',
        questionType: 'true_false',
        options: ['True', 'False'],
        correctAnswer: 'True',
        explanation: 'Winter tires are designed to provide better grip in snow and ice.'
      },
      {
        questionText: 'Flooded roads always appear shallower than they actually are.',
        questionType: 'true_false',
        options: ['True', 'False'],
        correctAnswer: 'True',
        explanation: 'Water depth is often underestimated, which is why flooded roads are so dangerous.'
      },
      {
        questionText: 'Driving in high wind conditions requires firm steering and safe distances from large vehicles.',
        questionType: 'true_false',
        options: ['True', 'False'],
        correctAnswer: 'True',
        explanation: 'Firm steering and keeping distance from large vehicles helps maintain control in wind.'
      },
      {
        questionText: 'Snow-covered roads require immediate acceleration to maintain momentum.',
        questionType: 'true_false',
        options: ['True', 'False'],
        correctAnswer: 'False',
        explanation: 'Quick acceleration on snow causes wheel spin. Accelerate gently.'
      },
      // Additional questions to reach 40
      {
        questionText: 'What is the three-second rule used for in defensive driving?',
        options: ['Timing traffic lights', 'Maintaining safe following distance', 'Counting during emergencies', 'Measuring reaction time'],
        correctAnswer: 'Maintaining safe following distance',
        explanation: 'The three-second rule helps maintain a safe following distance from the vehicle ahead.'
      },
      {
        questionText: 'When should you increase your following distance beyond 3 seconds?',
        options: ['In clear weather', 'In adverse weather or poor visibility', 'When driving in a residential area', 'When the vehicle ahead is a motorcycle'],
        correctAnswer: 'In adverse weather or poor visibility',
        explanation: 'Increase following distance in adverse conditions for more reaction time.'
      },
      {
        questionText: 'What should you do if you start to hydroplane?',
        options: ['Brake hard immediately', 'Accelerate to regain traction', 'Ease off the accelerator and steer straight', 'Turn sharply to correct'],
        correctAnswer: 'Ease off the accelerator and steer straight',
        explanation: 'Ease off the gas and steer straight until you regain traction.'
      },
      {
        questionText: 'How should you respond to an aggressive driver?',
        options: ['Match their aggression', 'Make eye contact to establish dominance', 'Remain calm and let them pass', 'Speed up to get away from them'],
        correctAnswer: 'Remain calm and let them pass',
        explanation: 'Stay calm, avoid confrontation, and let aggressive drivers pass.'
      },
      {
        questionText: 'What is the best practice when approaching an intersection?',
        options: ['Speed up to get through quickly', 'Slow down and scan for hazards', 'Assume all other drivers will yield', 'Focus only on traffic signals'],
        correctAnswer: 'Slow down and scan for hazards',
        explanation: 'Always approach intersections cautiously and scan for potential hazards.'
      },
      {
        questionText: 'When passing a large truck, where should you avoid driving?',
        options: ['In front of the truck', 'In the truck\'s blind spots', 'Behind the truck', 'On a highway'],
        correctAnswer: 'In the truck\'s blind spots',
        explanation: 'Avoid lingering in a truck\'s blind spots where the driver cannot see you.'
      },
      {
        questionText: 'What is the primary benefit of scanning the road 10-15 seconds ahead?',
        options: ['Finding parking spots', 'Early hazard identification', 'Avoiding speed traps', 'Finding shortcuts'],
        correctAnswer: 'Early hazard identification',
        explanation: 'Looking ahead allows you to identify and prepare for hazards early.'
      },
      {
        questionText: 'In a tire blowout, what should you NOT do?',
        options: ['Grip the steering wheel firmly', 'Brake hard immediately', 'Ease off the accelerator', 'Steer straight until slowed'],
        correctAnswer: 'Brake hard immediately',
        explanation: 'Hard braking during a blowout can cause loss of control. Ease off the gas instead.'
      },
      {
        questionText: 'What should you check before changing lanes?',
        options: ['Only your rearview mirror', 'Your blind spots and mirrors', 'Only the lane ahead', 'Your speedometer'],
        correctAnswer: 'Your blind spots and mirrors',
        explanation: 'Check both mirrors and blind spots to ensure the lane is clear.'
      },
      {
        questionText: 'What does defensive driving primarily focus on?',
        options: ['Getting to your destination faster', 'Anticipating and avoiding hazards', 'Driving aggressively to assert position', 'Following other vehicles closely'],
        correctAnswer: 'Anticipating and avoiding hazards',
        explanation: 'Defensive driving is about anticipating potential hazards and avoiding them.'
      }
    ]
  },

  // ===========================
  // 12-Hour Advanced Driver Improvement Course
  // ===========================
  course12Hour: {
    name: '12-Hour Advanced Driver Improvement (ADI)',
    slug: 'florida-12-hour-adi',
    description: 'Required for license reinstatement after suspension. Comprehensive coverage of Florida traffic laws, defensive driving, hazard recognition, impairment effects, crash prevention, and traffic violation consequences.',
    durationHours: 12,
    price: 60.00,
    // Note: Full module content would be added here following the same pattern
    // For brevity, I'm including the module structure and key content areas
    modules: [
      {
        title: 'Module 1: Introduction to Driver Improvement',
        description: 'Purpose, importance, and Florida driving statistics',
        estimatedMinutes: 45,
        content: `<h2>Introduction to Driver Improvement</h2>
          <p>The Driver Improvement Course is designed to serve as both an educational and corrective tool for motorists in Florida. Its core intent is to foster a deeper understanding of safe driving practices among participants.</p>
          
          <h3>Course Objectives</h3>
          <ul>
            <li>Heighten driver awareness and responsibility</li>
            <li>Reduce traffic violations and preventable accidents</li>
            <li>Understand the point system and its consequences</li>
            <li>Master defensive driving techniques</li>
          </ul>
          
          <h3>Florida Driving Statistics</h3>
          <p>Florida reports tens of thousands of motor vehicle crashes annually. Primary contributing factors include:</p>
          <ul>
            <li>Distracted driving (texting, mobile devices)</li>
            <li>Excessive speeding</li>
            <li>Driving under the influence</li>
            <li>Rear-end collisions and failures to yield</li>
          </ul>
          
          <h3>FLHSMV Regulations Overview</h3>
          <p>The Florida Highway Safety and Motor Vehicles (FLHSMV) maintains the point-based penalty structure:</p>
          <ul>
            <li>Points accumulate for traffic violations</li>
            <li>Too many points trigger license suspension</li>
            <li>Strict DUI laws with severe penalties</li>
            <li>Mandatory insurance requirements</li>
          </ul>`,
        quizQuestions: []
      },
      {
        title: 'Module 2: Florida Traffic Laws & Regulations',
        description: 'Speed limits, right-of-way, signals, signs, and violations',
        estimatedMinutes: 60,
        content: `<h2>Florida Traffic Laws & Regulations</h2>
          
          <h3>Speed Limits</h3>
          <ul>
            <li><strong>Residential Areas:</strong> 30 mph</li>
            <li><strong>School Zones:</strong> 20 mph during posted hours</li>
            <li><strong>Highways:</strong> 55-70 mph depending on location</li>
            <li><strong>Construction Zones:</strong> Reduced limits with doubled fines</li>
          </ul>
          
          <h3>Right-of-Way Rules</h3>
          <ul>
            <li>Pedestrians always have right-of-way at crosswalks</li>
            <li>At four-way stops, first to arrive proceeds first</li>
            <li>If arriving simultaneously, yield to the right</li>
            <li>Yield to emergency vehicles with lights and sirens</li>
          </ul>
          
          <h3>Traffic Signals</h3>
          <ul>
            <li><strong>Red:</strong> Complete stop behind line</li>
            <li><strong>Yellow:</strong> Slow down, prepare to stop</li>
            <li><strong>Green:</strong> Proceed when clear</li>
            <li><strong>Flashing Red:</strong> Treat as stop sign</li>
            <li><strong>Flashing Yellow:</strong> Proceed with caution</li>
          </ul>
          
          <h3>Common Violations and Penalties</h3>
          <ul>
            <li><strong>Speeding:</strong> Fines and points vary by speed over limit</li>
            <li><strong>Running Red Light:</strong> Fines and points</li>
            <li><strong>Reckless Driving:</strong> Criminal offense with possible jail time</li>
            <li><strong>No Insurance:</strong> License suspension and fines</li>
            <li><strong>DUI:</strong> License revocation, fines, jail, mandatory programs</li>
          </ul>`,
        quizQuestions: [
          {
            questionText: 'What is the speed limit in Florida residential areas?',
            options: ['20 mph', '25 mph', '30 mph', '35 mph'],
            correctAnswer: '30 mph',
            explanation: 'The standard speed limit in Florida residential areas is 30 mph.'
          },
          {
            questionText: 'What does a flashing red light mean?',
            options: ['Proceed with caution', 'Stop completely, then proceed when safe', 'Slow down only', 'Yield to traffic'],
            correctAnswer: 'Stop completely, then proceed when safe',
            explanation: 'A flashing red light should be treated as a stop sign.'
          }
        ]
      },
      {
        title: 'Module 3: Defensive Driving Techniques',
        description: 'Comprehensive strategies for proactive road safety',
        estimatedMinutes: 60,
        content: `<h2>Defensive Driving Techniques</h2>
          
          <h3>Principles of Defensive Driving</h3>
          <ul>
            <li>Maintain constant vigilance</li>
            <li>Anticipate potential hazards</li>
            <li>Ensure adequate following distance (3-4 seconds)</li>
            <li>Adopt safe speeds for conditions</li>
            <li>Regular mirror checks and road scanning</li>
          </ul>
          
          <h3>Maintaining Proper Following Distance</h3>
          <ul>
            <li><strong>Normal conditions:</strong> 3-4 seconds</li>
            <li><strong>Adverse conditions:</strong> 5-6 seconds</li>
            <li><strong>Following large vehicles:</strong> Extra distance for visibility</li>
          </ul>
          
          <h3>Responding to Aggressive Drivers</h3>
          <ul>
            <li>Avoid direct engagement</li>
            <li>Remain composed</li>
            <li>Provide space and allow them to pass</li>
            <li>Report dangerous behavior if necessary</li>
          </ul>
          
          <h3>Minimizing Distractions</h3>
          <ul>
            <li>Hands on wheel, eyes on road</li>
            <li>Program devices before driving</li>
            <li>Avoid eating while driving</li>
            <li>Limit passenger interactions</li>
          </ul>`,
        quizQuestions: [
          {
            questionText: 'Under normal conditions, what is the recommended following distance?',
            options: ['1-2 seconds', '3-4 seconds', '5-6 seconds', '7-8 seconds'],
            correctAnswer: '3-4 seconds',
            explanation: 'A 3-4 second following distance provides adequate reaction time under normal conditions.'
          }
        ]
      },
      {
        title: 'Module 4: Hazard Recognition & Avoidance',
        description: 'Identifying hazards, reaction time, and adverse conditions',
        estimatedMinutes: 60,
        content: `<h2>Hazard Recognition & Avoidance</h2>
          
          <h3>Types of Hazards</h3>
          
          <h4>Static Hazards</h4>
          <ul>
            <li>Intersections</li>
            <li>Sharp turns</li>
            <li>Construction zones</li>
            <li>Traffic signals and signs</li>
          </ul>
          
          <h4>Dynamic Hazards</h4>
          <ul>
            <li>Pedestrians</li>
            <li>Merging vehicles</li>
            <li>Cyclists and motorcyclists</li>
            <li>Emergency vehicles</li>
          </ul>
          
          <h4>Environmental Hazards</h4>
          <ul>
            <li>Rain and wet roads</li>
            <li>Fog</li>
            <li>Ice and snow</li>
            <li>High winds</li>
          </ul>
          
          <h3>Reaction Time & Following Distance</h3>
          <p>Average reaction time is about 1.5 seconds. Factors affecting it include:</p>
          <ul>
            <li>Distraction</li>
            <li>Fatigue</li>
            <li>Impairment</li>
          </ul>
          
          <h3>Adverse Weather Driving</h3>
          <ul>
            <li><strong>Rain:</strong> Reduce speed, increase distance, use headlights</li>
            <li><strong>Fog:</strong> Low beams, slow speed, follow road markings</li>
            <li><strong>Snow/Ice:</strong> Gentle acceleration/braking, extra distance</li>
            <li><strong>Wind:</strong> Firm grip, caution around large vehicles</li>
          </ul>`,
        quizQuestions: [
          {
            questionText: 'What is the average human reaction time while driving?',
            options: ['0.5 seconds', '1.0 second', '1.5 seconds', '2.0 seconds'],
            correctAnswer: '1.5 seconds',
            explanation: 'The average reaction time is approximately 1.5 seconds under normal conditions.'
          }
        ]
      },
      {
        title: 'Module 5: Effects of Impairment on Driving',
        description: 'Fatigue, distraction, alcohol, drugs, and attitudes',
        estimatedMinutes: 60,
        content: `<h2>Effects of Impairment on Driving</h2>
          
          <h3>Fatigue</h3>
          <p>Fatigue diminishes alertness, slows reaction times, and impairs judgment. Signs include:</p>
          <ul>
            <li>Frequent yawning</li>
            <li>Rubbing eyes</li>
            <li>Wandering thoughts</li>
            <li>Drifting between lanes</li>
            <li>Missing exits or signals</li>
          </ul>
          <p>Prevention: Plan trips during alert hours, take breaks every 2 hours, share driving duties, get adequate rest.</p>
          
          <h3>Distraction</h3>
          <p>Types: Visual (eyes off road), Manual (hands off wheel), Cognitive (mind off driving).</p>
          <p>Florida Statutes Section 316.305 prohibits texting while driving and requires hands-free use in school and work zones.</p>
          
          <h3>Alcohol Impairment</h3>
          <ul>
            <li>Legal BAC limit: 0.08% for adults 21+</li>
            <li>Zero tolerance for under 21</li>
            <li>Slows reaction time, impairs judgment and coordination</li>
          </ul>
          
          <h3>Drug Impairment</h3>
          <p>Both prescription and illegal drugs can impair driving. Florida treats drug impairment the same as alcohol impairment under DUI laws.</p>
          
          <h3>Attitudes and Aggression</h3>
          <p>Aggressive driving includes speeding, tailgating, unsafe lane changes. Florida Statutes Section 316.192 defines aggressive driving offenses and penalties.</p>`,
        quizQuestions: [
          {
            questionText: 'What is the legal BAC limit in Florida for drivers 21 and older?',
            options: ['0.02%', '0.05%', '0.08%', '0.10%'],
            correctAnswer: '0.08%',
            explanation: 'The legal BAC limit in Florida is 0.08% for drivers 21 and older.'
          },
          {
            questionText: 'Florida law allows texting at red lights.',
            questionType: 'true_false',
            options: ['True', 'False'],
            correctAnswer: 'False',
            explanation: 'Florida law prohibits texting while driving, including at red lights.'
          }
        ]
      },
      {
        title: 'Module 6: Crash Prevention Strategies',
        description: 'Causes of accidents, emergency response, safety equipment, post-accident procedures',
        estimatedMinutes: 60,
        content: `<h2>Crash Prevention Strategies</h2>
          
          <h3>Common Causes of Crashes</h3>
          <ul>
            <li><strong>Distracted Driving:</strong> Texting, eating, adjusting devices</li>
            <li><strong>Speeding:</strong> Reduces reaction time, increases impact severity</li>
            <li><strong>Impaired Driving:</strong> Alcohol, drugs, medications</li>
            <li><strong>Aggressive Driving:</strong> Tailgating, cutting off, road rage</li>
            <li><strong>Weather Conditions:</strong> Rain, fog, glare, wind</li>
            <li><strong>Failure to Obey Signals:</strong> Running red lights, stop signs</li>
          </ul>
          
          <h3>Emergency Response</h3>
          <ul>
            <li><strong>Braking:</strong> ABS - firm steady pressure; Non-ABS - pump brakes</li>
            <li><strong>Skid Control:</strong> Steer in desired direction, don't slam brakes</li>
            <li><strong>Tire Blowout:</strong> Firm grip, ease off gas, steer straight</li>
            <li><strong>Move Over Law:</strong> Move over or slow down for stopped emergency vehicles</li>
          </ul>
          
          <h3>Seatbelt & Airbag Safety</h3>
          <ul>
            <li>Florida law requires seatbelts for front seat occupants</li>
            <li>All passengers under 18 must be restrained</li>
            <li>Airbags work with seatbelts, not instead of them</li>
            <li>Children under 13 should ride in back seat</li>
          </ul>
          
          <h3>Post-Accident Procedures (Florida Law)</h3>
          <ol>
            <li>Stop immediately - never flee the scene</li>
            <li>Check for injuries, call 911 if needed</li>
            <li>Move vehicles to safety if possible</li>
            <li>Exchange information with other drivers</li>
            <li>Report accident if required (injury, death, $500+ damage)</li>
            <li>Document the scene with photos</li>
            <li>Cooperate with law enforcement</li>
          </ol>`,
        quizQuestions: [
          {
            questionText: 'What should you do first at the scene of an accident?',
            options: ['Call your insurance company', 'Stop immediately and check for injuries', 'Take photos', 'Exchange information'],
            correctAnswer: 'Stop immediately and check for injuries',
            explanation: 'The first priority is to stop and ensure everyone\'s safety by checking for injuries.'
          }
        ]
      },
      {
        title: 'Module 7: Traffic Violation Consequences',
        description: 'Points system, insurance impact, suspension, and reinstatement',
        estimatedMinutes: 60,
        content: `<h2>Traffic Violation Consequences</h2>
          
          <h3>Florida Point System</h3>
          <ul>
            <li><strong>3 Points:</strong> Speeding up to 15 mph over, improper lane change</li>
            <li><strong>4 Points:</strong> Speeding 16+ mph over, running stop sign, failing to yield</li>
            <li><strong>6 Points:</strong> Leaving scene of property damage crash, reckless driving</li>
          </ul>
          
          <h3>Suspension Thresholds</h3>
          <ul>
            <li>12 points in 12 months = 30-day suspension</li>
            <li>18 points in 18 months = 3-month suspension</li>
            <li>24 points in 36 months = 1-year suspension</li>
          </ul>
          
          <h3>Insurance Impact</h3>
          <ul>
            <li>Minor violations: 10-20% rate increase</li>
            <li>Serious violations: 50%+ rate increase or denial</li>
            <li>DUI: May require FR-44 high-risk insurance</li>
          </ul>
          
          <h3>License Suspension vs. Revocation</h3>
          <ul>
            <li><strong>Suspension:</strong> Temporary loss for defined period</li>
            <li><strong>Revocation:</strong> Complete termination, must reapply</li>
          </ul>
          
          <h3>Reinstatement Procedures</h3>
          <ul>
            <li>Serve the suspension/revocation period</li>
            <li>Pay reinstatement fees ($45-$200+)</li>
            <li>Show proof of insurance (may require SR-22 or FR-44)</li>
            <li>Complete required courses (12-Hour ADI for habitual offenders)</li>
            <li>May need to retake driving tests after revocation</li>
          </ul>`,
        quizQuestions: [
          {
            questionText: 'How many points result in a 30-day license suspension?',
            options: ['6 points in 6 months', '12 points in 12 months', '18 points in 12 months', '24 points in 12 months'],
            correctAnswer: '12 points in 12 months',
            explanation: 'Accumulating 12 points within 12 months results in a 30-day suspension.'
          },
          {
            questionText: 'What is the difference between license suspension and revocation?',
            options: ['They are the same thing', 'Suspension is temporary, revocation is permanent termination requiring reapplication', 'Revocation is temporary, suspension is permanent', 'Neither affects driving privileges'],
            correctAnswer: 'Suspension is temporary, revocation is permanent termination requiring reapplication',
            explanation: 'Suspension is temporary while revocation terminates your license and requires reapplication.'
          }
        ]
      },
      {
        title: 'Module 8: Final Assessment & Certification',
        description: 'Course review and final examination',
        estimatedMinutes: 60,
        content: `<h2>Final Assessment & Certification</h2>
          
          <h3>Course Summary</h3>
          <p>Congratulations on completing all course modules. Let's review the key concepts:</p>
          
          <h4>Module 1: Introduction</h4>
          <p>Understanding the importance of driver improvement and Florida driving statistics.</p>
          
          <h4>Module 2: Traffic Laws</h4>
          <p>Speed limits, right-of-way rules, traffic signals, and violation penalties.</p>
          
          <h4>Module 3: Defensive Driving</h4>
          <p>Following distance, hazard anticipation, and proactive safety measures.</p>
          
          <h4>Module 4: Hazard Recognition</h4>
          <p>Identifying static, dynamic, and environmental hazards.</p>
          
          <h4>Module 5: Impairment Effects</h4>
          <p>Fatigue, distraction, alcohol, and drug impairment dangers.</p>
          
          <h4>Module 6: Crash Prevention</h4>
          <p>Emergency response, safety equipment, and post-accident procedures.</p>
          
          <h4>Module 7: Violation Consequences</h4>
          <p>Points system, insurance impact, and reinstatement procedures.</p>
          
          <h3>Final Examination Requirements</h3>
          <ul>
            <li>Minimum 50 questions</li>
            <li>80% passing score required</li>
            <li>Multiple attempts allowed</li>
            <li>Open-book format</li>
          </ul>
          
          <div class="alert alert-success">
            <strong>Ready for your final exam!</strong> Upon passing, you will receive your certificate of completion for submission to FLHSMV.
          </div>`,
        quizQuestions: []
      }
    ],
    finalExamQuestions: [
      // Module 1 & 2 questions
      {
        questionText: 'What is the speed limit in Florida residential areas?',
        options: ['20 mph', '25 mph', '30 mph', '35 mph'],
        correctAnswer: '30 mph',
        explanation: 'The standard speed limit in Florida residential areas is 30 mph.'
      },
      {
        questionText: 'What is the speed limit in Florida school zones during posted hours?',
        options: ['15 mph', '20 mph', '25 mph', '30 mph'],
        correctAnswer: '20 mph',
        explanation: 'Florida school zones have a 20 mph speed limit during posted hours.'
      },
      {
        questionText: 'What does a flashing red light mean?',
        options: ['Proceed with caution', 'Treat as a stop sign', 'Speed up', 'Yield to traffic'],
        correctAnswer: 'Treat as a stop sign',
        explanation: 'A flashing red light should be treated as a stop sign.'
      },
      {
        questionText: 'Pedestrians always have the right of way at crosswalks.',
        questionType: 'true_false',
        options: ['True', 'False'],
        correctAnswer: 'True',
        explanation: 'Pedestrians have the right of way at all crosswalks, marked or unmarked.'
      },
      {
        questionText: 'At a four-way stop, if two vehicles arrive simultaneously, which vehicle proceeds first?',
        options: ['The vehicle on the left', 'The vehicle on the right', 'The larger vehicle', 'The vehicle going straight'],
        correctAnswer: 'The vehicle on the right',
        explanation: 'When two vehicles arrive at a four-way stop simultaneously, the vehicle on the right has the right of way.'
      },
      // Module 3 questions
      {
        questionText: 'What is the recommended following distance under normal conditions?',
        options: ['1-2 seconds', '3-4 seconds', '5-6 seconds', '7-8 seconds'],
        correctAnswer: '3-4 seconds',
        explanation: 'A 3-4 second following distance provides adequate reaction time.'
      },
      {
        questionText: 'In adverse weather conditions, you should increase your following distance to:',
        options: ['2-3 seconds', '3-4 seconds', '5-6 seconds', '8-10 seconds'],
        correctAnswer: '5-6 seconds',
        explanation: 'Increase following distance to 5-6 seconds in adverse conditions for extra reaction time.'
      },
      {
        questionText: 'How should you respond to an aggressive driver?',
        options: ['Match their aggression', 'Make eye contact', 'Remain calm and let them pass', 'Speed up to get away'],
        correctAnswer: 'Remain calm and let them pass',
        explanation: 'Stay calm, avoid engagement, and let aggressive drivers pass safely.'
      },
      // Module 4 questions
      {
        questionText: 'What is the average human reaction time while driving?',
        options: ['0.5 seconds', '1.0 second', '1.5 seconds', '2.5 seconds'],
        correctAnswer: '1.5 seconds',
        explanation: 'Average reaction time is approximately 1.5 seconds.'
      },
      {
        questionText: 'What should you do when driving in foggy conditions?',
        options: ['Use high beams', 'Use low beams or fog lights', 'Speed up to exit the fog', 'Follow closely behind another vehicle'],
        correctAnswer: 'Use low beams or fog lights',
        explanation: 'High beams reflect off fog and reduce visibility. Use low beams or fog lights.'
      },
      {
        questionText: 'What is the best practice for driving on icy roads?',
        options: ['Accelerate quickly', 'Brake hard and often', 'Accelerate and brake gently', 'Maintain normal speed'],
        correctAnswer: 'Accelerate and brake gently',
        explanation: 'Gentle acceleration and braking prevents wheel spin and skidding on ice.'
      },
      // Module 5 questions
      {
        questionText: 'What is the legal BAC limit in Florida for drivers 21 and older?',
        options: ['0.02%', '0.05%', '0.08%', '0.10%'],
        correctAnswer: '0.08%',
        explanation: 'The legal BAC limit in Florida is 0.08% for drivers 21 and older.'
      },
      {
        questionText: 'What is the BAC limit for drivers under 21 in Florida?',
        options: ['0.02%', '0.04%', '0.08%', 'Zero tolerance'],
        correctAnswer: 'Zero tolerance',
        explanation: 'Florida has a zero tolerance policy for drivers under 21.'
      },
      {
        questionText: 'Which Florida statute prohibits texting while driving?',
        options: ['Section 316.192', 'Section 316.305', 'Section 316.614', 'Section 316.193'],
        correctAnswer: 'Section 316.305',
        explanation: 'Florida Statutes Section 316.305 prohibits texting while driving.'
      },
      {
        questionText: 'Signs of driver fatigue include all EXCEPT:',
        options: ['Frequent yawning', 'Drifting between lanes', 'Increased alertness', 'Missing traffic signals'],
        correctAnswer: 'Increased alertness',
        explanation: 'Fatigue causes decreased alertness, not increased.'
      },
      {
        questionText: 'Drug impairment is treated the same as alcohol impairment under Florida DUI laws.',
        questionType: 'true_false',
        options: ['True', 'False'],
        correctAnswer: 'True',
        explanation: 'Florida treats drug impairment the same as alcohol impairment for DUI purposes.'
      },
      // Module 6 questions
      {
        questionText: 'What should you do first at the scene of an accident?',
        options: ['Call insurance', 'Stop and check for injuries', 'Take photos', 'Exchange information'],
        correctAnswer: 'Stop and check for injuries',
        explanation: 'Safety first: stop immediately and check for injuries.'
      },
      {
        questionText: 'Under Florida law, when must you report an accident?',
        options: ['Only if someone is injured', 'Only if there is $1000+ damage', 'If there is injury, death, or $500+ damage', 'All accidents must be reported'],
        correctAnswer: 'If there is injury, death, or $500+ damage',
        explanation: 'Florida requires accident reports for injury, death, or property damage of $500 or more.'
      },
      {
        questionText: 'During a tire blowout, you should:',
        options: ['Brake hard immediately', 'Grip steering wheel firmly and ease off gas', 'Accelerate to maintain control', 'Turn sharply to the side'],
        correctAnswer: 'Grip steering wheel firmly and ease off gas',
        explanation: 'Maintain control by gripping the wheel and gradually slowing down.'
      },
      {
        questionText: 'Florida law requires seatbelts for:',
        options: ['Only the driver', 'Front seat occupants only', 'All passengers', 'No one'],
        correctAnswer: 'Front seat occupants only',
        explanation: 'Florida requires seatbelts for front seat occupants (and all passengers under 18).'
      },
      {
        questionText: 'Children under what age should ride in the back seat?',
        options: ['8 years', '10 years', '12 years', '13 years'],
        correctAnswer: '13 years',
        explanation: 'Children under 13 should ride in the back seat for airbag safety.'
      },
      // Module 7 questions
      {
        questionText: 'How many points in 12 months results in a 30-day suspension?',
        options: ['6 points', '12 points', '18 points', '24 points'],
        correctAnswer: '12 points',
        explanation: '12 points within 12 months triggers a 30-day suspension.'
      },
      {
        questionText: 'How many points in 18 months results in a 3-month suspension?',
        options: ['12 points', '15 points', '18 points', '24 points'],
        correctAnswer: '18 points',
        explanation: '18 points within 18 months triggers a 3-month suspension.'
      },
      {
        questionText: 'Speeding 16+ mph over the limit results in how many points?',
        options: ['2 points', '3 points', '4 points', '6 points'],
        correctAnswer: '4 points',
        explanation: 'Speeding 16+ mph over the limit results in 4 points on your license.'
      },
      {
        questionText: 'What is the difference between license suspension and revocation?',
        options: ['They are the same', 'Suspension is temporary, revocation requires reapplication', 'Revocation is temporary', 'Neither affects driving'],
        correctAnswer: 'Suspension is temporary, revocation requires reapplication',
        explanation: 'Suspension is temporary while revocation terminates your license permanently.'
      },
      {
        questionText: 'After a DUI, what type of insurance may be required?',
        options: ['Standard liability', 'Comprehensive', 'FR-44 high-risk insurance', 'No insurance required'],
        correctAnswer: 'FR-44 high-risk insurance',
        explanation: 'DUI convictions may require FR-44 high-risk insurance coverage.'
      },
      // Additional comprehensive questions
      {
        questionText: 'What is Florida\'s Move Over law?',
        options: ['Move to the right for all vehicles', 'Move over or slow down for stopped emergency vehicles', 'Move over for faster traffic', 'Move over only for police'],
        correctAnswer: 'Move over or slow down for stopped emergency vehicles',
        explanation: 'The Move Over law requires drivers to move over a lane or slow down for stopped emergency vehicles.'
      },
      {
        questionText: 'What should you do if you start to hydroplane?',
        options: ['Brake hard', 'Accelerate', 'Ease off gas and steer straight', 'Turn sharply'],
        correctAnswer: 'Ease off gas and steer straight',
        explanation: 'Ease off the accelerator and steer straight until you regain traction.'
      },
      {
        questionText: 'How often should you check your mirrors while driving?',
        options: ['Once a minute', 'Every 30 seconds', 'Every 5-8 seconds', 'Only when changing lanes'],
        correctAnswer: 'Every 5-8 seconds',
        explanation: 'Regular mirror checks every 5-8 seconds maintain situational awareness.'
      },
      {
        questionText: 'What is the primary purpose of defensive driving?',
        options: ['To drive faster', 'To anticipate and avoid hazards', 'To assert right of way', 'To follow other vehicles closely'],
        correctAnswer: 'To anticipate and avoid hazards',
        explanation: 'Defensive driving focuses on anticipating hazards and taking proactive measures to avoid them.'
      },
      {
        questionText: 'Leaving the scene of an accident involving injury can result in:',
        options: ['A fine only', 'Misdemeanor charges', 'Felony charges', 'No penalty'],
        correctAnswer: 'Felony charges',
        explanation: 'Leaving the scene of an accident involving injury is a felony in Florida.'
      },
      // True/False section
      {
        questionText: 'You can reduce points on your license by completing a driver improvement course.',
        questionType: 'true_false',
        options: ['True', 'False'],
        correctAnswer: 'True',
        explanation: 'Completing an approved course can prevent points from being added to your record.'
      },
      {
        questionText: 'Prescription medications cannot impair your driving.',
        questionType: 'true_false',
        options: ['True', 'False'],
        correctAnswer: 'False',
        explanation: 'Many prescription medications can impair driving and are treated like alcohol impairment.'
      },
      {
        questionText: 'You should always carry your proof of insurance while driving in Florida.',
        questionType: 'true_false',
        options: ['True', 'False'],
        correctAnswer: 'True',
        explanation: 'Florida law requires drivers to carry proof of insurance.'
      },
      {
        questionText: 'Airbags work best when used without a seatbelt.',
        questionType: 'true_false',
        options: ['True', 'False'],
        correctAnswer: 'False',
        explanation: 'Airbags are supplemental and work with seatbelts, not instead of them.'
      },
      {
        questionText: 'Florida has a zero tolerance policy for drivers under 21 regarding alcohol.',
        questionType: 'true_false',
        options: ['True', 'False'],
        correctAnswer: 'True',
        explanation: 'Drivers under 21 face zero tolerance for any detectable alcohol.'
      },
      {
        questionText: 'Reckless driving is a criminal offense in Florida.',
        questionType: 'true_false',
        options: ['True', 'False'],
        correctAnswer: 'True',
        explanation: 'Reckless driving can result in criminal charges, fines, and jail time.'
      },
      {
        questionText: 'You can take this course as many times as you want to reduce points.',
        questionType: 'true_false',
        options: ['True', 'False'],
        correctAnswer: 'False',
        explanation: 'There are limits on how often you can use traffic school to reduce points (typically once per year, 5 times lifetime).'
      },
      {
        questionText: 'Construction zone fines are doubled in Florida.',
        questionType: 'true_false',
        options: ['True', 'False'],
        correctAnswer: 'True',
        explanation: 'Fines for violations in construction zones are doubled to protect workers.'
      },
      {
        questionText: 'You must stop for a school bus displaying flashing red lights on all Florida roads.',
        questionType: 'true_false',
        options: ['True', 'False'],
        correctAnswer: 'True',
        explanation: 'You must stop for school buses with flashing red lights unless separated by a physical barrier.'
      },
      {
        questionText: 'Scanning the road 10-15 seconds ahead helps identify hazards early.',
        questionType: 'true_false',
        options: ['True', 'False'],
        correctAnswer: 'True',
        explanation: 'Looking ahead allows time to identify and respond to hazards proactively.'
      },
      // More comprehensive questions
      {
        questionText: 'What is the recommended action if your brakes fail?',
        options: ['Turn off the engine', 'Shift to a lower gear and use emergency brake', 'Jump out of the vehicle', 'Honk continuously'],
        correctAnswer: 'Shift to a lower gear and use emergency brake',
        explanation: 'Use engine braking by downshifting and gently apply the emergency brake.'
      },
      {
        questionText: 'When should you use your high beams?',
        options: ['In heavy traffic', 'In fog', 'On dark, unlit roads with no oncoming traffic', 'During rain'],
        correctAnswer: 'On dark, unlit roads with no oncoming traffic',
        explanation: 'Use high beams on dark roads when no other vehicles are present to avoid blinding others.'
      },
      {
        questionText: 'What does distracted driving include?',
        options: ['Texting only', 'Eating only', 'All activities that take attention from driving', 'Phone calls only'],
        correctAnswer: 'All activities that take attention from driving',
        explanation: 'Distracted driving includes any activity that diverts attention from driving.'
      },
      {
        questionText: 'What is the purpose of the Florida point system?',
        options: ['To reward good drivers', 'To track violations and penalize unsafe driving', 'To determine insurance rates', 'To assign parking privileges'],
        correctAnswer: 'To track violations and penalize unsafe driving',
        explanation: 'The point system tracks violations and penalizes repeat offenders with suspension.'
      },
      {
        questionText: 'How far ahead should you scan the road while driving?',
        options: ['2-3 seconds', '5-8 seconds', '10-15 seconds', '20-30 seconds'],
        correctAnswer: '10-15 seconds',
        explanation: 'Scanning 10-15 seconds ahead allows time to identify and respond to hazards.'
      }
    ]
  }
};

// Export course prices for reference
const coursePrices = {
  '4-hour': 18.50,
  '8-hour': 55.00,
  '12-hour': 60.00
};

// ES Module exports for Node.js
export { floridaCourseData, coursePrices };

// Also make available for browser
if (typeof window !== 'undefined') {
  window.floridaCourseData = floridaCourseData;
  window.coursePrices = coursePrices;
}
