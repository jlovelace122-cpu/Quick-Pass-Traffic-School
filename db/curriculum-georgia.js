// ===========================
// Georgia Defensive Driving Course Curriculum
// DDS-Approved Course Content
// ===========================

export const georgiaCourseData = {
  // Georgia offers a 6-hour Defensive Driving Course for point reduction
  course6Hour: {
    name: 'Georgia 6-Hour Defensive Driving Course',
    slug: 'georgia-6-hour-defensive-driving',
    description: 'Georgia DDS-approved defensive driving course for point reduction and ticket dismissal. Covers Georgia traffic laws, defensive driving techniques, and road safety fundamentals.',
    durationHours: 6,
    price: 34.95,
    modules: [
      // MODULE 1: Introduction & Georgia Traffic Laws
      {
        title: 'Module 1: Introduction & Georgia Traffic Laws',
        description: 'Course overview, Georgia driving statistics, and state-specific traffic regulations',
        estimatedMinutes: 45,
        content: `
          <h2>Welcome to Georgia Defensive Driving</h2>
          
          <p>Welcome to Quick Pass Traffic School's Georgia Department of Driver Services (DDS) approved Defensive Driving Course. This comprehensive 6-hour program is designed to help you become a safer, more responsible driver on Georgia's roads.</p>

          <div class="highlight-box">
            <h4>🎯 Course Objectives</h4>
            <p>By completing this course, you will:</p>
            <ul>
              <li>Understand Georgia's traffic laws and regulations</li>
              <li>Learn defensive driving techniques to avoid accidents</li>
              <li>Reduce points on your Georgia driver's license</li>
              <li>Potentially qualify for insurance discounts</li>
              <li>Become a safer, more confident driver</li>
            </ul>
          </div>

          <h3>Georgia Driving Statistics</h3>
          
          <p>Georgia's roads see significant traffic activity, and unfortunately, many preventable accidents occur each year:</p>
          
          <div class="statistics-box">
            <h4>📊 Georgia Traffic Statistics</h4>
            <ul>
              <li><strong>1,800+</strong> traffic fatalities annually</li>
              <li><strong>400,000+</strong> reported crashes each year</li>
              <li><strong>Metro Atlanta</strong> consistently ranks among the worst traffic congestion in the nation</li>
              <li><strong>Distracted driving</strong> contributes to approximately 25% of all crashes</li>
              <li><strong>Speeding</strong> is a factor in over 30% of fatal crashes</li>
            </ul>
          </div>

          <h3>Georgia's Points System</h3>
          
          <p>Georgia uses a point system to track traffic violations. Understanding this system is crucial for maintaining your driving privileges:</p>

          <table class="info-table">
            <tr><th>Points Accumulated (24 months)</th><th>Consequence</th></tr>
            <tr><td>15 or more points</td><td>License suspension</td></tr>
          </table>

          <h4>Common Violations and Point Values</h4>
          <table class="info-table">
            <tr><th>Violation</th><th>Points</th></tr>
            <tr><td>Speeding (15-18 mph over)</td><td>2 points</td></tr>
            <tr><td>Speeding (19-23 mph over)</td><td>3 points</td></tr>
            <tr><td>Speeding (24-33 mph over)</td><td>4 points</td></tr>
            <tr><td>Speeding (34+ mph over)</td><td>6 points</td></tr>
            <tr><td>Reckless driving</td><td>4 points</td></tr>
            <tr><td>Following too closely</td><td>3 points</td></tr>
            <tr><td>Improper passing</td><td>4 points</td></tr>
            <tr><td>Failure to yield</td><td>3 points</td></tr>
            <tr><td>Running a red light/stop sign</td><td>3 points</td></tr>
            <tr><td>DUI (first offense)</td><td>4 points</td></tr>
          </table>

          <div class="law-box">
            <h4>📜 Point Reduction Through This Course</h4>
            <p>By completing this DDS-approved defensive driving course, you may be eligible to:</p>
            <ul>
              <li>Reduce up to <strong>7 points</strong> from your driving record</li>
              <li>Take the course once every 5 years for point reduction</li>
              <li>Court-ordered completion for ticket dismissal</li>
            </ul>
          </div>

          <h3>Georgia's Super Speeder Law</h3>
          
          <p>Georgia has a unique "Super Speeder" law that imposes additional penalties for excessive speeding:</p>

          <div class="alert alert-danger">
            <h4>⚠️ Super Speeder Penalties</h4>
            <p>You become a "Super Speeder" if convicted of:</p>
            <ul>
              <li>Driving <strong>85 mph or faster</strong> on any road or highway</li>
              <li>Driving <strong>75 mph or faster</strong> on a two-lane road</li>
            </ul>
            <p><strong>Additional penalty:</strong> $200 state fee on top of regular fines and court costs</p>
            <p><strong>Warning:</strong> Failure to pay the Super Speeder fee within 120 days results in license suspension</p>
          </div>

          <h3>Joshua's Law - Teen Driver Requirements</h3>
          
          <p>Georgia's Joshua's Law requires all drivers under 18 to complete a driver education course that includes:</p>
          <ul>
            <li>30 hours of classroom instruction</li>
            <li>6 hours of behind-the-wheel training</li>
            <li>40 hours of supervised driving (minimum 6 at night)</li>
          </ul>

          <h3>Georgia's Hands-Free Law</h3>
          
          <p>Since July 1, 2018, Georgia's Hands-Free Law prohibits drivers from:</p>
          <ul>
            <li>Holding or supporting a phone with any part of the body</li>
            <li>Writing, sending, or reading text messages</li>
            <li>Watching videos while driving</li>
            <li>Recording videos while driving</li>
          </ul>

          <p><strong>What IS allowed:</strong></p>
          <ul>
            <li>Using hands-free technology (Bluetooth, voice commands)</li>
            <li>Using GPS/navigation if mounted or hands-free</li>
            <li>Making emergency calls to 911</li>
            <li>Using a phone while legally parked</li>
          </ul>

          <div class="case-study">
            <h4>📋 Real-World Case: Georgia's Hands-Free Impact</h4>
            <p>Since Georgia implemented the Hands-Free Law, distracted driving-related fatalities have decreased by approximately 6% in the first year alone. The law has been credited with saving dozens of lives and preventing hundreds of injuries annually.</p>
          </div>

          <div class="reflection-question">
            <h4>🤔 Reflection Question</h4>
            <p>How has the Hands-Free Law affected your driving habits? What tools or techniques do you use to stay compliant with this law?</p>
          </div>
        `,
        quizQuestions: [
          {
            questionText: 'How many points within 24 months will result in a Georgia license suspension?',
            options: ['10 points', '12 points', '15 points', '18 points'],
            correctAnswer: '15 points',
            explanation: 'In Georgia, accumulating 15 or more points within 24 months results in license suspension.'
          },
          {
            questionText: 'What is the Super Speeder threshold on Georgia highways?',
            options: ['75 mph', '80 mph', '85 mph', '90 mph'],
            correctAnswer: '85 mph',
            explanation: 'You become a Super Speeder in Georgia if convicted of driving 85 mph or faster on any road or highway.'
          },
          {
            questionText: 'Georgia\'s Hands-Free Law allows you to:',
            options: ['Hold your phone briefly for calls', 'Use voice-activated features', 'Text at red lights', 'Watch videos if mounted'],
            correctAnswer: 'Use voice-activated features',
            explanation: 'The Hands-Free Law allows using voice-activated or hands-free features, but prohibits holding the phone at any time while driving.'
          },
          {
            questionText: 'How many points can be reduced by completing this defensive driving course?',
            options: ['3 points', '5 points', '7 points', '10 points'],
            correctAnswer: '7 points',
            explanation: 'Completing a Georgia DDS-approved defensive driving course can reduce up to 7 points from your driving record.'
          }
        ]
      },

      // MODULE 2: Defensive Driving Fundamentals
      {
        title: 'Module 2: Defensive Driving Fundamentals',
        description: 'Core defensive driving techniques including the SIPDE method and space management',
        estimatedMinutes: 50,
        content: `
          <h2>Defensive Driving: Your Best Protection on the Road</h2>
          
          <p>Defensive driving means driving in a manner that utilizes safe driving strategies to enable drivers to address identified hazards in a predictable manner. It goes beyond simply following traffic rules—it's about anticipating problems and being prepared to handle them.</p>

          <div class="highlight-box">
            <h4>🛡️ What is Defensive Driving?</h4>
            <p>Defensive driving is driving to save lives, time, and money, in spite of the conditions around you and the actions of others. A defensive driver:</p>
            <ul>
              <li>Constantly scans the road for potential hazards</li>
              <li>Maintains safe following distances</li>
              <li>Anticipates what other drivers might do</li>
              <li>Adjusts driving to weather and road conditions</li>
              <li>Remains calm and patient in traffic</li>
              <li>Never assumes other drivers will do the right thing</li>
            </ul>
          </div>

          <h3>The SIPDE Method</h3>
          
          <p>SIPDE is a five-step decision-making process that helps you drive defensively and respond to hazards:</p>

          <div class="method-box">
            <h4>S - Search</h4>
            <p>Actively scan the road ahead, sides, and behind you. Look for:</p>
            <ul>
              <li>Other vehicles and their movements</li>
              <li>Pedestrians and cyclists</li>
              <li>Road conditions and obstacles</li>
              <li>Traffic signs and signals</li>
              <li>Potential escape routes</li>
            </ul>
          </div>

          <div class="method-box">
            <h4>I - Identify</h4>
            <p>Recognize potential hazards, including:</p>
            <ul>
              <li>Cars that might enter your path</li>
              <li>Pedestrians who might cross</li>
              <li>Road debris or potholes</li>
              <li>Aggressive or erratic drivers</li>
              <li>Changing weather conditions</li>
            </ul>
          </div>

          <div class="method-box">
            <h4>P - Predict</h4>
            <p>Anticipate what might happen:</p>
            <ul>
              <li>Will that car at the side street pull out?</li>
              <li>Might that pedestrian step into the road?</li>
              <li>Could traffic ahead suddenly stop?</li>
              <li>What if the weather worsens?</li>
            </ul>
          </div>

          <div class="method-box">
            <h4>D - Decide</h4>
            <p>Choose the best course of action:</p>
            <ul>
              <li>Should you slow down?</li>
              <li>Change lanes?</li>
              <li>Increase following distance?</li>
              <li>Pull over and wait?</li>
            </ul>
          </div>

          <div class="method-box">
            <h4>E - Execute</h4>
            <p>Take action smoothly and safely:</p>
            <ul>
              <li>Apply brakes gradually when possible</li>
              <li>Signal before changing lanes</li>
              <li>Check mirrors before maneuvering</li>
              <li>Maintain control of your vehicle</li>
            </ul>
          </div>

          <h3>The Three-Second Rule</h3>
          
          <p>Maintaining a safe following distance is one of the most important defensive driving techniques. The three-second rule helps you maintain proper spacing:</p>

          <div class="how-to-box">
            <h4>How to Apply the Three-Second Rule</h4>
            <ol>
              <li>Watch the vehicle ahead pass a fixed point (sign, tree, overpass)</li>
              <li>Count "one-thousand-one, one-thousand-two, one-thousand-three"</li>
              <li>If you reach the point before finishing, you're following too closely</li>
            </ol>
          </div>

          <div class="alert alert-warning">
            <h4>⚠️ When to Increase Following Distance</h4>
            <p>Increase to 4-6 seconds or more when:</p>
            <ul>
              <li>Weather conditions are poor (rain, fog, ice)</li>
              <li>Following motorcycles or large trucks</li>
              <li>Driving at higher speeds</li>
              <li>Road conditions are hazardous</li>
              <li>You're being tailgated (increase space ahead)</li>
              <li>Following a vehicle making frequent stops</li>
            </ul>
          </div>

          <h3>Space Management</h3>
          
          <p>Creating a "space cushion" around your vehicle gives you time and room to react to hazards:</p>

          <h4>The Space Cushion Concept</h4>
          <ul>
            <li><strong>Front:</strong> At least 3 seconds of following distance</li>
            <li><strong>Rear:</strong> If tailgated, increase front cushion and tap brakes gently</li>
            <li><strong>Sides:</strong> Stay centered in your lane; avoid driving in blind spots</li>
            <li><strong>Above:</strong> Watch for low bridges, tree branches, and overhead hazards</li>
          </ul>

          <h3>Scanning Techniques</h3>
          
          <p>Effective visual scanning is essential for defensive driving:</p>

          <ul>
            <li><strong>Look 12-15 seconds ahead:</strong> About 1/4 mile on highways, 1-2 blocks in city</li>
            <li><strong>Check mirrors every 5-8 seconds:</strong> Stay aware of what's behind you</li>
            <li><strong>Scan intersections:</strong> Look left-right-left before entering</li>
            <li><strong>Check blind spots:</strong> Always before lane changes or merging</li>
          </ul>

          <div class="case-study">
            <h4>📋 Case Study: Defensive Driving Saves Lives</h4>
            <p><strong>Atlanta I-285 Incident:</strong></p>
            <p>Marcus was driving on I-285 during rush hour when he noticed a vehicle several cars ahead swerving erratically. Applying the SIPDE method, he identified the hazard, predicted the driver might cause a collision, decided to change lanes and reduce speed, and executed a smooth lane change away from the erratic driver.</p>
            <p>Moments later, the erratic driver caused a multi-car accident exactly where Marcus would have been. His defensive driving techniques saved him from being involved in a serious crash.</p>
          </div>

          <div class="reflection-question">
            <h4>🤔 Reflection Question</h4>
            <p>Think about your last drive. How often did you check your mirrors? Did you maintain a 3-second following distance? What could you do to apply the SIPDE method more consistently?</p>
          </div>
        `,
        quizQuestions: [
          {
            questionText: 'What does SIPDE stand for?',
            options: ['Stop, Inspect, Proceed, Drive, Exit', 'Search, Identify, Predict, Decide, Execute', 'Scan, Investigate, Plan, Drive, Evaluate', 'See, Identify, Plan, Drive, Escape'],
            correctAnswer: 'Search, Identify, Predict, Decide, Execute',
            explanation: 'SIPDE stands for Search, Identify, Predict, Decide, and Execute—a five-step method for defensive driving.'
          },
          {
            questionText: 'The three-second rule helps you maintain:',
            options: ['Proper speed', 'Safe following distance', 'Lane position', 'Reaction time'],
            correctAnswer: 'Safe following distance',
            explanation: 'The three-second rule is a method for maintaining a safe following distance between your vehicle and the one ahead.'
          },
          {
            questionText: 'When should you increase your following distance beyond 3 seconds?',
            options: ['When traffic is light', 'When driving in good weather', 'When road conditions are poor', 'When driving on straight roads'],
            correctAnswer: 'When road conditions are poor',
            explanation: 'You should increase following distance to 4-6 seconds or more during poor weather, when following large vehicles, or when road conditions are hazardous.'
          },
          {
            questionText: 'How far ahead should you scan when driving on a highway?',
            options: ['5-7 seconds', '8-10 seconds', '12-15 seconds', '20-25 seconds'],
            correctAnswer: '12-15 seconds',
            explanation: 'On highways, you should scan 12-15 seconds ahead (about 1/4 mile) to identify potential hazards early.'
          }
        ]
      },

      // MODULE 3: Distracted Driving in Georgia
      {
        title: 'Module 3: Distracted Driving in Georgia',
        description: 'Understanding Georgia\'s Hands-Free Law, types of distractions, and prevention strategies',
        estimatedMinutes: 45,
        content: `
          <h2>Distracted Driving: Georgia's Fight Against Preventable Crashes</h2>
          
          <p>Distracted driving is one of the leading causes of accidents in Georgia. Each year, thousands of crashes, injuries, and deaths are attributed to drivers who weren't paying full attention to the road.</p>

          <div class="statistics-box">
            <h4>📊 Georgia Distracted Driving Statistics</h4>
            <ul>
              <li><strong>25%</strong> of all Georgia crashes involve distracted driving</li>
              <li><strong>60+</strong> lives lost annually due to distracted driving in Georgia</li>
              <li><strong>500+</strong> serious injuries per year from distracted driving crashes</li>
              <li>Cell phone use is involved in <strong>1 in 4</strong> motor vehicle crashes</li>
            </ul>
          </div>

          <h3>The Three Types of Distractions</h3>
          
          <p>All distractions fall into one or more of these categories:</p>

          <h4>1. Visual Distractions</h4>
          <p>Anything that takes your eyes off the road:</p>
          <ul>
            <li>Looking at your phone</li>
            <li>Reading billboards or signs</li>
            <li>Looking at passengers</li>
            <li>Checking GPS or navigation</li>
            <li>Viewing accidents or roadside activity</li>
          </ul>

          <h4>2. Manual Distractions</h4>
          <p>Anything that takes your hands off the wheel:</p>
          <ul>
            <li>Holding a phone</li>
            <li>Eating or drinking</li>
            <li>Adjusting controls</li>
            <li>Reaching for objects</li>
            <li>Personal grooming</li>
          </ul>

          <h4>3. Cognitive Distractions</h4>
          <p>Anything that takes your mind off driving:</p>
          <ul>
            <li>Emotional conversations</li>
            <li>Thinking about work or personal issues</li>
            <li>Daydreaming</li>
            <li>Listening to engaging content</li>
            <li>Being upset or angry</li>
          </ul>

          <div class="alert alert-danger">
            <h4>⚠️ Why Texting is Especially Dangerous</h4>
            <p>Texting involves ALL THREE types of distraction simultaneously:</p>
            <ul>
              <li><strong>Visual:</strong> Looking at the phone screen</li>
              <li><strong>Manual:</strong> Holding and typing on the phone</li>
              <li><strong>Cognitive:</strong> Thinking about the message content</li>
            </ul>
            <p>At 55 mph, looking at your phone for 5 seconds means traveling the length of a football field blind.</p>
          </div>

          <h3>Georgia's Hands-Free Law in Detail</h3>
          
          <p>Georgia's Hands-Free Georgia Act (O.C.G.A. § 40-6-241.2) is one of the strictest cell phone laws in the country:</p>

          <div class="law-box">
            <h4>📜 What the Law Prohibits</h4>
            <ul>
              <li>Holding or supporting a phone with any part of your body while driving</li>
              <li>Writing, sending, or reading any text-based communication</li>
              <li>Watching videos</li>
              <li>Recording videos</li>
              <li>Reaching for a phone in a manner that requires removing your seatbelt or leaving your seated position</li>
            </ul>
          </div>

          <div class="law-box">
            <h4>📜 What IS Allowed</h4>
            <ul>
              <li>Using a hands-free device (Bluetooth earpiece, vehicle system, speakerphone if not holding)</li>
              <li>Voice-to-text features</li>
              <li>GPS navigation if the device is mounted or hands-free</li>
              <li>Using a device while legally parked</li>
              <li>Reporting emergencies to 911</li>
              <li>Emergency personnel and first responders in official duties</li>
            </ul>
          </div>

          <h4>Penalties for Violations</h4>
          <table class="info-table">
            <tr><th>Offense</th><th>Fine</th><th>Points</th></tr>
            <tr><td>First offense</td><td>$50 + court fees</td><td>1 point</td></tr>
            <tr><td>Second offense</td><td>$100 + court fees</td><td>2 points</td></tr>
            <tr><td>Third and subsequent</td><td>$150 + court fees</td><td>3 points</td></tr>
          </table>

          <h3>Strategies to Avoid Distractions</h3>
          
          <h4>Before Driving</h4>
          <ul>
            <li>Set up navigation and music before starting</li>
            <li>Put your phone on "Do Not Disturb" mode</li>
            <li>Secure loose items in the vehicle</li>
            <li>Eat before driving, not while driving</li>
            <li>Address any emotional issues before getting behind the wheel</li>
          </ul>

          <h4>While Driving</h4>
          <ul>
            <li>Let calls go to voicemail</li>
            <li>Ask a passenger to handle navigation or communication</li>
            <li>If you must take a call, use hands-free and keep it brief</li>
            <li>Pull over safely if you need to use your phone</li>
            <li>Focus on driving as your primary task</li>
          </ul>

          <div class="case-study">
            <h4>📋 Case Study: The Price of Distraction</h4>
            <p><strong>Savannah, Georgia:</strong></p>
            <p>Jennifer was running late for a meeting and decided to check her email at a red light. The light turned green, but she continued looking at her phone while pressing the accelerator.</p>
            <p>She didn't see the pedestrian who had entered the crosswalk. The collision resulted in serious injuries to an elderly man crossing the street.</p>
            <p><strong>Consequences:</strong></p>
            <ul>
              <li>Criminal charges for serious injury by vehicle</li>
              <li>Civil lawsuit resulting in $350,000 judgment</li>
              <li>License suspension</li>
              <li>Loss of employment</li>
              <li>Living with the guilt of permanently injuring another person</li>
            </ul>
          </div>

          <h3>Hands-Free Technologies and Best Practices</h3>
          
          <h4>Recommended Hands-Free Options</h4>
          <ul>
            <li><strong>Vehicle Bluetooth Systems:</strong> Connect your phone to your car's built-in system</li>
            <li><strong>Bluetooth Earpieces:</strong> Single-ear devices for calls</li>
            <li><strong>Voice Assistants:</strong> Siri, Google Assistant, or Alexa for hands-free commands</li>
            <li><strong>Phone Mounts:</strong> Keep your phone mounted for GPS use without holding it</li>
          </ul>

          <div class="reflection-question">
            <h4>🤔 Reflection Question</h4>
            <p>What specific changes can you make to eliminate distractions in your driving? Consider your phone habits, eating habits, and how you interact with passengers.</p>
          </div>
        `,
        quizQuestions: [
          {
            questionText: 'Georgia\'s Hands-Free Law prohibits holding a phone:',
            options: ['Only while moving', 'At any time while driving, including at red lights', 'Only on highways', 'Only in school zones'],
            correctAnswer: 'At any time while driving, including at red lights',
            explanation: 'Georgia\'s Hands-Free Law prohibits holding a phone at any time while driving, including when stopped at red lights.'
          },
          {
            questionText: 'Which type(s) of distraction does texting involve?',
            options: ['Visual only', 'Manual only', 'Cognitive only', 'All three: visual, manual, and cognitive'],
            correctAnswer: 'All three: visual, manual, and cognitive',
            explanation: 'Texting is especially dangerous because it combines visual, manual, and cognitive distractions simultaneously.'
          },
          {
            questionText: 'What is the fine for a first-offense Hands-Free Law violation in Georgia?',
            options: ['$25', '$50', '$100', '$200'],
            correctAnswer: '$50',
            explanation: 'A first offense of Georgia\'s Hands-Free Law carries a $50 fine plus court fees and 1 point on your license.'
          },
          {
            questionText: 'Which of the following is ALLOWED under Georgia\'s Hands-Free Law?',
            options: ['Holding your phone on speakerphone', 'Texting at red lights', 'Using voice-activated navigation', 'Watching videos while stopped'],
            correctAnswer: 'Using voice-activated navigation',
            explanation: 'Georgia\'s Hands-Free Law allows using voice-activated features and hands-free navigation, but prohibits holding the phone or watching videos while driving.'
          }
        ]
      },

      // MODULE 4: Impaired Driving
      {
        title: 'Module 4: Impaired Driving',
        description: 'Understanding the dangers and legal consequences of driving under the influence in Georgia',
        estimatedMinutes: 45,
        content: `
          <h2>Impaired Driving: One Choice That Can Destroy Lives</h2>
          
          <p>Impaired driving remains one of the most dangerous and preventable causes of traffic deaths in Georgia. Despite decades of education and enforcement, thousands of people still choose to drive while impaired by alcohol, drugs, or other substances.</p>

          <div class="statistics-box">
            <h4>📊 Georgia DUI Statistics</h4>
            <ul>
              <li><strong>400+</strong> people killed annually in Georgia DUI crashes</li>
              <li><strong>1 in 3</strong> traffic fatalities involve an impaired driver</li>
              <li><strong>25,000+</strong> DUI arrests in Georgia each year</li>
              <li>The average drunk driver has driven impaired <strong>80 times</strong> before their first arrest</li>
            </ul>
          </div>

          <h3>How Alcohol Affects Driving</h3>
          
          <p>Alcohol impairs virtually every skill needed for safe driving:</p>

          <table class="info-table">
            <tr><th>BAC Level</th><th>Effects on Driving</th></tr>
            <tr><td>0.02%</td><td>Some loss of judgment, relaxation, altered mood</td></tr>
            <tr><td>0.05%</td><td>Reduced coordination, difficulty steering, reduced response to emergencies</td></tr>
            <tr><td>0.08%</td><td>Poor muscle coordination, difficulty detecting danger, impaired judgment (ILLEGAL)</td></tr>
            <tr><td>0.10%</td><td>Clear deterioration of control and reaction time</td></tr>
            <tr><td>0.15%</td><td>Substantial impairment of vehicle control, major loss of balance</td></tr>
          </table>

          <div class="alert alert-danger">
            <h4>⚠️ Georgia's Legal Limits</h4>
            <ul>
              <li><strong>21 and over:</strong> 0.08% BAC</li>
              <li><strong>Commercial drivers:</strong> 0.04% BAC</li>
              <li><strong>Under 21:</strong> 0.02% BAC (Zero Tolerance)</li>
            </ul>
            <p><strong>Important:</strong> You can be arrested for DUI even below these limits if your driving is impaired.</p>
          </div>

          <h3>Georgia DUI Laws and Penalties</h3>
          
          <p>Georgia takes DUI offenses very seriously. Penalties are severe and increase with each offense:</p>

          <h4>First DUI Offense</h4>
          <ul>
            <li>Jail: 10 days to 12 months (minimum 24 hours)</li>
            <li>Fine: $300 to $1,000</li>
            <li>License suspension: 12 months (may apply for limited permit after 120 days)</li>
            <li>Community service: Minimum 40 hours</li>
            <li>DUI Alcohol or Drug Use Risk Reduction Program</li>
            <li>Clinical evaluation and treatment if recommended</li>
          </ul>

          <h4>Second DUI Offense (within 10 years)</h4>
          <ul>
            <li>Jail: 90 days to 12 months (minimum 72 hours)</li>
            <li>Fine: $600 to $1,000</li>
            <li>License suspension: 3 years (limited permit after 18 months)</li>
            <li>Community service: Minimum 30 days</li>
            <li>Installation of ignition interlock device</li>
          </ul>

          <h4>Third DUI Offense (within 10 years)</h4>
          <ul>
            <li>Jail: 120 days to 12 months (minimum 15 days)</li>
            <li>Fine: $1,000 to $5,000</li>
            <li>License revocation: 5 years</li>
            <li>Designated as a "habitual violator"</li>
            <li>Publication of photo and name in local newspaper</li>
            <li>Vehicle forfeiture possible</li>
          </ul>

          <h3>Georgia's Implied Consent Law</h3>
          
          <p>Under Georgia law, by driving on Georgia roads, you have automatically given consent to chemical testing if lawfully arrested for DUI:</p>

          <div class="law-box">
            <h4>📜 Implied Consent - What You Need to Know</h4>
            <ul>
              <li>Refusing a chemical test results in <strong>immediate 1-year license suspension</strong></li>
              <li>Refusal can be used against you in court</li>
              <li>You have <strong>30 days</strong> to request an administrative hearing to contest the suspension</li>
              <li>Refusal suspensions are often longer than DUI conviction suspensions</li>
            </ul>
          </div>

          <h3>Drug-Impaired Driving</h3>
          
          <p>Driving under the influence includes all impairing substances, not just alcohol:</p>

          <ul>
            <li><strong>Marijuana:</strong> Impairs reaction time, judgment, and coordination</li>
            <li><strong>Prescription medications:</strong> Many cause drowsiness or impairment</li>
            <li><strong>Over-the-counter drugs:</strong> Antihistamines, sleep aids can impair driving</li>
            <li><strong>Illegal drugs:</strong> Any substance affecting motor skills or judgment</li>
          </ul>

          <div class="alert alert-warning">
            <h4>⚠️ Prescription Drug Warning</h4>
            <p>Even if you have a valid prescription, you can be charged with DUI if the medication impairs your ability to drive safely. Always read warning labels and ask your doctor or pharmacist about driving while taking medications.</p>
          </div>

          <h3>Alternatives to Impaired Driving</h3>
          
          <p>There's never an excuse for driving impaired. Plan ahead with these alternatives:</p>

          <ul>
            <li><strong>Designated driver:</strong> Agree before going out who will stay sober</li>
            <li><strong>Rideshare services:</strong> Uber, Lyft are available throughout Georgia</li>
            <li><strong>Taxi services:</strong> Traditional cabs are still an option</li>
            <li><strong>Public transportation:</strong> MARTA in Atlanta, bus services elsewhere</li>
            <li><strong>Stay overnight:</strong> Get a hotel room or stay with friends</li>
            <li><strong>Call a friend or family member:</strong> Anyone you trust to pick you up</li>
          </ul>

          <div class="case-study">
            <h4>📋 Case Study: The Lifetime Impact of DUI</h4>
            <p><strong>Michael's Story - Marietta, Georgia:</strong></p>
            <p>At 23, Michael made a decision that changed his life forever. After a few drinks at a friend's party, he decided to drive home "just a few miles." He crossed the center line and struck another vehicle head-on.</p>
            <p>The other driver, a 28-year-old mother of two, was killed instantly.</p>
            <p><strong>Consequences Michael faced:</strong></p>
            <ul>
              <li>Convicted of vehicular homicide - 10 years in prison</li>
              <li>Civil lawsuit - $2.5 million judgment to victim's family</li>
              <li>Permanent felony record</li>
              <li>Lost career opportunities</li>
              <li>Living with the knowledge he killed someone</li>
            </ul>
            <p><strong>Total cost of a $15 Uber ride he didn't take: 10+ years in prison, millions in damages, and a life he can never give back.</strong></p>
          </div>

          <div class="reflection-question">
            <h4>🤔 Reflection Question</h4>
            <p>What specific plan can you put in place before drinking to ensure you never drive impaired? Consider different scenarios - planned events, unexpected situations, and peer pressure.</p>
          </div>
        `,
        quizQuestions: [
          {
            questionText: 'What is the legal BAC limit for drivers 21 and over in Georgia?',
            options: ['0.04%', '0.08%', '0.10%', '0.02%'],
            correctAnswer: '0.08%',
            explanation: 'In Georgia, the legal BAC limit for drivers 21 and over is 0.08%. Commercial drivers have a limit of 0.04%, and drivers under 21 have a limit of 0.02%.'
          },
          {
            questionText: 'What happens if you refuse a chemical test in Georgia under the Implied Consent Law?',
            options: ['No penalty', '30-day suspension', '1-year license suspension', '6-month suspension'],
            correctAnswer: '1-year license suspension',
            explanation: 'Under Georgia\'s Implied Consent Law, refusing a chemical test results in an immediate 1-year license suspension.'
          },
          {
            questionText: 'How long do Georgia DUI convictions stay on your record for enhancement purposes?',
            options: ['5 years', '7 years', '10 years', 'Lifetime'],
            correctAnswer: '10 years',
            explanation: 'Georgia DUI convictions are counted within a 10-year lookback period for determining penalty enhancements.'
          },
          {
            questionText: 'True or False: You can be charged with DUI for driving while impaired by prescription medications.',
            questionType: 'true_false',
            options: ['True', 'False'],
            correctAnswer: 'True',
            explanation: 'True. Even with a valid prescription, you can be charged with DUI if the medication impairs your ability to drive safely.'
          }
        ]
      },

      // MODULE 5: Sharing the Road
      {
        title: 'Module 5: Sharing the Road',
        description: 'Safely interacting with pedestrians, cyclists, motorcyclists, and large vehicles on Georgia roads',
        estimatedMinutes: 40,
        content: `
          <h2>Sharing the Road: Respecting All Road Users</h2>
          
          <p>Georgia's roads are shared by many different types of users—cars, trucks, motorcycles, bicycles, pedestrians, and more. Each has different characteristics and vulnerabilities. As a defensive driver, you must understand how to safely interact with all road users.</p>

          <h3>Pedestrians</h3>
          
          <p>Pedestrians are the most vulnerable road users. In Georgia, approximately 200 pedestrians are killed each year in traffic crashes.</p>

          <div class="law-box">
            <h4>📜 Georgia Pedestrian Laws</h4>
            <ul>
              <li>Drivers must yield to pedestrians in crosswalks</li>
              <li>When turning on red, yield to pedestrians in the crosswalk</li>
              <li>Do not pass a vehicle stopped for pedestrians</li>
              <li>Exercise due care to avoid colliding with any pedestrian</li>
            </ul>
          </div>

          <h4>Pedestrian Safety Tips</h4>
          <ul>
            <li>Scan crosswalks before entering intersections</li>
            <li>Watch for pedestrians in parking lots and driveways</li>
            <li>Be extra cautious near schools, parks, and residential areas</li>
            <li>At night, pedestrians may be difficult to see—slow down</li>
            <li>Children may act unpredictably—be prepared to stop</li>
          </ul>

          <h3>Bicyclists</h3>
          
          <p>Georgia law treats bicycles as vehicles with the same rights and responsibilities as motor vehicles. Cyclists are entitled to use the roadway.</p>

          <div class="law-box">
            <h4>📜 Georgia's Three-Foot Passing Law</h4>
            <p>When passing a bicycle, you must leave at least <strong>3 feet</strong> of space between your vehicle and the cyclist. If this isn't possible due to road conditions, you must wait for a safe opportunity to pass.</p>
          </div>

          <h4>Safely Sharing with Cyclists</h4>
          <ul>
            <li>Never honk suddenly—it can startle cyclists</li>
            <li>Check for cyclists before opening car doors (dooring crashes are serious)</li>
            <li>Be patient—don't try to squeeze past in tight spaces</li>
            <li>Watch for cyclists when turning right</li>
            <li>Assume cyclists may not see you approaching from behind</li>
          </ul>

          <h3>Motorcyclists</h3>
          
          <p>Motorcycles are harder to see and more vulnerable in crashes. In Georgia, motorcyclists are 27 times more likely to die in a crash than car occupants.</p>

          <h4>Motorcycle Safety Tips</h4>
          <ul>
            <li><strong>Look twice:</strong> Motorcycles are smaller and harder to see</li>
            <li><strong>Check blind spots carefully:</strong> A motorcycle can hide in your blind spot</li>
            <li><strong>Give extra following distance:</strong> Motorcycles can stop faster than cars</li>
            <li><strong>Anticipate movement:</strong> Wind and road conditions affect motorcycles more</li>
            <li><strong>Never share a lane:</strong> Motorcycles are entitled to the full lane</li>
          </ul>

          <div class="alert alert-warning">
            <h4>⚠️ Common Motorcycle Crash Causes</h4>
            <p>The most common cause of car-motorcycle crashes is a driver turning left in front of an oncoming motorcycle. The driver often says, "I didn't see the motorcycle." Look twice before turning!</p>
          </div>

          <h3>Large Trucks and Commercial Vehicles</h3>
          
          <p>Georgia's highways carry significant commercial truck traffic. Understanding how to safely share the road with large trucks is essential.</p>

          <h4>Understanding Truck Blind Spots (No-Zones)</h4>
          <p>Large trucks have significant blind spots where the driver cannot see you:</p>
          <ul>
            <li><strong>Front:</strong> 20 feet directly in front of the cab</li>
            <li><strong>Rear:</strong> 30 feet behind the trailer</li>
            <li><strong>Left side:</strong> One lane extending back from the cab</li>
            <li><strong>Right side:</strong> Two lanes extending back from the cab (largest blind spot)</li>
          </ul>

          <div class="highlight-box">
            <h4>💡 The General Rule</h4>
            <p>"If you can't see the truck's mirrors, the driver can't see you."</p>
          </div>

          <h4>Truck Safety Tips</h4>
          <ul>
            <li>Never cut in front of a truck—they need much more distance to stop</li>
            <li>Pass trucks on the left where visibility is better</li>
            <li>Don't linger alongside a truck—pass completely or fall back</li>
            <li>Give trucks extra room when they're turning—they swing wide</li>
            <li>Be patient—trucks accelerate slowly and may need extra time at intersections</li>
          </ul>

          <h3>Emergency Vehicles</h3>
          
          <div class="law-box">
            <h4>📜 Georgia's Move Over Law</h4>
            <p>When approaching a stopped emergency vehicle with lights flashing:</p>
            <ul>
              <li>On a multi-lane highway: Move over one lane away from the emergency vehicle</li>
              <li>If you cannot move over safely: Slow down to a reasonable speed</li>
              <li>This applies to: Police, fire, EMS, tow trucks, utility vehicles, HERO units</li>
            </ul>
            <p><strong>Penalty:</strong> Fine of up to $500 and 3 points on your license</p>
          </div>

          <h4>When Emergency Vehicles Are Approaching</h4>
          <ul>
            <li>Pull over to the right side of the road</li>
            <li>Stop completely if necessary</li>
            <li>Do not block intersections</li>
            <li>Wait until the emergency vehicle has passed before proceeding</li>
            <li>Do not follow within 500 feet of an emergency vehicle</li>
          </ul>

          <h3>School Buses</h3>
          
          <div class="law-box">
            <h4>📜 Georgia School Bus Law</h4>
            <p>When a school bus stops and extends its stop sign with flashing red lights:</p>
            <ul>
              <li><strong>All lanes of traffic in both directions must stop</strong></li>
              <li>Exception: Divided highways (physical barrier) - opposite direction traffic does not need to stop</li>
              <li>Remain stopped until the stop sign is retracted and lights stop flashing</li>
            </ul>
            <p><strong>Penalty:</strong> $300-$1,000 fine, 6 points on your license, possible 12-month suspension</p>
          </div>

          <div class="case-study">
            <h4>📋 Case Study: The Cost of Ignoring a School Bus</h4>
            <p>In 2019, a driver in Cherokee County, Georgia, drove past a stopped school bus with its stop sign extended. A 7-year-old child was struck while crossing the street to board the bus.</p>
            <p>The driver was charged with reckless driving and multiple traffic violations. She faced criminal prosecution, civil liability, and the lifetime knowledge that her impatience nearly killed a child.</p>
          </div>

          <div class="reflection-question">
            <h4>🤔 Reflection Question</h4>
            <p>Think about your last encounter with a cyclist, motorcyclist, or large truck. Did you give them adequate space and consideration? What could you do differently to share the road more safely?</p>
          </div>
        `,
        quizQuestions: [
          {
            questionText: 'How much space must you leave when passing a bicyclist in Georgia?',
            options: ['1 foot', '2 feet', '3 feet', '4 feet'],
            correctAnswer: '3 feet',
            explanation: 'Georgia law requires drivers to leave at least 3 feet of space when passing a bicyclist.'
          },
          {
            questionText: 'What must you do when a school bus stops with its stop sign extended and lights flashing?',
            options: ['Slow to 10 mph', 'Stop only if children are visible', 'Stop in all lanes, both directions', 'Stop only if you\'re behind the bus'],
            correctAnswer: 'Stop in all lanes, both directions',
            explanation: 'When a school bus displays its stop sign with flashing red lights, all traffic in both directions must stop (except on divided highways).'
          },
          {
            questionText: 'Georgia\'s Move Over Law applies to which of the following?',
            options: ['Police vehicles only', 'Fire trucks only', 'Emergency vehicles, tow trucks, and utility vehicles', 'Only vehicles with sirens'],
            correctAnswer: 'Emergency vehicles, tow trucks, and utility vehicles',
            explanation: 'Georgia\'s Move Over Law applies to all emergency vehicles, as well as tow trucks, utility vehicles, and HERO units with flashing lights.'
          },
          {
            questionText: 'Which side of a large truck has the largest blind spot?',
            options: ['Front', 'Left side', 'Right side', 'Rear'],
            correctAnswer: 'Right side',
            explanation: 'The right side of a large truck has the largest blind spot, extending approximately two lanes back from the cab.'
          }
        ]
      },

      // MODULE 6: Weather, Road Conditions & Special Situations
      {
        title: 'Module 6: Weather, Road Conditions & Special Situations',
        description: 'Handling Georgia\'s weather challenges and navigating work zones, school zones, and highways',
        estimatedMinutes: 40,
        content: `
          <h2>Driving in Challenging Conditions</h2>
          
          <p>Georgia drivers face a variety of weather and road conditions throughout the year. From sudden thunderstorms to rare ice events, knowing how to adapt your driving is crucial for safety.</p>

          <h3>Rain and Wet Roads</h3>
          
          <p>Georgia receives an average of 50 inches of rain annually, and many areas experience afternoon thunderstorms regularly during summer months.</p>

          <h4>Driving in Rain</h4>
          <ul>
            <li><strong>Slow down:</strong> Reduce speed by at least 1/3 in rain</li>
            <li><strong>Increase following distance:</strong> To at least 5-6 seconds</li>
            <li><strong>Use headlights:</strong> Georgia law requires headlights when wipers are in use</li>
            <li><strong>Avoid hard braking:</strong> Brake earlier and more gently</li>
            <li><strong>Watch for hydroplaning:</strong> Reduce speed immediately if you feel loss of traction</li>
          </ul>

          <div class="alert alert-danger">
            <h4>⚠️ Hydroplaning</h4>
            <p>Hydroplaning occurs when tires ride on top of water rather than the road surface. It typically occurs at speeds above 35 mph with as little as 1/12 inch of water on the road.</p>
            <p><strong>If you hydroplane:</strong></p>
            <ul>
              <li>Do NOT brake suddenly or turn sharply</li>
              <li>Ease off the gas pedal</li>
              <li>Keep the steering wheel straight</li>
              <li>Wait for traction to return, then adjust course</li>
            </ul>
          </div>

          <h3>Fog</h3>
          
          <p>Dense fog is common in Georgia, especially in areas near rivers, lakes, and in valleys during early morning hours.</p>

          <h4>Driving in Fog</h4>
          <ul>
            <li><strong>Use low-beam headlights:</strong> High beams reflect off fog and reduce visibility</li>
            <li><strong>Use fog lights</strong> if your vehicle has them</li>
            <li><strong>Slow down significantly:</strong> Speed should match visibility</li>
            <li><strong>Increase following distance:</strong> Leave extra room</li>
            <li><strong>Use the right edge of the road</strong> as a guide if needed</li>
            <li><strong>Turn off cruise control:</strong> Stay actively engaged</li>
            <li><strong>If visibility is too low:</strong> Pull off the road completely and wait</li>
          </ul>

          <h3>Ice and Snow</h3>
          
          <p>While rare, ice and snow do occur in Georgia, particularly in north Georgia and during occasional winter storms. Many Georgia drivers have little experience with these conditions.</p>

          <div class="alert alert-danger">
            <h4>⚠️ Black Ice Warning</h4>
            <p>Black ice is a thin, transparent layer of ice that looks like wet pavement. It's especially common on bridges and overpasses, shaded areas, and areas near water.</p>
          </div>

          <h4>Driving on Ice or Snow</h4>
          <ul>
            <li><strong>Reduce speed dramatically:</strong> 10 mph may be too fast</li>
            <li><strong>Avoid stopping on hills:</strong> You may not be able to start again</li>
            <li><strong>Accelerate and decelerate slowly:</strong> Gentle inputs only</li>
            <li><strong>Increase following distance:</strong> To 10+ seconds</li>
            <li><strong>Avoid bridges and overpasses:</strong> They freeze first</li>
            <li><strong>If you skid:</strong> Steer in the direction you want to go, ease off brakes</li>
            <li><strong>Best advice:</strong> If possible, stay home until roads are treated</li>
          </ul>

          <h3>Work Zones</h3>
          
          <p>Georgia has numerous road construction projects throughout the state. Work zones present special hazards and require extra caution.</p>

          <div class="law-box">
            <h4>📜 Georgia Work Zone Laws</h4>
            <ul>
              <li>Fines are <strong>doubled</strong> in work zones</li>
              <li>Must obey reduced speed limits when posted</li>
              <li>Must follow directions of flaggers and construction workers</li>
              <li>Cell phone use rules are especially enforced in work zones</li>
            </ul>
          </div>

          <h4>Work Zone Safety Tips</h4>
          <ul>
            <li>Slow down as soon as you see work zone signs</li>
            <li>Stay alert for workers, equipment, and changing traffic patterns</li>
            <li>Merge early—don't wait until the last moment</li>
            <li>Expect the unexpected—cones, barriers, and lane changes</li>
            <li>Maintain extra following distance</li>
            <li>Be patient—delays are temporary, crashes are not</li>
          </ul>

          <h3>School Zones</h3>
          
          <p>School zones require special attention and reduced speeds during certain hours.</p>

          <div class="law-box">
            <h4>📜 Georgia School Zone Laws</h4>
            <ul>
              <li>Must reduce to posted school zone speed (typically 25 mph)</li>
              <li>School zone times are posted on signs</li>
              <li>Fines are increased in school zones</li>
              <li>Cell phones must be completely hands-free in school zones</li>
            </ul>
          </div>

          <h4>School Zone Safety</h4>
          <ul>
            <li>Watch for children crossing streets</li>
            <li>Be prepared for sudden stops</li>
            <li>Watch for buses loading and unloading</li>
            <li>Look out for parents dropping off or picking up children</li>
            <li>Be extra careful in parking lots near schools</li>
          </ul>

          <h3>Highway and Interstate Driving</h3>
          
          <p>Georgia's interstate system (I-75, I-85, I-20, I-285, etc.) requires specific skills for safe navigation.</p>

          <h4>Entering the Highway (Merging)</h4>
          <ul>
            <li>Use the acceleration lane to match highway speed</li>
            <li>Check mirrors and blind spots</li>
            <li>Signal your intention to merge</li>
            <li>Merge smoothly at highway speed</li>
            <li>Never stop on an entrance ramp unless absolutely necessary</li>
          </ul>

          <h4>Lane Position and Passing</h4>
          <ul>
            <li>Keep right except to pass (Georgia's "Slowpoke Law")</li>
            <li>Pass on the left only</li>
            <li>Return to the right lane after passing</li>
            <li>Maintain proper following distance</li>
          </ul>

          <h4>Exiting the Highway</h4>
          <ul>
            <li>Plan your exit in advance</li>
            <li>Move to the exit lane early</li>
            <li>Signal your intention</li>
            <li>Begin slowing in the deceleration lane, not on the highway</li>
          </ul>

          <div class="reflection-question">
            <h4>🤔 Reflection Question</h4>
            <p>Think about your most challenging driving experience in bad weather. What did you do well? What could you have done differently to be safer?</p>
          </div>
        `,
        quizQuestions: [
          {
            questionText: 'When driving in rain, you should:',
            options: ['Use high-beam headlights', 'Increase following distance to 5-6 seconds', 'Drive at normal speed', 'Use cruise control'],
            correctAnswer: 'Increase following distance to 5-6 seconds',
            explanation: 'In rain, you should increase following distance significantly and avoid cruise control. Use low-beam headlights, not high beams.'
          },
          {
            questionText: 'If your vehicle begins to hydroplane, you should:',
            options: ['Brake hard', 'Accelerate to push through the water', 'Ease off the gas and keep steering straight', 'Turn sharply to regain control'],
            correctAnswer: 'Ease off the gas and keep steering straight',
            explanation: 'If you hydroplane, ease off the gas, don\'t brake suddenly, and keep the steering wheel straight until you regain traction.'
          },
          {
            questionText: 'In Georgia work zones, fines are:',
            options: ['The same as regular zones', 'Doubled', 'Tripled', 'Reduced'],
            correctAnswer: 'Doubled',
            explanation: 'Fines are doubled in Georgia work zones to emphasize the importance of worker and driver safety.'
          },
          {
            questionText: 'Georgia\'s "Slowpoke Law" requires drivers to:',
            options: ['Drive at least 10 mph over the limit', 'Keep right except to pass', 'Always use the left lane', 'Never change lanes'],
            correctAnswer: 'Keep right except to pass',
            explanation: 'Georgia\'s "Slowpoke Law" requires drivers to keep right except when passing. Driving slowly in the left lane impedes traffic flow and can result in a citation.'
          }
        ]
      }
    ],
    finalExamQuestions: [
      {
        questionText: 'How many points within 24 months will result in a Georgia license suspension?',
        options: ['10 points', '12 points', '15 points', '18 points'],
        correctAnswer: '15 points',
        explanation: 'Accumulating 15 or more points within 24 months results in license suspension in Georgia.'
      },
      {
        questionText: 'What is the Super Speeder threshold on Georgia two-lane roads?',
        options: ['65 mph', '70 mph', '75 mph', '80 mph'],
        correctAnswer: '75 mph',
        explanation: 'You become a Super Speeder on two-lane roads if convicted of driving 75 mph or faster.'
      },
      {
        questionText: 'Georgia\'s Hands-Free Law allows you to:',
        options: ['Hold your phone briefly', 'Use voice commands and hands-free technology', 'Text at red lights', 'Watch GPS directions while holding phone'],
        correctAnswer: 'Use voice commands and hands-free technology',
        explanation: 'The law allows hands-free technology and voice commands but prohibits holding the phone at any time while driving.'
      },
      {
        questionText: 'What does SIPDE stand for?',
        options: ['Stop, Inspect, Proceed, Drive, Exit', 'Search, Identify, Predict, Decide, Execute', 'See, Indicate, Pass, Drive, Enter', 'Scan, Interpret, Proceed, Defend, Exit'],
        correctAnswer: 'Search, Identify, Predict, Decide, Execute',
        explanation: 'SIPDE is a defensive driving method: Search, Identify, Predict, Decide, Execute.'
      },
      {
        questionText: 'The three-second rule helps you maintain:',
        options: ['Proper speed', 'Safe following distance', 'Correct lane position', 'Proper mirror usage'],
        correctAnswer: 'Safe following distance',
        explanation: 'The three-second rule is used to maintain a safe following distance between your vehicle and the one ahead.'
      },
      {
        questionText: 'Which type of distraction does texting while driving involve?',
        options: ['Visual only', 'Manual only', 'Cognitive only', 'All three types'],
        correctAnswer: 'All three types',
        explanation: 'Texting involves visual, manual, and cognitive distractions simultaneously, making it extremely dangerous.'
      },
      {
        questionText: 'What is the legal BAC limit for drivers 21 and over in Georgia?',
        options: ['0.02%', '0.04%', '0.08%', '0.10%'],
        correctAnswer: '0.08%',
        explanation: 'The legal BAC limit for drivers 21 and over in Georgia is 0.08%.'
      },
      {
        questionText: 'Under Georgia\'s Implied Consent Law, refusing a chemical test results in:',
        options: ['No penalty', '90-day suspension', '1-year suspension', '30-day suspension'],
        correctAnswer: '1-year suspension',
        explanation: 'Refusing a chemical test under Georgia\'s Implied Consent Law results in an automatic 1-year license suspension.'
      },
      {
        questionText: 'How much space must you leave when passing a bicyclist in Georgia?',
        options: ['1 foot', '2 feet', '3 feet', '4 feet'],
        correctAnswer: '3 feet',
        explanation: 'Georgia law requires at least 3 feet of clearance when passing a bicyclist.'
      },
      {
        questionText: 'Georgia\'s Move Over Law applies when passing:',
        options: ['Only police vehicles', 'Only fire trucks', 'Any stopped emergency vehicle with flashing lights', 'Only ambulances'],
        correctAnswer: 'Any stopped emergency vehicle with flashing lights',
        explanation: 'The Move Over Law applies to all emergency vehicles, tow trucks, and utility vehicles with flashing lights.'
      },
      {
        questionText: 'When a school bus stops with its stop sign extended, you must:',
        options: ['Slow to 25 mph', 'Stop only if behind the bus', 'Stop in all lanes, both directions', 'Proceed with caution'],
        correctAnswer: 'Stop in all lanes, both directions',
        explanation: 'All traffic in both directions must stop when a school bus displays its stop sign (except on divided highways).'
      },
      {
        questionText: 'If you begin to hydroplane, you should:',
        options: ['Brake hard', 'Accelerate', 'Ease off gas and steer straight', 'Turn the wheel sharply'],
        correctAnswer: 'Ease off gas and steer straight',
        explanation: 'When hydroplaning, ease off the gas, don\'t brake suddenly, and keep the steering wheel straight until traction returns.'
      },
      {
        questionText: 'In Georgia work zones, traffic fines are:',
        options: ['Normal', 'Doubled', 'Tripled', 'Waived'],
        correctAnswer: 'Doubled',
        explanation: 'Fines are doubled in Georgia work zones to protect workers and encourage driver caution.'
      },
      {
        questionText: 'What is the minimum jail time for a first DUI offense in Georgia?',
        options: ['No jail time', '24 hours', '10 days', '30 days'],
        correctAnswer: '24 hours',
        explanation: 'A first DUI offense in Georgia carries a minimum of 24 hours in jail.'
      },
      {
        questionText: 'Which side of a large truck has the largest blind spot?',
        options: ['Front', 'Left side', 'Right side', 'Rear'],
        correctAnswer: 'Right side',
        explanation: 'The right side of a large truck has the largest blind spot, extending about two lanes back.'
      },
      {
        questionText: 'When driving in fog, you should use:',
        options: ['High-beam headlights', 'Low-beam headlights', 'Parking lights only', 'No lights'],
        correctAnswer: 'Low-beam headlights',
        explanation: 'Use low-beam headlights in fog. High beams reflect off the fog and reduce visibility.'
      },
      {
        questionText: 'How far ahead should you scan when driving on a highway?',
        options: ['5-7 seconds', '8-10 seconds', '12-15 seconds', '20+ seconds'],
        correctAnswer: '12-15 seconds',
        explanation: 'On highways, scan 12-15 seconds ahead (about 1/4 mile) to identify hazards early.'
      },
      {
        questionText: 'The penalty for a first-offense Hands-Free Law violation is:',
        options: ['$25 and 0 points', '$50 and 1 point', '$100 and 2 points', '$150 and 3 points'],
        correctAnswer: '$50 and 1 point',
        explanation: 'A first offense of Georgia\'s Hands-Free Law carries a $50 fine plus court fees and 1 point.'
      },
      {
        questionText: 'Joshua\'s Law requires drivers under 18 to complete how many hours of supervised driving?',
        options: ['20 hours', '30 hours', '40 hours', '50 hours'],
        correctAnswer: '40 hours',
        explanation: 'Joshua\'s Law requires 40 hours of supervised driving for drivers under 18, with at least 6 hours at night.'
      },
      {
        questionText: 'How often can you take a defensive driving course for point reduction in Georgia?',
        options: ['Once ever', 'Once per year', 'Once every 5 years', 'Unlimited'],
        correctAnswer: 'Once every 5 years',
        explanation: 'You can take a DDS-approved defensive driving course for point reduction once every 5 years in Georgia.'
      }
    ]
  }
};

export default georgiaCourseData;
