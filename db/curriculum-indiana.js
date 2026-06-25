// ===========================
// Indiana Defensive Driving Course Curriculum
// BMV-Approved Course Content
// ===========================

export const indianaCourseData = {
  // Indiana offers a 4-hour Defensive Driving Course
  course4Hour: {
    name: 'Indiana 4-Hour Defensive Driving Course',
    slug: 'indiana-4-hour-defensive-driving',
    description: 'Indiana BMV-approved defensive driving course for ticket dismissal and insurance discounts. Covers Indiana traffic laws, defensive driving techniques, and safe driving practices.',
    durationHours: 4,
    price: 29.95,
    modules: [
      // MODULE 1: Introduction & Indiana Traffic Laws
      {
        title: 'Module 1: Introduction & Indiana Traffic Laws',
        description: 'Course overview, Indiana driving statistics, and state-specific traffic regulations',
        estimatedMinutes: 35,
        content: `
          <h2>Welcome to Indiana Defensive Driving</h2>
          
          <p>Welcome to Quick Pass Traffic School's Indiana Bureau of Motor Vehicles (BMV) approved Defensive Driving Course. This comprehensive 4-hour program is designed to help you become a safer, more responsible driver on Indiana's roads.</p>

          <div class="highlight-box">
            <h4>🎯 Course Objectives</h4>
            <p>By completing this course, you will:</p>
            <ul>
              <li>Understand Indiana's traffic laws and regulations</li>
              <li>Learn defensive driving techniques to avoid accidents</li>
              <li>Potentially dismiss a traffic ticket (if court-approved)</li>
              <li>Qualify for auto insurance discounts (check with your provider)</li>
              <li>Become a safer, more confident driver</li>
            </ul>
          </div>

          <h3>Indiana Driving Statistics</h3>
          
          <div class="statistics-box">
            <h4>📊 Indiana Traffic Statistics</h4>
            <ul>
              <li><strong>800+</strong> traffic fatalities annually</li>
              <li><strong>200,000+</strong> reported crashes each year</li>
              <li><strong>40%</strong> of fatal crashes involve impaired driving</li>
              <li><strong>Rural roads</strong> account for a disproportionate number of fatalities</li>
              <li><strong>Distracted driving</strong> contributes to 1 in 5 crashes</li>
            </ul>
          </div>

          <h3>Indiana's Points System</h3>
          
          <p>Indiana uses a point system to track traffic violations on your driving record:</p>

          <table class="info-table">
            <tr><th>Points Accumulated (2 years)</th><th>Consequence</th></tr>
            <tr><td>14+ points</td><td>Must complete BMV interview</td></tr>
            <tr><td>18+ points</td><td>Possible license suspension</td></tr>
            <tr><td>20+ points</td><td>Probable license suspension</td></tr>
          </table>

          <h4>Common Violations and Point Values</h4>
          <table class="info-table">
            <tr><th>Violation</th><th>Points</th></tr>
            <tr><td>Speeding (1-15 mph over)</td><td>2 points</td></tr>
            <tr><td>Speeding (16-25 mph over)</td><td>4 points</td></tr>
            <tr><td>Speeding (26+ mph over)</td><td>6 points</td></tr>
            <tr><td>Reckless driving</td><td>6 points</td></tr>
            <tr><td>Following too closely</td><td>4 points</td></tr>
            <tr><td>Improper passing</td><td>4 points</td></tr>
            <tr><td>Failure to yield</td><td>4 points</td></tr>
            <tr><td>Running a red light/stop sign</td><td>4 points</td></tr>
            <tr><td>Operating while intoxicated</td><td>8 points</td></tr>
          </table>

          <div class="law-box">
            <h4>📜 Point Reduction Options</h4>
            <p>In Indiana, you may qualify to have points reduced through:</p>
            <ul>
              <li>Court-ordered completion of a defensive driving course</li>
              <li>Completing an approved driver safety course (up to 4 points removed)</li>
              <li>Maintaining a clean driving record for a period of time</li>
            </ul>
          </div>

          <h3>Indiana's Cell Phone and Texting Laws</h3>
          
          <p>Indiana has specific laws regarding cell phone use while driving:</p>

          <div class="law-box">
            <h4>📜 Indiana Cell Phone Laws</h4>
            <ul>
              <li><strong>Texting while driving:</strong> Prohibited for ALL drivers (primary offense)</li>
              <li><strong>Under 18:</strong> ALL cell phone use prohibited while driving</li>
              <li><strong>Adults:</strong> Hands-free phone calls permitted (but discouraged)</li>
              <li><strong>Work zones:</strong> Enhanced enforcement and penalties</li>
            </ul>
          </div>

          <h4>Penalties for Violations</h4>
          <table class="info-table">
            <tr><th>Offense</th><th>Fine</th><th>Points</th></tr>
            <tr><td>Texting while driving</td><td>Up to $500</td><td>4-6 points (if causes accident)</td></tr>
            <tr><td>Cell phone use under 18</td><td>Up to $500</td><td>Varies</td></tr>
            <tr><td>Work zone violation</td><td>Doubled fines</td><td>Standard + enhancement</td></tr>
          </table>

          <h3>Indiana's Move Over Law</h3>
          
          <p>Indiana's "Move Over" law protects emergency responders and roadside workers:</p>

          <div class="alert alert-warning">
            <h4>⚠️ Move Over Law Requirements</h4>
            <p>When approaching a stationary emergency vehicle, tow truck, or highway maintenance vehicle with flashing lights:</p>
            <ul>
              <li>On multi-lane roads: Move over one lane away if safe to do so</li>
              <li>If unable to move over: Slow down and proceed with caution</li>
              <li>Applies to: Police, fire, EMS, tow trucks, highway crews, utility vehicles</li>
            </ul>
            <p><strong>Penalty:</strong> Class B infraction with fines up to $1,000</p>
          </div>

          <h3>Indiana's Graduated Driver's License (GDL)</h3>
          
          <p>Indiana has a graduated licensing system for new drivers:</p>
          
          <ul>
            <li><strong>Learner's Permit (15+):</strong> Must be held for 180 days minimum</li>
            <li><strong>Probationary License (16-17):</strong> Restricted driving hours and passengers</li>
            <li><strong>Full License (18+):</strong> Full privileges upon successful completion</li>
          </ul>

          <h4>Probationary License Restrictions</h4>
          <ul>
            <li>No driving 10 PM - 5 AM (unless for work, school, or emergency)</li>
            <li>First 180 days: Only 1 passenger under 21 (unless family member)</li>
            <li>After 180 days: No more than 3 passengers under 21</li>
          </ul>

          <div class="case-study">
            <h4>📋 Case Study: Why Indiana Enacted the GDL</h4>
            <p>Before Indiana's graduated licensing system, teen drivers were involved in a disproportionate number of fatal crashes. Studies showed that crash rates dropped by 20% after GDL implementation, saving dozens of young lives each year.</p>
          </div>

          <div class="reflection-question">
            <h4>🤔 Reflection Question</h4>
            <p>Think about your current driving habits. Are there any areas where you could improve to reduce your risk of accidents or violations?</p>
          </div>
        `,
        quizQuestions: [
          {
            questionText: 'How many points can result in a BMV interview requirement in Indiana?',
            options: ['10 points', '12 points', '14 points', '18 points'],
            correctAnswer: '14 points',
            explanation: 'Accumulating 14 or more points within 2 years requires a BMV interview in Indiana.'
          },
          {
            questionText: 'Indiana\'s texting while driving law applies to:',
            options: ['Only commercial drivers', 'Only drivers under 18', 'Only drivers under 21', 'All drivers'],
            correctAnswer: 'All drivers',
            explanation: 'Indiana\'s texting while driving law prohibits texting for ALL drivers, regardless of age.'
          },
          {
            questionText: 'Under Indiana\'s Move Over Law, if you cannot change lanes, you must:',
            options: ['Continue at normal speed', 'Stop completely', 'Slow down and proceed with caution', 'Honk your horn'],
            correctAnswer: 'Slow down and proceed with caution',
            explanation: 'If you cannot safely move over a lane, you must slow down and proceed with caution when passing emergency vehicles.'
          },
          {
            questionText: 'How long must an Indiana learner\'s permit be held before obtaining a probationary license?',
            options: ['90 days', '120 days', '180 days', '365 days'],
            correctAnswer: '180 days',
            explanation: 'Indiana requires a learner\'s permit to be held for at least 180 days before a probationary license can be issued.'
          }
        ]
      },

      // MODULE 2: Defensive Driving Fundamentals
      {
        title: 'Module 2: Defensive Driving Fundamentals',
        description: 'Core defensive driving techniques, hazard recognition, and collision avoidance',
        estimatedMinutes: 40,
        content: `
          <h2>Defensive Driving: Your Best Protection</h2>
          
          <p>Defensive driving means anticipating dangerous situations despite incorrect actions of others or adverse conditions. It's about being prepared for the unexpected and maintaining control of your driving environment.</p>

          <div class="highlight-box">
            <h4>🛡️ The Defensive Driver's Mindset</h4>
            <ul>
              <li>Assume other drivers may make mistakes</li>
              <li>Always have an escape path</li>
              <li>Stay alert and focused on driving</li>
              <li>Maintain safe following distances</li>
              <li>Adjust driving to conditions</li>
              <li>Stay calm and patient</li>
            </ul>
          </div>

          <h3>The Smith System</h3>
          
          <p>The Smith System is a widely-used defensive driving methodology consisting of five key principles:</p>

          <div class="method-box">
            <h4>1. Aim High in Steering</h4>
            <p>Look 15-20 seconds ahead (about a quarter mile on highways) rather than just at the vehicle directly in front of you. This gives you more time to identify and react to hazards.</p>
          </div>

          <div class="method-box">
            <h4>2. Get the Big Picture</h4>
            <p>Maintain awareness of your entire surroundings—front, sides, and rear. Know what's happening around you at all times.</p>
          </div>

          <div class="method-box">
            <h4>3. Keep Your Eyes Moving</h4>
            <p>Don't fixate on one point. Continuously scan the road, mirrors, and surroundings. Check mirrors every 5-8 seconds.</p>
          </div>

          <div class="method-box">
            <h4>4. Leave Yourself an Out</h4>
            <p>Always have an escape route. Maintain space cushions around your vehicle so you can maneuver if needed.</p>
          </div>

          <div class="method-box">
            <h4>5. Make Sure They See You</h4>
            <p>Use turn signals, headlights, and horn appropriately. Make eye contact with other drivers when possible. Don't assume others see you.</p>
          </div>

          <h3>Following Distance</h3>
          
          <p>Maintaining proper following distance is crucial for collision avoidance:</p>

          <div class="how-to-box">
            <h4>The 3-Second Rule</h4>
            <ol>
              <li>Watch the vehicle ahead pass a fixed point (sign, tree, etc.)</li>
              <li>Count "one-thousand-one, one-thousand-two, one-thousand-three"</li>
              <li>If you reach the point before finishing, increase your distance</li>
            </ol>
          </div>

          <h4>When to Increase Following Distance</h4>
          <ul>
            <li><strong>Bad weather:</strong> 4-6 seconds or more</li>
            <li><strong>Following large vehicles:</strong> 4 seconds (limited visibility)</li>
            <li><strong>Night driving:</strong> 4 seconds</li>
            <li><strong>Being tailgated:</strong> Increase front cushion</li>
            <li><strong>Towing a trailer:</strong> 4-5 seconds</li>
          </ul>

          <h3>Space Management</h3>
          
          <p>Create a "space cushion" around your vehicle:</p>

          <ul>
            <li><strong>Front:</strong> 3+ seconds following distance</li>
            <li><strong>Rear:</strong> Avoid braking suddenly; if tailgated, increase front cushion</li>
            <li><strong>Sides:</strong> Stay centered in lane; avoid lingering in blind spots</li>
            <li><strong>Above:</strong> Watch for low bridges, branches, overhead hazards</li>
          </ul>

          <h3>Intersection Safety</h3>
          
          <p>Intersections are the most dangerous locations on the road. Most urban crashes occur at or near intersections.</p>

          <h4>Intersection Safety Tips</h4>
          <ul>
            <li>Scan left-right-left before entering</li>
            <li>Look for signal changes before entering on a green</li>
            <li>Cover the brake when approaching</li>
            <li>Watch for red-light runners</li>
            <li>Make eye contact with turning drivers</li>
            <li>Be especially careful of left-turning vehicles</li>
          </ul>

          <div class="alert alert-warning">
            <h4>⚠️ The Deadly Left Turn</h4>
            <p>Left turns are one of the most dangerous maneuvers. When making a left turn:</p>
            <ul>
              <li>Wait for a clear gap in oncoming traffic</li>
              <li>Watch for pedestrians in the crosswalk</li>
              <li>Don't assume a gap will remain open</li>
              <li>Keep wheels straight while waiting (in case you're rear-ended)</li>
              <li>Look twice for motorcycles—they're easy to miss</li>
            </ul>
          </div>

          <h3>Passing Safely</h3>
          
          <p>Passing on two-lane roads requires careful judgment:</p>

          <div class="how-to-box">
            <h4>Safe Passing Procedure</h4>
            <ol>
              <li>Check for "No Passing" signs or double yellow lines</li>
              <li>Ensure you have adequate sight distance</li>
              <li>Check mirrors and blind spot</li>
              <li>Signal and move to the passing lane</li>
              <li>Accelerate quickly past the vehicle</li>
              <li>Signal and return to your lane when you see the passed vehicle in your rearview mirror</li>
            </ol>
          </div>

          <h4>Never Pass When:</h4>
          <ul>
            <li>On a hill or curve with limited visibility</li>
            <li>At an intersection or railroad crossing</li>
            <li>In a no-passing zone</li>
            <li>When there isn't enough space to complete the pass safely</li>
            <li>The vehicle ahead is at or near the speed limit</li>
          </ul>

          <div class="case-study">
            <h4>📋 Case Study: Patience Saves Lives</h4>
            <p><strong>US 31 Near Indianapolis:</strong></p>
            <p>A driver became impatient behind a farm vehicle traveling 25 mph on a two-lane road. Despite limited visibility due to a hill ahead, he attempted to pass. An oncoming vehicle appeared, and he barely managed to pull back in, nearly causing a head-on collision.</p>
            <p>The few minutes he might have saved were not worth the risk of a fatal crash. Patience and defensive driving mean accepting that sometimes we must slow down.</p>
          </div>

          <div class="reflection-question">
            <h4>🤔 Reflection Question</h4>
            <p>How do you apply the Smith System principles in your daily driving? Which principle do you find most challenging to follow consistently?</p>
          </div>
        `,
        quizQuestions: [
          {
            questionText: 'According to the Smith System, how far ahead should you look while driving on a highway?',
            options: ['5-10 seconds', '10-12 seconds', '15-20 seconds', '25-30 seconds'],
            correctAnswer: '15-20 seconds',
            explanation: 'The Smith System recommends looking 15-20 seconds ahead (about a quarter mile on highways) to give you time to identify hazards.'
          },
          {
            questionText: 'The three-second following distance rule should be increased to how many seconds in bad weather?',
            options: ['3-4 seconds', '4-6 seconds', '6-8 seconds', '8-10 seconds'],
            correctAnswer: '4-6 seconds',
            explanation: 'In bad weather conditions, increase your following distance to at least 4-6 seconds to allow for longer stopping distances.'
          },
          {
            questionText: 'Which of the following is NOT part of the Smith System?',
            options: ['Aim high in steering', 'Get the big picture', 'Drive as fast as possible', 'Leave yourself an out'],
            correctAnswer: 'Drive as fast as possible',
            explanation: 'The Smith System focuses on awareness and safety, not speed. Its five principles are: Aim High, Get the Big Picture, Keep Eyes Moving, Leave Yourself an Out, and Make Sure They See You.'
          },
          {
            questionText: 'When waiting to make a left turn, you should keep your wheels:',
            options: ['Turned left', 'Turned right', 'Straight', 'It doesn\'t matter'],
            correctAnswer: 'Straight',
            explanation: 'Keep your wheels straight while waiting to turn left. If you\'re rear-ended with wheels turned, you\'ll be pushed into oncoming traffic.'
          }
        ]
      },

      // MODULE 3: Impaired and Distracted Driving
      {
        title: 'Module 3: Impaired and Distracted Driving',
        description: 'Understanding the dangers and legal consequences of impaired and distracted driving in Indiana',
        estimatedMinutes: 40,
        content: `
          <h2>Impaired and Distracted Driving: Preventable Tragedies</h2>
          
          <p>Every year, thousands of people in Indiana are killed or seriously injured in crashes involving impaired or distracted drivers. These tragedies are 100% preventable.</p>

          <h3>Impaired Driving in Indiana</h3>

          <div class="statistics-box">
            <h4>📊 Indiana Impaired Driving Statistics</h4>
            <ul>
              <li><strong>40%</strong> of traffic fatalities involve alcohol-impaired driving</li>
              <li><strong>200+</strong> impaired driving deaths annually in Indiana</li>
              <li><strong>25,000+</strong> OWI (Operating While Intoxicated) arrests each year</li>
              <li>Drug-impaired driving is increasing as a contributing factor</li>
            </ul>
          </div>

          <h3>Indiana OWI Laws</h3>
          
          <p>Indiana uses the term "Operating While Intoxicated" (OWI) rather than DUI:</p>

          <div class="alert alert-danger">
            <h4>⚠️ Indiana Legal BAC Limits</h4>
            <ul>
              <li><strong>21 and over:</strong> 0.08% BAC</li>
              <li><strong>Commercial drivers:</strong> 0.04% BAC</li>
              <li><strong>Under 21:</strong> 0.02% BAC</li>
            </ul>
            <p><strong>Important:</strong> You can be charged with OWI even below these limits if driving is impaired.</p>
          </div>

          <h4>OWI Penalties</h4>
          <table class="info-table">
            <tr><th>Offense</th><th>Jail Time</th><th>Fine</th><th>License Suspension</th></tr>
            <tr><td>First OWI</td><td>Up to 60 days</td><td>Up to $500</td><td>Up to 2 years</td></tr>
            <tr><td>Second OWI</td><td>5 days - 3 years</td><td>Up to $10,000</td><td>180 days - 2 years</td></tr>
            <tr><td>Third OWI (Felony)</td><td>6 months - 6 years</td><td>Up to $10,000</td><td>1-10 years</td></tr>
            <tr><td>OWI with serious injury</td><td>Up to 6 years</td><td>Up to $10,000</td><td>2+ years</td></tr>
          </table>

          <h3>Indiana's Implied Consent Law</h3>
          
          <p>By driving on Indiana roads, you automatically consent to chemical testing if lawfully arrested for OWI:</p>

          <div class="law-box">
            <h4>📜 Implied Consent Consequences</h4>
            <ul>
              <li>Refusing a chemical test results in <strong>automatic 1-year license suspension</strong></li>
              <li>Refusal can be used as evidence against you in court</li>
              <li>Second refusal: 2-year suspension</li>
            </ul>
          </div>

          <h3>How Alcohol Affects Driving</h3>
          
          <p>Alcohol impairs every skill needed for safe driving:</p>

          <table class="info-table">
            <tr><th>BAC Level</th><th>Effects</th></tr>
            <tr><td>0.02%</td><td>Relaxation, slight body warmth, mood changes</td></tr>
            <tr><td>0.05%</td><td>Reduced coordination, difficulty steering, reduced ability to track objects</td></tr>
            <tr><td>0.08%</td><td>Poor muscle coordination, difficulty detecting danger, impaired judgment</td></tr>
            <tr><td>0.10%</td><td>Clear deterioration of reaction time and control</td></tr>
            <tr><td>0.15%</td><td>Major loss of balance, substantial impairment of control</td></tr>
          </table>

          <h3>Drug-Impaired Driving</h3>
          
          <p>Driving under the influence includes all impairing substances:</p>

          <ul>
            <li><strong>Marijuana:</strong> Slows reaction time, impairs judgment</li>
            <li><strong>Prescription drugs:</strong> Many cause drowsiness or impair coordination</li>
            <li><strong>Over-the-counter drugs:</strong> Antihistamines, sleep aids affect driving</li>
            <li><strong>Illegal drugs:</strong> All carry severe impairment risks</li>
          </ul>

          <div class="alert alert-warning">
            <h4>⚠️ Medication Warning</h4>
            <p>Even legal, prescribed medications can impair your ability to drive. Always:</p>
            <ul>
              <li>Read warning labels on all medications</li>
              <li>Ask your doctor or pharmacist about driving</li>
              <li>Never mix alcohol with medications</li>
              <li>Know how a new medication affects you before driving</li>
            </ul>
          </div>

          <h3>Distracted Driving</h3>
          
          <p>Distracted driving is just as dangerous as impaired driving:</p>

          <h4>The Three Types of Distractions</h4>
          <ul>
            <li><strong>Visual:</strong> Taking your eyes off the road</li>
            <li><strong>Manual:</strong> Taking your hands off the wheel</li>
            <li><strong>Cognitive:</strong> Taking your mind off driving</li>
          </ul>

          <p><strong>Texting is especially dangerous</strong> because it involves all three types simultaneously.</p>

          <div class="statistics-box">
            <h4>📊 Distracted Driving Facts</h4>
            <ul>
              <li>Texting while driving makes you <strong>23 times more likely</strong> to crash</li>
              <li>At 55 mph, looking at your phone for 5 seconds = traveling 100 yards blind</li>
              <li>Each day, <strong>9 people</strong> are killed nationally in distracted driving crashes</li>
              <li>Teens are the most likely to use phones while driving</li>
            </ul>
          </div>

          <h3>Strategies to Avoid Impaired/Distracted Driving</h3>
          
          <h4>Avoiding Impaired Driving</h4>
          <ul>
            <li>Designate a sober driver before drinking</li>
            <li>Use rideshare services (Uber, Lyft)</li>
            <li>Take a taxi or public transportation</li>
            <li>Stay overnight if necessary</li>
            <li>Call a friend or family member for a ride</li>
            <li>Know your medications' effects before driving</li>
          </ul>

          <h4>Avoiding Distracted Driving</h4>
          <ul>
            <li>Put your phone on "Do Not Disturb" mode</li>
            <li>Set up navigation and music before starting</li>
            <li>Pull over safely if you must use your phone</li>
            <li>Ask passengers to handle texts and calls</li>
            <li>Eat before driving, not while driving</li>
            <li>Focus on driving as your primary task</li>
          </ul>

          <div class="case-study">
            <h4>📋 Case Study: A Moment of Distraction</h4>
            <p><strong>Fort Wayne, Indiana:</strong></p>
            <p>Sarah was driving home from work when she heard her phone buzz with a text message. She glanced down for just a few seconds to read it. When she looked up, traffic ahead had stopped. She rear-ended another vehicle at 45 mph.</p>
            <p><strong>Consequences:</strong></p>
            <ul>
              <li>The other driver suffered a neck injury requiring months of physical therapy</li>
              <li>Sarah received a $500 ticket and 4 points on her license</li>
              <li>Her insurance rates increased by $1,500/year</li>
              <li>She faced a civil lawsuit for the other driver's medical expenses</li>
            </ul>
            <p><em>All because of a text that could have waited.</em></p>
          </div>

          <div class="reflection-question">
            <h4>🤔 Reflection Question</h4>
            <p>What specific steps can you take to eliminate distractions when you drive? How can you help friends and family avoid impaired or distracted driving?</p>
          </div>
        `,
        quizQuestions: [
          {
            questionText: 'What is the legal BAC limit for drivers 21 and over in Indiana?',
            options: ['0.02%', '0.04%', '0.08%', '0.10%'],
            correctAnswer: '0.08%',
            explanation: 'The legal BAC limit for drivers 21 and over in Indiana is 0.08%.'
          },
          {
            questionText: 'Refusing a chemical test in Indiana results in:',
            options: ['No penalty', '6-month suspension', '1-year suspension', '2-year suspension'],
            correctAnswer: '1-year suspension',
            explanation: 'Under Indiana\'s Implied Consent Law, refusing a chemical test for a first offense results in a 1-year license suspension.'
          },
          {
            questionText: 'Texting while driving increases crash risk by how many times?',
            options: ['5 times', '10 times', '15 times', '23 times'],
            correctAnswer: '23 times',
            explanation: 'Studies show that texting while driving increases crash risk by 23 times.'
          },
          {
            questionText: 'Which type(s) of distraction does texting involve?',
            options: ['Visual only', 'Manual only', 'Cognitive only', 'All three types'],
            correctAnswer: 'All three types',
            explanation: 'Texting is especially dangerous because it involves visual, manual, and cognitive distractions simultaneously.'
          }
        ]
      },

      // MODULE 4: Sharing the Road & Special Situations
      {
        title: 'Module 4: Sharing the Road & Special Situations',
        description: 'Safely interacting with other road users and handling weather and special driving conditions',
        estimatedMinutes: 40,
        content: `
          <h2>Sharing the Road Safely</h2>
          
          <p>Indiana roads are shared by many different users—cars, trucks, motorcycles, bicycles, pedestrians, farm equipment, and more. Safe driving means understanding how to interact with all of them.</p>

          <h3>Pedestrians</h3>
          
          <p>Pedestrians are the most vulnerable road users:</p>

          <div class="law-box">
            <h4>📜 Indiana Pedestrian Laws</h4>
            <ul>
              <li>Drivers must yield to pedestrians in crosswalks</li>
              <li>Exercise due care to avoid hitting any pedestrian</li>
              <li>Never pass a vehicle stopped for pedestrians</li>
            </ul>
          </div>

          <h4>Pedestrian Safety Tips</h4>
          <ul>
            <li>Scan crosswalks before entering intersections</li>
            <li>Be extra cautious near schools, parks, and residential areas</li>
            <li>Watch for pedestrians at night—they may be hard to see</li>
            <li>Children may act unpredictably</li>
          </ul>

          <h3>Bicyclists</h3>
          
          <p>Bicycles are vehicles with the same rights as cars in Indiana:</p>

          <h4>Sharing with Cyclists</h4>
          <ul>
            <li>Leave at least 3 feet when passing</li>
            <li>Wait for a safe opportunity to pass</li>
            <li>Check for cyclists before opening car doors</li>
            <li>Watch for cyclists when making right turns</li>
          </ul>

          <h3>Motorcyclists</h3>
          
          <p>Motorcycles are smaller and harder to see:</p>

          <ul>
            <li><strong>Look twice</strong> before changing lanes or turning</li>
            <li>Check blind spots carefully</li>
            <li>Give extra following distance</li>
            <li>Never share a lane with a motorcycle</li>
          </ul>

          <h3>Large Trucks</h3>
          
          <p>Indiana's highways carry significant truck traffic. Understanding truck limitations keeps you safe:</p>

          <h4>Truck Blind Spots (No-Zones)</h4>
          <ul>
            <li><strong>Front:</strong> 20 feet ahead of cab</li>
            <li><strong>Rear:</strong> 30 feet behind trailer</li>
            <li><strong>Left:</strong> One lane</li>
            <li><strong>Right:</strong> Two lanes (largest blind spot)</li>
          </ul>

          <div class="highlight-box">
            <h4>💡 Truck Safety Rule</h4>
            <p>"If you can't see the truck's mirrors, the driver can't see you."</p>
          </div>

          <h3>Farm Equipment</h3>
          
          <p>Indiana is an agricultural state. Farm equipment on roads is common:</p>

          <div class="alert alert-warning">
            <h4>⚠️ Farm Equipment Safety</h4>
            <ul>
              <li>Watch for slow-moving vehicle emblems (orange triangles)</li>
              <li>Farm vehicles may make wide turns without warning</li>
              <li>They may enter the road from fields with limited visibility</li>
              <li>Be patient—pass only when safe with clear visibility</li>
              <li>Remember these vehicles often can't pull over to let you pass</li>
            </ul>
          </div>

          <h3>School Buses</h3>
          
          <div class="law-box">
            <h4>📜 Indiana School Bus Law</h4>
            <p>When a school bus stops with its stop arm extended and lights flashing:</p>
            <ul>
              <li>Traffic from ALL directions must stop</li>
              <li>Exception: Divided highways with physical barrier</li>
              <li>Wait until the stop arm is retracted and lights stop flashing</li>
            </ul>
            <p><strong>Penalty:</strong> Class A infraction with fines up to $10,000 and license suspension</p>
          </div>

          <h3>Weather Conditions</h3>
          
          <p>Indiana experiences all four seasons with challenging weather:</p>

          <h4>Rain</h4>
          <ul>
            <li>Slow down—reduce speed by 1/3</li>
            <li>Increase following distance to 5-6 seconds</li>
            <li>Use headlights</li>
            <li>Watch for hydroplaning</li>
          </ul>

          <h4>Snow and Ice</h4>
          <ul>
            <li>Reduce speed dramatically</li>
            <li>Increase following distance to 8-10 seconds</li>
            <li>Accelerate and brake gently</li>
            <li>Avoid sudden steering movements</li>
            <li>Bridges and overpasses freeze first</li>
          </ul>

          <h4>Fog</h4>
          <ul>
            <li>Use low-beam headlights (high beams reflect off fog)</li>
            <li>Reduce speed to match visibility</li>
            <li>Increase following distance</li>
            <li>If visibility is too low, pull off completely and wait</li>
          </ul>

          <h3>Work Zones</h3>
          
          <div class="law-box">
            <h4>📜 Indiana Work Zone Laws</h4>
            <ul>
              <li>Fines are <strong>doubled</strong> in work zones when workers are present</li>
              <li>Must obey posted speed limits</li>
              <li>Cell phone restrictions are strictly enforced</li>
            </ul>
          </div>

          <h4>Work Zone Safety Tips</h4>
          <ul>
            <li>Slow down as soon as you see work zone signs</li>
            <li>Stay alert for workers and equipment</li>
            <li>Merge early</li>
            <li>Be patient</li>
          </ul>

          <h3>Railroad Crossings</h3>
          
          <p>Indiana has thousands of railroad crossings:</p>

          <ul>
            <li><strong>Always expect a train</strong></li>
            <li>Never drive around lowered gates</li>
            <li>Stop at least 15 feet from the nearest rail</li>
            <li>Check both directions—trains can come from either way</li>
            <li>If your vehicle stalls on tracks, GET OUT and move away at an angle</li>
          </ul>

          <div class="alert alert-danger">
            <h4>⚠️ Train Facts</h4>
            <p>A fully loaded train traveling at 55 mph takes over a mile to stop. It cannot swerve to avoid you. Never try to beat a train.</p>
          </div>

          <div class="case-study">
            <h4>📋 Case Study: Respecting Railroad Crossings</h4>
            <p>In 2023, a driver in rural Indiana attempted to drive around lowered crossing gates. The train struck her vehicle, killing her instantly. Her three children, waiting at home, lost their mother because of an impatient decision that took less than a minute.</p>
            <p><strong>No destination is worth your life. If gates are down, wait.</strong></p>
          </div>

          <div class="reflection-question">
            <h4>🤔 Reflection Question</h4>
            <p>What adjustments do you make to your driving in different weather conditions? Are there areas where you could improve your interactions with other road users?</p>
          </div>
        `,
        quizQuestions: [
          {
            questionText: 'What should you do when a school bus stops with its stop arm extended in Indiana?',
            options: ['Slow to 25 mph', 'Stop only if you\'re behind the bus', 'Stop from all directions', 'Proceed with caution'],
            correctAnswer: 'Stop from all directions',
            explanation: 'Indiana law requires ALL traffic from ALL directions to stop when a school bus has its stop arm extended (except on divided highways).'
          },
          {
            questionText: 'Which side of a large truck has the largest blind spot?',
            options: ['Front', 'Left side', 'Right side', 'Rear'],
            correctAnswer: 'Right side',
            explanation: 'The right side of a large truck has the largest blind spot, extending about two lanes back from the cab.'
          },
          {
            questionText: 'In Indiana work zones with workers present, fines are:',
            options: ['Normal', 'Doubled', 'Tripled', 'Quadrupled'],
            correctAnswer: 'Doubled',
            explanation: 'Indiana doubles fines in work zones when workers are present.'
          },
          {
            questionText: 'How far should you stop from railroad tracks?',
            options: ['5 feet', '10 feet', '15 feet', '20 feet'],
            correctAnswer: '15 feet',
            explanation: 'You should stop at least 15 feet from the nearest railroad rail.'
          }
        ]
      }
    ],
    finalExamQuestions: [
      {
        questionText: 'How many points can trigger a BMV interview requirement in Indiana?',
        options: ['10 points', '12 points', '14 points', '18 points'],
        correctAnswer: '14 points',
        explanation: 'Accumulating 14 or more points within 2 years requires a BMV interview.'
      },
      {
        questionText: 'Indiana\'s texting while driving law applies to:',
        options: ['Only commercial drivers', 'Only under 18', 'Only under 21', 'All drivers'],
        correctAnswer: 'All drivers',
        explanation: 'Indiana prohibits texting while driving for all drivers regardless of age.'
      },
      {
        questionText: 'The Smith System\'s first principle is:',
        options: ['Get the big picture', 'Keep your eyes moving', 'Aim high in steering', 'Leave yourself an out'],
        correctAnswer: 'Aim high in steering',
        explanation: 'The first principle is "Aim High in Steering" - look 15-20 seconds ahead.'
      },
      {
        questionText: 'The proper following distance in good conditions is:',
        options: ['1 second', '2 seconds', '3 seconds', '5 seconds'],
        correctAnswer: '3 seconds',
        explanation: 'Use the 3-second rule for proper following distance in normal conditions.'
      },
      {
        questionText: 'When waiting to turn left, keep your wheels:',
        options: ['Turned left', 'Turned right', 'Straight', 'In any position'],
        correctAnswer: 'Straight',
        explanation: 'Keep wheels straight while waiting to turn left to avoid being pushed into oncoming traffic if rear-ended.'
      },
      {
        questionText: 'The legal BAC limit for drivers 21+ in Indiana is:',
        options: ['0.02%', '0.04%', '0.08%', '0.10%'],
        correctAnswer: '0.08%',
        explanation: 'The legal BAC limit for drivers 21 and over in Indiana is 0.08%.'
      },
      {
        questionText: 'Refusing a chemical test in Indiana results in:',
        options: ['No penalty', '6-month suspension', '1-year suspension', '2-year suspension'],
        correctAnswer: '1-year suspension',
        explanation: 'First refusal results in automatic 1-year license suspension.'
      },
      {
        questionText: 'Texting while driving increases crash risk by:',
        options: ['5 times', '10 times', '15 times', '23 times'],
        correctAnswer: '23 times',
        explanation: 'Texting while driving increases crash risk by 23 times.'
      },
      {
        questionText: 'Which type(s) of distraction does texting involve?',
        options: ['Visual only', 'Manual only', 'Cognitive only', 'All three'],
        correctAnswer: 'All three',
        explanation: 'Texting involves visual, manual, and cognitive distractions simultaneously.'
      },
      {
        questionText: 'When passing a bicyclist, leave at least:',
        options: ['1 foot', '2 feet', '3 feet', '5 feet'],
        correctAnswer: '3 feet',
        explanation: 'Leave at least 3 feet of space when passing a bicyclist.'
      },
      {
        questionText: 'Indiana\'s school bus law requires traffic from:',
        options: ['Behind the bus only', 'In front only', 'All directions', 'Same lane only'],
        correctAnswer: 'All directions',
        explanation: 'All traffic from all directions must stop for school buses (except on divided highways).'
      },
      {
        questionText: 'In work zones with workers present, fines are:',
        options: ['Normal', 'Doubled', 'Tripled', 'Waived'],
        correctAnswer: 'Doubled',
        explanation: 'Indiana doubles fines in work zones when workers are present.'
      },
      {
        questionText: 'Stop at least how far from railroad tracks?',
        options: ['5 feet', '10 feet', '15 feet', '25 feet'],
        correctAnswer: '15 feet',
        explanation: 'Stop at least 15 feet from the nearest railroad rail.'
      },
      {
        questionText: 'The largest blind spot on a truck is on the:',
        options: ['Front', 'Left side', 'Right side', 'Rear'],
        correctAnswer: 'Right side',
        explanation: 'The right side has the largest blind spot, extending two lanes back.'
      },
      {
        questionText: 'In bad weather, increase following distance to:',
        options: ['3 seconds', '4-6 seconds', '8-10 seconds', '12 seconds'],
        correctAnswer: '4-6 seconds',
        explanation: 'Increase following distance to 4-6 seconds or more in poor conditions.'
      }
    ]
  }
};

export default indianaCourseData;
