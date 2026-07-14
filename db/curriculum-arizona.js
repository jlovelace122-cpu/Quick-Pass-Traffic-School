// ===========================
// Arizona Defensive Driving Course Curriculum  
// ADOT/MVD-Approved Course Content
// ===========================

export const arizonaCourseData = {
  // Arizona 4-Hour Defensive Driving Course (online)
  course4Hour: {
    name: 'Arizona 4-Hour Defensive Driving Course',
    slug: 'arizona-4-hour-defensive-driving',
    description: 'Arizona ADOT-approved 4-hour defensive driving course for ticket dismissal and point reduction. Covers Arizona traffic laws, defensive driving techniques, and safe driving practices in desert conditions. Additional court/state fees apply and vary by county.',
    durationHours: 4,
    price: 24.95,
    modules: [
      // MODULE 1: Introduction & Arizona Traffic Laws
      {
        title: 'Module 1: Introduction & Arizona Traffic Laws',
        description: 'Course overview, Arizona driving statistics, and state-specific traffic regulations',
        estimatedMinutes: 55,
        content: `
          <h2>Welcome to Arizona 4-Hour Defensive Driving Course</h2>
          
          <p>Welcome to Quick Pass Traffic School's Arizona Department of Transportation (ADOT) and Motor Vehicle Division (MVD) approved defensive driving course. This online course is designed to help you dismiss a traffic citation and become a safer driver on Arizona's unique roadways.</p>

          <div class="highlight-box">
            <h4>🎯 Course Objectives</h4>
            <p>By completing this course, you will:</p>
            <ul>
              <li>Dismiss an eligible traffic citation (court approval required)</li>
              <li>Prevent points from appearing on your driving record</li>
              <li>Learn defensive driving techniques for Arizona's roads</li>
              <li>Understand Arizona traffic laws and penalties</li>
              <li>Become a safer, more responsible driver</li>
            </ul>
          </div>

          <h3>Arizona Driving Statistics</h3>
          
          <div class="statistics-box">
            <h4>📊 Arizona Road Statistics</h4>
            <ul>
              <li><strong>1,000+</strong> traffic fatalities annually</li>
              <li><strong>120,000+</strong> crashes each year</li>
              <li><strong>5+ million</strong> licensed drivers</li>
              <li><strong>30%</strong> of fatal crashes involve impaired driving</li>
              <li>Arizona has one of the highest pedestrian fatality rates in the nation</li>
            </ul>
          </div>

          <h3>Arizona Traffic Survival School Eligibility</h3>
          
          <p>You may attend Traffic Survival School if:</p>

          <ul>
            <li>The court allows diversion through this course</li>
            <li>You haven't attended Traffic Survival School in the past 12 months</li>
            <li>The violation is an eligible moving violation</li>
            <li>You complete the course by the court deadline</li>
          </ul>

          <h3>Arizona's Points System</h3>
          
          <p>Arizona uses a point system to track traffic violations:</p>

          <table class="info-table">
            <tr><th>Points Accumulated (12 months)</th><th>Action</th></tr>
            <tr><td>8-12 points</td><td>Required to attend Traffic Survival School</td></tr>
            <tr><td>13-17 points</td><td>Possible suspension (up to 3 months)</td></tr>
            <tr><td>18-23 points</td><td>Possible suspension (up to 6 months)</td></tr>
            <tr><td>24+ points</td><td>Possible suspension (up to 12 months)</td></tr>
          </table>

          <h4>Common Violations and Point Values</h4>
          <table class="info-table">
            <tr><th>Violation</th><th>Points</th></tr>
            <tr><td>Speeding (10-14 mph over)</td><td>3 points</td></tr>
            <tr><td>Speeding (15-19 mph over)</td><td>4 points</td></tr>
            <tr><td>Speeding (20+ mph over)</td><td>6 points</td></tr>
            <tr><td>Running a red light</td><td>4 points</td></tr>
            <tr><td>Failure to yield</td><td>4 points</td></tr>
            <tr><td>Reckless driving</td><td>8 points</td></tr>
            <tr><td>DUI</td><td>8 points</td></tr>
          </table>

          <h3>Arizona Speed Limits</h3>
          
          <table class="info-table">
            <tr><th>Area</th><th>Speed Limit</th></tr>
            <tr><td>Residential districts</td><td>25 mph</td></tr>
            <tr><td>Business districts</td><td>25 mph</td></tr>
            <tr><td>School zones (when children present)</td><td>15 mph</td></tr>
            <tr><td>Unpaved roads</td><td>45 mph</td></tr>
            <tr><td>Urban freeways</td><td>55-65 mph</td></tr>
            <tr><td>Rural highways</td><td>55-65 mph</td></tr>
            <tr><td>Rural freeways</td><td>75 mph (some sections)</td></tr>
          </table>

          <h3>Arizona Cell Phone & Distracted Driving Laws</h3>
          
          <div class="law-box">
            <h4>📜 Arizona Hands-Free Law (Effective 2021)</h4>
            <ul>
              <li><strong>Handheld devices:</strong> Cannot hold or support while driving</li>
              <li><strong>Hands-free:</strong> Permitted (Bluetooth, speaker, mounted device)</li>
              <li><strong>Single touch:</strong> Permitted to activate/deactivate feature</li>
              <li><strong>Texting:</strong> Prohibited</li>
              <li><strong>Video:</strong> Cannot watch or record video while driving</li>
            </ul>
          </div>

          <h4>Distracted Driving Penalties</h4>
          <table class="info-table">
            <tr><th>Offense</th><th>Fine</th><th>Points</th></tr>
            <tr><td>First offense</td><td>$75-$149</td><td>0 points (if no crash)</td></tr>
            <tr><td>Second offense</td><td>$150-$250</td><td>2 points (if no crash)</td></tr>
            <tr><td>Third+ offense</td><td>$250+</td><td>3 points (if no crash)</td></tr>
            <tr><td>If crash results</td><td>Higher fines</td><td>3 points</td></tr>
          </table>

          <h3>Arizona's Move Over Law</h3>
          
          <div class="alert alert-warning">
            <h4>⚠️ Move Over Requirements</h4>
            <p>When approaching a stationary emergency vehicle, tow truck, or ADOT vehicle with flashing lights:</p>
            <ul>
              <li>Move over to a lane not immediately next to the stopped vehicle</li>
              <li>If unable to move over, slow to a reasonable and prudent speed</li>
              <li>Proceed with due caution</li>
            </ul>
            <p><strong>Penalty:</strong> $275 fine and 3 points</p>
          </div>

          <h3>Arizona's "Stupid Motorist Law"</h3>
          
          <div class="law-box">
            <h4>📜 Unique to Arizona (ARS 28-910)</h4>
            <p>Arizona's Stupid Motorist Law states that if you drive around barricades into flooded areas and require rescue:</p>
            <ul>
              <li>You may be charged for the <strong>cost of your rescue</strong></li>
              <li>Rescue costs can exceed $2,000</li>
              <li>You may also face reckless driving charges</li>
            </ul>
            <p><em>Arizona takes monsoon flooding seriously!</em></p>
          </div>

          <h3>Arizona's Seat Belt Laws</h3>
          
          <ul>
            <li><strong>Front seat:</strong> Seat belts required (secondary enforcement)</li>
            <li><strong>Under 8:</strong> Must be in child restraint system</li>
            <li><strong>8-15:</strong> Must be secured in seat belt or child restraint</li>
            <li><strong>Pickup beds:</strong> Passengers under 18 cannot ride in pickup beds</li>
          </ul>

          <div class="alert alert-warning">
            <h4>⚠️ Secondary Enforcement</h4>
            <p>Arizona has "secondary enforcement" for adult seat belt use—you can only be cited for a seat belt violation if stopped for another reason. However, wearing a seat belt reduces fatality risk by 45%.</p>
          </div>

          <div class="reflection-question">
            <h4>🤔 Reflection Question</h4>
            <p>Arizona has unique challenges like extreme heat and monsoon flooding. How do you prepare for these conditions when driving?</p>
          </div>
        `,
        quizQuestions: [
          {
            questionText: 'How many points accumulated in 12 months require attendance at Traffic Survival School?',
            options: ['4-7 points', '8-12 points', '13-17 points', '18-23 points'],
            correctAnswer: '8-12 points',
            explanation: 'Accumulating 8-12 points in 12 months requires attendance at Traffic Survival School in Arizona.'
          },
          {
            questionText: 'Arizona\'s "Stupid Motorist Law" applies when drivers:',
            options: ['Speed excessively', 'Drive around barricades into flooded areas', 'Fail to signal', 'Park illegally'],
            correctAnswer: 'Drive around barricades into flooded areas',
            explanation: 'Arizona\'s Stupid Motorist Law charges drivers who require rescue after driving around barricades into flooded areas.'
          },
          {
            questionText: 'Arizona\'s Hands-Free Law became effective in:',
            options: ['2019', '2020', '2021', '2022'],
            correctAnswer: '2021',
            explanation: 'Arizona\'s statewide hands-free law took effect in 2021.'
          },
          {
            questionText: 'The speed limit in Arizona school zones when children are present is:',
            options: ['10 mph', '15 mph', '20 mph', '25 mph'],
            correctAnswer: '15 mph',
            explanation: 'The speed limit in Arizona school zones when children are present is 15 mph.'
          }
        ]
      },

      // MODULE 2: Defensive Driving Fundamentals
      {
        title: 'Module 2: Defensive Driving Fundamentals',
        description: 'Core defensive driving techniques for Arizona conditions',
        estimatedMinutes: 55,
        content: `
          <h2>Defensive Driving in Arizona</h2>
          
          <p>Arizona's roads present unique challenges: extreme heat, monsoon storms, wide-open highways, and heavy tourist traffic. Defensive driving is essential for survival in these conditions.</p>

          <div class="highlight-box">
            <h4>🛡️ What is Defensive Driving?</h4>
            <p>Defensive driving means:</p>
            <ul>
              <li>Anticipating hazards before they become emergencies</li>
              <li>Being prepared for the unexpected actions of other drivers</li>
              <li>Taking responsibility for your own safety</li>
              <li>Adjusting your driving to conditions</li>
              <li>Never assuming others will do the right thing</li>
            </ul>
          </div>

          <h3>The SIPDE Process</h3>
          
          <p>SIPDE is Arizona's recommended systematic approach to defensive driving:</p>

          <div class="method-box">
            <h4>S - Search</h4>
            <p>Continuously scan the road environment. Look 12-15 seconds ahead—about a quarter mile on highways, 1-2 blocks in the city.</p>
          </div>

          <div class="method-box">
            <h4>I - Identify</h4>
            <p>Identify potential hazards: other vehicles, pedestrians, road conditions, animals, construction zones.</p>
          </div>

          <div class="method-box">
            <h4>P - Predict</h4>
            <p>Predict what could happen. "What if that car runs the light?" "What if that javelina crosses the road?"</p>
          </div>

          <div class="method-box">
            <h4>D - Decide</h4>
            <p>Decide on the best action: adjust speed, change lanes, increase following distance, or prepare to stop.</p>
          </div>

          <div class="method-box">
            <h4>E - Execute</h4>
            <p>Execute your decision smoothly and in a timely manner.</p>
          </div>

          <h3>Following Distance</h3>
          
          <p>Proper following distance gives you time to react and stop:</p>

          <div class="how-to-box">
            <h4>The 3-Second Rule</h4>
            <ol>
              <li>Watch the vehicle ahead pass a fixed point (sign, pole, etc.)</li>
              <li>Count "one-thousand-one, one-thousand-two, one-thousand-three"</li>
              <li>You should reach the point after finishing the count</li>
            </ol>
          </div>

          <h4>When to Increase Following Distance</h4>
          <table class="info-table">
            <tr><th>Condition</th><th>Recommended Distance</th></tr>
            <tr><td>Good conditions</td><td>3-4 seconds</td></tr>
            <tr><td>Rain/wet roads</td><td>5-6 seconds</td></tr>
            <tr><td>Dust storms</td><td>Pull off road and stop</td></tr>
            <tr><td>Following large trucks</td><td>4-5 seconds</td></tr>
            <tr><td>Night driving</td><td>4-5 seconds</td></tr>
            <tr><td>Monsoon conditions</td><td>6+ seconds or stop</td></tr>
          </table>

          <h3>Speed Management</h3>
          
          <p>Speed is a factor in about 30% of Arizona fatal crashes:</p>

          <div class="alert alert-danger">
            <h4>⚠️ Speed and Stopping Distance</h4>
            <p>Doubling your speed quadruples your stopping distance:</p>
            <table class="info-table">
              <tr><th>Speed</th><th>Approximate Stopping Distance</th></tr>
              <tr><td>30 mph</td><td>90 feet</td></tr>
              <tr><td>50 mph</td><td>175 feet</td></tr>
              <tr><td>70 mph</td><td>315 feet</td></tr>
            </table>
          </div>

          <h3>Intersection Safety</h3>
          
          <p>Intersections are the most dangerous locations. Many Arizona crashes occur at intersections due to red-light running:</p>

          <h4>Safe Intersection Practices</h4>
          <ul>
            <li>Cover the brake as you approach</li>
            <li>Look left-right-left before entering</li>
            <li>Wait 2 seconds after a light turns green before proceeding</li>
            <li>Don't enter unless you can clear the intersection</li>
            <li>Watch for red-light runners (Arizona leads the nation in red-light running deaths)</li>
          </ul>

          <h3>Arizona-Specific Hazards</h3>
          
          <h4>Wide Desert Highways</h4>
          <ul>
            <li>Long, straight roads can cause driver drowsiness</li>
            <li>Higher speeds mean less time to react</li>
            <li>Limited services—carry water and emergency supplies</li>
          </ul>

          <h4>Wildlife</h4>
          <ul>
            <li>Elk, deer, javelina, and cattle cross rural roads</li>
            <li>Most common at dawn and dusk</li>
            <li>If you see one animal, expect more</li>
            <li>Don't swerve—brake firmly and stay in your lane</li>
          </ul>

          <h4>Tourist Traffic</h4>
          <ul>
            <li>Visitors unfamiliar with roads or conditions</li>
            <li>Slow or erratic driving near attractions</li>
            <li>Be patient and allow extra space</li>
          </ul>

          <div class="case-study">
            <h4>📋 Case Study: Red-Light Running</h4>
            <p><strong>Phoenix, Arizona:</strong></p>
            <p>A driver waiting on green immediately accelerated when the light changed. Another vehicle running the red light struck his car broadside. The waiting driver was seriously injured.</p>
            <p><strong>Lesson:</strong> Even with a green light, scan the intersection and wait 1-2 seconds before proceeding. Arizona has one of the highest rates of red-light running in the nation.</p>
          </div>

          <div class="reflection-question">
            <h4>🤔 Reflection Question</h4>
            <p>Think about the SIPDE process. How can you apply it more consistently in your daily driving?</p>
          </div>
        `,
        quizQuestions: [
          {
            questionText: 'What does SIPDE stand for?',
            options: ['Stop, Identify, Plan, Drive, Execute', 'Search, Identify, Predict, Decide, Execute', 'Slow, Inspect, Prepare, Drive, Exit', 'Search, Inspect, Plan, Decide, Exit'],
            correctAnswer: 'Search, Identify, Predict, Decide, Execute',
            explanation: 'SIPDE: Search, Identify, Predict, Decide, Execute - a systematic defensive driving process.'
          },
          {
            questionText: 'Minimum following distance in good conditions is:',
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
            questionText: 'After a light turns green in Arizona, you should:',
            options: ['Proceed immediately', 'Wait 2 seconds and scan', 'Rev your engine', 'Honk at others'],
            correctAnswer: 'Wait 2 seconds and scan',
            explanation: 'Arizona has high rates of red-light running. Wait 1-2 seconds and scan the intersection before proceeding.'
          }
        ]
      },

      // MODULE 3: Impaired and Distracted Driving
      {
        title: 'Module 3: Impaired and Distracted Driving',
        description: 'Arizona DUI laws and the dangers of impaired and distracted driving',
        estimatedMinutes: 55,
        content: `
          <h2>Impaired and Distracted Driving in Arizona</h2>
          
          <p>Arizona has some of the strictest DUI laws in the nation, with mandatory jail time even for first offenses. Understanding these laws can save you from severe consequences.</p>

          <h3>Arizona DUI Statistics</h3>
          
          <div class="statistics-box">
            <h4>📊 Arizona DUI Facts</h4>
            <ul>
              <li><strong>300+</strong> alcohol-related traffic deaths annually</li>
              <li><strong>25,000+</strong> DUI arrests each year</li>
              <li><strong>30%</strong> of fatal crashes involve alcohol</li>
              <li>Arizona has the 10th highest DUI death rate in the nation</li>
            </ul>
          </div>

          <h3>Arizona DUI Laws</h3>
          
          <div class="alert alert-danger">
            <h4>⚠️ Arizona Legal Limits</h4>
            <ul>
              <li><strong>21 and over:</strong> 0.08% BAC</li>
              <li><strong>Commercial drivers:</strong> 0.04% BAC</li>
              <li><strong>Under 21:</strong> ANY alcohol (Zero Tolerance)</li>
              <li><strong>Extreme DUI:</strong> 0.15% BAC</li>
              <li><strong>Super Extreme DUI:</strong> 0.20% BAC</li>
            </ul>
            <p><strong>Important:</strong> In Arizona, you can be arrested for DUI even below 0.08% if impaired "to the slightest degree."</p>
          </div>

          <h3>DUI Penalties - Arizona Takes It Seriously</h3>
          
          <table class="info-table">
            <tr><th>Offense</th><th>Jail Time</th><th>Fine</th><th>License Suspension</th></tr>
            <tr><td>First DUI</td><td>10 days (mandatory)</td><td>$1,250+</td><td>90-360 days</td></tr>
            <tr><td>Extreme DUI (0.15%+)</td><td>30 days (mandatory)</td><td>$2,500+</td><td>90 days</td></tr>
            <tr><td>Super Extreme DUI (0.20%+)</td><td>45 days (mandatory)</td><td>$3,250+</td><td>90 days</td></tr>
            <tr><td>Second DUI (7 years)</td><td>90 days</td><td>$3,000+</td><td>1 year</td></tr>
            <tr><td>Felony DUI (3rd in 7 years)</td><td>4 months - 2.5 years</td><td>$4,000+</td><td>3 years</td></tr>
          </table>

          <h4>Additional Consequences</h4>
          <ul>
            <li><strong>Ignition Interlock Device (IID):</strong> Required for all DUI convictions (12-24 months)</li>
            <li><strong>Alcohol screening/treatment:</strong> Required</li>
            <li><strong>Vehicle impound:</strong> 30 days for second offense</li>
            <li><strong>SR-22 insurance:</strong> Required for 3 years</li>
            <li><strong>Total cost:</strong> $10,000-$25,000+ including fines, insurance, legal fees, lost wages</li>
          </ul>

          <h3>Arizona's Implied Consent Law</h3>
          
          <div class="law-box">
            <h4>📜 Implied Consent (Admin Per Se)</h4>
            <p>By driving in Arizona, you consent to chemical testing if arrested for DUI:</p>
            <ul>
              <li><strong>First refusal:</strong> 12-month suspension</li>
              <li><strong>Second refusal:</strong> 2-year suspension</li>
              <li>Refusal can be used as evidence against you</li>
              <li>Officers can obtain a warrant for blood draw if you refuse</li>
            </ul>
          </div>

          <h3>Drug-Impaired Driving</h3>
          
          <div class="alert alert-warning">
            <h4>⚠️ Arizona's Drug DUI Laws</h4>
            <p>Arizona has a "zero tolerance" policy for drugs:</p>
            <ul>
              <li>Any amount of illegal drug in your system = DUI</li>
              <li>Marijuana: Even with a medical card, you cannot drive impaired</li>
              <li>Prescription drugs: If they impair your driving, it's DUI</li>
              <li>Metabolites of drugs can trigger DUI charges even days after use</li>
            </ul>
          </div>

          <h3>Distracted Driving</h3>
          
          <p>Arizona's hands-free law prohibits holding or supporting a wireless device while driving:</p>

          <div class="statistics-box">
            <h4>📊 Distracted Driving Facts</h4>
            <ul>
              <li>Texting increases crash risk by <strong>23 times</strong></li>
              <li>At 55 mph, looking away for 5 seconds = traveling 100 yards blind</li>
              <li>Distracted driving is a factor in 20%+ of Arizona crashes</li>
            </ul>
          </div>

          <h4>Types of Distraction</h4>
          <ul>
            <li><strong>Visual:</strong> Eyes off the road</li>
            <li><strong>Manual:</strong> Hands off the wheel</li>
            <li><strong>Cognitive:</strong> Mind off driving</li>
          </ul>

          <p><strong>Texting combines all three</strong>—making it one of the most dangerous activities.</p>

          <h3>Drowsy Driving</h3>
          
          <p>Arizona's long desert highways make drowsy driving particularly dangerous:</p>

          <ul>
            <li>Being awake 18 hours = driving at 0.05% BAC</li>
            <li>Being awake 24 hours = driving at 0.10% BAC</li>
            <li>Highway hypnosis is common on long, straight desert roads</li>
          </ul>

          <h4>Signs of Drowsiness</h4>
          <ul>
            <li>Frequent yawning</li>
            <li>Drifting from lane</li>
            <li>Missing exits</li>
            <li>Difficulty remembering the last few miles</li>
          </ul>

          <h4>Prevention</h4>
          <ul>
            <li>Get 7-9 hours of sleep before long trips</li>
            <li>Stop every 2 hours or 100 miles</li>
            <li>If drowsy, pull over and rest (a 20-minute nap helps)</li>
            <li>Travel with a companion who can share driving</li>
          </ul>

          <div class="case-study">
            <h4>📋 Case Study: Arizona's Tough DUI Laws</h4>
            <p><strong>Scottsdale, Arizona:</strong></p>
            <p>A first-time offender blew 0.16%—just over the extreme DUI threshold. Despite having a clean record and steady job, he received:</p>
            <ul>
              <li>30 days in jail (mandatory)</li>
              <li>$2,500 in fines</li>
              <li>Ignition interlock device for 12 months</li>
              <li>90-day license suspension</li>
              <li>Alcohol treatment program</li>
            </ul>
            <p>Total cost: Over $15,000 and 30 days of his life.</p>
            <p><em>A $20 rideshare would have prevented everything.</em></p>
          </div>

          <div class="reflection-question">
            <h4>🤔 Reflection Question</h4>
            <p>Arizona has some of the toughest DUI penalties in the country. What's your personal plan to ensure you never drive impaired?</p>
          </div>
        `,
        quizQuestions: [
          {
            questionText: 'What is the legal BAC limit for drivers 21+ in Arizona?',
            options: ['0.05%', '0.08%', '0.10%', '0.04%'],
            correctAnswer: '0.08%',
            explanation: 'The legal BAC limit for drivers 21 and over in Arizona is 0.08%.'
          },
          {
            questionText: 'Arizona\'s Extreme DUI threshold is:',
            options: ['0.10%', '0.12%', '0.15%', '0.20%'],
            correctAnswer: '0.15%',
            explanation: 'Extreme DUI in Arizona is 0.15% BAC or higher, with stricter penalties.'
          },
          {
            questionText: 'First-offense DUI in Arizona carries mandatory jail time of:',
            options: ['No jail time', '24 hours', '10 days', '30 days'],
            correctAnswer: '10 days',
            explanation: 'Arizona requires mandatory 10 days in jail for a first DUI offense (9 days may be suspended).'
          },
          {
            questionText: 'Refusing a chemical test in Arizona results in:',
            options: ['No penalty', '6-month suspension', '12-month suspension', '2-year suspension'],
            correctAnswer: '12-month suspension',
            explanation: 'First refusal of a chemical test results in a 12-month license suspension in Arizona.'
          }
        ]
      },

      // MODULE 4: Arizona Weather and Road Conditions
      {
        title: 'Module 4: Arizona Weather and Road Conditions',
        description: 'Handling Arizona\'s unique weather challenges: extreme heat, monsoons, and dust storms',
        estimatedMinutes: 55,
        content: `
          <h2>Driving in Arizona Conditions</h2>
          
          <p>Arizona presents unique weather challenges found nowhere else in the country. From extreme heat to violent monsoon storms, understanding how to drive in these conditions is essential for survival.</p>

          <h3>Extreme Heat</h3>
          
          <p>Arizona summers regularly exceed 110°F. Heat affects both you and your vehicle:</p>

          <h4>Vehicle Preparations</h4>
          <ul>
            <li>Check coolant levels regularly</li>
            <li>Ensure radiator and cooling system are functioning</li>
            <li>Check tire pressure (heat increases pressure)</li>
            <li>Carry extra water (for you and your radiator)</li>
            <li>Keep emergency supplies in your vehicle</li>
          </ul>

          <h4>Personal Safety</h4>
          <ul>
            <li>Stay hydrated—drink water before you're thirsty</li>
            <li>Never leave children or pets in parked vehicles</li>
            <li>Know the signs of heat exhaustion and heat stroke</li>
            <li>Take breaks in air conditioning on long trips</li>
          </ul>

          <div class="alert alert-danger">
            <h4>⚠️ Hot Car Deaths</h4>
            <p>On a 100°F day (common in Arizona), a car's interior can reach 140°F in minutes. Children and pets can die in as little as 15 minutes.</p>
            <p><strong>NEVER leave children or pets unattended in a vehicle—even for "just a minute."</strong></p>
          </div>

          <h3>Monsoon Season</h3>
          
          <p>Arizona's monsoon season (June-September) brings sudden, violent storms:</p>

          <h4>Monsoon Hazards</h4>
          <ul>
            <li><strong>Flash flooding:</strong> Washes and low areas flood within minutes</li>
            <li><strong>Reduced visibility:</strong> Heavy rain limits what you can see</li>
            <li><strong>Hydroplaning:</strong> Oil on dry roads makes first rains extremely slick</li>
            <li><strong>Lightning:</strong> Arizona leads the nation in lightning damages</li>
            <li><strong>Microbursts:</strong> Sudden wind changes can push vehicles off roads</li>
          </ul>

          <h3>Flash Flooding</h3>
          
          <div class="alert alert-danger">
            <h4>⚠️ Turn Around, Don't Drown</h4>
            <p>Flash floods are the #1 monsoon killer. If you encounter a flooded roadway:</p>
            <ul>
              <li><strong>NEVER</strong> drive through flooded areas</li>
              <li>6 inches of water can knock you down</li>
              <li>12 inches can carry away a small car</li>
              <li>24 inches can carry away most vehicles, including SUVs and trucks</li>
              <li>You cannot judge water depth or road condition beneath</li>
            </ul>
            <p><strong>Remember Arizona's Stupid Motorist Law:</strong> If you're rescued after driving around barricades, YOU PAY FOR THE RESCUE.</p>
          </div>

          <h4>Flooded Road Safety</h4>
          <ul>
            <li>Never drive around barricades—they're there for a reason</li>
            <li>If your vehicle stalls in rising water, abandon it immediately</li>
            <li>Move to higher ground</li>
            <li>Do not attempt to cross flowing water on foot</li>
          </ul>

          <h3>Dust Storms (Haboobs)</h3>
          
          <p>Arizona's famous dust storms can reduce visibility to zero in seconds:</p>

          <div class="law-box">
            <h4>📜 Arizona's "Pull Aside, Stay Alive" Law</h4>
            <p>If you encounter a dust storm:</p>
            <ol>
              <li>Pull completely off the road as far as possible</li>
              <li>Turn off ALL your lights (headlights, brake lights, hazards)</li>
              <li>Set your parking brake and take your foot off the brake pedal</li>
              <li>Stay in your vehicle with seat belt on</li>
              <li>Wait for the storm to pass</li>
            </ol>
            <p><strong>Why turn off lights?</strong> Other drivers may follow your lights thinking you're on the road, causing a collision.</p>
          </div>

          <div class="alert alert-warning">
            <h4>⚠️ Dust Storm Facts</h4>
            <ul>
              <li>Haboobs can be 1,000+ feet tall and travel 60+ mph</li>
              <li>Visibility can drop to zero in seconds</li>
              <li>Major pile-up crashes often occur in dust storms</li>
              <li>If you can't pull off safely, slow down, turn on headlights, and proceed with extreme caution</li>
            </ul>
          </div>

          <h3>Winter Driving</h3>
          
          <p>Northern Arizona (Flagstaff, mountain areas) experiences significant snow and ice:</p>

          <h4>Winter Driving Tips</h4>
          <ul>
            <li>Carry chains or have snow tires</li>
            <li>Reduce speed dramatically</li>
            <li>Increase following distance to 10+ seconds</li>
            <li>Avoid sudden braking, acceleration, or steering</li>
            <li>Bridges and overpasses freeze first</li>
          </ul>

          <h3>Sharing the Road</h3>
          
          <h4>Pedestrians</h4>
          <p>Arizona has one of the highest pedestrian fatality rates in the nation:</p>
          <ul>
            <li>Yield to pedestrians in crosswalks</li>
            <li>Be extra alert at night—most pedestrian deaths occur after dark</li>
            <li>Watch for pedestrians in urban areas, especially Phoenix and Tucson</li>
          </ul>

          <h4>Bicyclists</h4>
          <ul>
            <li>Allow at least 3 feet when passing</li>
            <li>Check for cyclists before turning right</li>
            <li>Look before opening car doors</li>
          </ul>

          <h4>Large Trucks</h4>
          <ul>
            <li>Stay out of blind spots (No-Zones)</li>
            <li>Don't cut in front of trucks—they need more stopping distance</li>
            <li>Pass on the left and pass quickly</li>
          </ul>

          <div class="case-study">
            <h4>📋 Case Study: The Haboob Pile-Up</h4>
            <p><strong>I-10 Near Casa Grande:</strong></p>
            <p>During a dust storm, a driver continued traveling at highway speed with headlights on. Multiple vehicles ahead had stopped but were invisible in the dust. The driver collided with stopped vehicles, setting off a chain reaction involving 19 vehicles.</p>
            <p><strong>Lesson:</strong> In a dust storm, pull completely off the road and turn off all lights. "Pull Aside, Stay Alive" saves lives.</p>
          </div>

          <div class="reflection-question">
            <h4>🤔 Reflection Question</h4>
            <p>Have you ever encountered a dust storm or flash flood while driving? What did you do, and what would you do differently now?</p>
          </div>
        `,
        quizQuestions: [
          {
            questionText: 'In a dust storm, you should:',
            options: ['Speed up to exit the storm', 'Pull off and turn ON hazard lights', 'Pull off and turn OFF all lights', 'Continue with headlights on'],
            correctAnswer: 'Pull off and turn OFF all lights',
            explanation: 'Arizona\'s "Pull Aside, Stay Alive" says to pull completely off the road and turn off ALL lights so other drivers don\'t follow you.'
          },
          {
            questionText: 'How much water can carry away a small car?',
            options: ['6 inches', '12 inches', '24 inches', '36 inches'],
            correctAnswer: '12 inches',
            explanation: 'Just 12 inches of moving water can carry away a small car.'
          },
          {
            questionText: 'Arizona\'s "Stupid Motorist Law" means:',
            options: ['You can be fined for slow driving', 'You pay for your rescue if you drive into flooded areas', 'You must stop for dust storms', 'You can\'t drive in extreme heat'],
            correctAnswer: 'You pay for your rescue if you drive into flooded areas',
            explanation: 'Arizona\'s Stupid Motorist Law charges drivers who require rescue after driving around barricades into flooded areas.'
          },
          {
            questionText: 'When does monsoon season typically occur in Arizona?',
            options: ['January-March', 'April-May', 'June-September', 'October-December'],
            correctAnswer: 'June-September',
            explanation: 'Arizona\'s monsoon season typically runs from June through September.'
          }
        ]
      }
    ],
    finalExamQuestions: [
      {
        questionText: 'How many points in 12 months require Traffic Survival School?',
        options: ['4-7 points', '8-12 points', '13-17 points', '18+ points'],
        correctAnswer: '8-12 points',
        explanation: '8-12 points in 12 months requires Traffic Survival School attendance.'
      },
      {
        questionText: 'Arizona\'s "Stupid Motorist Law" applies when you:',
        options: ['Speed excessively', 'Drive into flooded areas', 'Run red lights', 'Drive without insurance'],
        correctAnswer: 'Drive into flooded areas',
        explanation: 'The Stupid Motorist Law charges you for rescue costs if you drive around barricades into flooded areas.'
      },
      {
        questionText: 'What does SIPDE stand for?',
        options: ['Stop, Identify, Plan, Drive, Exit', 'Search, Identify, Predict, Decide, Execute', 'Slow, Inspect, Proceed, Drive, Evaluate', 'Search, Inspect, Plan, Decide, Exit'],
        correctAnswer: 'Search, Identify, Predict, Decide, Execute',
        explanation: 'SIPDE: Search, Identify, Predict, Decide, Execute.'
      },
      {
        questionText: 'Minimum following distance in good conditions is:',
        options: ['1-2 seconds', '2-3 seconds', '3-4 seconds', '5-6 seconds'],
        correctAnswer: '3-4 seconds',
        explanation: 'Use 3-4 seconds following distance in normal conditions.'
      },
      {
        questionText: 'When speed doubles, stopping distance:',
        options: ['Doubles', 'Triples', 'Quadruples', 'Stays the same'],
        correctAnswer: 'Quadruples',
        explanation: 'Doubling speed quadruples stopping distance.'
      },
      {
        questionText: 'The legal BAC limit for drivers 21+ in Arizona is:',
        options: ['0.05%', '0.08%', '0.10%', '0.04%'],
        correctAnswer: '0.08%',
        explanation: 'The legal BAC limit for drivers 21+ is 0.08%.'
      },
      {
        questionText: 'Arizona\'s Extreme DUI threshold is:',
        options: ['0.10%', '0.12%', '0.15%', '0.20%'],
        correctAnswer: '0.15%',
        explanation: 'Extreme DUI is 0.15% BAC or higher.'
      },
      {
        questionText: 'First-offense DUI mandatory jail time is:',
        options: ['None', '24 hours', '10 days', '30 days'],
        correctAnswer: '10 days',
        explanation: 'First DUI carries mandatory 10 days jail (9 may be suspended).'
      },
      {
        questionText: 'Refusing a chemical test results in:',
        options: ['No penalty', '6-month suspension', '12-month suspension', '2-year suspension'],
        correctAnswer: '12-month suspension',
        explanation: 'First refusal results in 12-month license suspension.'
      },
      {
        questionText: 'In a dust storm, turn:',
        options: ['Headlights on', 'Hazards on', 'All lights OFF', 'High beams on'],
        correctAnswer: 'All lights OFF',
        explanation: 'Turn off ALL lights so other drivers don\'t follow you thinking you\'re on the road.'
      },
      {
        questionText: 'How much water can carry away a small car?',
        options: ['6 inches', '12 inches', '24 inches', '36 inches'],
        correctAnswer: '12 inches',
        explanation: '12 inches of moving water can carry away a small car.'
      },
      {
        questionText: 'Monsoon season in Arizona is:',
        options: ['January-March', 'April-May', 'June-September', 'October-December'],
        correctAnswer: 'June-September',
        explanation: 'Monsoon season runs June through September.'
      },
      {
        questionText: 'After a light turns green, Arizona recommends:',
        options: ['Proceed immediately', 'Wait 1-2 seconds and scan', 'Honk at slow drivers', 'Flash your lights'],
        correctAnswer: 'Wait 1-2 seconds and scan',
        explanation: 'Wait 1-2 seconds and scan for red-light runners before proceeding.'
      },
      {
        questionText: 'Arizona\'s school zone speed limit is:',
        options: ['10 mph', '15 mph', '20 mph', '25 mph'],
        correctAnswer: '15 mph',
        explanation: 'Arizona school zone speed limit is 15 mph when children are present.'
      },
      {
        questionText: 'Arizona\'s hands-free law became effective in:',
        options: ['2019', '2020', '2021', '2022'],
        correctAnswer: '2021',
        explanation: 'Arizona\'s statewide hands-free law took effect in 2021.'
      }
    ]
  }
};

export default arizonaCourseData;
