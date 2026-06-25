// ===========================
// California Traffic School Course Curriculum
// DMV-Licensed Course Content
// ===========================

export const californiaCourseData = {
  // California 8-hour Traffic Violator School
  course8Hour: {
    name: 'California Traffic Violator School',
    slug: 'california-traffic-violator-school',
    description: 'California DMV-licensed traffic violator school for ticket masking. Covers California traffic laws, defensive driving techniques, and safe driving practices.',
    durationHours: 8,
    price: 24.95,
    modules: [
      // MODULE 1: Introduction & California Traffic Laws
      {
        title: 'Module 1: Introduction & California Traffic Laws',
        description: 'Course overview, California driving statistics, and state-specific traffic regulations',
        estimatedMinutes: 55,
        content: `
          <h2>Welcome to California Traffic School</h2>
          
          <p>Welcome to Quick Pass Traffic School's California DMV-licensed Traffic Violator School course. This comprehensive course is designed to help you become a safer driver on California's challenging roadways.</p>

          <div class="highlight-box">
            <h4>🎯 Course Objectives</h4>
            <p>By completing this course, you will:</p>
            <ul>
              <li>Mask your traffic violation from your public driving record</li>
              <li>Prevent your insurance company from seeing the citation</li>
              <li>Prevent a point from appearing on your record</li>
              <li>Learn California traffic laws and defensive driving techniques</li>
              <li>Become a safer, more responsible driver</li>
            </ul>
          </div>

          <h3>California Driving Statistics</h3>
          
          <div class="statistics-box">
            <h4>📊 California Road Statistics</h4>
            <ul>
              <li><strong>4,000+</strong> traffic fatalities annually</li>
              <li><strong>500,000+</strong> injury crashes each year</li>
              <li><strong>27+ million</strong> licensed drivers (most of any state)</li>
              <li><strong>Over 400,000 miles</strong> of public roads</li>
              <li>California has more registered vehicles than any other state</li>
            </ul>
          </div>

          <h3>California Traffic Violator School Eligibility</h3>
          
          <p>To attend traffic school in California:</p>

          <ul>
            <li>You must hold a valid driver's license</li>
            <li>The violation must be for an infraction in a non-commercial vehicle</li>
            <li>You cannot have attended traffic school within the past 18 months</li>
            <li>The court must permit traffic school attendance</li>
            <li>You must complete the course before your court deadline</li>
          </ul>

          <div class="alert alert-warning">
            <h4>⚠️ Important Deadlines</h4>
            <p>California gives you specific deadlines to complete traffic school. Missing your deadline may result in:</p>
            <ul>
              <li>The point being added to your record</li>
              <li>Your insurance being notified</li>
              <li>Additional court fees</li>
            </ul>
          </div>

          <h3>California's Point System</h3>
          
          <p>California uses the Negligent Operator Treatment System (NOTS):</p>

          <table class="info-table">
            <tr><th>Violation Type</th><th>Points</th></tr>
            <tr><td>Most moving violations</td><td>1 point</td></tr>
            <tr><td>Speeding over 100 mph</td><td>2 points</td></tr>
            <tr><td>Reckless driving</td><td>2 points</td></tr>
            <tr><td>DUI</td><td>2 points</td></tr>
            <tr><td>Hit and run (injury)</td><td>2 points</td></tr>
            <tr><td>Accidents (at-fault)</td><td>1 point</td></tr>
          </table>

          <h4>NOTS Point Thresholds</h4>
          <table class="info-table">
            <tr><th>Points</th><th>Time Period</th><th>Action</th></tr>
            <tr><td>4 points</td><td>12 months</td><td>Warning letter</td></tr>
            <tr><td>6 points</td><td>24 months</td><td>6-month suspension</td></tr>
            <tr><td>8 points</td><td>36 months</td><td>1-year suspension</td></tr>
          </table>

          <h3>California Speed Limits</h3>
          
          <table class="info-table">
            <tr><th>Area</th><th>Speed Limit</th></tr>
            <tr><td>Residential/business districts</td><td>25 mph</td></tr>
            <tr><td>School zones (children present)</td><td>25 mph</td></tr>
            <tr><td>Blind intersections</td><td>15 mph</td></tr>
            <tr><td>Alleys</td><td>15 mph</td></tr>
            <tr><td>Near railroad tracks</td><td>15 mph (within 100 feet)</td></tr>
            <tr><td>Two-lane undivided highways</td><td>55 mph</td></tr>
            <tr><td>Most freeways</td><td>65 mph</td></tr>
            <tr><td>Some rural freeways</td><td>70 mph</td></tr>
          </table>

          <div class="law-box">
            <h4>📜 California's Basic Speed Law</h4>
            <p>California's Basic Speed Law (CVC 22350) states:</p>
            <p><em>"No person shall drive a vehicle upon a highway at a speed greater than is reasonable or prudent... having due regard for weather, visibility, the traffic on, and the surface and width of, the highway."</em></p>
            <p>This means even if you're under the posted limit, you can be cited if you're driving too fast for conditions.</p>
          </div>

          <h3>California Hands-Free Law</h3>
          
          <div class="law-box">
            <h4>📜 California Cell Phone Laws</h4>
            <ul>
              <li><strong>Handheld devices:</strong> Prohibited for ALL drivers</li>
              <li><strong>Hands-free:</strong> Permitted for drivers 18+</li>
              <li><strong>Under 18:</strong> ALL cell phone use prohibited (even hands-free)</li>
              <li><strong>Single touch:</strong> Permitted to activate or deactivate a function</li>
              <li><strong>Mounted phone:</strong> Must be on windshield (lower left or lower right 7 inches), or mounted on dashboard or console</li>
            </ul>
          </div>

          <h4>Penalties</h4>
          <table class="info-table">
            <tr><th>Offense</th><th>Fine</th><th>Points</th></tr>
            <tr><td>First offense</td><td>$20 base (approx. $162 with fees)</td><td>1 point</td></tr>
            <tr><td>Subsequent</td><td>$50 base (approx. $285 with fees)</td><td>1 point</td></tr>
          </table>

          <h3>California Move Over Law (CVC 21809)</h3>
          
          <div class="alert alert-warning">
            <h4>⚠️ Move Over Requirements</h4>
            <p>When approaching a stationary emergency vehicle or tow truck with flashing lights:</p>
            <ul>
              <li>If safe, move over a lane away from the emergency vehicle</li>
              <li>If unable to change lanes, slow to a reasonable and prudent speed</li>
              <li>Applies to: Police, fire, ambulance, tow trucks, Caltrans vehicles</li>
            </ul>
            <p><strong>Penalty:</strong> Fine up to $1,000 and 1 point</p>
          </div>

          <h3>California Seat Belt Laws</h3>
          
          <ul>
            <li><strong>All occupants:</strong> Must wear seat belts</li>
            <li><strong>Primary enforcement:</strong> Can be pulled over just for no seat belt</li>
            <li><strong>Under 8:</strong> Must be in car seat or booster (back seat)</li>
            <li><strong>Under 2:</strong> Must face rear in car seat</li>
            <li><strong>Fine:</strong> $162+ for first offense</li>
          </ul>

          <h3>California's Graduated Driver's License</h3>
          
          <h4>Provisional License Restrictions (Under 18)</h4>
          <ul>
            <li><strong>First 12 months:</strong> Cannot drive between 11 PM - 5 AM</li>
            <li><strong>First 12 months:</strong> Cannot transport passengers under 20 (unless family member or licensed driver 25+ present)</li>
          </ul>

          <div class="reflection-question">
            <h4>🤔 Reflection Question</h4>
            <p>Have you ever been tempted to use your phone while driving? What strategies can you use to avoid this dangerous behavior?</p>
          </div>
        `,
        quizQuestions: [
          {
            questionText: 'How often can you attend traffic school in California?',
            options: ['Every 6 months', 'Every 12 months', 'Every 18 months', 'Every 24 months'],
            correctAnswer: 'Every 18 months',
            explanation: 'In California, you can only attend traffic school once every 18 months for ticket masking.'
          },
          {
            questionText: 'What is the speed limit in California residential areas?',
            options: ['15 mph', '20 mph', '25 mph', '30 mph'],
            correctAnswer: '25 mph',
            explanation: 'California\'s speed limit in residential and business districts is 25 mph unless otherwise posted.'
          },
          {
            questionText: 'Under California\'s hands-free law, drivers under 18 can use:',
            options: ['Hands-free devices', 'Single-touch phones', 'No cell phone use at all', 'Bluetooth headsets'],
            correctAnswer: 'No cell phone use at all',
            explanation: 'Drivers under 18 in California cannot use ANY cell phone, even hands-free, while driving.'
          },
          {
            questionText: 'How many points will likely result in a 6-month license suspension?',
            options: ['4 points in 12 months', '6 points in 24 months', '8 points in 36 months', '10 points in 48 months'],
            correctAnswer: '6 points in 24 months',
            explanation: 'Accumulating 6 points in 24 months results in a 6-month license suspension under California\'s NOTS.'
          }
        ]
      },

      // MODULE 2: Defensive Driving Fundamentals
      {
        title: 'Module 2: Defensive Driving Fundamentals',
        description: 'Core defensive driving techniques for California roads',
        estimatedMinutes: 55,
        content: `
          <h2>Defensive Driving on California Roads</h2>
          
          <p>California presents unique driving challenges: dense traffic, diverse weather conditions, and millions of drivers sharing crowded roads. Defensive driving is essential for survival.</p>

          <div class="highlight-box">
            <h4>🛡️ What is Defensive Driving?</h4>
            <p>Defensive driving means:</p>
            <ul>
              <li>Driving to save lives, time, and money in spite of conditions around you</li>
              <li>Being prepared for the unexpected actions of other drivers</li>
              <li>Taking responsibility for your own safety</li>
              <li>Never assuming others will do the right thing</li>
            </ul>
          </div>

          <h3>The Three-Second Rule</h3>
          
          <p>California recommends maintaining a minimum 3-second following distance:</p>

          <div class="how-to-box">
            <h4>How to Measure Following Distance</h4>
            <ol>
              <li>Watch the vehicle ahead pass a fixed point (sign, overpass, etc.)</li>
              <li>Count "one-thousand-one, one-thousand-two, one-thousand-three"</li>
              <li>If you reach the point before finishing, you're following too closely</li>
            </ol>
          </div>

          <h4>When to Increase Following Distance</h4>
          <table class="info-table">
            <tr><th>Condition</th><th>Recommended Distance</th></tr>
            <tr><td>Good conditions</td><td>3 seconds</td></tr>
            <tr><td>Rain or wet roads</td><td>4-6 seconds</td></tr>
            <tr><td>Night driving</td><td>4 seconds</td></tr>
            <tr><td>Following motorcycles</td><td>4 seconds</td></tr>
            <tr><td>Following large trucks</td><td>4-5 seconds</td></tr>
            <tr><td>Fog</td><td>6+ seconds or more</td></tr>
          </table>

          <h3>Scanning and Visual Lead Time</h3>
          
          <p>Look 10-15 seconds ahead of your vehicle:</p>

          <ul>
            <li>In city traffic: About 1 block ahead</li>
            <li>On highways: About 1/4 mile ahead</li>
          </ul>

          <h4>Scanning Pattern</h4>
          <ol>
            <li>Look far ahead first (10-15 seconds)</li>
            <li>Check mirrors every 5-8 seconds</li>
            <li>Scan intersections left-right-left</li>
            <li>Watch the sides of the road for potential hazards</li>
          </ol>

          <h3>Space Cushion Management</h3>
          
          <p>Maintain a "cushion" of space around your vehicle:</p>

          <ul>
            <li><strong>Front:</strong> 3+ seconds following distance</li>
            <li><strong>Sides:</strong> Stay centered in lane; don't linger beside other vehicles</li>
            <li><strong>Rear:</strong> If tailgated, increase your front cushion</li>
          </ul>

          <h3>Lane Positioning</h3>
          
          <div class="law-box">
            <h4>📜 California Lane Use Laws</h4>
            <ul>
              <li>Slower traffic must keep right (CVC 21654)</li>
              <li>Use left lane only for passing or turning left</li>
              <li>On 3+ lane highways, avoid the far left lane except to pass</li>
              <li>HOV lanes have specific entry/exit points</li>
            </ul>
          </div>

          <h4>Choosing the Best Lane</h4>
          <ul>
            <li><strong>Right lane:</strong> Best for slower travel, entering/exiting</li>
            <li><strong>Center lanes:</strong> Smoothest traffic flow</li>
            <li><strong>Left lane:</strong> For passing (faster traffic)</li>
          </ul>

          <h3>Intersection Safety</h3>
          
          <p>More than 50% of serious urban crashes occur at intersections:</p>

          <h4>Safe Intersection Practices</h4>
          <ul>
            <li>Cover the brake as you approach</li>
            <li>Look left-right-left before entering on green</li>
            <li>Don't assume a fresh green is safe—count to 2</li>
            <li>Never enter unless you can clear the intersection</li>
            <li>Watch for red-light runners</li>
            <li>Be especially cautious of left-turning vehicles</li>
          </ul>

          <h3>Right-of-Way Rules</h3>
          
          <div class="law-box">
            <h4>📜 California Right-of-Way</h4>
            <ul>
              <li><strong>Uncontrolled intersections:</strong> Yield to vehicle that arrived first; if simultaneous, yield to the right</li>
              <li><strong>T-intersections:</strong> Traffic on the through road has right-of-way</li>
              <li><strong>Four-way stops:</strong> First to stop, first to go; if simultaneous, yield to right</li>
              <li><strong>Pedestrians:</strong> Always yield to pedestrians in crosswalks</li>
              <li><strong>Emergency vehicles:</strong> Pull right and stop</li>
            </ul>
          </div>

          <h3>Passing Safely</h3>
          
          <h4>When Passing is Prohibited</h4>
          <ul>
            <li>On a hill or curve where you can't see oncoming traffic</li>
            <li>At intersections, railroad crossings, or bridges</li>
            <li>When a solid yellow line is on your side</li>
            <li>When the vehicle ahead is at or near the speed limit</li>
          </ul>

          <h4>Safe Passing Procedure</h4>
          <ol>
            <li>Check ahead for adequate clear distance (you need 10-12 seconds to pass safely)</li>
            <li>Check mirrors and blind spot</li>
            <li>Signal left and move into passing lane</li>
            <li>Accelerate and pass quickly</li>
            <li>Signal right and return when you see the passed vehicle in your rearview mirror</li>
          </ol>

          <div class="case-study">
            <h4>📋 Case Study: The Cost of Tailgating</h4>
            <p><strong>I-405 in Los Angeles:</strong></p>
            <p>A driver following too closely rear-ended the car ahead when traffic suddenly stopped. Even though traffic was moving at 40 mph, the tailgater had no time to react.</p>
            <p><strong>Result:</strong> Four cars involved, two injuries, thousands in damage, and a citation for following too closely.</p>
            <p><em>The 3-second rule could have prevented this entirely.</em></p>
          </div>

          <div class="reflection-question">
            <h4>🤔 Reflection Question</h4>
            <p>When driving on crowded California freeways, do you maintain a proper following distance? What can you do to resist the pressure to tailgate?</p>
          </div>
        `,
        quizQuestions: [
          {
            questionText: 'The minimum recommended following distance in good conditions is:',
            options: ['1 second', '2 seconds', '3 seconds', '5 seconds'],
            correctAnswer: '3 seconds',
            explanation: 'California recommends at least a 3-second following distance under normal conditions.'
          },
          {
            questionText: 'How far ahead should you scan while driving?',
            options: ['2-5 seconds', '5-8 seconds', '10-15 seconds', '20-30 seconds'],
            correctAnswer: '10-15 seconds',
            explanation: 'Look 10-15 seconds ahead to identify hazards early enough to react.'
          },
          {
            questionText: 'At an uncontrolled intersection with two vehicles arriving simultaneously, you yield to:',
            options: ['The vehicle on your left', 'The vehicle on your right', 'The larger vehicle', 'Neither—proceed'],
            correctAnswer: 'The vehicle on your right',
            explanation: 'When two vehicles arrive simultaneously at an uncontrolled intersection, yield to the vehicle on your right.'
          },
          {
            questionText: 'On California highways, slower traffic should keep to the:',
            options: ['Left lane', 'Right lane', 'Center lane', 'Any lane'],
            correctAnswer: 'Right lane',
            explanation: 'California law requires slower traffic to keep right.'
          }
        ]
      },

      // MODULE 3: Impaired Driving
      {
        title: 'Module 3: Impaired Driving',
        description: 'California DUI laws and the dangers of impaired driving',
        estimatedMinutes: 55,
        content: `
          <h2>Impaired Driving in California</h2>
          
          <p>California has some of the strictest DUI laws in the nation. Understanding these laws and the devastating effects of impaired driving can save lives.</p>

          <h3>California DUI Statistics</h3>
          
          <div class="statistics-box">
            <h4>📊 California DUI Facts</h4>
            <ul>
              <li><strong>1,000+</strong> people killed in DUI crashes annually</li>
              <li><strong>150,000+</strong> DUI arrests each year</li>
              <li><strong>28%</strong> of traffic fatalities involve alcohol</li>
              <li>DUI is one of the most commonly prosecuted crimes in California</li>
            </ul>
          </div>

          <h3>California DUI Laws</h3>
          
          <div class="alert alert-danger">
            <h4>⚠️ California Legal Limits</h4>
            <ul>
              <li><strong>21 and over:</strong> 0.08% BAC</li>
              <li><strong>Commercial drivers:</strong> 0.04% BAC</li>
              <li><strong>Under 21:</strong> 0.01% BAC (Zero Tolerance)</li>
              <li><strong>On probation for prior DUI:</strong> 0.01% BAC</li>
            </ul>
            <p><strong>Important:</strong> You can be charged with DUI even below these limits if your driving is impaired.</p>
          </div>

          <h3>DUI Penalties</h3>
          
          <table class="info-table">
            <tr><th>Offense</th><th>Jail Time</th><th>Fine</th><th>License Action</th></tr>
            <tr><td>First DUI</td><td>48 hours - 6 months</td><td>$390-$1,000 + fees</td><td>4-month suspension</td></tr>
            <tr><td>Second DUI (10 years)</td><td>96 hours - 1 year</td><td>$390-$1,000 + fees</td><td>1-year suspension</td></tr>
            <tr><td>Third DUI (10 years)</td><td>120 days - 1 year</td><td>$390-$1,000 + fees</td><td>3-year revocation</td></tr>
            <tr><td>Fourth+ DUI (felony)</td><td>16 months - 4 years</td><td>$390-$1,000 + fees</td><td>4-year revocation</td></tr>
            <tr><td>DUI with injury</td><td>5 days - 1 year</td><td>$390-$5,000</td><td>1-year suspension</td></tr>
          </table>

          <h4>Additional Consequences</h4>
          <ul>
            <li><strong>DUI school:</strong> 3-30 months depending on offense</li>
            <li><strong>Ignition Interlock Device (IID):</strong> Required for most DUI convictions</li>
            <li><strong>SR-22 insurance:</strong> Required for 3 years</li>
            <li><strong>Vehicle impound:</strong> 30 days for repeat offenders</li>
            <li><strong>True cost:</strong> $10,000-$20,000+ including fines, fees, insurance increases</li>
          </ul>

          <h3>California's Implied Consent Law</h3>
          
          <div class="law-box">
            <h4>📜 Implied Consent</h4>
            <p>By driving in California, you automatically consent to chemical testing if lawfully arrested for DUI:</p>
            <ul>
              <li><strong>First refusal:</strong> 1-year license suspension</li>
              <li><strong>Second refusal:</strong> 2-year suspension</li>
              <li><strong>Third refusal:</strong> 3-year suspension</li>
              <li>Refusal can be used against you in court</li>
            </ul>
          </div>

          <h3>How Alcohol Affects Driving</h3>
          
          <table class="info-table">
            <tr><th>BAC Level</th><th>Effects</th></tr>
            <tr><td>0.02%</td><td>Slight relaxation, mood change, some loss of judgment</td></tr>
            <tr><td>0.05%</td><td>Lowered alertness, impaired judgment, release of inhibition</td></tr>
            <tr><td>0.08%</td><td>Poor muscle coordination, impaired self-control, reduced ability to detect danger</td></tr>
            <tr><td>0.10%</td><td>Clear deterioration of reaction time, slurred speech</td></tr>
            <tr><td>0.15%</td><td>Major loss of balance, substantial impairment of vehicle control</td></tr>
          </table>

          <h3>Drug-Impaired Driving</h3>
          
          <p>California law treats drug impairment the same as alcohol:</p>

          <ul>
            <li><strong>Marijuana:</strong> Even though recreational use is legal (21+), driving under the influence is DUI</li>
            <li><strong>Prescription medications:</strong> Many impair driving ability</li>
            <li><strong>Over-the-counter medications:</strong> Antihistamines, sleep aids affect alertness</li>
            <li><strong>Combination effect:</strong> Mixing substances multiplies impairment</li>
          </ul>

          <div class="alert alert-warning">
            <h4>⚠️ Marijuana and Driving</h4>
            <p>Just because marijuana is legal in California doesn't mean you can drive high:</p>
            <ul>
              <li>THC impairs reaction time, judgment, and coordination</li>
              <li>Effects can last hours after use</li>
              <li>DUI charges apply to marijuana just like alcohol</li>
              <li>There is no "legal limit" for THC like there is for alcohol</li>
            </ul>
          </div>

          <h3>Avoiding Impaired Driving</h3>
          
          <h4>Plan Ahead</h4>
          <ul>
            <li>Designate a sober driver before drinking</li>
            <li>Use rideshare apps (Uber, Lyft)</li>
            <li>Call a taxi or friend</li>
            <li>Stay where you are until sober</li>
            <li>Know how long alcohol stays in your system</li>
          </ul>

          <h4>Recognizing an Impaired Driver</h4>
          <ul>
            <li>Weaving, swerving, or drifting</li>
            <li>Driving unusually slow or fast</li>
            <li>Stopping for no reason</li>
            <li>Erratic braking</li>
            <li>Driving with headlights off at night</li>
          </ul>

          <p>If you see an impaired driver, keep your distance and report them to 911 (pull over safely first or have a passenger call).</p>

          <div class="case-study">
            <h4>📋 Case Study: One Drink Too Many</h4>
            <p><strong>San Diego, California:</strong></p>
            <p>Jennifer had two glasses of wine at a work dinner. She felt fine and decided to drive home. On the way, she was pulled over for rolling through a stop sign. The officer smelled alcohol and administered a breathalyzer: 0.09%—just over the legal limit.</p>
            <p><strong>Consequences:</strong></p>
            <ul>
              <li>$15,000 in fines, fees, and legal costs</li>
              <li>3-month DUI school</li>
              <li>6-month license suspension</li>
              <li>Ignition interlock device for 4 months</li>
              <li>Lost her job because she couldn't drive to client meetings</li>
            </ul>
            <p><em>A $20 Uber ride would have prevented everything.</em></p>
          </div>

          <div class="reflection-question">
            <h4>🤔 Reflection Question</h4>
            <p>What specific steps will you take to ensure you never drive after drinking? What's your plan?</p>
          </div>
        `,
        quizQuestions: [
          {
            questionText: 'What is the legal BAC limit for drivers 21+ in California?',
            options: ['0.05%', '0.08%', '0.10%', '0.04%'],
            correctAnswer: '0.08%',
            explanation: 'The legal BAC limit for drivers 21 and over in California is 0.08%.'
          },
          {
            questionText: 'California\'s Zero Tolerance BAC limit for under 21 is:',
            options: ['0.00%', '0.01%', '0.02%', '0.05%'],
            correctAnswer: '0.01%',
            explanation: 'California has a Zero Tolerance law: 0.01% BAC for drivers under 21.'
          },
          {
            questionText: 'First refusal of a chemical test in California results in:',
            options: ['No penalty', '4-month suspension', '1-year suspension', '2-year suspension'],
            correctAnswer: '1-year suspension',
            explanation: 'First refusal of a chemical test results in a 1-year license suspension in California.'
          },
          {
            questionText: 'Driving under the influence of marijuana is:',
            options: ['Legal since marijuana is legal', 'A DUI violation', 'Only illegal if under 21', 'Only a minor infraction'],
            correctAnswer: 'A DUI violation',
            explanation: 'Driving under the influence of marijuana is a DUI violation in California, regardless of marijuana\'s legal status.'
          }
        ]
      },

      // MODULE 4: Distracted Driving
      {
        title: 'Module 4: Distracted Driving',
        description: 'Understanding the dangers of distracted driving in California',
        estimatedMinutes: 45,
        content: `
          <h2>Distracted Driving in California</h2>
          
          <p>Distracted driving has become one of the leading causes of crashes in California. With smartphones, infotainment systems, and countless other distractions, staying focused on driving has never been more important.</p>

          <h3>Distracted Driving Statistics</h3>
          
          <div class="statistics-box">
            <h4>📊 California Distracted Driving</h4>
            <ul>
              <li><strong>Over 100</strong> distracted driving deaths annually in California</li>
              <li><strong>25%</strong> of all crashes involve some form of distraction</li>
              <li>Texting while driving makes you <strong>23 times</strong> more likely to crash</li>
              <li>At 55 mph, looking at your phone for 5 seconds = traveling 100 yards blind</li>
            </ul>
          </div>

          <h3>Types of Distraction</h3>
          
          <ul>
            <li><strong>Visual:</strong> Taking your eyes off the road</li>
            <li><strong>Manual:</strong> Taking your hands off the wheel</li>
            <li><strong>Cognitive:</strong> Taking your mind off driving</li>
          </ul>

          <p><strong>Texting combines all three</strong>—making it one of the most dangerous activities while driving.</p>

          <h3>California Cell Phone Laws</h3>
          
          <div class="law-box">
            <h4>📜 California Hands-Free Law Summary</h4>
            <ul>
              <li>Cannot hold a phone while driving (even to tap once)</li>
              <li>Phone must be mounted on windshield, dashboard, or console</li>
              <li>Can only use single-touch or voice commands</li>
              <li>Under 18: NO phone use at all—even hands-free</li>
              <li>Cannot watch videos or livestream</li>
            </ul>
          </div>

          <h4>Penalties</h4>
          <ul>
            <li><strong>First offense:</strong> $20 base fine (~$162 with fees) + 1 point</li>
            <li><strong>Subsequent:</strong> $50 base fine (~$285 with fees) + 1 point</li>
          </ul>

          <h3>Other Common Distractions</h3>
          
          <table class="info-table">
            <tr><th>Distraction</th><th>Risk Level</th></tr>
            <tr><td>Texting</td><td>Very High (23x crash risk)</td></tr>
            <tr><td>Dialing a phone</td><td>High (2.8x crash risk)</td></tr>
            <tr><td>Talking on handheld phone</td><td>Moderate (1.3x crash risk)</td></tr>
            <tr><td>Eating/drinking</td><td>Moderate</td></tr>
            <tr><td>Talking to passengers</td><td>Low-Moderate</td></tr>
            <tr><td>Adjusting controls</td><td>Moderate</td></tr>
            <tr><td>Daydreaming</td><td>Very High</td></tr>
          </table>

          <h3>Hands-Free Isn't Risk-Free</h3>
          
          <p>Even hands-free phone use causes cognitive distraction:</p>

          <ul>
            <li>Your brain cannot truly multitask—it rapidly switches between tasks</li>
            <li>Studies show you miss up to 50% of what's in front of you while on a phone call</li>
            <li>"Inattention blindness" means you can look at something without seeing it</li>
            <li>Cognitive distraction lasts for 27 seconds after ending a call</li>
          </ul>

          <h3>Strategies to Avoid Distraction</h3>
          
          <ul>
            <li>Put your phone on "Do Not Disturb While Driving" mode</li>
            <li>Set up GPS and music before driving</li>
            <li>Pull over safely if you need to use your phone</li>
            <li>Ask passengers to handle communications</li>
            <li>Eat before driving, not while driving</li>
            <li>Keep your eyes on the road and mind on driving</li>
          </ul>

          <div class="highlight-box">
            <h4>💡 iPhone/Android Driving Mode</h4>
            <p>Both iPhone ("Do Not Disturb While Driving") and Android ("Driving Mode") have features that:</p>
            <ul>
              <li>Silence notifications while driving</li>
              <li>Auto-reply to texts that you're driving</li>
              <li>Allow only emergency calls through</li>
            </ul>
            <p>Set these up and use them every time you drive.</p>
          </div>

          <div class="case-study">
            <h4>📋 Case Study: A Text That Cost a Life</h4>
            <p><strong>Highway 101, Northern California:</strong></p>
            <p>Michael was driving home from work when his phone buzzed with a text from his wife. He glanced down for just a few seconds to read it. When he looked up, traffic had stopped. He rear-ended a motorcycle at 65 mph.</p>
            <p><strong>The motorcyclist died at the scene.</strong></p>
            <p><strong>Consequences for Michael:</strong></p>
            <ul>
              <li>Vehicular manslaughter charges</li>
              <li>Prison time</li>
              <li>Civil lawsuit from the victim's family</li>
              <li>Living with the guilt of taking a life</li>
            </ul>
            <p><em>The text from his wife said, "Pick up milk on your way home."</em></p>
          </div>

          <div class="reflection-question">
            <h4>🤔 Reflection Question</h4>
            <p>What's your biggest distraction while driving? What specific steps can you take to eliminate it?</p>
          </div>
        `,
        quizQuestions: [
          {
            questionText: 'Texting while driving increases crash risk by:',
            options: ['5 times', '10 times', '15 times', '23 times'],
            correctAnswer: '23 times',
            explanation: 'Research shows texting while driving increases crash risk by 23 times.'
          },
          {
            questionText: 'Under California law, your phone must be:',
            options: ['In your pocket', 'Mounted on windshield, dash, or console', 'In a cup holder', 'In your hand for one tap'],
            correctAnswer: 'Mounted on windshield, dash, or console',
            explanation: 'California requires phones to be mounted, not held, even for single-touch commands.'
          },
          {
            questionText: 'Hands-free phone use is:',
            options: ['Completely safe', 'Risk-free', 'Still a cognitive distraction', 'Required by law'],
            correctAnswer: 'Still a cognitive distraction',
            explanation: 'Even hands-free phone use causes cognitive distraction, though it\'s legal for drivers 18+.'
          },
          {
            questionText: 'How long does cognitive distraction last after a phone call?',
            options: ['5 seconds', '15 seconds', '27 seconds', '1 minute'],
            correctAnswer: '27 seconds',
            explanation: 'Studies show cognitive distraction persists for about 27 seconds after ending a call.'
          }
        ]
      },

      // MODULE 5: Sharing California Roads
      {
        title: 'Module 5: Sharing California Roads',
        description: 'Safely interacting with pedestrians, cyclists, motorcyclists, and trucks',
        estimatedMinutes: 45,
        content: `
          <h2>Sharing California Roads</h2>
          
          <p>California's roads are shared by millions of users: cars, trucks, motorcycles, bicycles, pedestrians, and more. Understanding how to safely interact with each is essential for defensive driving.</p>

          <h3>Pedestrians</h3>
          
          <div class="law-box">
            <h4>📜 California Pedestrian Laws</h4>
            <ul>
              <li>Yield to pedestrians in crosswalks (marked or unmarked)</li>
              <li>Stop for pedestrians crossing at corners with lights or stop signs</li>
              <li>Pedestrians have the right-of-way even if they're crossing illegally—you must still try to avoid them</li>
            </ul>
          </div>

          <h4>Pedestrian Safety Tips</h4>
          <ul>
            <li>Watch for pedestrians at all intersections</li>
            <li>Be extra alert near schools, parks, and shopping areas</li>
            <li>At night, pedestrians are hard to see</li>
            <li>Never pass a vehicle stopped for a pedestrian</li>
          </ul>

          <h3>Bicyclists</h3>
          
          <p>California has millions of cyclists. They have the same rights as motor vehicles:</p>

          <div class="law-box">
            <h4>📜 California's "Three Feet for Safety" Law</h4>
            <p>When passing a bicyclist, you must:</p>
            <ul>
              <li>Leave at least <strong>3 feet</strong> of space</li>
              <li>If you can't leave 3 feet, slow down to a safe speed and pass only when safe</li>
              <li>Cross a double yellow line to pass if necessary and safe</li>
            </ul>
            <p><strong>Fine:</strong> $35 base (more if cyclist is injured)</p>
          </div>

          <h4>Bicycle Safety Tips</h4>
          <ul>
            <li>Check for cyclists before turning right</li>
            <li>Look for cyclists before opening car doors ("dooring" is a common cause of cyclist injuries)</li>
            <li>Give cyclists extra space in rain—their brakes are less effective</li>
            <li>Watch for cyclists in bike lanes and near shoulders</li>
          </ul>

          <h3>Motorcyclists</h3>
          
          <p>California is the only state where lane splitting (riding between lanes of traffic) is legal:</p>

          <div class="law-box">
            <h4>📜 Lane Splitting in California</h4>
            <p>Motorcyclists may legally:</p>
            <ul>
              <li>Ride between lanes of slow-moving or stopped traffic</li>
              <li>CHP recommends splitting no more than 10 mph faster than surrounding traffic</li>
              <li>Lane splitting is prohibited in gaps next to trucks or buses</li>
            </ul>
            <p>As a driver, you should:</p>
            <ul>
              <li>Check for motorcycles before changing lanes</li>
              <li>Never block a lane-splitting motorcycle</li>
              <li>Give motorcyclists space when they're splitting lanes</li>
            </ul>
          </div>

          <h4>Motorcycle Safety Tips</h4>
          <ul>
            <li>Look twice—motorcycles are smaller and harder to see</li>
            <li>Always check your blind spot before changing lanes</li>
            <li>Give motorcycles a full lane—never share a lane</li>
            <li>Allow extra following distance</li>
            <li>Be aware they may be lane splitting, especially in heavy traffic</li>
          </ul>

          <h3>Large Trucks</h3>
          
          <p>California has significant truck traffic. Understanding truck limitations is essential:</p>

          <h4>Truck Blind Spots (No-Zones)</h4>
          <ul>
            <li><strong>Front:</strong> 20 feet ahead of cab</li>
            <li><strong>Rear:</strong> 30 feet behind trailer</li>
            <li><strong>Left:</strong> One lane beside cab and trailer</li>
            <li><strong>Right:</strong> Two lanes—largest blind spot</li>
          </ul>

          <div class="highlight-box">
            <h4>💡 No-Zone Rule</h4>
            <p>"If you can't see the truck's mirrors, the truck driver can't see you."</p>
          </div>

          <h4>Sharing Road with Trucks</h4>
          <ul>
            <li>Pass on the left (smaller blind spot)</li>
            <li>Pass quickly—don't linger beside trucks</li>
            <li>Allow extra room before merging back in front</li>
            <li>Don't cut in front—trucks need more stopping distance</li>
            <li>Give trucks room to turn (they swing wide)</li>
          </ul>

          <h3>School Buses</h3>
          
          <div class="law-box">
            <h4>📜 California School Bus Law</h4>
            <p>When a school bus displays flashing red lights and stop sign:</p>
            <ul>
              <li>Traffic from <strong>ALL directions</strong> must stop</li>
              <li>Remain stopped until lights and sign are retracted</li>
              <li><strong>Exception:</strong> On divided highways with a physical barrier, opposite-direction traffic doesn't need to stop</li>
            </ul>
            <p><strong>Penalty:</strong> $695 minimum fine and 1 point</p>
          </div>

          <h3>Emergency Vehicles</h3>
          
          <ul>
            <li>Pull to the right and stop when safe</li>
            <li>Stay at least 300 feet behind emergency vehicles</li>
            <li>Never stop on a freeway—continue to the nearest exit</li>
            <li>Yield in intersections, even on green</li>
          </ul>

          <div class="case-study">
            <h4>📋 Case Study: Looking Twice for Motorcycles</h4>
            <p><strong>Los Angeles Freeway:</strong></p>
            <p>A driver changing lanes failed to check his blind spot. A motorcycle was lane splitting at that moment. The collision sent the motorcyclist to the hospital with a broken leg.</p>
            <p><strong>Lesson:</strong> In California, always expect motorcycles to be lane splitting in heavy traffic. Check your blind spot every time.</p>
          </div>

          <div class="reflection-question">
            <h4>🤔 Reflection Question</h4>
            <p>How do you currently interact with bicyclists and motorcyclists? What additional precautions can you take?</p>
          </div>
        `,
        quizQuestions: [
          {
            questionText: 'When passing a bicyclist in California, you must leave at least:',
            options: ['2 feet', '3 feet', '4 feet', '6 feet'],
            correctAnswer: '3 feet',
            explanation: 'California\'s "Three Feet for Safety" law requires at least 3 feet when passing a bicyclist.'
          },
          {
            questionText: 'Is lane splitting legal in California?',
            options: ['No, never', 'Only on freeways', 'Yes, under certain conditions', 'Only for police motorcycles'],
            correctAnswer: 'Yes, under certain conditions',
            explanation: 'California is the only state where lane splitting is legal for motorcyclists.'
          },
          {
            questionText: 'The largest blind spot on a truck is:',
            options: ['In front', 'On the left', 'On the right', 'Behind'],
            correctAnswer: 'On the right',
            explanation: 'A truck\'s largest blind spot is on the right side, extending approximately two lanes.'
          },
          {
            questionText: 'When must you stop for a school bus in California?',
            options: ['Only when behind it', 'From all directions', 'Only in school zones', 'Never—buses yield to traffic'],
            correctAnswer: 'From all directions',
            explanation: 'Traffic from ALL directions must stop for school buses with flashing red lights (except on divided highways).'
          }
        ]
      },

      // MODULE 6: California Weather and Road Conditions
      {
        title: 'Module 6: California Weather and Road Conditions',
        description: 'Handling California\'s diverse driving conditions',
        estimatedMinutes: 45,
        content: `
          <h2>Driving in California Conditions</h2>
          
          <p>California has diverse geography and weather—from coastal fog to mountain snow, desert heat to flash floods. Adapting your driving to conditions is essential for safety.</p>

          <h3>Rain</h3>
          
          <p>When it rains in California, roads become especially dangerous because oil accumulates on the surface:</p>

          <h4>Rain Driving Tips</h4>
          <ul>
            <li>The first rain after a dry spell is the most dangerous—oil rises to the surface</li>
            <li>Reduce speed by 1/3</li>
            <li>Increase following distance to 4-6 seconds</li>
            <li>Use headlights (California law requires it when wipers are on)</li>
            <li>Avoid using cruise control</li>
            <li>Watch for hydroplaning</li>
          </ul>

          <h4>Hydroplaning</h4>
          <ul>
            <li>Occurs when your tires ride on a layer of water instead of the road</li>
            <li>Most likely at speeds over 35 mph</li>
            <li>If you hydroplane: ease off gas, don't brake suddenly, steer straight</li>
          </ul>

          <h3>Fog</h3>
          
          <p>California's Tule fog (Central Valley) and coastal fog can reduce visibility to near zero:</p>

          <div class="alert alert-danger">
            <h4>⚠️ Fog Driving Rules</h4>
            <ul>
              <li>Use <strong>low-beam headlights</strong> (high beams reflect off fog)</li>
              <li>Reduce speed to match visibility</li>
              <li>Increase following distance significantly</li>
              <li>Use fog lights if equipped</li>
              <li>If visibility is too low, pull completely off the road to a safe location</li>
              <li>Never stop on the roadway</li>
            </ul>
          </div>

          <h3>Mountain Driving</h3>
          
          <p>California's mountain roads (Sierra Nevada, coastal ranges) present unique challenges:</p>

          <h4>Uphill</h4>
          <ul>
            <li>Use lower gears to maintain power</li>
            <li>Watch for overheating</li>
            <li>Allow passing when safe</li>
          </ul>

          <h4>Downhill</h4>
          <ul>
            <li>Use lower gears to control speed (engine braking)</li>
            <li>Don't ride the brakes—they can overheat and fail</li>
            <li>Know where runaway truck ramps are located</li>
          </ul>

          <h3>Snow and Ice</h3>
          
          <p>California mountain roads often require chains or snow tires:</p>

          <div class="law-box">
            <h4>📜 California Chain Requirements</h4>
            <ul>
              <li><strong>R1:</strong> Chains required (except for 4WD with snow tires)</li>
              <li><strong>R2:</strong> Chains required on all vehicles (including 4WD)</li>
              <li><strong>R3:</strong> Road closed</li>
              <li>Fines for driving without required chains: $200+</li>
            </ul>
          </div>

          <h4>Snow/Ice Driving Tips</h4>
          <ul>
            <li>Install chains or know how before you need them</li>
            <li>Reduce speed dramatically</li>
            <li>Increase following distance to 10+ seconds</li>
            <li>Avoid sudden braking, acceleration, or steering</li>
            <li>Bridges and overpasses freeze first</li>
          </ul>

          <h3>Extreme Heat</h3>
          
          <p>California deserts experience extreme temperatures:</p>

          <h4>Heat Driving Tips</h4>
          <ul>
            <li>Check coolant and tire pressure before desert trips</li>
            <li>Carry extra water for yourself and your vehicle</li>
            <li>Know signs of heat exhaustion</li>
            <li>Never leave children or pets in parked vehicles</li>
          </ul>

          <div class="alert alert-danger">
            <h4>⚠️ Hot Car Warning</h4>
            <p>On an 80°F day, a car's interior can reach 109°F in just 20 minutes. Children and pets can die in minutes. <strong>NEVER</strong> leave them unattended in a vehicle.</p>
          </div>

          <h3>Earthquakes</h3>
          
          <p>California is earthquake country. If an earthquake occurs while driving:</p>

          <ul>
            <li>Pull over to a safe area (away from overpasses, bridges, power lines, buildings)</li>
            <li>Stop and stay in your vehicle</li>
            <li>Set the parking brake</li>
            <li>After shaking stops, proceed carefully—watch for road damage</li>
            <li>Listen to emergency broadcasts</li>
          </ul>

          <h3>Work Zones</h3>
          
          <p>California has extensive road construction:</p>

          <ul>
            <li>Fines are doubled in work zones</li>
            <li>Slow down when you see work zone signs</li>
            <li>Merge early</li>
            <li>Watch for workers and equipment</li>
            <li>Be prepared for sudden stops</li>
          </ul>

          <div class="case-study">
            <h4>📋 Case Study: Tule Fog Tragedy</h4>
            <p><strong>Highway 99, Central Valley:</strong></p>
            <p>A Tule fog event reduced visibility to less than 100 feet. A driver maintained highway speed, unable to see the stopped traffic ahead. The resulting chain-reaction crash involved over 100 vehicles with multiple fatalities.</p>
            <p><strong>Lesson:</strong> When fog reduces visibility, slow down dramatically. Your speed should never outpace your ability to stop within your visible distance.</p>
          </div>

          <div class="reflection-question">
            <h4>🤔 Reflection Question</h4>
            <p>What's the most challenging weather condition you've driven in? How could you have been better prepared?</p>
          </div>
        `,
        quizQuestions: [
          {
            questionText: 'In fog, you should use:',
            options: ['High-beam headlights', 'Low-beam headlights', 'Parking lights only', 'No lights'],
            correctAnswer: 'Low-beam headlights',
            explanation: 'Use low-beam headlights in fog. High beams reflect off the fog and reduce visibility.'
          },
          {
            questionText: 'California\'s R2 chain requirement means:',
            options: ['Chains recommended', 'Chains required except 4WD', 'Chains required on ALL vehicles', 'Road closed'],
            correctAnswer: 'Chains required on ALL vehicles',
            explanation: 'R2 means chains are required on ALL vehicles, including 4WD.'
          },
          {
            questionText: 'If you hydroplane, you should:',
            options: ['Brake hard', 'Accelerate', 'Ease off gas and steer straight', 'Turn sharply'],
            correctAnswer: 'Ease off gas and steer straight',
            explanation: 'If hydroplaning, ease off the gas, don\'t brake suddenly, and steer straight.'
          },
          {
            questionText: 'When driving downhill in mountains, you should:',
            options: ['Ride the brakes continuously', 'Use higher gears', 'Use lower gears for engine braking', 'Coast in neutral'],
            correctAnswer: 'Use lower gears for engine braking',
            explanation: 'Use lower gears for engine braking on downhill grades to prevent brake overheating.'
          }
        ]
      },

      // MODULE 7: Special Topics & Course Review
      {
        title: 'Module 7: Fatigue, Emotions, and Course Review',
        description: 'Managing driver fatigue and emotions, plus course review for the final exam',
        estimatedMinutes: 45,
        content: `
          <h2>Driver Fatigue and Emotions</h2>
          
          <h3>Drowsy Driving</h3>
          
          <p>Fatigue is a form of impairment that many drivers underestimate:</p>

          <div class="statistics-box">
            <h4>📊 Drowsy Driving Facts</h4>
            <ul>
              <li>Being awake 18 hours = driving at 0.05% BAC</li>
              <li>Being awake 24 hours = driving at 0.10% BAC (above legal limit)</li>
              <li>Drowsy driving causes an estimated 100,000 crashes per year nationally</li>
              <li>The most dangerous times: 2-6 AM and 2-4 PM</li>
            </ul>
          </div>

          <h4>Warning Signs of Fatigue</h4>
          <ul>
            <li>Frequent yawning or blinking</li>
            <li>Drifting from your lane</li>
            <li>Missing exits or traffic signs</li>
            <li>Difficulty remembering the last few miles</li>
            <li>Hitting rumble strips</li>
          </ul>

          <h4>Preventing Drowsy Driving</h4>
          <ul>
            <li>Get adequate sleep before driving (7-9 hours)</li>
            <li>Stop every 2 hours or 100 miles</li>
            <li>Travel during hours you're normally awake</li>
            <li>If drowsy, pull over and take a 15-20 minute nap</li>
            <li>Avoid heavy meals before driving</li>
            <li>Use caffeine strategically (takes 30 minutes to work)</li>
          </ul>

          <h3>Aggressive Driving and Road Rage</h3>
          
          <p>Aggressive driving and road rage are dangerous behaviors that can turn deadly:</p>

          <h4>Aggressive Driving Behaviors</h4>
          <ul>
            <li>Tailgating</li>
            <li>Excessive speeding</li>
            <li>Weaving through traffic</li>
            <li>Running red lights</li>
            <li>Failing to yield</li>
          </ul>

          <h4>Road Rage vs. Aggressive Driving</h4>
          <ul>
            <li><strong>Aggressive driving:</strong> Traffic offense (speeding, tailgating)</li>
            <li><strong>Road rage:</strong> Criminal offense (assault, threats, using vehicle as weapon)</li>
          </ul>

          <h4>Avoiding Road Rage</h4>
          <ul>
            <li>Don't take other drivers' actions personally</li>
            <li>Avoid eye contact with aggressive drivers</li>
            <li>Don't respond to gestures or honking</li>
            <li>Give aggressive drivers plenty of room</li>
            <li>If followed by an aggressive driver, drive to a police station</li>
            <li>Allow extra time for trips to reduce your own stress</li>
          </ul>

          <h3>Course Review</h3>
          
          <p>Let's review the key concepts before your final exam:</p>

          <div class="highlight-box">
            <h4>📋 California Traffic Laws</h4>
            <ul>
              <li>BAC limits: 0.08% (21+), 0.04% (commercial), 0.01% (under 21)</li>
              <li>Hands-free required; under 18 no phone use at all</li>
              <li>3 feet clearance when passing cyclists</li>
              <li>Move over or slow down for emergency vehicles</li>
              <li>Traffic school once every 18 months</li>
            </ul>
          </div>

          <div class="highlight-box">
            <h4>📋 Defensive Driving</h4>
            <ul>
              <li>3-second following distance (more in bad conditions)</li>
              <li>Scan 10-15 seconds ahead</li>
              <li>Check mirrors every 5-8 seconds</li>
              <li>SIPDE: Search, Identify, Predict, Decide, Execute</li>
            </ul>
          </div>

          <div class="highlight-box">
            <h4>📋 Weather & Conditions</h4>
            <ul>
              <li>Use low beams in fog</li>
              <li>Reduce speed and increase following distance in rain</li>
              <li>Know chain requirements for mountain driving</li>
              <li>If hydroplaning: ease off gas, steer straight</li>
            </ul>
          </div>

          <h3>Final Exam Information</h3>
          
          <p>Your final exam will include:</p>

          <ul>
            <li>25 multiple choice questions</li>
            <li>You must score 70% or higher (18+ correct)</li>
            <li>Questions cover all course material</li>
            <li>You may retake the exam if needed</li>
          </ul>

          <div class="alert alert-success">
            <h4>🎉 Congratulations!</h4>
            <p>You've completed the California Traffic Violator School curriculum. Good luck on your final exam, and drive safely!</p>
          </div>
        `,
        quizQuestions: [
          {
            questionText: 'Being awake for 24 hours impairs you similarly to a BAC of:',
            options: ['0.05%', '0.08%', '0.10%', '0.15%'],
            correctAnswer: '0.10%',
            explanation: 'Being awake 24 hours impairs you similarly to a BAC of 0.10%—above the legal limit.'
          },
          {
            questionText: 'If an aggressive driver is following you, you should:',
            options: ['Speed up', 'Brake check them', 'Drive to a police station', 'Roll down your window and argue'],
            correctAnswer: 'Drive to a police station',
            explanation: 'If followed by an aggressive driver, don\'t go home—drive to a police station or public place.'
          },
          {
            questionText: 'How often should you check your mirrors while driving?',
            options: ['Every 30 seconds', 'Every 15-20 seconds', 'Every 5-8 seconds', 'Only when changing lanes'],
            correctAnswer: 'Every 5-8 seconds',
            explanation: 'Check your mirrors every 5-8 seconds to maintain awareness of your surroundings.'
          },
          {
            questionText: 'Your minimum passing score on the final exam is:',
            options: ['60%', '70%', '80%', '90%'],
            correctAnswer: '70%',
            explanation: 'You need a score of 70% or higher to pass the final exam.'
          }
        ]
      }
    ],
    finalExamQuestions: [
      {
        questionText: 'How often can you attend traffic school for ticket masking in California?',
        options: ['Every 6 months', 'Every 12 months', 'Every 18 months', 'Every 24 months'],
        correctAnswer: 'Every 18 months',
        explanation: 'California allows traffic school once every 18 months.'
      },
      {
        questionText: 'California\'s speed limit in residential areas is:',
        options: ['20 mph', '25 mph', '30 mph', '35 mph'],
        correctAnswer: '25 mph',
        explanation: 'The speed limit in California residential areas is 25 mph unless posted otherwise.'
      },
      {
        questionText: 'Drivers under 18 in California can use:',
        options: ['Hands-free devices', 'Single-touch phones', 'No phone at all', 'Bluetooth only'],
        correctAnswer: 'No phone at all',
        explanation: 'Drivers under 18 cannot use ANY phone, even hands-free.'
      },
      {
        questionText: '6 points in 24 months results in:',
        options: ['Warning letter', '6-month suspension', '1-year suspension', 'License revocation'],
        correctAnswer: '6-month suspension',
        explanation: '6 points in 24 months leads to 6-month license suspension.'
      },
      {
        questionText: 'Minimum following distance in good conditions is:',
        options: ['1 second', '2 seconds', '3 seconds', '4 seconds'],
        correctAnswer: '3 seconds',
        explanation: 'The minimum recommended following distance is 3 seconds.'
      },
      {
        questionText: 'How far ahead should you scan while driving?',
        options: ['5-8 seconds', '10-15 seconds', '20-25 seconds', '30 seconds'],
        correctAnswer: '10-15 seconds',
        explanation: 'Scan 10-15 seconds ahead to identify hazards early.'
      },
      {
        questionText: 'California\'s legal BAC limit for 21+ is:',
        options: ['0.05%', '0.08%', '0.10%', '0.04%'],
        correctAnswer: '0.08%',
        explanation: 'The legal BAC limit for drivers 21+ is 0.08%.'
      },
      {
        questionText: 'Zero Tolerance BAC limit for under 21 is:',
        options: ['0.00%', '0.01%', '0.02%', '0.04%'],
        correctAnswer: '0.01%',
        explanation: 'California\'s Zero Tolerance limit for under 21 is 0.01%.'
      },
      {
        questionText: 'First refusal of chemical test results in:',
        options: ['No penalty', '4-month suspension', '1-year suspension', '2-year suspension'],
        correctAnswer: '1-year suspension',
        explanation: 'First refusal results in 1-year license suspension.'
      },
      {
        questionText: 'Texting increases crash risk by:',
        options: ['5 times', '10 times', '15 times', '23 times'],
        correctAnswer: '23 times',
        explanation: 'Texting increases crash risk by 23 times.'
      },
      {
        questionText: 'When passing a bicyclist, leave:',
        options: ['2 feet', '3 feet', '4 feet', '6 feet'],
        correctAnswer: '3 feet',
        explanation: 'California\'s Three Feet for Safety law requires 3 feet clearance.'
      },
      {
        questionText: 'Is lane splitting legal in California?',
        options: ['No', 'Only on freeways', 'Yes, under certain conditions', 'Only for police'],
        correctAnswer: 'Yes, under certain conditions',
        explanation: 'Lane splitting is legal in California under certain conditions.'
      },
      {
        questionText: 'A truck\'s largest blind spot is:',
        options: ['Front', 'Left', 'Right', 'Rear'],
        correctAnswer: 'Right',
        explanation: 'The right side has the largest blind spot, spanning two lanes.'
      },
      {
        questionText: 'In fog, use:',
        options: ['High beams', 'Low beams', 'Parking lights', 'No lights'],
        correctAnswer: 'Low beams',
        explanation: 'Use low beams in fog; high beams reflect and reduce visibility.'
      },
      {
        questionText: 'California R2 chain requirement means:',
        options: ['Chains recommended', 'Chains except 4WD', 'Chains on ALL vehicles', 'Road closed'],
        correctAnswer: 'Chains on ALL vehicles',
        explanation: 'R2 requires chains on ALL vehicles, including 4WD.'
      },
      {
        questionText: 'If hydroplaning:',
        options: ['Brake hard', 'Accelerate', 'Ease off gas, steer straight', 'Turn sharply'],
        correctAnswer: 'Ease off gas, steer straight',
        explanation: 'Ease off gas and steer straight when hydroplaning.'
      },
      {
        questionText: 'Being awake 24 hours equals what BAC?',
        options: ['0.05%', '0.08%', '0.10%', '0.15%'],
        correctAnswer: '0.10%',
        explanation: '24 hours awake impairs like 0.10% BAC.'
      },
      {
        questionText: 'How often should you check mirrors?',
        options: ['Every 30 seconds', 'Every 15 seconds', 'Every 5-8 seconds', 'Only when changing lanes'],
        correctAnswer: 'Every 5-8 seconds',
        explanation: 'Check mirrors every 5-8 seconds.'
      },
      {
        questionText: 'California school bus law requires stopping from:',
        options: ['Behind only', 'All directions', 'Same lane', 'School zones only'],
        correctAnswer: 'All directions',
        explanation: 'Stop from ALL directions (except on divided highways).'
      },
      {
        questionText: 'Minimum passing score on final exam is:',
        options: ['60%', '70%', '80%', '90%'],
        correctAnswer: '70%',
        explanation: 'You need 70% to pass the final exam.'
      }
    ]
  }
};

export default californiaCourseData;
