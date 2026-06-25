// ===========================
// Texas Defensive Driving Course Curriculum
// TEA/TDLR-Approved Course Content
// ===========================

export const texasCourseData = {
  // Texas 6-hour Driving Safety Course
  course6Hour: {
    name: 'Texas 6-Hour Driving Safety Course',
    slug: 'texas-6-hour-driving-safety',
    description: 'Texas Education Agency (TEA) and TDLR-approved driving safety course for ticket dismissal and insurance discounts. Covers Texas traffic laws, defensive driving techniques, and safe driving practices.',
    durationHours: 6,
    price: 29.95,
    modules: [
      // MODULE 1: Introduction & Texas Traffic Laws
      {
        title: 'Module 1: Introduction & Texas Traffic Laws',
        description: 'Course overview, Texas driving statistics, and state-specific traffic regulations',
        estimatedMinutes: 55,
        content: `
          <h2>Welcome to Texas Driving Safety</h2>
          
          <p>Welcome to Quick Pass Traffic School's Texas Education Agency (TEA) and Texas Department of Licensing and Regulation (TDLR) approved Driving Safety Course. This 6-hour program is designed to make you a safer driver on Texas roads—the largest road network in the nation.</p>

          <div class="highlight-box">
            <h4>🎯 Course Objectives</h4>
            <p>By completing this course, you will:</p>
            <ul>
              <li>Dismiss an eligible traffic ticket (court approval required)</li>
              <li>Avoid points on your driving record</li>
              <li>Qualify for an auto insurance discount of up to 10%</li>
              <li>Learn defensive driving techniques specific to Texas</li>
              <li>Understand current Texas traffic laws</li>
            </ul>
          </div>

          <h3>Texas Driving Statistics</h3>
          
          <div class="statistics-box">
            <h4>📊 Texas Road Statistics</h4>
            <ul>
              <li><strong>4,000+</strong> traffic fatalities annually (highest in the nation)</li>
              <li><strong>500,000+</strong> traffic crashes each year</li>
              <li><strong>Over 80,000 miles</strong> of highway (most of any state)</li>
              <li><strong>18+ million</strong> licensed drivers</li>
              <li>One person dies on Texas roads every 2 hours</li>
            </ul>
          </div>

          <div class="alert alert-warning">
            <h4>⚠️ "End the Streak"</h4>
            <p>Since November 7, 2000, at least one person has died on Texas roads every single day—over 8,000 consecutive days. TxDOT's #EndTheStreak campaign aims to encourage safer driving to finally achieve a death-free day.</p>
          </div>

          <h3>Texas Ticket Dismissal Requirements</h3>
          
          <p>To dismiss a citation in Texas through this course:</p>

          <ol>
            <li>Request permission from the court within 20 days of the citation</li>
            <li>Have a valid Texas driver's license</li>
            <li>Not have taken a driving safety course within the past 12 months for ticket dismissal</li>
            <li>Not hold a Commercial Driver's License (CDL)</li>
            <li>Not be charged with speeding 25+ mph over limit or going over 95 mph</li>
            <li>Complete the course within 90 days</li>
          </ol>

          <h3>Texas Insurance Discount</h3>
          
          <p>Completing this course may qualify you for an insurance discount:</p>

          <ul>
            <li>Up to <strong>10% discount</strong> for 3 years</li>
            <li>Can be taken every 3 years for continued discount</li>
            <li>You will receive a Certificate of Completion for your insurer</li>
          </ul>

          <h3>Texas Point System</h3>
          
          <p>Texas uses a system called the Driver Responsibility Program (though surcharges ended in 2019, points still matter):</p>

          <table class="info-table">
            <tr><th>Points</th><th>Violation</th></tr>
            <tr><td>2 points</td><td>Moving violations (speeding, running red light, etc.)</td></tr>
            <tr><td>3 points</td><td>Moving violations that result in a crash</td></tr>
          </table>

          <h4>Consequences of Point Accumulation</h4>
          <ul>
            <li><strong>6+ points:</strong> Surcharge fees and potential license impact</li>
            <li>Points are removed after 3 years from conviction date</li>
            <li>Completing this course prevents points from being added (ticket dismissal)</li>
          </ul>

          <h3>Texas Speed Limits</h3>
          
          <table class="info-table">
            <tr><th>Area</th><th>Speed Limit</th></tr>
            <tr><td>Residential areas</td><td>30 mph (unless posted)</td></tr>
            <tr><td>Urban district</td><td>30 mph</td></tr>
            <tr><td>School zones</td><td>20 mph (when children present)</td></tr>
            <tr><td>Farm/market roads</td><td>55 mph (day), 55 mph (night)</td></tr>
            <tr><td>State highways</td><td>70 mph (day), 65 mph (night)</td></tr>
            <tr><td>Interstate highways</td><td>Up to 75 mph (some sections 85 mph)</td></tr>
          </table>

          <div class="law-box">
            <h4>📜 Texas Speed Limit Facts</h4>
            <p>Texas has some of the highest speed limits in the nation:</p>
            <ul>
              <li>State Highway 130 has an 85 mph limit—highest in the USA</li>
              <li>Posted limits are for ideal conditions; reduce speed in bad weather</li>
              <li>"Prima facie" speed limits mean the limit is presumed safe but can be exceeded if conditions allow—however, exceeding them is still a violation</li>
            </ul>
          </div>

          <h3>Texas Cell Phone & Texting Laws</h3>
          
          <div class="law-box">
            <h4>📜 Texas Wireless Communication Device Laws</h4>
            <ul>
              <li><strong>Texting while driving:</strong> Banned for ALL drivers (primary offense)</li>
              <li><strong>Under 18:</strong> All cell phone use prohibited while driving</li>
              <li><strong>School zones:</strong> All handheld device use prohibited</li>
              <li><strong>School bus drivers:</strong> Cell phone banned while transporting children</li>
              <li>Local jurisdictions may have stricter hands-free ordinances</li>
            </ul>
          </div>

          <h4>Penalties</h4>
          <table class="info-table">
            <tr><th>Offense</th><th>Fine</th></tr>
            <tr><td>First texting offense</td><td>$25-$99</td></tr>
            <tr><td>Subsequent offenses</td><td>$100-$200</td></tr>
            <tr><td>Texting that causes death/injury</td><td>Up to $4,000 + jail</td></tr>
          </table>

          <h3>Texas Move Over/Slow Down Law</h3>
          
          <div class="alert alert-warning">
            <h4>⚠️ Move Over/Slow Down Requirements</h4>
            <p>When approaching a stationary emergency vehicle with lights activated:</p>
            <ul>
              <li><strong>Multi-lane roads:</strong> Move over one lane away if safe</li>
              <li><strong>If unable to move over:</strong> Slow to 20 mph below posted limit</li>
              <li><strong>If limit is below 25 mph:</strong> Slow to 5 mph</li>
              <li>Applies to: Police, fire, EMS, TxDOT, tow trucks, utility vehicles</li>
            </ul>
            <p><strong>Penalty:</strong> Up to $200 fine ($500 if causes property damage)</p>
          </div>

          <h3>Texas Seat Belt Laws</h3>
          
          <ul>
            <li><strong>All front seat occupants:</strong> Must wear seat belts</li>
            <li><strong>All occupants:</strong> Required in vehicles with 15 or fewer passengers</li>
            <li><strong>Under 8 and under 4'9":</strong> Must be in child safety seat or booster</li>
            <li>Primary enforcement—you can be pulled over for not wearing a belt</li>
          </ul>

          <h3>Texas Graduated Driver's License (GDL)</h3>
          
          <h4>Phase 1: Learner License (15 years old)</h4>
          <ul>
            <li>Must complete driver education</li>
            <li>Hold for 6 months</li>
          </ul>

          <h4>Phase 2: Provisional License (16 years old)</h4>
          <ul>
            <li>No driving between midnight - 5am (unless for work, school, emergency)</li>
            <li>No more than 1 passenger under 21 (unless family member)</li>
            <li>No cell phone use, even hands-free</li>
          </ul>

          <h4>Phase 3: Full License (18 years old)</h4>
          <ul>
            <li>All restrictions lifted upon turning 18</li>
          </ul>

          <div class="reflection-question">
            <h4>🤔 Reflection Question</h4>
            <p>Given that Texas has the highest traffic fatalities in the nation, what specific steps can you commit to taking to drive more safely?</p>
          </div>
        `,
        quizQuestions: [
          {
            questionText: 'How long does someone have to request ticket dismissal in Texas?',
            options: ['10 days', '15 days', '20 days', '30 days'],
            correctAnswer: '20 days',
            explanation: 'You must request permission for ticket dismissal within 20 days of receiving the citation.'
          },
          {
            questionText: 'Texas\'s texting while driving ban applies to:',
            options: ['Only commercial drivers', 'Only under 18', 'Only in school zones', 'All drivers'],
            correctAnswer: 'All drivers',
            explanation: 'Texas bans texting while driving for ALL drivers as a primary offense.'
          },
          {
            questionText: 'What is the highest posted speed limit in Texas?',
            options: ['70 mph', '75 mph', '80 mph', '85 mph'],
            correctAnswer: '85 mph',
            explanation: 'State Highway 130 in Texas has an 85 mph speed limit, the highest in the nation.'
          },
          {
            questionText: 'Under Texas Move Over law, if you can\'t change lanes, you must:',
            options: ['Maintain speed', 'Slow to 5 mph', 'Slow to 20 mph below limit', 'Stop completely'],
            correctAnswer: 'Slow to 20 mph below limit',
            explanation: 'If you cannot move over, you must slow to 20 mph below the posted speed limit (or 5 mph if the limit is below 25 mph).'
          }
        ]
      },

      // MODULE 2: Defensive Driving Techniques
      {
        title: 'Module 2: Defensive Driving Techniques',
        description: 'Core defensive driving strategies for Texas roads',
        estimatedMinutes: 55,
        content: `
          <h2>Defensive Driving on Texas Roads</h2>
          
          <p>Texas roads present unique challenges: high-speed highways, heavy truck traffic, congested urban areas, and vast rural stretches. Defensive driving is your best protection.</p>

          <div class="highlight-box">
            <h4>🛡️ What is Defensive Driving?</h4>
            <p>Defensive driving means:</p>
            <ul>
              <li>Driving to save lives, time, and money despite conditions or others' actions</li>
              <li>Being prepared for the unexpected</li>
              <li>Never assuming other drivers will do the right thing</li>
              <li>Taking responsibility for your own safety</li>
            </ul>
          </div>

          <h3>The IPDE Process</h3>
          
          <p>IPDE is a systematic approach to defensive driving:</p>

          <div class="method-box">
            <h4>I - Identify</h4>
            <p>Continuously scan the roadway to identify hazards. Look at least 15-20 seconds ahead on highways (about a quarter mile).</p>
          </div>

          <div class="method-box">
            <h4>P - Predict</h4>
            <p>Anticipate what could happen. "What if that car runs the light?" "What if that pedestrian steps off the curb?"</p>
          </div>

          <div class="method-box">
            <h4>D - Decide</h4>
            <p>Choose the best course of action: change speed, change position, or communicate.</p>
          </div>

          <div class="method-box">
            <h4>E - Execute</h4>
            <p>Carry out your decision smoothly and in a timely manner.</p>
          </div>

          <h3>Space Management</h3>
          
          <h4>The Three-Second Plus Rule</h4>
          <p>In Texas, with higher speeds, slightly more following distance is advisable:</p>

          <div class="how-to-box">
            <h4>How to Measure Following Distance</h4>
            <ol>
              <li>Watch the vehicle ahead pass a fixed point</li>
              <li>Count "one-thousand-one, one-thousand-two, one-thousand-three"</li>
              <li>You should reach the point AFTER finishing the count</li>
              <li>Add time for adverse conditions</li>
            </ol>
          </div>

          <h4>Following Distance Guidelines</h4>
          <table class="info-table">
            <tr><th>Condition</th><th>Following Distance</th></tr>
            <tr><td>Good conditions</td><td>3-4 seconds</td></tr>
            <tr><td>Rain or wet roads</td><td>5-6 seconds</td></tr>
            <tr><td>Night driving</td><td>4-5 seconds</td></tr>
            <tr><td>Following trucks</td><td>4-5 seconds</td></tr>
            <tr><td>Icy roads</td><td>10+ seconds or more</td></tr>
          </table>

          <h3>Managing the Space Around You</h3>
          
          <ul>
            <li><strong>Front:</strong> Maintain proper following distance</li>
            <li><strong>Sides:</strong> Try not to drive beside other vehicles; don't linger in blind spots</li>
            <li><strong>Rear:</strong> If tailgated, increase front cushion; don't brake-check</li>
          </ul>

          <h3>Speed Management</h3>
          
          <p>Speed is a factor in about 30% of Texas fatal crashes:</p>

          <div class="alert alert-danger">
            <h4>⚠️ Speed and Stopping Distance</h4>
            <p>At 60 mph, you travel 88 feet per second. If you take 1.5 seconds to react:</p>
            <ul>
              <li>Reaction distance: 132 feet</li>
              <li>Braking distance: ~180 feet</li>
              <li>Total stopping distance: ~312 feet (longer than a football field)</li>
            </ul>
            <p>Doubling your speed quadruples your braking distance.</p>
          </div>

          <h3>Highway Driving in Texas</h3>
          
          <p>Texas has more highway miles than any other state:</p>

          <h4>Entering Highways</h4>
          <ul>
            <li>Use the acceleration lane to match traffic speed</li>
            <li>Signal early and merge smoothly</li>
            <li>Yield to vehicles already on the highway</li>
            <li>Don't stop on the ramp unless traffic requires it</li>
          </ul>

          <h4>Driving on Highways</h4>
          <ul>
            <li>Stay in the right lane except to pass</li>
            <li>Maintain a steady speed</li>
            <li>Keep extra distance from trucks</li>
            <li>Watch for entrance ramp traffic</li>
            <li>Plan lane changes well in advance</li>
          </ul>

          <h4>Exiting Highways</h4>
          <ul>
            <li>Signal early</li>
            <li>Move to the deceleration lane before slowing</li>
            <li>Don't slow down on the main lanes</li>
            <li>Check ramp speed signs—they're typically much lower than highway speed</li>
          </ul>

          <h3>Intersections</h3>
          
          <p>More crashes occur at intersections than any other location:</p>

          <h4>Intersection Safety</h4>
          <ul>
            <li>Approach with foot covering brake</li>
            <li>Look left-right-left before proceeding on green</li>
            <li>Don't enter unless you can clear the intersection</li>
            <li>Watch for red-light runners</li>
            <li>Be extra cautious of left-turning vehicles</li>
          </ul>

          <div class="law-box">
            <h4>📜 Texas Yellow Light Law</h4>
            <p>In Texas, a yellow light means "stop if safely possible." You may proceed only if stopping would be unsafe. Running a red light after a yellow is a violation.</p>
          </div>

          <h3>Passing Safely</h3>
          
          <h4>When Passing is Prohibited</h4>
          <ul>
            <li>On hills or curves with limited visibility</li>
            <li>At intersections or railroad crossings</li>
            <li>In no-passing zones</li>
            <li>When oncoming traffic makes it unsafe</li>
          </ul>

          <h4>Safe Passing Procedure</h4>
          <ol>
            <li>Check ahead for adequate clear distance</li>
            <li>Check mirrors and blind spot</li>
            <li>Signal and move into passing lane</li>
            <li>Accelerate and pass quickly</li>
            <li>Signal and return when you see the passed vehicle in your rearview mirror</li>
          </ol>

          <div class="case-study">
            <h4>📋 Case Study: The Cost of Impatience</h4>
            <p><strong>U.S. 281 Near San Antonio:</strong></p>
            <p>A driver attempted to pass multiple vehicles on a two-lane highway despite limited visibility. An oncoming vehicle appeared over a rise. Unable to complete the pass, the driver swerved back, forcing another car off the road.</p>
            <p><strong>Result:</strong> Two vehicles damaged, one driver injured, citations issued.</p>
            <p><em>Patience is never worth your life or others' lives.</em></p>
          </div>

          <div class="reflection-question">
            <h4>🤔 Reflection Question</h4>
            <p>Think about your daily commute. What are the most dangerous situations you regularly encounter? How can you apply the IPDE process to handle them more safely?</p>
          </div>
        `,
        quizQuestions: [
          {
            questionText: 'What does IPDE stand for?',
            options: ['Inspect, Prepare, Drive, Evaluate', 'Identify, Predict, Decide, Execute', 'Indicate, Proceed, Defer, Exit', 'Identify, Position, Drive, Exit'],
            correctAnswer: 'Identify, Predict, Decide, Execute',
            explanation: 'IPDE is a systematic defensive driving process: Identify, Predict, Decide, Execute.'
          },
          {
            questionText: 'In good conditions, the minimum following distance should be:',
            options: ['1-2 seconds', '2-3 seconds', '3-4 seconds', '5-6 seconds'],
            correctAnswer: '3-4 seconds',
            explanation: 'Use the 3-4 second rule for minimum following distance in good conditions, especially on Texas highways.'
          },
          {
            questionText: 'When your speed doubles, your braking distance:',
            options: ['Doubles', 'Triples', 'Quadruples', 'Stays the same'],
            correctAnswer: 'Quadruples',
            explanation: 'Doubling your speed quadruples your braking distance due to the physics of kinetic energy.'
          },
          {
            questionText: 'In Texas, a yellow light means:',
            options: ['Speed up to make it', 'The same as a green light', 'Stop if safely possible', 'Prepare to go'],
            correctAnswer: 'Stop if safely possible',
            explanation: 'In Texas, a yellow light means stop if you can do so safely.'
          }
        ]
      },

      // MODULE 3: Impaired and Distracted Driving
      {
        title: 'Module 3: Impaired and Distracted Driving',
        description: 'Texas DWI laws and the dangers of impaired and distracted driving',
        estimatedMinutes: 55,
        content: `
          <h2>Impaired and Distracted Driving in Texas</h2>
          
          <p>Impaired and distracted driving are leading causes of fatal crashes in Texas. Understanding the laws, risks, and consequences can save your life and others'.</p>

          <h3>Texas DWI Statistics</h3>
          
          <div class="statistics-box">
            <h4>📊 Texas DWI Facts</h4>
            <ul>
              <li>Approximately <strong>1,500</strong> people die in alcohol-related crashes in Texas annually</li>
              <li><strong>Over 90,000</strong> DWI arrests each year</li>
              <li><strong>29%</strong> of traffic fatalities involve a driver with BAC of 0.08% or higher</li>
              <li>Texas has the most drunk driving fatalities of any state</li>
            </ul>
          </div>

          <h3>Texas DWI Laws</h3>
          
          <p>Texas uses "DWI" (Driving While Intoxicated) rather than DUI:</p>

          <div class="alert alert-danger">
            <h4>⚠️ Texas Legal BAC Limits</h4>
            <ul>
              <li><strong>21 and over:</strong> 0.08% BAC</li>
              <li><strong>Commercial drivers:</strong> 0.04% BAC</li>
              <li><strong>Under 21:</strong> ANY detectable alcohol (Zero Tolerance)</li>
            </ul>
            <p><strong>Important:</strong> You can be arrested for DWI even below 0.08% if impaired.</p>
          </div>

          <h4>DWI Penalties</h4>
          <table class="info-table">
            <tr><th>Offense</th><th>Jail Time</th><th>Fine</th><th>License Suspension</th></tr>
            <tr><td>First DWI</td><td>3-180 days</td><td>Up to $2,000</td><td>90 days - 1 year</td></tr>
            <tr><td>Second DWI</td><td>30 days - 1 year</td><td>Up to $4,000</td><td>180 days - 2 years</td></tr>
            <tr><td>Third DWI (Felony)</td><td>2-10 years</td><td>Up to $10,000</td><td>180 days - 2 years</td></tr>
            <tr><td>DWI with child</td><td>180 days - 2 years</td><td>Up to $10,000</td><td>180 days</td></tr>
            <tr><td>Intoxication manslaughter</td><td>2-20 years</td><td>Up to $10,000</td><td>180 days - 2 years</td></tr>
          </table>

          <h4>Additional DWI Consequences</h4>
          <ul>
            <li><strong>Surcharges:</strong> Up to $2,000/year for 3 years</li>
            <li><strong>Ignition interlock:</strong> May be required</li>
            <li><strong>Community service:</strong> 24-100+ hours</li>
            <li><strong>DWI education:</strong> 12-32 hour program</li>
            <li><strong>Employment impact:</strong> Many employers won't hire with DWI</li>
            <li><strong>Insurance:</strong> SR-22 required, rates dramatically increase</li>
          </ul>

          <h3>Texas Implied Consent Law</h3>
          
          <div class="law-box">
            <h4>📜 Implied Consent</h4>
            <p>By driving on Texas roads, you automatically consent to chemical testing:</p>
            <ul>
              <li><strong>First refusal:</strong> 180-day license suspension</li>
              <li><strong>Second refusal:</strong> 2-year suspension</li>
              <li>Refusal can be used as evidence against you</li>
              <li>Officers may obtain a warrant for blood test if you refuse</li>
            </ul>
          </div>

          <h3>How Alcohol Affects Driving</h3>
          
          <table class="info-table">
            <tr><th>BAC Level</th><th>Effects</th></tr>
            <tr><td>0.02%</td><td>Slight relaxation, some loss of judgment</td></tr>
            <tr><td>0.05%</td><td>Reduced coordination, lowered alertness, release of inhibition</td></tr>
            <tr><td>0.08%</td><td>Poor muscle coordination, impaired judgment, difficulty detecting danger</td></tr>
            <tr><td>0.10%</td><td>Clear deterioration of reaction time, slurred speech</td></tr>
            <tr><td>0.15%</td><td>Major loss of balance, substantial impairment of vehicle control</td></tr>
          </table>

          <h3>Drug-Impaired Driving</h3>
          
          <p>Texas law treats drug impairment the same as alcohol:</p>

          <ul>
            <li><strong>Marijuana:</strong> Remains illegal in Texas; impairs driving significantly</li>
            <li><strong>Prescription drugs:</strong> Many impair driving ability</li>
            <li><strong>Over-the-counter medications:</strong> Antihistamines, sleep aids affect alertness</li>
            <li><strong>Combination:</strong> Mixing substances multiplies impairment</li>
          </ul>

          <div class="alert alert-warning">
            <h4>⚠️ Prescription Medications</h4>
            <p>Even legal medications can lead to DWI charges if they impair your driving. Always:</p>
            <ul>
              <li>Read all warning labels</li>
              <li>Ask your doctor or pharmacist about driving</li>
              <li>Know how a medication affects you before driving</li>
              <li>Never mix medications with alcohol</li>
            </ul>
          </div>

          <h3>Distracted Driving in Texas</h3>
          
          <div class="statistics-box">
            <h4>📊 Texas Distracted Driving Statistics</h4>
            <ul>
              <li><strong>1 in 5</strong> crashes in Texas involves distraction</li>
              <li><strong>500+</strong> distracted driving deaths annually</li>
              <li><strong>100,000+</strong> distracted driving crashes each year</li>
            </ul>
          </div>

          <h4>Types of Distraction</h4>
          <ul>
            <li><strong>Visual:</strong> Eyes off the road</li>
            <li><strong>Manual:</strong> Hands off the wheel</li>
            <li><strong>Cognitive:</strong> Mind off driving</li>
          </ul>

          <p><strong>Texting combines all three</strong>—making it one of the most dangerous activities.</p>

          <div class="law-box">
            <h4>📜 Texas Texting Law</h4>
            <p>Texas prohibits texting while driving for ALL drivers:</p>
            <ul>
              <li>Reading, writing, or sending electronic messages</li>
              <li>First offense: $25-99 fine</li>
              <li>Subsequent: $100-200 fine</li>
              <li>Death or serious injury: Up to $4,000 fine + jail</li>
            </ul>
          </div>

          <h4>Additional Restrictions</h4>
          <ul>
            <li><strong>School zones:</strong> All handheld device use banned</li>
            <li><strong>Under 18:</strong> All cell phone use prohibited</li>
            <li><strong>School bus drivers:</strong> Cell use banned while kids aboard</li>
            <li><strong>Local ordinances:</strong> Many cities have stricter hands-free laws</li>
          </ul>

          <h3>Fatigue</h3>
          
          <p>Drowsy driving is impaired driving:</p>

          <ul>
            <li>Being awake 18 hours = driving at 0.05% BAC</li>
            <li>Being awake 24 hours = driving at 0.10% BAC</li>
            <li>Drowsy driving causes 100,000+ crashes nationally per year</li>
          </ul>

          <h4>Warning Signs of Fatigue</h4>
          <ul>
            <li>Frequent yawning or blinking</li>
            <li>Drifting from your lane</li>
            <li>Missing exits or signs</li>
            <li>Difficulty remembering the last few miles</li>
          </ul>

          <h4>Combat Fatigue</h4>
          <ul>
            <li>Get adequate sleep before driving</li>
            <li>Stop every 2 hours or 100 miles</li>
            <li>Travel during hours you're normally awake</li>
            <li>If drowsy, pull over and rest (a 20-minute nap can help)</li>
          </ul>

          <div class="case-study">
            <h4>📋 Case Study: One Text, Life Changed</h4>
            <p><strong>I-35 Near Austin:</strong></p>
            <p>Maria was driving home from work when she glanced at her phone to read a text. In that moment, traffic ahead stopped abruptly. She rear-ended the car in front of her at 65 mph.</p>
            <p><strong>Consequences:</strong></p>
            <ul>
              <li>The other driver was paralyzed from the waist down</li>
              <li>Maria faced criminal charges for serious bodily injury</li>
              <li>She lost her job and faced a civil lawsuit for millions</li>
              <li>She lives with the guilt every day</li>
            </ul>
            <p><em>No text is worth a life.</em></p>
          </div>

          <div class="reflection-question">
            <h4>🤔 Reflection Question</h4>
            <p>What personal strategies will you use to ensure you never drive impaired or distracted?</p>
          </div>
        `,
        quizQuestions: [
          {
            questionText: 'What is the legal BAC limit for drivers 21+ in Texas?',
            options: ['0.02%', '0.04%', '0.08%', '0.10%'],
            correctAnswer: '0.08%',
            explanation: 'The legal BAC limit for drivers 21 and over in Texas is 0.08%.'
          },
          {
            questionText: 'Texas Zero Tolerance law applies to drivers under:',
            options: ['18', '19', '21', '25'],
            correctAnswer: '21',
            explanation: 'Texas has Zero Tolerance for any detectable alcohol in drivers under 21.'
          },
          {
            questionText: 'First refusal of a chemical test in Texas results in:',
            options: ['No penalty', '90-day suspension', '180-day suspension', '1-year suspension'],
            correctAnswer: '180-day suspension',
            explanation: 'First refusal of a chemical test results in a 180-day license suspension in Texas.'
          },
          {
            questionText: 'Texas texting law first offense penalty is:',
            options: ['$25-99 fine', '$100-200 fine', '$200-500 fine', 'No fine, just a warning'],
            correctAnswer: '$25-99 fine',
            explanation: 'First offense texting while driving in Texas carries a fine of $25-99.'
          }
        ]
      },

      // MODULE 4: Sharing the Road
      {
        title: 'Module 4: Sharing the Road',
        description: 'Safely interacting with pedestrians, cyclists, motorcyclists, and commercial vehicles',
        estimatedMinutes: 45,
        content: `
          <h2>Sharing Texas Roads</h2>
          
          <p>Texas roads are used by many different types of road users. Understanding how to interact safely with each is essential for defensive driving.</p>

          <h3>Pedestrians</h3>
          
          <div class="law-box">
            <h4>📜 Texas Pedestrian Laws</h4>
            <ul>
              <li>Yield to pedestrians in crosswalks</li>
              <li>Exercise due care to avoid injuring pedestrians</li>
              <li>Stop for pedestrians on your half of the road or within one lane of your vehicle</li>
            </ul>
          </div>

          <h4>Pedestrian Safety Tips</h4>
          <ul>
            <li>Watch for pedestrians at intersections and crosswalks</li>
            <li>Be extra alert in school zones and residential areas</li>
            <li>Watch for children near ice cream trucks, parks, and playgrounds</li>
            <li>At night, pedestrians are hard to see</li>
          </ul>

          <h3>Bicyclists</h3>
          
          <p>Texas law treats bicycles as vehicles with the same rights as cars:</p>

          <div class="law-box">
            <h4>📜 Texas Safe Passing Law</h4>
            <p>When passing a bicyclist, leave at least <strong>3 feet</strong> of space. On roads with speeds over 30 mph, consider changing lanes if safe.</p>
          </div>

          <h4>Bicycle Safety Tips</h4>
          <ul>
            <li>Allow 3+ feet when passing</li>
            <li>Check for cyclists before turning right</li>
            <li>Look for cyclists before opening car doors</li>
            <li>Be patient—pass only when safe</li>
          </ul>

          <h3>Motorcyclists</h3>
          
          <p>Motorcycles are harder to see and more vulnerable:</p>

          <ul>
            <li><strong>Look twice</strong> for motorcycles—they're easy to miss</li>
            <li>Allow extra following distance</li>
            <li>Don't share a lane with a motorcycle</li>
            <li>Give them the full lane</li>
            <li>Road hazards that are minor for cars can be deadly for motorcycles</li>
          </ul>

          <h3>Large Trucks</h3>
          
          <p>Texas has significant truck traffic. Understanding truck limitations is essential:</p>

          <h4>Truck Blind Spots (No-Zones)</h4>
          <ul>
            <li><strong>Front:</strong> 20 feet ahead of cab</li>
            <li><strong>Rear:</strong> 30 feet behind trailer</li>
            <li><strong>Left:</strong> One lane</li>
            <li><strong>Right:</strong> Two lanes (largest blind spot)</li>
          </ul>

          <div class="highlight-box">
            <h4>💡 No-Zone Rule</h4>
            <p>"If you can't see the truck's mirrors, the truck driver can't see you."</p>
          </div>

          <h4>Sharing the Road with Trucks</h4>
          <ul>
            <li>Don't cut in front of trucks—they need more stopping distance</li>
            <li>Pass trucks on the left, not the right</li>
            <li>Don't linger beside a truck</li>
            <li>Allow extra room when trucks are turning (they swing wide)</li>
          </ul>

          <h3>School Buses</h3>
          
          <div class="law-box">
            <h4>📜 Texas School Bus Law</h4>
            <p>When a school bus stops with alternating red lights flashing:</p>
            <ul>
              <li>Traffic from <strong>ALL directions</strong> must stop</li>
              <li>Remain stopped until bus moves, lights stop flashing, or driver signals you to proceed</li>
              <li><strong>Exception:</strong> On divided highways with physical barrier, opposite-direction traffic doesn't stop</li>
            </ul>
            <p><strong>Penalty:</strong> Up to $1,250 fine (first offense)</p>
          </div>

          <h3>Emergency Vehicles</h3>
          
          <p>Texas law requires specific actions when emergency vehicles approach:</p>

          <ul>
            <li>Pull to the right and stop when safe</li>
            <li>Remain stopped until the vehicle passes</li>
            <li>Never follow within 500 feet of an emergency vehicle</li>
            <li>Don't stop on a freeway—continue to the nearest exit if possible</li>
          </ul>

          <h3>Slow-Moving Vehicles</h3>
          
          <p>In Texas, farm equipment and other slow-moving vehicles are common on rural roads:</p>

          <ul>
            <li>Watch for orange "slow-moving vehicle" triangles</li>
            <li>Be patient—pass only when safe with clear visibility</li>
            <li>Farm equipment may make wide turns</li>
            <li>They may pull onto roads from fields with limited warning</li>
          </ul>

          <h3>Railroad Crossings</h3>
          
          <p>Texas has more railroad crossings than any other state:</p>

          <div class="alert alert-danger">
            <h4>⚠️ Railroad Crossing Safety</h4>
            <ul>
              <li><strong>Always expect a train</strong></li>
              <li>Never drive around lowered gates</li>
              <li>Stop 15-50 feet from the nearest rail</li>
              <li>Look both ways—trains can come from either direction</li>
              <li>If your vehicle stalls on tracks, GET OUT and move away at an angle</li>
            </ul>
          </div>

          <div class="statistics-box">
            <h4>📊 Texas Railroad Facts</h4>
            <ul>
              <li>Texas has 10,000+ public railroad crossings</li>
              <li>300+ railroad crossing incidents occur annually</li>
              <li>A train traveling 55 mph takes over a mile to stop</li>
              <li>A train is 15 times more likely to kill you than a car</li>
            </ul>
          </div>

          <div class="case-study">
            <h4>📋 Case Study: Never Beat a Train</h4>
            <p><strong>West Texas:</strong></p>
            <p>A driver approached a railroad crossing and saw a train approaching. He estimated he had time to cross before it arrived. He was wrong. The train struck his vehicle, killing him instantly.</p>
            <p><strong>Lesson:</strong> Trains are closer and faster than they appear. Never try to beat a train.</p>
          </div>

          <div class="reflection-question">
            <h4>🤔 Reflection Question</h4>
            <p>How do you adjust your driving when you encounter large trucks on Texas highways? What specific precautions do you take?</p>
          </div>
        `,
        quizQuestions: [
          {
            questionText: 'When passing a bicyclist in Texas, leave at least:',
            options: ['2 feet', '3 feet', '4 feet', '6 feet'],
            correctAnswer: '3 feet',
            explanation: 'Texas law requires at least 3 feet of clearance when passing a bicyclist.'
          },
          {
            questionText: 'The largest blind spot on a large truck is:',
            options: ['In front', 'On the left', 'On the right', 'Behind'],
            correctAnswer: 'On the right',
            explanation: 'A truck\'s largest blind spot is on the right side, extending approximately two lanes.'
          },
          {
            questionText: 'When must you stop for a school bus in Texas?',
            options: ['Only when behind the bus', 'Only when in front', 'From all directions', 'Only in school zones'],
            correctAnswer: 'From all directions',
            explanation: 'Traffic from ALL directions must stop for a school bus with flashing red lights (except on divided highways).'
          },
          {
            questionText: 'How far should you stop from railroad tracks?',
            options: ['5-10 feet', '15-50 feet', '50-75 feet', '100 feet'],
            correctAnswer: '15-50 feet',
            explanation: 'Stop 15-50 feet from the nearest railroad rail.'
          }
        ]
      },

      // MODULE 5: Texas Weather and Road Conditions
      {
        title: 'Module 5: Texas Weather and Road Conditions',
        description: 'Handling Texas\'s diverse and challenging weather conditions',
        estimatedMinutes: 45,
        content: `
          <h2>Driving in Texas Weather</h2>
          
          <p>Texas experiences extreme and varied weather conditions—from flash floods to tornadoes, extreme heat to rare ice storms. Being prepared for these conditions is essential for safe driving.</p>

          <h3>Flash Floods</h3>
          
          <p>Flash flooding is one of the leading causes of weather-related deaths in Texas:</p>

          <div class="alert alert-danger">
            <h4>⚠️ Turn Around, Don't Drown</h4>
            <p>TxDOT's message is clear: NEVER drive through flooded roads.</p>
            <ul>
              <li>Just 6 inches of water can knock you down</li>
              <li>12 inches of water can carry away a small car</li>
              <li>18-24 inches can carry away most vehicles, including SUVs</li>
              <li>You cannot tell how deep water is or if the road beneath is washed out</li>
            </ul>
          </div>

          <div class="statistics-box">
            <h4>📊 Texas Flood Statistics</h4>
            <ul>
              <li>Texas leads the nation in flood deaths</li>
              <li>Most flood deaths occur in vehicles</li>
              <li>Over 50% of flood victims are in vehicles</li>
            </ul>
          </div>

          <h4>Flood Safety</h4>
          <ul>
            <li>Never drive through flooded roads—turn around</li>
            <li>If caught in rising water, abandon your vehicle and seek higher ground</li>
            <li>Watch for debris that may be hidden in flood waters</li>
            <li>Avoid low-water crossings and dips during rain</li>
          </ul>

          <h3>Rain</h3>
          
          <h4>Rainy Driving Tips</h4>
          <ul>
            <li>Reduce speed—wet roads reduce traction by 1/3</li>
            <li>Increase following distance to 5-6 seconds</li>
            <li>Use headlights</li>
            <li>Avoid using cruise control</li>
            <li>Watch for hydroplaning</li>
          </ul>

          <h4>Hydroplaning</h4>
          <p>Hydroplaning occurs when your tires ride on a layer of water rather than the road:</p>
          <ul>
            <li>Most likely at speeds over 35 mph in standing water</li>
            <li>If you hydroplane: take foot off gas, don't brake suddenly, steer straight</li>
            <li>Good tires with adequate tread reduce hydroplaning risk</li>
          </ul>

          <h3>Extreme Heat</h3>
          
          <p>Texas summers bring extreme heat that affects both drivers and vehicles:</p>

          <h4>Vehicle Considerations</h4>
          <ul>
            <li>Check coolant levels and radiator function</li>
            <li>Ensure tire pressure is correct (heat increases pressure)</li>
            <li>Keep emergency water in your vehicle</li>
            <li>Watch temperature gauge for overheating</li>
          </ul>

          <h4>Personal Safety</h4>
          <ul>
            <li>Never leave children or pets in a parked car—even for a minute</li>
            <li>Temperatures inside a car can reach 140°F in minutes</li>
            <li>Stay hydrated</li>
            <li>Watch for signs of heat exhaustion</li>
          </ul>

          <div class="alert alert-danger">
            <h4>⚠️ Hot Car Deaths</h4>
            <p>Texas leads the nation in hot car deaths of children. On an 80°F day, a car's interior can reach 109°F in just 20 minutes. NEVER leave children or pets unattended in a vehicle.</p>
          </div>

          <h3>Fog</h3>
          
          <p>Fog is common in coastal and East Texas areas:</p>

          <ul>
            <li>Use low-beam headlights (high beams reflect off fog)</li>
            <li>Reduce speed to match visibility</li>
            <li>Increase following distance</li>
            <li>If visibility is too low, pull completely off the road</li>
            <li>Watch for other vehicles not using lights</li>
          </ul>

          <h3>Ice and Winter Storms</h3>
          
          <p>While rare, ice storms can paralyze Texas—where infrastructure and drivers are less prepared:</p>

          <h4>Ice Driving Tips</h4>
          <ul>
            <li>Bridges and overpasses freeze first</li>
            <li>Black ice is nearly invisible</li>
            <li>Reduce speed dramatically</li>
            <li>Increase following distance to 10+ seconds</li>
            <li>Avoid sudden braking, acceleration, or steering</li>
            <li>If you skid, steer in the direction you want to go</li>
          </ul>

          <div class="alert alert-warning">
            <h4>⚠️ Texas Winter Storm Warning</h4>
            <p>The February 2021 winter storm showed how dangerous ice can be in Texas. Over 200 people died, many in vehicle crashes on icy roads. When Texas has winter weather:</p>
            <ul>
              <li>If possible, stay home</li>
              <li>If you must drive, go extremely slowly</li>
              <li>Keep emergency supplies in your vehicle</li>
              <li>Tell someone your route and expected arrival time</li>
            </ul>
          </div>

          <h3>High Winds and Dust Storms</h3>
          
          <p>West Texas and the Panhandle experience significant wind:</p>

          <h4>Wind Driving Tips</h4>
          <ul>
            <li>Keep a firm grip on the steering wheel</li>
            <li>Be alert for gusts when passing trucks or in open areas</li>
            <li>Reduce speed</li>
            <li>Watch for debris</li>
          </ul>

          <h4>Dust Storms (Haboobs)</h4>
          <ul>
            <li>If caught in a dust storm, pull off the road completely</li>
            <li>Turn off all lights (to prevent rear-end collisions)</li>
            <li>Set parking brake and take foot off brake pedal</li>
            <li>Wait for the storm to pass</li>
          </ul>

          <h3>Sun Glare</h3>
          
          <p>Texas sun can create dangerous glare, especially during sunrise and sunset:</p>

          <ul>
            <li>Keep sunglasses in your vehicle</li>
            <li>Keep windshield clean inside and out</li>
            <li>Lower sun visor</li>
            <li>Increase following distance</li>
            <li>Use headlights so others can see you</li>
          </ul>

          <div class="case-study">
            <h4>📋 Case Study: Turn Around, Don't Drown</h4>
            <p><strong>Hill Country, Texas:</strong></p>
            <p>During a flash flood, a driver attempted to cross a low-water crossing that appeared to have only a few inches of water. The force of the water swept his truck off the road into a creek. He was trapped for hours before being rescued.</p>
            <p><strong>Lesson:</strong> You cannot judge water depth or current. Even experienced rescue swimmers are cautious around flood waters. Turn around, don't drown.</p>
          </div>

          <div class="reflection-question">
            <h4>🤔 Reflection Question</h4>
            <p>What emergency supplies do you keep in your vehicle? Are you prepared for Texas's varied and extreme weather conditions?</p>
          </div>
        `,
        quizQuestions: [
          {
            questionText: 'How much water can carry away a small car?',
            options: ['3 inches', '6 inches', '12 inches', '24 inches'],
            correctAnswer: '12 inches',
            explanation: 'Just 12 inches of moving water can carry away a small car. Turn around, don\'t drown.'
          },
          {
            questionText: 'In fog, you should use:',
            options: ['High-beam headlights', 'Low-beam headlights', 'Parking lights only', 'No lights'],
            correctAnswer: 'Low-beam headlights',
            explanation: 'Use low-beam headlights in fog. High beams reflect off fog and reduce visibility.'
          },
          {
            questionText: 'If you begin to hydroplane, you should:',
            options: ['Brake hard', 'Accelerate', 'Take foot off gas and steer straight', 'Turn sharply'],
            correctAnswer: 'Take foot off gas and steer straight',
            explanation: 'If hydroplaning, ease off the gas, don\'t brake suddenly, and steer straight.'
          },
          {
            questionText: 'Which part of the road freezes first?',
            options: ['Intersections', 'Bridges and overpasses', 'Straight stretches', 'Exit ramps'],
            correctAnswer: 'Bridges and overpasses',
            explanation: 'Bridges and overpasses freeze first because cold air surrounds them from above and below.'
          }
        ]
      },

      // MODULE 6: Course Review & Conclusion
      {
        title: 'Module 6: Course Review & Conclusion',
        description: 'Review of key concepts and preparation for the final exam',
        estimatedMinutes: 25,
        content: `
          <h2>Course Review</h2>
          
          <p>You've covered a lot of material in this Texas Driving Safety Course. Let's review the key concepts before you take the final exam.</p>

          <h3>Texas Traffic Laws Review</h3>
          
          <div class="highlight-box">
            <h4>📋 Key Texas Laws</h4>
            <ul>
              <li><strong>BAC Limits:</strong> 0.08% (21+), 0.04% (commercial), ANY (under 21)</li>
              <li><strong>Texting:</strong> Banned for ALL drivers</li>
              <li><strong>Move Over Law:</strong> Move over or slow to 20 mph below limit</li>
              <li><strong>School Bus:</strong> Stop from all directions (except divided highways)</li>
              <li><strong>Ticket Dismissal:</strong> Request within 20 days</li>
            </ul>
          </div>

          <h3>Defensive Driving Review</h3>
          
          <div class="highlight-box">
            <h4>📋 IPDE Process</h4>
            <ul>
              <li><strong>I</strong>dentify hazards</li>
              <li><strong>P</strong>redict what could happen</li>
              <li><strong>D</strong>ecide on the best action</li>
              <li><strong>E</strong>xecute your decision</li>
            </ul>
          </div>

          <div class="highlight-box">
            <h4>📋 Following Distance</h4>
            <ul>
              <li>Good conditions: 3-4 seconds</li>
              <li>Rain/wet: 5-6 seconds</li>
              <li>Ice/snow: 10+ seconds</li>
            </ul>
          </div>

          <h3>Impaired Driving Review</h3>
          
          <div class="highlight-box">
            <h4>📋 DWI Penalties</h4>
            <ul>
              <li>First offense: Up to 180 days jail, $2,000 fine</li>
              <li>Third offense (felony): 2-10 years prison</li>
              <li>Implied consent refusal: 180-day suspension</li>
            </ul>
          </div>

          <h3>Sharing the Road Review</h3>
          
          <div class="highlight-box">
            <h4>📋 Key Rules</h4>
            <ul>
              <li>Pass bicyclists with 3+ feet clearance</li>
              <li>Truck's largest blind spot is on the right</li>
              <li>Stop 15-50 feet from railroad tracks</li>
              <li>Never drive around lowered crossing gates</li>
            </ul>
          </div>

          <h3>Texas Weather Review</h3>
          
          <div class="highlight-box">
            <h4>📋 Weather Safety</h4>
            <ul>
              <li><strong>Flash Floods:</strong> Turn Around, Don't Drown</li>
              <li><strong>Fog:</strong> Use low-beam headlights</li>
              <li><strong>Ice:</strong> Bridges freeze first</li>
              <li><strong>Hydroplaning:</strong> Ease off gas, steer straight</li>
            </ul>
          </div>

          <h3>Your Commitment to Safe Driving</h3>
          
          <p>You've learned the skills and knowledge to be a safer driver. Now it's up to you to apply them every time you get behind the wheel.</p>

          <div class="highlight-box">
            <h4>🎯 Safe Driving Pledge</h4>
            <p>I commit to:</p>
            <ul>
              <li>Never drive impaired by alcohol, drugs, or fatigue</li>
              <li>Put my phone away while driving</li>
              <li>Always wear my seat belt</li>
              <li>Maintain safe following distances</li>
              <li>Obey speed limits and traffic laws</li>
              <li>Share the road respectfully with all users</li>
              <li>Adjust my driving for weather and road conditions</li>
            </ul>
          </div>

          <h3>Final Exam Information</h3>
          
          <p>Now you'll take the final exam:</p>

          <ul>
            <li>25 multiple choice questions</li>
            <li>You must score 70% or higher to pass (18 correct)</li>
            <li>Questions cover all course material</li>
            <li>You may retake the exam if needed</li>
          </ul>

          <p>Once you pass, you'll receive your Certificate of Completion for ticket dismissal and/or insurance discount.</p>

          <div class="alert alert-success">
            <h4>🎉 Congratulations!</h4>
            <p>You've completed the Texas 6-Hour Driving Safety Course curriculum. Good luck on your final exam, and drive safely!</p>
          </div>
        `,
        quizQuestions: [
          {
            questionText: 'What does IPDE stand for?',
            options: ['Identify, Predict, Decide, Execute', 'Inspect, Prepare, Drive, Evaluate', 'Identify, Proceed, Defer, Execute', 'Inspect, Position, Drive, Exit'],
            correctAnswer: 'Identify, Predict, Decide, Execute',
            explanation: 'IPDE: Identify, Predict, Decide, Execute - a systematic approach to defensive driving.'
          },
          {
            questionText: 'Texas Move Over law requires you to slow to what speed if you can\'t change lanes?',
            options: ['10 mph below limit', '15 mph below limit', '20 mph below limit', '25 mph below limit'],
            correctAnswer: '20 mph below limit',
            explanation: 'If you cannot move over, slow to 20 mph below the posted limit (or 5 mph if limit is below 25).'
          },
          {
            questionText: 'TxDOT\'s flood safety message is:',
            options: ['Proceed with Caution', 'Turn Around, Don\'t Drown', 'Speed Through Quickly', 'Wait and Watch'],
            correctAnswer: 'Turn Around, Don\'t Drown',
            explanation: 'Turn Around, Don\'t Drown is TxDOT\'s critical message about flood safety.'
          },
          {
            questionText: 'What minimum score is needed to pass the final exam?',
            options: ['60%', '70%', '80%', '90%'],
            correctAnswer: '70%',
            explanation: 'You need a score of 70% or higher to pass the final exam.'
          }
        ]
      }
    ],
    finalExamQuestions: [
      {
        questionText: 'How long do you have to request ticket dismissal in Texas?',
        options: ['10 days', '15 days', '20 days', '30 days'],
        correctAnswer: '20 days',
        explanation: 'You must request ticket dismissal within 20 days of the citation.'
      },
      {
        questionText: 'Texas texting while driving ban applies to:',
        options: ['Only under 18', 'Only in school zones', 'All drivers', 'Only commercial drivers'],
        correctAnswer: 'All drivers',
        explanation: 'Texas bans texting while driving for ALL drivers.'
      },
      {
        questionText: 'The highest speed limit in Texas is:',
        options: ['70 mph', '75 mph', '80 mph', '85 mph'],
        correctAnswer: '85 mph',
        explanation: 'State Highway 130 has an 85 mph limit, the highest in the nation.'
      },
      {
        questionText: 'IPDE stands for:',
        options: ['Identify, Predict, Decide, Execute', 'Inspect, Prepare, Drive, Evaluate', 'Identify, Position, Drive, Exit', 'Inspect, Proceed, Defer, Execute'],
        correctAnswer: 'Identify, Predict, Decide, Execute',
        explanation: 'IPDE: Identify, Predict, Decide, Execute.'
      },
      {
        questionText: 'Minimum following distance in good conditions is:',
        options: ['1-2 seconds', '2-3 seconds', '3-4 seconds', '5-6 seconds'],
        correctAnswer: '3-4 seconds',
        explanation: 'Use 3-4 seconds following distance in normal conditions.'
      },
      {
        questionText: 'When speed doubles, braking distance:',
        options: ['Doubles', 'Triples', 'Quadruples', 'Stays the same'],
        correctAnswer: 'Quadruples',
        explanation: 'Doubling speed quadruples braking distance.'
      },
      {
        questionText: 'The legal BAC limit for drivers 21+ is:',
        options: ['0.04%', '0.05%', '0.08%', '0.10%'],
        correctAnswer: '0.08%',
        explanation: 'The legal BAC limit for drivers 21+ in Texas is 0.08%.'
      },
      {
        questionText: 'First DWI offense maximum fine is:',
        options: ['$1,000', '$2,000', '$4,000', '$10,000'],
        correctAnswer: '$2,000',
        explanation: 'First DWI offense carries a fine up to $2,000.'
      },
      {
        questionText: 'Implied consent refusal results in:',
        options: ['No penalty', '90-day suspension', '180-day suspension', '1-year suspension'],
        correctAnswer: '180-day suspension',
        explanation: 'First refusal results in 180-day license suspension.'
      },
      {
        questionText: 'When passing a bicyclist, leave:',
        options: ['2 feet', '3 feet', '4 feet', '6 feet'],
        correctAnswer: '3 feet',
        explanation: 'Texas requires at least 3 feet clearance when passing bicyclists.'
      },
      {
        questionText: 'A truck\'s largest blind spot is:',
        options: ['Front', 'Left side', 'Right side', 'Rear'],
        correctAnswer: 'Right side',
        explanation: 'The right side has the largest blind spot, spanning two lanes.'
      },
      {
        questionText: 'How far should you stop from railroad tracks?',
        options: ['5-10 feet', '15-50 feet', '50-100 feet', '100+ feet'],
        correctAnswer: '15-50 feet',
        explanation: 'Stop 15-50 feet from the nearest rail.'
      },
      {
        questionText: 'How much water can carry away a small car?',
        options: ['6 inches', '12 inches', '18 inches', '24 inches'],
        correctAnswer: '12 inches',
        explanation: '12 inches of moving water can carry away a small car.'
      },
      {
        questionText: 'In fog, use:',
        options: ['High beams', 'Low beams', 'Parking lights', 'No lights'],
        correctAnswer: 'Low beams',
        explanation: 'Use low beams in fog; high beams reflect and reduce visibility.'
      },
      {
        questionText: 'If hydroplaning, you should:',
        options: ['Brake hard', 'Accelerate', 'Ease off gas, steer straight', 'Turn sharply'],
        correctAnswer: 'Ease off gas, steer straight',
        explanation: 'Ease off the gas, don\'t brake suddenly, and steer straight.'
      },
      {
        questionText: 'Which freezes first?',
        options: ['Intersections', 'Bridges and overpasses', 'Straight roads', 'Curves'],
        correctAnswer: 'Bridges and overpasses',
        explanation: 'Bridges and overpasses freeze first.'
      },
      {
        questionText: 'TxDOT\'s flood safety message is:',
        options: ['Proceed Carefully', 'Turn Around, Don\'t Drown', 'Speed Through', 'Check Depth First'],
        correctAnswer: 'Turn Around, Don\'t Drown',
        explanation: 'Turn Around, Don\'t Drown - never drive through flooded roads.'
      },
      {
        questionText: 'Texas school bus law requires stopping from:',
        options: ['Behind only', 'All directions', 'Same lane only', 'When in school zone'],
        correctAnswer: 'All directions',
        explanation: 'Stop from ALL directions (except on divided highways).'
      },
      {
        questionText: 'Move Over law: if you can\'t move over, slow to:',
        options: ['10 mph below limit', '15 mph below limit', '20 mph below limit', '25 mph below limit'],
        correctAnswer: '20 mph below limit',
        explanation: 'Slow to 20 mph below the posted limit if you cannot move over.'
      },
      {
        questionText: 'Zero Tolerance applies to drivers under:',
        options: ['17', '18', '21', '25'],
        correctAnswer: '21',
        explanation: 'Zero Tolerance for any detectable alcohol applies to drivers under 21.'
      }
    ]
  }
};

export default texasCourseData;
