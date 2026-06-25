"""
Splice new BDI modules into curriculum-expanded.js
Replaces lines 19–2422 (1-indexed) with new module content.
"""

JS_FILE = r'c:\Users\j_lov\OneDrive\Quickpasstrafficschool Website\db\curriculum-expanded.js'

NEW_MODULES = r"""      // =========================================
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
"""

f = open(JS_FILE, encoding='utf-8')
lines = f.readlines()
f.close()

# Keep lines 0-21 (0-indexed): course4Hour header through `    modules: [`
# Delete lines 22-2436 (old stub + old modules + tail placeholder Qs + closing brackets)
# Insert new 8 modules + closing `    ],\n  },\n\n`
# Keep lines 2437+ (course8Hour comment through end)

# Verify boundaries
print("Line 21 (0-indexed):", repr(lines[21][:60]))
print("Line 22 (0-indexed):", repr(lines[22][:60]))
print("Line 2436 (0-indexed):", repr(lines[2436][:60]))
print("Line 2437 (0-indexed):", repr(lines[2437][:60]))

# Perform the splice
TAIL_CLOSE = '    ],\n  },\n\n'
new_lines = lines[:22] + [NEW_MODULES + '\n' + TAIL_CLOSE] + lines[2437:]

with open(JS_FILE, 'w', encoding='utf-8') as f:
    f.writelines(new_lines)

print("Done. Total lines:", len(new_lines))
