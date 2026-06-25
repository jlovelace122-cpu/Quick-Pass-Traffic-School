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
    description: 'Florida state-approved 4-hour Basic Driver Improvement course covering the traffic crash problem, crash dynamics, crash prevention, vulnerable road users, DUI prevention, safety equipment, psychological factors, and Florida traffic laws.',
    durationHours: 4,
    price: 18.50,
    modules: [
      // =========================================
      // MODULE 1: Traffic Crash Problem — Magnitude and Factors
      // Estimated Time: 40 minutes
      // =========================================
      {
        title: 'Module 1: Traffic Crash Problem \u2014 Magnitude and Factors',
        description: 'Understanding the scope of the Florida traffic crash problem, personal and societal losses, and the contribution of DUI and other hazardous acts',
        estimatedMinutes: 40,
        content: `
          <h2>Module 1: Traffic Crash Problem</h2>
          <h3>Section 1.1 \u2014 Introduction and Florida Crash Statistics</h3>
          <p>Florida is one of the most heavily trafficked states in the nation. With more than 23 million registered drivers and over 110 million annual visitors, Florida's roadways see an enormous volume of traffic every day.</p>
          <p>According to the Florida Department of Highway Safety and Motor Vehicles 2023 Annual Report:</p>
          <ul>
            <li><strong>401,561</strong> total traffic crashes</li>
            <li><strong>3,543</strong> traffic fatalities (approximately one death every 2.5 hours)</li>
            <li><strong>252,153</strong> crashes involving injuries</li>
            <li>Estimated economic cost: over <strong>$40 billion</strong> annually</li>
          </ul>
          <div class="statistics-box">
            <h4>Nationwide Context (NHTSA 2023)</h4>
            <ul>
              <li><strong>40,990</strong> people died in motor vehicle crashes in the United States</li>
              <li>Florida ranked <strong>3rd</strong> nationally in total traffic fatalities</li>
              <li>Traffic crashes are the <strong>leading cause of death</strong> for Americans ages 1\u201354</li>
            </ul>
          </div>
          <h3>Section 1.2 \u2014 Societal and Personal Losses</h3>
          <h4>Personal Losses</h4>
          <ul>
            <li><strong>Physical injury or death:</strong> Injuries range from minor wounds to catastrophic spinal cord damage, traumatic brain injury, and loss of limb.</li>
            <li><strong>Emotional trauma:</strong> Survivors frequently experience PTSD, depression, and anxiety. Family members suffer grief and long-term psychological harm.</li>
            <li><strong>Financial hardship:</strong> The average economic cost of a non-fatal disabling injury crash is approximately $155,000; a fatal crash averages $1.75 million in economic losses (NHTSA).</li>
            <li><strong>Loss of mobility and independence:</strong> Many crash survivors cannot return to work or drive again.</li>
          </ul>
          <h4>Societal Losses</h4>
          <ul>
            <li><strong>Healthcare burden:</strong> Emergency services, trauma centers, hospitals, and rehabilitation facilities absorb enormous costs.</li>
            <li><strong>Productivity losses:</strong> NHTSA estimates lost productivity from traffic fatalities at over $41,000 per victim on average.</li>
            <li><strong>First responder resources:</strong> Florida's 67 counties collectively respond to over 1,000 crashes per day on average.</li>
            <li><strong>Insurance costs:</strong> Florida consistently ranks among the most expensive states for auto insurance partly because of its high crash rate.</li>
          </ul>
          <h3>Section 1.3 \u2014 Contribution of DUI and Other Hazardous Acts</h3>
          <p>The vast majority of crashes are caused by specific, identifiable, and preventable human behaviors.</p>
          <h4>1. Distracted Driving</h4>
          <p>In 2023, distracted driving was a contributing factor in an estimated 50,000+ Florida crashes. Florida Statute 316.305 prohibits texting while operating a motor vehicle. Distraction reduces reaction time by as much as 40%. At 55 mph, reading a text for 5 seconds equals driving the length of a football field with eyes closed.</p>
          <ul>
            <li><strong>Visual:</strong> Eyes off the road</li>
            <li><strong>Manual:</strong> Hands off the wheel</li>
            <li><strong>Cognitive:</strong> Mind off driving</li>
          </ul>
          <h4>2. Speeding</h4>
          <p>Speed was a contributing factor in 26% of all U.S. traffic fatalities in 2023. In Florida, speeding-related crashes claimed over 900 lives in 2023.</p>
          <h4>3. Impaired Driving (DUI)</h4>
          <p>37% of all U.S. traffic fatalities in 2023 involved alcohol-impaired drivers (BAC \u2265 0.08). In Florida, 798 people died in alcohol-related crashes in 2023. A driver at BAC 0.08 is 4 times more likely to crash; at BAC 0.15, risk increases 12-fold.</p>
          <h4>4. Aggressive Driving / Road Rage</h4>
          <p>Florida Statute 316.1923 defines aggressive careless driving as a moving violation. Road rage incidents, where drivers use their vehicle or exit to confront another driver, result in crashes and fatalities every year in Florida.</p>
          <h4>5. Drowsy Driving</h4>
          <p>NHTSA estimates drowsy driving causes over 100,000 police-reported crashes annually nationwide. Driving after 18 hours awake = BAC 0.05 impairment; after 24 hours awake = BAC 0.10 impairment.</p>
          <h4>6. Failure to Use Seat Belts</h4>
          <p>In Florida, 51% of all traffic fatalities in 2022 involved unrestrained occupants. A seat belt reduces the risk of death by 45% for front-seat passengers and 60% for light-truck occupants.</p>
        `,
        quizQuestions: [
          {
            questionText: 'According to the 2023 FLHSMV Annual Report, approximately how many traffic fatalities occurred in Florida in 2023?',
            options: ['1,200', '3,543', '7,800', '400'],
            correctAnswer: '3,543',
            explanation: 'Florida recorded 3,543 traffic fatalities in 2023 \u2014 approximately one death every 2.5 hours.'
          },
          {
            questionText: 'What was the nationwide total of traffic fatalities in 2023 according to NHTSA?',
            options: ['40,990', '22,000', '55,000', '18,500'],
            correctAnswer: '40,990',
            explanation: 'NHTSA reported 40,990 people died in motor vehicle crashes in the United States in 2023.'
          },
          {
            questionText: 'What percentage of U.S. traffic fatalities in 2023 involved alcohol-impaired drivers?',
            options: ['12%', '25%', '37%', '50%'],
            correctAnswer: '37%',
            explanation: 'NHTSA data shows 37% of all U.S. traffic fatalities in 2023 involved alcohol-impaired drivers (BAC \u2265 0.08).'
          },
          {
            questionText: 'Reading a text while driving at 55 mph for 5 seconds is equivalent to driving approximately how far with your eyes closed?',
            options: ['Half a city block', 'One football field', 'A mile', '50 feet'],
            correctAnswer: 'One football field',
            explanation: 'At 55 mph, a 5-second distraction equals approximately 400 feet \u2014 the length of a football field \u2014 traveled with eyes off the road.'
          },
          {
            questionText: 'Which of the following is a type of cognitive distraction while driving?',
            options: ['Adjusting the radio', 'Eating a sandwich', 'Daydreaming', 'Looking at a map'],
            correctAnswer: 'Daydreaming',
            explanation: 'Cognitive distraction means your mind is off driving. Daydreaming is cognitive; adjusting the radio and eating are manual; looking at a map is visual.'
          }
        ]
      },

      // =========================================
      // MODULE 2: Crash Dynamics
      // Estimated Time: 20 minutes
      // =========================================
      {
        title: 'Module 2: Crash Dynamics',
        description: 'The effect of speed on force of impact, the three-collision concept, and vehicle safety design',
        estimatedMinutes: 20,
        content: `
          <h2>Module 2: Crash Dynamics</h2>
          <p>Every traffic crash involves three separate collisions. Understanding what happens physically during a crash helps you appreciate why speed, restraints, and vehicle design matter so much.</p>
          <h3>Section 2.1 \u2014 Effect of Speed on Force of Impact</h3>
          <p>Force is proportional to the <strong>square</strong> of speed (F&nbsp;=&nbsp;mv\xb2). Doubling your speed <strong>quadruples</strong> the force of impact:</p>
          <ul>
            <li>At 20 mph, a crash equals falling from a <strong>2-story building</strong></li>
            <li>At 30 mph, a crash equals falling from a <strong>3.5-story building</strong></li>
            <li>At 60 mph, a crash equals falling from a <strong>14-story building</strong></li>
          </ul>
          <p>A 3,000-lb vehicle at 60 mph has approximately 360,000 foot-pounds of kinetic energy \u2014 four times the energy at 30 mph, not twice.</p>
          <div class="info-table-wrapper">
            <table class="info-table">
              <tr><th>Speed</th><th>Total Stopping Distance (dry pavement)</th></tr>
              <tr><td>20 mph</td><td>~40 feet</td></tr>
              <tr><td>30 mph</td><td>~75 feet</td></tr>
              <tr><td>45 mph</td><td>~152 feet</td></tr>
              <tr><td>55 mph</td><td>~225 feet</td></tr>
              <tr><td>65 mph</td><td>~300+ feet</td></tr>
            </table>
          </div>
          <p>On wet pavement, multiply stopping distances by 1.5 to 2\xd7.</p>
          <h3>Section 2.2 \u2014 The Three-Collision Concept</h3>
          <h4>Collision 1: The Vehicle Collision</h4>
          <p>The vehicle hits another object and decelerates rapidly. Objects and people inside continue moving at the original speed.</p>
          <h4>Collision 2: The Human Collision</h4>
          <p>The human body continues moving until it hits the steering wheel, windshield, or door. Without a seat belt, an occupant in a 30 mph crash hits the interior with the same force as falling three stories onto concrete.</p>
          <h4>Collision 3: The Internal Collision</h4>
          <p>Even after the body stops, internal organs continue moving. The brain slams against the skull; the heart pulls against the aorta. These internal collisions cause traumatic brain injury, aortic rupture, and organ damage \u2014 injuries that may not be immediately visible but can be fatal.</p>
          <h3>Section 2.3 \u2014 Energy Absorption and Vehicle Design</h3>
          <h4>Crumple Zones</h4>
          <p>The front and rear sections of modern vehicles are designed to deform (crumple) in a controlled manner. This deformation absorbs kinetic energy and increases the duration of the crash event \u2014 longer time = less force transmitted to the occupant compartment.</p>
          <h4>Direction of Impact</h4>
          <ul>
            <li><strong>Frontal crashes:</strong> Crumple zone and airbags manage energy; belt holds occupant back</li>
            <li><strong>Side-impact crashes:</strong> More dangerous per unit of force because less crumple zone space exists between the door and the occupant</li>
            <li><strong>Rear-impact crashes:</strong> The seat and headrest absorb energy; whiplash is the most common injury</li>
          </ul>
        `,
        quizQuestions: [
          {
            questionText: 'If you double your speed, the kinetic energy of your vehicle:',
            options: ['Doubles', 'Stays the same', 'Quadruples', 'Triples'],
            correctAnswer: 'Quadruples',
            explanation: 'Kinetic energy increases with the square of speed (F = mv\xb2). Doubling speed quadruples kinetic energy and crash force.'
          },
          {
            questionText: 'The "second collision" in a crash is:',
            options: ['Two cars hitting each other', 'The human body hitting the vehicle\'s interior', 'The internal organs impacting', 'A rear-end collision'],
            correctAnswer: 'The human body hitting the vehicle\'s interior',
            explanation: 'The second collision is the human body continuing to move and striking the steering wheel, windshield, or door after the vehicle has stopped.'
          },
          {
            questionText: 'Crumple zones in modern vehicles are designed to:',
            options: ['Make vehicles lighter', 'Improve fuel efficiency', 'Absorb kinetic energy during a crash', 'Reduce wind resistance'],
            correctAnswer: 'Absorb kinetic energy during a crash',
            explanation: 'Crumple zones deform in a controlled manner to absorb crash energy and reduce force transmitted to the passenger compartment.'
          },
          {
            questionText: 'At 60 mph, stopping distance is approximately how far?',
            options: ['75 feet', '150 feet', '240 feet', '400 feet'],
            correctAnswer: '240 feet',
            explanation: 'At 60 mph, total stopping distance is approximately 240 feet on dry pavement \u2014 more than three times the distance at 30 mph.'
          },
          {
            questionText: 'Which type of crash leaves the least amount of crumple zone space between the impact point and the occupant?',
            options: ['Frontal', 'Rear-end', 'Rollover', 'Side-impact'],
            correctAnswer: 'Side-impact',
            explanation: 'Side-impact crashes are more dangerous per unit of force because the door provides far less crumple zone space than the front of the vehicle.'
          }
        ]
      },

      // =========================================
      // MODULE 3: Crash Prevention Techniques
      // Estimated Time: 50 minutes
      // =========================================
      {
        title: 'Module 3: Crash Prevention Techniques',
        description: 'Scanning, following distance, stopping distance, environmental hazards, vehicle emergencies, sharing the road, passing, right of way, speed adjustment, and railroad crossings',
        estimatedMinutes: 50,
        content: `
          <h2>Module 3: Crash Prevention Techniques</h2>
          <p>Crash prevention is active, not passive. The following techniques, practiced consistently, will dramatically reduce your risk of being involved in a crash.</p>
          <h3>Section 3.1 \u2014 Scanning and Visual Distance Guidelines</h3>
          <ul>
            <li><strong>City streets:</strong> Look 12\u201315 seconds ahead (approximately one block)</li>
            <li><strong>Highway:</strong> Look 20\u201330 seconds ahead (approximately a quarter mile)</li>
            <li><strong>Mirrors:</strong> Check every 5\u20138 seconds</li>
          </ul>
          <p>At intersections, check LEFT, RIGHT, then LEFT AGAIN before proceeding on green. Cross-traffic running late on a red light is a leading cause of intersection crashes in Florida.</p>
          <h3>Section 3.2 \u2014 Following Distance</h3>
          <p>Minimum following distance: <strong>2 seconds</strong> at highway speeds in ideal conditions. Pick a fixed point; when the rear bumper of the vehicle ahead passes that point, count "one thousand one, one thousand two." If your bumper reaches it first, you are too close.</p>
          <h4>When to Increase Following Distance</h4>
          <ul>
            <li>Rain or wet pavement: 4 seconds minimum</li>
            <li>Fog, smoke, or heavy rain: 6+ seconds</li>
            <li>Following a motorcycle: 4 seconds</li>
            <li>Following a large truck: 4\u20136 seconds</li>
            <li>Night driving: 4 seconds</li>
          </ul>
          <p>Do NOT brake-check a tailgater \u2014 move right and allow them to pass.</p>
          <h3>Section 3.3 \u2014 Stopping Distance</h3>
          <p>Total stopping distance = Perception + Reaction + Braking distance. Factors that increase stopping distance: wet pavement (1.5\u20133\xd7), worn tires or brakes, inattention, alcohol or drug use, and downhill grade.</p>
          <h3>Section 3.4 \u2014 Environmental Hazards</h3>
          <h4>Rain and Wet Roads</h4>
          <p>The <strong>first 10 minutes of rain are the most dangerous</strong> \u2014 oil and rubber wash to the surface, creating extremely slippery conditions. <strong>Hydroplaning</strong> can occur at approximately 35 mph on a wet surface; response: ease off the gas, do NOT brake sharply.</p>
          <p><strong>Florida Statute 316.217:</strong> Headlights MUST be on any time windshield wipers are in use.</p>
          <h4>Fog</h4>
          <ul>
            <li>Use LOW-BEAM headlights (high beams reflect off fog)</li>
            <li>Reduce speed to match actual sight distance</li>
            <li>Use the right edge of the road as a guide</li>
          </ul>
          <h4>Standing Water</h4>
          <p>Never drive into water of unknown depth. Six inches of moving water can knock an adult off their feet; 12 inches can float a small car; 2 feet can carry away most vehicles. <strong>"Turn around, don't drown."</strong></p>
          <h3>Section 3.5 \u2014 Vehicle Emergencies</h3>
          <h4>Tire Failure (Blowout)</h4>
          <ol>
            <li>Do NOT brake suddenly</li>
            <li>Grip the wheel firmly with both hands</li>
            <li>Ease off the accelerator gradually</li>
            <li>Steer to maintain your lane or move to the shoulder</li>
            <li>Once below 30 mph, apply brakes gently</li>
          </ol>
          <h4>Brake Failure</h4>
          <ol>
            <li>Pump the brakes rapidly (builds pressure on non-ABS vehicles)</li>
            <li>Engage the parking/emergency brake gradually</li>
            <li>Downshift for engine braking</li>
          </ol>
          <h3>Section 3.6 \u2014 Sharing the Road</h3>
          <h4>Motorcycles</h4>
          <p>Florida has 600+ motorcycle fatalities per year. Of Florida motorcycle fatalities, 49% occurred in crashes with other vehicles. Always check blind spots carefully before lane changes. Give motorcycles a full lane width.</p>
          <h4>Large Trucks</h4>
          <p>An 18-wheeler takes up to <strong>525 feet</strong> (about 40 car lengths) to stop from 65 mph. Trucks have four major blind spots (No-Zones) \u2014 directly in front (20 feet), directly behind (200 feet), the right side (2 lanes wide), and behind/left of the cab. <strong>If you cannot see the truck driver in their side mirror, they cannot see you.</strong></p>
          <h4>Bicyclists</h4>
          <p>Florida Statute 316.2065 requires at least <strong>3 feet of clearance</strong> when passing a bicyclist. Bicyclists have the same rights and responsibilities as motor vehicle drivers on all public roads except limited-access highways.</p>
          <h4>Pedestrians</h4>
          <p>Florida had 838 pedestrian fatalities in 2023. At crosswalks, yield to pedestrians even if no traffic signal is present (Florida Statute 316.130). Never block a crosswalk when stopped.</p>
          <h3>Section 3.7 \u2014 Passing</h3>
          <p>At 55 mph, passing a truck requires approximately <strong>1,500 feet</strong> of clear road ahead. Do NOT pass when: a solid yellow center line is on your side, within 100 feet of an intersection/railroad/bridge, on curves or hills with limited visibility, or in an active school zone.</p>
          <h3>Section 3.8 \u2014 Right of Way</h3>
          <p>No driver can legally claim the right of way. The rules establish who SHOULD yield.</p>
          <ul>
            <li><strong>4-way stop:</strong> First to arrive proceeds first. Simultaneous arrival: driver to the right goes first.</li>
            <li><strong>Entering from driveway or private road (Florida Statute 316.125):</strong> Always yield to traffic on the main road.</li>
            <li><strong>Roundabouts:</strong> Yield to vehicles already in the roundabout; enter counterclockwise.</li>
          </ul>
          <h4>Malfunctioning Signals</h4>
          <ul>
            <li>Dark signal (power failure): Treat as a four-way stop</li>
            <li>Flashing RED: Treat as a stop sign</li>
            <li>Flashing YELLOW: Slow down and proceed with caution</li>
          </ul>
          <h3>Section 3.9 \u2014 Speed Adjustment</h3>
          <p><strong>School zones:</strong> Speed drops to 15\u201320 mph when flashing signals are active. <strong>Construction zones (Florida Statute 316.0895):</strong> Fines doubled in active zones. A third offense within 3 years may result in license suspension.</p>
          <h3>Section 3.10 \u2014 Railroad Crossings</h3>
          <ul>
            <li>Never stop on railroad tracks</li>
            <li>At active crossings: STOP and wait. A train at 60 mph needs over a mile to stop.</li>
            <li>If stopped on tracks when a train approaches: EXIT the vehicle and run at a 45-degree angle away from the tracks in the direction the train is coming from</li>
            <li>Multi-track crossings: After one train passes, look again for a second train</li>
          </ul>
        `,
        quizQuestions: [
          {
            questionText: 'The minimum following distance recommended in ideal highway conditions is:',
            options: ['1 second', '2 seconds', '5 seconds', '10 seconds'],
            correctAnswer: '2 seconds',
            explanation: 'Florida driving instructors recommend a minimum 2-second following distance at highway speeds in ideal conditions. Increase to 4+ seconds in rain or other hazardous conditions.'
          },
          {
            questionText: 'What should you do first when your tire blows out at highway speed?',
            options: ['Brake hard immediately', 'Swerve to the shoulder', 'Ease off the gas and grip the wheel firmly', 'Come to a stop in your lane'],
            correctAnswer: 'Ease off the gas and grip the wheel firmly',
            explanation: 'Sudden braking during a blowout can cause loss of control. Grip the wheel, ease off the gas, and steer to a safe stop.'
          },
          {
            questionText: 'How much clearance must Florida drivers give a bicyclist when passing?',
            options: ['1 foot', '2 feet', '3 feet', '5 feet'],
            correctAnswer: '3 feet',
            explanation: 'Florida Statute 316.2065 requires a minimum 3-foot clearance when passing a bicyclist.'
          },
          {
            questionText: 'A flashing RED traffic signal should be treated as:',
            options: ['A yield sign', 'A green light', 'A stop sign', 'A caution light'],
            correctAnswer: 'A stop sign',
            explanation: 'A flashing red signal requires a complete stop, then proceed when safe \u2014 the same as a stop sign.'
          },
          {
            questionText: 'What is the primary danger during the first 10 minutes of a rainstorm?',
            options: ['Flooding', 'Oil and rubber surfacing, making roads especially slippery', 'Lightning strikes', 'Reduced engine performance'],
            correctAnswer: 'Oil and rubber surfacing, making roads especially slippery',
            explanation: 'During the first 10 minutes of rain, oil and rubber residue rise to the surface before being diluted, creating the most slippery conditions of the storm.'
          },
          {
            questionText: 'How many feet does it take an 18-wheeler to stop from 65 mph?',
            options: ['100 feet', '240 feet', '316 feet', '525 feet'],
            correctAnswer: '525 feet',
            explanation: 'A fully loaded 18-wheeler requires up to 525 feet (about 40 car lengths) to stop from 65 mph, compared to approximately 316 feet for a passenger car.'
          },
          {
            questionText: 'Florida law requires headlights to be on whenever:',
            options: ['After dark', 'In construction zones', 'Windshield wipers are in use', 'On highways'],
            correctAnswer: 'Windshield wipers are in use',
            explanation: 'Florida Statute 316.217 requires headlights to be on any time windshield wipers are in use.'
          },
          {
            questionText: 'How much clear road is needed at minimum to safely pass a truck at 55 mph?',
            options: ['500 feet', '800 feet', '1,500 feet', '2,000 feet'],
            correctAnswer: '1,500 feet',
            explanation: 'At 55 mph, safely passing a large truck requires approximately 1,500 feet of clear road ahead.'
          },
          {
            questionText: 'In Florida, what does a solid yellow center line on YOUR side of the road mean?',
            options: ['No passing allowed for you', 'Passing is permitted with caution', 'A construction zone ahead', 'Speed limit is reduced'],
            correctAnswer: 'No passing allowed for you',
            explanation: 'A solid yellow line on your side of the road means no passing is permitted for vehicles in your direction.'
          },
          {
            questionText: 'What is the maximum speed in a Florida school zone when the flashing signals are active?',
            options: ['25 mph', '35 mph', '15\u201320 mph (as posted)', '10 mph'],
            correctAnswer: '15\u201320 mph (as posted)',
            explanation: 'Florida school zones reduce the speed limit to 15\u201320 mph (as posted) when flashing signals are active.'
          }
        ]
      },

      // =========================================
      // MODULE 4: Vulnerable Road Users
      // Estimated Time: 30 minutes
      // =========================================
      {
        title: 'Module 4: Vulnerable Road Users',
        description: 'Definition, characteristics, environments, Florida laws, statistics, and driver responsibilities for vulnerable road users',
        estimatedMinutes: 30,
        content: `
          <h2>Module 4: Vulnerable Road Users</h2>
          <h3>Section 4.1 \u2014 Definition</h3>
          <p>A <strong>Vulnerable Road User (VRU)</strong> is any person using a public roadway who does not have the protection of an enclosed motor vehicle. VRUs face significantly higher risks of serious injury or death in collisions because they lack airbags, crumple zones, and seat belts.</p>
          <h4>Types of VRUs</h4>
          <ol>
            <li>Pedestrians</li>
            <li>Cyclists</li>
            <li>Motorcyclists and moped/scooter operators</li>
            <li>Users of personal mobility devices (wheelchairs, mobility scooters)</li>
            <li>Users of micromobility devices (electric scooters, skateboards)</li>
            <li>Construction and roadway workers</li>
            <li>Emergency responders at crash scenes</li>
          </ol>
          <h4>Especially Vulnerable Groups</h4>
          <ul>
            <li><strong>Children (under 16):</strong> More impulsive, smaller stature, less visible, less able to judge vehicle speed</li>
            <li><strong>Elderly persons (over 65):</strong> Slower walking speed, reduced hearing and vision</li>
            <li><strong>Persons with disabilities:</strong> May have limited mobility, vision, or hearing</li>
          </ul>
          <h3>Section 4.2 \u2014 Florida VRU Statistics (2023)</h3>
          <ul>
            <li><strong>Pedestrians: 838 fatalities</strong> \u2014 Florida ranked 3rd nationally; pedestrians = 21% of all Florida traffic fatalities</li>
            <li><strong>Cyclists: 176 fatalities</strong> \u2014 Florida ranks <strong>#1 in the nation for bicycle fatalities per capita</strong></li>
            <li><strong>Motorcyclists: 601 fatalities</strong> \u2014 15% of all Florida traffic fatalities</li>
            <li>National NHTSA 2023: 7,522 pedestrian fatalities (highest since 1981); 1,105 cyclist fatalities</li>
          </ul>
          <h3>Section 4.3 \u2014 Florida Laws Protecting VRUs</h3>
          <h4>Pedestrian Laws (Florida Statute 316.130)</h4>
          <ul>
            <li>Drivers must yield to pedestrians in crosswalks \u2014 both marked and unmarked</li>
            <li>A crosswalk exists at every intersection whether painted or not</li>
            <li>Walking on roadways: use sidewalks where available; if no sidewalk, walk FACING traffic on the left side</li>
          </ul>
          <h4>Cyclist Laws (Florida Statute 316.2065)</h4>
          <ul>
            <li>Cyclists have the same rights and duties as motor vehicle operators</li>
            <li>3-foot minimum passing clearance required by law</li>
            <li>Cyclists may NOT ride on limited-access expressways</li>
          </ul>
          <h4>Move Over Law (Florida Statute 316.126)</h4>
          <ul>
            <li>Move to the next lane left for stationary emergency vehicles with lights activated</li>
            <li>If unable to move over, reduce speed to 20 mph below the posted limit</li>
            <li>Expanded in 2023 to include disabled vehicles with hazard lights</li>
            <li>Violation: 3-point noncriminal moving violation, fine up to $500</li>
          </ul>
          <h4>School Bus Laws (Florida Statute 316.172)</h4>
          <ul>
            <li>ALL traffic in BOTH directions must stop when a school bus has the stop arm extended and red lights flashing</li>
            <li>Exception: On divided highways with a physical median barrier (raised median) \u2014 a painted line is NOT a physical barrier</li>
            <li>Passing a stopped school bus: 4-point moving violation</li>
          </ul>
          <h3>Section 4.4 \u2014 Physical Environment and VRU Safety</h3>
          <ul>
            <li><strong>Sidewalks:</strong> The single most effective pedestrian safety measure</li>
            <li><strong>Lighting:</strong> 76% of Florida pedestrian deaths occur at night; adequate lighting cuts risk by 30%</li>
            <li><strong>Crosswalk markings:</strong> Reduce pedestrian crash risk by up to 50%</li>
            <li><strong>Bike lanes:</strong> Reduce cyclist injury rates by 30\u201340%</li>
            <li><strong>Roundabouts:</strong> Reduce severe-injury and fatal crashes by 82\u201387% vs. signalized intersections (FHWA)</li>
          </ul>
          <h3>Section 4.5 \u2014 Driver Responsibility</h3>
          <ul>
            <li>Enter crosswalks slowly enough to STOP if a pedestrian appears</li>
            <li>Before turning right on red, look left, right, then LEFT AGAIN for cyclists and pedestrians</li>
            <li>Use the Dutch Reach (open door with right hand) to force your body to check for cyclists</li>
            <li>At night, drive more slowly in areas with pedestrian activity</li>
            <li><strong>Bike boxes:</strong> Stop BEHIND the bike box; never enter it with your vehicle</li>
          </ul>
        `,
        quizQuestions: [
          {
            questionText: 'Which of the following is NOT considered a vulnerable road user?',
            options: ['A cyclist', 'A pedestrian', 'An occupant of an SUV', 'A motorcyclist'],
            correctAnswer: 'An occupant of an SUV',
            explanation: 'VRUs are road users without the protection of an enclosed motor vehicle. An SUV occupant has structural protection, airbags, and a seat belt.'
          },
          {
            questionText: 'Florida ranked what position nationally for bicycle fatalities per capita in 2023?',
            options: ['3rd', '5th', '1st', '10th'],
            correctAnswer: '1st',
            explanation: 'Florida ranks #1 in the nation for bicycle fatalities per capita, with 176 cyclist deaths in 2023.'
          },
          {
            questionText: 'Under Florida\'s Move Over Law, if you cannot move to the next lane for a stopped emergency vehicle, you must:',
            options: ['Stop completely', 'Slow to 20 mph below the speed limit', 'Honk as you pass', 'Use your hazard lights and maintain speed'],
            correctAnswer: 'Slow to 20 mph below the speed limit',
            explanation: 'Florida Statute 316.126 requires reducing speed to 20 mph below the posted limit when unable to change lanes for a stationary emergency vehicle.'
          },
          {
            questionText: 'Passing a stopped school bus with flashing red lights is what type of violation?',
            options: ['1-point', '2-point', '3-point', '4-point'],
            correctAnswer: '4-point',
            explanation: 'Passing a stopped school bus with activated red lights is a 4-point moving violation in Florida.'
          },
          {
            questionText: 'Florida pedestrian fatalities account for what percentage of all Florida traffic fatalities?',
            options: ['5%', '10%', '21%', '35%'],
            correctAnswer: '21%',
            explanation: 'In 2023, Florida recorded 838 pedestrian fatalities \u2014 approximately 21% of all traffic fatalities in the state.'
          },
          {
            questionText: 'A "bike box" at an intersection is designed to:',
            options: ['Store bicycles', 'Allow cyclists to position ahead of traffic before a junction', 'Serve as a bicycle repair area', 'Mark a bicycle-free zone'],
            correctAnswer: 'Allow cyclists to position ahead of traffic before a junction',
            explanation: 'A bike box is a marked area at the front of an intersection where cyclists can position ahead of motor vehicles, improving visibility and safety.'
          },
          {
            questionText: 'What is the minimum clearance Florida law requires when passing a bicyclist?',
            options: ['1 foot', '2 feet', '3 feet', '4 feet'],
            correctAnswer: '3 feet',
            explanation: 'Florida Statute 316.2065 requires at least 3 feet of clearance when passing a bicyclist.'
          }
        ]
      },

      // =========================================
      // MODULE 5: DUI Prevention
      // Estimated Time: 30 minutes
      // =========================================
      {
        title: 'Module 5: DUI Prevention',
        description: 'Effects of alcohol and drugs on driving, BAC and consumption, DUI legal and financial consequences, and ways to avoid driving impaired',
        estimatedMinutes: 30,
        content: `
          <h2>Module 5: DUI Prevention</h2>
          <h3>Section 5.1 \u2014 Effects of Alcohol and Drugs on Driver Capabilities</h3>
          <p>Alcohol affects driving through a predictable progression. <strong>Impairment begins before the legal limit of 0.08 BAC.</strong></p>
          <div class="info-table-wrapper">
            <table class="info-table">
              <tr><th>BAC Level</th><th>Effects on Driving</th></tr>
              <tr><td>0.02</td><td>Loss of judgment, altered mood, reduced visual function, divided attention impaired</td></tr>
              <tr><td>0.05</td><td>Reduced coordination, difficulty steering, reduced information processing</td></tr>
              <tr><td>0.08 (legal limit)</td><td>Muscle coordination severely impaired, speed control impaired, crash risk <strong>4\xd7 higher</strong> than sober</td></tr>
              <tr><td>0.15</td><td>Far less muscle control, major loss of balance, crash risk <strong>12\xd7 higher</strong> than sober</td></tr>
            </table>
          </div>
          <p>Order of impairment: <strong>Judgment impairs FIRST</strong>, then coordination, then vision, then reaction time worsens. By the time speech is slurred, the driver is dangerously impaired.</p>
          <h4>Effect of Other Drugs</h4>
          <ul>
            <li><strong>Cannabis:</strong> Impairs divided attention and tracking for 4\u20136+ hours. Driving within 1\u20133 hours of use doubles crash risk.</li>
            <li><strong>Prescription opioids:</strong> Cause drowsiness and impaired judgment. Driving on prescribed opioids constitutes DUI if normal faculties are impaired.</li>
            <li><strong>Benzodiazepines:</strong> Similar to alcohol in effect; increase crash risk even at therapeutic doses.</li>
            <li><strong>Combination effects:</strong> Mixing alcohol with any drug amplifies impairment beyond what either causes alone.</li>
          </ul>
          <h3>Section 5.2 \u2014 Relationship Between Alcohol Consumed and BAC</h3>
          <p>BAC is affected by: number of drinks, time period, body weight, sex, food consumption, and alcohol tolerance. <strong>Tolerance does NOT mean less impairment</strong> \u2014 it means you feel less drunk, but your driving ability is still degraded.</p>
          <p>Each standard drink contains approximately 0.6 oz of pure alcohol: 12 oz beer (5%) = 5 oz wine = 1.5 oz spirits = 1 standard drink.</p>
          <h4>BAC Elimination Rate</h4>
          <p>The liver processes approximately <strong>0.015 BAC per hour</strong>. Coffee, cold showers, food, and exercise do NOT accelerate this. <strong>Only time lowers BAC.</strong></p>
          <h3>Section 5.3 \u2014 Legal Consequences of DUI in Florida (Florida Statute 316.193)</h3>
          <div class="info-table-wrapper">
            <table class="info-table">
              <tr><th>Offense</th><th>Fine</th><th>Imprisonment</th><th>License Revocation</th></tr>
              <tr><td>1st (BAC 0.08\u20130.14)</td><td>$500\u2013$1,000</td><td>Up to 6 months</td><td>Min. 180 days</td></tr>
              <tr><td>2nd (within 5 years)</td><td>$1,000\u2013$2,000</td><td>Up to 9 months</td><td>Min. 5 years + ignition interlock</td></tr>
              <tr><td>3rd within 10 years of 2nd</td><td>$2,000\u2013$5,000</td><td>Up to 5 years (felony)</td><td>Min. 10 years</td></tr>
            </table>
          </div>
          <h4>Aggravating Factors</h4>
          <ul>
            <li>BAC 0.15+: enhanced penalties regardless of offense number</li>
            <li>DUI with minor in vehicle: mandatory jail time</li>
            <li>DUI causing serious bodily injury: 3rd-degree felony</li>
            <li>DUI manslaughter: 2nd-degree felony (minimum 4 years prison)</li>
          </ul>
          <h3>Section 5.4 \u2014 Financial Consequences</h3>
          <p>Average total cost of a first DUI conviction in Florida: <strong>$10,000\u2013$25,000+</strong>, including fines ($1,500\u2013$5,000), attorney fees ($3,000\u2013$10,000), DUI school ($500\u2013$2,000), license reinstatement ($650+), and insurance increases ($1,500\u2013$3,000/year for 3+ years).</p>
          <h3>Section 5.5 \u2014 Ways to Avoid Driving Impaired</h3>
          <p>Plan safe transportation BEFORE you begin drinking: designate a driver, use Uber/Lyft, call a taxi, stay overnight, or use public transit. If already impaired with no option available \u2014 call 911. Note: In Florida, sitting in the driver's seat with the engine running while impaired can constitute DUI.</p>
        `,
        quizQuestions: [
          {
            questionText: 'At what BAC does Florida\'s per se DUI law begin?',
            options: ['0.05', '0.08', '0.10', '0.15'],
            correctAnswer: '0.08',
            explanation: 'Florida\'s per se DUI limit is 0.08 BAC. However, impairment begins at much lower levels and drivers can be charged with DUI at any BAC if faculties are impaired.'
          },
          {
            questionText: 'At BAC 0.08, driving crash risk compared to a sober driver is:',
            options: ['Twice as high', 'Three times', 'Four times', 'Eight times'],
            correctAnswer: 'Four times',
            explanation: 'At a BAC of 0.08, a driver\'s crash risk is 4 times higher than a sober driver. At 0.15, risk increases to 12 times higher.'
          },
          {
            questionText: 'Which of the following is equivalent to one standard drink?',
            options: ['22 oz beer', '12 oz beer (5% ABV)', '9 oz wine', '3 oz liquor'],
            correctAnswer: '12 oz beer (5% ABV)',
            explanation: 'One standard drink contains approximately 0.6 oz of pure alcohol. 12 oz beer (5%) = 5 oz wine = 1.5 oz spirits = 1 standard drink.'
          },
          {
            questionText: 'What is the approximate BAC elimination rate per hour?',
            options: ['0.05', '0.02', '0.015', '0.01'],
            correctAnswer: '0.015',
            explanation: 'The liver processes approximately 0.015 BAC per hour. Nothing \u2014 coffee, food, or exercise \u2014 accelerates this. Only time lowers BAC.'
          },
          {
            questionText: 'A first-time DUI conviction in Florida requires a minimum community service of:',
            options: ['100 hours', '25 hours', 'No requirement', '50 hours'],
            correctAnswer: '50 hours',
            explanation: 'A first DUI conviction in Florida requires 50 hours of mandatory community service.'
          },
          {
            questionText: 'Which of the following will speed up BAC reduction?',
            options: ['Coffee', 'Cold shower', 'Food', 'None of the above'],
            correctAnswer: 'None of the above',
            explanation: 'Nothing speeds up BAC reduction. Only time reduces BAC as the liver processes approximately 0.015 per hour.'
          },
          {
            questionText: 'DUI causing serious bodily injury in Florida is classified as:',
            options: ['A misdemeanor', 'A 3rd-degree felony', 'A 2nd-degree felony', 'An infraction'],
            correctAnswer: 'A 3rd-degree felony',
            explanation: 'DUI causing serious bodily injury is a 3rd-degree felony in Florida. DUI manslaughter is a 2nd-degree felony.'
          },
          {
            questionText: 'What is the FIRST ability to be impaired by alcohol?',
            options: ['Coordination', 'Vision', 'Judgment', 'Reaction time'],
            correctAnswer: 'Judgment',
            explanation: 'Judgment is the first ability impaired by alcohol, beginning at very low BAC levels \u2014 well before coordination, vision, or reaction time are noticeably affected.'
          }
        ]
      },

      // =========================================
      // MODULE 6: Safety Equipment
      // Estimated Time: 20 minutes
      // =========================================
      {
        title: 'Module 6: Safety Equipment',
        description: 'Safety belts, head restraints, child restraints, air bags, and vehicle safety maintenance',
        estimatedMinutes: 20,
        content: `
          <h2>Module 6: Safety Equipment</h2>
          <h3>Section 6.1 \u2014 Safety Belts</h3>
          <ul>
            <li>Seat belts reduce the risk of death in a frontal crash by <strong>45%</strong> (NHTSA)</li>
            <li>Seat belts reduce death risk by <strong>60%</strong> for light truck occupants</li>
            <li>In Florida in 2022, <strong>51% of all traffic fatalities were unrestrained occupants</strong></li>
            <li>Ejection occurs in 1% of crashes but accounts for 21% of fatalities; a seat belt prevents ejection</li>
          </ul>
          <h4>Proper Positioning</h4>
          <ul>
            <li><strong>Lap belt:</strong> Across the upper thighs/hip bones \u2014 NOT across the abdomen</li>
            <li><strong>Shoulder belt:</strong> Across the chest and shoulder \u2014 NOT tucked behind the back or under the arm</li>
          </ul>
          <h4>Florida Law (Florida Statute 316.614)</h4>
          <ul>
            <li>All front-seat occupants must wear a seat belt</li>
            <li>All rear-seat passengers under age 18 must wear a seat belt</li>
            <li>The DRIVER is responsible for ensuring all passengers under 18 are buckled</li>
          </ul>
          <h3>Section 6.2 \u2014 Head Restraints</h3>
          <p>Head restraints are <strong>critical safety devices</strong>, not comfort features. They prevent whiplash in rear-end collisions.</p>
          <ul>
            <li>Top of head restraint: level with the <strong>TOP of your head</strong></li>
            <li>Restraint should be within 4 inches of the back of your head</li>
            <li>Proper positioning reduces whiplash injury severity by 40%</li>
          </ul>
          <h3>Section 6.3 \u2014 Child Restraints (Florida Statute 316.613)</h3>
          <ul>
            <li>Children <strong>under age 5</strong>: must be in a federally approved child restraint device</li>
            <li>Children <strong>under age 3</strong>: must be in a separate carrier (not the vehicle seat belt alone)</li>
            <li>Children <strong>aged 3\u20135</strong>: may use a separate carrier OR a booster seat with the vehicle's seat belt</li>
          </ul>
          <h4>Types of Child Restraints</h4>
          <ol>
            <li><strong>Rear-facing infant seat (birth to 2+ years):</strong> Back seat only; NEVER in front of an active airbag; keep rear-facing as long as possible</li>
            <li><strong>Forward-facing car seat (2\u20135 years, 40\u201365 lbs):</strong> Back seat, forward-facing with internal harness</li>
            <li><strong>Booster seat (40\u2013120 lbs):</strong> Reduces injury risk by 45% vs. seat belt alone for this age group</li>
            <li><strong>Vehicle seat belt:</strong> When the child is 4'9" or taller (typically age 8\u201312)</li>
          </ol>
          <h3>Section 6.4 \u2014 Air Bags</h3>
          <ul>
            <li>Airbags <strong>supplement</strong> seat belts \u2014 they do NOT replace them</li>
            <li>Children under age 13 should NEVER sit in front of an active frontal airbag</li>
            <li>Rear-facing infant seats must NEVER be placed in the front passenger seat with an active airbag</li>
            <li>Airbags deploy at 100\u2013220 mph and are designed for an adult's chest \u2014 not a child's head</li>
          </ul>
          <h3>Section 6.5 \u2014 Vehicle Safety Maintenance</h3>
          <ul>
            <li><strong>Tires:</strong> Check pressure monthly. Tread below 2/32" (penny test: Lincoln's head fully visible) = replace</li>
            <li><strong>Brakes:</strong> Service every 12,000 miles or if pulsation, grinding, or extended stopping distances are detected</li>
            <li><strong>Lights:</strong> Test all exterior lights monthly</li>
            <li><strong>Carbon monoxide (CO):</strong> Colorless, odorless, lethal gas produced by all gasoline engines. Never run engine in an enclosed space. Symptoms: headache, nausea, dizziness, confusion \u2014 exit vehicle immediately and move to fresh air.</li>
          </ul>
        `,
        quizQuestions: [
          {
            questionText: 'Where should the top of a head restraint be positioned?',
            options: ['Level with the ear', 'Level with the top of the head', 'Level with the shoulders', 'As low as possible'],
            correctAnswer: 'Level with the top of the head',
            explanation: 'The top of the head restraint should be level with the top of your head to properly prevent whiplash in a rear-end collision.'
          },
          {
            questionText: 'In Florida, children under what age must use a separate child restraint device?',
            options: ['2', '5', '8', '13'],
            correctAnswer: '5',
            explanation: 'Florida Statute 316.613 requires children under age 5 to be secured in a federally approved child restraint device.'
          },
          {
            questionText: 'Carbon monoxide gas is:',
            options: ['Brown and has a rotten egg smell', 'White with a sweet odor', 'Colorless and odorless', 'Blue with a sharp smell'],
            correctAnswer: 'Colorless and odorless',
            explanation: 'Carbon monoxide is a colorless, odorless, potentially lethal gas produced by gasoline engines. It cannot be detected by sight or smell.'
          },
          {
            questionText: 'A rear-facing infant seat should NEVER be placed where?',
            options: ['In the back seat', 'In front of an active airbag', 'On a seat with LATCH anchors', 'Facing the rear of the vehicle'],
            correctAnswer: 'In front of an active airbag',
            explanation: 'A rear-facing infant seat must NEVER be placed in front of an active airbag. The airbag deploys directly into the back of the infant seat near the child\'s head.'
          },
          {
            questionText: 'Seat belts reduce the risk of death in a frontal crash by what percentage?',
            options: ['15%', '25%', '35%', '45%'],
            correctAnswer: '45%',
            explanation: 'Seat belts reduce the risk of death in a frontal crash by 45% for front-seat occupants (NHTSA).'
          }
        ]
      },

      // =========================================
      // MODULE 7: Psychological Factors
      // Estimated Time: 20 minutes
      // =========================================
      {
        title: 'Module 7: Psychological Factors',
        description: 'How stress, fatigue, and emotional distress affect driving, and how an appropriate attitude prevents crashes',
        estimatedMinutes: 20,
        content: `
          <h2>Module 7: Psychological Factors</h2>
          <h3>Section 7.1 \u2014 Stress and Driving</h3>
          <p>Stress narrows attention, makes drivers impatient, and increases risk-taking (following too closely, unsafe passes, running yellow lights). A 2023 AAA study found that emotional distress increased crash risk by <strong>9.8 times</strong> compared to calm driving.</p>
          <h4>Managing Stress Before Driving</h4>
          <ul>
            <li>Recognize if you are in a highly emotional state before getting behind the wheel</li>
            <li>Allow extra travel time so you are not rushed</li>
            <li>Deep breathing (4 counts in, hold 4, 4 counts out) activates the parasympathetic nervous system within minutes</li>
            <li>If significantly emotionally distressed, delay driving or ask someone else to drive</li>
          </ul>
          <h3>Section 7.2 \u2014 Fatigue and Driving</h3>
          <p>NHTSA estimates drowsy driving causes over <strong>100,000</strong> police-reported crashes per year (likely 3\u20136\xd7 higher due to underreporting).</p>
          <p><strong>Microsleeps</strong> \u2014 involuntary 1\u201330 second lapses in consciousness \u2014 can occur without driver awareness. At 60 mph, a 4-second microsleep = <strong>352 feet</strong> driven with no awareness or control.</p>
          <h4>Fatigue Equivalence to Alcohol</h4>
          <ul>
            <li>18 hours awake = impairment equivalent to BAC <strong>0.05</strong></li>
            <li>24 hours awake = equivalent to BAC <strong>0.10</strong></li>
          </ul>
          <h4>Warning Signs of Fatigue</h4>
          <p>Difficulty keeping eyes open, repeated yawning, wandering thoughts, drifting lanes, missing exits, not remembering the last few miles. <em>Any of these means you are too tired to drive safely.</em></p>
          <h4>Managing Fatigue</h4>
          <ul>
            <li>Don't start a long drive tired \u2014 sleep before departure</li>
            <li>Take breaks every 2 hours or 100 miles</li>
            <li>A <strong>20-minute power nap</strong> at a rest area significantly improves alertness for 1\u20133 hours</li>
            <li>Caffeine provides only 1\u20132 hours of temporary relief \u2014 NOT a substitute for sleep</li>
          </ul>
          <h3>Section 7.3 \u2014 Emotional Distress and Driving</h3>
          <p>Grief, anger, fear, depression, and anxiety impair driving similarly to chemical impairment. Road rage escalates into crashes and violence; Florida Statute 316.1923 defines aggressive careless driving as a moving violation. Road rage incidents involving firearms have increased in Florida \u2014 never engage.</p>
          <h4>If Another Driver Acts Aggressively</h4>
          <ol>
            <li>Do NOT engage \u2014 no eye contact, no gestures, no honking</li>
            <li>Create space between your vehicle and theirs</li>
            <li>Drive to a public place or police station; do not go home</li>
            <li>If threatened, call 911 while continuing to drive</li>
          </ol>
          <h3>Section 7.4 \u2014 Appropriate Attitude Toward Driving</h3>
          <ol>
            <li><strong>Respect:</strong> Every other vehicle contains a person \u2014 treat them as you want to be treated</li>
            <li><strong>Patience:</strong> A few minutes late is never worth a crash</li>
            <li><strong>Humility:</strong> Overconfidence is a crash risk; every driver makes mistakes</li>
            <li><strong>Responsibility:</strong> You operate a 3,000-lb machine; consequences fall on others as well as yourself</li>
            <li><strong>Attentiveness:</strong> Driving requires full cognitive attention \u2014 put down the phone</li>
          </ol>
        `,
        quizQuestions: [
          {
            questionText: 'A 4-second microsleep at 60 mph results in traveling approximately:',
            options: ['50 feet', '100 feet', '200 feet', '352 feet'],
            correctAnswer: '352 feet',
            explanation: 'At 60 mph, a 4-second microsleep means the driver travels 352 feet \u2014 well over a football field \u2014 with no awareness or control.'
          },
          {
            questionText: 'Being awake for 24 hours produces impairment comparable to a BAC of:',
            options: ['0.05', '0.08', '0.10', '0.15'],
            correctAnswer: '0.10',
            explanation: 'Research shows that being awake for 24 hours produces driving impairment equivalent to a BAC of 0.10 \u2014 above Florida\'s per se DUI limit.'
          },
          {
            questionText: 'If another driver is acting aggressively toward you, you should:',
            options: ['Honk and confront them', 'Increase your speed to escape', 'Do not engage; create space and drive to a public place', 'Block them in'],
            correctAnswer: 'Do not engage; create space and drive to a public place',
            explanation: 'Engaging with an aggressive driver escalates risk. The safe response is to create space, avoid eye contact, and drive to a public place or police station.'
          },
          {
            questionText: 'Which of the following is the most effective countermeasure for driver fatigue?',
            options: ['Coffee', 'Opening a window', 'Turning up the radio', 'A 20-minute nap'],
            correctAnswer: 'A 20-minute nap',
            explanation: 'A 20-minute power nap is among the most effective fatigue countermeasures, improving alertness for 1\u20133 hours. Coffee provides only 1\u20132 hours of temporary relief.'
          },
          {
            questionText: 'The AAA study mentioned in this course found that emotional distress increased crash risk by approximately:',
            options: ['2\xd7', '5\xd7', '9.8\xd7', '15\xd7'],
            correctAnswer: '9.8\xd7',
            explanation: 'A 2023 AAA study found that emotional distress (agitation, sadness, crying) increased crash risk by 9.8 times compared to calm, focused driving.'
          },
          {
            questionText: 'An appropriate attitude toward driving includes all EXCEPT:',
            options: ['Patience', 'Humility', 'Overconfidence', 'Responsibility'],
            correctAnswer: 'Overconfidence',
            explanation: 'Overconfidence is a crash risk. Safe driving requires patience, humility, responsibility, and attentiveness.'
          }
        ]
      },

      // =========================================
      // MODULE 8: Florida Traffic Laws
      // Estimated Time: 30 minutes
      // =========================================
      {
        title: 'Module 8: Florida Traffic Laws',
        description: 'Florida\'s point system, speed limits, signs and signals, school buses, emergency vehicles, and required vehicle safety equipment',
        estimatedMinutes: 30,
        content: `
          <h2>Module 8: Florida Traffic Laws</h2>
          <h3>Section 8.1 \u2014 Florida Point System (Florida Statute 322.27)</h3>
          <div class="info-table-wrapper">
            <table class="info-table">
              <tr><th>Points</th><th>Violations</th></tr>
              <tr><td>3 points</td><td>Speeding 15 mph or less over; improper passing; failure to yield; running red light (no crash); stop sign violation; unlawful speed in school zone</td></tr>
              <tr><td>4 points</td><td>Speeding 16+ mph over; reckless driving (no accident); improper turn; failing to stop for school bus</td></tr>
              <tr><td>6 points</td><td>Any moving violation causing a crash; reckless driving (accident); leaving scene of crash</td></tr>
            </table>
          </div>
          <h4>Point Accumulation Thresholds</h4>
          <ul>
            <li>12 points in 12 months = <strong>30-day suspension</strong></li>
            <li>18 points in 18 months = <strong>3-month suspension</strong></li>
            <li>24 points in 36 months = <strong>1-year suspension</strong> (automatic)</li>
          </ul>
          <h4>Habitual Traffic Offender (HTO) Status (Florida Statute 322.264)</h4>
          <p>Designated if 3+ qualifying offenses (felony vehicle charges, DUI offenses, or 15+ points total) within 5 years. Penalty: <strong>5-year license revocation</strong>. Must complete the 12-hour ADI course before reinstatement.</p>
          <h3>Section 8.2 \u2014 Speed Limits in Florida</h3>
          <p>Default limits where not otherwise posted:</p>
          <ul>
            <li>Residential/business areas: <strong>30 mph</strong></li>
            <li>Rural interstate: <strong>70 mph</strong></li>
            <li>Urban interstate: <strong>65 mph</strong></li>
            <li>All other roads: <strong>55 mph</strong></li>
          </ul>
          <h3>Section 8.3 \u2014 Signs, Signals, and Road Markings</h3>
          <ul>
            <li><strong>GREEN:</strong> Proceed if clear (does not guarantee safety)</li>
            <li><strong>YELLOW:</strong> Prepare to stop; only proceed if stopping safely is not possible</li>
            <li><strong>RED:</strong> Stop before the stop line; remain stopped until green</li>
            <li><strong>GREEN ARROW:</strong> Protected turn; cross traffic is stopped</li>
            <li><strong>FLASHING RED:</strong> Treat as a stop sign</li>
            <li><strong>FLASHING YELLOW:</strong> Slow and proceed with caution</li>
            <li><strong>DARK SIGNAL (power failure):</strong> Treat as a 4-way stop</li>
          </ul>
          <p><strong>Right Turn on Red (Florida Statute 316.075):</strong> Permitted after a complete stop unless a "No Turn on Red" sign is posted. Yield to all pedestrians and vehicles with a green light.</p>
          <h4>Centerline Markings</h4>
          <ul>
            <li>Broken yellow: Passing permitted both directions when safe</li>
            <li>Solid yellow on YOUR side: No passing for you</li>
            <li>Double solid yellow: No passing either direction</li>
          </ul>
          <h3>Section 8.4 \u2014 School Buses (Florida Statute 316.172)</h3>
          <p>ALL vehicles in BOTH directions on undivided roads must STOP when a school bus has the stop arm extended AND red lights flashing. Remain stopped until lights stop, arm retracts, and all children have cleared the roadway.</p>
          <p><strong>Exception:</strong> Divided highways with a physical median barrier (raised concrete or raised divider). A painted center line is NOT a physical barrier. <strong>Violation: 4-point moving violation.</strong></p>
          <h3>Section 8.5 \u2014 Emergency Vehicles (Florida Statute 316.126)</h3>
          <p>When an emergency vehicle is approaching with sirens/lights: (1) Pull to the RIGHT edge of the roadway; (2) Stop completely; (3) Remain stopped until the vehicle has passed. <strong>Move Over Law:</strong> For stationary emergency vehicles on the shoulder \u2014 move left if safe; if not, reduce speed to 20 mph below posted limit.</p>
          <h3>Section 8.6 \u2014 Required Vehicle Safety Equipment (Florida Statute 316.610)</h3>
          <p>Every motor vehicle in Florida must have in working order: brakes (including parking brake), steering, tires (minimum 2/32" tread), horn (audible 200 feet), windshield wipers, rearview mirror, two headlights (visible 450 feet), four turn signals, two brake lights (visible 300 feet), muffler, and windows meeting Florida tinting transparency requirements.</p>
        `,
        quizQuestions: [
          {
            questionText: 'What happens to a Florida driver who accumulates 18 points in 18 months?',
            options: ['30-day suspension', '3-month suspension', '1-year suspension', 'Revocation'],
            correctAnswer: '3-month suspension',
            explanation: 'Accumulating 18 points in 18 months results in a 3-month license suspension. 24 points in 36 months triggers an automatic 1-year suspension.'
          },
          {
            questionText: 'What is the default speed limit in a Florida residential area where no sign is posted?',
            options: ['25 mph', '30 mph', '35 mph', '45 mph'],
            correctAnswer: '30 mph',
            explanation: 'In Florida, the default speed limit in residential and business districts is 30 mph when no speed limit sign is posted.'
          },
          {
            questionText: 'In Florida, when a traffic signal has completely lost power (dark signal), drivers must:',
            options: ['Proceed at reduced speed', 'Yield to oncoming traffic', 'Treat it as a four-way stop', 'Follow the direction of the last working signal'],
            correctAnswer: 'Treat it as a four-way stop',
            explanation: 'A completely dark traffic signal must be treated as a four-way stop \u2014 each vehicle must stop and yield appropriately.'
          },
          {
            questionText: 'Under Florida\'s Move Over Law, when must you reduce speed for a stationary emergency vehicle?',
            options: ['Only during nighttime hours', 'When you cannot safely move to the next lane', 'Always, regardless of lane availability', 'Only when directed by law enforcement'],
            correctAnswer: 'When you cannot safely move to the next lane',
            explanation: 'Florida\'s Move Over Law requires moving to the next lane if safe; if not, you must reduce speed to 20 mph below the posted limit.'
          },
          {
            questionText: 'A driver who reaches Habitual Traffic Offender (HTO) status in Florida faces:',
            options: ['1-year revocation', '3-year revocation', '5-year revocation', 'Permanent revocation'],
            correctAnswer: '5-year revocation',
            explanation: 'Florida Statute 322.264 designates HTO status for qualifying offenses within 5 years, resulting in a 5-year license revocation. The driver must complete the ADI course before reinstatement.'
          },
          {
            questionText: 'What action is NOT a 4-point violation in Florida?',
            options: ['Reckless driving (no accident)', 'Speeding 16 mph over the limit', 'Speeding 10 mph over the limit', 'Failing to stop for a school bus'],
            correctAnswer: 'Speeding 10 mph over the limit',
            explanation: 'Speeding 15 mph or less over the limit is a 3-point violation. Speeding 16+ mph over the limit, reckless driving, and failing to stop for a school bus are all 4-point violations.'
          }
        ]
      }

    ],
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
  // =====================================================
  // 12-HOUR ADVANCED DRIVER IMPROVEMENT (ADI) COURSE
  // Required for: License reinstatement after suspension
  // =====================================================
  course12Hour: {
    name: '12-Hour Advanced Driver Improvement (ADI)',
    slug: 'florida-12-hour-adi',
    description: 'Florida-required 12-hour behavioral change course for license reinstatement. \"The Better Driver Within You\" — covers driving problem patterns, habit loops, self-awareness, motivation, emotions, personality, the change system, simulated situations, vulnerable road users, and personal commitment.',
    durationHours: 12,
    price: 45.00,
    modules: [
      // =========================================
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

    ]
  }
};

// ES Module exports for Node.js
export { floridaCourseDataExpanded };

// Export for browser
if (typeof window !== 'undefined') {
  window.floridaCourseDataExpanded = floridaCourseDataExpanded;
}
