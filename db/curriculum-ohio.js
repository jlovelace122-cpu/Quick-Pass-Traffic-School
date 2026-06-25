// ===========================
// Ohio Defensive Driving Course Curriculum
// BMV-Approved Course Content
// ===========================

export const ohioCourseData = {
  // Ohio Remedial Driving Course (commonly 2 points off license)
  course2Point: {
    name: 'Ohio 2-Point Remedial Driving Course',
    slug: 'ohio-2-point-remedial-driving',
    description: 'Ohio BMV-approved remedial driving course for point reduction and insurance discounts. Covers Ohio traffic laws, defensive driving techniques, and safe driving practices.',
    durationHours: 4,
    price: 29.95,
    modules: [
      // MODULE 1: Introduction & Ohio Traffic Laws
      {
        title: 'Module 1: Introduction & Ohio Traffic Laws',
        description: 'Course overview, Ohio driving statistics, and state-specific traffic regulations',
        estimatedMinutes: 35,
        content: `
          <h2>Welcome to Ohio Remedial Driving</h2>
          
          <p>Welcome to Quick Pass Traffic School's Ohio Bureau of Motor Vehicles (BMV) approved Remedial Driving Course. This comprehensive course is designed to help you become a safer driver on Ohio's roads while potentially earning a 2-point credit on your driving record.</p>

          <div class="highlight-box">
            <h4>🎯 Course Objectives</h4>
            <p>By completing this course, you will:</p>
            <ul>
              <li>Understand Ohio's traffic laws and regulations</li>
              <li>Learn defensive driving techniques to prevent crashes</li>
              <li>Earn a 2-point credit on your driving record (every 3 years)</li>
              <li>Potentially qualify for auto insurance discounts</li>
              <li>Become a safer, more aware driver</li>
            </ul>
          </div>

          <h3>Ohio Driving Statistics</h3>
          
          <div class="statistics-box">
            <h4>📊 Ohio Traffic Statistics</h4>
            <ul>
              <li><strong>1,100+</strong> traffic fatalities annually</li>
              <li><strong>300,000+</strong> reported crashes each year</li>
              <li><strong>35%</strong> of fatal crashes involve impaired driving</li>
              <li><strong>20%</strong> of fatal crashes involve distracted driving</li>
              <li>Ohio ranks among the top 10 states for traffic volume</li>
            </ul>
          </div>

          <h3>Ohio's Points System</h3>
          
          <p>Ohio uses a 12-point system to track traffic violations:</p>

          <div class="alert alert-danger">
            <h4>⚠️ Point Thresholds</h4>
            <ul>
              <li><strong>6 points in 2 years:</strong> Warning letter</li>
              <li><strong>12 points in 2 years:</strong> License suspension</li>
            </ul>
          </div>

          <h4>Common Violations and Point Values</h4>
          <table class="info-table">
            <tr><th>Violation</th><th>Points</th></tr>
            <tr><td>Speeding (1-10 mph over)</td><td>2 points</td></tr>
            <tr><td>Speeding (11-29 mph over)</td><td>2 points</td></tr>
            <tr><td>Speeding (30+ mph over)</td><td>4 points</td></tr>
            <tr><td>Reckless operation</td><td>4 points</td></tr>
            <tr><td>Failure to yield right of way</td><td>2 points</td></tr>
            <tr><td>Running a red light/stop sign</td><td>2 points</td></tr>
            <tr><td>Improper passing</td><td>2 points</td></tr>
            <tr><td>Following too closely</td><td>2 points</td></tr>
            <tr><td>Driving under suspension</td><td>2 points</td></tr>
            <tr><td>OVI (Operating a Vehicle Impaired)</td><td>6 points</td></tr>
          </table>

          <div class="law-box">
            <h4>📜 2-Point Credit Opportunity</h4>
            <p>In Ohio, completing this BMV-approved remedial driving course earns you a <strong>2-point credit</strong> on your driving record. This credit:</p>
            <ul>
              <li>Can be earned once every 3 years</li>
              <li>Offsets points from violations</li>
              <li>May help you avoid reaching suspension thresholds</li>
              <li>Demonstrates your commitment to safe driving</li>
            </ul>
          </div>

          <h3>Ohio's Distracted Driving Laws</h3>
          
          <p>Ohio has enacted significant distracted driving legislation:</p>

          <div class="law-box">
            <h4>📜 Ohio's Hands-Free Law (Effective April 4, 2023)</h4>
            <ul>
              <li><strong>All drivers:</strong> Cannot hold or physically support a phone while driving</li>
              <li>Cannot write, send, or read text-based communications</li>
              <li>Cannot watch videos or access social media</li>
              <li>Hands-free calls and single-touch navigation allowed</li>
              <li><strong>Under 18:</strong> ALL electronic device use prohibited</li>
            </ul>
          </div>

          <h4>Distracted Driving Penalties</h4>
          <table class="info-table">
            <tr><th>Offense</th><th>Fine</th><th>Points</th></tr>
            <tr><td>First offense</td><td>$150</td><td>2 points</td></tr>
            <tr><td>Second offense (within 2 years)</td><td>$250</td><td>3 points</td></tr>
            <tr><td>Third+ offense (within 2 years)</td><td>$500</td><td>4 points</td></tr>
          </table>

          <h3>Ohio's Move Over Law</h3>
          
          <p>Ohio's Move Over law protects first responders and roadside workers:</p>

          <div class="alert alert-warning">
            <h4>⚠️ Move Over Requirements</h4>
            <p>When approaching stationary vehicles with flashing lights (emergency, tow, or maintenance):</p>
            <ul>
              <li><strong>On multi-lane roads:</strong> Move over one lane if safe</li>
              <li><strong>If unable to move over:</strong> Slow down and proceed with caution</li>
              <li>Applies to: Police, fire, EMS, tow trucks, road maintenance, ODOT vehicles</li>
            </ul>
            <p><strong>Penalty:</strong> Up to $500 fine and 2 points</p>
          </div>

          <h3>Ohio's Seat Belt Laws</h3>
          
          <ul>
            <li><strong>Front seat:</strong> Mandatory seat belt use (primary enforcement)</li>
            <li><strong>Back seat (15+):</strong> Mandatory (secondary enforcement)</li>
            <li><strong>Under 15:</strong> Must be properly restrained (primary enforcement)</li>
            <li><strong>Under 4:</strong> Must be in a child safety seat</li>
            <li><strong>Under 8 and under 4'9":</strong> Must use booster seat</li>
          </ul>

          <h3>Ohio's Graduated Driver's License</h3>
          
          <p>Ohio has a graduated licensing system for new drivers:</p>
          
          <h4>Temporary Instruction Permit (TIPIC)</h4>
          <ul>
            <li>Available at age 15½</li>
            <li>Must hold for 6 months with 50 hours of driving experience (10 at night)</li>
          </ul>

          <h4>Probationary Driver's License</h4>
          <ul>
            <li>Available at age 16</li>
            <li><strong>Nighttime restriction:</strong> No driving 12am - 6am (unless for work, school, emergency)</li>
            <li><strong>Passenger restriction:</strong> Only 1 non-family member passenger (unless adult 21+ present)</li>
          </ul>

          <div class="reflection-question">
            <h4>🤔 Reflection Question</h4>
            <p>Considering Ohio's hands-free law that went into effect in 2023, how have you changed your driving habits to comply?</p>
          </div>
        `,
        quizQuestions: [
          {
            questionText: 'How many points result in license suspension in Ohio?',
            options: ['6 points', '10 points', '12 points', '15 points'],
            correctAnswer: '12 points',
            explanation: 'Accumulating 12 points within 2 years results in license suspension in Ohio.'
          },
          {
            questionText: 'Completing an Ohio remedial driving course provides:',
            options: ['4-point credit', '3-point credit', '2-point credit', '1-point credit'],
            correctAnswer: '2-point credit',
            explanation: 'Ohio BMV-approved remedial driving courses provide a 2-point credit every 3 years.'
          },
          {
            questionText: 'Under Ohio\'s Hands-Free Law, which is permitted while driving?',
            options: ['Holding your phone', 'Texting', 'Watching videos', 'Single-touch navigation'],
            correctAnswer: 'Single-touch navigation',
            explanation: 'Ohio\'s Hands-Free Law permits single-touch navigation but prohibits holding the device.'
          },
          {
            questionText: 'At what age can an Ohio resident obtain a Temporary Instruction Permit?',
            options: ['15 years', '15½ years', '16 years', '16½ years'],
            correctAnswer: '15½ years',
            explanation: 'Ohio allows residents to obtain a Temporary Instruction Permit at age 15½.'
          }
        ]
      },

      // MODULE 2: Defensive Driving Techniques
      {
        title: 'Module 2: Defensive Driving Techniques',
        description: 'Core defensive driving strategies, hazard identification, and collision prevention',
        estimatedMinutes: 40,
        content: `
          <h2>Defensive Driving: Protecting Yourself and Others</h2>
          
          <p>Defensive driving means taking responsibility for your safety by anticipating dangerous situations before they happen. It's the most effective way to prevent crashes on Ohio's busy roads.</p>

          <div class="highlight-box">
            <h4>🛡️ The Defensive Driving Philosophy</h4>
            <ul>
              <li>Anticipate what other drivers might do</li>
              <li>Expect the unexpected</li>
              <li>Maintain control of your vehicle at all times</li>
              <li>Be prepared to react to any situation</li>
              <li>Never assume other drivers will do the right thing</li>
            </ul>
          </div>

          <h3>The SIPDE Process</h3>
          
          <p>SIPDE is a systematic approach to defensive driving:</p>

          <div class="method-box">
            <h4>S - Search</h4>
            <p>Continuously scan the road environment 360 degrees. Look 12-15 seconds ahead (at least one block in the city, a quarter mile on highways).</p>
          </div>

          <div class="method-box">
            <h4>I - Identify</h4>
            <p>Identify potential hazards including other vehicles, pedestrians, road conditions, weather, and traffic controls.</p>
          </div>

          <div class="method-box">
            <h4>P - Predict</h4>
            <p>Predict what could happen. Ask "what if?" What if that car doesn't stop? What if that pedestrian steps into the road?</p>
          </div>

          <div class="method-box">
            <h4>D - Decide</h4>
            <p>Decide on the best course of action. Plan your response before the hazard becomes a danger.</p>
          </div>

          <div class="method-box">
            <h4>E - Execute</h4>
            <p>Execute your decision promptly and smoothly. Whether braking, steering, or accelerating, act decisively.</p>
          </div>

          <h3>Following Distance</h3>
          
          <p>Proper following distance gives you time to react:</p>

          <div class="how-to-box">
            <h4>The 3-4 Second Rule</h4>
            <ol>
              <li>Watch the vehicle ahead pass a fixed point</li>
              <li>Count "one-thousand-one, one-thousand-two, one-thousand-three, one-thousand-four"</li>
              <li>You should reach the point after finishing</li>
            </ol>
          </div>

          <h4>Increase Following Distance When:</h4>
          <ul>
            <li><strong>Rain or wet roads:</strong> 5-6 seconds</li>
            <li><strong>Snow or ice:</strong> 8-10 seconds or more</li>
            <li><strong>Following large trucks:</strong> 4-5 seconds</li>
            <li><strong>Night driving:</strong> 4-5 seconds</li>
            <li><strong>Being tailgated:</strong> Increase front cushion</li>
          </ul>

          <h3>Speed Management</h3>
          
          <p>Proper speed management is essential for safe driving:</p>

          <h4>Total Stopping Distance Components</h4>
          <ul>
            <li><strong>Perception distance:</strong> Distance traveled while identifying hazard</li>
            <li><strong>Reaction distance:</strong> Distance traveled while moving foot to brake</li>
            <li><strong>Braking distance:</strong> Distance traveled while stopping</li>
          </ul>

          <table class="info-table">
            <tr><th>Speed</th><th>Stopping Distance (dry pavement)</th></tr>
            <tr><td>30 mph</td><td>90 feet</td></tr>
            <tr><td>40 mph</td><td>139 feet</td></tr>
            <tr><td>50 mph</td><td>200 feet</td></tr>
            <tr><td>60 mph</td><td>265 feet</td></tr>
            <tr><td>70 mph</td><td>340 feet</td></tr>
          </table>

          <div class="alert alert-warning">
            <h4>⚠️ Speed Kills</h4>
            <p>Doubling your speed quadruples your stopping distance. At 60 mph, you need almost 3 times the stopping distance of 30 mph.</p>
          </div>

          <h3>Intersection Safety</h3>
          
          <p>More than half of all urban crashes occur at intersections:</p>

          <h4>Safe Intersection Practices</h4>
          <ul>
            <li>Approach with foot covering the brake</li>
            <li>Look left-right-left before entering</li>
            <li>Don't enter unless you can clear the intersection</li>
            <li>Watch for red-light runners (count to 2 before going on green)</li>
            <li>Be extra cautious of left-turning vehicles</li>
            <li>Make eye contact with other drivers when possible</li>
          </ul>

          <h3>Lane Position and Space Cushion</h3>
          
          <p>Maintain a "space cushion" around your vehicle:</p>

          <ul>
            <li><strong>Front:</strong> 3-4 seconds minimum following distance</li>
            <li><strong>Sides:</strong> Center your vehicle in lane; avoid driving in others' blind spots</li>
            <li><strong>Rear:</strong> If tailgated, increase front cushion</li>
          </ul>

          <h3>Blind Spots</h3>
          
          <p>Every vehicle has blind spots that mirrors can't cover:</p>

          <h4>How to Check Blind Spots</h4>
          <ol>
            <li>Check mirrors first</li>
            <li>Turn head to look over shoulder</li>
            <li>Signal your intentions</li>
            <li>Re-check mirrors and blind spot</li>
            <li>Make your move smoothly</li>
          </ol>

          <div class="case-study">
            <h4>📋 Case Study: The Cost of Not Checking</h4>
            <p><strong>I-71 Near Columbus:</strong></p>
            <p>A driver changing lanes on I-71 didn't check his blind spot. A motorcycle was traveling in that exact location. The collision sent the motorcyclist to the hospital with serious injuries.</p>
            <p>The driver was cited, his insurance rates increased significantly, and he faces a civil lawsuit. A simple head turn would have prevented it all.</p>
          </div>

          <div class="reflection-question">
            <h4>🤔 Reflection Question</h4>
            <p>When was the last time you consciously used the SIPDE process while driving? How can you incorporate it more consistently into your driving habits?</p>
          </div>
        `,
        quizQuestions: [
          {
            questionText: 'What does SIPDE stand for?',
            options: ['Stop, Identify, Plan, Drive, Execute', 'Search, Identify, Predict, Decide, Execute', 'Slow, Inspect, Prepare, Drive, Evaluate', 'Speed, Identify, Position, Decide, Exit'],
            correctAnswer: 'Search, Identify, Predict, Decide, Execute',
            explanation: 'SIPDE is a systematic defensive driving process: Search, Identify, Predict, Decide, Execute.'
          },
          {
            questionText: 'In good conditions, the minimum following distance should be:',
            options: ['1-2 seconds', '2-3 seconds', '3-4 seconds', '5-6 seconds'],
            correctAnswer: '3-4 seconds',
            explanation: 'Use the 3-4 second rule for minimum following distance in good conditions.'
          },
          {
            questionText: 'When your speed doubles, your stopping distance:',
            options: ['Doubles', 'Triples', 'Quadruples', 'Stays the same'],
            correctAnswer: 'Quadruples',
            explanation: 'Doubling your speed quadruples your stopping distance due to physics.'
          },
          {
            questionText: 'Before changing lanes, you should:',
            options: ['Only check mirrors', 'Only signal', 'Check mirrors, blind spot, and signal', 'Speed up'],
            correctAnswer: 'Check mirrors, blind spot, and signal',
            explanation: 'Always check mirrors, turn head to check blind spot, and signal before changing lanes.'
          }
        ]
      },

      // MODULE 3: Impaired and Distracted Driving
      {
        title: 'Module 3: Impaired and Distracted Driving',
        description: 'Understanding Ohio\'s OVI laws and the dangers of impaired and distracted driving',
        estimatedMinutes: 40,
        content: `
          <h2>Impaired and Distracted Driving: Ohio's Most Dangerous Behaviors</h2>
          
          <p>In Ohio, impaired and distracted driving cause thousands of crashes annually. Understanding the risks, laws, and consequences can save lives.</p>

          <h3>Ohio OVI Laws</h3>
          
          <p>Ohio uses the term "Operating a Vehicle Impaired" (OVI) for drunk and drugged driving:</p>

          <div class="alert alert-danger">
            <h4>⚠️ Ohio OVI Legal Limits</h4>
            <ul>
              <li><strong>21 and over:</strong> 0.08% BAC</li>
              <li><strong>Commercial drivers:</strong> 0.04% BAC</li>
              <li><strong>Under 21:</strong> 0.02% BAC</li>
              <li><strong>High-tier OVI:</strong> 0.17% BAC or higher (enhanced penalties)</li>
            </ul>
          </div>

          <h3>OVI Penalties</h3>
          
          <table class="info-table">
            <tr><th>Offense</th><th>Jail Time</th><th>Fine</th><th>License Suspension</th></tr>
            <tr><td>First OVI</td><td>3 days - 6 months</td><td>$375-$1,075</td><td>1-3 years</td></tr>
            <tr><td>Second OVI (10 years)</td><td>10 days - 6 months</td><td>$525-$1,625</td><td>1-7 years</td></tr>
            <tr><td>Third OVI (10 years)</td><td>30 days - 1 year</td><td>$850-$2,750</td><td>2-12 years</td></tr>
            <tr><td>Fourth+ OVI (felony)</td><td>60 days - 5 years</td><td>$1,350-$10,500</td><td>3 years - permanent</td></tr>
          </table>

          <h3>Ohio's Implied Consent Law</h3>
          
          <div class="law-box">
            <h4>📜 Implied Consent</h4>
            <p>By driving on Ohio roads, you automatically consent to chemical testing if lawfully arrested for OVI:</p>
            <ul>
              <li><strong>First refusal:</strong> 1-year license suspension (no limited driving privileges for 30 days)</li>
              <li><strong>Second refusal:</strong> 2-year suspension</li>
              <li><strong>Third+ refusal:</strong> 3-year suspension</li>
            </ul>
            <p><strong>Note:</strong> Refusal doesn't mean you won't be prosecuted. Prosecution can proceed with other evidence.</p>
          </div>

          <h3>How Alcohol Impairs Driving</h3>
          
          <table class="info-table">
            <tr><th>BAC Level</th><th>Typical Effects</th></tr>
            <tr><td>0.02%</td><td>Some loss of judgment, relaxation, slight warmth</td></tr>
            <tr><td>0.05%</td><td>Lowered alertness, impaired judgment, release of inhibition</td></tr>
            <tr><td>0.08%</td><td>Poor muscle coordination, impaired perception, reduced ability to detect danger</td></tr>
            <tr><td>0.10%</td><td>Clear deterioration of control, slowed thinking</td></tr>
            <tr><td>0.15%</td><td>Major loss of balance and vehicle control</td></tr>
          </table>

          <h3>Drug-Impaired Driving</h3>
          
          <p>Ohio law treats drug impairment the same as alcohol impairment:</p>

          <ul>
            <li><strong>Prescription medications:</strong> Many cause drowsiness or impairment</li>
            <li><strong>Marijuana:</strong> Illegal to drive under the influence regardless of medical card status</li>
            <li><strong>Over-the-counter drugs:</strong> Antihistamines, sleep aids can impair driving</li>
            <li><strong>Combination:</strong> Mixing substances multiplies impairment</li>
          </ul>

          <div class="alert alert-warning">
            <h4>⚠️ Ohio Drugged Driving Limits</h4>
            <p>Ohio has specific limits for drugs in the system while driving:</p>
            <ul>
              <li>Marijuana: 2 ng/mL THC in blood</li>
              <li>Cocaine, heroin, LSD: Any measurable amount</li>
              <li>These are "per se" limits - above them, you're automatically OVI</li>
            </ul>
          </div>

          <h3>Distracted Driving in Ohio</h3>
          
          <p>Ohio's Hands-Free Law (effective April 2023) changed everything:</p>

          <div class="law-box">
            <h4>📜 What's Prohibited</h4>
            <ul>
              <li>Holding or physically supporting a phone</li>
              <li>Using hand to write, send, or read text</li>
              <li>Watching or recording videos</li>
              <li>Using social media</li>
              <li>Playing games</li>
              <li>Any manual data entry</li>
            </ul>
          </div>

          <div class="law-box">
            <h4>📜 What's Permitted</h4>
            <ul>
              <li>Hands-free calls using Bluetooth or speakerphone</li>
              <li>Single-touch to answer or end a call</li>
              <li>Single-touch for navigation</li>
              <li>Using earpiece for calls</li>
              <li>Device in a mount or holder</li>
            </ul>
          </div>

          <h4>Distraction Facts</h4>
          <div class="statistics-box">
            <h4>📊 The Reality of Distraction</h4>
            <ul>
              <li><strong>5 seconds</strong> looking at your phone at 55 mph = traveling length of a football field blind</li>
              <li><strong>23x</strong> greater crash risk while texting</li>
              <li><strong>Cognitive distraction</strong> persists for 27 seconds after using voice commands</li>
              <li>Your brain cannot truly multitask - it rapidly switches between tasks, leaving gaps</li>
            </ul>
          </div>

          <h3>Strategies for Safe Driving</h3>
          
          <h4>Avoid Impaired Driving</h4>
          <ul>
            <li>Plan ahead - designate a sober driver</li>
            <li>Use rideshare apps (Uber, Lyft)</li>
            <li>Stay where you are until sober</li>
            <li>Read medication labels and warnings</li>
            <li>Never mix alcohol with any medication</li>
          </ul>

          <h4>Avoid Distracted Driving</h4>
          <ul>
            <li>Put phone in "Do Not Disturb" or driving mode</li>
            <li>Set up GPS and music before driving</li>
            <li>Tell passengers to handle communications</li>
            <li>Pull over safely if you must use your phone</li>
            <li>Remember: Nothing is worth a crash</li>
          </ul>

          <div class="case-study">
            <h4>📋 Case Study: A Split-Second Decision</h4>
            <p><strong>Cincinnati, Ohio:</strong></p>
            <p>Tom had two beers at a work happy hour. He felt fine and decided to drive home. Ten minutes later, he ran a red light he didn't see and T-boned another vehicle.</p>
            <p><strong>Consequences:</strong></p>
            <ul>
              <li>The other driver suffered a broken pelvis and arm</li>
              <li>Tom blew 0.06% - under the legal limit, but he was still charged with OVI</li>
              <li>He lost his professional license</li>
              <li>Insurance didn't cover the $200,000 in damages</li>
              <li>He faced civil and criminal charges</li>
            </ul>
            <p><em>Being under the legal limit doesn't mean you're safe to drive or won't face consequences.</em></p>
          </div>

          <div class="reflection-question">
            <h4>🤔 Reflection Question</h4>
            <p>How have your habits changed since Ohio implemented the hands-free law? What additional steps could you take to eliminate distractions?</p>
          </div>
        `,
        quizQuestions: [
          {
            questionText: 'What is the legal BAC limit for drivers 21+ in Ohio?',
            options: ['0.02%', '0.04%', '0.08%', '0.10%'],
            correctAnswer: '0.08%',
            explanation: 'The legal BAC limit for drivers 21 and over in Ohio is 0.08%.'
          },
          {
            questionText: 'Ohio\'s "high-tier" OVI threshold is:',
            options: ['0.10%', '0.12%', '0.15%', '0.17%'],
            correctAnswer: '0.17%',
            explanation: 'Ohio has enhanced penalties for "high-tier" OVI at 0.17% BAC or higher.'
          },
          {
            questionText: 'Under Ohio\'s Hands-Free Law, which is permitted?',
            options: ['Holding your phone to talk', 'Sending a quick text', 'Single-touch navigation', 'Watching a video'],
            correctAnswer: 'Single-touch navigation',
            explanation: 'Ohio\'s Hands-Free Law permits single-touch to activate navigation, but you cannot hold the device.'
          },
          {
            questionText: 'First refusal of a chemical test in Ohio results in:',
            options: ['Warning', '6-month suspension', '1-year suspension', '2-year suspension'],
            correctAnswer: '1-year suspension',
            explanation: 'First refusal of a chemical test results in a 1-year license suspension in Ohio.'
          }
        ]
      },

      // MODULE 4: Sharing the Road & Ohio Conditions
      {
        title: 'Module 4: Sharing the Road & Ohio Conditions',
        description: 'Interacting safely with other road users and handling Ohio\'s varied weather conditions',
        estimatedMinutes: 40,
        content: `
          <h2>Sharing Ohio's Roads</h2>
          
          <p>Ohio's roads are shared by many different users. From Cleveland's congested highways to rural farm roads, understanding how to interact with others keeps everyone safe.</p>

          <h3>Pedestrians</h3>
          
          <div class="law-box">
            <h4>📜 Ohio Pedestrian Laws</h4>
            <ul>
              <li>Yield to pedestrians in crosswalks (marked or unmarked)</li>
              <li>Don't pass vehicles stopped for pedestrians</li>
              <li>Use due care to avoid hitting any pedestrian</li>
            </ul>
          </div>

          <h4>Pedestrian Safety Tips</h4>
          <ul>
            <li>Watch for pedestrians at all intersections</li>
            <li>Be extra cautious in school zones and residential areas</li>
            <li>At night, pedestrians may be hard to see</li>
            <li>Children are unpredictable - expect the unexpected</li>
          </ul>

          <h3>Bicyclists</h3>
          
          <p>In Ohio, bicycles have the same rights as motor vehicles:</p>

          <h4>Safe Practices Around Cyclists</h4>
          <ul>
            <li>Pass with care, giving at least 3 feet</li>
            <li>Check for cyclists before turning right</li>
            <li>Look for cyclists before opening car doors</li>
            <li>Be patient - it's their road too</li>
          </ul>

          <h3>Motorcyclists</h3>
          
          <p>Motorcycles are harder to see and more vulnerable:</p>

          <ul>
            <li><strong>Look twice</strong> before turning or changing lanes</li>
            <li>Allow extra following distance</li>
            <li>Don't share a lane with a motorcycle</li>
            <li>Respect their full lane rights</li>
          </ul>

          <h3>Large Trucks</h3>
          
          <p>Ohio's position as a transportation hub means lots of truck traffic:</p>

          <h4>Truck Blind Spots (No-Zones)</h4>
          <ul>
            <li><strong>Front:</strong> 20 feet ahead of cab</li>
            <li><strong>Rear:</strong> 30 feet behind trailer</li>
            <li><strong>Left:</strong> One lane beside cab</li>
            <li><strong>Right:</strong> Two lanes (largest blind spot)</li>
          </ul>

          <div class="highlight-box">
            <h4>💡 Truck Safety Rule</h4>
            <p>"If you can't see the truck's mirrors, the driver can't see you."</p>
          </div>

          <h4>Passing Trucks</h4>
          <ul>
            <li>Pass on the left (smaller blind spot)</li>
            <li>Pass quickly - don't linger beside truck</li>
            <li>Allow extra room before merging back</li>
            <li>Don't cut in front of trucks - they need more stopping distance</li>
          </ul>

          <h3>School Buses</h3>
          
          <div class="law-box">
            <h4>📜 Ohio School Bus Law</h4>
            <p>When a school bus stops with its stop arm extended and lights flashing:</p>
            <ul>
              <li><strong>All traffic</strong> must stop at least 10 feet from bus</li>
              <li>Wait until stop arm is retracted and lights stop</li>
              <li><strong>Exception:</strong> On divided highways (with median or barrier), opposite-direction traffic doesn't stop</li>
            </ul>
            <p><strong>Penalty:</strong> $500 fine and possible license suspension</p>
          </div>

          <h3>Ohio Weather Conditions</h3>
          
          <p>Ohio experiences all four seasons with significant weather challenges:</p>

          <h4>Lake Effect Snow</h4>
          <p>Cleveland and northeast Ohio experience heavy lake effect snow from Lake Erie:</p>
          <ul>
            <li>Can create whiteout conditions suddenly</li>
            <li>Snow bands can be very localized</li>
            <li>Slow down dramatically in snow bands</li>
            <li>Keep headlights on, don't use high beams</li>
          </ul>

          <h4>Rain</h4>
          <ul>
            <li>Reduce speed by 1/3</li>
            <li>Increase following distance to 5-6 seconds</li>
            <li>Turn headlights on (Ohio law: "wipers on, lights on")</li>
            <li>Watch for hydroplaning</li>
          </ul>

          <h4>Ice and Black Ice</h4>
          <ul>
            <li>Bridges and overpasses freeze first</li>
            <li>Shaded areas may have ice when sun areas don't</li>
            <li>Increase following distance to 10 seconds or more</li>
            <li>Avoid sudden braking, acceleration, or steering</li>
          </ul>

          <h4>Fog</h4>
          <ul>
            <li>Use low-beam headlights (high beams reflect off fog)</li>
            <li>Reduce speed to match visibility</li>
            <li>If fog is too thick, pull completely off the road</li>
            <li>Don't stop on the roadway</li>
          </ul>

          <h3>Work Zones</h3>
          
          <div class="law-box">
            <h4>📜 Ohio Work Zone Laws</h4>
            <ul>
              <li>Fines are <strong>doubled</strong> in work zones</li>
              <li>OVI in a work zone: fines doubled, mandatory jail time increased</li>
              <li>Hitting a worker can result in felony charges</li>
            </ul>
          </div>

          <h4>Work Zone Safety</h4>
          <ul>
            <li>Slow down when you see work zone signs</li>
            <li>Merge early - don't wait until the last minute</li>
            <li>Watch for workers and equipment</li>
            <li>Be alert for sudden stops</li>
          </ul>

          <h3>Rural Roads</h3>
          
          <p>Ohio has many rural roads with unique hazards:</p>

          <ul>
            <li><strong>Farm equipment:</strong> Watch for slow-moving vehicles (orange triangle)</li>
            <li><strong>Animals:</strong> Deer are especially dangerous at dawn and dusk</li>
            <li><strong>Curves and hills:</strong> Reduce speed, stay in your lane</li>
            <li><strong>Limited visibility:</strong> Don't pass unless you can see clearly ahead</li>
          </ul>

          <div class="alert alert-warning">
            <h4>⚠️ Deer Season in Ohio</h4>
            <p>Ohio has one of the highest deer populations in the country. Be especially alert October through January:</p>
            <ul>
              <li>Most deer-vehicle crashes occur at dawn and dusk</li>
              <li>If you see one deer, expect more</li>
              <li>If a collision is unavoidable, brake firmly and stay in your lane</li>
              <li>Don't swerve - you may cause a worse crash</li>
            </ul>
          </div>

          <div class="case-study">
            <h4>📋 Case Study: Lake Effect Snow</h4>
            <p>On I-90 near Cleveland, a driver traveling 65 mph entered a lake effect snow band. In seconds, visibility dropped to near zero. Unable to stop in time, he rear-ended a vehicle ahead, setting off a chain-reaction crash involving 12 vehicles.</p>
            <p><strong>Lessons:</strong></p>
            <ul>
              <li>Weather can change instantly in lake effect zones</li>
              <li>Speed must be reduced for conditions</li>
              <li>Maintain extra following distance in winter</li>
            </ul>
          </div>

          <div class="reflection-question">
            <h4>🤔 Reflection Question</h4>
            <p>How do you prepare your vehicle and adjust your driving for Ohio's winter conditions? What additional precautions might you take?</p>
          </div>
        `,
        quizQuestions: [
          {
            questionText: 'When passing a bicyclist in Ohio, leave at least:',
            options: ['1 foot', '2 feet', '3 feet', '4 feet'],
            correctAnswer: '3 feet',
            explanation: 'Leave at least 3 feet of space when passing a bicyclist.'
          },
          {
            questionText: 'Ohio school bus law requires you to stop at least:',
            options: ['5 feet', '10 feet', '15 feet', '20 feet'],
            correctAnswer: '10 feet',
            explanation: 'Ohio law requires stopping at least 10 feet from a school bus with its stop arm extended.'
          },
          {
            questionText: 'In Ohio work zones, fines are:',
            options: ['Normal', 'Doubled', 'Tripled', 'Quadrupled'],
            correctAnswer: 'Doubled',
            explanation: 'Ohio doubles traffic fines in work zones.'
          },
          {
            questionText: 'The largest blind spot on a commercial truck is on the:',
            options: ['Front', 'Left side', 'Right side', 'Rear'],
            correctAnswer: 'Right side',
            explanation: 'A truck\'s largest blind spot is on the right side, extending approximately two lanes.'
          }
        ]
      }
    ],
    finalExamQuestions: [
      {
        questionText: 'How many points result in license suspension in Ohio?',
        options: ['6 points', '10 points', '12 points', '15 points'],
        correctAnswer: '12 points',
        explanation: '12 points in 2 years leads to license suspension in Ohio.'
      },
      {
        questionText: 'Ohio\'s remedial driving course provides:',
        options: ['4-point credit', '3-point credit', '2-point credit', '1-point credit'],
        correctAnswer: '2-point credit',
        explanation: 'Completing an Ohio remedial driving course earns a 2-point credit every 3 years.'
      },
      {
        questionText: 'Ohio\'s Hands-Free Law became effective:',
        options: ['April 2022', 'April 2023', 'January 2023', 'January 2024'],
        correctAnswer: 'April 2023',
        explanation: 'Ohio\'s Hands-Free Law took effect on April 4, 2023.'
      },
      {
        questionText: 'The legal BAC limit for drivers 21+ in Ohio is:',
        options: ['0.05%', '0.08%', '0.10%', '0.04%'],
        correctAnswer: '0.08%',
        explanation: 'The legal BAC limit for drivers 21 and over in Ohio is 0.08%.'
      },
      {
        questionText: 'Ohio\'s "high-tier" OVI threshold is:',
        options: ['0.12%', '0.15%', '0.17%', '0.20%'],
        correctAnswer: '0.17%',
        explanation: 'Enhanced penalties apply for OVI at 0.17% BAC or higher.'
      },
      {
        questionText: 'What does SIPDE stand for?',
        options: ['Stop, Identify, Plan, Drive, Execute', 'Search, Identify, Predict, Decide, Execute', 'Slow, Inspect, Prepare, Drive, Exit', 'See, Identify, Plan, Decide, Evaluate'],
        correctAnswer: 'Search, Identify, Predict, Decide, Execute',
        explanation: 'SIPDE: Search, Identify, Predict, Decide, Execute.'
      },
      {
        questionText: 'Minimum following distance in good conditions is:',
        options: ['1-2 seconds', '2-3 seconds', '3-4 seconds', '5-6 seconds'],
        correctAnswer: '3-4 seconds',
        explanation: 'Maintain 3-4 seconds following distance in normal conditions.'
      },
      {
        questionText: 'When speed doubles, stopping distance:',
        options: ['Doubles', 'Triples', 'Quadruples', 'Stays the same'],
        correctAnswer: 'Quadruples',
        explanation: 'Doubling speed quadruples stopping distance.'
      },
      {
        questionText: 'First refusal of chemical test results in:',
        options: ['Warning', '6-month suspension', '1-year suspension', '2-year suspension'],
        correctAnswer: '1-year suspension',
        explanation: 'First refusal leads to 1-year license suspension.'
      },
      {
        questionText: 'Ohio school bus law requires stopping at least:',
        options: ['5 feet', '10 feet', '15 feet', '20 feet'],
        correctAnswer: '10 feet',
        explanation: 'Stop at least 10 feet from a stopped school bus.'
      },
      {
        questionText: 'In Ohio work zones, fines are:',
        options: ['Normal', 'Doubled', 'Tripled', 'Quadrupled'],
        correctAnswer: 'Doubled',
        explanation: 'Ohio doubles fines in work zones.'
      },
      {
        questionText: 'The truck\'s largest blind spot is on the:',
        options: ['Front', 'Left', 'Right', 'Rear'],
        correctAnswer: 'Right',
        explanation: 'The right side has the largest blind spot, spanning two lanes.'
      },
      {
        questionText: 'Ohio\'s "wipers on, lights on" law requires:',
        options: ['Parking lights only', 'Headlights when wipers are on', 'High beams in rain', 'Hazard lights'],
        correctAnswer: 'Headlights when wipers are on',
        explanation: 'Ohio law requires headlights whenever windshield wipers are in continuous use.'
      },
      {
        questionText: 'When are deer-vehicle crashes most common?',
        options: ['Midday', 'Midnight', 'Dawn and dusk', 'Early afternoon'],
        correctAnswer: 'Dawn and dusk',
        explanation: 'Deer are most active at dawn and dusk, making crashes most likely then.'
      },
      {
        questionText: 'If you can\'t see a truck\'s mirrors:',
        options: ['You\'re in a safe zone', 'The driver can\'t see you', 'You should speed up', 'You should honk'],
        correctAnswer: 'The driver can\'t see you',
        explanation: 'If you can\'t see the truck\'s mirrors, you\'re in the driver\'s blind spot.'
      }
    ]
  }
};

export default ohioCourseData;
