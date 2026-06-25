"""
Splice new ADI modules into curriculum-expanded.js
Replaces course12Hour modules content with 11 new modules from FLHSMV resubmission.
"""

JS_FILE = r'c:\Users\j_lov\OneDrive\Quickpasstrafficschool Website\db\curriculum-expanded.js'

NEW_ADI_COURSE_HEADER = """  // =====================================================
  // 12-HOUR ADVANCED DRIVER IMPROVEMENT (ADI) COURSE
  // Required for: License reinstatement after suspension
  // =====================================================
  course12Hour: {
    name: '12-Hour Advanced Driver Improvement (ADI)',
    slug: 'florida-12-hour-adi',
    description: 'Florida-required 12-hour behavioral change course for license reinstatement. \\"The Better Driver Within You\\" — covers driving problem patterns, habit loops, self-awareness, motivation, emotions, personality, the change system, simulated situations, vulnerable road users, and personal commitment.',
    durationHours: 12,
    price: 45.00,
    modules: [
"""

NEW_ADI_MODULES = r"""      // =========================================
      // COURSE INTRODUCTION
      // Estimated Time: 20 minutes
      // =========================================
      {
        title: 'Course Introduction: The Better Driver Within You',
        description: 'An overview of the 12-hour ADI course structure, learning approach, and the behavioral change framework',
        estimatedMinutes: 20,
        content: `
          <h2>Welcome \u2014 The Better Driver Within You</h2>
          <p>This Advanced Driver Improvement course is required by the Florida Department of Highway Safety and Motor Vehicles for drivers seeking license reinstatement after a suspension due to excessive points or Habitual Traffic Offender (HTO) designation.</p>
          <p>But this is not about memorizing rules. It is about understanding why you drive the way you do \u2014 and changing the patterns that put you and others at risk.</p>
          <h3>What You Will Learn in 12 Hours</h3>
          <ol>
            <li>The magnitude of Florida's driving problem and how it connects to your situation</li>
            <li>Your own driving history and the behavioral patterns behind it</li>
            <li>How habits form, persist, and how they can be replaced</li>
            <li>Whether there is a genuine problem \u2014 and why that is hard to see</li>
            <li>What motivates real and lasting change</li>
            <li>How emotions and driving identity affect your behavior behind the wheel</li>
            <li>How your personality traits interact with driving risk</li>
            <li>A six-step system for behavior change</li>
            <li>Application of these principles in simulated real-life situations</li>
            <li>Your responsibility toward vulnerable road users</li>
            <li>A personal commitment to change</li>
          </ol>
          <p>By the time you complete this course, you will not only understand what went wrong \u2014 you will have a plan to drive differently for the rest of your life.</p>
        `,
        quizQuestions: [
          {
            questionText: 'What is the primary goal of the 12-hour ADI course?',
            options: ['Memorize Florida traffic laws', 'Understand and change the behavioral patterns behind unsafe driving', 'Learn defensive driving maneuvers', 'Prepare for a driving test'],
            correctAnswer: 'Understand and change the behavioral patterns behind unsafe driving',
            explanation: 'The ADI course is a behavioral change curriculum, not simply a review of traffic laws. Its goal is lasting behavior change.'
          }
        ]
      },

      // =========================================
      // MODULE 1: The Driving Problem
      // Estimated Time: 60 minutes
      // =========================================
      {
        title: 'Module 1: The Driving Problem',
        description: 'The scale of the Florida and national traffic crash problem and how human behavior \u2014 not mechanical failure \u2014 drives 94% of crashes',
        estimatedMinutes: 60,
        content: `
          <h2>Module 1: The Driving Problem</h2>
          <h3>Section 1.1 \u2014 The Scale of the Problem</h3>
          <p>Traffic crashes are not random or inevitable. They are largely the result of predictable human behaviors. This is critically important because it means they are preventable.</p>
          <h4>Florida</h4>
          <ul>
            <li>Over <strong>401,000 crashes</strong> in 2023</li>
            <li><strong>3,500+ fatalities</strong> \u2014 approximately one death every 2.5 hours</li>
            <li><strong>250,000+ injuries</strong> annually</li>
            <li>Economic cost: over <strong>$40 billion</strong> per year</li>
          </ul>
          <h4>Nationwide</h4>
          <ul>
            <li><strong>40,990 deaths</strong> in 2023 (NHTSA)</li>
            <li>Traffic crashes are the leading cause of death for Americans ages 1\u201354</li>
            <li>One person fatally injured every 13 minutes in the United States</li>
          </ul>
          <p>These numbers are shocking. But what is even more important is understanding why they occur.</p>
          <h3>Section 1.2 \u2014 The Human Factor</h3>
          <p>NHTSA research consistently shows that <strong>94% of serious crashes are caused primarily by driver error</strong> \u2014 not mechanical failure, road design, or weather. Driver error falls into four major categories:</p>
          <ol>
            <li>Recognition errors (distraction, inattention, not looking far enough ahead)</li>
            <li>Decision errors (excessive speed, misjudgment of gap or speed)</li>
            <li>Performance errors (oversteering, poor emergency response)</li>
            <li>Behavioral choices (DUI, aggressive driving, deliberate risk-taking)</li>
          </ol>
          <h3>Section 1.3 \u2014 Personal Costs of Unsafe Driving</h3>
          <p>You are in this course because your driving behavior has already had consequences. The personal costs of unsafe driving include:</p>
          <ul>
            <li><strong>Points and license suspension:</strong> Loss of driving privilege, employment disruption</li>
            <li><strong>Insurance costs:</strong> A DUI or major speeding violation can increase premiums by $1,500\u2013$3,000 per year for 3\u20135 years</li>
            <li><strong>Civil liability:</strong> You can be sued for damages: medical bills, lost wages, pain and suffering of others</li>
            <li><strong>Criminal conviction:</strong> DUI, reckless driving, and leaving the scene are criminal charges in Florida</li>
            <li><strong>Injury and death:</strong> The most permanent and irreversible cost</li>
          </ul>
          <h3>Section 1.4 \u2014 The Crash is Not the Beginning</h3>
          <p>Crashes do not simply "happen." They are the end point of a chain of decisions and behaviors. The moment you exceeded the speed limit, reached for your phone, or had that last drink and got behind the wheel \u2014 that was the real beginning of the crash.</p>
          <p>This course asks you to trace your behavior all the way back to the beginning of that chain \u2014 and interrupt it.</p>
        `,
        quizQuestions: [
          {
            questionText: 'According to NHTSA, what percentage of serious crashes are caused primarily by driver error?',
            options: ['55%', '72%', '94%', '100%'],
            correctAnswer: '94%',
            explanation: 'NHTSA research shows 94% of serious crashes are caused primarily by driver behavior \u2014 not mechanical failure or environmental factors.'
          },
          {
            questionText: 'Which of the following is NOT one of NHTSA\'s four driver error categories?',
            options: ['Recognition errors', 'Road design errors', 'Decision errors', 'Behavioral choices'],
            correctAnswer: 'Road design errors',
            explanation: 'NHTSA\u2019s four driver error categories are recognition errors, decision errors, performance errors, and behavioral choices. Road design errors are a separate, non-driver factor.'
          }
        ]
      },

      // =========================================
      // MODULE 2: Your Driving History
      // Estimated Time: 60 minutes
      // =========================================
      {
        title: 'Module 2: Your Driving History',
        description: 'Identifying patterns in your own driving behavior, understanding pre-crash behavior, and how habituation shapes risk perception',
        estimatedMinutes: 60,
        content: `
          <h2>Module 2: Your Driving History</h2>
          <h3>Section 2.1 \u2014 Five Categories of Problematic Driving Behavior</h3>
          <p>Research on driving violations and crashes identifies five behavioral categories that account for the majority of preventable crashes in Florida:</p>
          <ol>
            <li><strong>Speed:</strong> Exceeding posted limits, driving too fast for conditions</li>
            <li><strong>Distraction:</strong> Phone use, eating, grooming, in-car conversation</li>
            <li><strong>Aggression:</strong> Tailgating, unsafe passing, road rage, honking out of frustration</li>
            <li><strong>Impairment:</strong> Alcohol, drugs (including legal prescription medications), fatigue</li>
            <li><strong>Failure to yield:</strong> Running red lights, failure to yield right of way, stop sign violations</li>
          </ol>
          <p>Which categories appear in your driving history? This is not a judgment exercise \u2014 it is a diagnostic one. You cannot change what you cannot name.</p>
          <h3>Section 2.2 \u2014 Pre-Crash Behavior Patterns</h3>
          <p>NHTSA research on repeat violators shows that the behaviors leading up to a crash are nearly always preceded by weeks, months, or years of the same behavior without consequence. This is called the "near-miss" pattern:</p>
          <ol>
            <li>Driver begins engaging in risky behavior (speeding, tailgating, phone use)</li>
            <li>Nothing bad happens \u2014 not today</li>
            <li>Brain interprets this as <em>confirmation that the behavior is safe</em></li>
            <li>Behavior is reinforced and repeated</li>
            <li>Eventually, conditions change: wet road, unexpected pedestrian, sudden braking by another car</li>
            <li>The crash occurs</li>
          </ol>
          <p>The crash was not bad luck. It was the logical endpoint of a repeated pattern.</p>
          <h3>Section 2.3 \u2014 Habituation</h3>
          <p><strong>Habituation</strong> is the psychological process by which repeated exposure to a stimulus reduces our response to it. In driving, this means: the more often you drive aggressively, speed, or use your phone, the more <em>normal</em> it feels. The perceived risk decreases even as the actual risk remains unchanged or increases.</p>
          <h4>Example:</h4>
          <p>A new driver immediately feels the danger of following too closely. After years of habituation, the same behavior no longer triggers any anxiety. The driver believes they are just "an experienced driver with quick reflexes" \u2014 when in fact they are operating at high risk with reduced situational awareness.</p>
          <p>This is one reason why experienced drivers are often less safe than they believe themselves to be.</p>
        `,
        quizQuestions: [
          {
            questionText: 'What is habituation in the context of driving behavior?',
            options: [
              'Getting better at driving with experience',
              'The process by which repeated risky behavior feels increasingly normal',
              'Memorizing traffic laws through repetition',
              'The habit of checking mirrors regularly'
            ],
            correctAnswer: 'The process by which repeated risky behavior feels increasingly normal',
            explanation: 'Habituation means repeated exposure to risky behaviors (like speeding or tailgating) reduces the perceived risk over time, even as actual risk remains the same or increases.'
          }
        ]
      },

      // =========================================
      // MODULE 3: The Habit Loop
      // Estimated Time: 60 minutes
      // =========================================
      {
        title: 'Module 3: The Habit Loop',
        description: 'How driving habits form neurologically, the cue-routine-reward framework applied to driving, and why habits cannot be deleted \u2014 only replaced',
        estimatedMinutes: 60,
        content: `
          <h2>Module 3: The Habit Loop</h2>
          <h3>Section 3.1 \u2014 The Science of Habits</h3>
          <p>Charles Duhigg's research (and the underlying neuroscience) defines a habit as a three-part loop:</p>
          <ol>
            <li><strong>CUE:</strong> A trigger that tells your brain to enter automatic mode \u2014 a time of day, an emotion, an environment, or a situation</li>
            <li><strong>ROUTINE:</strong> The behavior itself \u2014 the physical, mental, or emotional pattern that follows the cue</li>
            <li><strong>REWARD:</strong> The benefit your brain receives that reinforces the loop \u2014 reduced anxiety, time saved, physical relief, dopamine release</li>
          </ol>
          <p>Once established, habits run without conscious thought. This is efficient \u2014 it frees up attention for more demanding tasks. But it also means dangerous driving habits can operate below conscious awareness.</p>
          <h3>Section 3.2 \u2014 Driving Habit Loops</h3>
          <h4>Example 1: Tailgating</h4>
          <ul>
            <li>CUE: Running late</li>
            <li>ROUTINE: Follow closely to attempt to pressure the driver ahead or fill any gap that opens</li>
            <li>REWARD: Slight arrival time improvement (real or perceived), reduction of frustration</li>
          </ul>
          <h4>Example 2: Speeding</h4>
          <ul>
            <li>CUE: Highway on-ramp, open road, familiar route</li>
            <li>ROUTINE: Accelerate above posted limit</li>
            <li>REWARD: Reduced travel time, sensation of control and competence</li>
          </ul>
          <h4>Example 3: Phone Use</h4>
          <ul>
            <li>CUE: Notification sound, boring stretch of road, stopped at red light</li>
            <li>ROUTINE: Pick up or check phone</li>
            <li>REWARD: Dopamine hit from social media/messages, reduced boredom</li>
          </ul>
          <h4>Example 4: Road Rage</h4>
          <ul>
            <li>CUE: Another driver cuts you off, drives slowly, or encroaches into your lane</li>
            <li>ROUTINE: Honk, tailgate, gesture, or attempt to confront</li>
            <li>REWARD: Momentary sense of justice or dominance</li>
          </ul>
          <h3>Section 3.3 \u2014 Why Habits Cannot Be Deleted</h3>
          <p>Habit loops, once encoded in the basal ganglia of the brain, <strong>cannot be erased</strong>. They can only be <strong>replaced</strong>. This is why "just stop doing it" usually fails. The brain will find a way to revert to the original loop under stress.</p>
          <p>The effective strategy is to <strong>keep the cue and reward, but insert a new routine</strong> between them \u2014 one that achieves a similar reward without the risk.</p>
          <h4>Example: Replacing the Phone-Check Habit</h4>
          <ul>
            <li>CUE: Notification sound</li>
            <li>NEW ROUTINE: Touch the screen and say aloud "I'll see that when I arrive" (or use Do Not Disturb While Driving)</li>
            <li>REWARD: Maintained focus; positive self-identity as a safe driver</li>
          </ul>
          <p>Replacement requires: (1) identifying the cue, (2) identifying the reward, (3) designing an alternative routine, and (4) practicing it repeatedly until it becomes the new habit.</p>
        `,
        quizQuestions: [
          {
            questionText: 'According to habit science, why can\'t a dangerous driving habit simply be deleted?',
            options: [
              'Habits are stored in long-term memory which is read-only',
              'The brain encodes habits permanently in the basal ganglia; they can only be replaced with a new routine',
              'Habits become part of personality and cannot be changed',
              'Only childhood habits are permanent'
            ],
            correctAnswer: 'The brain encodes habits permanently in the basal ganglia; they can only be replaced with a new routine',
            explanation: 'Once a habit loop is established neurologically, it cannot be erased \u2014 only replaced. Simply trying to "stop" a behavior without substituting a new routine typically fails, especially under stress.'
          }
        ]
      },

      // =========================================
      // MODULE 4: Is There a Problem?
      // Estimated Time: 60 minutes
      // =========================================
      {
        title: 'Module 4: Is There a Problem?',
        description: 'Self-serving attribution bias, the Lake Wobegon effect in driving, and the specific blind spots that prevent drivers from seeing their own risk behaviors',
        estimatedMinutes: 60,
        content: `
          <h2>Module 4: Is There a Problem?</h2>
          <h3>Section 4.1 \u2014 The Self-Serving Attribution Bias</h3>
          <p>One of the most well-documented findings in social psychology is the <strong>self-serving attribution bias</strong>: humans tend to attribute their successes to their own skill and intelligence, and their failures to external factors (bad luck, other people, circumstances).</p>
          <p>Applied to driving: when we drive badly, we say the other driver provoked us, we were in a hurry, the road was unclear, or it was an honest mistake. When another driver makes the same error, we call them reckless or dangerous.</p>
          <h3>Section 4.2 \u2014 The Lake Wobegon Effect</h3>
          <p>Psychologist David Dunning found that approximately <strong>80% of drivers rate themselves as above-average drivers</strong> \u2014 including drivers with multiple DUIs, drivers in the middle of driver improvement courses, and drivers who have caused fatal accidents. This is statistically impossible. It is called the <strong>Dunning-Kruger effect</strong> or in driving literature the <strong>"Lake Wobegon effect"</strong> (from the Garrison Keillor joke about a fictional town where "all the children are above average").</p>
          <p>The implication: <em>the worse the driver, the less aware they typically are of how bad they are.</em> Incompetence undermines the ability to recognize incompetence.</p>
          <h3>Section 4.3 \u2014 Driving-Specific Blind Spots</h3>
          <h4>1. Tailgating Rationalization</h4>
          <p>"I have quick reflexes." Reality: At 60 mph with a 1-second following gap, even a 0.3-second reaction time leaves only 0.7 seconds for braking \u2014 while the vehicle in front decelerates from full braking pressure. The physics are unavoidable regardless of reflex speed.</p>
          <h4>2. Speeding Minimization</h4>
          <p>"I was only going a little over." At 10 mph over the limit in a 55 mph zone, stopping distance increases by approximately 34 feet. Speed also reduces the window in which a driver can respond to unexpected events.</p>
          <h4>3. Phone Use Rationalization</h4>
          <p>"I only check it at red lights" / "I can multitask." Reality: NHTSA data shows manual phone use while driving increases crash risk by 23 times (Virginia Tech Transportation Institute, 2006; replicated 2013). Even glancing at a phone at a red light establishes a habitual cue and reduces situational awareness when the light changes.</p>
          <h3>Section 4.4 \u2014 The Honest Inventory</h3>
          <p>Answering these questions honestly is a prerequisite for change:</p>
          <ol>
            <li>In the last year, how often did you exceed the speed limit by 10+ mph?</li>
            <li>In the last year, how often did you follow within 1 second of the vehicle ahead at highway speeds?</li>
            <li>In the last year, how often did you use your phone while driving?</li>
            <li>In the last year, how often did you drive within 12 hours of consuming alcohol?</li>
            <li>In the last year, how often did you feel angry while driving and act on that anger?</li>
          </ol>
          <p>Honest answers matter. No one else will see them. But your future driving behavior will reflect whether you answered honestly.</p>
        `,
        quizQuestions: [
          {
            questionText: 'According to research, using a handheld phone while driving increases crash risk by approximately:',
            options: ['2 times', '5 times', '23 times', '50 times'],
            correctAnswer: '23 times',
            explanation: 'The Virginia Tech Transportation Institute found manual cell phone use while driving increases crash risk by 23 times \u2014 a finding replicated in subsequent studies.'
          }
        ]
      },

      // =========================================
      // MODULE 5: The Desire to Change
      // Estimated Time: 60 minutes
      // =========================================
      {
        title: 'Module 5: The Desire to Change',
        description: 'Intrinsic vs. extrinsic motivation, values-based change, the biology of reward, and the timeline for sustained habit replacement',
        estimatedMinutes: 60,
        content: `
          <h2>Module 5: The Desire to Change</h2>
          <h3>Section 5.1 \u2014 Why External Pressure Alone Doesn't Work</h3>
          <p>You are in this course because of a legal requirement. That is external motivation. Research on behavior change shows clearly that <strong>externally-driven change rarely lasts</strong>. Drivers who complete a court-ordered class and resume their previous behaviors are not unusual \u2014 they are the majority in programs that rely solely on compliance pressure.</p>
          <p>What works: <strong>intrinsic motivation</strong> \u2014 change driven by authentic personal values, self-respect, and genuine desire to be different.</p>
          <h3>Section 5.2 \u2014 Intrinsic vs. Extrinsic Motivation (Deci & Ryan)</h3>
          <p>Psychologists Edward Deci and Richard Ryan (Self-Determination Theory, 1985; 2000) distinguished:</p>
          <ul>
            <li><strong>Extrinsic motivation:</strong> Doing something to avoid punishment, get a reward, or meet others' expectations. Fades when external pressure is removed.</li>
            <li><strong>Intrinsic motivation:</strong> Doing something because it aligns with who you are and what you value. Sustains behavior change over time.</li>
          </ul>
          <h3>Section 5.3 \u2014 Values Clarification</h3>
          <p>Real change begins with the question: <em>What do I actually value?</em></p>
          <p>If you value your family, you need to understand that every time you drove impaired, texted, or drove aggressively, you were gambling with the lives of the people you love most.</p>
          <p>If you value your freedom, a second DUI in Florida means a minimum 5-year license revocation and mandatory ignition interlock. A third is a felony conviction.</p>
          <p>If you value your financial stability, one serious crash can create civil liability exceeding your lifetime insurance coverage.</p>
          <p>Connecting your driving behavior to your actual, deeply held values is the beginning of intrinsic motivation.</p>
          <h3>Section 5.4 \u2014 The Biology of Reward and the 60\u201390 Day Reset</h3>
          <p>Dopamine \u2014 the brain's "reward" neurotransmitter \u2014 is released by habitual rewards (checking the phone, the sensation of speed). Changing habits requires allowing the brain's reward system to gradually re-associate with the new routine.</p>
          <p>Research suggests it takes approximately <strong>60\u201390 days</strong> of consistent practice to establish a new habit at the same neurological depth as an existing one. During those first weeks, the pull toward the old behavior will be strongest. This is expected and normal \u2014 not a sign of failure.</p>
          <h4>Practical Guidance</h4>
          <ul>
            <li>Define one driving behavior you will change as a first step</li>
            <li>Practice the replacement behavior every single trip for 60 days</li>
            <li>Track your performance \u2014 people who measure behavior change achieve significantly better outcomes than those who do not</li>
          </ul>
        `,
        quizQuestions: [
          {
            questionText: 'What distinguishes intrinsic motivation from extrinsic motivation?',
            options: [
              'Intrinsic motivation uses rewards; extrinsic uses punishments',
              'Intrinsic motivation comes from personal values and identity; extrinsic comes from external pressure',
              'Intrinsic motivation is short-term; extrinsic is long-term',
              'They are the same thing with different labels'
            ],
            correctAnswer: 'Intrinsic motivation comes from personal values and identity; extrinsic comes from external pressure',
            explanation: 'Deci and Ryan\'s Self-Determination Theory found that intrinsic motivation \u2014 driven by authentic personal values \u2014 sustains behavior change far more effectively than external pressure like fines or court orders.'
          }
        ]
      },

      // =========================================
      // MODULE 6: Emotions, Attitudes, and Driving Identity
      // Estimated Time: 70 minutes
      // =========================================
      {
        title: 'Module 6: Emotions, Attitudes, and Driving Identity',
        description: 'How specific emotions affect crash risk, dangerous driving attitudes, and how identity-based change produces lasting behavioral transformation',
        estimatedMinutes: 70,
        content: `
          <h2>Module 6: Emotions, Attitudes, and Driving Identity</h2>
          <h3>Section 6.1 \u2014 Emotional States and Crash Risk</h3>
          <p>A Harvard University study (2019) found that drivers who were angry in the 6 minutes before a crash were <strong>10 times more likely to crash</strong> than calm drivers. Other emotional states also significantly elevated risk:</p>
          <ul>
            <li><strong>Sadness/crying:</strong> 9 times crash risk increase</li>
            <li><strong>Anxiety/stress:</strong> Estimated 3\u20135 times increase (AAA, 2023)</li>
          </ul>
          <p>The mechanism: strong emotions direct cognitive resources toward internal processing (rumination, worry, anger) and away from the continuous environmental monitoring that driving requires.</p>
          <h3>Section 6.2 \u2014 Specific Emotional States</h3>
          <h4>Anger</h4>
          <p>Anger is the most dangerous emotion in a vehicle. It narrows attention, disrupts judgment, triggers impulsive decisions, and creates the perception of urgency (hurrying, forcing through gaps). Road rage \u2014 where anger leads to deliberate dangerous behavior toward another driver \u2014 is classified as aggressive careless driving in Florida (Statute 316.1923).</p>
          <h4>Anxiety and Excessive Worry</h4>
          <p>Anxiety produces hypervigilance to some threats and inattention to others. A driver preoccupied with work stress may monitor imagined scenarios while failing to notice a real pedestrian entering a crosswalk.</p>
          <h4>Sadness and Grief</h4>
          <p>Grief and deep sadness produce a generalized attentional fog. Studies consistently show elevated crash risk in the weeks following major personal loss events.</p>
          <h3>Section 6.3 \u2014 Dangerous Driving Attitudes</h3>
          <ol>
            <li><strong>Entitlement:</strong> "I have the right of way" / "That car should move out of my way" \u2014 treating the road as a domain where your preferences override safety rules</li>
            <li><strong>Overconfidence:</strong> "I never crash" / "I can handle it" \u2014 underestimating risk based on past success (habituation)</li>
            <li><strong>Risk normalization:</strong> "Everyone drives this way" / "It's not a big deal" \u2014 using others' risky behavior as moral permission</li>
            <li><strong>Contempt:</strong> "That driver is an idiot" / "Pedestrians shouldn't be there" \u2014 dehumanizing other road users, which makes their safety less salient</li>
          </ol>
          <h3>Section 6.4 \u2014 Identity-Based Change</h3>
          <p>James Clear (Atomic Habits, 2018) argues that the most durable behavior change occurs not at the level of outcomes ("I want to stop getting tickets") or processes ("I will check my speed every minute") but at the level of <strong>identity</strong>: <em>"I am a safe driver."</em></p>
          <h4>How to Apply This:</h4>
          <ol>
            <li>Define the identity you want to embody: "I am a safe, patient, and responsible driver"</li>
            <li>Each driving decision becomes a vote for or against that identity</li>
            <li>Over time, actions accumulate into genuine identity change</li>
          </ol>
          <p>You are not trying to resist your "real" self. You are becoming your better self, one driven mile at a time.</p>
        `,
        quizQuestions: [
          {
            questionText: 'A Harvard study found that driver anger in the 6 minutes before a crash increases crash risk by:',
            options: ['2 times', '5 times', '10 times', '20 times'],
            correctAnswer: '10 times',
            explanation: 'Harvard University research (2019) found that acute anger in the minutes before a crash was associated with a 10-fold increase in crash risk.'
          }
        ]
      },

      // =========================================
      // MODULE 7: Personality Structure and the Road
      // Estimated Time: 70 minutes
      // =========================================
      {
        title: 'Module 7: Personality Structure and the Road',
        description: 'How five personality dimensions relate to driving risk, tailored strategies for each, and the effects of stress and fatigue on driver personality',
        estimatedMinutes: 70,
        content: `
          <h2>Module 7: Personality Structure and the Road</h2>
          <h3>Section 7.1 \u2014 Personality and Driving Risk</h3>
          <p>Decades of research in traffic psychology have identified personality dimensions that consistently predict driving risk. Understanding your own personality allows you to design compensating strategies.</p>
          <h4>Five Risk-Relevant Dimensions</h4>
          <ol>
            <li>
              <strong>Sensation-Seeking</strong>
              <p>High sensation-seekers are drawn to speed, aggressive driving, and risk-taking for the stimulation. They are overrepresented in serious crash statistics.</p>
              <p><em>Strategy:</em> Recognize the physiological pull toward stimulation. Channel it elsewhere (sports, exercise). Make the deliberate decision that the road is not an appropriate arena for thrills.</p>
            </li>
            <li>
              <strong>Trait Anxiety</strong>
              <p>Highly anxious drivers may be over-cautious in some situations (erratic braking, under-merging at highway speeds) while being mentally consumed by worry. Their crash profile differs from sensation-seekers but is equally real.</p>
              <p><em>Strategy:</em> Develop a pre-drive mental reset routine. Focus exclusively on driving tasks for the duration of the trip.</p>
            </li>
            <li>
              <strong>Agreeableness</strong>
              <p>Low-agreeableness drivers are more competitive on the road, more likely to take offense at perceived slights, and more prone to road rage.</p>
              <p><em>Strategy:</em> Reframe: Other drivers are not your competitors. Their behavior is largely unrelated to you personally.</p>
            </li>
            <li>
              <strong>Conscientiousness</strong>
              <p>High conscientiousness generally predicts safer driving. Low-conscientiousness drivers are impulsive, less attentive to rules, and more likely to skip safety steps (seat belt, signal use, pre-drive vehicle checks).</p>
              <p><em>Strategy:</em> Use checklists and structured pre-drive routines to compensate for natural impulsivity.</p>
            </li>
            <li>
              <strong>Impulsivity</strong>
              <p>Highly impulsive drivers respond to frustration immediately, have trouble maintaining following distance, are more likely to use their phone while driving, and more prone to passing in unsafe conditions.</p>
              <p><em>Strategy:</em> Introduce a deliberate pause before reacting to driving situations. Count 3 seconds before taking action in frustrating scenarios.</p>
            </li>
          </ol>
          <h3>Section 7.2 \u2014 State vs. Trait</h3>
          <p>Personality <em>traits</em> are baseline tendencies. But <em>states</em> \u2014 stress, fatigue, intoxication, hunger, or extreme emotion \u2014 can temporarily amplify trait tendencies. A driver who is moderately impulsive becomes significantly more impulsive when stressed. This is why driving when emotionally distressed is particularly dangerous for certain personality types.</p>
          <h3>Section 7.3 \u2014 Sleep Deprivation and Personality</h3>
          <p>Sleep deprivation specifically degrades emotional regulation and impulse control \u2014 the exact capacities most needed to override dangerous driving habits. After 20 hours awake, the average person's driving impairment is equivalent to a BAC of 0.08. After 24 hours, it reaches 0.10.</p>
          <p>The tired version of yourself is more irritable, less patient, more sensation-seeking, and less conscientious. It is genuinely a different driver. Plan accordingly.</p>
        `,
        quizQuestions: [
          {
            questionText: 'Driving after 20 hours without sleep produces impairment equivalent to a BAC of approximately:',
            options: ['0.02', '0.05', '0.08', '0.15'],
            correctAnswer: '0.08',
            explanation: 'Research shows that 20 hours of wakefulness produces driving impairment equivalent to a BAC of 0.08 \u2014 exactly Florida\'s per se DUI threshold.'
          }
        ]
      },

      // =========================================
      // MODULE 8: The Change System
      // Estimated Time: 70 minutes
      // =========================================
      {
        title: 'Module 8: The Change System',
        description: 'A six-step behavioral change framework applied to driving, replacement routines for the four highest-risk behaviors, and implementation intentions',
        estimatedMinutes: 70,
        content: `
          <h2>Module 8: The Change System</h2>
          <h3>Section 8.1 \u2014 Why Good Intentions Aren't Enough</h3>
          <p>Research consistently shows that the gap between intention and behavior is large, especially for habitual behaviors under cognitive load (like driving). "I'll drive better" is not a plan. A plan specifies what, when, and how.</p>
          <h3>Section 8.2 \u2014 The Six-Step Change Framework</h3>
          <ol>
            <li>
              <strong>IDENTIFY the behavior to change</strong>
              <p>Be specific: not "I'll drive more safely" but "I will not use my phone while the vehicle is in motion."</p>
            </li>
            <li>
              <strong>MAP the habit loop</strong>
              <p>What is the cue? What is the routine? What is the reward? You cannot change what you have not mapped.</p>
            </li>
            <li>
              <strong>UNDERSTAND the root</strong>
              <p>Why do you engage in this behavior? What are the underlying needs (time saving, stimulation, anxiety reduction, social connection)?</p>
            </li>
            <li>
              <strong>CHOOSE a replacement routine</strong>
              <p>Select a new behavior that responds to the same cue and delivers a similar reward, but without the risk.</p>
            </li>
            <li>
              <strong>PRE-COMMIT</strong>
              <p>Decide in advance how you will respond to the cue. This is called an <strong>implementation intention</strong> (Gollwitzer, 1999). Format: "When [cue], I will [new routine] in order to [reward/value]."</p>
            </li>
            <li>
              <strong>PRACTICE until automatic</strong>
              <p>Expect 60\u201390 days of consistent effort. Track performance. Review and adjust.</p>
            </li>
          </ol>
          <h3>Section 8.3 \u2014 Replacement Routines for the Four Highest-Risk Behaviors</h3>
          <h4>1. Speeding</h4>
          <ul>
            <li>CUE: Open road, highway, familiar route</li>
            <li>REPLACEMENT: Cruise control at 5 mph over or at the limit; leave 10 minutes early to remove time pressure</li>
            <li>REWARD: No ticket risk; lower insurance; fuel efficiency; relaxed driving</li>
          </ul>
          <h4>2. Phone Use</h4>
          <ul>
            <li>CUE: Notification sound, red light, boredom</li>
            <li>REPLACEMENT: Phone in glove box or back seat; Do Not Disturb While Driving activated; audio response only via Bluetooth</li>
            <li>REWARD: Reduced anxiety; safe arrival; positive self-identity</li>
          </ul>
          <h4>3. Tailgating</h4>
          <ul>
            <li>CUE: Running late, slow driver ahead, congested traffic</li>
            <li>REPLACEMENT: 3-second following distance; move right if possible; use navigation app for routing instead of time-pressure driving</li>
            <li>REWARD: Less stress; reaction time buffer; no liability in rear-end crash</li>
          </ul>
          <h4>4. Road Rage</h4>
          <ul>
            <li>CUE: Another driver's perceived rudeness or incompetence</li>
            <li>REPLACEMENT: Physical removal (10-second rule: hands at 9 and 3, no reaction for 10 seconds); cognitive reframe ("They may be having a crisis; this is not about me")</li>
            <li>REWARD: Emotional equilibrium; no escalation risk; identity as a mature driver</li>
          </ul>
          <h3>Section 8.4 \u2014 Implementation Intentions</h3>
          <p>Research by Peter Gollwitzer (New York University) shows that people who specify exactly when, where, and how they will perform a new behavior are 2\u20133 times more likely to actually do it than those who simply intend to change.</p>
          <p>The format: <strong>"When [cue], I will [specific action], because [personal value]."</strong></p>
          <p>Example: "When I hear my phone notification while driving, I will tap the screen to dismiss it without looking, because my family is more important than any message."</p>
        `,
        quizQuestions: [
          {
            questionText: 'An implementation intention in the context of behavior change means:',
            options: [
              'Planning to change behavior in the future when convenient',
              'A specific if-then plan: when [cue occurs], I will [specific new routine]',
              'Intending to implement a court order',
              'Setting a reminder to check your driving behavior'
            ],
            correctAnswer: 'A specific if-then plan: when [cue occurs], I will [specific new routine]',
            explanation: 'Gollwitzer\'s research found that specifying the exact cue and planned response \u2014 an implementation intention \u2014 dramatically increases follow-through on behavior change intentions.'
          }
        ]
      },

      // =========================================
      // MODULE 9: Application — Simulated Situations
      // Estimated Time: 70 minutes
      // =========================================
      {
        title: 'Module 9: Application \u2014 Simulated Situations',
        description: 'Five high-risk driving scenarios with reflection prompts and decision-analysis, applying the behavioral change tools from earlier modules',
        estimatedMinutes: 70,
        content: `
          <h2>Module 9: Application \u2014 Simulated Situations</h2>
          <p>The following five scenarios are drawn from common high-risk driving situations in Florida. For each, read carefully and consider what you would do \u2014 and why.</p>

          <h3>Scenario 1: Running Late</h3>
          <p>It's Monday morning. You are already 10 minutes late for work. Traffic is frustrating. You are behind a driver going exactly the speed limit in the left lane. In your frustration, you consider tailgating to pressure them or passing illegally on the right.</p>
          <div class="reflection-prompt">
            <h4>Reflection</h4>
            <p>What is the cue in this scenario? What habit loop is being activated? If you tailgate or pass illegally, what is the actual time you will save? What is the risk you are accepting? What implementation intention could you have prepared for this exact scenario?</p>
          </div>
          <p><strong>Analysis:</strong> The cue is time pressure. The routine is aggressive driving. The "reward" is the feeling of doing something about the pressure. But the actual time saved is typically under 60 seconds on most urban drives. The risk: rear-end crash (4-point violation, 6-point if crash caused, civil liability), traffic stop (more tardiness), loss of control. The implementation intention: "When I am running late, I call ahead before I start the car and leave 15 minutes earlier the next time."</p>

          <h3>Scenario 2: Pedestrian at an Unmarked Crosswalk</h3>
          <p>You're making a right turn at an intersection without a pedestrian signal. A pedestrian is standing at the corner and appears to be waiting to cross. Traffic behind you is backing up. You are in a hurry.</p>
          <div class="reflection-prompt">
            <h4>Reflection</h4>
            <p>What does Florida law require? What human factors make this situation risky? What would the consequences be if the pedestrian stepped out as you turned?</p>
          </div>
          <p><strong>Analysis:</strong> Every intersection in Florida has a legal crosswalk, marked or not (Florida Statute 316.003). You are legally required to yield to pedestrians. The back-up behind you creates no legal exception. A crash with a pedestrian you had the opportunity to see is criminally and civilly actionable. The identity-based response: "I am a driver who yields to pedestrians. It will cost me 15 seconds."</p>

          <h3>Scenario 3: Phone Notification During Driving</h3>
          <p>You are driving on I-95. Traffic is steady at 65 mph. You feel your phone vibrate in your pocket. You're 30 miles from home. You reach for it "just to see who it is."</p>
          <div class="reflection-prompt">
            <h4>Reflection</h4>
            <p>What is the real risk in this moment? What is the actual probability that the message requires immediate response? What has your implementation intention been for this exact scenario?</p>
          </div>
          <p><strong>Analysis:</strong> At 65 mph, a 3-second glance = 286 feet driven without attention. The probability that any notification requires a response while traveling at highway speed is near zero. The implementation intention: "Phone is in the glove box on Do Not Disturb for the duration of every drive."</p>

          <h3>Scenario 4: Aggressive Driver</h3>
          <p>A driver tailgates you closely for two miles, honks repeatedly, and flashes high beams. When you reach a red light, he rolls down his window and begins shouting at you.</p>
          <div class="reflection-prompt">
            <h4>Reflection</h4>
            <p>What are your options? What happens physiologically when someone provokes your anger in a vehicle? What does research say about road rage escalation? What is the safest sequence of actions?</p>
          </div>
          <p><strong>Analysis:</strong> Do NOT engage. Road rage escalation involving firearms has increased in Florida year over year. Engaging \u2014 even with words \u2014 signals to an unstable individual that you are a participant in a conflict. Correct response: windows up, doors locked, no eye contact, drive to a well-populated area or police station. Call 911 from a safe location. Never go to your home or workplace.</p>

          <h3>Scenario 5: Fatigue on a Long Drive</h3>
          <p>You are returning home from a 4-hour trip. You are 45 minutes from home. You are tired. You have been yawning for 20 minutes. You tell yourself you can push through.</p>
          <div class="reflection-prompt">
            <h4>Reflection</h4>
            <p>What is a microsleep? How does your real crash risk compare to how you feel right now? What are your options, and which one is safest?</p>
          </div>
          <p><strong>Analysis:</strong> Fatigue-related crashes spike in the afternoon (2\u20134pm) and late night (midnight\u20136am). Research shows that drivers are notoriously poor at self-assessing fatigue-related impairment. Options: pull off at the next exit and take a 20-minute nap (most effective), call someone to stay awake (less effective), consume caffeine (buys 1\u20132 hours only). The option "push through" has no scientific support and is the option that leads to fatal single-vehicle runoff crashes.</p>
        `,
        quizQuestions: [
          {
            questionText: 'When an aggressive driver in another vehicle starts shouting at you at a red light, the correct response is:',
            options: [
              'Explain calmly that you did nothing wrong',
              'Roll down your window and apologize to de-escalate',
              'Make no eye contact, keep windows up, and drive to a safe public location',
              'Confront them to establish that you will not be intimidated'
            ],
            correctAnswer: 'Make no eye contact, keep windows up, and drive to a safe public location',
            explanation: 'Any engagement signals participation in a conflict. The safe response is to disengage completely, drive to a public location, and call 911 if threatened. Never go to your home or workplace.'
          }
        ]
      },

      // =========================================
      // MODULE 10: Vulnerable Road Users
      // Estimated Time: 60 minutes
      // =========================================
      {
        title: 'Module 10: Vulnerable Road Users',
        description: 'Advanced treatment of VRU vulnerability, Florida fatality statistics, applicable laws, infrastructure, and the special responsibility of ADI drivers',
        estimatedMinutes: 60,
        content: `
          <h2>Module 10: Vulnerable Road Users</h2>
          <h3>Section 10.1 \u2014 Definition and Categories</h3>
          <p>A <strong>Vulnerable Road User (VRU)</strong> is any road user without the structural protection of an enclosed motor vehicle. VRUs include pedestrians, cyclists, motorcyclists, users of personal mobility devices, construction workers, and emergency responders.</p>
          <p>Especially vulnerable sub-groups:</p>
          <ul>
            <li><strong>Children:</strong> Impulsive, smaller, less visible, poor traffic judgment</li>
            <li><strong>Elderly:</strong> Slower gait, reduced vision and hearing, longer crossing times</li>
            <li><strong>People with disabilities:</strong> May have reduced visibility, mobility, or awareness of traffic</li>
          </ul>
          <h3>Section 10.2 \u2014 Florida VRU Statistics</h3>
          <ul>
            <li><strong>Pedestrian fatalities:</strong> 838 in 2023; Florida ranked 3rd nationally; pedestrians = 21% of all FL traffic fatalities</li>
            <li><strong>Cyclist fatalities:</strong> 176 in 2023; Florida ranked <strong>#1 per capita nationally</strong></li>
            <li><strong>Motorcyclist fatalities:</strong> 601 in 2023; motorcyclists = 15% of all FL traffic fatalities; 49% occurred in multi-vehicle crashes</li>
            <li>76% of Florida pedestrian fatalities occur at night</li>
            <li>NHTSA 2023: 7,522 pedestrian deaths nationally \u2014 highest since 1981</li>
          </ul>
          <h3>Section 10.3 \u2014 Florida Laws Protecting VRUs</h3>
          <h4>Pedestrians (Florida Statute 316.130)</h4>
          <ul>
            <li>Yield to pedestrians in ALL crosswalks (marked and unmarked)</li>
            <li>A crosswalk exists at every intersection by law, whether painted or not</li>
            <li>Never drive into a crosswalk area even when the crosswalk is not visible</li>
          </ul>
          <h4>Cyclists (Florida Statute 316.2065)</h4>
          <ul>
            <li>Cyclists have full vehicle rights on all public roads except limited-access highways</li>
            <li>Minimum <strong>3-foot clearance</strong> required when passing</li>
            <li>To pass safely at speed, move to the adjacent lane when possible</li>
          </ul>
          <h4>Move Over Law (Florida Statute 316.126)</h4>
          <ul>
            <li>Move to the next lane for stationary emergency vehicles AND disabled vehicles with hazard lights (2023 expansion)</li>
            <li>If unable to move over: reduce speed to 20 mph below the posted limit</li>
          </ul>
          <h4>School Bus Law (Florida Statute 316.172)</h4>
          <ul>
            <li>All traffic both directions must stop for a school bus with extended stop arm and flashing red lights</li>
            <li>Exception: physically divided highway with raised median (not a painted line)</li>
            <li>Violation: 4-point moving violation</li>
          </ul>
          <h3>Section 10.4 \u2014 Infrastructure and Safety Features</h3>
          <ul>
            <li><strong>Sidewalks:</strong> Single most effective pedestrian safety measure</li>
            <li><strong>Crosswalk markings:</strong> Reduce pedestrian crash risk up to 50%</li>
            <li><strong>Bike lanes:</strong> Reduce cyclist injury rates 30\u201340%</li>
            <li><strong>Bike boxes:</strong> Area at intersection front \u2014 stop BEHIND bike box; never enter it with a motor vehicle</li>
            <li><strong>Roundabouts:</strong> Reduce fatal crashes 82\u201387% vs. signalized intersections (FHWA)</li>
            <li><strong>Speed humps:</strong> Reduce pedestrian crashes near schools by 60%</li>
          </ul>
          <h3>Section 10.5 \u2014 Driver Responsibility \u2014 The Extra Standard for ADI Graduates</h3>
          <p>You are completing a course required after license suspension. The state of Florida is reinvesting in your ability to drive. With that comes a heightened responsibility \u2014 not just to comply with laws, but to set a standard for VRU protection that goes beyond the legal minimum.</p>
          <ul>
            <li>Yield to pedestrians even when there is no traffic signal and no legal obligation</li>
            <li>Treat every cyclist as if they were a family member on that bike</li>
            <li>Slow down proactively in areas where children, elderly, or disabled pedestrians may be present</li>
            <li>Apply the Dutch Reach when opening your door in areas where cyclists may be present</li>
          </ul>
        `,
        quizQuestions: [
          {
            questionText: 'Florida Statute 316.2065 requires drivers to give cyclists how much clearance when passing?',
            options: ['1 foot', '2 feet', '3 feet', '5 feet'],
            correctAnswer: '3 feet',
            explanation: 'Florida law requires a minimum 3-foot clearance when passing a cyclist. The safest practice is to move to the adjacent lane entirely when possible.'
          }
        ]
      },

      // =========================================
      // MODULE 11: Your Commitment
      // Estimated Time: 30 minutes
      // =========================================
      {
        title: 'Module 11: Your Commitment',
        description: 'Final commitment statement, integration of course content, and a personal declaration of identity-based change',
        estimatedMinutes: 30,
        content: `
          <h2>Module 11: Your Commitment</h2>
          <h3>The End of the Course — The Beginning of the Change</h3>
          <p>You have spent 12 hours examining the driving problem, your own history, the neurological basis of habits, the psychology of self-deception, the science of motivation, how your emotions and personality interact with risk, a six-step change system, simulated high-risk scenarios, and the lives of vulnerable people who share the road with you.</p>
          <p>This is not the end of the course. It is the beginning of the change.</p>
          <h3>What a Commitment Means Here</h3>
          <p>A commitment is different from an intention. An intention is abstract ("I'll drive better"). A commitment is specific, personal, and binding. It specifies the behaviors you will change, the reasons that matter to you, and the plan you will execute.</p>
          <h3>Your Commitment Statement</h3>
          <p>Before completing this course, you will write (in the text area below) a commitment statement of at least 150 words that addresses:</p>
          <ol>
            <li>The specific driving behaviors that led you to this course</li>
            <li>At least one replacement behavior for your highest-risk pattern, using the habit loop framework</li>
            <li>Your intrinsic motivation (the personal values that make safe driving important to you)</li>
            <li>At least three implementation intentions in the format: "When [cue], I will [action], because [value]"</li>
            <li>An identity statement: "I am a driver who..."</li>
          </ol>
          <div class="commitment-prompt">
            <p><em>This commitment is not reviewed by the state or any authority. It is for you. The value of writing it comes from the act of specificity and commitment \u2014 the psychological recognition that you have made a decision, not just expressed a wish.</em></p>
          </div>
          <h3>A Final Note</h3>
          <p>Every driver on Florida's roads has people who depend on them: families, employers, neighbors, strangers whose lives would be permanently altered by a crash that was within your power to prevent.</p>
          <p>The license you are reinstating is not just a legal privilege. It is trust. It is the state of Florida trusting you with a machine capable of killing. Repay that trust with the best driving of your life.</p>
          <p><strong>Drive well. Drive safely. Drive as if someone you love is walking on that road ahead.</strong></p>
        `,
        quizQuestions: [
          {
            questionText: 'What is the difference between a driving intention and a driving commitment?',
            options: [
              'There is no difference; they mean the same thing',
              'A commitment is legally enforceable; an intention is not',
              'A commitment is specific, personal and tied to values; an intention is vague and abstract',
              'Intentions come before commitments and are more powerful'
            ],
            correctAnswer: 'A commitment is specific, personal and tied to values; an intention is vague and abstract',
            explanation: 'The research on behavior change distinguishes abstract intentions ("I\'ll do better") from specific, value-linked commitments. The latter are significantly more predictive of actual behavior change.'
          }
        ]
      }
"""

