// ===========================
// Florida Traffic School - EXPANDED Curriculum Data
// Comprehensive content meeting 25-60 minute reading requirements per module
// Includes: Real-world examples, Florida statistics, case studies, and reflection questions
// ===========================

const floridaCourseDataExpanded = {
  // ===========================
  // 4-Hour Basic Driver Improvement Course (BDI)
  // Total reading time: ~4 hours across all modules
  // ===========================
  course4Hour: {
    name: '4-Hour Basic Driver Improvement (BDI)',
    slug: 'florida-4-hour-bdi',
    description: 'Perfect for first-time offenders looking to dismiss a minor traffic violation. This Florida state-approved course covers distracted driving, emergency situations, defensive driving techniques, and road safety fundamentals.',
    durationHours: 4,
    price: 18.50,
    modules: [
      // =========================================
      // MODULE 1: Introduction & Course Overview
      // Estimated Reading Time: 25-30 minutes
      // =========================================
      {
        title: 'Module 1: Introduction & Course Overview',
        description: 'Welcome to Quick Pass Traffic School - Course objectives, Florida driving statistics, and the importance of safe driving',
        estimatedMinutes: 30,
        content: `
          <h2>Welcome to Quick Pass Traffic School</h2>
          
          <p>Welcome to Quick Pass Traffic School's 4-Hour Basic Driver Improvement Course. This Florida Department of Highway Safety and Motor Vehicles (FLHSMV) approved program is designed to provide you with the critical knowledge and skills needed to operate vehicles safely and responsibly on Florida's diverse and busy roadways.</p>
          
          <p>Whether you're here as part of a court requirement, to dismiss a traffic ticket, to prevent points from being added to your driving record, or simply because you want to become a safer driver, this course represents an important investment in your safety and the safety of everyone who shares the road with you.</p>

          <div class="highlight-box">
            <h4>🎯 Course Objectives</h4>
            <p>By the end of this course, you will be able to:</p>
            <ul>
              <li>Identify and eliminate common driving distractions</li>
              <li>Respond safely and effectively to emergency situations</li>
              <li>Apply defensive driving techniques to anticipate and avoid hazards</li>
              <li>Understand and comply with Florida traffic laws and regulations</li>
              <li>Recognize road signs, signals, and pavement markings</li>
              <li>Share the road safely with pedestrians, cyclists, and other vehicles</li>
            </ul>
          </div>

          <h3>Why Driver Improvement Matters</h3>
          
          <p>Every year, thousands of preventable accidents occur on Florida's roads. According to the Florida Department of Highway Safety and Motor Vehicles, in 2024 alone, Florida recorded:</p>
          
          <div class="statistics-box">
            <h4>📊 Florida Driving Statistics</h4>
            <ul>
              <li><strong>401,867</strong> total traffic crashes</li>
              <li><strong>3,443</strong> fatalities from traffic crashes</li>
              <li><strong>252,481</strong> injuries from traffic crashes</li>
              <li><strong>Distracted driving</strong> was a contributing factor in over 50,000 crashes</li>
              <li><strong>Speeding</strong> contributed to approximately 35% of fatal crashes</li>
              <li><strong>Impaired driving</strong> caused over 5,000 serious injury crashes</li>
            </ul>
          </div>

          <p>Behind each of these statistics is a real person—a parent, child, friend, or neighbor whose life was forever changed. The purpose of this course is to help ensure that you don't become one of these statistics and that you don't contribute to someone else becoming one.</p>

          <h3>The True Cost of Unsafe Driving</h3>
          
          <p>Unsafe driving doesn't just risk lives—it carries significant financial and personal consequences:</p>
          
          <h4>Financial Costs</h4>
          <ul>
            <li><strong>Traffic tickets:</strong> Fines range from $100 to $500+ depending on the violation</li>
            <li><strong>Points on your license:</strong> Can lead to license suspension after accumulating 12 points in 12 months</li>
            <li><strong>Insurance increases:</strong> A single ticket can raise your premium by 20-40% for 3-5 years</li>
            <li><strong>Court costs:</strong> Additional fees of $50-$200 per violation</li>
            <li><strong>Traffic school fees:</strong> $25-$100 to take a course</li>
            <li><strong>Lost wages:</strong> From court appearances, license suspension, or injury</li>
          </ul>

          <h4>Personal Costs</h4>
          <ul>
            <li>Physical injury or permanent disability</li>
            <li>Emotional trauma and psychological impact</li>
            <li>Loss of driving privileges affecting employment</li>
            <li>Criminal record for serious violations</li>
            <li>Strained relationships with family and friends</li>
            <li>The immeasurable cost of taking or losing a life</li>
          </ul>

          <div class="case-study">
            <h4>📋 Real-World Case Study: The Cost of One Bad Decision</h4>
            <p><strong>Maria's Story (Tampa, FL):</strong></p>
            <p>Maria was running late for work and decided to check a text message while driving on I-275. In the three seconds her eyes were off the road, traffic ahead came to a sudden stop. Maria rear-ended another vehicle at 45 mph.</p>
            <p><strong>The consequences:</strong></p>
            <ul>
              <li>The other driver suffered a neck injury requiring months of physical therapy</li>
              <li>Maria received a $250 ticket for careless driving (4 points on her license)</li>
              <li>Her insurance premium increased by $1,200 per year</li>
              <li>She faced a civil lawsuit for medical expenses totaling $45,000</li>
              <li>Her employer terminated her due to company policy on at-fault accidents</li>
              <li>Total cost to Maria over 5 years: approximately $65,000</li>
            </ul>
            <p><em>All because of a 3-second glance at a phone.</em></p>
          </div>

          <h3>Florida's Driving Environment: Unique Challenges</h3>
          
          <p>Florida presents driving challenges unlike any other state. Understanding these unique factors is essential for staying safe on our roads:</p>

          <h4>Weather Conditions</h4>
          <p>Florida's subtropical climate creates hazardous driving conditions throughout the year:</p>
          <ul>
            <li><strong>Afternoon thunderstorms:</strong> From May through October, sudden heavy rain reduces visibility to near-zero and creates hydroplaning conditions</li>
            <li><strong>Hurricanes:</strong> Evacuation traffic, debris, and flooded roads during storm season</li>
            <li><strong>Fog:</strong> Dense morning fog, especially in Central Florida and near water bodies</li>
            <li><strong>Sun glare:</strong> Intense sunlight causes severe glare during sunrise and sunset</li>
          </ul>

          <h4>Traffic Volume and Diversity</h4>
          <ul>
            <li><strong>Tourism:</strong> Over 140 million visitors annually unfamiliar with local roads</li>
            <li><strong>Seasonal residents:</strong> "Snowbirds" from northern states with different driving habits</li>
            <li><strong>High population growth:</strong> Rapid development creates changing road conditions</li>
            <li><strong>Diverse driver ages:</strong> Large populations of both young and elderly drivers</li>
            <li><strong>International drivers:</strong> Visitors from countries with different traffic laws</li>
          </ul>

          <h4>Road Characteristics</h4>
          <ul>
            <li><strong>High-speed highways:</strong> I-95, I-75, I-4, Florida's Turnpike with speeds up to 70 mph</li>
            <li><strong>Busy intersections:</strong> Complex multi-lane intersections in urban areas</li>
            <li><strong>Rural roads:</strong> Two-lane highways with limited lighting and wildlife</li>
            <li><strong>Bridge crossings:</strong> Long bridges subject to high winds and emergency closures</li>
            <li><strong>School zones:</strong> Heavily enforced reduced speed areas</li>
          </ul>

          <div class="reflection-question">
            <h4>🤔 Reflection Question</h4>
            <p>Think about your typical daily drive. What are the three biggest hazards you regularly encounter? How might you adjust your driving to better handle these challenges?</p>
          </div>

          <h3>Florida Highway Safety and Motor Vehicles (FLHSMV) Regulations</h3>
          
          <p>The FLHSMV is responsible for establishing and enforcing rules to keep Florida's roads safe. Key aspects of their regulatory framework include:</p>

          <h4>The Points System</h4>
          <p>Florida uses a point system to track traffic violations. Points remain on your record for at least three years:</p>
          <table class="info-table">
            <tr><th>Violation</th><th>Points</th></tr>
            <tr><td>Speeding (1-15 mph over limit)</td><td>3 points</td></tr>
            <tr><td>Speeding (16+ mph over limit)</td><td>4 points</td></tr>
            <tr><td>Running a stop sign or red light</td><td>4 points</td></tr>
            <tr><td>Improper passing</td><td>4 points</td></tr>
            <tr><td>Following too closely</td><td>3 points</td></tr>
            <tr><td>Failure to yield right-of-way</td><td>3 points</td></tr>
            <tr><td>Reckless driving</td><td>4 points</td></tr>
            <tr><td>Leaving the scene of a crash</td><td>6 points</td></tr>
            <tr><td>Passing a stopped school bus</td><td>4 points</td></tr>
          </table>

          <h4>Suspension Thresholds</h4>
          <ul>
            <li><strong>12 points within 12 months:</strong> 30-day suspension</li>
            <li><strong>18 points within 18 months:</strong> 3-month suspension</li>
            <li><strong>24 points within 36 months:</strong> 1-year suspension</li>
          </ul>

          <div class="alert alert-info">
            <h4>💡 Good News About This Course</h4>
            <p>By completing this Basic Driver Improvement course, you may be eligible to:</p>
            <ul>
              <li>Have a traffic ticket dismissed (court approval required)</li>
              <li>Prevent points from being added to your driving record</li>
              <li>Receive a discount on your auto insurance (check with your provider)</li>
            </ul>
            <p>You can elect to take this course up to 5 times in your lifetime for point prevention purposes, but no more than once per 12-month period.</p>
          </div>

          <h3>Your Commitment to Safety</h3>
          
          <p>As you progress through this course, we ask you to make a personal commitment to safe driving. This isn't just about passing a test or checking a box—it's about developing habits and attitudes that will protect you and others for the rest of your driving life.</p>

          <p>Consider signing this personal pledge:</p>
          
          <div class="pledge-box">
            <h4>🤝 My Safe Driving Pledge</h4>
            <p><em>I commit to:</em></p>
            <ul>
              <li>Keeping my full attention on the road while driving</li>
              <li>Never texting or using my phone while behind the wheel</li>
              <li>Always wearing my seatbelt and ensuring my passengers do the same</li>
              <li>Never driving under the influence of alcohol or drugs</li>
              <li>Obeying all traffic laws and posted speed limits</li>
              <li>Being patient and courteous to other road users</li>
              <li>Adjusting my driving for weather and road conditions</li>
              <li>Being an example of safe driving for others</li>
            </ul>
          </div>

          <h3>Course Structure and Navigation</h3>
          
          <p>This 4-hour course is divided into eight modules, each focusing on a critical aspect of safe driving:</p>
          
          <ol>
            <li><strong>Introduction & Course Overview</strong> (This Module) - Understanding the importance of driver improvement</li>
            <li><strong>Distracted Driving</strong> - The dangers of divided attention and Florida law</li>
            <li><strong>Emergency Situations</strong> - How to handle vehicle breakdowns and road emergencies</li>
            <li><strong>Emergency Vehicles & Move Over Law</strong> - Responding to emergency responders</li>
            <li><strong>Defensive Driving Techniques</strong> - Proactive strategies for hazard avoidance</li>
            <li><strong>Road Signs and Signals</strong> - Understanding traffic control devices</li>
            <li><strong>Sharing the Road</strong> - Safely interacting with all road users</li>
            <li><strong>Certification & Final Assessment</strong> - Course completion and testing</li>
          </ol>

          <p>Each module contains:</p>
          <ul>
            <li>Comprehensive educational content</li>
            <li>Real-world examples and case studies</li>
            <li>Florida-specific information and statistics</li>
            <li>Reflection questions to reinforce learning</li>
            <li>Knowledge check quizzes</li>
          </ul>

          <div class="alert alert-success">
            <h4>✅ Module 1 Complete</h4>
            <p>You've completed the Introduction module. In the next module, we'll explore one of the most dangerous behaviors on the road today: Distracted Driving. You'll learn about the three types of distractions, Florida's laws regarding phone use, and strategies to stay focused behind the wheel.</p>
          </div>
        `,
        quizQuestions: [
          {
            questionText: 'According to Florida law, how many points within 12 months will result in a 30-day license suspension?',
            options: ['6 points', '12 points', '18 points', '24 points'],
            correctAnswer: '12 points',
            explanation: 'Accumulating 12 points within 12 months results in a 30-day suspension of your Florida driver\'s license.'
          },
          {
            questionText: 'Which of the following is NOT a unique driving challenge in Florida?',
            options: ['Afternoon thunderstorms', 'Tourist traffic', 'Snow and ice', 'Sun glare'],
            correctAnswer: 'Snow and ice',
            explanation: 'Florida rarely experiences snow and ice. The state\'s unique challenges include thunderstorms, tourist traffic, fog, and intense sun glare.'
          },
          {
            questionText: 'How many times in your lifetime can you elect to take a Basic Driver Improvement course for point prevention?',
            options: ['Unlimited times', '3 times', '5 times', '1 time only'],
            correctAnswer: '5 times',
            explanation: 'Florida law allows you to take the BDI course for point prevention up to 5 times in your lifetime, but no more than once per 12-month period.'
          },
          {
            questionText: 'True or False: Completing this course can help you receive a discount on your auto insurance.',
            questionType: 'true_false',
            options: ['True', 'False'],
            correctAnswer: 'True',
            explanation: 'Many insurance companies offer discounts to drivers who complete approved driver improvement courses. Check with your provider for specific discounts.'
          }
        ]
      },

      // =========================================
      // MODULE 2: Distracted Driving
      // Estimated Reading Time: 35-40 minutes
      // =========================================
      {
        title: 'Module 2: Distracted Driving',
        description: 'Understanding the dangers of distracted driving, Florida law, and prevention strategies',
        estimatedMinutes: 40,
        content: `
          <h2>Distracted Driving: The Silent Killer on Our Roads</h2>
          
          <p>Distracted driving has become one of the most dangerous epidemics on American roads. According to the National Highway Traffic Safety Administration (NHTSA), distracted driving claimed 3,522 lives in a single recent year—that's nearly 10 people killed every single day because someone wasn't paying attention to the road.</p>

          <p>In Florida specifically, distracted driving contributes to over 50,000 crashes annually, causing thousands of injuries and hundreds of deaths. Yet despite these staggering numbers, many drivers continue to engage in distracting behaviors, often believing "it won't happen to me."</p>

          <div class="statistics-box">
            <h4>📊 Distracted Driving by the Numbers</h4>
            <ul>
              <li><strong>9%</strong> of all fatal crashes involve distracted driving</li>
              <li><strong>5 seconds</strong> is the average time eyes are off the road while texting—at 55 mph, that's the length of a football field</li>
              <li><strong>1 in 4</strong> car accidents in the United States are caused by texting and driving</li>
              <li><strong>21-24 year olds</strong> have the highest rates of distracted driving</li>
              <li>Texting while driving makes you <strong>23 times more likely</strong> to crash</li>
              <li>Using a cell phone while driving reduces brain activity associated with driving by <strong>37%</strong></li>
            </ul>
          </div>

          <h3>Understanding the Three Types of Distractions</h3>
          
          <p>To effectively combat distracted driving, we need to understand that distractions fall into three distinct categories. Many activities, particularly cell phone use, involve all three types simultaneously, making them exceptionally dangerous.</p>

          <h4>1. Visual Distractions</h4>
          <p><strong>Definition:</strong> Anything that takes your eyes off the road.</p>
          
          <p>Your eyes are your primary tool for safe driving. They allow you to see hazards, read signs, monitor traffic, and navigate safely. When you look away from the road, you are essentially driving blind.</p>
          
          <p><strong>Common visual distractions include:</strong></p>
          <ul>
            <li>Looking at a cell phone screen</li>
            <li>Reading text messages, emails, or social media</li>
            <li>Looking at a GPS navigation system</li>
            <li>Checking on children or passengers in the back seat</li>
            <li>Looking at an accident or activity on the side of the road ("rubbernecking")</li>
            <li>Searching for items in the vehicle (sunglasses, wallet, etc.)</li>
            <li>Looking at billboards or scenery</li>
            <li>Adjusting mirrors, climate controls, or entertainment systems</li>
          </ul>

          <div class="alert alert-danger">
            <h4>⚠️ Critical Fact</h4>
            <p>At 55 mph, looking at your phone for just 5 seconds means you travel the length of a football field (100 yards) completely blind to the road ahead. In that distance, traffic can stop, pedestrians can step into the road, or road conditions can change dramatically.</p>
          </div>

          <h4>2. Manual Distractions</h4>
          <p><strong>Definition:</strong> Anything that takes your hands off the steering wheel.</p>
          
          <p>Proper vehicle control requires at least one hand on the steering wheel at all times, and ideally both hands. When your hands leave the wheel, your ability to steer around hazards, maintain lane position, or react to emergencies is severely compromised.</p>
          
          <p><strong>Common manual distractions include:</strong></p>
          <ul>
            <li>Holding or manipulating a cell phone</li>
            <li>Eating or drinking</li>
            <li>Smoking or vaping</li>
            <li>Personal grooming (applying makeup, shaving, fixing hair)</li>
            <li>Reaching for objects in the vehicle</li>
            <li>Adjusting controls on the dashboard</li>
            <li>Handling pets</li>
            <li>Changing radio stations or adjusting music</li>
          </ul>

          <h4>3. Cognitive Distractions</h4>
          <p><strong>Definition:</strong> Anything that takes your mind off the task of driving.</p>
          
          <p>This is perhaps the most insidious type of distraction because it's invisible. You can have both hands on the wheel and your eyes on the road, yet still be dangerously distracted if your mind is elsewhere. Studies show that cognitive distraction significantly increases reaction time and reduces awareness of surroundings.</p>
          
          <p><strong>Common cognitive distractions include:</strong></p>
          <ul>
            <li>Having an emotional or stressful conversation (phone or in-person)</li>
            <li>Thinking about work problems or personal issues</li>
            <li>Daydreaming or "zoning out"</li>
            <li>Being upset, angry, or emotionally distressed</li>
            <li>Planning activities or mentally organizing your day</li>
            <li>Listening to engaging audiobooks or podcasts</li>
            <li>Complex conversations with passengers</li>
            <li>Being under stress or time pressure</li>
          </ul>

          <div class="case-study">
            <h4>📋 Real-World Case Study: Cognitive Distraction</h4>
            <p><strong>The "Invisible" Crash (Orlando, FL):</strong></p>
            <p>David was driving home after receiving difficult news about a family member's health. His hands were on the wheel, his eyes were on the road, but his mind was a thousand miles away, thinking about his mother's diagnosis.</p>
            <p>A motorcyclist entered his lane from the right. Under normal circumstances, David would have seen the motorcycle easily and slowed down. But with his mind preoccupied, he never registered the motorcyclist's presence until the collision occurred.</p>
            <p><strong>The result:</strong> The motorcyclist suffered a broken leg and arm. David faced careless driving charges, a lawsuit, and overwhelming guilt—all because his mind wasn't on driving.</p>
            <p><em>This case illustrates that you don't need to be holding a phone to be dangerously distracted.</em></p>
          </div>

          <h3>The Triple Threat: Why Texting is Especially Dangerous</h3>
          
          <p>Cell phone use while driving, particularly texting, is considered the most dangerous distraction because it combines all three types of distraction simultaneously:</p>
          
          <ul>
            <li><strong>Visual:</strong> You must look at the phone screen to read or type messages</li>
            <li><strong>Manual:</strong> You must hold the phone and use your fingers to type</li>
            <li><strong>Cognitive:</strong> You must think about the content of the message and how to respond</li>
          </ul>

          <p>Research from the Virginia Tech Transportation Institute found that texting while driving increases the risk of a crash by up to 23 times compared to non-distracted driving. No other common activity behind the wheel carries such extreme risk.</p>

          <h3>Florida Law on Distracted Driving</h3>
          
          <p>Florida has enacted strict laws to combat distracted driving, and enforcement has increased significantly in recent years.</p>

          <h4>Florida Statutes Section 316.305: Wireless Communications While Driving Law</h4>
          
          <p>This law, commonly known as the "Texting While Driving" law, makes it illegal to operate a motor vehicle while manually typing or entering multiple letters, numbers, symbols, or other characters into a wireless communications device.</p>

          <div class="law-box">
            <h4>📜 What the Law Prohibits</h4>
            <ul>
              <li>Texting while driving (even at red lights or stop signs while in traffic)</li>
              <li>Emailing while driving</li>
              <li>Typing on social media while driving</li>
              <li>Manually entering data into any wireless device</li>
            </ul>
            
            <h4>📜 School Zone and Work Zone Requirements</h4>
            <p>In designated school zones and active work zones, Florida law goes further:</p>
            <ul>
              <li>Drivers must use <strong>hands-free mode only</strong> for any cell phone use</li>
              <li>This means you cannot hold the phone at all—even for calls</li>
              <li>This is a <strong>primary offense</strong>—police can pull you over solely for this violation</li>
            </ul>
          </div>

          <h4>Penalties for Violations</h4>
          <table class="info-table">
            <tr><th>Violation</th><th>Penalty</th><th>Points</th></tr>
            <tr><td>First offense (texting)</td><td>$30 fine + court costs (total ~$100-$130)</td><td>0 points</td></tr>
            <tr><td>Second offense within 5 years</td><td>$60 fine + court costs (total ~$150-$180)</td><td>3 points</td></tr>
            <tr><td>School zone violation</td><td>$60 fine + court costs</td><td>3 points</td></tr>
            <tr><td>Work zone violation</td><td>$60 fine + court costs</td><td>3 points</td></tr>
            <tr><td>Causing a crash while distracted</td><td>6 points + potential additional charges</td><td>6 points</td></tr>
          </table>

          <div class="alert alert-warning">
            <h4>⚠️ Important Note About Red Lights</h4>
            <p>Many drivers believe it's legal to text at red lights since the vehicle is stopped. <strong>This is incorrect.</strong> Under Florida law, if your vehicle is in the roadway—including stopped at a traffic signal—you are considered to be "operating" the vehicle. Texting at a red light is still illegal and can result in a citation.</p>
          </div>

          <h3>Beyond Cell Phones: Other Common Distractions</h3>
          
          <p>While cell phones receive the most attention, many other activities distract drivers daily:</p>

          <h4>Eating and Drinking</h4>
          <p>It seems harmless—grabbing a quick bite during your commute. But eating while driving:</p>
          <ul>
            <li>Requires at least one hand off the wheel</li>
            <li>Diverts visual attention to unwrap food or hold containers</li>
            <li>Creates sudden emergencies if you spill hot coffee or drop food</li>
            <li>Increases crash risk by 80% according to a study by Lytx (a fleet management company)</li>
          </ul>

          <h4>Passengers</h4>
          <p>Interacting with passengers is a leading cause of distracted driving crashes:</p>
          <ul>
            <li><strong>Teen drivers:</strong> Having one peer passenger doubles crash risk; two or more passengers increases risk fivefold</li>
            <li><strong>Parents:</strong> Children in the car are 12 times more distracting than talking on a cell phone</li>
            <li><strong>All drivers:</strong> Intense conversations with passengers reduce attention to the road</li>
          </ul>

          <h4>Infotainment Systems</h4>
          <p>Modern vehicles come equipped with large touchscreens and complex entertainment systems:</p>
          <ul>
            <li>Programming navigation takes an average of 40 seconds—far longer than safe to look away</li>
            <li>Changing music or radio stations diverts attention</li>
            <li>Voice commands, while safer, still cause cognitive distraction</li>
          </ul>

          <h4>Personal Grooming</h4>
          <p>Shaving, applying makeup, or fixing hair while driving is surprisingly common:</p>
          <ul>
            <li>Requires looking in mirrors rather than at the road</li>
            <li>Takes hands off the wheel</li>
            <li>Creates an unrealistic sense of multitasking ability</li>
          </ul>

          <div class="reflection-question">
            <h4>🤔 Reflection Question</h4>
            <p>Be honest with yourself: What distracting behaviors have you engaged in while driving? Think about the last week. Did you look at your phone? Eat a meal? Have an intense conversation? What could you do differently to reduce these behaviors?</p>
          </div>

          <h3>Prevention Strategies: How to Stay Focused</h3>
          
          <p>Understanding the dangers of distracted driving is important, but taking action to prevent it is essential. Here are proven strategies to keep your focus on the road:</p>

          <h4>Before You Drive</h4>
          <ul>
            <li><strong>Silence your phone</strong> or activate "Do Not Disturb While Driving" mode</li>
            <li><strong>Put your phone out of reach</strong>—in the glove box, back seat, or trunk</li>
            <li><strong>Program your GPS</strong> before starting your journey</li>
            <li><strong>Adjust mirrors, seats, and climate controls</strong> before pulling away</li>
            <li><strong>Select your music or podcast</strong> before you begin driving</li>
            <li><strong>Eat before leaving</strong> rather than eating while driving</li>
            <li><strong>Address emotional issues</strong>—if you're upset, take time to calm down before driving</li>
          </ul>

          <h4>While Driving</h4>
          <ul>
            <li><strong>Use hands-free technology</strong> if you must take calls (but limit conversations)</li>
            <li><strong>Let voicemail handle calls</strong>—you can always call back when parked</li>
            <li><strong>Pull over safely</strong> if you need to make a call, text, or address something urgent</li>
            <li><strong>Ask passengers to help</strong> with navigation or phone calls</li>
            <li><strong>Take breaks on long trips</strong> to prevent fatigue and maintain focus</li>
            <li><strong>Keep eyes moving</strong>—continuously scan mirrors and the road ahead</li>
          </ul>

          <h4>Technology Solutions</h4>
          <ul>
            <li><strong>Do Not Disturb While Driving:</strong> Both iPhone and Android have features that silence notifications and can auto-reply to messages while you're driving</li>
            <li><strong>Apps that block texting:</strong> DriveMode, LifeSaver, and other apps can disable texting while the vehicle is moving</li>
            <li><strong>Built-in vehicle systems:</strong> Use Apple CarPlay or Android Auto for safer interaction with your phone</li>
            <li><strong>Bluetooth:</strong> Pair your phone to your car's audio system for hands-free calls</li>
          </ul>

          <div class="alert alert-success">
            <h4>✅ The Simple Solution</h4>
            <p>The single most effective way to prevent distracted driving is simple: <strong>Put your phone away before you start driving and don't touch it until you've reached your destination and parked safely.</strong></p>
            <p>No text, call, email, or notification is worth your life or the life of another person.</p>
          </div>

          <h3>What If You're Tempted?</h3>
          
          <p>If you find yourself reaching for your phone while driving, try these mental strategies:</p>
          
          <ul>
            <li><strong>Ask yourself:</strong> "Is this worth dying for? Is this worth killing someone for?"</li>
            <li><strong>Remember:</strong> Whatever it is can wait. You'll be at your destination in minutes.</li>
            <li><strong>Think about your loved ones:</strong> What would happen to them if you were killed or seriously injured?</li>
            <li><strong>Consider the other people on the road:</strong> They have families too.</li>
            <li><strong>Calculate the risk:</strong> A 5-second glance at 55 mph = 100 yards of blind driving.</li>
          </ul>

          <div class="case-study">
            <h4>📋 A Final Thought: AT&T's "It Can Wait" Stories</h4>
            <p>AT&T's campaign collected thousands of real stories from people affected by distracted driving. Here's one that stayed with many people:</p>
            <p><em>"I was texting while driving and ran a stop sign. I T-boned another car. Inside was a mother and her two children. The 6-year-old didn't survive. I took a child's life because I couldn't wait to respond to a text message. I have to live with that for the rest of my life. Please, just put the phone down."</em></p>
            <p>Every time you're tempted to look at your phone while driving, remember: the consequences can be permanent, devastating, and life-changing.</p>
          </div>

          <h3>Module Summary</h3>
          
          <ul>
            <li>Distracted driving causes thousands of deaths and injuries in Florida every year</li>
            <li>There are three types of distractions: visual, manual, and cognitive</li>
            <li>Texting while driving is especially dangerous because it involves all three types</li>
            <li>Florida law prohibits texting while driving and requires hands-free phone use in school and work zones</li>
            <li>Prevention strategies include putting your phone away, using technology solutions, and pulling over for urgent matters</li>
            <li>No message, call, or notification is worth risking lives</li>
          </ul>

          <div class="alert alert-success">
            <h4>✅ Module 2 Complete</h4>
            <p>You've completed the Distracted Driving module. In the next module, we'll cover Emergency Situations—how to handle vehicle breakdowns, tire blowouts, brake failures, and other unexpected events on the road.</p>
          </div>
        `,
        quizQuestions: [
          {
            questionText: 'What are the three types of distractions that affect drivers?',
            options: ['Physical, emotional, mental', 'Visual, manual, cognitive', 'Internal, external, environmental', 'Primary, secondary, tertiary'],
            correctAnswer: 'Visual, manual, cognitive',
            explanation: 'The three types of driving distractions are visual (eyes off road), manual (hands off wheel), and cognitive (mind off driving).'
          },
          {
            questionText: 'In Florida, it is legal to text while stopped at a red light.',
            questionType: 'true_false',
            options: ['True', 'False'],
            correctAnswer: 'False',
            explanation: 'Under Florida law, texting while your vehicle is in the roadway—including at red lights—is still illegal because you are considered to be "operating" the vehicle.'
          },
          {
            questionText: 'At 55 mph, how far does your car travel during a 5-second glance at your phone?',
            options: ['50 feet', '100 feet', '100 yards (length of football field)', '200 yards'],
            correctAnswer: '100 yards (length of football field)',
            explanation: 'At 55 mph, your vehicle travels approximately 100 yards (the length of a football field) in just 5 seconds—completely blind to the road ahead.'
          },
          {
            questionText: 'What is required when using a cell phone in school zones and work zones in Florida?',
            options: ['Cell phones are completely prohibited', 'Hands-free mode only', 'Texting is allowed but calls are not', 'Normal use is permitted'],
            correctAnswer: 'Hands-free mode only',
            explanation: 'Florida law requires hands-free phone use in school zones and active work zones. You cannot hold the phone at all in these areas.'
          },
          {
            questionText: 'Which of the following is an example of cognitive distraction?',
            options: ['Looking at a text message', 'Eating a sandwich', 'Thinking about a stressful work situation', 'Adjusting the radio'],
            correctAnswer: 'Thinking about a stressful work situation',
            explanation: 'Cognitive distraction occurs when your mind is not focused on driving. Being mentally preoccupied with stress, emotions, or other thoughts is cognitive distraction.'
          },
          {
            questionText: 'According to research, texting while driving increases your crash risk by how many times?',
            options: ['5 times', '10 times', '23 times', '50 times'],
            correctAnswer: '23 times',
            explanation: 'Research from the Virginia Tech Transportation Institute found that texting while driving increases crash risk by 23 times compared to non-distracted driving.'
          }
        ]
      },

      // =========================================
      // MODULE 3: Emergency Situations
      // Estimated Reading Time: 35-40 minutes
      // =========================================
      {
        title: 'Module 3: Emergency Situations',
        description: 'How to handle vehicle breakdowns, tire blowouts, brake failure, and road emergencies',
        estimatedMinutes: 40,
        content: `
          <h2>Emergency Situations: Being Prepared for the Unexpected</h2>
          
          <p>No matter how carefully you drive, emergencies can happen. A tire can blow out without warning. Your brakes might fail. Another driver might swerve into your lane. Weather conditions can change in an instant. The key to surviving these emergencies is preparation—knowing what to do before it happens so you can react quickly and correctly when it does.</p>

          <p>This module will teach you how to handle common driving emergencies safely and effectively. By the end, you'll have the knowledge to respond to situations that could otherwise result in serious injury or death.</p>

          <div class="statistics-box">
            <h4>📊 Emergency Situation Statistics</h4>
            <ul>
              <li><strong>220 million</strong> flat tires occur in the U.S. each year</li>
              <li><strong>33,000</strong> accidents annually are caused by tire blowouts</li>
              <li><strong>Brake failure</strong> accounts for approximately 5% of all crashes</li>
              <li><strong>300,000</strong> drivers run out of fuel on U.S. highways yearly</li>
              <li>The average driver will experience <strong>5 flat tires</strong> in their lifetime</li>
              <li><strong>Florida:</strong> Over 25,000 crashes annually involve hitting animals</li>
            </ul>
          </div>

          <h3>Vehicle Breakdown Procedures</h3>
          
          <p>Vehicles can break down for many reasons: overheating, flat tires, dead batteries, running out of fuel, or mechanical failures. Here's what to do:</p>

          <h4>Step 1: Get Off the Road Safely</h4>
          <ul>
            <li><strong>Signal your intentions</strong> by turning on your right turn signal or hazard lights immediately</li>
            <li><strong>Gradually slow down</strong>—avoid sudden braking that could surprise drivers behind you</li>
            <li><strong>Pull completely off the roadway</strong> to the right shoulder if possible</li>
            <li><strong>Move as far from traffic as possible</strong>—the further, the safer</li>
            <li><strong>Choose a flat, stable surface</strong> if possible, away from curves or hills</li>
            <li><strong>Avoid stopping on bridges, in tunnels, or in areas with no shoulder</strong></li>
          </ul>

          <h4>Step 2: Make Your Vehicle Visible</h4>
          <ul>
            <li><strong>Turn on your hazard lights (emergency flashers)</strong> immediately</li>
            <li><strong>Turn on interior dome lights at night</strong> so others can see the vehicle is occupied</li>
            <li><strong>Set up reflective triangles or flares</strong> if you have them:
              <ul>
                <li>Place one about 10 feet directly behind your vehicle</li>
                <li>Place another about 100 feet back</li>
                <li>Place a third about 200-300 feet back (visible to approaching traffic)</li>
              </ul>
            </li>
            <li><strong>Raise your hood</strong> to signal distress (but do so safely)</li>
            <li><strong>Tie a white cloth or bright fabric to your antenna or door handle</strong></li>
          </ul>

          <h4>Step 3: Stay Safe</h4>
          <ul>
            <li><strong>Stay inside your vehicle</strong> if you're on a highway or busy road—it's safer than standing outside</li>
            <li><strong>Keep your seatbelt on</strong> in case another vehicle strikes your car</li>
            <li><strong>Lock your doors</strong> for personal security</li>
            <li><strong>If you must exit</strong>, do so from the side away from traffic</li>
            <li><strong>Stand well away from the vehicle</strong> and behind a guardrail if possible</li>
            <li><strong>Never try to cross lanes of traffic</strong> on foot</li>
          </ul>

          <h4>Step 4: Call for Help</h4>
          <ul>
            <li><strong>Call 911</strong> if you're in a dangerous location or feel unsafe</li>
            <li><strong>Call roadside assistance</strong> (AAA, insurance company, or vehicle manufacturer program)</li>
            <li><strong>Use Florida's *FHP (*347) number</strong> to reach Florida Highway Patrol</li>
            <li><strong>Use apps like Waze or Google Maps</strong> to share your exact location with help</li>
          </ul>

          <div class="alert alert-danger">
            <h4>⚠️ Critical Safety Warning</h4>
            <p>Being struck by passing traffic is a leading cause of death for stranded motorists. <strong>Never stand behind or beside your vehicle</strong> when on the shoulder of a highway. If you must wait outside, move well away from the roadway and wait behind a guardrail or barrier.</p>
          </div>

          <h3>Tire Blowout: Staying in Control</h3>
          
          <p>A tire blowout—when a tire suddenly loses air pressure—is one of the most frightening experiences a driver can face. The key is to resist your instincts (which may be wrong) and follow the correct procedure.</p>

          <h4>What Happens During a Blowout</h4>
          <ul>
            <li>You'll hear a loud bang or explosion</li>
            <li>The vehicle will pull strongly to one side (toward the blown tire)</li>
            <li>You may feel the steering wheel jerk or become difficult to control</li>
            <li>You'll hear a loud flapping or thumping sound</li>
            <li>If it's a rear tire, the back end may sway or fishtail</li>
          </ul>

          <h4>What to Do: The Counter-Intuitive Response</h4>
          <ol>
            <li><strong>DO NOT slam on the brakes</strong>—this is your instinct, but it's wrong. Hard braking can cause you to lose control completely.</li>
            <li><strong>Keep a firm grip on the steering wheel</strong> with both hands at 9 and 3 o'clock positions.</li>
            <li><strong>Maintain your direction</strong>—steer straight and resist the pull to one side.</li>
            <li><strong>Gradually ease off the accelerator</strong>—don't lift your foot suddenly.</li>
            <li><strong>Allow the vehicle to slow naturally</strong> through wind resistance and friction.</li>
            <li><strong>Once below 30 mph, gently apply the brakes</strong> to slow further.</li>
            <li><strong>Steer gradually to the shoulder</strong> and come to a complete stop.</li>
            <li><strong>Turn on hazard lights</strong> and follow the breakdown procedures above.</li>
          </ol>

          <div class="case-study">
            <h4>📋 Real-World Case Study: Correct Blowout Response</h4>
            <p><strong>Jennifer's Experience (I-75, Near Gainesville):</strong></p>
            <p>Jennifer was traveling 70 mph in the left lane when her front right tire blew out. Her car immediately pulled hard to the right toward the center lane.</p>
            <p>"My first instinct was to slam on the brakes, but I remembered what I'd learned—don't brake hard during a blowout. I gripped the wheel tightly and steered straight. It felt like the car was fighting me, but I held firm."</p>
            <p>Jennifer gradually let off the gas and let the car slow on its own. After about 10 seconds that "felt like minutes," she was able to carefully steer across traffic to the right shoulder.</p>
            <p>"If I had hit the brakes like I wanted to, I probably would have spun out into other cars. Knowing the right response saved my life."</p>
          </div>

          <h4>Preventing Tire Blowouts</h4>
          <ul>
            <li><strong>Check tire pressure monthly</strong>—underinflation is the leading cause of blowouts</li>
            <li><strong>Inspect tires regularly</strong> for wear, damage, or embedded objects</li>
            <li><strong>Replace tires when tread is worn</strong>—use the penny test (if you can see Lincoln's entire head, it's time for new tires)</li>
            <li><strong>Avoid road hazards</strong> when possible (potholes, debris, curbs)</li>
            <li><strong>Don't overload your vehicle</strong>—excess weight stresses tires</li>
            <li><strong>Slow down in hot weather</strong>—heat increases tire pressure and blowout risk</li>
          </ul>

          <h3>Brake Failure: Stopping Without Brakes</h3>
          
          <p>Complete brake failure is rare in modern vehicles with redundant brake systems, but partial failure or significant brake fade can occur. If your brakes fail or become ineffective:</p>

          <h4>Immediate Actions</h4>
          <ol>
            <li><strong>Don't panic</strong>—you have options and time to use them.</li>
            <li><strong>Pump the brake pedal rapidly</strong> several times. This may build up enough pressure in the system to slow the vehicle, especially if it's a hydraulic fluid leak.</li>
            <li><strong>Shift to a lower gear</strong> to use engine braking:
              <ul>
                <li>Automatic transmission: Shift from D to 3, then 2, then 1 (or use manual mode if equipped)</li>
                <li>Manual transmission: Downshift through gears progressively</li>
              </ul>
            </li>
            <li><strong>Apply the parking brake (emergency brake) gradually</strong>—don't yank it or you may lock the rear wheels and skid. Most modern parking brakes are designed for this.</li>
            <li><strong>Look for an escape route</strong>—an uphill road, open field, or runaway truck ramp.</li>
            <li><strong>Friction can help</strong>—if necessary, allow wheels to rub against a curb to slow the vehicle.</li>
          </ol>

          <h4>Last Resort Options</h4>
          <ul>
            <li><strong>Aim for something soft</strong> if collision is unavoidable—bushes, snow banks, or sand rather than walls or other vehicles</li>
            <li><strong>Sideswipe rather than head-on</strong>—a glancing blow against a guardrail is better than a direct collision</li>
            <li><strong>Turn off the engine</strong> as a last resort (but know this will disable power steering and make steering very difficult)</li>
          </ul>

          <div class="alert alert-warning">
            <h4>⚠️ Warning Signs of Brake Problems</h4>
            <p>Don't ignore these signs that your brakes may be failing:</p>
            <ul>
              <li>Grinding or squealing sounds when braking</li>
              <li>Soft or spongy brake pedal</li>
              <li>Brake pedal goes to the floor</li>
              <li>Vehicle pulls to one side when braking</li>
              <li>Vibration when braking</li>
              <li>Brake warning light on dashboard</li>
              <li>Burning smell after hard braking</li>
            </ul>
            <p>If you notice any of these signs, have your brakes inspected immediately.</p>
          </div>

          <h3>Skidding: Regaining Control</h3>
          
          <p>Skids occur when your tires lose traction with the road surface, usually due to:</p>
          <ul>
            <li>Wet, icy, or slippery road surfaces</li>
            <li>Braking too hard</li>
            <li>Accelerating too quickly</li>
            <li>Turning too sharply</li>
            <li>Worn tires</li>
          </ul>

          <h4>Types of Skids and How to Correct Them</h4>
          
          <h5>Front-Wheel Skid (Understeer)</h5>
          <p>Your front tires lose traction, and the car continues straight even though you're turning the wheel.</p>
          <ul>
            <li>Remove your foot from the gas</li>
            <li>Do not brake</li>
            <li>Straighten the steering wheel slightly</li>
            <li>Wait for the front tires to regain traction</li>
            <li>Then gently resume steering in your desired direction</li>
          </ul>

          <h5>Rear-Wheel Skid (Oversteer)</h5>
          <p>Your rear tires lose traction, causing the back of the car to slide out.</p>
          <ul>
            <li>Remove your foot from the gas</li>
            <li>Do not brake</li>
            <li><strong>Steer in the direction you want the front of the car to go</strong> (often described as "turning into the skid")</li>
            <li>As the vehicle straightens, straighten the steering wheel</li>
            <li>Be prepared for the car to slide in the other direction and correct again if needed</li>
          </ul>

          <h5>Hydroplaning</h5>
          <p>Your tires ride on top of water rather than the road surface.</p>
          <ul>
            <li>Gradually ease off the accelerator—do not brake</li>
            <li>Keep the steering wheel straight</li>
            <li>Wait for the tires to regain contact with the road</li>
            <li>Once you regain traction, gently slow down</li>
          </ul>

          <div class="reflection-question">
            <h4>🤔 Reflection Question</h4>
            <p>Have you ever experienced a skid? What did you do? Now that you know the correct response, what would you do differently?</p>
          </div>

          <h3>Accelerator Stuck (Unintended Acceleration)</h3>
          
          <p>If your accelerator pedal gets stuck or the car accelerates on its own:</p>
          
          <ol>
            <li><strong>Shift to neutral (N)</strong>—this disconnects the engine from the wheels, even if the engine revs high</li>
            <li><strong>Apply the brakes firmly and steadily</strong>—modern brakes can overpower the engine</li>
            <li><strong>Focus on steering</strong> to maintain control and find a safe place to stop</li>
            <li><strong>Once stopped, turn off the engine</strong></li>
            <li><strong>Do not turn off the engine while moving</strong> (if possible) as this will disable power steering and brakes</li>
          </ol>

          <h4>If You Cannot Shift to Neutral</h4>
          <ul>
            <li>Press the brake firmly with both feet if necessary</li>
            <li>For push-button start: press and hold the button for 3+ seconds</li>
            <li>For key ignition: turn to ACC position (not OFF, which locks the steering)</li>
          </ul>

          <h3>Engine Fire</h3>
          
          <p>If you notice smoke or flames coming from under your hood:</p>
          
          <ol>
            <li><strong>Signal and pull over immediately</strong></li>
            <li><strong>Turn off the engine</strong> to stop fuel flow</li>
            <li><strong>Get all passengers out and away from the vehicle</strong> (at least 100 feet)</li>
            <li><strong>Call 911</strong></li>
            <li><strong>Do not open the hood</strong>—oxygen will feed the fire</li>
            <li><strong>If you have a fire extinguisher</strong>, you can try to spray through the grille without opening the hood</li>
            <li><strong>Do not try to save belongings</strong>—cars can be replaced, lives cannot</li>
          </ol>

          <div class="alert alert-danger">
            <h4>⚠️ Warning: Vehicle Fire Danger</h4>
            <p>Vehicle fires can spread rapidly and the fuel tank can explode. <strong>Never attempt to fight a large vehicle fire.</strong> Get everyone away from the vehicle and wait for firefighters.</p>
          </div>

          <h3>Submerged Vehicle</h3>
          
          <p>In Florida, with its many lakes, canals, and coastal areas, vehicles ending up in water is not uncommon. If your car enters water:</p>
          
          <ol>
            <li><strong>Stay calm</strong>—you have time, but must act quickly</li>
            <li><strong>Unbuckle your seatbelt immediately</strong></li>
            <li><strong>Do not try to open the door</strong> until pressure equalizes—water pressure makes this nearly impossible</li>
            <li><strong>Open or break the window</strong> while the car is still floating:
              <ul>
                <li>Electric windows may still work for a short time</li>
                <li>If not, use a window-breaking tool (keep one in your car)</li>
                <li>Aim for the corners of the window, not the center</li>
              </ul>
            </li>
            <li><strong>Once the window is open, water will rush in—this is expected</strong></li>
            <li><strong>Take a deep breath and swim out through the window</strong></li>
            <li><strong>Swim toward light or rising bubbles</strong> to find the surface</li>
            <li><strong>If trapped:</strong> Wait for the car to fill completely, then the door can be opened more easily</li>
          </ol>

          <h3>Emergency Equipment: What to Keep in Your Vehicle</h3>
          
          <p>Being prepared for emergencies means having the right equipment:</p>

          <div class="equipment-list">
            <h4>Essential Emergency Kit Contents</h4>
            <table class="info-table">
              <tr><th>Item</th><th>Purpose</th></tr>
              <tr><td>Flashlight with extra batteries</td><td>Visibility at night</td></tr>
              <tr><td>Reflective warning triangles (3)</td><td>Warn approaching traffic</td></tr>
              <tr><td>First-aid kit</td><td>Treat minor injuries</td></tr>
              <tr><td>Jumper cables</td><td>Dead battery</td></tr>
              <tr><td>Tire pressure gauge</td><td>Check and maintain proper tire pressure</td></tr>
              <tr><td>Phone charger (car and portable)</td><td>Keep phone charged for emergencies</td></tr>
              <tr><td>Bottled water (replaced regularly)</td><td>Hydration while waiting for help</td></tr>
              <tr><td>Blanket</td><td>Warmth if stranded</td></tr>
              <tr><td>Basic tools (screwdrivers, pliers, adjustable wrench)</td><td>Minor repairs</td></tr>
              <tr><td>Duct tape</td><td>Temporary fixes</td></tr>
              <tr><td>Window-breaking tool with seatbelt cutter</td><td>Escape from submerged vehicle</td></tr>
              <tr><td>Rain poncho</td><td>Protection from Florida's sudden storms</td></tr>
            </table>
          </div>

          <h3>Module Summary</h3>
          
          <ul>
            <li>When your vehicle breaks down, get off the road, make your car visible, stay safe, and call for help</li>
            <li>During a tire blowout, don't brake hard—hold the wheel firmly, ease off the gas, and steer straight</li>
            <li>If brakes fail, pump the pedal, downshift, use the parking brake gradually, and look for escape routes</li>
            <li>When skidding, steer in the direction you want to go and avoid braking</li>
            <li>For stuck accelerators, shift to neutral and brake firmly</li>
            <li>In vehicle fires, evacuate immediately and call 911</li>
            <li>In water submersion, unbuckle, open/break the window, and swim out</li>
            <li>Keep an emergency kit in your vehicle at all times</li>
          </ul>

          <div class="alert alert-success">
            <h4>✅ Module 3 Complete</h4>
            <p>You've completed the Emergency Situations module. In the next module, we'll cover Florida's Move Over Law and how to properly respond to emergency vehicles on the road.</p>
          </div>
        `,
        quizQuestions: [
          {
            questionText: 'If you experience a tire blowout while driving, what should you do FIRST?',
            options: ['Slam on the brakes to stop quickly', 'Keep a firm grip on the wheel and ease off the gas', 'Immediately steer to the shoulder', 'Turn off the engine'],
            correctAnswer: 'Keep a firm grip on the wheel and ease off the gas',
            explanation: 'During a blowout, grip the wheel firmly, maintain your direction, and gradually ease off the accelerator. Hard braking can cause loss of control.'
          },
          {
            questionText: 'If your brakes fail, which action should you take first?',
            options: ['Turn off the engine immediately', 'Pump the brake pedal rapidly', 'Jump out of the vehicle', 'Steer into oncoming traffic'],
            correctAnswer: 'Pump the brake pedal rapidly',
            explanation: 'Pumping the brake pedal may build enough pressure in the hydraulic system to slow the vehicle. Then downshift and use the parking brake gradually.'
          },
          {
            questionText: 'When correcting a rear-wheel skid (oversteer), you should steer:',
            options: ['In the opposite direction of the skid', 'In the direction you want the front of the car to go', 'Sharply to the left', 'Keep the wheel completely straight'],
            correctAnswer: 'In the direction you want the front of the car to go',
            explanation: 'During a rear-wheel skid, steer in the direction you want the front of the car to go (often called "turning into the skid"). This helps the rear wheels regain traction.'
          },
          {
            questionText: 'If your vehicle becomes submerged in water, what should you do first?',
            options: ['Open the door and swim out', 'Unbuckle your seatbelt', 'Call 911', 'Wait for the car to sink to the bottom'],
            correctAnswer: 'Unbuckle your seatbelt',
            explanation: 'Your first action should be unbuckling your seatbelt so you can move freely. Then work on opening or breaking the window to escape before the car sinks.'
          },
          {
            questionText: 'True or False: If your vehicle breaks down on the highway, you should stand directly behind your car while waiting for help.',
            questionType: 'true_false',
            options: ['True', 'False'],
            correctAnswer: 'False',
            explanation: 'NEVER stand behind or beside your vehicle on a highway. If struck by another vehicle, you could be killed. Stay inside with your seatbelt on or move well away from the roadway behind a guardrail.'
          },
          {
            questionText: 'If your accelerator gets stuck, what gear should you shift into?',
            options: ['Drive', 'Reverse', 'Neutral', 'Park'],
            correctAnswer: 'Neutral',
            explanation: 'Shifting to neutral disconnects the engine from the wheels, allowing you to brake and steer to safety even if the engine continues to rev.'
          }
        ]
      },

      // =========================================
      // MODULE 4: Emergency Vehicles & Move Over Law
      // Estimated Reading Time: 30-35 minutes
      // =========================================
      {
        title: 'Module 4: Emergency Vehicles & Move Over Law',
        description: 'Florida\'s Move Over law, responding to emergency vehicles, and protecting first responders',
        estimatedMinutes: 35,
        content: `
          <h2>Emergency Vehicles & Florida's Move Over Law</h2>
          
          <p>Emergency responders put their lives on the line every day to protect our communities. Police officers, firefighters, paramedics, tow truck operators, and roadside assistance workers regularly face danger from passing traffic while performing their duties. Florida's Move Over Law is designed to provide these heroes with a protective buffer zone—and it's every driver's legal and moral responsibility to comply.</p>

          <div class="statistics-box">
            <h4>📊 Roadside Safety Statistics</h4>
            <ul>
              <li><strong>Over 150</strong> law enforcement officers are killed nationally each year in traffic-related incidents</li>
              <li><strong>23 tow truck operators</strong> are killed on average each year while working roadside</li>
              <li><strong>Florida ranks among the top states</strong> for Move Over Law violations</li>
              <li><strong>70%</strong> of Americans are unaware of their state's Move Over Law</li>
              <li>The average emergency scene requires responders to work in <strong>live traffic for 20-45 minutes</strong></li>
              <li>A vehicle traveling 70 mph covers <strong>103 feet per second</strong>—almost no time to react if a worker steps into traffic</li>
            </ul>
          </div>

          <h3>Understanding Florida's Move Over Law (F.S. 316.126)</h3>
          
          <p>Florida Statutes Section 316.126, known as the "Move Over Law," requires drivers to take specific actions when approaching stopped emergency or service vehicles displaying flashing lights.</p>

          <div class="law-box">
            <h4>📜 The Law Applies When You See:</h4>
            <ul>
              <li>Law enforcement vehicles</li>
              <li>Fire trucks and rescue vehicles</li>
              <li>Ambulances</li>
              <li>Tow trucks and roadside assistance vehicles</li>
              <li>Utility service vehicles</li>
              <li>Sanitation (garbage) vehicles</li>
              <li>Florida Department of Transportation (FDOT) vehicles</li>
              <li>Any authorized vehicle displaying flashing lights while stopped on the roadside</li>
            </ul>
          </div>

          <h4>What the Law Requires</h4>
          
          <p>When approaching any of the vehicles listed above that are stopped on the roadside with flashing lights:</p>

          <h5>On Roads with Two or More Lanes in Your Direction</h5>
          <ol>
            <li><strong>Move over to a lane that is not immediately adjacent to the stopped vehicle</strong>
              <ul>
                <li>If the emergency vehicle is on the right shoulder, move to the left lane</li>
                <li>If safe to do so, change lanes as soon as you notice the stopped vehicle</li>
              </ul>
            </li>
            <li><strong>If you cannot move over safely</strong> (due to traffic, road conditions, or other factors):
              <ul>
                <li>Slow down to 20 mph below the posted speed limit</li>
                <li>On roads with speed limits of 25 mph or less, slow to 5 mph</li>
              </ul>
            </li>
          </ol>

          <h5>On Two-Lane Roads (One Lane in Each Direction)</h5>
          <ul>
            <li>Slow down to 20 mph below the posted speed limit</li>
            <li>Be prepared to stop if necessary</li>
            <li>Proceed with extreme caution</li>
          </ul>

          <h4>Penalties for Violations</h4>
          <table class="info-table">
            <tr><th>Violation</th><th>Penalty</th></tr>
            <tr><td>Failure to move over or slow down</td><td>$120-$158 fine + 3 points on license</td></tr>
            <tr><td>Violation resulting in property damage</td><td>$158-$500 fine + 3 points on license</td></tr>
            <tr><td>Violation causing injury to another</td><td>$500+ fine + 4 points on license + possible criminal charges</td></tr>
            <tr><td>Violation causing death</td><td>Felony charges + potential prison time</td></tr>
          </table>

          <div class="case-study">
            <h4>📋 Real-World Case Study: The Cost of Not Moving Over</h4>
            <p><strong>Officer's Story (Florida Turnpike):</strong></p>
            <p>Florida Highway Patrol Trooper Joseph Bullock was assisting a stranded motorist on the shoulder of I-95 in Martin County. A distracted driver failed to move over and struck him, killing him instantly.</p>
            <p>Trooper Bullock was 42 years old and a 19-year veteran of the Florida Highway Patrol. He left behind a wife and three children.</p>
            <p>"He was just doing his job, helping someone who needed help," said a fellow trooper. "All the driver had to do was move to the left lane."</p>
            <p><em>Failure to follow the Move Over Law doesn't just result in tickets—it can result in death.</em></p>
          </div>

          <h3>Responding to Approaching Emergency Vehicles</h3>
          
          <p>When an emergency vehicle is approaching you from any direction with flashing lights and/or sirens:</p>

          <h4>What You Must Do</h4>
          <ol>
            <li><strong>Pull over to the nearest edge of the roadway</strong>
              <ul>
                <li>Move to the right side of the road when possible</li>
                <li>Clear the travel lanes completely</li>
              </ul>
            </li>
            <li><strong>Come to a complete stop</strong>
              <ul>
                <li>Remain stopped until the emergency vehicle has passed</li>
                <li>Wait for any additional emergency vehicles that may be following</li>
              </ul>
            </li>
            <li><strong>Proceed carefully after the emergency vehicle passes</strong>
              <ul>
                <li>Check for additional emergency vehicles</li>
                <li>Re-enter traffic safely</li>
              </ul>
            </li>
          </ol>

          <h4>Special Situations</h4>
          
          <h5>At Intersections</h5>
          <ul>
            <li><strong>Do not stop in an intersection</strong>—proceed through first, then pull over</li>
            <li><strong>If stopped at a red light</strong>, remain in place if pulling forward would enter the intersection</li>
            <li><strong>If safe to do so</strong>, pull to the right after the intersection to allow the emergency vehicle to pass</li>
          </ul>

          <h5>On Divided Highways</h5>
          <ul>
            <li>If the emergency vehicle is on the opposite side of a divided highway with a median barrier, you typically don't need to pull over</li>
            <li>However, always be cautious—emergency vehicles may cross medians</li>
          </ul>

          <h5>Multiple Lanes of Traffic</h5>
          <ul>
            <li>All lanes should attempt to pull to the right</li>
            <li>Create a clear path for the emergency vehicle, usually in the left lane</li>
            <li>Don't assume the emergency vehicle will pass on a specific side—they will take the clearest path</li>
          </ul>

          <div class="alert alert-warning">
            <h4>⚠️ Important Restrictions</h4>
            <ul>
              <li><strong>Do not follow within 500 feet</strong> of any emergency vehicle responding to an emergency</li>
              <li><strong>Never attempt to outrun</strong> an emergency vehicle</li>
              <li><strong>Do not park or drive over fire hoses</strong> without permission from the fire department</li>
              <li><strong>Do not pass through or park at an emergency scene</strong> unless directed by law enforcement</li>
            </ul>
          </div>

          <h3>Why This Matters: Protecting Those Who Protect Us</h3>
          
          <p>Emergency responders face incredible danger every time they work on the roadside. Consider these facts:</p>

          <ul>
            <li><strong>Tunnel vision:</strong> Responders are focused on their task (accident victim, fire, disabled vehicle) and may not see approaching traffic</li>
            <li><strong>Limited escape routes:</strong> They often work between their vehicle and the incident, with nowhere to go if a car approaches</li>
            <li><strong>Darkness and weather:</strong> Many incidents occur at night or in rain, making visibility poor for everyone</li>
            <li><strong>Speed of approaching traffic:</strong> At highway speeds, drivers have only seconds to react to a stopped vehicle ahead</li>
            <li><strong>Secondary accidents:</strong> Crashes at emergency scenes are common and often more severe than the original incident</li>
          </ul>

          <h4>A Personal Perspective</h4>
          <p>Imagine you're a tow truck operator called to help someone with a flat tire on I-4 at midnight. As you work to change the tire, cars and trucks zoom past just feet away at 70+ mph. Every vehicle that doesn't move over is a potential threat to your life. You have a family waiting for you at home, but your job requires you to stand in harm's way.</p>
          
          <p>Or imagine you're a paramedic treating a car accident victim on the shoulder of the Florida Turnpike. Your back is to traffic as you work to save a life. You're trusting that drivers will follow the law and move over.</p>
          
          <p>This is the reality for thousands of emergency workers every day. Moving over isn't just about avoiding a ticket—it's about respecting and protecting the people who help others in their worst moments.</p>

          <div class="reflection-question">
            <h4>🤔 Reflection Question</h4>
            <p>Think about a time you saw emergency vehicles stopped on the roadside. Did you move over? If not, what prevented you? How will you handle this situation differently in the future?</p>
          </div>

          <h3>Tips for Safely Complying with the Move Over Law</h3>
          
          <ol>
            <li><strong>Stay alert</strong>—continuously scan ahead for flashing lights</li>
            <li><strong>Check mirrors early</strong>—when you see flashing lights ahead, immediately check if you can safely change lanes</li>
            <li><strong>Signal your intentions</strong>—let other drivers know you're moving over</li>
            <li><strong>Don't wait until the last moment</strong>—change lanes as soon as safely possible</li>
            <li><strong>If you can't move over, slow down significantly</strong>—20 mph below the limit</li>
            <li><strong>Stay focused</strong>—don't rubberneck at the scene; keep your eyes on the road</li>
            <li><strong>Be patient</strong>—emergency scenes cause delays, but safety is more important than time</li>
          </ol>

          <h3>Module Summary</h3>
          
          <ul>
            <li>Florida's Move Over Law (F.S. 316.126) requires drivers to move over or slow down for stopped emergency and service vehicles</li>
            <li>The law applies to police, fire, EMS, tow trucks, FDOT vehicles, utility vehicles, and sanitation vehicles</li>
            <li>On multi-lane roads, move to a non-adjacent lane; if unable, slow to 20 mph below the limit</li>
            <li>On two-lane roads, slow to 20 mph below the limit</li>
            <li>When emergency vehicles approach with lights/sirens, pull to the right and stop</li>
            <li>Never follow within 500 feet of a responding emergency vehicle</li>
            <li>Violations can result in fines, points, and criminal charges if injuries or death occur</li>
          </ul>

          <div class="alert alert-success">
            <h4>✅ Module 4 Complete</h4>
            <p>You've completed the Emergency Vehicles & Move Over Law module. In the next module, we'll cover Defensive Driving Techniques—proactive strategies to anticipate hazards and avoid collisions.</p>
          </div>
        `,
        quizQuestions: [
          {
            questionText: 'On a highway with multiple lanes, what must you do when approaching a stopped emergency vehicle with flashing lights?',
            options: ['Speed up to pass quickly', 'Honk your horn to alert them', 'Move over to a lane not immediately adjacent to the vehicle', 'Flash your headlights'],
            correctAnswer: 'Move over to a lane not immediately adjacent to the vehicle',
            explanation: 'Florida\'s Move Over Law requires you to move over to a lane that is not immediately adjacent to the stopped emergency vehicle when safe to do so.'
          },
          {
            questionText: 'If you cannot safely change lanes when approaching a stopped emergency vehicle on a highway with a 70 mph speed limit, what must you do?',
            options: ['Maintain your speed', 'Slow to 50 mph', 'Stop completely', 'Honk your horn'],
            correctAnswer: 'Slow to 50 mph',
            explanation: 'If you cannot safely move over, you must slow down to 20 mph below the posted speed limit (70 - 20 = 50 mph).'
          },
          {
            questionText: 'The Move Over Law applies to which of the following?',
            options: ['Only police vehicles', 'Only ambulances and fire trucks', 'All emergency and service vehicles with flashing lights', 'Only vehicles blocking the road'],
            correctAnswer: 'All emergency and service vehicles with flashing lights',
            explanation: 'The Move Over Law applies to police, fire, EMS, tow trucks, FDOT vehicles, utility vehicles, and sanitation vehicles displaying flashing lights.'
          },
          {
            questionText: 'How close can you legally follow an emergency vehicle that is responding to an emergency?',
            options: ['100 feet', '300 feet', '500 feet', 'Any distance as long as you\'re careful'],
            correctAnswer: '500 feet',
            explanation: 'Florida law prohibits following within 500 feet of any emergency vehicle responding to an emergency with lights and sirens activated.'
          },
          {
            questionText: 'True or False: If you\'re stopped at a red light and an emergency vehicle approaches with sirens, you should drive through the red light to get out of the way.',
            questionType: 'true_false',
            options: ['True', 'False'],
            correctAnswer: 'False',
            explanation: 'Do not enter an intersection against a red light. Remain where you are if pulling forward would put you in the intersection. The emergency vehicle will go around you.'
          }
        ]
      },

      // =========================================
      // MODULE 5: Defensive Driving Techniques
      // Estimated Reading Time: 45-50 minutes
      // =========================================
      {
        title: 'Module 5: Defensive Driving Techniques',
        description: 'Proactive strategies for anticipating hazards, maintaining safe following distances, and avoiding collisions',
        estimatedMinutes: 50,
        content: `
          <h2>Defensive Driving: Your Best Protection on the Road</h2>
          
          <p>Defensive driving is not just about avoiding accidents—it's about developing a mindset and set of skills that prepare you for anything that can happen on the road. While you can control your own actions, you cannot control the actions of other drivers, road conditions, weather, or unexpected hazards. Defensive driving bridges this gap by teaching you to anticipate problems and take action before they become emergencies.</p>

          <p>Studies show that drivers trained in defensive driving techniques have significantly fewer accidents and violations. More importantly, they experience less stress while driving because they feel prepared and in control. In this module, you'll learn the core principles and practical techniques that will make you a safer, more confident driver.</p>

          <div class="statistics-box">
            <h4>📊 Why Defensive Driving Matters</h4>
            <ul>
              <li><strong>94%</strong> of all crashes involve human error as a contributing factor</li>
              <li>Defensive driving can reduce crash involvement by up to <strong>50%</strong></li>
              <li>Drivers who complete defensive driving courses have <strong>40% fewer</strong> at-fault accidents</li>
              <li><strong>Most crashes are preventable</strong>—even when another driver makes an error, your actions can often avoid a collision</li>
              <li>Insurance companies offer discounts of <strong>5-15%</strong> to drivers who complete defensive driving courses</li>
            </ul>
          </div>

          <h3>The Foundation: Attitude and Awareness</h3>
          
          <p>Before diving into techniques, it's important to understand that defensive driving begins with your mindset.</p>

          <h4>The Defensive Driving Mindset</h4>
          <ul>
            <li><strong>Accept that other drivers make mistakes</strong>—never assume others will do the right thing</li>
            <li><strong>Take responsibility for your safety</strong>—you cannot rely on others to protect you</li>
            <li><strong>Stay calm and patient</strong>—aggressive reactions create danger</li>
            <li><strong>Expect the unexpected</strong>—be prepared for anything</li>
            <li><strong>Continuously assess and reassess</strong>—conditions change constantly</li>
            <li><strong>Value safety over ego</strong>—it doesn't matter who's "right" in a crash</li>
          </ul>

          <div class="quote-box">
            <p><em>"The best drivers are not those who have never made mistakes, but those who have learned to anticipate and avoid situations where mistakes can become crashes."</em></p>
          </div>

          <h3>The Three-Second Rule: Safe Following Distance</h3>
          
          <p>Maintaining a safe following distance is one of the most fundamental defensive driving techniques. It gives you time to react if the vehicle ahead stops suddenly.</p>

          <h4>How to Apply the Three-Second Rule</h4>
          <ol>
            <li><strong>Choose a fixed point</strong> ahead of you (a sign, tree, overpass, or road marking)</li>
            <li><strong>When the vehicle ahead passes that point</strong>, start counting: "one-thousand-one, one-thousand-two, one-thousand-three"</li>
            <li><strong>If you reach the same point before finishing</strong>, you're following too closely—slow down and increase your distance</li>
          </ol>

          <h4>When to Increase Following Distance</h4>
          <p>The three-second rule is the minimum for ideal conditions. Increase your following distance to four, five, or even more seconds in these situations:</p>
          
          <table class="info-table">
            <tr><th>Condition</th><th>Recommended Following Distance</th></tr>
            <tr><td>Rain or wet roads</td><td>4-5 seconds</td></tr>
            <tr><td>Fog or reduced visibility</td><td>5-6 seconds</td></tr>
            <tr><td>Night driving</td><td>4-5 seconds</td></tr>
            <tr><td>Following motorcycles</td><td>4+ seconds (they stop faster)</td></tr>
            <tr><td>Following large trucks</td><td>4+ seconds (they block your view)</td></tr>
            <tr><td>Icy or snowy roads</td><td>8-10 seconds</td></tr>
            <tr><td>Towing a trailer</td><td>5+ seconds (increased stopping distance)</td></tr>
            <tr><td>Heavy traffic</td><td>4+ seconds</td></tr>
            <tr><td>When being tailgated</td><td>Extra space to allow gradual braking</td></tr>
          </table>

          <div class="case-study">
            <h4>📋 Real-World Case Study: The Value of Following Distance</h4>
            <p><strong>Marcus's Experience (I-4, Orlando):</strong></p>
            <p>Marcus was driving home from work in moderate traffic, maintaining a four-second following distance from the pickup truck ahead. "My coworker always teases me about leaving too much space," he said. "He says cars just cut in front of me."</p>
            <p>Suddenly, the pickup truck's brake lights came on hard. A mattress had fallen off a vehicle several cars ahead, creating a sudden obstacle. Cars scattered. The pickup swerved right, revealing the mattress directly in Marcus's path.</p>
            <p>"Because I had that extra space, I had time to brake and steer around it. The car behind me wasn't so lucky—he hit the mattress and lost control."</p>
            <p><em>Those four seconds saved Marcus's car and potentially his life.</em></p>
          </div>

          <h3>Scanning: See the Whole Picture</h3>
          
          <p>Many drivers focus only on the vehicle directly in front of them. Defensive drivers continuously scan their entire environment, building a mental picture of potential hazards in all directions.</p>

          <h4>The Scanning Pattern</h4>
          <ol>
            <li><strong>Look 10-15 seconds ahead</strong>
              <ul>
                <li>At city speeds (30 mph), this is about one block</li>
                <li>At highway speeds (60 mph), this is about a quarter mile</li>
                <li>Look for brake lights, changing traffic patterns, hazards in the road</li>
              </ul>
            </li>
            <li><strong>Check mirrors every 5-8 seconds</strong>
              <ul>
                <li>Rearview mirror: What's behind you?</li>
                <li>Side mirrors: What's beside and slightly behind you?</li>
                <li>Know who's around you at all times</li>
              </ul>
            </li>
            <li><strong>Check blind spots before lane changes</strong>
              <ul>
                <li>Quick head turn to see areas mirrors can't show</li>
                <li>Essential before every lane change or merge</li>
              </ul>
            </li>
            <li><strong>Monitor intersection approaches</strong>
              <ul>
                <li>Watch cross streets for vehicles that might not stop</li>
                <li>Look left-right-left before proceeding through intersections</li>
              </ul>
            </li>
            <li><strong>Scan the sides of the road</strong>
              <ul>
                <li>Watch for pedestrians, cyclists, animals</li>
                <li>Note driveways and parking lot exits</li>
                <li>Look for children and pets near residential areas</li>
              </ul>
            </li>
          </ol>

          <h4>What to Look For</h4>
          <ul>
            <li><strong>Traffic flow changes:</strong> Multiple brake lights ahead could signal a slowdown</li>
            <li><strong>Erratic drivers:</strong> Weaving, sudden braking, inconsistent speed</li>
            <li><strong>Potential conflicts:</strong> Cars approaching intersections, pedestrians near crossings</li>
            <li><strong>Road conditions:</strong> Potholes, debris, wet surfaces, construction</li>
            <li><strong>Escape routes:</strong> Where would you go if the vehicle ahead stopped suddenly?</li>
          </ul>

          <div class="reflection-question">
            <h4>🤔 Reflection Question</h4>
            <p>During your last drive, were you aware of what was happening behind and beside you, or only directly ahead? How might better scanning have helped you avoid a close call or stressful situation?</p>
          </div>

          <h3>Space Management: Creating a Safety Buffer</h3>
          
          <p>Defensive drivers create and maintain a "space cushion" around their vehicle. This buffer zone gives you options if something goes wrong.</p>

          <h4>The Ideal Safety Buffer</h4>
          <ul>
            <li><strong>Front:</strong> At least 3 seconds of following distance (more in poor conditions)</li>
            <li><strong>Rear:</strong> While you can't control tailgaters, you can add space ahead to compensate</li>
            <li><strong>Sides:</strong> Avoid driving in other vehicles' blind spots; keep space when possible</li>
          </ul>

          <h4>What If Someone Is Tailgating You?</h4>
          <p>When another driver follows too closely behind you:</p>
          <ol>
            <li><strong>Stay calm</strong>—don't brake check or try to "teach them a lesson"</li>
            <li><strong>Increase your following distance</strong> ahead—this gives you more time to brake gradually if needed</li>
            <li><strong>When safe, move to another lane</strong> and let them pass</li>
            <li><strong>If on a single-lane road</strong>, pull over safely and let them go ahead</li>
            <li><strong>Never speed up to satisfy a tailgater</strong>—you'll just be driving too fast with someone still on your bumper</li>
          </ol>

          <h3>Predicting Other Drivers' Actions</h3>
          
          <p>Part of defensive driving is learning to predict what other drivers might do—often before they know themselves.</p>

          <h4>Warning Signs to Watch For</h4>
          <table class="info-table">
            <tr><th>You See...</th><th>Be Prepared For...</th></tr>
            <tr><td>Driver looking at their phone</td><td>Sudden lane changes, delayed responses, weaving</td></tr>
            <tr><td>Brake lights without apparent cause</td><td>Hazard or slowdown ahead you can't see yet</td></tr>
            <tr><td>Driver in left lane looking over shoulder</td><td>Lane change into your lane</td></tr>
            <tr><td>Vehicle in next lane gradually drifting toward your lane</td><td>Unintentional lane change</td></tr>
            <tr><td>Delivery truck or taxi stopped in lane</td><td>Sudden door opening or driver stepping out</td></tr>
            <tr><td>Ball rolling into street</td><td>Child chasing it</td></tr>
            <tr><td>Car at side street facing your direction</td><td>Driver pulling out in front of you</td></tr>
            <tr><td>Driver behind you getting close and frustrated</td><td>Aggressive pass or tailgating</td></tr>
            <tr><td>Pedestrian at corner looking at phone</td><td>Walking into street without looking</td></tr>
          </table>

          <h4>Assume the Worst</h4>
          <p>A key principle of defensive driving: <strong>Assume other drivers will do the wrong thing.</strong> Not because everyone is a bad driver, but because if you're prepared for the worst, you'll never be caught off guard.</p>
          
          <ul>
            <li>Assume the car at the cross street won't stop completely</li>
            <li>Assume the driver ahead might brake suddenly</li>
            <li>Assume the pedestrian might not see you</li>
            <li>Assume the car in the next lane might change lanes without signaling</li>
          </ul>

          <p>If they do the right thing, great! If they don't, you're ready.</p>

          <h3>Escape Routes: Always Have an Out</h3>
          
          <p>Defensive drivers constantly identify escape routes—places they could steer if the vehicle ahead stops suddenly or something enters their path.</p>

          <h4>Creating and Maintaining Escape Routes</h4>
          <ul>
            <li><strong>Avoid traveling in a "pack"</strong> of vehicles where you have no room to maneuver</li>
            <li><strong>Keep space on at least one side</strong> whenever possible</li>
            <li><strong>Know what's beside you</strong> at all times through regular mirror checks</li>
            <li><strong>Identify where you would go</strong> if you needed to suddenly leave your lane</li>
            <li><strong>On highways, prefer the center or right lanes</strong> which offer more escape options</li>
          </ul>

          <h3>Intersection Safety</h3>
          
          <p>Intersections are the most dangerous places on the road. According to the Federal Highway Administration, more than 50% of all crashes that cause injury or death occur at or near intersections.</p>

          <h4>Defensive Intersection Techniques</h4>
          <ol>
            <li><strong>Approach with caution</strong>—cover the brake as you near an intersection</li>
            <li><strong>Look left-right-left</strong> before entering, even with a green light</li>
            <li><strong>Watch for red-light runners</strong>—when your light turns green, pause briefly and check cross traffic</li>
            <li><strong>Be extra careful at stale green lights</strong>—they may turn yellow/red suddenly</li>
            <li><strong>At four-way stops</strong>, don't assume others understand right-of-way rules</li>
            <li><strong>When making left turns</strong>, watch for oncoming vehicles speeding to make the light</li>
            <li><strong>Never race to beat a yellow light</strong>—it's not worth the risk</li>
          </ol>

          <h3>Adapting to Conditions</h3>
          
          <p>Defensive driving means adjusting your driving to match current conditions—not driving the same way in rain as you would on a dry, sunny day.</p>

          <h4>Condition-Specific Adjustments</h4>

          <h5>Rain</h5>
          <ul>
            <li>Reduce speed by 5-10 mph or more depending on intensity</li>
            <li>Increase following distance to 4-5 seconds</li>
            <li>Turn on headlights (Florida law requires this when wipers are on)</li>
            <li>Avoid sudden braking or sharp turns</li>
            <li>Be aware of hydroplaning, especially in the first 10 minutes of rain</li>
            <li>Stay out of large puddles when possible</li>
          </ul>

          <h5>Fog</h5>
          <ul>
            <li>Use low-beam headlights or fog lights (never high beams—they reflect off fog)</li>
            <li>Reduce speed significantly</li>
            <li>Increase following distance to 5-6 seconds or more</li>
            <li>Use roadside markings as a guide</li>
            <li>If visibility becomes too poor, pull completely off the road</li>
          </ul>

          <h5>Night</h5>
          <ul>
            <li>Ensure all your lights are clean and working</li>
            <li>Use high beams on dark roads when no other vehicles are present</li>
            <li>Switch to low beams for oncoming traffic or when following another car</li>
            <li>Reduce speed to stay within your "sight distance"</li>
            <li>Watch for pedestrians, cyclists, and animals that are harder to see</li>
            <li>Be alert for impaired drivers (late nights and weekends)</li>
          </ul>

          <h5>Sun Glare</h5>
          <ul>
            <li>Keep your windshield clean (inside and outside)</li>
            <li>Use your sun visor</li>
            <li>Wear polarized sunglasses</li>
            <li>Increase following distance when visibility is impaired</li>
            <li>Be especially careful at dawn and dusk</li>
          </ul>

          <h5>Construction Zones</h5>
          <ul>
            <li>Obey reduced speed limits—fines are doubled</li>
            <li>Watch for workers and equipment near the road</li>
            <li>Be prepared for sudden lane changes and stops</li>
            <li>Don't tailgate—conditions change rapidly</li>
            <li>Merge early when lanes are ending</li>
          </ul>

          <h3>The Benefits of Defensive Driving</h3>
          
          <p>Practicing defensive driving techniques provides multiple benefits:</p>

          <div class="benefits-box">
            <h4>✅ Safety Benefits</h4>
            <ul>
              <li>Significantly reduced crash risk</li>
              <li>Better ability to avoid crashes caused by others</li>
              <li>Improved handling of emergency situations</li>
              <li>Protection for yourself, passengers, and other road users</li>
            </ul>

            <h4>✅ Financial Benefits</h4>
            <ul>
              <li>Insurance discounts (5-15% from many providers)</li>
              <li>Fewer tickets and points</li>
              <li>No accident-related repair costs</li>
              <li>No medical bills or lost wages from injuries</li>
              <li>Lower long-term insurance rates from clean record</li>
            </ul>

            <h4>✅ Personal Benefits</h4>
            <ul>
              <li>Less stress while driving</li>
              <li>Greater confidence on the road</li>
              <li>More relaxed arrival at destinations</li>
              <li>Being a positive example for other drivers and passengers</li>
            </ul>
          </div>

          <h3>Module Summary</h3>
          
          <ul>
            <li>Defensive driving starts with the right mindset—expecting the unexpected and prioritizing safety</li>
            <li>The three-second rule provides minimum safe following distance; increase it in poor conditions</li>
            <li>Continuous scanning (10-15 seconds ahead, mirrors every 5-8 seconds) builds situational awareness</li>
            <li>Space management creates a safety buffer around your vehicle</li>
            <li>Predicting other drivers' actions helps you prepare for their mistakes</li>
            <li>Always have an escape route—know where you would go if something goes wrong</li>
            <li>Intersections require extra caution—look left-right-left even with a green light</li>
            <li>Adapt your driving to weather, visibility, and road conditions</li>
          </ul>

          <div class="alert alert-success">
            <h4>✅ Module 5 Complete</h4>
            <p>You've completed the Defensive Driving Techniques module. In the next module, we'll cover Road Signs and Signals—understanding the language of the road.</p>
          </div>
        `,
        quizQuestions: [
          {
            questionText: 'What is the minimum following distance recommended under ideal driving conditions?',
            options: ['1 second', '2 seconds', '3 seconds', '5 seconds'],
            correctAnswer: '3 seconds',
            explanation: 'The three-second rule provides the minimum safe following distance under ideal conditions. Increase this in rain, fog, or other poor conditions.'
          },
          {
            questionText: 'How far ahead should you be scanning while driving at highway speeds?',
            options: ['100 feet', '5-8 seconds', '10-15 seconds', '1 car length'],
            correctAnswer: '10-15 seconds',
            explanation: 'Defensive drivers scan 10-15 seconds ahead of their vehicle, which is about a quarter mile at highway speeds. This gives time to identify and prepare for hazards.'
          },
          {
            questionText: 'If someone is tailgating you, what should you do?',
            options: ['Brake suddenly to teach them a lesson', 'Speed up to increase the gap behind you', 'Increase your following distance ahead and let them pass when safe', 'Match their aggressive driving'],
            correctAnswer: 'Increase your following distance ahead and let them pass when safe',
            explanation: 'When tailgated, increase your following distance ahead (so you can brake more gradually) and safely move over to let them pass. Never brake check or engage aggressively.'
          },
          {
            questionText: 'True or False: When your traffic light turns green, you should immediately accelerate through the intersection.',
            questionType: 'true_false',
            options: ['True', 'False'],
            correctAnswer: 'False',
            explanation: 'Even with a green light, you should pause briefly and look left-right-left for red-light runners before proceeding through an intersection.'
          },
          {
            questionText: 'Which of the following is NOT a key component of defensive driving?',
            options: ['Maintaining safe following distance', 'Continuous scanning', 'Driving faster to spend less time on the road', 'Having an escape route'],
            correctAnswer: 'Driving faster to spend less time on the road',
            explanation: 'Defensive driving involves maintaining safe distances, scanning, having escape routes, and adapting to conditions—not driving faster.'
          },
          {
            questionText: 'In rainy conditions, your following distance should be:',
            options: ['The same as dry conditions (3 seconds)', 'Increased to 4-5 seconds', 'Decreased since you need to focus more', 'Whatever feels comfortable'],
            correctAnswer: 'Increased to 4-5 seconds',
            explanation: 'In rain, stopping distances increase significantly. You should increase your following distance to at least 4-5 seconds to allow for safe stopping.'
          }
        ]
      },

      // =========================================
      // MODULE 6: Road Signs and Signals
      // Estimated Reading Time: 30-35 minutes
      // =========================================
      {
        title: 'Module 6: Road Signs and Signals',
        description: 'Understanding traffic signs, signals, and pavement markings for safe navigation',
        estimatedMinutes: 35,
        content: `
          <h2>Road Signs and Signals: The Language of the Road</h2>
          
          <p>Road signs and signals are the universal language that allows millions of drivers to share the roads safely. They communicate rules, warnings, and guidance without requiring a single word to be spoken. Understanding and obeying these signs isn't just about avoiding tickets—it's about keeping yourself and others safe.</p>

          <p>In Florida alone, there are over 120,000 miles of public roads with millions of signs, signals, and pavement markings. Every driver is expected to know what these mean and respond appropriately. This module will refresh your knowledge of these critical communication tools.</p>

          <h3>Categories of Road Signs</h3>
          
          <p>Road signs are categorized by their purpose, and you can often tell a sign's general meaning by its shape and color.</p>

          <h4>Sign Shapes and Their Meanings</h4>
          <table class="info-table">
            <tr><th>Shape</th><th>Meaning</th><th>Examples</th></tr>
            <tr><td>Octagon (8 sides)</td><td>Stop</td><td>Stop sign only</td></tr>
            <tr><td>Triangle (pointing down)</td><td>Yield</td><td>Yield sign</td></tr>
            <tr><td>Circle</td><td>Railroad crossing</td><td>Advance warning of railroad</td></tr>
            <tr><td>Pentagon (5 sides)</td><td>School zone</td><td>School crossing, school zone</td></tr>
            <tr><td>Diamond</td><td>Warning</td><td>Curve ahead, merging traffic, deer crossing</td></tr>
            <tr><td>Rectangle (vertical)</td><td>Regulatory</td><td>Speed limit, no parking, one way</td></tr>
            <tr><td>Rectangle (horizontal)</td><td>Guide or informational</td><td>Mile markers, exit info, street names</td></tr>
          </table>

          <h4>Sign Colors and Their Meanings</h4>
          <table class="info-table">
            <tr><th>Color</th><th>Meaning</th><th>Examples</th></tr>
            <tr><td>Red</td><td>Stop, yield, or prohibition</td><td>Stop sign, yield, do not enter, wrong way</td></tr>
            <tr><td>Yellow</td><td>Warning</td><td>Curve ahead, pedestrian crossing, slippery when wet</td></tr>
            <tr><td>Orange</td><td>Construction/Work zone</td><td>Road work ahead, detour, lane closed</td></tr>
            <tr><td>Green</td><td>Guide/Direction</td><td>Highway exits, mile markers, street names</td></tr>
            <tr><td>Blue</td><td>Services</td><td>Hospital, food, gas, rest areas</td></tr>
            <tr><td>Brown</td><td>Recreation/Cultural</td><td>Parks, historic sites, scenic areas</td></tr>
            <tr><td>White</td><td>Regulatory</td><td>Speed limit, lane use, parking regulations</td></tr>
          </table>

          <h3>Regulatory Signs: Rules You Must Obey</h3>
          
          <p>Regulatory signs give you orders. They tell you what you must do or must not do. Disobeying regulatory signs can result in citations, points on your license, and increased risk of accidents.</p>

          <h4>Stop Signs</h4>
          <ul>
            <li><strong>Shape:</strong> Octagon (8-sided), red with white letters</li>
            <li><strong>Requirement:</strong> Come to a complete stop behind the stop line, crosswalk, or before entering the intersection</li>
            <li><strong>At a 4-way stop:</strong> First vehicle to stop has right-of-way; if arriving simultaneously, yield to the vehicle on your right</li>
            <li><strong>Common mistake:</strong> Rolling stops—the vehicle must come to a complete stop with no forward motion</li>
          </ul>

          <h4>Yield Signs</h4>
          <ul>
            <li><strong>Shape:</strong> Triangle pointing downward, red and white</li>
            <li><strong>Requirement:</strong> Slow down and prepare to stop if necessary; give right-of-way to traffic and pedestrians</li>
            <li><strong>When to stop:</strong> If traffic is approaching that you would interfere with</li>
          </ul>

          <h4>Speed Limit Signs</h4>
          <ul>
            <li><strong>Shape:</strong> Vertical rectangle, white with black letters</li>
            <li><strong>Requirement:</strong> Do not exceed the posted speed under normal conditions</li>
            <li><strong>Important:</strong> Speed limits are maximum speeds for ideal conditions—you must reduce speed in rain, fog, or heavy traffic</li>
          </ul>

          <div class="alert alert-info">
            <h4>💡 Florida Speed Limit Guide</h4>
            <ul>
              <li><strong>School zones:</strong> 20 mph (when children present or during posted hours)</li>
              <li><strong>Residential areas:</strong> 30 mph (unless otherwise posted)</li>
              <li><strong>Business districts:</strong> 30 mph (unless otherwise posted)</li>
              <li><strong>Highways:</strong> 55-70 mph (as posted)</li>
              <li><strong>Interstate rural areas:</strong> Up to 70 mph</li>
            </ul>
          </div>

          <h4>Other Important Regulatory Signs</h4>
          <ul>
            <li><strong>Do Not Enter:</strong> Red circle with white rectangle—do not drive past this point</li>
            <li><strong>Wrong Way:</strong> Red rectangle—you are driving against traffic; stop and turn around</li>
            <li><strong>One Way:</strong> Black/white arrow—traffic flows only in the direction shown</li>
            <li><strong>No U-Turn:</strong> You may not make a U-turn at this location</li>
            <li><strong>No Left Turn/No Right Turn:</strong> Turns in the indicated direction are prohibited</li>
            <li><strong>Keep Right:</strong> Stay to the right of a divider or obstruction</li>
            <li><strong>Lane Use Control:</strong> Indicates which lanes may be used for through traffic, turns, etc.</li>
          </ul>

          <h3>Warning Signs: Alerts to Potential Hazards</h3>
          
          <p>Warning signs alert you to conditions that require caution or a change in your driving. They are typically yellow (permanent) or orange (temporary/construction).</p>

          <h4>Common Warning Signs</h4>
          <ul>
            <li><strong>Curve/Turn Ahead:</strong> Arrow showing direction of curve—slow down before entering</li>
            <li><strong>Intersection Ahead:</strong> Cross or T-shape—prepare for cross traffic</li>
            <li><strong>Merge:</strong> Traffic from another road will be entering your lane</li>
            <li><strong>Lane Ends:</strong> Your lane is ending; merge into adjacent lane</li>
            <li><strong>Pedestrian Crossing:</strong> Watch for people crossing the road</li>
            <li><strong>School Zone/Crossing:</strong> Reduce speed and watch for children</li>
            <li><strong>Deer Crossing:</strong> Animals may be on or near the road</li>
            <li><strong>Slippery When Wet:</strong> Road surface is dangerous in rain</li>
            <li><strong>Railroad Crossing:</strong> Train tracks ahead—be prepared to stop</li>
            <li><strong>Stop Ahead:</strong> Stop sign is coming—begin slowing</li>
            <li><strong>Signal Ahead:</strong> Traffic signal is coming</li>
          </ul>

          <h4>Construction Zone Signs (Orange)</h4>
          <ul>
            <li><strong>Road Work Ahead:</strong> Construction or maintenance activity ahead</li>
            <li><strong>Flagger Ahead:</strong> A person will be directing traffic</li>
            <li><strong>Lane Closed:</strong> One or more lanes are not available</li>
            <li><strong>Detour:</strong> Follow alternate route</li>
            <li><strong>Speed Limit (in work zones):</strong> Reduced speeds are strictly enforced with doubled fines</li>
          </ul>

          <div class="alert alert-warning">
            <h4>⚠️ Construction Zone Penalties in Florida</h4>
            <p>Fines for speeding and other violations are <strong>doubled</strong> in construction zones when workers are present. A $150 speeding ticket becomes $300. These zones are strictly enforced to protect workers.</p>
          </div>

          <h3>Traffic Signals</h3>
          
          <p>Traffic signals control the flow of traffic at intersections and other locations. Understanding exactly what each signal means—and what it requires—is essential.</p>

          <h4>Standard Traffic Lights</h4>
          
          <h5>Red Light</h5>
          <ul>
            <li><strong>Meaning:</strong> Stop</li>
            <li><strong>Action:</strong> Come to a complete stop behind the stop line or crosswalk</li>
            <li><strong>Right turn on red:</strong> Permitted after a complete stop, unless a sign prohibits it; you must yield to all traffic and pedestrians</li>
            <li><strong>Left turn on red:</strong> Only permitted from a one-way street onto another one-way street (after stopping and yielding)</li>
          </ul>

          <h5>Yellow Light</h5>
          <ul>
            <li><strong>Meaning:</strong> Caution—the light is about to turn red</li>
            <li><strong>Action:</strong> Stop if you can do so safely; if you're too close to stop safely, proceed with caution</li>
            <li><strong>Common mistake:</strong> Using yellow as a signal to speed up—this is dangerous and can result in running a red light</li>
          </ul>

          <h5>Green Light</h5>
          <ul>
            <li><strong>Meaning:</strong> Go (if safe)</li>
            <li><strong>Action:</strong> Proceed through the intersection if it is clear; yield to vehicles and pedestrians already in the intersection</li>
            <li><strong>Important:</strong> Green means it's legal to go, not that it's necessarily safe—always verify before entering</li>
          </ul>

          <h4>Arrow Signals</h4>
          <ul>
            <li><strong>Green arrow:</strong> Protected turn in the direction indicated; oncoming traffic is stopped</li>
            <li><strong>Yellow arrow:</strong> Protected turn is ending; prepare to stop or complete turn with caution</li>
            <li><strong>Red arrow:</strong> Do not turn in the indicated direction; wait for green arrow or green light</li>
          </ul>

          <h4>Flashing Signals</h4>
          <ul>
            <li><strong>Flashing red:</strong> Treat as a stop sign—come to complete stop, then proceed when safe</li>
            <li><strong>Flashing yellow:</strong> Proceed with caution; slow down and watch for hazards</li>
          </ul>

          <h3>Pavement Markings</h3>
          
          <p>Pavement markings provide guidance without requiring you to look away from the road. Understanding these markings is crucial for lane positioning and legal driving.</p>

          <h4>Line Colors</h4>
          <ul>
            <li><strong>Yellow lines:</strong> Separate traffic flowing in opposite directions</li>
            <li><strong>White lines:</strong> Separate traffic flowing in the same direction</li>
          </ul>

          <h4>Yellow Line Markings</h4>
          <ul>
            <li><strong>Broken yellow line:</strong> Passing is permitted when safe</li>
            <li><strong>Solid yellow line:</strong> Passing is prohibited on your side</li>
            <li><strong>Double solid yellow lines:</strong> No passing in either direction</li>
            <li><strong>Solid yellow next to broken yellow:</strong> Passing permitted only from the broken-line side</li>
          </ul>

          <h4>White Line Markings</h4>
          <ul>
            <li><strong>Broken white line:</strong> Lane changes permitted when safe</li>
            <li><strong>Solid white line:</strong> Lane changes discouraged (but not always prohibited)</li>
            <li><strong>Double solid white lines:</strong> Lane changes prohibited</li>
          </ul>

          <h4>Other Pavement Markings</h4>
          <ul>
            <li><strong>Stop line:</strong> White line showing where to stop at intersections</li>
            <li><strong>Crosswalk:</strong> White lines marking pedestrian crossing area</li>
            <li><strong>Turn arrows:</strong> Indicate required or permitted lane movements</li>
            <li><strong>"ONLY" markings:</strong> Indicate turn-only or through-only lanes</li>
            <li><strong>HOV markings:</strong> Diamond shape indicates high-occupancy vehicle lane</li>
            <li><strong>Railroad crossing:</strong> Large X marks pavement near tracks</li>
          </ul>

          <div class="case-study">
            <h4>📋 Real-World Case Study: The Cost of Ignoring Signs</h4>
            <p><strong>Wrong-Way Driver (Florida Turnpike):</strong></p>
            <p>A driver unfamiliar with an interchange entered the Florida Turnpike the wrong way, ignoring "Do Not Enter" and "Wrong Way" signs. Despite multiple signs and reflectors designed to warn of the mistake, the driver continued for nearly a mile before a head-on collision with another vehicle.</p>
            <p>The crash killed two people and seriously injured three others. The investigation found that the wrong-way driver had been distracted and missed the clear signage warning of the error.</p>
            <p><em>Signs save lives—but only if you see them and obey them.</em></p>
          </div>

          <h3>Special Florida Considerations</h3>
          
          <h4>School Zones</h4>
          <ul>
            <li>Speed limit reduced to 20 mph during posted hours or when children are present</li>
            <li>Watch for flashing lights indicating active school zone hours</li>
            <li>Fines are increased in school zones</li>
            <li>Cell phones must be hands-free in school zones</li>
          </ul>

          <h4>Toll Roads</h4>
          <ul>
            <li>Florida has extensive toll roads (Turnpike, expressways)</li>
            <li>SunPass, E-Pass, and other transponders allow cashless payment</li>
            <li>Watch for toll-by-plate lanes vs. SunPass-only lanes</li>
            <li>Speed limits may vary on toll roads</li>
          </ul>

          <h3>Module Summary</h3>
          
          <ul>
            <li>Sign shapes and colors indicate their general purpose before you read them</li>
            <li>Regulatory signs (like stop, yield, speed limits) must be obeyed</li>
            <li>Warning signs alert you to hazards—slow down and prepare</li>
            <li>Construction zones have doubled fines—always obey reduced speeds</li>
            <li>Traffic signals: Red = Stop, Yellow = Caution/Prepare to Stop, Green = Go if safe</li>
            <li>Yellow pavement lines separate opposing traffic; white lines separate same-direction traffic</li>
            <li>School zones require 20 mph speeds and hands-free phone use</li>
          </ul>

          <div class="alert alert-success">
            <h4>✅ Module 6 Complete</h4>
            <p>You've completed the Road Signs and Signals module. In the next module, we'll cover Sharing the Road—safely interacting with pedestrians, cyclists, motorcyclists, and large vehicles.</p>
          </div>
        `,
        quizQuestions: [
          {
            questionText: 'What shape is a stop sign?',
            options: ['Circle', 'Diamond', 'Octagon (8 sides)', 'Rectangle'],
            correctAnswer: 'Octagon (8 sides)',
            explanation: 'A stop sign is the only sign with an octagonal (8-sided) shape, making it recognizable even if damaged or covered with snow.'
          },
          {
            questionText: 'What color are construction zone warning signs?',
            options: ['Yellow', 'Orange', 'Red', 'Green'],
            correctAnswer: 'Orange',
            explanation: 'Construction and work zone signs are orange. Regular warning signs are yellow.'
          },
          {
            questionText: 'A flashing red traffic signal means:',
            options: ['Speed up to clear the intersection', 'Proceed with caution', 'Treat it as a stop sign', 'The signal is broken—ignore it'],
            correctAnswer: 'Treat it as a stop sign',
            explanation: 'A flashing red signal requires you to come to a complete stop and yield to traffic and pedestrians before proceeding.'
          },
          {
            questionText: 'Double solid yellow lines on the road indicate:',
            options: ['Passing is permitted with caution', 'Passing is prohibited in both directions', 'Lane change is encouraged', 'The road is under construction'],
            correctAnswer: 'Passing is prohibited in both directions',
            explanation: 'Double solid yellow lines separate opposing traffic and indicate no passing is allowed from either direction.'
          },
          {
            questionText: 'True or False: When a traffic light is green, you should immediately enter the intersection without checking cross traffic.',
            questionType: 'true_false',
            options: ['True', 'False'],
            correctAnswer: 'False',
            explanation: 'A green light means it\'s legal to proceed, but you should still verify the intersection is clear. Always check for red-light runners before entering.'
          },
          {
            questionText: 'What is the speed limit in Florida school zones when children are present?',
            options: ['15 mph', '20 mph', '25 mph', '30 mph'],
            correctAnswer: '20 mph',
            explanation: 'Florida school zones have a 20 mph speed limit during posted hours or when children are present.'
          }
        ]
      },

      // =========================================
      // MODULE 7: Sharing the Road
      // Estimated Reading Time: 35-40 minutes
      // =========================================
      {
        title: 'Module 7: Sharing the Road',
        description: 'Safely interacting with pedestrians, cyclists, motorcyclists, and large vehicles',
        estimatedMinutes: 40,
        content: `
          <h2>Sharing the Road: Safely Coexisting with All Road Users</h2>
          
          <p>Florida's roads aren't just for cars and trucks. Every day, millions of people travel by foot, bicycle, motorcycle, or large commercial vehicle—each with different capabilities, vulnerabilities, and rights. Understanding how to safely share the road with these different users is essential for preventing crashes and ensuring everyone reaches their destination safely.</p>

          <div class="statistics-box">
            <h4>📊 Vulnerable Road User Statistics in Florida</h4>
            <ul>
              <li><strong>Florida leads the nation</strong> in pedestrian and cyclist fatalities</li>
              <li>Over <strong>700 pedestrians</strong> are killed on Florida roads each year</li>
              <li>Over <strong>150 cyclists</strong> are killed annually in Florida</li>
              <li><strong>Motorcycle fatalities</strong> average over 550 per year in Florida</li>
              <li><strong>80%</strong> of pedestrian deaths occur in urban areas</li>
              <li>Most pedestrian and cyclist crashes happen at <strong>non-intersection locations</strong></li>
              <li><strong>Large truck crashes</strong> result in fatalities at twice the rate of passenger vehicle crashes</li>
            </ul>
          </div>

          <h3>Pedestrians: Protecting the Most Vulnerable</h3>
          
          <p>Pedestrians have no protection in a collision with a motor vehicle. Even at low speeds, being struck by a car can cause serious injury or death. Florida law gives pedestrians specific rights, and drivers have a legal and moral obligation to protect them.</p>

          <h4>Florida Pedestrian Laws</h4>
          <ul>
            <li><strong>Crosswalks:</strong> Drivers must yield to pedestrians in crosswalks, whether marked or unmarked (an unmarked crosswalk exists at any intersection)</li>
            <li><strong>Stopping for pedestrians:</strong> When a pedestrian is crossing in a crosswalk, you must stop and remain stopped until they have completely crossed</li>
            <li><strong>No passing:</strong> It is illegal to pass a vehicle that has stopped for a pedestrian at a crosswalk</li>
            <li><strong>Sidewalks:</strong> When crossing a sidewalk (such as exiting a driveway or parking lot), you must yield to pedestrians</li>
          </ul>

          <h4>High-Risk Pedestrian Situations</h4>
          
          <h5>School Zones</h5>
          <ul>
            <li>Reduce speed to 20 mph during posted hours</li>
            <li>Watch for children who may dart into the street unexpectedly</li>
            <li>Be especially alert at crosswalks and crossing guard locations</li>
            <li>Stop when a school crossing guard displays a stop sign</li>
            <li>Never pass a stopped school bus with flashing red lights</li>
          </ul>

          <h5>Residential Areas</h5>
          <ul>
            <li>Watch for children playing near the street</li>
            <li>Be alert for balls, toys, or pets that might indicate children nearby</li>
            <li>Reduce speed even if there's no posted speed limit change</li>
            <li>Check driveways and between parked cars for pedestrians</li>
          </ul>

          <h5>Night Time</h5>
          <ul>
            <li>Pedestrians are much harder to see at night, especially if wearing dark clothing</li>
            <li>Be especially vigilant in areas near bars, restaurants, and entertainment venues</li>
            <li>Impaired pedestrians may behave unpredictably</li>
            <li>Use your headlights properly and scan for movement at the edge of your light beam</li>
          </ul>

          <div class="case-study">
            <h4>📋 Real-World Case Study: The Hidden Pedestrian</h4>
            <p><strong>A Tragic Lesson (Orlando, FL):</strong></p>
            <p>A driver was traveling on International Drive after dark. The road was busy and well-lit, but a pedestrian wearing dark clothing was crossing mid-block—not at a crosswalk. The driver didn't see the pedestrian until it was too late.</p>
            <p>Although the pedestrian was partially at fault for crossing improperly, the driver faced years of guilt and legal consequences. "I wish I had been driving slower," the driver said. "I wish I had been scanning more carefully. A few seconds of extra caution might have saved a life."</p>
            <p><em>Even when pedestrians make mistakes, drivers often have the last chance to prevent a tragedy.</em></p>
          </div>

          <h3>Cyclists: Sharing the Lane</h3>
          
          <p>Bicyclists in Florida have the same rights and responsibilities as motor vehicle drivers. They are legally entitled to use the road, and drivers must respect their space.</p>

          <h4>Florida Bicycle Laws</h4>
          <ul>
            <li><strong>Same rights:</strong> Cyclists have the same rights to the roadway as motor vehicles</li>
            <li><strong>Passing distance:</strong> When passing a cyclist, you must provide at least <strong>3 feet of clearance</strong> (though Florida Safe Passing law recommends more when possible)</li>
            <li><strong>Bike lanes:</strong> When a bike lane is present, cyclists should use it, but they may leave it for safety reasons</li>
            <li><strong>No honking:</strong> Honking at cyclists can startle them and cause crashes; pass safely instead</li>
          </ul>

          <h4>Safe Practices Around Cyclists</h4>
          <ul>
            <li><strong>Pass only when safe:</strong> Wait for a safe opportunity—never squeeze past a cyclist with oncoming traffic</li>
            <li><strong>Give plenty of space:</strong> 3 feet minimum, more at higher speeds</li>
            <li><strong>Check before turning right:</strong> A cyclist may be in your blind spot or the bike lane</li>
            <li><strong>Check before opening your door:</strong> "Dooring" (opening a car door into a cyclist's path) is a common cause of serious injuries</li>
            <li><strong>Be patient:</strong> Cyclists may need to move into the travel lane to avoid hazards</li>
            <li><strong>Expect the unexpected:</strong> Cyclists may swerve to avoid potholes or debris</li>
          </ul>

          <div class="alert alert-warning">
            <h4>⚠️ The "Dutch Reach" Technique</h4>
            <p>To prevent "dooring" cyclists when exiting your parked car, use the "Dutch Reach": open the door with your <strong>far hand</strong> (right hand if you're the driver). This naturally turns your body and helps you see approaching cyclists and traffic before opening the door fully.</p>
          </div>

          <h3>Motorcyclists: See Them, Save Them</h3>
          
          <p>Motorcyclists face unique dangers on the road. Their smaller profile makes them harder to see, and they have no protection in a crash. As a driver, your awareness can save a motorcyclist's life.</p>

          <h4>Why Motorcycles Are Hard to See</h4>
          <ul>
            <li><strong>Small profile:</strong> Motorcycles take up a fraction of the visual space of a car</li>
            <li><strong>Hidden by objects:</strong> They can disappear behind posts, mirrors, or other vehicles</li>
            <li><strong>Speed deception:</strong> Their small size makes it hard to judge their speed and distance</li>
            <li><strong>Inattentional blindness:</strong> When drivers are looking for cars, they may literally not "see" motorcycles</li>
          </ul>

          <h4>The Most Common Motorcycle Crash</h4>
          <p>The most common type of fatal motorcycle crash involves a car turning left in front of an oncoming motorcycle. The driver typically says, "I never saw them." This is why the "Look Twice—Save a Life" campaign exists.</p>

          <h4>Safe Practices Around Motorcycles</h4>
          <ul>
            <li><strong>Look twice:</strong> Before turning or changing lanes, look specifically for motorcycles</li>
            <li><strong>Double-check blind spots:</strong> Motorcycles can easily hide in your blind spots</li>
            <li><strong>Give extra following distance:</strong> Motorcycles can stop much faster than cars</li>
            <li><strong>Don't share lanes:</strong> Even though motorcycles are small, they are entitled to the full lane</li>
            <li><strong>Watch for turn signals:</strong> Many motorcycle turn signals don't self-cancel</li>
            <li><strong>Be careful at intersections:</strong> Look both ways specifically for motorcycles</li>
            <li><strong>Account for road conditions:</strong> Motorcycles are more affected by rain, gravel, and debris</li>
          </ul>

          <div class="reflection-question">
            <h4>🤔 Reflection Question</h4>
            <p>Think about the last time you turned left across traffic. Did you specifically look for motorcycles? How might you change your scanning habits to better protect motorcyclists?</p>
          </div>

          <h3>Large Trucks and Buses: Respecting Their Limitations</h3>
          
          <p>Commercial vehicles like semi-trucks, buses, and delivery vehicles operate under different constraints than passenger cars. Understanding their limitations helps you stay safe around them.</p>

          <h4>Key Differences for Large Vehicles</h4>
          <ul>
            <li><strong>Stopping distance:</strong> A fully loaded semi-truck traveling 65 mph needs nearly 600 feet to stop—almost the length of two football fields</li>
            <li><strong>Acceleration:</strong> Large vehicles accelerate slowly, especially on hills</li>
            <li><strong>Maneuverability:</strong> Wide turns, limited ability to swerve</li>
            <li><strong>Blind spots:</strong> Much larger than passenger vehicles</li>
            <li><strong>Wind effects:</strong> Large vehicles create air turbulence when passed</li>
          </ul>

          <h4>The "No-Zone": Truck Blind Spots</h4>
          <p>Large trucks have four major blind spots where cars can effectively disappear from the driver's view:</p>
          
          <ul>
            <li><strong>Front blind spot:</strong> 20 feet directly in front of the cab—truck drivers can't see vehicles that cut in too closely</li>
            <li><strong>Rear blind spot:</strong> 30 feet or more behind the trailer—no rearview mirror can see this area</li>
            <li><strong>Left side blind spot:</strong> Runs from the cab door back at an angle—smaller than the right side</li>
            <li><strong>Right side blind spot:</strong> The largest—extends from the cab door diagonally backward for multiple lanes</li>
          </ul>

          <div class="alert alert-info">
            <h4>💡 The Mirror Rule</h4>
            <p>Here's a simple rule: <strong>If you can't see the truck driver's face in their side mirror, they can't see you.</strong> Avoid lingering in blind spots—either pass or drop back to where you're visible.</p>
          </div>

          <h4>Safe Practices Around Large Vehicles</h4>
          <ul>
            <li><strong>Don't cut in front:</strong> Allow at least one car length for every 10 mph when passing</li>
            <li><strong>Pass quickly and safely:</strong> Don't linger alongside—pass and move ahead</li>
            <li><strong>Stay visible:</strong> Avoid the no-zones, especially the right side</li>
            <li><strong>Watch for wide turns:</strong> Trucks may swing wide left before turning right</li>
            <li><strong>Give extra space:</strong> Following too closely means you can't see ahead</li>
            <li><strong>Be patient:</strong> Trucks on hills may slow down significantly</li>
            <li><strong>Avoid distractions around trucks:</strong> You have less room for error</li>
          </ul>

          <h3>School Buses: Protecting Our Children</h3>
          
          <p>School buses carry our most precious cargo. Florida law imposes strict requirements on drivers when approaching school buses.</p>

          <h4>Florida School Bus Laws</h4>
          <ul>
            <li><strong>When bus lights flash red and the stop arm extends:</strong> ALL traffic in BOTH directions must stop (unless separated by a raised median or barrier)</li>
            <li><strong>Where to stop:</strong> At least 20 feet from the bus</li>
            <li><strong>How long to stop:</strong> Remain stopped until the lights stop flashing and the stop arm retracts</li>
            <li><strong>Divided highways with barrier:</strong> Traffic in the opposite direction is not required to stop if there's a physical barrier (median, concrete divider)</li>
          </ul>

          <h4>Penalties for Passing a Stopped School Bus</h4>
          <table class="info-table">
            <tr><th>Violation</th><th>Penalty</th></tr>
            <tr><td>First offense</td><td>$400-$500 fine + 4 points on license</td></tr>
            <tr><td>Second offense within 5 years</td><td>$800-$1000 fine + 4 points + possible suspension</td></tr>
            <tr><td>Third offense within 5 years</td><td>Minimum $1000 fine + 4 points + license suspension</td></tr>
            <tr><td>Causing injury to a child</td><td>Felony charges possible</td></tr>
          </table>

          <div class="alert alert-danger">
            <h4>⚠️ Children Are Unpredictable</h4>
            <p>Children exiting school buses may run into the street unexpectedly. They may drop something and go back for it. They may not look for traffic. <strong>Always assume children will do the unexpected</strong> and be prepared to stop.</p>
          </div>

          <h3>Emergency Vehicles: Reviewed</h3>
          
          <p>As covered in Module 4, always yield to emergency vehicles with flashing lights and sirens. Move over and stop when they approach. When passing emergency vehicles stopped on the roadside, move over a lane or slow to 20 mph below the speed limit.</p>

          <h3>Module Summary</h3>
          
          <ul>
            <li><strong>Pedestrians:</strong> Yield at crosswalks, watch for them in school zones and at night, stop when they're crossing</li>
            <li><strong>Cyclists:</strong> Give at least 3 feet when passing, don't honk, check before turning right</li>
            <li><strong>Motorcyclists:</strong> Look twice before turning or changing lanes, don't share lanes, give extra following distance</li>
            <li><strong>Large trucks:</strong> Avoid blind spots, don't cut in front, allow extra room for stopping and turning</li>
            <li><strong>School buses:</strong> Stop when red lights flash and stop arm extends, wait until they retract</li>
            <li>Every road user deserves respect and safety consideration</li>
          </ul>

          <div class="alert alert-success">
            <h4>✅ Module 7 Complete</h4>
            <p>You've completed the Sharing the Road module. In the final module, we'll cover Certification Requirements and prepare you for the Final Assessment.</p>
          </div>
        `,
        quizQuestions: [
          {
            questionText: 'When passing a cyclist in Florida, you must maintain a minimum distance of:',
            options: ['1 foot', '2 feet', '3 feet', '5 feet'],
            correctAnswer: '3 feet',
            explanation: 'Florida law requires a minimum of 3 feet clearance when passing a cyclist, though more distance is recommended at higher speeds.'
          },
          {
            questionText: 'What should you do when a school bus displays flashing red lights and extends its stop arm?',
            options: ['Slow down and proceed with caution', 'Stop only if you\'re behind the bus', 'Stop in both directions unless divided by a barrier', 'Honk to warn the children'],
            correctAnswer: 'Stop in both directions unless divided by a barrier',
            explanation: 'When a school bus has flashing red lights and the stop arm extended, ALL traffic in BOTH directions must stop (unless separated by a raised median or physical barrier).'
          },
          {
            questionText: 'The most common type of fatal motorcycle crash involves:',
            options: ['Rear-end collisions', 'A car turning left in front of the motorcycle', 'Motorcycle speeding', 'Road debris'],
            correctAnswer: 'A car turning left in front of the motorcycle',
            explanation: 'The most common fatal motorcycle crash occurs when a car driver turns left in front of an oncoming motorcycle, often because the driver didn\'t see the motorcycle.'
          },
          {
            questionText: 'If you can\'t see a truck driver\'s face in their side mirror, what does that mean?',
            options: ['The mirror is broken', 'The driver is distracted', 'The truck driver can\'t see you', 'You\'re following at a safe distance'],
            correctAnswer: 'The truck driver can\'t see you',
            explanation: 'If you can\'t see the truck driver\'s face in their mirror, you\'re in their blind spot and they cannot see you.'
          },
          {
            questionText: 'True or False: Cyclists in Florida have the same rights to use the roadway as motor vehicles.',
            questionType: 'true_false',
            options: ['True', 'False'],
            correctAnswer: 'True',
            explanation: 'Florida law gives cyclists the same rights and responsibilities as motor vehicle drivers. They are legally entitled to use the road.'
          },
          {
            questionText: 'What is the penalty for a first offense of passing a stopped school bus in Florida?',
            options: ['$100-$200 fine', '$400-$500 fine + 4 points', 'Warning only', 'License suspension'],
            correctAnswer: '$400-$500 fine + 4 points',
            explanation: 'A first offense for passing a stopped school bus carries a $400-$500 fine plus 4 points on your driving record.'
          }
        ]
      },

      // =========================================
      // MODULE 8: Certification & Final Assessment
      // Estimated Reading Time: 20-25 minutes
      // =========================================
      {
        title: 'Module 8: Certification & Final Assessment',
        description: 'Course completion requirements, certificate information, and final exam preparation',
        estimatedMinutes: 25,
        content: `
          <h2>Certification & Final Assessment</h2>
          
          <p>Congratulations on reaching the final module of the Quick Pass Traffic School 4-Hour Basic Driver Improvement Course! You've covered essential topics including distracted driving, emergency situations, defensive driving techniques, road signs and signals, and sharing the road safely with all users.</p>

          <p>This final module will explain the certification process, what happens after you complete the course, and prepare you for the final assessment.</p>

          <h3>Course Completion Requirements</h3>
          
          <p>To successfully complete this course and receive your certificate, you must:</p>
          
          <ol>
            <li><strong>Complete all course modules:</strong> You must view all content in each of the 8 modules</li>
            <li><strong>Pass module quizzes:</strong> Each module includes quiz questions to reinforce learning</li>
            <li><strong>Pass the final examination:</strong> Score at least 80% on the final exam</li>
            <li><strong>Verify your identity:</strong> Complete identity verification as required by Florida law</li>
          </ol>

          <h4>Final Examination Details</h4>
          <table class="info-table">
            <tr><th>Requirement</th><th>Details</th></tr>
            <tr><td>Number of Questions</td><td>Minimum 30 questions</td></tr>
            <tr><td>Question Types</td><td>Multiple choice and True/False</td></tr>
            <tr><td>Passing Score</td><td>80% or higher</td></tr>
            <tr><td>Attempts Allowed</td><td>Multiple (if you don't pass, you can retake)</td></tr>
            <tr><td>Format</td><td>Open-book (you may refer to course materials)</td></tr>
            <tr><td>Time Limit</td><td>No strict time limit—take your time</td></tr>
          </table>

          <h3>What Your Certificate Accomplishes</h3>
          
          <p>Your certificate of completion serves several important purposes:</p>

          <h4>Traffic Ticket Dismissal</h4>
          <p>If you elected to take this course to dismiss a traffic ticket:</p>
          <ul>
            <li>The ticket will be dismissed (no points added to your record)</li>
            <li>You avoid the fine associated with the violation</li>
            <li>Your insurance company typically won't be notified of the violation</li>
            <li>You must complete the course by the court-ordered deadline</li>
          </ul>

          <h4>Point Prevention</h4>
          <p>If you elected to take this course to prevent points from a violation:</p>
          <ul>
            <li>Points will not be added to your driving record</li>
            <li>You may have already paid the fine for the violation</li>
            <li>This option can be used up to 5 times in your lifetime (no more than once every 12 months)</li>
          </ul>

          <h4>Insurance Discounts</h4>
          <p>Many insurance companies offer discounts for completing driver improvement courses:</p>
          <ul>
            <li>Discounts typically range from 5-15%</li>
            <li>Check with your insurance provider for specific discount amounts</li>
            <li>You may need to provide a copy of your certificate</li>
            <li>Discounts usually last for 3 years before requiring course renewal</li>
          </ul>

          <h3>Certificate Delivery</h3>
          
          <p>After successfully completing the course and passing the final exam:</p>

          <h4>Electronic Submission to Florida DHSMV</h4>
          <ul>
            <li>Your completion is reported electronically to the Florida Department of Highway Safety and Motor Vehicles</li>
            <li>This is typically completed within 1-2 business days</li>
            <li>The court and DMV will be notified automatically</li>
          </ul>

          <h4>Your Certificate</h4>
          <ul>
            <li>An electronic certificate is available immediately upon completion</li>
            <li>You can download and print it for your records</li>
            <li>Keep a copy for your insurance company</li>
            <li>Store it safely—you may need proof of completion in the future</li>
          </ul>

          <h3>Important Reminders</h3>

          <div class="alert alert-warning">
            <h4>⚠️ Course Limitations</h4>
            <ul>
              <li>This course can only be used for point prevention once every 12 months</li>
              <li>You can only use the BDI course 5 times total in your lifetime for point prevention</li>
              <li>This course does NOT dismiss DUI charges, criminal traffic violations, or crashes resulting in death</li>
              <li>If you have questions about your eligibility, contact the court or your attorney</li>
            </ul>
          </div>

          <h3>Final Exam Preparation</h3>
          
          <p>Before taking the final exam, review these key concepts from each module:</p>

          <h4>Module 1: Introduction</h4>
          <ul>
            <li>The Florida points system (12 points in 12 months = 30-day suspension)</li>
            <li>Course usage limitations (5 times lifetime, once per 12 months)</li>
          </ul>

          <h4>Module 2: Distracted Driving</h4>
          <ul>
            <li>Three types of distraction: visual, manual, cognitive</li>
            <li>Florida texting law—texting is prohibited, even at red lights</li>
            <li>Hands-free requirement in school and work zones</li>
          </ul>

          <h4>Module 3: Emergency Situations</h4>
          <ul>
            <li>Tire blowout response: grip wheel, ease off gas, steer straight</li>
            <li>Brake failure response: pump brakes, downshift, use parking brake</li>
            <li>Skid recovery: steer in the direction you want to go</li>
          </ul>

          <h4>Module 4: Emergency Vehicles & Move Over Law</h4>
          <ul>
            <li>Move over or slow to 20 mph below the limit</li>
            <li>Law applies to all emergency and service vehicles</li>
            <li>Don't follow within 500 feet of responding emergency vehicles</li>
          </ul>

          <h4>Module 5: Defensive Driving</h4>
          <ul>
            <li>Three-second following distance rule (increase in poor conditions)</li>
            <li>Scan 10-15 seconds ahead</li>
            <li>Check mirrors every 5-8 seconds</li>
            <li>Always have an escape route</li>
          </ul>

          <h4>Module 6: Road Signs and Signals</h4>
          <ul>
            <li>Sign shapes and colors and their meanings</li>
            <li>Traffic signal meanings (red, yellow, green, flashing)</li>
            <li>Pavement markings (yellow = opposite directions, white = same direction)</li>
          </ul>

          <h4>Module 7: Sharing the Road</h4>
          <ul>
            <li>3 feet minimum when passing cyclists</li>
            <li>Look twice for motorcycles before turning</li>
            <li>Truck blind spots and the "no-zone"</li>
            <li>School bus stopping requirements</li>
          </ul>

          <h3>Your Commitment Going Forward</h3>
          
          <p>Completing this course is an important step, but the real test begins when you get behind the wheel. We challenge you to:</p>

          <div class="pledge-box">
            <h4>🎯 Post-Course Goals</h4>
            <ul>
              <li>Put your phone away every time you drive—no exceptions</li>
              <li>Maintain at least a 3-second following distance at all times</li>
              <li>Always move over or slow down for stopped emergency vehicles</li>
              <li>Scan the road continuously and check mirrors regularly</li>
              <li>Give extra space and attention to pedestrians, cyclists, and motorcyclists</li>
              <li>Adapt your driving to weather, traffic, and road conditions</li>
              <li>Be patient, courteous, and calm—even when others aren't</li>
              <li>Be an example of safe driving for family, friends, and other drivers</li>
            </ul>
          </div>

          <h3>Thank You</h3>
          
          <p>Thank you for taking this course seriously. By investing this time in improving your driving knowledge and skills, you're making a positive contribution to road safety in Florida. Every driver who commits to safe driving habits helps reduce accidents, injuries, and fatalities on our roads.</p>

          <p>Remember: <strong>Safe driving is not just about following laws—it's about protecting lives, including your own.</strong></p>

          <div class="alert alert-success">
            <h4>✅ Module 8 Complete - Ready for Final Exam</h4>
            <p>You've completed all 8 modules of the 4-Hour Basic Driver Improvement Course. When you're ready, proceed to the Final Examination. Good luck!</p>
            <p><strong>Remember:</strong> You need 80% or higher to pass. Take your time and think through each question carefully.</p>
          </div>
        `,
        quizQuestions: [
          {
            questionText: 'What is the minimum passing score required for the final examination?',
            options: ['70%', '75%', '80%', '90%'],
            correctAnswer: '80%',
            explanation: 'You must score at least 80% on the final examination to pass the course and receive your certificate.'
          },
          {
            questionText: 'How many times can you use the Basic Driver Improvement course for point prevention in your lifetime?',
            options: ['Unlimited', '3 times', '5 times', '10 times'],
            correctAnswer: '5 times',
            explanation: 'Florida law limits the use of the BDI course for point prevention to 5 times in your lifetime, and no more than once every 12 months.'
          },
          {
            questionText: 'True or False: This course can be used to dismiss DUI charges.',
            questionType: 'true_false',
            options: ['True', 'False'],
            correctAnswer: 'False',
            explanation: 'The Basic Driver Improvement course cannot be used to dismiss DUI charges, criminal traffic violations, or violations resulting in a crash causing death or serious injury.'
          }
        ]
      }
    ],
    // Final exam questions for the 4-hour course
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
        explanation: 'The safest first action is to pull over to a secure spot and turn on your hazard lights to alert other drivers.'
      },
      {
        questionText: 'What are the three types of driving distractions?',
        options: ['Physical, emotional, mental', 'Visual, manual, cognitive', 'Primary, secondary, tertiary', 'Internal, external, environmental'],
        correctAnswer: 'Visual, manual, cognitive',
        explanation: 'The three types of driving distractions are visual (eyes off road), manual (hands off wheel), and cognitive (mind off driving).'
      },
      {
        questionText: 'It is legal to use your phone at a red light in Florida.',
        questionType: 'true_false',
        options: ['True', 'False'],
        correctAnswer: 'False',
        explanation: 'Florida law prohibits texting while driving even when stopped at a red light.'
      },
      {
        questionText: 'You must always slow down and move over for emergency vehicles stopped on the roadside.',
        questionType: 'true_false',
        options: ['True', 'False'],
        correctAnswer: 'True',
        explanation: 'Florida\'s Move Over law requires drivers to move over or slow down for stopped emergency vehicles with flashing lights.'
      },
      {
        questionText: 'What is the recommended following distance rule under normal driving conditions?',
        options: ['1-second rule', '2-second rule', '3-second rule', '5-second rule'],
        correctAnswer: '3-second rule',
        explanation: 'The 3-second rule provides adequate reaction time under normal driving conditions.'
      },
      {
        questionText: 'When approaching a stopped emergency vehicle on a multi-lane highway, you must:',
        options: ['Speed up to pass quickly', 'Maintain your speed', 'Move over to a non-adjacent lane or slow to 20 mph below the limit', 'Stop completely'],
        correctAnswer: 'Move over to a non-adjacent lane or slow to 20 mph below the limit',
        explanation: 'Florida\'s Move Over Law requires you to change lanes away from the stopped vehicle if possible, or slow to 20 mph below the speed limit.'
      },
      {
        questionText: 'If you experience a tire blowout, you should:',
        options: ['Slam on the brakes', 'Keep a firm grip on the wheel and ease off the gas', 'Turn the steering wheel sharply', 'Accelerate to maintain control'],
        correctAnswer: 'Keep a firm grip on the wheel and ease off the gas',
        explanation: 'During a blowout, maintain control by gripping the wheel firmly, easing off the accelerator gradually, and steering straight until you can safely stop.'
      },
      {
        questionText: 'What does a flashing red traffic signal mean?',
        options: ['Proceed with caution', 'Stop, then proceed when safe', 'Yield to oncoming traffic', 'Signal is broken - ignore it'],
        correctAnswer: 'Stop, then proceed when safe',
        explanation: 'A flashing red signal should be treated like a stop sign - come to a complete stop, then proceed when safe.'
      },
      {
        questionText: 'Defensive driving can help you:',
        options: ['Ignore traffic laws', 'Avoid potential hazards on the road', 'Speed without getting caught', 'Drive more aggressively'],
        correctAnswer: 'Avoid potential hazards on the road',
        explanation: 'Defensive driving helps you anticipate and avoid potential hazards, making you a safer driver.'
      },
      {
        questionText: 'When passing a bicycle, Florida law requires you to maintain a minimum distance of:',
        options: ['1 foot', '2 feet', '3 feet', '5 feet'],
        correctAnswer: '3 feet',
        explanation: 'Florida law requires a minimum of 3 feet of clearance when passing a cyclist.'
      },
      {
        questionText: 'The minimum score required to pass the final examination is:',
        options: ['70%', '75%', '80%', '90%'],
        correctAnswer: '80%',
        explanation: 'The final exam requires a minimum score of 80% to pass.'
      },
      {
        questionText: 'You should always check your blind spots before changing lanes.',
        questionType: 'true_false',
        options: ['True', 'False'],
        correctAnswer: 'True',
        explanation: 'Checking blind spots before lane changes is essential to avoid collisions with vehicles not visible in mirrors.'
      },
      {
        questionText: 'If you see a pedestrian crossing the road at a crosswalk, you should:',
        options: ['Honk to alert them', 'Slow down and let them cross', 'Speed past them', 'Flash your lights at them'],
        correctAnswer: 'Slow down and let them cross',
        explanation: 'Pedestrians have the right of way at crosswalks. You must slow down or stop and let them cross safely.'
      },
      {
        questionText: 'What should you do when approaching a school bus with flashing red lights?',
        options: ['Slow down and proceed carefully', 'Stop until the lights stop flashing', 'Pass on the left side only', 'Honk your horn'],
        correctAnswer: 'Stop until the lights stop flashing',
        explanation: 'You must stop for a school bus with flashing red lights and remain stopped until the lights stop flashing and the stop arm retracts.'
      },
      {
        questionText: 'Drivers must yield to cyclists when making a turn.',
        questionType: 'true_false',
        options: ['True', 'False'],
        correctAnswer: 'True',
        explanation: 'Cyclists have the same rights as motor vehicles, and drivers must yield to them when turning.'
      },
      {
        questionText: 'What color are construction zone warning signs?',
        options: ['Yellow', 'Orange', 'Red', 'Green'],
        correctAnswer: 'Orange',
        explanation: 'Construction and work zone signs are orange to alert drivers to temporary changes and workers.'
      },
      {
        questionText: 'If your brakes fail, which action should you take first?',
        options: ['Turn off the engine', 'Pump the brake pedal rapidly', 'Jump from the vehicle', 'Pull the emergency brake hard immediately'],
        correctAnswer: 'Pump the brake pedal rapidly',
        explanation: 'Pumping the brake pedal may build enough pressure in the system to slow the vehicle. Then downshift and gradually apply the parking brake.'
      },
      {
        questionText: 'How far ahead should you scan the road while driving at highway speeds?',
        options: ['5 seconds', '10-15 seconds', '30 seconds', '1 minute'],
        correctAnswer: '10-15 seconds',
        explanation: 'Defensive drivers scan 10-15 seconds ahead at highway speeds to identify potential hazards early.'
      },
      {
        questionText: 'Double solid yellow lines on the road indicate:',
        options: ['Passing is permitted with caution', 'Passing is prohibited in both directions', 'Lane change is encouraged', 'Construction zone ahead'],
        correctAnswer: 'Passing is prohibited in both directions',
        explanation: 'Double solid yellow lines separate opposing traffic and indicate that passing is not allowed from either direction.'
      },
      {
        questionText: 'Completing this course guarantees that you will never receive a traffic violation.',
        questionType: 'true_false',
        options: ['True', 'False'],
        correctAnswer: 'False',
        explanation: 'Completing this course improves your driving knowledge but does not guarantee you will never receive a violation.'
      },
      {
        questionText: 'If someone is tailgating you, the safest response is to:',
        options: ['Brake suddenly to warn them', 'Speed up to increase distance', 'Increase your following distance ahead and let them pass when safe', 'Gesture angrily at them'],
        correctAnswer: 'Increase your following distance ahead and let them pass when safe',
        explanation: 'When tailgated, increase your following distance ahead (so you can brake gradually) and move over to let them pass when it\'s safe.'
      },
      {
        questionText: 'The shape of a stop sign is:',
        options: ['Circle', 'Diamond', 'Octagon (8 sides)', 'Rectangle'],
        correctAnswer: 'Octagon (8 sides)',
        explanation: 'A stop sign is the only sign with an octagonal shape, making it recognizable even when damaged or covered.'
      },
      {
        questionText: 'What is the primary reason for Florida\'s Move Over Law?',
        options: ['To prevent traffic jams', 'To ensure the safety of emergency responders', 'To give police an excuse to issue tickets', 'To slow down traffic'],
        correctAnswer: 'To ensure the safety of emergency responders',
        explanation: 'The Move Over Law is designed to protect emergency responders who work in dangerous positions near traffic.'
      },
      {
        questionText: 'When your vehicle skids, you should steer:',
        options: ['In the opposite direction of the skid', 'In the direction you want the front of the vehicle to go', 'Sharply to the left', 'The wheel should be held completely straight'],
        correctAnswer: 'In the direction you want the front of the vehicle to go',
        explanation: 'During a skid, steer smoothly in the direction you want the front of the vehicle to go to regain traction and control.'
      },
      {
        questionText: 'Speed limits are suggestions rather than laws.',
        questionType: 'true_false',
        options: ['True', 'False'],
        correctAnswer: 'False',
        explanation: 'Speed limits are laws, not suggestions. Exceeding the posted limit can result in fines, points, and increased accident risk.'
      },
      {
        questionText: 'How many points within 12 months will result in a 30-day license suspension in Florida?',
        options: ['6 points', '12 points', '18 points', '24 points'],
        correctAnswer: '12 points',
        explanation: 'Accumulating 12 points within 12 months results in a 30-day license suspension in Florida.'
      },
      {
        questionText: 'The most common type of fatal motorcycle crash involves:',
        options: ['Rear-end collisions', 'A car turning left in front of the motorcycle', 'Single-vehicle accidents', 'Side-swipe accidents'],
        correctAnswer: 'A car turning left in front of the motorcycle',
        explanation: 'The most common fatal motorcycle crash occurs when a driver turns left in front of an oncoming motorcycle.'
      },
      {
        questionText: 'In Florida school zones, when children are present, the speed limit is:',
        options: ['15 mph', '20 mph', '25 mph', '30 mph'],
        correctAnswer: '20 mph',
        explanation: 'Florida school zones have a 20 mph speed limit during posted hours or when children are present.'
      },
      {
        questionText: 'What should you do if your accelerator pedal gets stuck?',
        options: ['Slam on the brakes', 'Turn off the engine while driving', 'Shift to neutral and brake firmly', 'Jump from the vehicle'],
        correctAnswer: 'Shift to neutral and brake firmly',
        explanation: 'Shifting to neutral disconnects the engine from the wheels, allowing you to brake and steer safely even if the engine continues to rev.'
      }
    ]
  },

  // =====================================================
  // 8-HOUR INTERMEDIATE DRIVER IMPROVEMENT (IDI) COURSE
  // Required for: Court-ordered for multiple violations
  // =====================================================
  course8Hour: {
    name: '8-Hour Intermediate Driver Improvement (IDI)',
    slug: 'florida-8-hour-idi',
    description: 'This comprehensive 8-hour course is designed for drivers with multiple traffic violations. It provides in-depth education on defensive driving, traffic law compliance, and the serious consequences of repeated violations.',
    durationHours: 8,
    price: 29.50,
    modules: [
      // =========================================
      // MODULE 1: Introduction to Driver Improvement
      // Estimated Reading Time: 35-40 minutes
      // =========================================
      {
        title: 'Module 1: Introduction to Driver Improvement',
        description: 'Understanding the purpose and importance of driver improvement programs',
        estimatedMinutes: 40,
        content: `
          <h2>Introduction to Driver Improvement</h2>
          
          <p>Welcome to the Florida 8-Hour Intermediate Driver Improvement (IDI) Course. This course is more comprehensive than the basic 4-hour course and is typically required for drivers who have accumulated multiple traffic violations or who have been ordered by a court to complete additional driver education.</p>

          <p>Driving is both a privilege and a profound responsibility. Every time you get behind the wheel, you're not only controlling a potentially dangerous machine, but you're also sharing public roadways with millions of other people—pedestrians, cyclists, motorcyclists, and other drivers—all of whom are depending on you to operate your vehicle safely and responsibly.</p>

          <div class="statistics-box">
            <h4>📊 Why Driver Improvement Matters: Florida Statistics</h4>
            <ul>
              <li><strong>Over 400,000</strong> crashes occur on Florida roads annually</li>
              <li><strong>More than 3,500</strong> people are killed in Florida traffic crashes each year</li>
              <li><strong>Over 250,000</strong> people are injured in Florida crashes annually</li>
              <li><strong>Distracted driving</strong> is a factor in approximately 50,000 crashes per year in Florida</li>
              <li>Florida has the <strong>3rd highest</strong> traffic fatality rate in the nation</li>
              <li><strong>Approximately 85%</strong> of all crashes are caused by driver error—not vehicle failure or road conditions</li>
            </ul>
          </div>

          <h3>Purpose of This Course</h3>
          
          <p>The Intermediate Driver Improvement Course serves several important purposes:</p>

          <ol>
            <li><strong>Education:</strong> Provide comprehensive knowledge of Florida traffic laws, defensive driving techniques, and the consequences of violations</li>
            <li><strong>Behavioral Change:</strong> Help you recognize and change dangerous driving habits that have led to your violations</li>
            <li><strong>Risk Awareness:</strong> Heighten your awareness of the risks associated with poor driving decisions</li>
            <li><strong>Accountability:</strong> Fulfill court or state requirements while demonstrating your commitment to becoming a safer driver</li>
            <li><strong>Prevention:</strong> Reduce the likelihood of future violations and accidents</li>
          </ol>

          <h3>Who Should Take This Course?</h3>
          
          <p>This 8-hour course is typically required for:</p>
          <ul>
            <li>Drivers ordered by a court to complete driver improvement education due to multiple violations</li>
            <li>Drivers who have accumulated excessive points on their driving record</li>
            <li>Drivers seeking more comprehensive driver education beyond the basic course</li>
            <li>Individuals who want to demonstrate to insurance companies their commitment to safe driving</li>
          </ul>

          <h3>The Cost of Poor Driving Decisions</h3>
          
          <p>Unsafe driving doesn't just risk lives—it has significant financial and legal consequences:</p>

          <h4>Financial Impact</h4>
          <ul>
            <li><strong>Traffic tickets:</strong> Fines range from $100 to over $1,000 depending on the violation</li>
            <li><strong>Insurance increases:</strong> A single ticket can raise your insurance premiums by 20-40%. Multiple violations can double or triple your rates.</li>
            <li><strong>Lost wages:</strong> Court appearances, license suspension, and accidents cost time and money</li>
            <li><strong>Attorney fees:</strong> Legal representation for serious violations can cost thousands of dollars</li>
            <li><strong>Vehicle repair and medical costs:</strong> Crashes are extremely expensive, even with insurance</li>
          </ul>

          <h4>Legal Consequences</h4>
          <ul>
            <li><strong>Points on your license:</strong> Violations add 3-6 points; accumulating too many leads to suspension</li>
            <li><strong>License suspension:</strong> 12 points in 12 months = 30-day suspension; 18 points in 18 months = 3-month suspension; 24 points in 36 months = 1-year suspension</li>
            <li><strong>Criminal charges:</strong> Serious violations like DUI or reckless driving can result in jail time and a permanent criminal record</li>
            <li><strong>Civil liability:</strong> You can be sued for damages if your driving causes injury or property damage</li>
          </ul>

          <div class="case-study">
            <h4>📋 Real-World Case Study: The Accumulating Consequences</h4>
            <p><strong>Marcus's Story:</strong></p>
            <p>Marcus, 24, received his first speeding ticket at 19 for going 15 over the limit. He paid the fine and forgot about it. Over the next three years, he accumulated three more speeding tickets and one red light violation.</p>
            <p>The consequences snowballed:</p>
            <ul>
              <li>His insurance premium tripled from $120/month to $360/month</li>
              <li>He accumulated 15 points and received a 30-day license suspension</li>
              <li>He lost his delivery job because he couldn't drive</li>
              <li>He was ordered to complete an 8-hour IDI course at his own expense</li>
              <li>Total cost over 3 years: over $15,000 in fines, insurance increases, and lost wages</li>
            </ul>
            <p><em>"I thought each ticket was just a minor inconvenience," Marcus said. "I didn't realize how fast they would add up and how much they would cost me in the long run."</em></p>
          </div>

          <h3>Florida's Point System</h3>
          
          <p>Understanding Florida's point system is crucial for maintaining your driving privileges:</p>

          <table class="info-table">
            <tr><th>Violation</th><th>Points</th></tr>
            <tr><td>Speeding (1-15 mph over limit)</td><td>3 points</td></tr>
            <tr><td>Speeding (16+ mph over limit)</td><td>4 points</td></tr>
            <tr><td>Running a red light or stop sign</td><td>4 points</td></tr>
            <tr><td>Improper lane change</td><td>3 points</td></tr>
            <tr><td>Following too closely</td><td>3 points</td></tr>
            <tr><td>Failure to yield</td><td>3 points</td></tr>
            <tr><td>Reckless driving</td><td>4 points</td></tr>
            <tr><td>Passing a stopped school bus</td><td>4 points</td></tr>
            <tr><td>Leaving the scene (property damage)</td><td>6 points</td></tr>
            <tr><td>Violation resulting in a crash</td><td>Add 2 points to any violation</td></tr>
          </table>

          <div class="alert alert-warning">
            <h4>⚠️ Suspension Thresholds</h4>
            <ul>
              <li><strong>12 points in 12 months:</strong> 30-day suspension</li>
              <li><strong>18 points in 18 months:</strong> 3-month suspension</li>
              <li><strong>24 points in 36 months:</strong> 1-year suspension</li>
            </ul>
            <p>Points remain on your record for 3-5 years depending on the violation.</p>
          </div>

          <h3>Course Structure</h3>
          
          <p>This 8-hour course is divided into six comprehensive modules:</p>

          <ol>
            <li><strong>Module 1:</strong> Introduction to Driver Improvement (current module)</li>
            <li><strong>Module 2:</strong> Defensive Driving Techniques</li>
            <li><strong>Module 3:</strong> Handling Emergency Situations</li>
            <li><strong>Module 4:</strong> Traffic Rules and Regulations</li>
            <li><strong>Module 5:</strong> The Impact of Traffic Violations</li>
            <li><strong>Module 6:</strong> Final Assessment and Certification</li>
          </ol>

          <h3>Your Commitment</h3>
          
          <p>Completing this course is more than checking a box for the court or the state. It's an opportunity to genuinely improve your driving skills and decision-making. The knowledge you gain here can prevent future violations, save you money, and—most importantly—potentially save lives, including your own.</p>

          <div class="pledge-box">
            <h4>🎯 Driver Improvement Pledge</h4>
            <p>As I begin this course, I commit to:</p>
            <ul>
              <li>Taking this material seriously and engaging with the content fully</li>
              <li>Honestly evaluating my past driving behaviors and their consequences</li>
              <li>Being open to changing habits that have contributed to my violations</li>
              <li>Applying the defensive driving principles I learn to my everyday driving</li>
              <li>Recognizing that safe driving is a shared responsibility that protects everyone on the road</li>
            </ul>
          </div>

          <div class="alert alert-success">
            <h4>✅ Module 1 Complete</h4>
            <p>You've completed the Introduction to Driver Improvement. The next module will cover comprehensive defensive driving techniques.</p>
          </div>
        `,
        quizQuestions: [
          {
            questionText: 'How many points will result in a 30-day license suspension if accumulated within 12 months in Florida?',
            options: ['6 points', '10 points', '12 points', '18 points'],
            correctAnswer: '12 points',
            explanation: 'Accumulating 12 points within 12 months results in a 30-day license suspension in Florida.'
          },
          {
            questionText: 'What percentage of crashes are caused by driver error?',
            options: ['About 50%', 'About 65%', 'About 75%', 'About 85%'],
            correctAnswer: 'About 85%',
            explanation: 'Approximately 85% of all crashes are caused by driver error, not vehicle failure or road conditions.'
          },
          {
            questionText: 'How many points does a speeding violation of 16+ mph over the limit add to your record?',
            options: ['2 points', '3 points', '4 points', '6 points'],
            correctAnswer: '4 points',
            explanation: 'Speeding 16 or more mph over the limit adds 4 points to your driving record in Florida.'
          },
          {
            questionText: 'True or False: Points from traffic violations remain on your record permanently.',
            questionType: 'true_false',
            options: ['True', 'False'],
            correctAnswer: 'False',
            explanation: 'Points remain on your record for 3-5 years depending on the violation, not permanently.'
          }
        ]
      },

      // =========================================
      // MODULE 2: Defensive Driving Techniques
      // Estimated Reading Time: 55-60 minutes
      // =========================================
      {
        title: 'Module 2: Defensive Driving Techniques',
        description: 'Mastering proactive strategies to anticipate hazards and avoid accidents',
        estimatedMinutes: 60,
        content: `
          <h2>Defensive Driving Techniques: Mastering the Skills to Avoid Hazards</h2>
          
          <p>Defensive driving is much more than simply following traffic laws. It's a proactive approach to operating a vehicle where you take into account not only your own behavior but also the potential actions of others on the road. The goal is to anticipate hazards, minimize risks, and ensure the safety of everyone—even when others are driving carelessly or unpredictably.</p>

          <div class="statistics-box">
            <h4>📊 The Power of Defensive Driving</h4>
            <ul>
              <li>Drivers who practice defensive driving techniques are <strong>up to 50% less likely</strong> to be involved in crashes</li>
              <li><strong>Rear-end collisions</strong> are the most common crash type—and almost entirely preventable with proper following distance</li>
              <li><strong>Most intersection crashes</strong> can be avoided by defensive scanning and yielding techniques</li>
              <li>Insurance companies often offer <strong>10-15% discounts</strong> for drivers who complete defensive driving courses</li>
            </ul>
          </div>

          <h3>The Five Core Principles of Defensive Driving</h3>

          <h4>1. Stay Alert and Focused</h4>
          <p>A defensive driver is always attentive to their surroundings. This means:</p>
          <ul>
            <li><strong>Eliminate distractions:</strong> Put away your phone, finish eating before driving, and keep conversations minimal</li>
            <li><strong>Stay rested:</strong> Never drive when fatigued; drowsy driving is as dangerous as drunk driving</li>
            <li><strong>Monitor continuously:</strong> Check mirrors every 5-8 seconds and scan the road 10-15 seconds ahead</li>
            <li><strong>Expect the unexpected:</strong> Always be ready for other drivers to make mistakes</li>
          </ul>

          <div class="alert alert-info">
            <h4>💡 The SIPDE Method</h4>
            <p>Professional drivers use the SIPDE method to stay safe:</p>
            <ul>
              <li><strong>S</strong>can – Continuously look ahead, to the sides, and behind</li>
              <li><strong>I</strong>dentify – Recognize potential hazards</li>
              <li><strong>P</strong>redict – Anticipate what might happen</li>
              <li><strong>D</strong>ecide – Choose the safest response</li>
              <li><strong>E</strong>xecute – Take action smoothly and decisively</li>
            </ul>
          </div>

          <h4>2. Maintain a Safe Following Distance</h4>
          <p>Keeping adequate space between your vehicle and the one ahead is one of the most important defensive driving practices.</p>

          <h5>The Three-Second Rule</h5>
          <p>Under normal conditions, maintain at least a 3-second following distance:</p>
          <ol>
            <li>Pick a fixed object ahead (sign, tree, overpass)</li>
            <li>When the vehicle ahead passes it, start counting: "one thousand one, one thousand two, one thousand three"</li>
            <li>If you reach the object before finishing the count, you're following too closely</li>
          </ol>

          <h5>When to Increase Following Distance</h5>
          <table class="info-table">
            <tr><th>Condition</th><th>Recommended Distance</th></tr>
            <tr><td>Normal, dry conditions</td><td>3 seconds</td></tr>
            <tr><td>Rain, light fog</td><td>4-5 seconds</td></tr>
            <tr><td>Heavy rain, snow, ice</td><td>6-8 seconds</td></tr>
            <tr><td>Following large trucks</td><td>4-5 seconds (to see around)</td></tr>
            <tr><td>Being tailgated</td><td>Increase to 4+ seconds (extra stopping room)</td></tr>
            <tr><td>Towing a trailer</td><td>Add 1 second per 10 feet of trailer</td></tr>
          </table>

          <h4>3. Anticipate the Actions of Others</h4>
          <p>Assume that other drivers may not always act predictably or safely. Watch for:</p>
          <ul>
            <li><strong>Sudden lane changes:</strong> Drivers often change lanes without signaling</li>
            <li><strong>Hard braking:</strong> Be ready for the car ahead to stop suddenly</li>
            <li><strong>Failure to yield:</strong> Don't assume others will follow right-of-way rules</li>
            <li><strong>Red light runners:</strong> Before proceeding on green, check for vehicles running the red</li>
            <li><strong>Distracted drivers:</strong> Watch for weaving, inconsistent speeds, or delayed reactions</li>
          </ul>

          <div class="case-study">
            <h4>📋 Real-World Case Study: The Intersection Assumption</h4>
            <p><strong>Jennifer's Close Call:</strong></p>
            <p>Jennifer was driving through an intersection when her light turned green. She immediately accelerated, as she had the right of way. At the last moment, she noticed a pickup truck running the red light from the cross street. She slammed on her brakes and stopped just inches from a potentially fatal T-bone collision.</p>
            <p><em>"I had the green light—I was 'right,'" Jennifer said. "But being right wouldn't have helped me if I'd been killed. Now I always count to two after the light turns green and check both directions before I go."</em></p>
            <p><strong>Lesson:</strong> Having the right of way doesn't guarantee safety. Defensive drivers verify that others will yield before proceeding.</p>
          </div>

          <h4>4. Adapt to Conditions</h4>
          <p>Road conditions change constantly due to weather, construction, traffic, and time of day. Defensive drivers adjust their driving accordingly:</p>

          <h5>Weather Adaptations</h5>
          <ul>
            <li><strong>Rain:</strong> Reduce speed by at least 5-10 mph, increase following distance, avoid sudden movements</li>
            <li><strong>Fog:</strong> Use low beams only, slow down significantly, use road markings as guides</li>
            <li><strong>Sun glare:</strong> Use sun visors, wear sunglasses, slow down when visibility is reduced</li>
            <li><strong>Wind:</strong> Keep firm grip on wheel, be especially cautious when passing large vehicles</li>
          </ul>

          <h5>Time of Day</h5>
          <ul>
            <li><strong>Dawn and dusk:</strong> Reduced visibility, sun glare, wildlife active—drive more cautiously</li>
            <li><strong>Night:</strong> Can't see as far, harder to judge distance and speed, more impaired drivers</li>
            <li><strong>Rush hour:</strong> Higher stress levels, more aggressive driving, greater congestion</li>
          </ul>

          <h4>5. Always Have an Escape Route</h4>
          <p>Defensive drivers always position their vehicle with options for escape if something goes wrong:</p>
          <ul>
            <li><strong>Avoid getting boxed in:</strong> Try to maintain space on at least one side of your vehicle</li>
            <li><strong>Know your surroundings:</strong> Be aware of what's beside you, not just ahead and behind</li>
            <li><strong>Stagger your position:</strong> Don't drive directly beside other vehicles when possible</li>
            <li><strong>Identify alternatives:</strong> Always know where you could steer if you had to avoid a collision</li>
          </ul>

          <h3>Advanced Defensive Techniques</h3>

          <h4>Scanning the Road Ahead</h4>
          <p>Rather than focusing only on the vehicle directly in front of you, observe well ahead:</p>
          <ul>
            <li><strong>Look 10-15 seconds ahead</strong> (about a quarter mile on highways)</li>
            <li>Watch for brake lights several cars ahead</li>
            <li>Notice traffic signals changing before you reach them</li>
            <li>Spot road hazards, debris, or construction early</li>
          </ul>

          <h4>Managing Blind Spots</h4>
          <ul>
            <li>Adjust mirrors properly to minimize blind spots (the "BGE" setting: no overlap with rearview mirror)</li>
            <li>Always turn your head to check blind spots before lane changes</li>
            <li>Don't linger in other vehicles' blind spots—pass or drop back</li>
            <li>Be especially careful around trucks, which have much larger blind spots</li>
          </ul>

          <h4>Effective Use of Signals</h4>
          <ul>
            <li>Signal your intentions at least 100 feet before turning (state law)</li>
            <li>Signal before you brake—let following drivers know you're slowing</li>
            <li>Don't signal too early (could confuse other drivers about your intentions)</li>
            <li>Remember to cancel your signal after completing the maneuver</li>
          </ul>

          <h4>Controlling Speed</h4>
          <p>Speed affects every aspect of driving safety:</p>
          <ul>
            <li><strong>Reaction distance:</strong> At 60 mph, you travel 88 feet per second—nearly the length of a tennis court</li>
            <li><strong>Braking distance:</strong> Doubling your speed quadruples your stopping distance</li>
            <li><strong>Crash severity:</strong> Impact force increases exponentially with speed</li>
            <li><strong>Control:</strong> Ability to steer around obstacles decreases at higher speeds</li>
          </ul>

          <div class="reflection-question">
            <h4>🤔 Reflection Question</h4>
            <p>Think about your recent driving experiences. Which of the five core defensive driving principles do you practice consistently? Which could use improvement? Consider specific situations where better application of these principles might have helped.</p>
          </div>

          <h3>Benefits of Defensive Driving</h3>

          <ul>
            <li><strong>Fewer Accidents:</strong> Proactive strategies help avoid collisions before they can occur</li>
            <li><strong>Lower Stress:</strong> Being prepared for hazards makes driving more relaxed and enjoyable</li>
            <li><strong>Cost Savings:</strong> Avoiding accidents saves on repairs, medical bills, insurance, and legal fees</li>
            <li><strong>Insurance Discounts:</strong> Many insurers offer reduced rates for defensive driving course completion</li>
            <li><strong>Peace of Mind:</strong> Knowing you're doing everything possible to stay safe</li>
          </ul>

          <h3>Module Summary</h3>
          
          <p>Defensive driving is not just a skill—it's a mindset. Key principles include:</p>
          <ul>
            <li>Stay alert and eliminate all distractions</li>
            <li>Maintain at least a 3-second following distance, more in adverse conditions</li>
            <li>Anticipate that others may make mistakes and be ready to respond</li>
            <li>Adapt your driving to weather, traffic, and road conditions</li>
            <li>Always keep an escape route and position your vehicle with options</li>
          </ul>

          <div class="alert alert-success">
            <h4>✅ Module 2 Complete</h4>
            <p>You've completed the Defensive Driving Techniques module. Next, we'll cover how to handle emergency situations.</p>
          </div>
        `,
        quizQuestions: [
          {
            questionText: 'What does the "S" stand for in the SIPDE defensive driving method?',
            options: ['Stop', 'Scan', 'Speed', 'Signal'],
            correctAnswer: 'Scan',
            explanation: 'SIPDE stands for Scan, Identify, Predict, Decide, Execute—a systematic approach to defensive driving.'
          },
          {
            questionText: 'Under normal, dry driving conditions, what is the minimum recommended following distance?',
            options: ['1 second', '2 seconds', '3 seconds', '5 seconds'],
            correctAnswer: '3 seconds',
            explanation: 'The three-second rule provides adequate time to react to sudden stops or hazards under normal conditions.'
          },
          {
            questionText: 'How far ahead should you scan the road while driving at highway speeds?',
            options: ['2-3 seconds', '5-8 seconds', '10-15 seconds', '20-30 seconds'],
            correctAnswer: '10-15 seconds',
            explanation: 'Scanning 10-15 seconds ahead (about a quarter mile on highways) gives you time to identify and respond to hazards.'
          },
          {
            questionText: 'What happens to your stopping distance when you double your speed?',
            options: ['It doubles', 'It triples', 'It quadruples', 'It stays the same'],
            correctAnswer: 'It quadruples',
            explanation: 'Stopping distance increases with the square of speed—doubling your speed quadruples your stopping distance.'
          },
          {
            questionText: 'True or False: Having the right of way means you should proceed without checking for other vehicles.',
            questionType: 'true_false',
            options: ['True', 'False'],
            correctAnswer: 'False',
            explanation: 'Defensive drivers always verify that others will yield before proceeding, regardless of right of way.'
          }
        ]
      },

      // =========================================
      // MODULE 3: Handling Adverse Conditions
      // Estimated Reading Time: 50-55 minutes
      // =========================================
      {
        title: 'Module 3: Handling Adverse Conditions',
        description: 'Weather challenges, emergencies, and managing difficult driving situations',
        estimatedMinutes: 55,
        content: `
          <h2>Handling Adverse Conditions: Navigating Weather and Emergencies</h2>
          
          <p>Florida's weather can change rapidly, and drivers must be prepared to adapt to challenging conditions. From sudden thunderstorms to fog, from low-light situations to vehicle emergencies, this module covers the skills you need to stay safe when conditions are less than ideal.</p>

          <div class="statistics-box">
            <h4>📊 Weather-Related Crash Statistics</h4>
            <ul>
              <li>Weather is a factor in approximately <strong>21% of all crashes</strong> nationwide</li>
              <li><strong>Rain</strong> is by far the most dangerous weather condition, involved in 70% of weather-related crashes</li>
              <li>Florida averages <strong>80-100 thunderstorm days per year</strong>—more than any other state</li>
              <li><strong>Fog</strong> contributes to about 10% of weather-related fatalities</li>
              <li><strong>Wet pavement</strong> is present in 75% of weather-related crashes</li>
            </ul>
          </div>

          <h3>Driving in Rain</h3>
          
          <p>Florida is known for its sudden, intense rainstorms. Rain reduces visibility and tire traction, creating dangerous conditions that require immediate adjustment.</p>

          <h4>Rain Safety Practices</h4>
          <ul>
            <li><strong>Reduce speed:</strong> Slow down at least 5-10 mph, more in heavy rain</li>
            <li><strong>Increase following distance:</strong> Double or triple your normal following distance</li>
            <li><strong>Turn on headlights:</strong> Florida law requires headlights when wipers are in use</li>
            <li><strong>Use low beams:</strong> High beams reflect off rain and reduce visibility</li>
            <li><strong>Avoid sudden movements:</strong> No hard braking, sharp turns, or quick lane changes</li>
            <li><strong>Watch for standing water:</strong> Even shallow water can cause hydroplaning</li>
            <li><strong>Keep distance from large vehicles:</strong> Their spray reduces your visibility significantly</li>
          </ul>

          <h4>Hydroplaning: The Hidden Danger</h4>
          <p>Hydroplaning occurs when a layer of water builds up between your tires and the road surface, causing you to lose traction. It can happen at speeds as low as 35 mph.</p>

          <h5>What Causes Hydroplaning</h5>
          <ul>
            <li>Excessive speed on wet roads</li>
            <li>Worn tire tread (less ability to channel water away)</li>
            <li>Standing water on the road</li>
            <li>Underinflated tires</li>
          </ul>

          <h5>If You Start to Hydroplane</h5>
          <ol>
            <li>Stay calm—don't panic</li>
            <li>Ease off the accelerator gradually (don't slam brakes)</li>
            <li>Steer straight or gently in the direction you want to go</li>
            <li>Wait for your tires to regain contact with the road</li>
            <li>Once you have traction, slow down further</li>
          </ol>

          <div class="alert alert-danger">
            <h4>⚠️ Never Drive Through Flooded Roads</h4>
            <p>"Turn Around, Don't Drown" is not just a slogan—it's life-saving advice. Just 6 inches of fast-moving water can knock you down, and 12 inches can sweep away a vehicle. You cannot tell how deep water is or whether the road surface beneath is intact. Every year, people die attempting to drive through flooded areas.</p>
          </div>

          <h3>Driving in Fog</h3>
          
          <p>Fog significantly reduces visibility, making it one of the most dangerous weather conditions. Florida experiences fog primarily in fall and winter months, especially in the morning.</p>

          <h4>Fog Safety Practices</h4>
          <ul>
            <li><strong>Use low-beam headlights or fog lights:</strong> High beams reflect off fog particles and worsen visibility</li>
            <li><strong>Reduce speed significantly:</strong> Drive only as fast as you can see ahead</li>
            <li><strong>Increase following distance:</strong> You may not see brake lights until it's too late</li>
            <li><strong>Use road markings as guides:</strong> Lane lines and edge lines help you stay centered</li>
            <li><strong>Don't use cruise control:</strong> You need full control of your speed</li>
            <li><strong>Use windshield wipers and defrosters:</strong> Keep your windshield clear</li>
            <li><strong>Listen for traffic:</strong> Open your window slightly; you may hear vehicles before you see them</li>
          </ul>

          <h4>If Fog Becomes Too Thick</h4>
          <p>If visibility becomes severely limited:</p>
          <ol>
            <li>Signal and pull completely off the road to a safe area</li>
            <li>Turn off your lights (so others don't follow your lights off the road)</li>
            <li>Turn on hazard flashers</li>
            <li>Wait for conditions to improve before continuing</li>
          </ol>

          <div class="case-study">
            <h4>📋 Real-World Case Study: The Chain Reaction</h4>
            <p><strong>I-75 Fog Disaster (Gainesville, FL, 2012):</strong></p>
            <p>In January 2012, dense fog and smoke from a nearby brush fire combined to create near-zero visibility on I-75 near Gainesville. A multi-vehicle pileup involving 25 vehicles resulted in 11 fatalities and numerous injuries.</p>
            <p>Many drivers entered the fog bank at highway speed, unable to see the stopped vehicles ahead. The chain reaction crashes continued as more vehicles entered the fog.</p>
            <p><strong>Key Lessons:</strong></p>
            <ul>
              <li>Speed must be reduced immediately when visibility drops</li>
              <li>Following distances must increase dramatically in fog</li>
              <li>Sometimes the safest choice is to exit the highway or pull off the road entirely</li>
              <li>Fog conditions can change rapidly—stay alert</li>
            </ul>
          </div>

          <h3>Low-Light and Nighttime Driving</h3>
          
          <p>Night driving presents unique challenges due to reduced visibility. Your ability to see hazards, judge distances, and react in time is significantly compromised.</p>

          <h4>Night Driving Statistics</h4>
          <ul>
            <li>About <strong>50% of traffic deaths</strong> occur at night, despite significantly less traffic</li>
            <li>Depth perception and peripheral vision are reduced at night</li>
            <li>The risk of encountering impaired drivers is much higher after dark</li>
          </ul>

          <h4>Night Driving Safety Practices</h4>
          <ul>
            <li><strong>Use high beams wisely:</strong> Use them on dark, unlit roads; switch to low beams for oncoming traffic</li>
            <li><strong>Don't overdrive your headlights:</strong> At 60 mph, it takes about 400 feet to stop; standard headlights illuminate about 350 feet</li>
            <li><strong>Watch for pedestrians and animals:</strong> They're much harder to see at night</li>
            <li><strong>Keep windshield and headlights clean:</strong> Dirt and grime scatter light and reduce visibility</li>
            <li><strong>Avoid looking at oncoming headlights:</strong> Focus on the right edge of your lane</li>
            <li><strong>Be alert for impaired or fatigued drivers:</strong> Watch for erratic behavior</li>
          </ul>

          <h3>Vehicle Emergencies</h3>
          
          <p>Mechanical failures and emergencies can happen at any time. Knowing how to respond can prevent a minor problem from becoming a major accident.</p>

          <h4>Tire Blowout</h4>
          <p>A sudden tire blowout is startling, but the correct response is counterintuitive:</p>
          <ol>
            <li><strong>Don't brake:</strong> This can cause you to lose control</li>
            <li><strong>Grip the steering wheel firmly</strong> with both hands</li>
            <li><strong>Maintain course:</strong> Steer straight; don't overcorrect</li>
            <li><strong>Ease off the accelerator:</strong> Let the car slow naturally</li>
            <li><strong>Once controlled,</strong> brake gently and pull to a safe location</li>
            <li>Turn on hazard lights and exit carefully if it's safe</li>
          </ol>

          <h4>Brake Failure</h4>
          <p>Complete brake failure is rare in modern vehicles, but if it happens:</p>
          <ol>
            <li><strong>Pump the brake pedal rapidly:</strong> This may build up enough pressure to stop</li>
            <li><strong>Shift to a lower gear:</strong> Use engine braking to slow down</li>
            <li><strong>Apply the parking brake gradually:</strong> Don't yank it—this can cause a skid</li>
            <li><strong>Look for an escape route:</strong> An uphill road, soft shoulder, or safe area</li>
            <li><strong>Warn others:</strong> Use horn and hazard lights</li>
            <li><strong>As a last resort:</strong> Use friction to stop (scrape against guardrail, drive into bushes)</li>
          </ol>

          <h4>Stuck Accelerator</h4>
          <p>If your accelerator becomes stuck:</p>
          <ol>
            <li><strong>Shift to neutral:</strong> This disconnects the engine from the wheels</li>
            <li><strong>Brake firmly:</strong> Your brakes are stronger than your engine</li>
            <li><strong>Steer to safety:</strong> Pull off the road</li>
            <li><strong>Turn off the ignition:</strong> Only after you've stopped or nearly stopped</li>
            <li><strong>Don't turn the key to "lock":</strong> This locks the steering wheel</li>
          </ol>

          <h4>Skidding and Loss of Control</h4>
          <p>Skids can occur on wet, icy, or loose surfaces:</p>

          <h5>Rear-Wheel Skid (Fishtailing)</h5>
          <ul>
            <li>Take your foot off the accelerator</li>
            <li>Steer in the direction you want the front of the car to go</li>
            <li>Don't brake (can worsen the skid)</li>
            <li>As you regain traction, straighten the wheel</li>
          </ul>

          <h5>Front-Wheel Skid (Understeer)</h5>
          <ul>
            <li>Take your foot off the accelerator</li>
            <li>Don't steer more—you've already lost front tire grip</li>
            <li>Wait for the front tires to regain traction</li>
            <li>Then steer gently in your intended direction</li>
          </ul>

          <h4>Engine Failure While Driving</h4>
          <ol>
            <li>Signal and steer toward the shoulder or a safe area</li>
            <li>Shift to neutral (allows you to coast)</li>
            <li>Note: Power steering and power brakes will be harder to use</li>
            <li>Brake firmly but be prepared for stiffer pedal</li>
            <li>Activate hazard lights</li>
            <li>Once stopped, set the parking brake</li>
          </ol>

          <div class="reflection-question">
            <h4>🤔 Reflection Question</h4>
            <p>Have you ever driven in conditions that made you uncomfortable—heavy rain, dense fog, or at night when very tired? What did you do, and what might you do differently next time?</p>
          </div>

          <h3>Module Summary</h3>
          
          <ul>
            <li><strong>Rain:</strong> Slow down, increase following distance, use low beams, watch for hydroplaning, never drive through floods</li>
            <li><strong>Fog:</strong> Use low beams/fog lights, slow significantly, increase distance, use road markings, consider pulling over if too thick</li>
            <li><strong>Night:</strong> Don't overdrive your headlights, watch for pedestrians and animals, be alert for impaired drivers</li>
            <li><strong>Emergencies:</strong> Stay calm, know the correct responses for blowouts, brake failure, stuck accelerators, and skids</li>
          </ul>

          <div class="alert alert-success">
            <h4>✅ Module 3 Complete</h4>
            <p>You've completed the Handling Adverse Conditions module. The next module covers Traffic Rules and Regulations.</p>
          </div>
        `,
        quizQuestions: [
          {
            questionText: 'At what speed can hydroplaning occur on wet roads?',
            options: ['55 mph or higher', '45 mph or higher', '35 mph or higher', '25 mph or higher'],
            correctAnswer: '35 mph or higher',
            explanation: 'Hydroplaning can occur at speeds as low as 35 mph when there is water on the road surface.'
          },
          {
            questionText: 'What type of headlights should you use when driving in fog?',
            options: ['High beams', 'Low beams or fog lights', 'Parking lights only', 'No lights'],
            correctAnswer: 'Low beams or fog lights',
            explanation: 'High beams reflect off fog particles and reduce visibility. Low beams or fog lights are the safest option.'
          },
          {
            questionText: 'If you experience a tire blowout while driving, you should:',
            options: ['Brake hard immediately', 'Turn the steering wheel sharply', 'Grip the wheel firmly and ease off the gas', 'Accelerate to maintain control'],
            correctAnswer: 'Grip the wheel firmly and ease off the gas',
            explanation: 'During a blowout, maintain control by gripping the wheel firmly, easing off the accelerator, and steering straight until you can safely stop.'
          },
          {
            questionText: 'True or False: You can safely drive through a flooded road if the water appears to be only a few inches deep.',
            questionType: 'true_false',
            options: ['True', 'False'],
            correctAnswer: 'False',
            explanation: 'You cannot tell how deep water is or if the road beneath is intact. Turn around—don\'t drown.'
          },
          {
            questionText: 'What percentage of traffic deaths occur at night?',
            options: ['About 25%', 'About 35%', 'About 50%', 'About 75%'],
            correctAnswer: 'About 50%',
            explanation: 'About 50% of traffic deaths occur at night, despite significantly less traffic during nighttime hours.'
          }
        ]
      },

      // =========================================
      // MODULE 4: Managing Interactions with Other Road Users
      // Estimated Reading Time: 50-55 minutes
      // =========================================
      {
        title: 'Module 4: Managing Interactions with Other Road Users',
        description: 'Sharing the road safely with pedestrians, cyclists, motorcyclists, and commercial vehicles',
        estimatedMinutes: 55,
        content: `
          <h2>Managing Interactions with Other Road Users</h2>
          
          <p>Roads are shared spaces. Every day, you encounter not just other cars and trucks, but pedestrians, cyclists, motorcyclists, large commercial vehicles, and emergency responders. Each of these road users has different vulnerabilities, capabilities, and legal rights. Safe driving requires understanding these differences and adjusting your behavior accordingly.</p>

          <div class="statistics-box">
            <h4>📊 Vulnerable Road User Statistics in Florida</h4>
            <ul>
              <li>Florida has the <strong>highest pedestrian fatality rate</strong> in the nation</li>
              <li>Over <strong>700 pedestrians</strong> and <strong>150 cyclists</strong> are killed annually on Florida roads</li>
              <li>Over <strong>550 motorcyclists</strong> die each year in Florida crashes</li>
              <li><strong>1 in 3 motorcycle fatalities</strong> involve a car or truck turning left in front of the motorcycle</li>
              <li>Large truck crashes are <strong>twice as likely</strong> to result in fatalities compared to passenger vehicle crashes</li>
            </ul>
          </div>

          <h3>Sharing the Road with Pedestrians</h3>
          
          <p>Pedestrians are the most vulnerable road users—they have no protection in a collision with a vehicle. Even at relatively low speeds, being struck by a car can cause serious injury or death.</p>

          <h4>Florida Pedestrian Laws</h4>
          <ul>
            <li><strong>Crosswalks:</strong> Drivers must yield to pedestrians in crosswalks, whether marked or unmarked</li>
            <li><strong>Stopping requirement:</strong> When a pedestrian is in a crosswalk, you must stop and remain stopped until they've crossed</li>
            <li><strong>No passing:</strong> It's illegal to pass a vehicle that has stopped for a pedestrian at a crosswalk</li>
            <li><strong>Sidewalks:</strong> When crossing a sidewalk (exiting a driveway or parking lot), yield to pedestrians</li>
          </ul>

          <h4>High-Risk Pedestrian Situations</h4>
          
          <table class="info-table">
            <tr><th>Situation</th><th>What to Watch For</th></tr>
            <tr><td>School zones</td><td>Children who may dart into the street unexpectedly; crossing guards</td></tr>
            <tr><td>Residential areas</td><td>Children playing, balls/toys rolling into street, elderly walkers</td></tr>
            <tr><td>Near bus stops</td><td>People hurrying to catch buses, emerging from behind stopped buses</td></tr>
            <tr><td>Entertainment districts</td><td>Impaired pedestrians who may not follow signals</td></tr>
            <tr><td>Night time</td><td>Pedestrians in dark clothing; reduced visibility</td></tr>
            <tr><td>Intersections</td><td>Right-turning drivers may miss pedestrians starting to cross</td></tr>
          </table>

          <div class="case-study">
            <h4>📋 Real-World Case Study: The Right Turn</h4>
            <p><strong>A Driver's Devastating Mistake:</strong></p>
            <p>A Tampa driver, focused on finding a gap in traffic to turn right, accelerated into the turn without checking the crosswalk to her right. She struck a 68-year-old man who had legally entered the crosswalk. He died three days later from his injuries.</p>
            <p>The driver faced vehicular homicide charges. "I looked left for traffic," she said. "I just didn't look right. That moment of carelessness destroyed two lives—his and mine."</p>
            <p><strong>Lesson:</strong> Always check for pedestrians before turning, especially when turning right at a red light or stop sign.</p>
          </div>

          <h3>Sharing the Road with Cyclists</h3>
          
          <p>Bicyclists in Florida have the same rights and responsibilities as motor vehicle drivers. They are legally entitled to use the road, and drivers must respect their space.</p>

          <h4>Florida Bicycle Laws for Motorists</h4>
          <ul>
            <li><strong>Same rights:</strong> Cyclists have the same rights to the roadway as motor vehicles</li>
            <li><strong>Safe passing distance:</strong> When passing a cyclist, maintain at least <strong>3 feet of clearance</strong></li>
            <li><strong>No honking:</strong> Don't honk at cyclists—it can startle them and cause crashes</li>
            <li><strong>Check before turning:</strong> A cyclist may be in your blind spot or the bike lane</li>
          </ul>

          <h4>Safe Practices Around Cyclists</h4>
          <ul>
            <li><strong>Wait for safe passing:</strong> Don't squeeze past; wait until you can give at least 3 feet</li>
            <li><strong>Look before opening doors:</strong> "Dooring" (opening into a cyclist's path) causes serious injuries</li>
            <li><strong>Be patient:</strong> Cyclists may need to take the lane to avoid hazards</li>
            <li><strong>Anticipate movements:</strong> Cyclists may swerve to avoid potholes or debris</li>
            <li><strong>Check mirrors before right turns:</strong> Don't cut off cyclists in bike lanes</li>
          </ul>

          <div class="alert alert-info">
            <h4>💡 The "Dutch Reach" Technique</h4>
            <p>To prevent dooring cyclists when parked: open your door with your <strong>far hand</strong> (right hand if you're the driver). This naturally turns your body so you can see approaching cyclists and traffic before opening the door fully.</p>
          </div>

          <h3>Sharing the Road with Motorcyclists</h3>
          
          <p>Motorcyclists face unique dangers. Their smaller profile makes them harder to see, and they have no protection in a crash. As a driver, your awareness can save a motorcyclist's life.</p>

          <h4>Why Motorcycles Are Hard to See</h4>
          <ul>
            <li><strong>Small profile:</strong> Takes up a fraction of the visual space of a car</li>
            <li><strong>Hidden by objects:</strong> Can disappear behind posts, mirrors, or other vehicles</li>
            <li><strong>Speed deception:</strong> Small size makes it hard to judge speed and distance</li>
            <li><strong>Inattentional blindness:</strong> When looking for cars, drivers may literally not "see" motorcycles</li>
          </ul>

          <h4>The Most Common Fatal Motorcycle Crash</h4>
          <p>The most common type of fatal motorcycle crash involves a car turning left in front of an oncoming motorcycle. The driver typically says, "I never saw them."</p>

          <div class="alert alert-warning">
            <h4>⚠️ Look Twice—Save a Life</h4>
            <p>Before turning left across traffic, specifically look for motorcycles. They're smaller and faster than they appear. If you see one approaching, wait—they may be much closer than you think.</p>
          </div>

          <h4>Safe Practices Around Motorcycles</h4>
          <ul>
            <li><strong>Look twice:</strong> Before turning or changing lanes, look specifically for motorcycles</li>
            <li><strong>Double-check blind spots:</strong> Motorcycles easily hide in blind spots</li>
            <li><strong>Give extra following distance:</strong> Motorcycles can stop faster than cars</li>
            <li><strong>Don't share lanes:</strong> Motorcycles are entitled to the full lane</li>
            <li><strong>Watch for turn signals:</strong> Many motorcycle signals don't self-cancel</li>
            <li><strong>Account for road conditions:</strong> Motorcycles are more affected by rain, gravel, and debris</li>
          </ul>

          <h3>Sharing the Road with Large Trucks and Buses</h3>
          
          <p>Commercial vehicles operate under different physical constraints than passenger cars. Understanding their limitations helps you stay safe.</p>

          <h4>Key Differences for Large Vehicles</h4>
          <table class="info-table">
            <tr><th>Factor</th><th>Impact</th></tr>
            <tr><td>Stopping distance</td><td>A fully loaded semi at 65 mph needs ~600 feet to stop (2 football fields)</td></tr>
            <tr><td>Acceleration</td><td>Much slower, especially on hills</td></tr>
            <tr><td>Maneuverability</td><td>Wide turns, limited ability to swerve</td></tr>
            <tr><td>Blind spots</td><td>Much larger than passenger vehicles (4 major "no-zones")</td></tr>
            <tr><td>Wind effects</td><td>Creates turbulence when passed; affected by crosswinds</td></tr>
          </table>

          <h4>The "No-Zone": Truck Blind Spots</h4>
          <p>Large trucks have four major blind spots:</p>
          <ul>
            <li><strong>Front:</strong> 20+ feet directly in front—truck driver can't see cars that cut in too closely</li>
            <li><strong>Rear:</strong> 30+ feet behind—no rearview mirror</li>
            <li><strong>Left side:</strong> Extends from cab door backward at an angle</li>
            <li><strong>Right side:</strong> Largest blind spot—extends across multiple lanes</li>
          </ul>

          <div class="alert alert-info">
            <h4>💡 The Mirror Rule</h4>
            <p><strong>If you can't see the truck driver's face in their side mirror, they can't see you.</strong> Either pass completely or drop back to where you're visible.</p>
          </div>

          <h4>Safe Practices Around Large Vehicles</h4>
          <ul>
            <li><strong>Don't cut in front:</strong> Allow one car length per 10 mph after passing</li>
            <li><strong>Pass quickly:</strong> Don't linger alongside; pass and move ahead</li>
            <li><strong>Stay visible:</strong> Avoid the no-zones</li>
            <li><strong>Watch for wide turns:</strong> Trucks may swing left before turning right</li>
            <li><strong>Give extra space:</strong> Following too closely means you can't see ahead</li>
          </ul>

          <h3>Emergency Vehicles: Move Over Law</h3>
          
          <p>Florida's Move Over Law (F.S. 316.126) requires drivers to yield to emergency vehicles and protect workers on the roadside.</p>

          <h4>When Emergency Vehicles Approach</h4>
          <ul>
            <li>Pull over to the right edge of the road</li>
            <li>Stop and remain stopped until the emergency vehicle passes</li>
            <li>Don't follow within 500 feet of a responding emergency vehicle</li>
            <li>Never stop in an intersection—clear it first, then pull over</li>
          </ul>

          <h4>Move Over for Stopped Vehicles</h4>
          <p>When you see an emergency or service vehicle stopped on the roadside with lights flashing:</p>
          <ul>
            <li><strong>Option 1:</strong> Move to a lane not adjacent to the stopped vehicle</li>
            <li><strong>Option 2:</strong> If lane change isn't safe, slow to 20 mph below the posted limit</li>
            <li><strong>Applies to:</strong> Police, fire, ambulance, tow trucks, utility vehicles, waste collection, road maintenance</li>
          </ul>

          <h4>Penalties for Move Over Violations</h4>
          <ul>
            <li>Base fine plus court costs (typically $120-$250)</li>
            <li>3 points on your driving record</li>
            <li>If causing injury: felony charges possible</li>
          </ul>

          <h3>School Buses: Protecting Children</h3>
          
          <p>Florida law imposes strict requirements when you encounter school buses:</p>

          <h4>When to Stop</h4>
          <ul>
            <li>When the bus displays flashing red lights and the stop arm extends</li>
            <li><strong>ALL traffic in BOTH directions</strong> must stop (unless divided by a raised barrier)</li>
            <li>Stop at least 20 feet from the bus</li>
            <li>Remain stopped until lights stop flashing and the arm retracts</li>
          </ul>

          <h4>Penalties for Passing a Stopped School Bus</h4>
          <table class="info-table">
            <tr><th>Offense</th><th>Penalty</th></tr>
            <tr><td>First offense</td><td>$400-$500 + 4 points</td></tr>
            <tr><td>Second offense (5 years)</td><td>$800-$1000 + 4 points + possible suspension</td></tr>
            <tr><td>Third offense (5 years)</td><td>$1000+ + 4 points + license suspension</td></tr>
            <tr><td>Causing injury</td><td>Felony charges possible</td></tr>
          </table>

          <div class="reflection-question">
            <h4>🤔 Reflection Question</h4>
            <p>Think about your daily driving routes. Where do you encounter pedestrians, cyclists, or motorcyclists? What specific actions could you take to be more aware of these vulnerable road users?</p>
          </div>

          <h3>Module Summary</h3>
          
          <ul>
            <li><strong>Pedestrians:</strong> Yield at crosswalks, watch in school zones and at night, always check before turning</li>
            <li><strong>Cyclists:</strong> 3 feet minimum when passing, check before turning right, don't honk</li>
            <li><strong>Motorcyclists:</strong> Look twice before turning or changing lanes, give extra following distance</li>
            <li><strong>Large vehicles:</strong> Avoid blind spots, don't cut in front, allow extra stopping room</li>
            <li><strong>Emergency vehicles:</strong> Move over or slow down, yield to responding vehicles</li>
            <li><strong>School buses:</strong> Stop when red lights flash in both directions (unless divided by barrier)</li>
          </ul>

          <div class="alert alert-success">
            <h4>✅ Module 4 Complete</h4>
            <p>You've completed the Managing Interactions module. The next module covers Traffic Violations and Their Impact.</p>
          </div>
        `,
        quizQuestions: [
          {
            questionText: 'What is the minimum safe passing distance when overtaking a cyclist in Florida?',
            options: ['1 foot', '2 feet', '3 feet', '4 feet'],
            correctAnswer: '3 feet',
            explanation: 'Florida law requires a minimum of 3 feet clearance when passing a cyclist.'
          },
          {
            questionText: 'What is the most common type of fatal motorcycle crash?',
            options: ['Rear-end collision', 'Car turning left in front of motorcycle', 'Single-vehicle crash', 'Side-swipe collision'],
            correctAnswer: 'Car turning left in front of motorcycle',
            explanation: 'The most common fatal motorcycle crash involves a car turning left in front of an oncoming motorcycle, with drivers often saying they never saw the motorcycle.'
          },
          {
            questionText: 'Under Florida\'s Move Over Law, what must you do when passing a stopped emergency vehicle?',
            options: ['Speed up to pass quickly', 'Maintain normal speed', 'Move to a non-adjacent lane OR slow to 20 mph below the limit', 'Stop completely'],
            correctAnswer: 'Move to a non-adjacent lane OR slow to 20 mph below the limit',
            explanation: 'Florida\'s Move Over Law requires you to move to a lane not adjacent to the stopped vehicle, or slow to 20 mph below the posted limit if changing lanes isn\'t safe.'
          },
          {
            questionText: 'When a school bus displays flashing red lights and extends its stop arm, traffic in which direction(s) must stop?',
            options: ['Only traffic behind the bus', 'Only traffic in front of the bus', 'Traffic in both directions', 'Neither—just slow down'],
            correctAnswer: 'Traffic in both directions',
            explanation: 'When a school bus has flashing red lights and the stop arm extended, ALL traffic in BOTH directions must stop (unless separated by a raised barrier).'
          },
          {
            questionText: 'True or False: If you can see the truck driver\'s face in their side mirror, they can see you.',
            questionType: 'true_false',
            options: ['True', 'False'],
            correctAnswer: 'True',
            explanation: 'The mirror rule: if you can see the truck driver\'s face in their side mirror, they can see you. If you can\'t see their face, you\'re in their blind spot.'
          }
        ]
      },

      // =========================================
      // MODULE 5: The Impact of Traffic Violations
      // Estimated Reading Time: 50-55 minutes
      // =========================================
      {
        title: 'Module 5: The Impact of Traffic Violations',
        description: 'Understanding the consequences of violations on your record, finances, and driving privileges',
        estimatedMinutes: 55,
        content: `
          <h2>The Impact of Traffic Violations</h2>
          
          <p>Traffic violations aren't just minor inconveniences—they have cascading effects that can impact your finances, your driving privileges, your employment, and even your freedom. Understanding these consequences is essential for making better decisions behind the wheel.</p>

          <div class="statistics-box">
            <h4>📊 The Real Cost of Traffic Violations</h4>
            <ul>
              <li>The average traffic ticket costs <strong>$150-$300</strong> in fines, but insurance increases can cost <strong>$3,000-$5,000+</strong> over 3 years</li>
              <li>A single speeding ticket increases insurance rates by an average of <strong>24%</strong></li>
              <li>Multiple violations can increase rates by <strong>100% or more</strong></li>
              <li>A DUI can cost over <strong>$10,000</strong> in fines, fees, insurance increases, and lost wages</li>
              <li>License suspension can result in <strong>job loss</strong> for those who drive for work</li>
            </ul>
          </div>

          <h3>Florida's Point System: How It Works</h3>
          
          <p>Every moving violation in Florida adds points to your driving record. These points serve as a measure of your driving behavior and have direct consequences for your license.</p>

          <h4>Points by Violation Type</h4>
          <table class="info-table">
            <tr><th>Violation</th><th>Points</th></tr>
            <tr><td>Speeding (1-15 mph over)</td><td>3 points</td></tr>
            <tr><td>Speeding (16+ mph over)</td><td>4 points</td></tr>
            <tr><td>Improper lane change</td><td>3 points</td></tr>
            <tr><td>Following too closely</td><td>3 points</td></tr>
            <tr><td>Failure to yield right-of-way</td><td>3 points</td></tr>
            <tr><td>Running a red light/stop sign</td><td>4 points</td></tr>
            <tr><td>Reckless driving</td><td>4 points</td></tr>
            <tr><td>Passing a stopped school bus</td><td>4 points</td></tr>
            <tr><td>Leaving the scene (property damage)</td><td>6 points</td></tr>
            <tr><td>Any violation causing a crash</td><td>+2 points added</td></tr>
          </table>

          <h4>Suspension Thresholds</h4>
          <div class="alert alert-warning">
            <h4>⚠️ Point Accumulation Consequences</h4>
            <ul>
              <li><strong>12 points in 12 months:</strong> 30-day suspension</li>
              <li><strong>18 points in 18 months:</strong> 3-month (90-day) suspension</li>
              <li><strong>24 points in 36 months:</strong> 1-year suspension</li>
            </ul>
            <p>These suspensions are <strong>automatic</strong>—no court hearing is required.</p>
          </div>

          <h4>How Long Points Stay on Your Record</h4>
          <ul>
            <li>Points remain on your record for <strong>3-10 years</strong> depending on the violation</li>
            <li>Insurance companies typically look at the past <strong>3-5 years</strong></li>
            <li>Serious violations (DUI, reckless driving) can affect you for <strong>7-10 years</strong></li>
          </ul>

          <h3>Financial Impact of Violations</h3>
          
          <h4>Immediate Costs</h4>
          <ul>
            <li><strong>Traffic fines:</strong> Range from $100 for minor violations to $1,000+ for serious offenses</li>
            <li><strong>Court costs:</strong> Added to every ticket (typically $50-$100)</li>
            <li><strong>Driver improvement courses:</strong> $25-$100 (required for certain violations)</li>
            <li><strong>Attorney fees:</strong> If you choose to fight the ticket ($200-$1,000+)</li>
          </ul>

          <h4>Long-Term Insurance Impact</h4>
          <p>The hidden cost of tickets is the insurance increase that follows:</p>
          <table class="info-table">
            <tr><th>Violation Type</th><th>Average Insurance Increase</th></tr>
            <tr><td>Speeding (1-15 over)</td><td>15-25%</td></tr>
            <tr><td>Speeding (16-30 over)</td><td>25-35%</td></tr>
            <tr><td>Running red light/stop sign</td><td>20-30%</td></tr>
            <tr><td>Reckless driving</td><td>50-70%</td></tr>
            <tr><td>DUI (first offense)</td><td>70-100%+</td></tr>
            <tr><td>At-fault accident</td><td>40-60%</td></tr>
          </table>

          <div class="case-study">
            <h4>📋 Real-World Case Study: The $15,000 Speeding Ticket</h4>
            <p><strong>Amanda's Story:</strong></p>
            <p>Amanda, 28, received a speeding ticket for going 22 mph over the limit. The ticket was $250, and she paid it thinking that was the end.</p>
            <p><strong>What actually happened:</strong></p>
            <ul>
              <li>Her insurance increased by $85/month (from $120 to $205)</li>
              <li>Over 3 years, that's an extra $3,060</li>
              <li>She received another ticket 8 months later (following too closely)</li>
              <li>Insurance jumped to $290/month—an additional $2,040/year</li>
              <li>With 7 points in 11 months, she was at risk of suspension</li>
              <li>She had to take a driver improvement course</li>
              <li><strong>Total cost over 3 years: approximately $12,000</strong></li>
            </ul>
            <p><em>"That $250 ticket ended up costing me more than my car payment for three years. I wish I had just slowed down."</em></p>
          </div>

          <h3>License Suspension and Revocation</h3>
          
          <h4>Reasons for Suspension</h4>
          <p>Your license can be suspended for:</p>
          <ul>
            <li><strong>Point accumulation:</strong> Exceeding point thresholds within time periods</li>
            <li><strong>DUI conviction:</strong> Mandatory suspension ranging from 180 days to permanent revocation</li>
            <li><strong>Failure to pay fines:</strong> Unpaid tickets result in suspension</li>
            <li><strong>Failure to appear in court:</strong> Missing your court date triggers suspension</li>
            <li><strong>Failure to maintain insurance:</strong> Lapse in coverage leads to suspension</li>
            <li><strong>Child support delinquency:</strong> Florida suspends licenses for non-payment</li>
          </ul>

          <h4>Habitual Traffic Offender (HTO) Status</h4>
          <p>Florida can declare you a Habitual Traffic Offender, resulting in a <strong>5-year license revocation</strong>, if you have:</p>
          <ul>
            <li>3 or more major offenses (DUI, driving on suspended license, etc.) within 5 years</li>
            <li>15 or more convictions of moving violations (each worth 4+ points) within 5 years</li>
          </ul>

          <h4>Driving on a Suspended License</h4>
          <p>If your license is suspended, <strong>do not drive</strong>. The consequences are severe:</p>
          <table class="info-table">
            <tr><th>Offense</th><th>Consequences</th></tr>
            <tr><td>First offense (unknowing)</td><td>Misdemeanor, up to $500 fine, extended suspension</td></tr>
            <tr><td>First offense (knowingly)</td><td>Misdemeanor, up to $500 fine, 60 days jail possible</td></tr>
            <tr><td>Second offense</td><td>Misdemeanor, $1,000 fine, up to 1 year jail</td></tr>
            <tr><td>Third offense (within 5 years)</td><td>Felony, up to 5 years prison, permanent revocation possible</td></tr>
          </table>

          <h3>Criminal Consequences of Serious Violations</h3>
          
          <p>Some traffic violations go beyond civil infractions and become criminal offenses:</p>

          <h4>Reckless Driving (F.S. 316.192)</h4>
          <ul>
            <li><strong>Definition:</strong> Driving with willful or wanton disregard for safety</li>
            <li><strong>First offense:</strong> Misdemeanor, up to $500 fine, up to 90 days jail</li>
            <li><strong>Second offense:</strong> Misdemeanor, up to $1,000 fine, up to 6 months jail</li>
            <li><strong>Causing property damage or injury:</strong> Enhanced penalties, possible felony charges</li>
          </ul>

          <h4>DUI (F.S. 316.193)</h4>
          <p>Driving under the influence carries some of the most severe penalties:</p>
          <table class="info-table">
            <tr><th>Offense</th><th>Penalties</th></tr>
            <tr><td>First DUI</td><td>Up to $1,000 fine, 180-day license revocation, possible 6 months jail, probation, DUI school</td></tr>
            <tr><td>Second DUI (within 5 years)</td><td>Up to $2,000 fine, 5-year revocation, minimum 10 days jail, ignition interlock</td></tr>
            <tr><td>Third DUI (within 10 years)</td><td>Felony, up to $5,000 fine, 10-year revocation, minimum 30 days jail</td></tr>
            <tr><td>DUI causing injury</td><td>Felony, up to 5 years prison</td></tr>
            <tr><td>DUI causing death</td><td>Felony, up to 15 years prison</td></tr>
          </table>

          <h4>Vehicular Homicide</h4>
          <ul>
            <li>Killing a person through reckless operation of a vehicle</li>
            <li>Second-degree felony: Up to 15 years prison</li>
            <li>If driver leaves the scene: First-degree felony, up to 30 years prison</li>
          </ul>

          <h3>Impact on Employment</h3>
          
          <p>Traffic violations can affect your career in multiple ways:</p>
          <ul>
            <li><strong>Commercial drivers:</strong> CDL holders face stricter rules; serious violations can end careers</li>
            <li><strong>Jobs requiring driving:</strong> Delivery drivers, sales reps, service technicians may lose jobs</li>
            <li><strong>Background checks:</strong> Many employers check driving records as part of hiring</li>
            <li><strong>Professional licenses:</strong> Some professions consider driving record in licensing decisions</li>
            <li><strong>Loss of license:</strong> If you can't get to work, you may lose your job</li>
          </ul>

          <h3>Options for Addressing Violations</h3>
          
          <h4>Traffic School Election</h4>
          <p>For eligible violations, you can elect to take a Basic Driver Improvement (BDI) course to:</p>
          <ul>
            <li>Prevent points from being added to your record</li>
            <li>Still pay the ticket fine, but avoid insurance increases (in most cases)</li>
            <li><strong>Limitations:</strong> Can only be used once every 12 months, up to 5 times in your lifetime</li>
          </ul>

          <h4>Contesting a Ticket</h4>
          <p>You have the right to contest any ticket. Options include:</p>
          <ul>
            <li><strong>Court appearance:</strong> Present your case to a judge</li>
            <li><strong>Hire an attorney:</strong> May be able to get charges reduced or dismissed</li>
            <li><strong>Negotiate:</strong> Some prosecutors offer plea deals for reduced charges</li>
          </ul>

          <div class="reflection-question">
            <h4>🤔 Reflection Question</h4>
            <p>Calculate the potential cost of your next traffic violation: the fine, potential insurance increase over 3 years, and any other impacts (time off work for court, etc.). Is the few minutes you might save by speeding worth thousands of dollars?</p>
          </div>

          <h3>Module Summary</h3>
          
          <ul>
            <li>Florida's point system tracks violations; 12 points in 12 months = 30-day suspension</li>
            <li>Insurance increases from violations often cost 10x more than the ticket itself</li>
            <li>Driving on a suspended license is a criminal offense with severe penalties</li>
            <li>Serious violations (DUI, reckless driving) can result in jail time and permanent record</li>
            <li>Traffic record affects employment, especially for jobs requiring driving</li>
            <li>Traffic school can prevent points for eligible violations (limited to once per year)</li>
          </ul>

          <div class="alert alert-success">
            <h4>✅ Module 5 Complete</h4>
            <p>You've completed the Traffic Violations Impact module. The final module covers Certification and Final Assessment.</p>
          </div>
        `,
        quizQuestions: [
          {
            questionText: 'How many points does a speeding violation of 16+ mph over the limit add to your Florida driving record?',
            options: ['2 points', '3 points', '4 points', '6 points'],
            correctAnswer: '4 points',
            explanation: 'Speeding 16 or more mph over the limit adds 4 points to your driving record.'
          },
          {
            questionText: 'What is the consequence of accumulating 18 points within 18 months in Florida?',
            options: ['30-day suspension', '90-day suspension', '6-month suspension', '1-year suspension'],
            correctAnswer: '90-day suspension',
            explanation: 'Accumulating 18 points within 18 months results in a 3-month (90-day) license suspension.'
          },
          {
            questionText: 'How often can you use traffic school to prevent points from a violation?',
            options: ['Once ever', 'Once every 6 months', 'Once every 12 months', 'Unlimited'],
            correctAnswer: 'Once every 12 months',
            explanation: 'Traffic school can be used to prevent points once every 12 months, up to 5 times in your lifetime.'
          },
          {
            questionText: 'True or False: A third offense of driving on a suspended license within 5 years is a felony.',
            questionType: 'true_false',
            options: ['True', 'False'],
            correctAnswer: 'True',
            explanation: 'A third offense of knowingly driving on a suspended license within 5 years is a felony, punishable by up to 5 years in prison.'
          },
          {
            questionText: 'What is the minimum number of major offenses within 5 years that can result in Habitual Traffic Offender status?',
            options: ['2 offenses', '3 offenses', '4 offenses', '5 offenses'],
            correctAnswer: '3 offenses',
            explanation: 'Three or more major offenses within 5 years can result in Habitual Traffic Offender status and a 5-year license revocation.'
          }
        ]
      },

      // =========================================
      // MODULE 6: Final Assessment and Certification
      // Estimated Reading Time: 25-30 minutes
      // =========================================
      {
        title: 'Module 6: Final Assessment and Certification',
        description: 'Course review, certification requirements, and final examination preparation',
        estimatedMinutes: 30,
        content: `
          <h2>Final Assessment and Certification</h2>
          
          <p>Congratulations on reaching the final module of the 8-Hour Intermediate Driver Improvement Course! You've completed comprehensive training on defensive driving, handling adverse conditions, sharing the road with all users, and understanding the impact of traffic violations.</p>

          <p>This final module will review key concepts, explain the certification process, and prepare you for the final examination.</p>

          <h3>Course Completion Requirements</h3>
          
          <p>To successfully complete this course and receive your certificate, you must:</p>
          <ol>
            <li><strong>Complete all course modules:</strong> All 6 modules must be viewed in full</li>
            <li><strong>Pass module quizzes:</strong> Each module includes quiz questions to reinforce learning</li>
            <li><strong>Pass the final examination:</strong> Score at least 80% on the final exam</li>
            <li><strong>Verify your identity:</strong> Complete required identity verification</li>
          </ol>

          <h4>Final Examination Details</h4>
          <table class="info-table">
            <tr><th>Requirement</th><th>Details</th></tr>
            <tr><td>Number of Questions</td><td>Minimum 40 questions</td></tr>
            <tr><td>Question Types</td><td>Multiple choice and True/False</td></tr>
            <tr><td>Passing Score</td><td>80% or higher</td></tr>
            <tr><td>Attempts Allowed</td><td>Multiple (if needed)</td></tr>
            <tr><td>Format</td><td>Open-book (you may refer to course materials)</td></tr>
            <tr><td>Time Limit</td><td>No strict time limit</td></tr>
          </table>

          <h3>Course Review: Key Concepts</h3>
          
          <h4>Module 1: Introduction to Driver Improvement</h4>
          <ul>
            <li>85% of crashes are caused by driver error</li>
            <li>Florida's point system: 12 points in 12 months = 30-day suspension</li>
            <li>Traffic violations have financial, legal, and personal consequences</li>
            <li>This course fulfills state requirements and demonstrates commitment to safe driving</li>
          </ul>

          <h4>Module 2: Defensive Driving Techniques</h4>
          <ul>
            <li>The SIPDE method: Scan, Identify, Predict, Decide, Execute</li>
            <li>3-second following distance minimum; increase in adverse conditions</li>
            <li>Anticipate that other drivers may make mistakes</li>
            <li>Always have an escape route</li>
            <li>Scan 10-15 seconds ahead; check mirrors every 5-8 seconds</li>
          </ul>

          <h4>Module 3: Handling Adverse Conditions</h4>
          <ul>
            <li>Rain: Slow down, increase following distance, watch for hydroplaning (can occur at 35+ mph)</li>
            <li>Fog: Use low beams/fog lights, not high beams; slow significantly</li>
            <li>Night: Don't overdrive headlights; 50% of fatalities occur at night</li>
            <li>Emergencies: Blowout—grip wheel, ease off gas; Brake failure—pump brakes, downshift, parking brake</li>
          </ul>

          <h4>Module 4: Managing Interactions</h4>
          <ul>
            <li>Pedestrians: Always yield at crosswalks; Florida has highest pedestrian fatality rate</li>
            <li>Cyclists: 3 feet minimum passing distance</li>
            <li>Motorcycles: Look twice—most common fatal crash is car turning left</li>
            <li>Large trucks: Avoid the "no-zones" (blind spots)</li>
            <li>School buses: Stop in both directions when lights flash (unless divided by barrier)</li>
            <li>Move Over Law: Change lanes or slow to 20 mph below limit for stopped emergency/service vehicles</li>
          </ul>

          <h4>Module 5: Impact of Traffic Violations</h4>
          <ul>
            <li>Points stay on record 3-10 years depending on violation</li>
            <li>Insurance increases often cost 10x more than the ticket</li>
            <li>Suspension thresholds: 12 points/12 mo., 18 points/18 mo., 24 points/36 mo.</li>
            <li>Driving on suspended license: Criminal offense, can become felony</li>
            <li>DUI: Severe penalties including license revocation, jail, and permanent record</li>
            <li>Habitual Traffic Offender: 3+ major offenses in 5 years = 5-year revocation</li>
          </ul>

          <h3>Certificate Information</h3>
          
          <h4>What Your Certificate Accomplishes</h4>
          <ul>
            <li><strong>Court compliance:</strong> Satisfies court-ordered driver improvement requirements</li>
            <li><strong>License reinstatement:</strong> May be required step for reinstating driving privileges</li>
            <li><strong>Point reduction:</strong> Depending on your situation, may help with point-related issues</li>
            <li><strong>Insurance:</strong> May qualify you for discounts or demonstrate commitment to safe driving</li>
          </ul>

          <h4>Certificate Delivery</h4>
          <ul>
            <li>Your completion is reported electronically to the Florida DHSMV within 1-2 business days</li>
            <li>An electronic certificate is available immediately upon completion</li>
            <li>Keep a copy for your records and for your insurance company</li>
          </ul>

          <h3>Moving Forward: Your Commitment</h3>
          
          <p>Completing this course is an important step, but the real work begins when you return to everyday driving. The knowledge you've gained is only valuable if you apply it consistently.</p>

          <div class="pledge-box">
            <h4>🎯 Post-Course Commitments</h4>
            <ul>
              <li>I will eliminate distractions while driving—no phone use, no texting, full attention on the road</li>
              <li>I will maintain safe following distances and adjust for conditions</li>
              <li>I will anticipate the actions of other drivers and be prepared to react safely</li>
              <li>I will respect all road users—pedestrians, cyclists, motorcyclists, and commercial vehicles</li>
              <li>I will obey traffic laws consistently, not just when I think I might get caught</li>
              <li>I will never drive impaired or fatigued</li>
              <li>I will adapt my driving to weather and road conditions</li>
              <li>I will take responsibility for my actions behind the wheel</li>
            </ul>
          </div>

          <h3>Breaking the Cycle of Violations</h3>
          
          <p>If you're taking this course because of multiple violations, consider what patterns may have led here:</p>
          <ul>
            <li><strong>Are you often in a hurry?</strong> Leave earlier. The minutes you save aren't worth the consequences.</li>
            <li><strong>Do you get distracted?</strong> Put your phone away—really away, not just face-down.</li>
            <li><strong>Do you follow too closely?</strong> Pick a landmark and count the seconds. Make it a habit.</li>
            <li><strong>Do you speed without realizing it?</strong> Check your speedometer more often. Use cruise control on highways.</li>
            <li><strong>Do you get frustrated in traffic?</strong> Accept that traffic is part of driving. Listen to calming music or podcasts.</li>
          </ul>

          <p>Every violation you avoid is money saved, stress avoided, and potentially a life protected—including your own.</p>

          <h3>Thank You</h3>
          
          <p>Thank you for taking this course seriously. By investing this time in improving your driving knowledge and reflecting on your habits, you're making a positive contribution to road safety. Florida's roads are safer when every driver commits to responsible behavior.</p>

          <p>Remember: <strong>Safe driving is not just about following laws—it's about protecting lives.</strong></p>

          <div class="alert alert-success">
            <h4>✅ Module 6 Complete - Ready for Final Exam</h4>
            <p>You've completed all 6 modules of the 8-Hour Intermediate Driver Improvement Course. When you're ready, proceed to the Final Examination.</p>
            <p><strong>Remember:</strong> You need 80% or higher to pass. Take your time and think through each question carefully.</p>
          </div>
        `,
        quizQuestions: [
          {
            questionText: 'What is the minimum passing score required for the final examination?',
            options: ['70%', '75%', '80%', '85%'],
            correctAnswer: '80%',
            explanation: 'You must score at least 80% on the final examination to pass the course.'
          },
          {
            questionText: 'True or False: Your course completion is automatically reported to the Florida DHSMV.',
            questionType: 'true_false',
            options: ['True', 'False'],
            correctAnswer: 'True',
            explanation: 'Your completion is reported electronically to the Florida DHSMV within 1-2 business days.'
          },
          {
            questionText: 'What percentage of crashes are caused by driver error?',
            options: ['About 50%', 'About 65%', 'About 75%', 'About 85%'],
            correctAnswer: 'About 85%',
            explanation: 'Approximately 85% of all crashes are caused by driver error, not vehicle failure or road conditions.'
          }
        ]
      }
    ],
    // Final exam questions for the 8-hour course
    finalExamQuestions: [
      {
        questionText: 'What is the minimum following distance recommended under normal driving conditions?',
        options: ['1 second', '2 seconds', '3 seconds', '5 seconds'],
        correctAnswer: '3 seconds',
        explanation: 'The 3-second rule provides adequate time to react to sudden stops or hazards under normal conditions.'
      },
      {
        questionText: 'How many points will result in a 30-day license suspension if accumulated within 12 months?',
        options: ['8 points', '10 points', '12 points', '15 points'],
        correctAnswer: '12 points',
        explanation: 'Accumulating 12 points within 12 months results in a 30-day license suspension in Florida.'
      },
      {
        questionText: 'What does the "S" in the SIPDE method stand for?',
        options: ['Stop', 'Scan', 'Speed', 'Steer'],
        correctAnswer: 'Scan',
        explanation: 'SIPDE stands for Scan, Identify, Predict, Decide, Execute.'
      },
      {
        questionText: 'At what speed can hydroplaning begin on wet roads?',
        options: ['55 mph', '45 mph', '35 mph', '25 mph'],
        correctAnswer: '35 mph',
        explanation: 'Hydroplaning can begin at speeds as low as 35 mph on wet road surfaces.'
      },
      {
        questionText: 'What is the minimum safe passing distance when overtaking a cyclist in Florida?',
        options: ['1 foot', '2 feet', '3 feet', '4 feet'],
        correctAnswer: '3 feet',
        explanation: 'Florida law requires a minimum of 3 feet clearance when passing a cyclist.'
      },
      {
        questionText: 'True or False: About 50% of traffic deaths occur at night.',
        questionType: 'true_false',
        options: ['True', 'False'],
        correctAnswer: 'True',
        explanation: 'About 50% of traffic deaths occur at night despite significantly less traffic.'
      },
      {
        questionText: 'What type of headlights should you use in fog?',
        options: ['High beams', 'Low beams or fog lights', 'Parking lights', 'No lights'],
        correctAnswer: 'Low beams or fog lights',
        explanation: 'High beams reflect off fog and reduce visibility. Use low beams or fog lights.'
      },
      {
        questionText: 'What is the most common type of fatal motorcycle crash?',
        options: ['Rear-end collision', 'Car turning left in front of motorcycle', 'Single-vehicle accident', 'Side-swipe collision'],
        correctAnswer: 'Car turning left in front of motorcycle',
        explanation: 'The most common fatal motorcycle crash involves a car turning left in front of an oncoming motorcycle.'
      },
      {
        questionText: 'Under Florida\'s Move Over Law, if you cannot change lanes, you must:',
        options: ['Maintain your speed', 'Speed up to pass quickly', 'Slow to 20 mph below the posted limit', 'Stop completely'],
        correctAnswer: 'Slow to 20 mph below the posted limit',
        explanation: 'If you cannot safely change lanes, slow to 20 mph below the posted speed limit.'
      },
      {
        questionText: 'What is the penalty for a first offense of passing a stopped school bus?',
        options: ['$100-$200 fine', '$200-$300 fine', '$400-$500 fine plus 4 points', 'Warning only'],
        correctAnswer: '$400-$500 fine plus 4 points',
        explanation: 'A first offense for passing a stopped school bus carries a $400-$500 fine plus 4 points.'
      },
      {
        questionText: 'If your brakes fail, what should you do first?',
        options: ['Turn off the engine', 'Pump the brake pedal rapidly', 'Jump from the vehicle', 'Pull the parking brake hard'],
        correctAnswer: 'Pump the brake pedal rapidly',
        explanation: 'Pumping may build up enough pressure to slow the vehicle. Then downshift and gradually apply the parking brake.'
      },
      {
        questionText: 'How far ahead should you scan while driving at highway speeds?',
        options: ['2-3 seconds', '5-8 seconds', '10-15 seconds', '20-30 seconds'],
        correctAnswer: '10-15 seconds',
        explanation: 'Scanning 10-15 seconds ahead gives you time to identify and respond to hazards.'
      },
      {
        questionText: 'True or False: Points from traffic violations remain on your record permanently.',
        questionType: 'true_false',
        options: ['True', 'False'],
        correctAnswer: 'False',
        explanation: 'Points remain on your record for 3-10 years depending on the violation.'
      },
      {
        questionText: 'What percentage of crashes are caused by driver error?',
        options: ['About 50%', 'About 65%', 'About 75%', 'About 85%'],
        correctAnswer: 'About 85%',
        explanation: 'Approximately 85% of crashes are caused by driver error, not vehicle or road conditions.'
      },
      {
        questionText: 'What happens to stopping distance when you double your speed?',
        options: ['It doubles', 'It triples', 'It quadruples', 'It stays the same'],
        correctAnswer: 'It quadruples',
        explanation: 'Stopping distance increases with the square of speed—doubling speed quadruples stopping distance.'
      },
      {
        questionText: 'If you experience a tire blowout, you should:',
        options: ['Brake hard immediately', 'Turn sharply to the shoulder', 'Grip the wheel firmly and ease off the gas', 'Accelerate briefly'],
        correctAnswer: 'Grip the wheel firmly and ease off the gas',
        explanation: 'Maintain control by gripping the wheel, easing off the gas, and steering straight until you can safely stop.'
      },
      {
        questionText: 'How often can traffic school be used to avoid points in Florida?',
        options: ['Once ever', 'Once every 6 months', 'Once every 12 months', 'Unlimited'],
        correctAnswer: 'Once every 12 months',
        explanation: 'Traffic school can be used once every 12 months, up to 5 times in your lifetime.'
      },
      {
        questionText: 'True or False: If you can see the truck driver\'s face in their side mirror, they can see you.',
        questionType: 'true_false',
        options: ['True', 'False'],
        correctAnswer: 'True',
        explanation: 'The mirror rule: if you can see them, they can see you. If not, you\'re in their blind spot.'
      },
      {
        questionText: 'What is the consequence of accumulating 18 points within 18 months?',
        options: ['30-day suspension', '90-day suspension', '6-month suspension', '1-year suspension'],
        correctAnswer: '90-day suspension',
        explanation: '18 points within 18 months results in a 3-month (90-day) license suspension.'
      },
      {
        questionText: 'Never drive through flooded roads because:',
        options: ['It damages your engine', 'Water depth and road conditions are unpredictable', 'You might get stuck', 'It voids your insurance'],
        correctAnswer: 'Water depth and road conditions are unpredictable',
        explanation: 'You cannot tell how deep the water is or if the road surface beneath is intact.'
      },
      {
        questionText: 'What constitutes a Habitual Traffic Offender in Florida?',
        options: ['2 major offenses in 3 years', '3 major offenses in 5 years', '5 major offenses in 7 years', '10 violations in 10 years'],
        correctAnswer: '3 major offenses in 5 years',
        explanation: 'Three or more major offenses within 5 years can result in Habitual Traffic Offender status.'
      },
      {
        questionText: 'When should you check your mirrors while driving?',
        options: ['Every 30 seconds', 'Every 15-20 seconds', 'Every 5-8 seconds', 'Only when changing lanes'],
        correctAnswer: 'Every 5-8 seconds',
        explanation: 'Checking mirrors every 5-8 seconds maintains awareness of surrounding traffic.'
      },
      {
        questionText: 'True or False: A third offense of driving on a suspended license is a felony.',
        questionType: 'true_false',
        options: ['True', 'False'],
        correctAnswer: 'True',
        explanation: 'A third offense of knowingly driving on a suspended license within 5 years is a felony.'
      },
      {
        questionText: 'Florida has the highest fatality rate in the nation for which road users?',
        options: ['Truck drivers', 'Teenage drivers', 'Pedestrians', 'Commercial vehicles'],
        correctAnswer: 'Pedestrians',
        explanation: 'Florida has the highest pedestrian fatality rate in the nation.'
      },
      {
        questionText: 'What is the minimum passing score for the final exam?',
        options: ['70%', '75%', '80%', '85%'],
        correctAnswer: '80%',
        explanation: 'You must score at least 80% on the final examination to pass the course.'
      }
    ]
  },

  // =====================================================
  // 12-HOUR ADVANCED DRIVER IMPROVEMENT (ADI) COURSE
  // Required for: License reinstatement after suspension
  // =====================================================
  course12Hour: {
    name: '12-Hour Advanced Driver Improvement (ADI)',
    slug: 'florida-12-hour-adi',
    description: 'This comprehensive 12-hour course is required for drivers seeking to reinstate their license after suspension due to excessive points or habitual traffic offenses. It provides the most in-depth education on defensive driving, traffic law compliance, and developing lasting safe driving habits.',
    durationHours: 12,
    price: 45.00,
    modules: [
      // =========================================
      // MODULE 1: Introduction to Driver Improvement
      // Estimated Reading Time: 45-50 minutes
      // =========================================
      {
        title: 'Module 1: Introduction to Driver Improvement',
        description: 'Course objectives, Florida driving statistics, and the importance of safe driving',
        estimatedMinutes: 50,
        content: `
          <h2>Introduction to Driver Improvement</h2>
          
          <p>Welcome to the Florida 12-Hour Advanced Driver Improvement (ADI) Course. This is the most comprehensive driver improvement course offered in Florida, and it's required for reinstatement of your driving privileges after a suspension due to point accumulation or habitual traffic offenses.</p>

          <p>If you're taking this course, you've likely faced significant consequences from past driving behaviors—license suspension, increased insurance costs, perhaps even employment challenges. This course represents an opportunity to fundamentally change your approach to driving and regain the privilege to operate a motor vehicle in Florida.</p>

          <div class="statistics-box">
            <h4>📊 Florida Driving Statistics: The Reality of Our Roads</h4>
            <ul>
              <li><strong>Over 400,000 crashes</strong> occur on Florida roads each year</li>
              <li><strong>More than 3,500 people</strong> die in Florida traffic crashes annually</li>
              <li><strong>Over 250,000 people</strong> sustain injuries in Florida crashes each year</li>
              <li>Florida consistently ranks among the <strong>top 3 most dangerous states</strong> for drivers</li>
              <li><strong>Approximately 85%</strong> of all crashes are caused by driver behavior—not vehicle failure or road conditions</li>
              <li><strong>Distracted driving</strong> is involved in nearly 50,000 Florida crashes annually</li>
              <li><strong>DUI crashes</strong> account for approximately 5,000 fatalities and serious injuries in Florida each year</li>
            </ul>
          </div>

          <h3>Purpose of This Course</h3>
          
          <p>The Advanced Driver Improvement Course is designed to provide comprehensive education that goes far beyond basic traffic law review. This course aims to:</p>

          <ol>
            <li><strong>Rebuild your driving foundation:</strong> Review and reinforce all aspects of safe driving, from basic vehicle control to advanced defensive techniques</li>
            <li><strong>Address the behaviors that led to suspension:</strong> Help you understand and change the specific patterns that accumulated enough violations to lose your license</li>
            <li><strong>Develop lasting safe driving habits:</strong> Provide strategies for maintaining safe driving over the long term, not just while under scrutiny</li>
            <li><strong>Understand the full impact of violations:</strong> Explore the legal, financial, personal, and social consequences of traffic offenses</li>
            <li><strong>Meet reinstatement requirements:</strong> Fulfill the state-mandated requirements for restoring your driving privileges</li>
          </ol>

          <h3>Why You're Here: Understanding License Suspension</h3>
          
          <p>Florida suspends driving privileges for several reasons:</p>

          <h4>Point Accumulation Suspensions</h4>
          <table class="info-table">
            <tr><th>Points Accumulated</th><th>Time Period</th><th>Suspension Length</th></tr>
            <tr><td>12 points</td><td>Within 12 months</td><td>30 days</td></tr>
            <tr><td>18 points</td><td>Within 18 months</td><td>3 months (90 days)</td></tr>
            <tr><td>24 points</td><td>Within 36 months</td><td>1 year</td></tr>
          </table>

          <h4>Habitual Traffic Offender (HTO) Designation</h4>
          <p>Florida may classify you as a Habitual Traffic Offender if you accumulate:</p>
          <ul>
            <li><strong>Three or more major offenses</strong> within 5 years (DUI, driving on suspended license, vehicular manslaughter, etc.)</li>
            <li><strong>Fifteen or more convictions</strong> for moving violations (each worth 4+ points) within 5 years</li>
          </ul>
          <p>HTO designation results in a <strong>5-year license revocation</strong>.</p>

          <h4>Other Common Suspension Reasons</h4>
          <ul>
            <li>DUI conviction (180 days to permanent, depending on circumstances)</li>
            <li>Failure to pay traffic fines</li>
            <li>Failure to appear in court</li>
            <li>Failure to maintain required insurance</li>
            <li>Refusal to submit to breath/blood/urine test</li>
          </ul>

          <div class="case-study">
            <h4>📋 Real-World Case Study: The Road to Suspension</h4>
            <p><strong>David's Story:</strong></p>
            <p>David, 32, didn't think of himself as a dangerous driver. He was just "always in a hurry." Over two years, he accumulated:</p>
            <ul>
              <li>3 speeding tickets (15+ mph over)</li>
              <li>2 red light violations</li>
              <li>1 improper lane change</li>
              <li>1 following too closely</li>
            </ul>
            <p>Total: 24 points in 30 months. His license was suspended for one year.</p>
            <p><strong>The consequences:</strong></p>
            <ul>
              <li>Lost his sales job that required driving to client sites</li>
              <li>Had to rely on family and ride-shares for a year</li>
              <li>Insurance increased from $150/month to $420/month</li>
              <li>Required to complete the 12-hour ADI course at his expense</li>
              <li>Had to pay reinstatement fees</li>
              <li>Estimated total cost: over $25,000 in fines, lost wages, insurance, and fees</li>
            </ul>
            <p><em>"I never thought it would add up like this," David said. "Each ticket seemed minor at the time. I didn't realize I was building toward losing my license entirely."</em></p>
          </div>

          <h3>The Reinstatement Process</h3>
          
          <p>To reinstate your license after suspension, you typically must:</p>
          <ol>
            <li><strong>Serve the full suspension period</strong> (no driving during this time)</li>
            <li><strong>Complete required education</strong> (this 12-hour ADI course)</li>
            <li><strong>Pay reinstatement fees</strong> ($45-$75 for standard suspensions, more for DUI)</li>
            <li><strong>Show proof of insurance</strong> (FR-44 may be required for certain violations)</li>
            <li><strong>Pass any required tests</strong> (vision, written, road test for some cases)</li>
            <li><strong>Clear any outstanding fines or court obligations</strong></li>
          </ol>

          <div class="alert alert-danger">
            <h4>⚠️ WARNING: Do Not Drive on a Suspended License</h4>
            <p>Driving while suspended is a criminal offense in Florida:</p>
            <ul>
              <li><strong>First offense:</strong> Misdemeanor, up to $500 fine, up to 60 days jail</li>
              <li><strong>Second offense:</strong> Misdemeanor, up to $1,000 fine, up to 1 year jail</li>
              <li><strong>Third offense (within 5 years):</strong> <strong>Felony</strong>, up to 5 years prison</li>
            </ul>
            <p>Each offense also extends your suspension period. <strong>It is never worth the risk.</strong></p>
          </div>

          <h3>Course Structure</h3>
          
          <p>This comprehensive 12-hour course covers eight modules:</p>
          <ol>
            <li><strong>Module 1:</strong> Introduction to Driver Improvement (current module)</li>
            <li><strong>Module 2:</strong> Florida Traffic Laws and Regulations</li>
            <li><strong>Module 3:</strong> Defensive Driving Techniques</li>
            <li><strong>Module 4:</strong> Hazard Recognition and Avoidance</li>
            <li><strong>Module 5:</strong> Effects of Impairment on Driving</li>
            <li><strong>Module 6:</strong> Crash Prevention Strategies</li>
            <li><strong>Module 7:</strong> Traffic Violation Consequences</li>
            <li><strong>Module 8:</strong> Final Assessment and Certification</li>
          </ol>

          <h3>Making This Course Count</h3>
          
          <p>You can approach this course as a requirement to check off, or as a genuine opportunity for change. The latter will serve you far better in the long run. Consider:</p>
          <ul>
            <li><strong>Reflect honestly</strong> on the driving behaviors that led to your suspension</li>
            <li><strong>Engage fully</strong> with the material—don't just skim through</li>
            <li><strong>Apply what you learn</strong> starting immediately, not someday later</li>
            <li><strong>Think long-term</strong> about the driver you want to be</li>
          </ul>

          <div class="pledge-box">
            <h4>🎯 Course Commitment</h4>
            <p>As I begin this course, I commit to:</p>
            <ul>
              <li>Taking full responsibility for the actions that led to my license suspension</li>
              <li>Engaging honestly with this material and reflecting on my driving behaviors</li>
              <li>Learning and applying the defensive driving principles taught in this course</li>
              <li>Making permanent changes to my driving habits, not temporary fixes</li>
              <li>Understanding that safe driving is a responsibility I owe to myself and everyone who shares the road with me</li>
            </ul>
          </div>

          <div class="alert alert-success">
            <h4>✅ Module 1 Complete</h4>
            <p>You've completed the Introduction to Driver Improvement. The next module covers Florida Traffic Laws and Regulations in detail.</p>
          </div>
        `,
        quizQuestions: [
          {
            questionText: 'What is the license suspension period for accumulating 24 points within 36 months?',
            options: ['30 days', '90 days', '6 months', '1 year'],
            correctAnswer: '1 year',
            explanation: 'Accumulating 24 points within 36 months results in a 1-year license suspension in Florida.'
          },
          {
            questionText: 'How many major offenses within 5 years can result in Habitual Traffic Offender status?',
            options: ['2 offenses', '3 offenses', '5 offenses', '10 offenses'],
            correctAnswer: '3 offenses',
            explanation: 'Three or more major offenses within 5 years can result in HTO designation and a 5-year license revocation.'
          },
          {
            questionText: 'What percentage of crashes are caused by driver behavior?',
            options: ['About 50%', 'About 65%', 'About 75%', 'About 85%'],
            correctAnswer: 'About 85%',
            explanation: 'Approximately 85% of all crashes are caused by driver behavior, not vehicle failure or road conditions.'
          },
          {
            questionText: 'True or False: A third offense of driving on a suspended license within 5 years is a felony.',
            questionType: 'true_false',
            options: ['True', 'False'],
            correctAnswer: 'True',
            explanation: 'A third offense of driving on a suspended license within 5 years is a felony, punishable by up to 5 years in prison.'
          }
        ]
      },

      // =========================================
      // MODULE 2: Florida Traffic Laws & Regulations
      // Estimated Reading Time: 55-60 minutes
      // =========================================
      {
        title: 'Module 2: Florida Traffic Laws & Regulations',
        description: 'Comprehensive overview of Florida traffic laws, speed limits, right-of-way, and violations',
        estimatedMinutes: 60,
        content: `
          <h2>Florida Traffic Laws & Regulations</h2>
          
          <p>Florida maintains a comprehensive system of traffic laws designed to ensure safety and order on our roads. These laws govern everything from speed limits and right-of-way to equipment requirements and driver licensing. Understanding and consistently following these laws is essential for safe driving and maintaining your driving privileges.</p>

          <h3>Speed Limits in Florida</h3>
          
          <p>Speed limits are established based on road type, surrounding environment, and safety considerations. They are not suggestions—they are the maximum legal speeds under ideal conditions.</p>

          <h4>Standard Speed Limits</h4>
          <table class="info-table">
            <tr><th>Location</th><th>Speed Limit</th><th>Key Considerations</th></tr>
            <tr><td>Residential areas</td><td>30 mph</td><td>Watch for children, pets, pedestrians</td></tr>
            <tr><td>Business districts</td><td>30 mph</td><td>Higher pedestrian traffic, frequent stops</td></tr>
            <tr><td>School zones (when active)</td><td>20 mph</td><td>Strictly enforced; watch for crossing guards</td></tr>
            <tr><td>Rural undivided highways</td><td>55 mph</td><td>May have cross traffic, driveways</td></tr>
            <tr><td>Rural interstate highways</td><td>70 mph</td><td>Higher speeds require more stopping distance</td></tr>
            <tr><td>Urban interstate highways</td><td>55-65 mph</td><td>More traffic, more exits, more merging</td></tr>
            <tr><td>Construction zones</td><td>As posted</td><td>Fines doubled; workers present</td></tr>
          </table>

          <div class="alert alert-warning">
            <h4>⚠️ "Too Fast for Conditions"</h4>
            <p>Even if you're driving below the posted limit, you can be cited for driving "too fast for conditions" if road, weather, or traffic conditions make that speed unsafe. Speed limits assume ideal conditions.</p>
          </div>

          <h3>Right-of-Way Rules</h3>
          
          <p>Right-of-way rules determine who goes first in various traffic situations. Understanding these prevents confusion and collisions.</p>

          <h4>Pedestrians</h4>
          <ul>
            <li><strong>Crosswalks:</strong> Pedestrians always have right-of-way in marked and unmarked crosswalks</li>
            <li><strong>Stopping requirement:</strong> You must stop and remain stopped until the pedestrian has crossed</li>
            <li><strong>No passing:</strong> It is illegal to pass a vehicle stopped for a pedestrian at a crosswalk</li>
            <li><strong>Sidewalks:</strong> When crossing a sidewalk, you must yield to pedestrians</li>
          </ul>

          <h4>Intersections</h4>
          <ul>
            <li><strong>Four-way stops:</strong> First to arrive goes first; if simultaneous, yield to driver on right</li>
            <li><strong>Uncontrolled intersections:</strong> Yield to vehicle on right; proceed with caution</li>
            <li><strong>Turning left:</strong> Yield to oncoming traffic and pedestrians</li>
            <li><strong>Turning right on red:</strong> Must stop first; yield to all traffic and pedestrians; not permitted where signs prohibit</li>
          </ul>

          <h4>Emergency Vehicles</h4>
          <ul>
            <li>When emergency vehicle approaches with lights/siren, pull over to right and stop</li>
            <li>Don't follow within 500 feet of responding emergency vehicle</li>
            <li>Clear intersections before pulling over</li>
          </ul>

          <h3>Traffic Signals and Signs</h3>
          
          <h4>Traffic Signal Meanings</h4>
          <table class="info-table">
            <tr><th>Signal</th><th>Meaning</th></tr>
            <tr><td>Steady RED</td><td>Stop and remain stopped until green</td></tr>
            <tr><td>Steady YELLOW</td><td>Warning—light changing to red; stop if safe</td></tr>
            <tr><td>Steady GREEN</td><td>Proceed if intersection is clear</td></tr>
            <tr><td>Flashing RED</td><td>Treat as stop sign—full stop, proceed when safe</td></tr>
            <tr><td>Flashing YELLOW</td><td>Proceed with caution</td></tr>
            <tr><td>Green ARROW</td><td>Protected turn in direction of arrow</td></tr>
            <tr><td>Yellow ARROW</td><td>Protected turn ending; prepare to stop</td></tr>
            <tr><td>Red ARROW</td><td>No turn in that direction</td></tr>
          </table>

          <h4>Sign Shapes and Colors</h4>
          <table class="info-table">
            <tr><th>Shape/Color</th><th>Meaning</th><th>Examples</th></tr>
            <tr><td>Octagon (Red)</td><td>Stop</td><td>Stop sign</td></tr>
            <tr><td>Triangle (Red/White)</td><td>Yield</td><td>Yield sign</td></tr>
            <tr><td>Rectangle (White)</td><td>Regulatory</td><td>Speed limit, do not enter</td></tr>
            <tr><td>Diamond (Yellow)</td><td>Warning</td><td>Curve ahead, pedestrian crossing</td></tr>
            <tr><td>Pentagon (Yellow)</td><td>School</td><td>School zone, school crossing</td></tr>
            <tr><td>Rectangle (Green)</td><td>Guide</td><td>Distance, direction, destinations</td></tr>
            <tr><td>Rectangle (Blue)</td><td>Services</td><td>Hospital, rest area, food</td></tr>
            <tr><td>Rectangle (Orange)</td><td>Construction</td><td>Road work, detours</td></tr>
          </table>

          <h3>Lane Markings</h3>
          
          <ul>
            <li><strong>Yellow lines:</strong> Separate traffic moving in opposite directions</li>
            <li><strong>White lines:</strong> Separate traffic moving in the same direction</li>
            <li><strong>Broken lines:</strong> May be crossed (for passing or lane changes)</li>
            <li><strong>Solid lines:</strong> Should not be crossed (except in emergencies)</li>
            <li><strong>Double solid yellow:</strong> No passing from either direction</li>
            <li><strong>Solid + broken yellow:</strong> May pass from broken line side only</li>
          </ul>

          <h3>Common Traffic Violations and Points</h3>
          
          <table class="info-table">
            <tr><th>Violation</th><th>Points</th></tr>
            <tr><td>Speeding (1-15 mph over)</td><td>3 points</td></tr>
            <tr><td>Speeding (16+ mph over)</td><td>4 points</td></tr>
            <tr><td>Running red light or stop sign</td><td>4 points</td></tr>
            <tr><td>Improper lane change</td><td>3 points</td></tr>
            <tr><td>Following too closely</td><td>3 points</td></tr>
            <tr><td>Failure to yield</td><td>3 points</td></tr>
            <tr><td>Reckless driving</td><td>4 points</td></tr>
            <tr><td>Passing stopped school bus</td><td>4 points</td></tr>
            <tr><td>Leaving scene (property damage)</td><td>6 points</td></tr>
            <tr><td>Violation causing crash</td><td>+2 additional points</td></tr>
          </table>

          <h3>Insurance Requirements</h3>
          
          <p>Florida requires all drivers to maintain minimum insurance coverage:</p>
          <ul>
            <li><strong>Personal Injury Protection (PIP):</strong> $10,000 minimum</li>
            <li><strong>Property Damage Liability (PDL):</strong> $10,000 minimum</li>
          </ul>
          <p>Note: Florida does not require bodily injury liability, but it's strongly recommended.</p>

          <h4>FR-44 Insurance</h4>
          <p>After certain violations (DUI, driving uninsured, etc.), you may be required to carry FR-44 insurance, which requires:</p>
          <ul>
            <li>$100,000 bodily injury per person</li>
            <li>$300,000 bodily injury per accident</li>
            <li>$50,000 property damage</li>
          </ul>
          <p>FR-44 rates are significantly higher than standard insurance and must be maintained for 3 years.</p>

          <div class="reflection-question">
            <h4>🤔 Reflection Question</h4>
            <p>Review the traffic violations that contributed to your license suspension. Which traffic laws did you violate most frequently? What situations or conditions were typically present when you committed these violations?</p>
          </div>

          <h3>Module Summary</h3>
          
          <ul>
            <li>Speed limits vary by location; always observe posted limits and adjust for conditions</li>
            <li>Right-of-way rules establish who proceeds first; pedestrians have priority at crosswalks</li>
            <li>Traffic signals and signs convey essential information; know their meanings</li>
            <li>Lane markings indicate when passing or lane changes are permitted</li>
            <li>All violations add points; enough points lead to suspension</li>
            <li>Insurance is required; FR-44 may be required after certain violations</li>
          </ul>

          <div class="alert alert-success">
            <h4>✅ Module 2 Complete</h4>
            <p>You've completed the Florida Traffic Laws and Regulations module. The next module covers comprehensive defensive driving techniques.</p>
          </div>
        `,
        quizQuestions: [
          {
            questionText: 'What is the speed limit in Florida school zones when children are present?',
            options: ['15 mph', '20 mph', '25 mph', '30 mph'],
            correctAnswer: '20 mph',
            explanation: 'School zones have a 20 mph speed limit during posted hours or when children are present.'
          },
          {
            questionText: 'What does a flashing red traffic signal mean?',
            options: ['Proceed with caution', 'Yield to cross traffic', 'Stop, then proceed when safe', 'Signal is malfunctioning'],
            correctAnswer: 'Stop, then proceed when safe',
            explanation: 'A flashing red signal should be treated like a stop sign—come to a complete stop, then proceed when safe.'
          },
          {
            questionText: 'Double solid yellow lines indicate:',
            options: ['Passing permitted with caution', 'No passing from either direction', 'Passing permitted from the right lane', 'Construction zone'],
            correctAnswer: 'No passing from either direction',
            explanation: 'Double solid yellow lines prohibit passing from both directions.'
          },
          {
            questionText: 'True or False: You can be cited for driving "too fast for conditions" even if below the speed limit.',
            questionType: 'true_false',
            options: ['True', 'False'],
            correctAnswer: 'True',
            explanation: 'Speed limits assume ideal conditions. You can be cited if your speed is unsafe for current conditions.'
          }
        ]
      },

      // =========================================
      // MODULE 3: Defensive Driving Techniques
      // Estimated Reading Time: 60-65 minutes
      // =========================================
      {
        title: 'Module 3: Defensive Driving Techniques',
        description: 'Core defensive driving principles, following distance, scanning, and anticipation',
        estimatedMinutes: 65,
        content: `
          <h2>Defensive Driving Techniques</h2>
          
          <p>Defensive driving is the foundation of safe vehicle operation. It's a proactive approach that goes beyond simply following traffic laws—it means anticipating hazards, preparing for the unexpected actions of others, and always positioning yourself to avoid collisions, even when others make mistakes.</p>

          <p>For drivers working to reinstate their licenses, mastering defensive driving is essential. The techniques in this module, consistently applied, can prevent the violations and crashes that lead to license suspension.</p>

          <div class="statistics-box">
            <h4>📊 The Impact of Defensive Driving</h4>
            <ul>
              <li>Drivers trained in defensive driving are <strong>up to 50% less likely</strong> to be involved in crashes</li>
              <li><strong>Rear-end collisions</strong>—the most common crash type—are almost entirely preventable with proper following distance</li>
              <li><strong>Intersection crashes</strong> can largely be prevented through defensive scanning</li>
              <li>Insurance companies often provide <strong>10-15% discounts</strong> for defensive driving course completion</li>
            </ul>
          </div>

          <h3>The Five Principles of Defensive Driving</h3>

          <h4>1. Stay Alert and Focused</h4>
          <p>Defensive driving requires your full attention. A distracted or fatigued driver cannot anticipate hazards or react quickly.</p>
          <ul>
            <li><strong>Eliminate distractions:</strong> Phone away, eating done, music low</li>
            <li><strong>Stay rested:</strong> Don't drive when fatigued</li>
            <li><strong>Continuous monitoring:</strong> Check mirrors every 5-8 seconds; scan ahead 10-15 seconds</li>
            <li><strong>Expect mistakes:</strong> Assume other drivers may do something unexpected</li>
          </ul>

          <div class="alert alert-info">
            <h4>💡 The SIPDE Method</h4>
            <p>Professional drivers use SIPDE:</p>
            <ul>
              <li><strong>S</strong>can – Look ahead, to sides, and behind continuously</li>
              <li><strong>I</strong>dentify – Recognize potential hazards</li>
              <li><strong>P</strong>redict – Anticipate what could happen</li>
              <li><strong>D</strong>ecide – Choose the safest response</li>
              <li><strong>E</strong>xecute – Take smooth, decisive action</li>
            </ul>
          </div>

          <h4>2. Maintain Safe Following Distance</h4>
          <p>Following distance is one of the most critical defensive driving factors. It gives you time to react and space to stop.</p>

          <h5>The Second Rules</h5>
          <table class="info-table">
            <tr><th>Condition</th><th>Minimum Following Distance</th></tr>
            <tr><td>Normal, dry conditions</td><td>3 seconds</td></tr>
            <tr><td>Light rain or traffic</td><td>4-5 seconds</td></tr>
            <tr><td>Heavy rain, fog, snow</td><td>6-8 seconds</td></tr>
            <tr><td>Following large trucks</td><td>4-5 seconds (to see ahead)</td></tr>
            <tr><td>Being tailgated</td><td>4+ seconds (extra stopping room)</td></tr>
          </table>

          <h5>How to Measure Following Distance</h5>
          <ol>
            <li>Pick a fixed object (sign, tree, overpass)</li>
            <li>When the vehicle ahead passes it, start counting: "one thousand one, one thousand two..."</li>
            <li>If you reach the object before finishing your count, you're too close</li>
          </ol>

          <h4>3. Anticipate Others' Actions</h4>
          <p>Never assume other drivers will do the right thing. Watch for signs of potential problems:</p>
          <ul>
            <li><strong>Lane changes without signals:</strong> Common—expect it</li>
            <li><strong>Hard braking:</strong> Be ready for sudden stops</li>
            <li><strong>Red light runners:</strong> Check before proceeding on green</li>
            <li><strong>Distracted drivers:</strong> Watch for weaving, inconsistent speed</li>
            <li><strong>Pedestrians:</strong> May enter road unexpectedly</li>
          </ul>

          <div class="case-study">
            <h4>📋 Real-World Case Study: The Anticipated Turn</h4>
            <p><strong>Maria's Save:</strong></p>
            <p>Maria was driving through a residential area when she noticed a car ahead slow down near a driveway. The car had no turn signal on, but Maria anticipated they might turn and began slowing down.</p>
            <p>Sure enough, the car suddenly turned left across Maria's path. Because she had already slowed and was prepared to stop, she avoided what would have been a serious collision.</p>
            <p><em>"They had no signal, no brake lights at first—but something told me they were going to turn. Always trust those instincts and prepare for the worst."</em></p>
          </div>

          <h4>4. Adapt to Conditions</h4>
          <p>Conditions change constantly. Defensive drivers adjust accordingly:</p>

          <h5>Weather Adjustments</h5>
          <ul>
            <li><strong>Rain:</strong> Reduce speed, increase distance, use low beams, avoid sudden movements</li>
            <li><strong>Fog:</strong> Low beams only, significantly reduce speed, use road markings</li>
            <li><strong>Sun glare:</strong> Sun visors, sunglasses, slow down when visibility reduced</li>
            <li><strong>Wind:</strong> Firm grip on wheel, caution passing large vehicles</li>
          </ul>

          <h5>Time of Day</h5>
          <ul>
            <li><strong>Dawn/dusk:</strong> Reduced visibility, sun glare, active wildlife</li>
            <li><strong>Night:</strong> Can't see as far, harder to judge speed/distance, more impaired drivers</li>
            <li><strong>Rush hour:</strong> Higher stress, more aggressive driving, congestion</li>
          </ul>

          <h4>5. Always Have an Escape Route</h4>
          <p>Position your vehicle so you always have options if something goes wrong:</p>
          <ul>
            <li><strong>Avoid being boxed in:</strong> Maintain space on at least one side</li>
            <li><strong>Stagger position:</strong> Don't drive directly beside other vehicles</li>
            <li><strong>Know your surroundings:</strong> Be aware of what's beside you, not just ahead/behind</li>
            <li><strong>Plan ahead:</strong> Where would you go if you had to avoid a collision right now?</li>
          </ul>

          <h3>Scanning Techniques</h3>

          <h4>Scanning the Road Ahead</h4>
          <ul>
            <li>Look 10-15 seconds ahead (about 1/4 mile on highways)</li>
            <li>Watch for brake lights several cars ahead</li>
            <li>Note traffic signals as you approach</li>
            <li>Spot road hazards, debris, construction early</li>
          </ul>

          <h4>Mirror Checks</h4>
          <ul>
            <li>Check mirrors every 5-8 seconds</li>
            <li>Know what's beside and behind you at all times</li>
            <li>Check more frequently in heavy traffic or when being tailgated</li>
          </ul>

          <h4>Blind Spot Management</h4>
          <ul>
            <li>Adjust mirrors to minimize blind spots</li>
            <li>Always turn your head to check blind spots before lane changes</li>
            <li>Don't linger in others' blind spots—pass or drop back</li>
            <li>Be extra careful around trucks (much larger blind spots)</li>
          </ul>

          <h3>Speed Management</h3>
          
          <p>Speed affects every aspect of safe driving:</p>
          <ul>
            <li><strong>Reaction distance:</strong> At 60 mph, you travel 88 feet per second</li>
            <li><strong>Stopping distance:</strong> Doubling speed quadruples stopping distance</li>
            <li><strong>Impact force:</strong> Crash severity increases exponentially with speed</li>
            <li><strong>Control:</strong> Higher speeds reduce ability to steer around obstacles</li>
          </ul>

          <table class="info-table">
            <tr><th>Speed</th><th>Feet per Second</th><th>Approx. Stopping Distance</th></tr>
            <tr><td>30 mph</td><td>44 ft/sec</td><td>90 feet</td></tr>
            <tr><td>45 mph</td><td>66 ft/sec</td><td>180 feet</td></tr>
            <tr><td>60 mph</td><td>88 ft/sec</td><td>300 feet</td></tr>
            <tr><td>75 mph</td><td>110 ft/sec</td><td>450 feet</td></tr>
          </table>

          <div class="reflection-question">
            <h4>🤔 Reflection Question</h4>
            <p>Think about the driving behaviors that led to your license suspension. Which of the five defensive driving principles, if applied consistently, might have prevented some of your violations?</p>
          </div>

          <h3>Module Summary</h3>
          
          <ul>
            <li>Stay alert—eliminate distractions, never drive fatigued</li>
            <li>Maintain 3+ second following distance, more in adverse conditions</li>
            <li>Anticipate others' mistakes—don't assume they'll do the right thing</li>
            <li>Adapt driving to conditions—weather, time of day, traffic</li>
            <li>Always have an escape route—position yourself with options</li>
            <li>Scan 10-15 seconds ahead, check mirrors every 5-8 seconds</li>
            <li>Manage speed—it affects reaction time, stopping distance, and crash severity</li>
          </ul>

          <div class="alert alert-success">
            <h4>✅ Module 3 Complete</h4>
            <p>You've completed the Defensive Driving Techniques module. The next module covers Hazard Recognition and Avoidance.</p>
          </div>
        `,
        quizQuestions: [
          {
            questionText: 'What does SIPDE stand for in defensive driving?',
            options: ['Stop, Identify, Proceed, Drive, Exit', 'Scan, Identify, Predict, Decide, Execute', 'Speed, Indicate, Pass, Drive, Exit', 'Steer, Identify, Park, Drive, Engage'],
            correctAnswer: 'Scan, Identify, Predict, Decide, Execute',
            explanation: 'SIPDE stands for Scan, Identify, Predict, Decide, Execute—a systematic approach to defensive driving.'
          },
          {
            questionText: 'Under heavy rain conditions, what is the recommended following distance?',
            options: ['2-3 seconds', '3-4 seconds', '4-5 seconds', '6-8 seconds'],
            correctAnswer: '6-8 seconds',
            explanation: 'In heavy rain, fog, or snow, increase your following distance to 6-8 seconds.'
          },
          {
            questionText: 'How often should you check your mirrors while driving?',
            options: ['Every 30 seconds', 'Every 15-20 seconds', 'Every 5-8 seconds', 'Only when changing lanes'],
            correctAnswer: 'Every 5-8 seconds',
            explanation: 'Checking mirrors every 5-8 seconds maintains awareness of traffic around you.'
          },
          {
            questionText: 'What happens to stopping distance when you double your speed?',
            options: ['It doubles', 'It triples', 'It quadruples', 'It increases slightly'],
            correctAnswer: 'It quadruples',
            explanation: 'Stopping distance increases with the square of speed—doubling speed quadruples stopping distance.'
          }
        ]
      },

      // =========================================
      // MODULE 4: Hazard Recognition & Avoidance
      // Estimated Reading Time: 55-60 minutes
      // =========================================
      {
        title: 'Module 4: Hazard Recognition & Avoidance',
        description: 'Identifying static, dynamic, and environmental hazards and developing avoidance strategies',
        estimatedMinutes: 60,
        content: `
          <h2>Hazard Recognition & Avoidance</h2>
          
          <p>Every time you drive, you navigate through an environment filled with potential hazards. The ability to recognize these hazards early and take appropriate action is what separates drivers who avoid crashes from those who become crash statistics.</p>

          <p>Hazard recognition is a skill that improves with practice and intention. This module will help you develop a systematic approach to identifying dangers and responding appropriately.</p>

          <h3>Types of Hazards</h3>
          
          <p>Driving hazards generally fall into three categories:</p>

          <h4>1. Static Hazards (Fixed Objects)</h4>
          <p>These are hazards that don't move but can still cause problems:</p>
          <ul>
            <li><strong>Road features:</strong> Curves, hills, narrow lanes, merges</li>
            <li><strong>Infrastructure:</strong> Guardrails, signs, poles, bridges</li>
            <li><strong>Surface conditions:</strong> Potholes, debris, gravel, uneven pavement</li>
            <li><strong>Fixed obstacles:</strong> Parked vehicles, construction barriers</li>
          </ul>

          <h4>2. Dynamic Hazards (Moving Objects)</h4>
          <p>These hazards move and their behavior can change unpredictably:</p>
          <ul>
            <li><strong>Other vehicles:</strong> Cars, trucks, motorcycles, emergency vehicles</li>
            <li><strong>Vulnerable road users:</strong> Pedestrians, cyclists, scooter riders</li>
            <li><strong>Animals:</strong> Deer, dogs, birds, livestock</li>
            <li><strong>Moving debris:</strong> Objects blown by wind, items falling from vehicles</li>
          </ul>

          <h4>3. Environmental Hazards</h4>
          <p>Conditions that affect visibility, traction, or vehicle control:</p>
          <ul>
            <li><strong>Weather:</strong> Rain, fog, wind, heat shimmer</li>
            <li><strong>Light conditions:</strong> Sun glare, darkness, headlight glare</li>
            <li><strong>Road surface:</strong> Wet pavement, standing water, oil slicks</li>
            <li><strong>Atmospheric:</strong> Smoke, dust, blowing sand</li>
          </ul>

          <div class="statistics-box">
            <h4>📊 Florida Hazard Statistics</h4>
            <ul>
              <li>Florida has <strong>over 6,500 wildlife-vehicle crashes</strong> annually</li>
              <li><strong>Wet pavement</strong> is a factor in 25% of Florida crashes</li>
              <li><strong>Pedestrian fatalities</strong> make Florida one of the most dangerous states for walking</li>
              <li>Florida averages <strong>2,500+ motorcycle fatalities and injuries</strong> per year</li>
              <li><strong>Sun glare</strong> contributes to thousands of crashes, especially at dawn/dusk</li>
            </ul>
          </div>

          <h3>The Hazard Recognition Process</h3>
          
          <h4>Step 1: Continuous Scanning</h4>
          <p>Effective hazard recognition requires constant, systematic scanning:</p>
          <ul>
            <li><strong>Look far ahead:</strong> 12-15 seconds (1/4 mile on highways)</li>
            <li><strong>Scan side to side:</strong> Especially at intersections</li>
            <li><strong>Check mirrors:</strong> Every 5-8 seconds</li>
            <li><strong>Monitor blind spots:</strong> Before any lane change or turn</li>
          </ul>

          <h4>Step 2: Early Identification</h4>
          <p>Learn to recognize hazards before they become emergencies:</p>
          <ul>
            <li><strong>Ball rolling into street:</strong> Child may follow</li>
            <li><strong>Brake lights ahead:</strong> Traffic slowing—prepare</li>
            <li><strong>Vehicle drifting:</strong> Distracted or impaired driver</li>
            <li><strong>Pedestrian at crosswalk edge:</strong> May step out</li>
            <li><strong>Deer crossing sign:</strong> Watch for actual deer</li>
          </ul>

          <h4>Step 3: Risk Assessment</h4>
          <p>Evaluate the level of risk each hazard presents:</p>
          <ul>
            <li><strong>Probability:</strong> How likely is it to become a problem?</li>
            <li><strong>Severity:</strong> If it does become a problem, how bad could it be?</li>
            <li><strong>Time available:</strong> How much time do you have to respond?</li>
          </ul>

          <h4>Step 4: Response Planning</h4>
          <p>For each significant hazard, have a plan:</p>
          <ul>
            <li><strong>Cover your brake:</strong> Position foot to brake quickly without pressing</li>
            <li><strong>Reduce speed:</strong> Slower speeds = more reaction time</li>
            <li><strong>Increase space:</strong> Create buffer zones around hazards</li>
            <li><strong>Prepare escape route:</strong> Know where you'll go if needed</li>
          </ul>

          <div class="case-study">
            <h4>📋 Real-World Case Study: The Hidden Pedestrian</h4>
            <p><strong>Robert's Close Call:</strong></p>
            <p>Robert was driving through a shopping center parking lot. A van was parked in a handicapped spot near the store entrance. Robert recognized this as a potential hazard—someone could step out from behind the van.</p>
            <p>He slowed down and moved slightly left in his lane to create more space. A woman with a shopping cart suddenly pushed out from behind the van, not looking. Because Robert had anticipated this possibility and prepared, he stopped easily with room to spare.</p>
            <p><em>"If I'd been at normal speed and close to that van, I would have hit her. She never even looked. But that's what you have to expect—people don't always look."</em></p>
          </div>

          <h3>Specific Hazard Situations</h3>

          <h4>Intersections</h4>
          <p>Intersections are among the most hazardous locations on roads:</p>
          <ul>
            <li><strong>Look left, right, left again</strong> before proceeding on green</li>
            <li><strong>Watch for red-light runners</strong>—common in Florida</li>
            <li><strong>Check for turning vehicles</strong> that may cut across your path</li>
            <li><strong>Yield to pedestrians</strong> in all crosswalks</li>
            <li><strong>Be especially cautious</strong> when first in line at a red light</li>
          </ul>

          <h4>Construction Zones</h4>
          <ul>
            <li><strong>Reduced lanes</strong> require careful merging</li>
            <li><strong>Changed patterns</strong> may be confusing—follow signs</li>
            <li><strong>Workers present</strong>—their lives are at stake</li>
            <li><strong>Fines doubled</strong> for violations in construction zones</li>
            <li><strong>Equipment</strong> may enter roadway unexpectedly</li>
          </ul>

          <div class="alert alert-danger">
            <h4>⚠️ Florida Construction Zone Facts</h4>
            <ul>
              <li>Over <strong>15,000 crashes</strong> occur in Florida work zones annually</li>
              <li>Fines are <strong>doubled</strong> in construction zones</li>
              <li><strong>Workers are killed</strong> in work zone crashes each year</li>
            </ul>
            <p><strong>Slow down. Workers' lives depend on it.</strong></p>
          </div>

          <h4>Parking Lots</h4>
          <p>Parking lots have unique hazards:</p>
          <ul>
            <li><strong>Pedestrians everywhere</strong>—often distracted with phones or packages</li>
            <li><strong>Reversing vehicles</strong>—limited visibility backing out</li>
            <li><strong>Obstructed views</strong>—large vehicles block sight lines</li>
            <li><strong>Children</strong>—small, unpredictable, hard to see</li>
          </ul>
          <p><strong>Drive slowly (5-10 mph)</strong> and expect the unexpected.</p>

          <h4>Rural Roads</h4>
          <ul>
            <li><strong>Wildlife</strong>—deer, alligators, wild hogs</li>
            <li><strong>Farm equipment</strong>—slow-moving, may turn suddenly</li>
            <li><strong>Narrow shoulders</strong>—limited escape routes</li>
            <li><strong>Curves and hills</strong>—limited visibility</li>
            <li><strong>Oncoming traffic</strong>—no median separation</li>
          </ul>

          <h3>Animal Hazards</h3>
          
          <p>Florida's wildlife creates significant driving hazards:</p>
          <ul>
            <li><strong>Deer:</strong> Most active dawn/dusk; travel in groups; don't swerve</li>
            <li><strong>Alligators:</strong> Cross roads near water; stop if possible</li>
            <li><strong>Wild hogs:</strong> Can cause serious damage; active at night</li>
            <li><strong>Turtles:</strong> Slow-moving; stop safely if you can</li>
            <li><strong>Birds:</strong> Can strike windshields; startle drivers</li>
          </ul>

          <div class="law-box">
            <h4>📖 If You Hit an Animal</h4>
            <ul>
              <li><strong>Large animal:</strong> Report to law enforcement; may be required for insurance</li>
              <li><strong>Injured animal:</strong> Call Florida Fish and Wildlife (FWC): 888-404-FWCC</li>
              <li><strong>Never approach</strong> injured wildlife—they may attack</li>
            </ul>
          </div>

          <h3>Avoiding Hazards</h3>
          
          <h4>The SEE Strategy</h4>
          <ul>
            <li><strong>Search:</strong> Actively scan for hazards</li>
            <li><strong>Evaluate:</strong> Determine threat level and your options</li>
            <li><strong>Execute:</strong> Take smooth, controlled action</li>
          </ul>

          <h4>When Evasive Action Is Needed</h4>
          <ul>
            <li><strong>Don't panic</strong>—sudden overcorrection causes crashes</li>
            <li><strong>Brake smoothly</strong> if time permits</li>
            <li><strong>Steer around</strong> if braking won't work</li>
            <li><strong>Generally, hitting something is better than swerving into traffic</strong></li>
            <li><strong>ABS:</strong> Press firmly and steer; don't pump</li>
          </ul>

          <div class="reflection-question">
            <h4>🤔 Reflection Question</h4>
            <p>Think about a time you were surprised by a hazard while driving. What type of hazard was it? With the knowledge from this module, how might you have recognized it earlier?</p>
          </div>

          <h3>Module Summary</h3>
          
          <ul>
            <li>Hazards are static (fixed), dynamic (moving), or environmental</li>
            <li>Continuous scanning is essential—12-15 seconds ahead, mirrors every 5-8 seconds</li>
            <li>Early identification gives you more time to respond</li>
            <li>Assess risk probability, severity, and available response time</li>
            <li>Always have a plan and an escape route</li>
            <li>Intersections, construction zones, parking lots, and rural roads have unique hazards</li>
            <li>Animal hazards are significant in Florida—especially at dawn/dusk</li>
          </ul>

          <div class="alert alert-success">
            <h4>✅ Module 4 Complete</h4>
            <p>You've completed the Hazard Recognition and Avoidance module. The next module covers Effects of Impairment on Driving.</p>
          </div>
        `,
        quizQuestions: [
          {
            questionText: 'Which of the following is an example of a dynamic hazard?',
            options: ['A pothole', 'A pedestrian', 'A guardrail', 'A curve in the road'],
            correctAnswer: 'A pedestrian',
            explanation: 'Dynamic hazards move and can change behavior unpredictably, like pedestrians, cyclists, and other vehicles.'
          },
          {
            questionText: 'How far ahead should you scan while driving on a highway?',
            options: ['3-5 seconds', '5-8 seconds', '8-10 seconds', '12-15 seconds'],
            correctAnswer: '12-15 seconds',
            explanation: 'On highways, scan 12-15 seconds ahead (about 1/4 mile) to identify hazards early.'
          },
          {
            questionText: 'In Florida, what happens to fines in construction zones?',
            options: ['They remain the same', 'They are reduced', 'They are doubled', 'They are tripled'],
            correctAnswer: 'They are doubled',
            explanation: 'Fines for traffic violations in Florida construction zones are doubled to protect workers.'
          },
          {
            questionText: 'What time of day are deer most active?',
            options: ['Midday', 'Midnight', 'Dawn and dusk', 'Early morning only'],
            correctAnswer: 'Dawn and dusk',
            explanation: 'Deer are most active during dawn and dusk, which is also when visibility is reduced.'
          }
        ]
      },

      // =========================================
      // MODULE 5: Effects of Impairment on Driving
      // Estimated Reading Time: 55-60 minutes
      // =========================================
      {
        title: 'Module 5: Effects of Impairment on Driving',
        description: 'Alcohol, drugs, fatigue, and emotional distress—how impairment affects driving ability',
        estimatedMinutes: 60,
        content: `
          <h2>Effects of Impairment on Driving</h2>
          
          <p>Impaired driving is one of the most serious threats on our roads. "Impairment" doesn't just mean alcohol or drugs—it includes any condition that diminishes your ability to operate a vehicle safely, including fatigue, illness, emotional distress, and certain medications.</p>

          <p>Understanding impairment is critical for making responsible decisions about when it's safe to drive and when you need to find an alternative.</p>

          <div class="statistics-box">
            <h4>📊 Florida Impaired Driving Statistics</h4>
            <ul>
              <li>Florida has approximately <strong>5,000 alcohol-related crashes</strong> annually</li>
              <li><strong>Nearly 800 people</strong> die in impaired driving crashes in Florida each year</li>
              <li>Impaired driving is involved in about <strong>25% of all fatal crashes</strong></li>
              <li><strong>Drugged driving arrests</strong> have increased over 30% in the past decade</li>
              <li>Florida ranks in the <strong>top 5 states</strong> for DUI fatalities</li>
              <li><strong>Peak times:</strong> Friday-Saturday nights, holidays</li>
            </ul>
          </div>

          <h3>Alcohol Impairment</h3>
          
          <h4>How Alcohol Affects Driving</h4>
          <p>Alcohol is a central nervous system depressant that impairs virtually every driving-related function:</p>

          <table class="info-table">
            <tr><th>BAC Level</th><th>Effects</th></tr>
            <tr><td>0.02%</td><td>Some loss of judgment; relaxation; slight body warmth</td></tr>
            <tr><td>0.05%</td><td>Lowered alertness; impaired judgment; released inhibitions; harder to track moving objects</td></tr>
            <tr><td>0.08%</td><td>Poor muscle coordination; impaired judgment, reasoning, self-control; reduced concentration; short-term memory loss</td></tr>
            <tr><td>0.10%</td><td>Clear deterioration of coordination and reaction time; slurred speech; difficulty maintaining lane position</td></tr>
            <tr><td>0.15%</td><td>Far less muscle control; major loss of balance; vomiting may occur; substantial impairment</td></tr>
          </table>

          <div class="alert alert-danger">
            <h4>⚠️ Florida Legal Limits</h4>
            <ul>
              <li><strong>0.08% BAC:</strong> Legal limit for drivers 21+</li>
              <li><strong>0.02% BAC:</strong> "Zero tolerance" for drivers under 21</li>
              <li><strong>0.04% BAC:</strong> Commercial vehicle drivers</li>
            </ul>
            <p><strong>Note:</strong> You can be arrested for DUI at ANY BAC if your driving is impaired.</p>
          </div>

          <h4>Factors Affecting BAC</h4>
          <ul>
            <li><strong>Body weight:</strong> Heavier people generally have lower BAC for same alcohol</li>
            <li><strong>Sex:</strong> Women typically reach higher BAC faster than men of same weight</li>
            <li><strong>Rate of consumption:</strong> Faster drinking = higher BAC</li>
            <li><strong>Food:</strong> Eating slows alcohol absorption</li>
            <li><strong>Carbonation:</strong> Carbonated mixers speed absorption</li>
            <li><strong>Medications:</strong> Can intensify alcohol's effects</li>
          </ul>

          <h4>Myths About Sobering Up</h4>
          <table class="info-table">
            <tr><th>Myth</th><th>Reality</th></tr>
            <tr><td>Coffee sobers you up</td><td>Only time reduces BAC (~0.015%/hour)</td></tr>
            <tr><td>Cold shower helps</td><td>May wake you up but doesn't reduce impairment</td></tr>
            <tr><td>Exercise speeds it up</td><td>No effect on alcohol metabolism rate</td></tr>
            <tr><td>"I can hold my liquor"</td><td>Tolerance means you feel less drunk—impairment is the same</td></tr>
          </table>

          <h3>Drug Impairment</h3>
          
          <p>Drugs—whether illegal, prescription, or over-the-counter—can significantly impair driving:</p>

          <h4>Marijuana</h4>
          <ul>
            <li>Slows reaction time</li>
            <li>Impairs judgment of time and distance</li>
            <li>Reduces concentration</li>
            <li>May cause lane weaving</li>
            <li>Effects can last hours after feeling "normal"</li>
          </ul>

          <h4>Prescription and OTC Medications</h4>
          <ul>
            <li><strong>Sleep aids/antihistamines:</strong> Drowsiness, slowed reactions</li>
            <li><strong>Pain medications (opioids):</strong> Drowsiness, impaired judgment</li>
            <li><strong>Anti-anxiety medications:</strong> Sedation, slowed reflexes</li>
            <li><strong>Cold medicines:</strong> Drowsiness, confusion</li>
          </ul>

          <div class="law-box">
            <h4>📖 Florida DUI Law</h4>
            <p>Florida Statute 316.193 makes it illegal to drive while:</p>
            <ul>
              <li>Under the influence of alcohol</li>
              <li>Under the influence of any controlled substance</li>
              <li>Under the combined influence of alcohol and any substance</li>
              <li>Normal faculties are impaired</li>
            </ul>
            <p><strong>You can get a DUI for legal prescription medications if they impair your driving.</strong></p>
          </div>

          <h4>Stimulants (Cocaine, Methamphetamine)</h4>
          <ul>
            <li>Aggressive, risk-taking behavior</li>
            <li>Overconfidence in abilities</li>
            <li>May be followed by crash/exhaustion</li>
            <li>Impaired judgment</li>
          </ul>

          <h3>Fatigue Impairment</h3>
          
          <p>Drowsy driving is often underestimated but is extremely dangerous:</p>
          <ul>
            <li>Being awake 18+ hours impairs you similarly to 0.05% BAC</li>
            <li>Being awake 24 hours = approximately 0.10% BAC (over legal limit)</li>
            <li>About <strong>100,000 crashes annually</strong> involve drowsy driving</li>
            <li>Drowsy driving crashes tend to be severe (no braking)</li>
          </ul>

          <h4>Warning Signs of Fatigue</h4>
          <ul>
            <li>Frequent yawning or blinking</li>
            <li>Difficulty keeping eyes open</li>
            <li>Head nodding</li>
            <li>Drifting from your lane</li>
            <li>Missing exits or signs</li>
            <li>Difficulty remembering the last few miles</li>
            <li>Following too closely</li>
          </ul>

          <div class="case-study">
            <h4>📋 Real-World Case Study: The Drowsy Driver</h4>
            <p><strong>James's Story:</strong></p>
            <p>James, 28, was driving home from working a double shift. He had been awake for 20 hours. "I thought I could make it—it was only 30 more minutes," he said.</p>
            <p>He fell asleep at the wheel on I-95. His car drifted across the median and struck an oncoming vehicle. The other driver survived but suffered permanent injuries. James spent 6 months in the hospital and was charged with reckless driving causing serious bodily injury.</p>
            <p><em>"I knew I was tired. I felt my eyes getting heavy. But I kept thinking I could push through. That decision almost killed two people."</em></p>
          </div>

          <h4>Combating Fatigue</h4>
          <ul>
            <li><strong>Sleep before driving:</strong> Get 7-8 hours before long trips</li>
            <li><strong>Take breaks:</strong> Stop every 100 miles or 2 hours</li>
            <li><strong>Avoid driving 2-4 AM:</strong> Body's natural low point</li>
            <li><strong>If drowsy, stop:</strong> The only real solution is sleep</li>
            <li><strong>Coffee/nap combo:</strong> Drink coffee, nap 20 minutes while it kicks in</li>
          </ul>

          <h3>Emotional Impairment</h3>
          
          <p>Strong emotions affect driving ability:</p>
          <ul>
            <li><strong>Anger:</strong> Aggressive driving, poor decisions, road rage</li>
            <li><strong>Grief/sadness:</strong> Reduced attention, slower reactions</li>
            <li><strong>Anxiety:</strong> Hypervigilance, overreaction, panic</li>
            <li><strong>Excitement:</strong> Distraction, risk-taking</li>
          </ul>

          <p><strong>If you're experiencing strong emotions, delay driving until you've calmed down.</strong></p>

          <h3>DUI Consequences in Florida</h3>
          
          <table class="info-table">
            <tr><th>Offense</th><th>Jail Time</th><th>Fines</th><th>License Suspension</th></tr>
            <tr><td>First DUI</td><td>Up to 6 months</td><td>$500-$1,000</td><td>180 days - 1 year</td></tr>
            <tr><td>Second DUI (within 5 years)</td><td>10 days - 9 months</td><td>$1,000-$2,000</td><td>5 years (minimum)</td></tr>
            <tr><td>Third DUI (within 10 years)</td><td>30 days - 5 years</td><td>$2,000-$5,000</td><td>10 years (minimum)</td></tr>
            <tr><td>Fourth DUI</td><td>Up to 5 years (felony)</td><td>$2,000+</td><td>Permanent revocation</td></tr>
            <tr><td>DUI with injury</td><td>Up to 5 years</td><td>$1,000-$5,000</td><td>3 years minimum</td></tr>
            <tr><td>DUI manslaughter</td><td>4-15 years</td><td>$10,000+</td><td>Permanent revocation</td></tr>
          </table>

          <p><strong>Additional consequences:</strong></p>
          <ul>
            <li>FR-44 insurance requirement (3 years)</li>
            <li>Vehicle impoundment</li>
            <li>Ignition interlock device</li>
            <li>Substance abuse treatment</li>
            <li>Community service</li>
            <li>Permanent criminal record</li>
          </ul>

          <div class="reflection-question">
            <h4>🤔 Reflection Question</h4>
            <p>Think honestly: Have you ever driven when impaired—by alcohol, drugs, fatigue, or strong emotion? What might have happened? What will you do differently going forward?</p>
          </div>

          <h3>Module Summary</h3>
          
          <ul>
            <li>Alcohol impairs judgment, coordination, and reaction time at all levels</li>
            <li>Florida's legal limit is 0.08% BAC, but impairment begins much lower</li>
            <li>Only time reduces BAC—approximately 0.015% per hour</li>
            <li>Drugs—including legal medications—can impair driving</li>
            <li>Fatigue is as dangerous as alcohol—being awake 24 hours ≈ 0.10% BAC</li>
            <li>Strong emotions affect driving ability and decision-making</li>
            <li>DUI consequences are severe and include potential felony charges</li>
            <li>When impaired, don't drive—use alternatives</li>
          </ul>

          <div class="alert alert-success">
            <h4>✅ Module 5 Complete</h4>
            <p>You've completed the Effects of Impairment on Driving module. The next module covers Crash Prevention Strategies.</p>
          </div>
        `,
        quizQuestions: [
          {
            questionText: 'Being awake for 24 hours impairs you similarly to what BAC level?',
            options: ['0.02%', '0.05%', '0.08%', '0.10%'],
            correctAnswer: '0.10%',
            explanation: 'Being awake for 24 hours impairs your driving similarly to a 0.10% BAC—above the legal limit.'
          },
          {
            questionText: "What is Florida's BAC limit for drivers under 21?",
            options: ['0.08%', '0.04%', '0.02%', '0.00%'],
            correctAnswer: '0.02%',
            explanation: 'Florida has a "zero tolerance" policy for underage drinking—the limit is 0.02% BAC for drivers under 21.'
          },
          {
            questionText: 'Which of these actually helps reduce BAC?',
            options: ['Coffee', 'Cold shower', 'Exercise', 'Time'],
            correctAnswer: 'Time',
            explanation: 'Only time reduces BAC. The liver metabolizes alcohol at about 0.015% per hour; nothing else speeds this up.'
          },
          {
            questionText: 'True or False: You cannot get a DUI for taking prescription medication.',
            questionType: 'true_false',
            options: ['True', 'False'],
            correctAnswer: 'False',
            explanation: 'You can be charged with DUI for driving while impaired by any substance, including legal prescription medications.'
          }
        ]
      },

      // =========================================
      // MODULE 6: Crash Prevention Strategies
      // Estimated Reading Time: 55-60 minutes
      // =========================================
      {
        title: 'Module 6: Crash Prevention Strategies',
        description: 'Advanced techniques for preventing crashes, emergency maneuvers, and vehicle safety systems',
        estimatedMinutes: 60,
        content: `
          <h2>Crash Prevention Strategies</h2>
          
          <p>Most crashes are preventable. They result from a chain of events and decisions that, if interrupted at any point, would prevent the crash from occurring. This module focuses on advanced techniques for preventing crashes and responding effectively when emergencies occur.</p>

          <div class="statistics-box">
            <h4>📊 Crash Prevention Facts</h4>
            <ul>
              <li><strong>94% of crashes</strong> involve human error as a contributing factor</li>
              <li><strong>Proper following distance alone</strong> could prevent most rear-end crashes</li>
              <li><strong>Defensive scanning</strong> can identify hazards 10-15 seconds earlier</li>
              <li><strong>Modern safety systems</strong> can reduce crash severity by 50% or more</li>
              <li><strong>Seat belt use</strong> reduces fatal injury risk by 45% (cars) and 60% (trucks/SUVs)</li>
            </ul>
          </div>

          <h3>The Crash Prevention Mindset</h3>
          
          <p>Crash prevention starts with your attitude and approach:</p>
          <ul>
            <li><strong>Accept responsibility:</strong> You control your driving decisions</li>
            <li><strong>Stay vigilant:</strong> Every trip requires attention</li>
            <li><strong>Anticipate problems:</strong> Plan for others' mistakes</li>
            <li><strong>Maintain margins:</strong> Always leave room for error</li>
            <li><strong>Know your limits:</strong> Recognize when conditions exceed your abilities</li>
          </ul>

          <h3>Space Management</h3>
          
          <p>The space around your vehicle is your safety buffer. Managing it effectively is key to crash prevention.</p>

          <h4>The Three-Second Rule</h4>
          <p>Maintain at least 3 seconds of following distance under normal conditions:</p>
          <ol>
            <li>Pick a fixed point (sign, tree, overpass)</li>
            <li>When the vehicle ahead passes it, count: "one thousand one, one thousand two, one thousand three"</li>
            <li>If you reach the point before finishing, you're too close</li>
          </ol>

          <h4>Adjusting for Conditions</h4>
          <table class="info-table">
            <tr><th>Condition</th><th>Following Distance</th></tr>
            <tr><td>Normal, dry</td><td>3-4 seconds</td></tr>
            <tr><td>Light rain, heavy traffic</td><td>4-5 seconds</td></tr>
            <tr><td>Heavy rain, fog, night</td><td>6-8 seconds</td></tr>
            <tr><td>Snow, ice</td><td>10+ seconds</td></tr>
            <tr><td>Behind large trucks</td><td>4-5 seconds (for visibility)</td></tr>
            <tr><td>Being tailgated</td><td>4+ seconds (extra stopping room)</td></tr>
          </table>

          <h4>Side and Front Space</h4>
          <ul>
            <li><strong>Don't drive beside other vehicles</strong>—stay staggered</li>
            <li><strong>Avoid being boxed in</strong>—always have an escape route</li>
            <li><strong>At stops, leave space</strong> to see tires of car ahead</li>
            <li><strong>Create buffer zones</strong> around hazards</li>
          </ul>

          <h3>Preventing Common Crash Types</h3>

          <h4>Rear-End Collisions</h4>
          <p>The most common crash type—almost always preventable:</p>
          <ul>
            <li><strong>Maintain following distance</strong>—your #1 protection</li>
            <li><strong>Watch brake lights ahead</strong>—not just the car in front</li>
            <li><strong>If stopped, check mirrors</strong>—be ready to move if rear-ended</li>
            <li><strong>Tap brakes early</strong>—alert following drivers you're slowing</li>
          </ul>

          <h4>Intersection Collisions</h4>
          <ul>
            <li><strong>Look left-right-left</strong> before proceeding on green</li>
            <li><strong>Count to three</strong> after light turns green before moving</li>
            <li><strong>Watch for red-light runners</strong> at every intersection</li>
            <li><strong>Make eye contact</strong> with other drivers when possible</li>
            <li><strong>Never assume</strong> others will yield when they should</li>
          </ul>

          <h4>Lane-Change Collisions</h4>
          <ul>
            <li><strong>Always signal</strong>—at least 100 feet before changing</li>
            <li><strong>Check mirrors</strong> and blind spots</li>
            <li><strong>Don't cut off other drivers</strong>—ensure adequate space</li>
            <li><strong>Complete lane changes smoothly</strong>—don't linger between lanes</li>
          </ul>

          <h4>Single-Vehicle Crashes</h4>
          <ul>
            <li><strong>Speed is the primary factor</strong>—especially on curves</li>
            <li><strong>Fatigue and impairment</strong>—stay alert and sober</li>
            <li><strong>Overcorrection</strong>—gradual steering corrections only</li>
            <li><strong>Road conditions</strong>—adjust speed for weather and road surface</li>
          </ul>

          <div class="case-study">
            <h4>📋 Real-World Case Study: Breaking the Chain</h4>
            <p><strong>Laura's Avoidance:</strong></p>
            <p>Laura was driving on I-4 in heavy traffic. She noticed the car three vehicles ahead brake suddenly. Instead of waiting to see what the car directly in front of her would do, she immediately began braking.</p>
            <p>Sure enough, the car in front of her stopped suddenly. But because Laura had anticipated the problem and started braking early, she stopped with room to spare. The car behind her, which wasn't paying attention, nearly hit her—but because she had left extra space in front, she could pull forward and avoid being rear-ended.</p>
            <p><em>"It was like slow motion. I saw it developing and I reacted before I had to. That's what they mean by defensive driving—you're always thinking ahead."</em></p>
          </div>

          <h3>Emergency Maneuvers</h3>

          <h4>Emergency Braking</h4>
          <ul>
            <li><strong>With ABS:</strong> Press the brake firmly and steer; don't pump</li>
            <li><strong>Without ABS:</strong> Apply steady pressure; release briefly if wheels lock</li>
            <li><strong>Threshold braking:</strong> Maximum pressure just before lockup</li>
            <li><strong>Look where you want to go</strong>—not at what you're trying to avoid</li>
          </ul>

          <h4>Evasive Steering</h4>
          <ul>
            <li><strong>Steering is faster than braking</strong> at highway speeds</li>
            <li><strong>Look at your escape path</strong>—you steer where you look</li>
            <li><strong>Make one smooth motion</strong>—avoid jerky overcorrection</li>
            <li><strong>Generally, steer right</strong> (off road) rather than left (into traffic)</li>
          </ul>

          <h4>Skid Recovery</h4>
          <p><strong>Front-wheel skid (understeer):</strong></p>
          <ul>
            <li>Release accelerator</li>
            <li>Don't brake hard</li>
            <li>Straighten wheels slightly until traction returns</li>
          </ul>
          <p><strong>Rear-wheel skid (oversteer):</strong></p>
          <ul>
            <li>Release accelerator</li>
            <li>Turn steering wheel in direction of skid ("turn into the skid")</li>
            <li>When traction returns, straighten wheels</li>
            <li>Be ready for counter-skid</li>
          </ul>

          <h4>Tire Blowout</h4>
          <ol>
            <li><strong>Don't brake hard</strong>—grip wheel firmly</li>
            <li><strong>Ease off accelerator gradually</strong></li>
            <li><strong>Steer straight</strong>—counteract pulling</li>
            <li><strong>Let vehicle slow on its own</strong></li>
            <li><strong>Signal and pull safely off road</strong></li>
            <li><strong>Turn on hazard lights</strong></li>
          </ol>

          <h3>Vehicle Safety Systems</h3>
          
          <p>Modern vehicles include numerous systems designed to prevent crashes or reduce their severity:</p>

          <h4>Active Safety Systems</h4>
          <ul>
            <li><strong>Anti-lock Braking System (ABS):</strong> Prevents wheel lockup during hard braking</li>
            <li><strong>Electronic Stability Control (ESC):</strong> Helps prevent skids and loss of control</li>
            <li><strong>Traction Control:</strong> Prevents wheel spin during acceleration</li>
            <li><strong>Forward Collision Warning:</strong> Alerts you to imminent front crash</li>
            <li><strong>Automatic Emergency Braking:</strong> Applies brakes if crash is imminent</li>
            <li><strong>Blind Spot Detection:</strong> Warns of vehicles in blind spots</li>
            <li><strong>Lane Departure Warning:</strong> Alerts when drifting from lane</li>
          </ul>

          <h4>Passive Safety Systems</h4>
          <ul>
            <li><strong>Airbags:</strong> Cushion occupants during impact</li>
            <li><strong>Seat belts:</strong> Keep occupants in place; work with airbags</li>
            <li><strong>Crumple zones:</strong> Absorb crash energy</li>
            <li><strong>Reinforced passenger compartment:</strong> Protects occupants</li>
          </ul>

          <div class="alert alert-warning">
            <h4>⚠️ Technology Is Not a Substitute</h4>
            <p>Safety systems are designed to assist drivers, not replace driver attention and good judgment. Never rely on technology to prevent crashes—it should be your backup, not your primary defense.</p>
          </div>

          <h3>If a Crash Occurs</h3>
          
          <ol>
            <li><strong>Move to safety</strong> if possible and it's safe to move your vehicle</li>
            <li><strong>Check for injuries</strong>—call 911 if anyone is hurt</li>
            <li><strong>Call law enforcement</strong>—required for any crash with injury, death, or significant damage</li>
            <li><strong>Exchange information</strong>—name, contact, insurance, driver's license</li>
            <li><strong>Document the scene</strong>—photos of damage, positions, conditions</li>
            <li><strong>Don't admit fault</strong>—let insurance and authorities determine</li>
            <li><strong>Report to your insurance company</strong>—promptly</li>
          </ol>

          <div class="reflection-question">
            <h4>🤔 Reflection Question</h4>
            <p>Think about any crashes or close calls you've experienced. Looking back with what you now know, what specific actions might have prevented or avoided those situations?</p>
          </div>

          <h3>Module Summary</h3>
          
          <ul>
            <li>94% of crashes involve human error—most are preventable</li>
            <li>Space management is crucial—3+ second following distance minimum</li>
            <li>Each crash type has specific prevention strategies</li>
            <li>Emergency maneuvers: ABS braking, evasive steering, skid recovery</li>
            <li>Know your vehicle's safety systems but don't over-rely on them</li>
            <li>If a crash occurs, prioritize safety, call for help, document the scene</li>
          </ul>

          <div class="alert alert-success">
            <h4>✅ Module 6 Complete</h4>
            <p>You've completed the Crash Prevention Strategies module. The next module covers Traffic Violation Consequences.</p>
          </div>
        `,
        quizQuestions: [
          {
            questionText: 'What percentage of crashes involve human error?',
            options: ['About 50%', 'About 75%', 'About 85%', 'About 94%'],
            correctAnswer: 'About 94%',
            explanation: '94% of crashes involve human error as a contributing factor, making most crashes preventable.'
          },
          {
            questionText: 'When following large trucks, what is the recommended following distance?',
            options: ['2-3 seconds', '3-4 seconds', '4-5 seconds', '6-8 seconds'],
            correctAnswer: '4-5 seconds',
            explanation: 'When following large trucks, maintain 4-5 seconds to ensure you can see the road ahead around them.'
          },
          {
            questionText: 'During a tire blowout, you should:',
            options: ['Brake hard immediately', 'Grip the wheel firmly and ease off the accelerator', 'Turn the steering wheel sharply', 'Accelerate to regain control'],
            correctAnswer: 'Grip the wheel firmly and ease off the accelerator',
            explanation: 'During a blowout, grip the wheel firmly, ease off the accelerator gradually, steer straight, and let the vehicle slow down.'
          },
          {
            questionText: 'True or False: With ABS, you should pump the brakes during emergency braking.',
            questionType: 'true_false',
            options: ['True', 'False'],
            correctAnswer: 'False',
            explanation: 'With ABS, press the brake firmly and hold it—do not pump. ABS does the pumping for you electronically.'
          }
        ]
      },

      // =========================================
      // MODULE 7: Traffic Violation Consequences
      // Estimated Reading Time: 55-60 minutes
      // =========================================
      {
        title: 'Module 7: Traffic Violation Consequences',
        description: 'The Florida point system, insurance impacts, license suspension, revocation, and reinstatement',
        estimatedMinutes: 60,
        content: `
          <h2>Traffic Violation Consequences</h2>
          
          <p>Every traffic violation carries consequences—some immediate, others long-lasting. Understanding the full scope of these consequences is essential for making better driving decisions. If you're taking this course, you've already experienced some of these consequences firsthand.</p>

          <p>This module provides a comprehensive overview of Florida's point system, insurance implications, license suspension and revocation, and the reinstatement process.</p>

          <h3>Florida's Point System</h3>
          
          <p>Florida assigns points to your driving record for moving violations. Points remain on your record for years and accumulate toward suspension thresholds.</p>

          <h4>Point Values for Common Violations</h4>
          <table class="info-table">
            <tr><th>Violation</th><th>Points</th></tr>
            <tr><td>Speeding (1-15 mph over limit)</td><td>3 points</td></tr>
            <tr><td>Speeding (16+ mph over limit)</td><td>4 points</td></tr>
            <tr><td>Running a red light</td><td>4 points</td></tr>
            <tr><td>Running a stop sign</td><td>4 points</td></tr>
            <tr><td>Improper lane change</td><td>3 points</td></tr>
            <tr><td>Following too closely</td><td>3 points</td></tr>
            <tr><td>Failure to yield</td><td>3 points</td></tr>
            <tr><td>Improper passing</td><td>3 points</td></tr>
            <tr><td>Reckless driving</td><td>4 points</td></tr>
            <tr><td>Passing stopped school bus</td><td>4 points</td></tr>
            <tr><td>Leaving scene of crash (property damage only)</td><td>6 points</td></tr>
            <tr><td>Any violation resulting in crash</td><td>Additional 2 points</td></tr>
          </table>

          <div class="alert alert-warning">
            <h4>⚠️ Important Point System Facts</h4>
            <ul>
              <li>Points stay on your record for <strong>3-5 years</strong> depending on the violation</li>
              <li>You <strong>cannot "pay extra" to avoid points</strong>—points are assigned by law</li>
              <li>Electing traffic school keeps points off your record (limited use)</li>
              <li>Out-of-state violations may add points to your Florida record</li>
            </ul>
          </div>

          <h3>Suspension Thresholds</h3>
          
          <table class="info-table">
            <tr><th>Points Accumulated</th><th>Time Period</th><th>Suspension Length</th></tr>
            <tr><td>12 points</td><td>Within 12 months</td><td>30 days</td></tr>
            <tr><td>18 points</td><td>Within 18 months</td><td>3 months (90 days)</td></tr>
            <tr><td>24 points</td><td>Within 36 months</td><td>1 year</td></tr>
          </table>

          <h4>Example Point Accumulation</h4>
          <div class="case-study">
            <p><strong>Scenario: How Points Add Up</strong></p>
            <ul>
              <li>January: Speeding 12 mph over (3 points)</li>
              <li>March: Red light violation (4 points)</li>
              <li>May: Improper lane change (3 points)</li>
              <li>August: Speeding 18 mph over (4 points)</li>
            </ul>
            <p><strong>Total: 14 points in 8 months = 30-day suspension</strong></p>
            <p>Just four violations—each seeming minor—can cost you your license.</p>
          </div>

          <h3>Other Suspension Triggers</h3>
          
          <p>Points aren't the only way to lose your license. Other common suspension causes include:</p>

          <h4>DUI-Related Suspensions</h4>
          <ul>
            <li><strong>First DUI:</strong> 180 days to 1 year</li>
            <li><strong>Second DUI (within 5 years):</strong> 5 years minimum</li>
            <li><strong>Third DUI (within 10 years):</strong> 10 years minimum</li>
            <li><strong>Fourth or subsequent DUI:</strong> Permanent revocation</li>
            <li><strong>Refusing breath/blood/urine test:</strong> 1 year (first), 18 months (subsequent)</li>
          </ul>

          <h4>Financial Responsibility Suspensions</h4>
          <ul>
            <li><strong>Failure to maintain insurance:</strong> Suspension until proof of compliance + reinstatement fee</li>
            <li><strong>Failure to pay traffic fines:</strong> Indefinite suspension until paid</li>
            <li><strong>Failure to pay child support:</strong> Indefinite suspension</li>
          </ul>

          <h4>Court-Related Suspensions</h4>
          <ul>
            <li><strong>Failure to appear in court:</strong> Indefinite suspension</li>
            <li><strong>Failure to complete court-ordered requirements:</strong> Varies</li>
          </ul>

          <h3>Habitual Traffic Offender (HTO)</h3>
          
          <p>Florida may designate you as a Habitual Traffic Offender, resulting in a <strong>5-year license revocation</strong>, if you accumulate:</p>
          <ul>
            <li><strong>Three or more major offenses within 5 years:</strong>
              <ul>
                <li>DUI</li>
                <li>Driving while license suspended or revoked</li>
                <li>Failure to stop and render aid</li>
                <li>Fleeing or eluding police</li>
                <li>Vehicular homicide or manslaughter</li>
              </ul>
            </li>
            <li><strong>OR 15 or more convictions within 5 years</strong> for moving violations worth 4+ points each</li>
          </ul>

          <div class="alert alert-danger">
            <h4>⚠️ HTO Consequences</h4>
            <p>HTO status means:</p>
            <ul>
              <li><strong>5-year mandatory revocation</strong></li>
              <li><strong>No hardship license available</strong> for first 12 months (most cases)</li>
              <li><strong>Driving during revocation = felony</strong> (5 years prison possible)</li>
              <li><strong>Extended FR-44 insurance requirements</strong></li>
            </ul>
          </div>

          <h3>Insurance Consequences</h3>
          
          <p>Traffic violations significantly impact your insurance costs:</p>

          <h4>Typical Insurance Increases</h4>
          <table class="info-table">
            <tr><th>Violation</th><th>Typical Rate Increase</th></tr>
            <tr><td>Minor speeding (1-15 over)</td><td>15-25%</td></tr>
            <tr><td>Major speeding (16+ over)</td><td>25-40%</td></tr>
            <tr><td>Red light/stop sign</td><td>20-35%</td></tr>
            <tr><td>Reckless driving</td><td>40-70%</td></tr>
            <tr><td>At-fault crash</td><td>30-50%</td></tr>
            <tr><td>DUI (first offense)</td><td>70-150%</td></tr>
            <tr><td>Multiple violations</td><td>Cumulative increases</td></tr>
          </table>

          <h4>FR-44 Insurance</h4>
          <p>After certain serious violations (DUI, driving without insurance in crash, etc.), Florida requires <strong>FR-44 insurance</strong> with much higher coverage limits:</p>
          <table class="info-table">
            <tr><th>Coverage Type</th><th>Standard Minimum</th><th>FR-44 Requirement</th></tr>
            <tr><td>Bodily Injury (per person)</td><td>Not required</td><td>$100,000</td></tr>
            <tr><td>Bodily Injury (per accident)</td><td>Not required</td><td>$300,000</td></tr>
            <tr><td>Property Damage</td><td>$10,000</td><td>$50,000</td></tr>
          </table>
          <p>FR-44 must be maintained for <strong>3 years</strong> and typically costs <strong>$2,000-$8,000+ annually</strong>.</p>

          <div class="case-study">
            <h4>📋 Real-World Case Study: The Cost of Violations</h4>
            <p><strong>Michael's 5-Year Cost Analysis:</strong></p>
            <p>Michael, 35, accumulated enough points for a 1-year suspension. Here's what it cost him over 5 years:</p>
            <ul>
              <li><strong>Fines and court costs:</strong> $2,800</li>
              <li><strong>This 12-hour course:</strong> $150</li>
              <li><strong>Reinstatement fees:</strong> $125</li>
              <li><strong>Alternative transportation during suspension:</strong> $8,400</li>
              <li><strong>Lost wages (reduced mobility affected job):</strong> $6,500</li>
              <li><strong>Insurance increase ($180/month × 5 years):</strong> $10,800</li>
            </ul>
            <p><strong>Total estimated cost: $28,775</strong></p>
            <p><em>"I used to think tickets were just a few hundred bucks. I had no idea how expensive they really were."</em></p>
          </div>

          <h3>License Reinstatement</h3>
          
          <p>After your suspension period ends, you must actively reinstate your license:</p>

          <h4>General Reinstatement Requirements</h4>
          <ol>
            <li><strong>Serve the full suspension period</strong>—no early release</li>
            <li><strong>Complete required education</strong>—this course for point suspensions</li>
            <li><strong>Pay reinstatement fees</strong>—$45-$75 (more for DUI)</li>
            <li><strong>Show proof of insurance</strong>—standard or FR-44 as required</li>
            <li><strong>Clear all outstanding obligations</strong>—fines, child support, etc.</li>
            <li><strong>Pass any required tests</strong>—may include vision, written, road test</li>
          </ol>

          <h4>DUI Reinstatement</h4>
          <p>DUI reinstatement requires additional steps:</p>
          <ul>
            <li>Complete DUI school (as ordered)</li>
            <li>Complete substance abuse evaluation and treatment</li>
            <li>Install ignition interlock device (if ordered)</li>
            <li>Maintain FR-44 insurance</li>
            <li>Pay increased reinstatement fees ($130-$500)</li>
          </ul>

          <h3>Hardship Licenses</h3>
          
          <p>In some cases, you may be eligible for a restricted "hardship" license during suspension that allows driving for:</p>
          <ul>
            <li>Work or business purposes</li>
            <li>Educational purposes</li>
            <li>Medical purposes</li>
            <li>Church attendance</li>
          </ul>
          <p><strong>Note:</strong> Hardship licenses are not automatic—you must apply, pay fees, and be approved. They are not available for all suspension types (e.g., first 12 months of HTO revocation).</p>

          <h3>Criminal Consequences</h3>
          
          <p>Some traffic violations carry criminal penalties beyond points and suspension:</p>
          <table class="info-table">
            <tr><th>Offense</th><th>Classification</th><th>Potential Penalty</th></tr>
            <tr><td>Reckless driving</td><td>Misdemeanor</td><td>Up to 90 days jail, $500 fine</td></tr>
            <tr><td>DUI (first offense)</td><td>Misdemeanor</td><td>Up to 6 months jail, $1,000 fine</td></tr>
            <tr><td>Driving while suspended (third)</td><td>Felony</td><td>Up to 5 years prison</td></tr>
            <tr><td>Leaving scene with injury</td><td>Felony</td><td>Up to 5 years prison</td></tr>
            <tr><td>Vehicular manslaughter</td><td>Felony</td><td>Up to 15 years prison</td></tr>
            <tr><td>DUI manslaughter</td><td>Felony</td><td>4-15+ years prison</td></tr>
          </table>

          <div class="reflection-question">
            <h4>🤔 Reflection Question</h4>
            <p>Calculate the estimated total cost of your violations—fines, this course, insurance increases, alternative transportation, any lost income. Was the "benefit" of any violation worth this cost?</p>
          </div>

          <h3>Module Summary</h3>
          
          <ul>
            <li>Florida's point system tracks moving violations; 12, 18, or 24 points trigger suspensions</li>
            <li>Points stay on your record 3-5 years</li>
            <li>DUI and other serious violations can cause long suspension/revocation without points</li>
            <li>Habitual Traffic Offender status means 5-year revocation</li>
            <li>Insurance costs can increase 15-150%+ depending on violations</li>
            <li>FR-44 insurance after serious violations costs $2,000-$8,000+ annually</li>
            <li>Reinstatement requires completing suspension, education, fees, and insurance proof</li>
            <li>Total cost of violations often exceeds $20,000-$30,000 over 5 years</li>
          </ul>

          <div class="alert alert-success">
            <h4>✅ Module 7 Complete</h4>
            <p>You've completed the Traffic Violation Consequences module. The final module covers your certification and final assessment.</p>
          </div>
        `,
        quizQuestions: [
          {
            questionText: 'How many points does running a red light add to your Florida driving record?',
            options: ['3 points', '4 points', '5 points', '6 points'],
            correctAnswer: '4 points',
            explanation: 'Running a red light adds 4 points to your Florida driving record.'
          },
          {
            questionText: 'What triggers a 1-year license suspension under the point system?',
            options: ['12 points in 12 months', '18 points in 18 months', '24 points in 36 months', '30 points in 48 months'],
            correctAnswer: '24 points in 36 months',
            explanation: 'Accumulating 24 points within 36 months results in a 1-year license suspension.'
          },
          {
            questionText: 'How long must FR-44 insurance typically be maintained?',
            options: ['1 year', '2 years', '3 years', '5 years'],
            correctAnswer: '3 years',
            explanation: 'FR-44 insurance must be maintained for 3 years after the qualifying violation.'
          },
          {
            questionText: 'What is the penalty for a third offense of driving while license suspended (within 5 years)?',
            options: ['30 days jail', 'Misdemeanor, up to 1 year jail', 'Felony, up to 5 years prison', '$500 fine only'],
            correctAnswer: 'Felony, up to 5 years prison',
            explanation: 'A third offense of driving while suspended within 5 years is a felony, punishable by up to 5 years in prison.'
          }
        ]
      },

      // =========================================
      // MODULE 8: Final Assessment & Certification
      // Estimated Reading Time: 35-40 minutes
      // =========================================
      {
        title: 'Module 8: Final Assessment & Certification',
        description: 'Course review, final examination, and course completion certification',
        estimatedMinutes: 40,
        content: `
          <h2>Final Assessment & Certification</h2>
          
          <p>Congratulations on reaching the final module of the 12-Hour Advanced Driver Improvement Course. You've covered a tremendous amount of material over the past twelve hours, and you're nearly ready to complete your course certification.</p>

          <p>This module provides a comprehensive review of all course content and prepares you for the final examination.</p>

          <h3>Comprehensive Course Review</h3>

          <h4>Module 1: Introduction to Driver Improvement</h4>
          <ul>
            <li>Florida has over 400,000 crashes and 3,500+ fatalities annually</li>
            <li>Approximately 85% of crashes are caused by driver behavior</li>
            <li>Point accumulation: 12 points/12 months (30-day), 18 points/18 months (90-day), 24 points/36 months (1-year)</li>
            <li>Habitual Traffic Offender status results in 5-year revocation</li>
            <li>Driving on suspended license can be a felony (third offense)</li>
          </ul>

          <h4>Module 2: Florida Traffic Laws & Regulations</h4>
          <ul>
            <li>Speed limits: Residential (30), School zone (20), Rural interstate (70)</li>
            <li>Right-of-way: Pedestrians at crosswalks, vehicle on right at uncontrolled intersections</li>
            <li>Traffic signals: Red (stop), Yellow (prepare to stop), Green (proceed if clear)</li>
            <li>Sign shapes: Octagon (stop), Triangle (yield), Diamond (warning)</li>
            <li>Lane markings: Yellow separates opposite traffic, White separates same direction</li>
            <li>Florida requires PIP ($10,000) and PDL ($10,000) minimum insurance</li>
          </ul>

          <h4>Module 3: Defensive Driving Techniques</h4>
          <ul>
            <li>Five principles: Stay alert, maintain following distance, anticipate others, adapt to conditions, have escape route</li>
            <li>SIPDE method: Scan, Identify, Predict, Decide, Execute</li>
            <li>Following distance: 3 seconds minimum, 6-8 seconds in adverse conditions</li>
            <li>Scan 10-15 seconds ahead, check mirrors every 5-8 seconds</li>
            <li>Doubling speed quadruples stopping distance</li>
          </ul>

          <h4>Module 4: Hazard Recognition & Avoidance</h4>
          <ul>
            <li>Hazard types: Static (fixed), Dynamic (moving), Environmental (conditions)</li>
            <li>SEE strategy: Search, Evaluate, Execute</li>
            <li>Construction zones: Fines doubled, workers present</li>
            <li>Animal hazards: Deer most active at dawn/dusk, alligators near water</li>
            <li>Parking lots: Drive 5-10 mph, watch for pedestrians and backing vehicles</li>
          </ul>

          <h4>Module 5: Effects of Impairment on Driving</h4>
          <ul>
            <li>Florida BAC limits: 0.08% (21+), 0.02% (under 21), 0.04% (commercial)</li>
            <li>Only time reduces BAC (approximately 0.015% per hour)</li>
            <li>24 hours awake ≈ 0.10% BAC impairment</li>
            <li>Prescription medications can cause DUI charges if they impair driving</li>
            <li>DUI penalties increase dramatically with each offense</li>
            <li>Fourth DUI = permanent license revocation</li>
          </ul>

          <h4>Module 6: Crash Prevention Strategies</h4>
          <ul>
            <li>94% of crashes involve human error</li>
            <li>Space management is key: 3+ seconds following distance</li>
            <li>ABS braking: Press firmly and steer, don't pump</li>
            <li>Tire blowout: Grip wheel, ease off accelerator, steer straight</li>
            <li>Skid recovery: Turn into the skid, ease off accelerator</li>
            <li>Modern safety systems assist but don't replace driver judgment</li>
          </ul>

          <h4>Module 7: Traffic Violation Consequences</h4>
          <ul>
            <li>Points: 3 points (minor speeding), 4 points (major violations), 6 points (leaving scene)</li>
            <li>Insurance increases: 15-150%+ depending on violations</li>
            <li>FR-44 insurance: Required after serious violations, 3 years, $2,000-$8,000+/year</li>
            <li>Reinstatement: Complete suspension, education, fees, insurance proof</li>
            <li>Total violation costs can exceed $20,000-$30,000 over 5 years</li>
          </ul>

          <h3>Key Commitments for Safe Driving</h3>
          
          <p>As you complete this course and work toward reinstating your driving privileges, commit to these principles:</p>

          <div class="pledge-box">
            <h4>🎯 Safe Driving Commitments</h4>
            <ol>
              <li><strong>I will never drive impaired</strong>—by alcohol, drugs, fatigue, or strong emotions</li>
              <li><strong>I will maintain safe following distance</strong>—at least 3 seconds, more in adverse conditions</li>
              <li><strong>I will obey speed limits</strong>—and adjust for conditions that require even slower speeds</li>
              <li><strong>I will eliminate distractions</strong>—phone put away, full attention on driving</li>
              <li><strong>I will scan continuously</strong>—10-15 seconds ahead, mirrors every 5-8 seconds</li>
              <li><strong>I will anticipate hazards</strong>—expecting others to make mistakes</li>
              <li><strong>I will yield right-of-way</strong>—even when I technically have it, if it's safer</li>
              <li><strong>I will always wear my seat belt</strong>—and ensure all passengers do too</li>
              <li><strong>I will take responsibility</strong>—for my driving decisions and their consequences</li>
              <li><strong>I will be patient</strong>—no destination is worth risking lives to reach quickly</li>
            </ol>
          </div>

          <h3>Your Path Forward</h3>
          
          <p>Completing this course is a significant step, but it's just the beginning of your journey back to being a licensed driver. Here's what comes next:</p>

          <h4>Immediate Steps</h4>
          <ol>
            <li><strong>Pass the final examination</strong> with at least 80% to complete the course</li>
            <li><strong>Print or save your certificate</strong> of completion</li>
            <li><strong>Gather required documents</strong> for reinstatement</li>
            <li><strong>Visit your local DHSMV office</strong> to complete reinstatement</li>
          </ol>

          <h4>Before You Drive Again</h4>
          <ul>
            <li>Ensure your vehicle is properly maintained</li>
            <li>Verify your insurance is active and adequate</li>
            <li>Review any restrictions on your reinstated license</li>
            <li>Plan your first few drives—start in familiar, lower-stress areas</li>
          </ul>

          <h4>Long-Term Success</h4>
          <ul>
            <li>Apply the defensive driving techniques from this course consistently</li>
            <li>Monitor your driving record—you can check at Florida DHSMV</li>
            <li>Consider voluntary refresher courses periodically</li>
            <li>If you feel old habits returning, pause and recommit</li>
          </ul>

          <h3>Final Examination Information</h3>
          
          <div class="alert alert-info">
            <h4>📝 Exam Details</h4>
            <ul>
              <li><strong>Number of questions:</strong> 40 questions covering all modules</li>
              <li><strong>Question types:</strong> Multiple choice and true/false</li>
              <li><strong>Passing score:</strong> 80% (32 out of 40 correct)</li>
              <li><strong>Time limit:</strong> No time limit—take your time</li>
              <li><strong>Retakes:</strong> If you don't pass, you may review material and retake</li>
            </ul>
          </div>

          <h3>Tips for Success</h3>
          
          <ul>
            <li><strong>Read each question carefully</strong>—make sure you understand what's being asked</li>
            <li><strong>Watch for keywords</strong>—"always," "never," "must," "should"</li>
            <li><strong>Eliminate obviously wrong answers</strong> first</li>
            <li><strong>Trust your preparation</strong>—you've covered all the material</li>
            <li><strong>Don't rush</strong>—there's no time pressure</li>
          </ul>

          <div class="reflection-question">
            <h4>🤔 Final Reflection</h4>
            <p>Before taking the exam, reflect on what you've learned. What was the most important insight you gained from this course? How will it change your driving behavior going forward?</p>
          </div>

          <div class="alert alert-success">
            <h4>✅ Course Content Complete</h4>
            <p>You have completed all eight modules of the 12-Hour Advanced Driver Improvement Course. When you're ready, proceed to the Final Examination to complete your certification.</p>
            <p><strong>Good luck!</strong></p>
          </div>
        `,
        quizQuestions: [
          {
            questionText: 'What is the minimum passing score for the 12-hour ADI course final exam?',
            options: ['70%', '75%', '80%', '85%'],
            correctAnswer: '80%',
            explanation: 'You must score at least 80% on the final examination to pass the course.'
          },
          {
            questionText: 'After completing this course, what is your next step toward reinstatement?',
            options: ['Wait 30 days', 'Take a road test', 'Visit DHSMV with required documents', 'Automatically reinstated'],
            correctAnswer: 'Visit DHSMV with required documents',
            explanation: 'After completing the course, you must visit your local DHSMV office with required documents to complete reinstatement.'
          },
          {
            questionText: 'True or False: Completing this course guarantees automatic license reinstatement.',
            questionType: 'true_false',
            options: ['True', 'False'],
            correctAnswer: 'False',
            explanation: 'Course completion is one requirement. You must also serve your suspension period, pay fees, and meet all other requirements.'
          },
          {
            questionText: 'What is the recommended minimum following distance under normal conditions?',
            options: ['2 seconds', '3 seconds', '4 seconds', '5 seconds'],
            correctAnswer: '3 seconds',
            explanation: 'Maintain at least 3 seconds following distance under normal, dry conditions.'
          }
        ]
      }
    ],
    finalExamQuestions: [
      // Module 1 Questions (5 questions)
      {
        questionText: 'What percentage of crashes are caused by driver behavior?',
        options: ['About 50%', 'About 65%', 'About 75%', 'About 85%'],
        correctAnswer: 'About 85%',
        explanation: 'Approximately 85% of all crashes are caused by driver behavior, not vehicle failure or road conditions.'
      },
      {
        questionText: 'What is the license suspension period for accumulating 18 points within 18 months?',
        options: ['30 days', '90 days', '6 months', '1 year'],
        correctAnswer: '90 days',
        explanation: 'Accumulating 18 points within 18 months results in a 90-day (3-month) license suspension.'
      },
      {
        questionText: 'How many major offenses within 5 years can result in Habitual Traffic Offender status?',
        options: ['2 offenses', '3 offenses', '5 offenses', '10 offenses'],
        correctAnswer: '3 offenses',
        explanation: 'Three or more major offenses within 5 years can result in HTO designation and a 5-year license revocation.'
      },
      {
        questionText: 'What is the maximum penalty for a third offense of driving on a suspended license within 5 years?',
        options: ['30 days jail', '6 months jail', '1 year jail', 'Up to 5 years prison'],
        correctAnswer: 'Up to 5 years prison',
        explanation: 'A third offense of driving on a suspended license within 5 years is a felony, punishable by up to 5 years in prison.'
      },
      {
        questionText: 'True or False: You can drive while awaiting reinstatement if you have proof of course completion.',
        questionType: 'true_false',
        options: ['True', 'False'],
        correctAnswer: 'False',
        explanation: 'You must not drive until your license is fully reinstated. Course completion is only one step in the process.'
      },

      // Module 2 Questions (5 questions)
      {
        questionText: 'What is the speed limit in Florida school zones when children are present?',
        options: ['15 mph', '20 mph', '25 mph', '30 mph'],
        correctAnswer: '20 mph',
        explanation: 'School zones have a 20 mph speed limit during posted hours or when children are present.'
      },
      {
        questionText: 'What does a flashing red traffic signal mean?',
        options: ['Proceed with caution', 'Yield to cross traffic', 'Stop, then proceed when safe', 'Signal is malfunctioning'],
        correctAnswer: 'Stop, then proceed when safe',
        explanation: 'A flashing red signal should be treated like a stop sign—come to a complete stop, then proceed when safe.'
      },
      {
        questionText: 'Double solid yellow lines indicate:',
        options: ['Passing permitted with caution', 'No passing from either direction', 'Passing permitted from the right lane', 'HOV lane'],
        correctAnswer: 'No passing from either direction',
        explanation: 'Double solid yellow lines prohibit passing from both directions.'
      },
      {
        questionText: 'What minimum insurance coverage does Florida require for Property Damage Liability?',
        options: ['$5,000', '$10,000', '$25,000', '$50,000'],
        correctAnswer: '$10,000',
        explanation: 'Florida requires minimum Property Damage Liability coverage of $10,000.'
      },
      {
        questionText: 'True or False: You can be cited for driving "too fast for conditions" even if below the speed limit.',
        questionType: 'true_false',
        options: ['True', 'False'],
        correctAnswer: 'True',
        explanation: 'Speed limits assume ideal conditions. You can be cited if your speed is unsafe for current conditions.'
      },

      // Module 3 Questions (5 questions)
      {
        questionText: 'What does SIPDE stand for in defensive driving?',
        options: ['Stop, Identify, Proceed, Drive, Exit', 'Scan, Identify, Predict, Decide, Execute', 'Speed, Indicate, Pass, Drive, Exit', 'Steer, Identify, Park, Drive, Engage'],
        correctAnswer: 'Scan, Identify, Predict, Decide, Execute',
        explanation: 'SIPDE stands for Scan, Identify, Predict, Decide, Execute—a systematic approach to defensive driving.'
      },
      {
        questionText: 'Under heavy rain conditions, what is the recommended following distance?',
        options: ['2-3 seconds', '3-4 seconds', '4-5 seconds', '6-8 seconds'],
        correctAnswer: '6-8 seconds',
        explanation: 'In heavy rain, fog, or snow, increase your following distance to 6-8 seconds.'
      },
      {
        questionText: 'How often should you check your mirrors while driving?',
        options: ['Every 30 seconds', 'Every 15-20 seconds', 'Every 5-8 seconds', 'Only when changing lanes'],
        correctAnswer: 'Every 5-8 seconds',
        explanation: 'Check mirrors every 5-8 seconds to maintain awareness of traffic around you.'
      },
      {
        questionText: 'What happens to stopping distance when you double your speed?',
        options: ['It doubles', 'It triples', 'It quadruples', 'It increases slightly'],
        correctAnswer: 'It quadruples',
        explanation: 'Stopping distance increases with the square of speed—doubling speed quadruples stopping distance.'
      },
      {
        questionText: 'How far ahead should you scan while driving?',
        options: ['3-5 seconds', '5-8 seconds', '10-15 seconds', '20-30 seconds'],
        correctAnswer: '10-15 seconds',
        explanation: 'Scan 10-15 seconds ahead to identify hazards early and allow time to respond.'
      },

      // Module 4 Questions (5 questions)
      {
        questionText: 'Which of the following is an example of a dynamic hazard?',
        options: ['A pothole', 'A pedestrian', 'A guardrail', 'A curve in the road'],
        correctAnswer: 'A pedestrian',
        explanation: 'Dynamic hazards move and can change behavior unpredictably, like pedestrians, cyclists, and other vehicles.'
      },
      {
        questionText: 'In Florida, what happens to fines in construction zones?',
        options: ['They remain the same', 'They are reduced', 'They are doubled', 'They are tripled'],
        correctAnswer: 'They are doubled',
        explanation: 'Fines for traffic violations in Florida construction zones are doubled to protect workers.'
      },
      {
        questionText: 'What time of day are deer most active?',
        options: ['Midday', 'Midnight', 'Dawn and dusk', 'Early morning only'],
        correctAnswer: 'Dawn and dusk',
        explanation: 'Deer are most active during dawn and dusk, which is also when visibility is reduced.'
      },
      {
        questionText: 'What is the recommended speed in parking lots?',
        options: ['5-10 mph', '15-20 mph', '20-25 mph', 'Posted speed limit'],
        correctAnswer: '5-10 mph',
        explanation: 'Drive 5-10 mph in parking lots where pedestrians, children, and backing vehicles create hazards.'
      },
      {
        questionText: 'What does the SEE strategy stand for?',
        options: ['Stop, Evaluate, Enter', 'Search, Evaluate, Execute', 'Scan, Enter, Exit', 'Speed, Environment, Execute'],
        correctAnswer: 'Search, Evaluate, Execute',
        explanation: 'SEE stands for Search (for hazards), Evaluate (threat level), Execute (appropriate response).'
      },

      // Module 5 Questions (5 questions)
      {
        questionText: 'Being awake for 24 hours impairs you similarly to what BAC level?',
        options: ['0.02%', '0.05%', '0.08%', '0.10%'],
        correctAnswer: '0.10%',
        explanation: 'Being awake for 24 hours impairs your driving similarly to a 0.10% BAC—above the legal limit.'
      },
      {
        questionText: "What is Florida's BAC limit for drivers under 21?",
        options: ['0.08%', '0.04%', '0.02%', '0.00%'],
        correctAnswer: '0.02%',
        explanation: 'Florida has a "zero tolerance" policy—the limit is 0.02% BAC for drivers under 21.'
      },
      {
        questionText: 'Which of these actually helps reduce BAC?',
        options: ['Coffee', 'Cold shower', 'Exercise', 'Time'],
        correctAnswer: 'Time',
        explanation: 'Only time reduces BAC. The liver metabolizes alcohol at about 0.015% per hour.'
      },
      {
        questionText: 'True or False: You cannot get a DUI for taking prescription medication.',
        questionType: 'true_false',
        options: ['True', 'False'],
        correctAnswer: 'False',
        explanation: 'You can be charged with DUI for driving while impaired by any substance, including legal prescriptions.'
      },
      {
        questionText: 'What is the penalty for a first DUI offense in Florida?',
        options: ['Warning only', 'Up to 6 months jail, $500-$1,000 fine', 'Up to 1 year jail, $5,000 fine', 'Automatic felony charge'],
        correctAnswer: 'Up to 6 months jail, $500-$1,000 fine',
        explanation: 'A first DUI offense in Florida can result in up to 6 months jail and $500-$1,000 in fines, plus license suspension.'
      },

      // Module 6 Questions (5 questions)
      {
        questionText: 'What percentage of crashes involve human error?',
        options: ['About 50%', 'About 75%', 'About 85%', 'About 94%'],
        correctAnswer: 'About 94%',
        explanation: '94% of crashes involve human error as a contributing factor, making most crashes preventable.'
      },
      {
        questionText: 'When following large trucks, what is the recommended following distance?',
        options: ['2-3 seconds', '3-4 seconds', '4-5 seconds', '6-8 seconds'],
        correctAnswer: '4-5 seconds',
        explanation: 'When following large trucks, maintain 4-5 seconds to ensure you can see the road ahead around them.'
      },
      {
        questionText: 'During a tire blowout, you should:',
        options: ['Brake hard immediately', 'Grip the wheel firmly and ease off the accelerator', 'Turn the steering wheel sharply', 'Accelerate to regain control'],
        correctAnswer: 'Grip the wheel firmly and ease off the accelerator',
        explanation: 'During a blowout, grip the wheel firmly, ease off the accelerator gradually, and steer straight.'
      },
      {
        questionText: 'True or False: With ABS, you should pump the brakes during emergency braking.',
        questionType: 'true_false',
        options: ['True', 'False'],
        correctAnswer: 'False',
        explanation: 'With ABS, press the brake firmly and hold it—do not pump. ABS does the pumping electronically.'
      },
      {
        questionText: 'During a rear-wheel skid (oversteer), you should:',
        options: ['Turn the wheel away from the skid', 'Turn the wheel into the skid', 'Brake hard', 'Accelerate'],
        correctAnswer: 'Turn the wheel into the skid',
        explanation: 'During a rear-wheel skid, turn the steering wheel in the direction of the skid to regain control.'
      },

      // Module 7 Questions (5 questions)
      {
        questionText: 'How many points does running a red light add to your Florida driving record?',
        options: ['3 points', '4 points', '5 points', '6 points'],
        correctAnswer: '4 points',
        explanation: 'Running a red light adds 4 points to your Florida driving record.'
      },
      {
        questionText: 'How long must FR-44 insurance typically be maintained?',
        options: ['1 year', '2 years', '3 years', '5 years'],
        correctAnswer: '3 years',
        explanation: 'FR-44 insurance must be maintained for 3 years after the qualifying violation.'
      },
      {
        questionText: 'What is the typical insurance rate increase for a first DUI?',
        options: ['15-25%', '40-70%', '70-150%', 'No increase'],
        correctAnswer: '70-150%',
        explanation: 'A first DUI typically increases insurance rates by 70-150% or more.'
      },
      {
        questionText: 'How long can points remain on your driving record?',
        options: ['1-2 years', '3-5 years', '7-10 years', 'Permanently'],
        correctAnswer: '3-5 years',
        explanation: 'Points stay on your driving record for 3-5 years depending on the violation.'
      },
      {
        questionText: 'True or False: A hardship license is available for all types of suspensions.',
        questionType: 'true_false',
        options: ['True', 'False'],
        correctAnswer: 'False',
        explanation: 'Hardship licenses are not available for all suspension types. For example, they are not available during the first 12 months of HTO revocation.'
      },

      // Module 8 Questions (5 questions)
      {
        questionText: 'What is the minimum passing score for the 12-hour ADI course final exam?',
        options: ['70%', '75%', '80%', '85%'],
        correctAnswer: '80%',
        explanation: 'You must score at least 80% on the final examination to pass the course.'
      },
      {
        questionText: 'After completing this course, what document must you obtain from DHSMV?',
        options: ['A new driver\'s license', 'Certificate of completion', 'Proof of insurance', 'Reinstatement approval'],
        correctAnswer: 'Reinstatement approval',
        explanation: 'After completing required courses and meeting all conditions, you must visit DHSMV to complete the reinstatement process.'
      },
      {
        questionText: 'Which of the following is NOT a requirement for license reinstatement?',
        options: ['Pay reinstatement fees', 'Complete required education', 'Pass a driving test in all cases', 'Show proof of insurance'],
        correctAnswer: 'Pass a driving test in all cases',
        explanation: 'A driving test is required only in some cases of reinstatement, not all. Fees, education, and insurance are typically required.'
      },
      {
        questionText: 'True or False: Completing this course automatically reinstates your driving privileges.',
        questionType: 'true_false',
        options: ['True', 'False'],
        correctAnswer: 'False',
        explanation: 'Course completion is one requirement. You must also serve your suspension, pay fees, and meet all other requirements.'
      },
      {
        questionText: 'What is the most important factor in maintaining safe driving after reinstatement?',
        options: ['Vehicle type', 'Consistent application of defensive driving principles', 'Driving only during daytime', 'Avoiding highways'],
        correctAnswer: 'Consistent application of defensive driving principles',
        explanation: 'Consistently applying defensive driving techniques is the key to long-term safe driving success.'
      }
    ]
  }
};

// ES Module exports for Node.js
export { floridaCourseDataExpanded };

// Export for browser
if (typeof window !== 'undefined') {
  window.floridaCourseDataExpanded = floridaCourseDataExpanded;
}