f = open(JS_FILE, encoding='utf-8')
lines = f.readlines()
f.close()

# Find course12Hour start and end lines
course12_start = None
for i, l in enumerate(lines):
    if 'course12Hour: {' in l:
        course12_start = i
        break

print(f"course12Hour starts at line {course12_start} (0-indexed)")

# Find the modules: [ line just after course12Hour header
modules_line = None
for i in range(course12_start, course12_start + 20):
    if "modules: [" in lines[i]:
        modules_line = i
        break

print(f"modules: [ at line {modules_line} (0-indexed)")

# Find file end (the export footer lines - keep them)
# Keep from line where '};\n' ends the floridaCourseDataExpanded object
# The last } before }; 
last_close = None
for i in range(len(lines)-1, len(lines)-20, -1):
    if lines[i].strip() == '}':
        last_close = i
        break

print(f"Last closing brace at line {last_close} (0-indexed)")
print(f"Lines after: {repr(lines[last_close][:40])}")

# Keep: lines 0 through (course12_start - 1)
# Then write new course12Hour header
# Then write new modules
# Then close with:
#   ]
#   }
# }; 
# ...footer...

TAIL = "    ]\n  }\n};\n\n// ES Module exports for Node.js\nexport { floridaCourseDataExpanded };\n\n// Export for browser\nif (typeof window !== 'undefined') {\n  window.floridaCourseDataExpanded = floridaCourseDataExpanded;\n}\n"

new_lines = lines[:course12_start] + [NEW_ADI_COURSE_HEADER + NEW_ADI_MODULES + '\n' + TAIL]

with open(JS_FILE, 'w', encoding='utf-8') as f:
    f.writelines(new_lines)

print(f"\nDone! Total lines: {sum(1 for _ in open(JS_FILE, encoding='utf-8'))}")
