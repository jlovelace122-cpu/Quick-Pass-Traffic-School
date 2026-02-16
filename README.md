# Quick Pass Traffic School

Online Traffic School supporting multiple states with state-approved defensive driving courses.

## Features

- **Multi-State Support**: Courses available for 10+ states including CA, TX, FL, NY, IL, PA, OH, GA, NC, and MI
- **State-Specific Content**: Each state has customized requirements, course duration, and pricing
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **User-Friendly Interface**: Easy navigation and state selection
- **Self-Paced Learning**: Complete courses at your own convenience

## Supported States

- **California (CA)** - 8 hours - $24.95
- **Texas (TX)** - 6 hours - $24.95
- **Florida (FL)** - 4 hours - $19.95
- **New York (NY)** - 6 hours - $24.95
- **Illinois (IL)** - 4 hours - $19.95
- **Pennsylvania (PA)** - 6 hours - $24.95
- **Ohio (OH)** - 6 hours - $24.95
- **Georgia (GA)** - 6 hours - $24.95
- **North Carolina (NC)** - 8 hours - $24.95
- **Michigan (MI)** - 4 hours - $19.95

## Installation

1. Clone the repository:
```bash
git clone https://github.com/jlovelace122-cpu/Quick-Pass-Traffic-School.git
cd Quick-Pass-Traffic-School
```

2. Install dependencies:
```bash
npm install
```

3. Start the server:
```bash
npm start
```

4. Open your browser and navigate to:
```
http://localhost:3000
```

## Project Structure

```
Quick-Pass-Traffic-School/
├── public/
│   ├── css/
│   │   └── styles.css          # Main stylesheet
│   ├── js/
│   │   ├── states.js           # State data and configuration
│   │   ├── main.js             # Main JavaScript functionality
│   │   ├── state-detail.js     # State detail page logic
│   │   └── courses.js          # Courses page logic
│   ├── index.html              # Landing page
│   ├── state.html              # State-specific details page
│   ├── courses.html            # All courses listing
│   └── about.html              # About page
├── server.js                    # Express server
├── package.json
└── README.md
```

## Usage

### Selecting a State
1. Visit the homepage
2. Browse the available states in the state selection grid
3. Click on any state card to view detailed information

### Viewing Course Details
- Each state page displays:
  - Course duration and pricing
  - State-specific requirements
  - Benefits of completing the course
  - Enrollment options

### Navigation
- **Home**: Landing page with state selection
- **Courses**: View all available courses by state
- **About**: Learn more about Quick Pass Traffic School

## Adding New States

To add support for a new state, edit `public/js/states.js` and add a new entry:

```javascript
"state-key": {
    name: "State Name",
    abbreviation: "ST",
    courseLength: "X hours",
    price: "$XX.XX",
    requirements: [
        "Requirement 1",
        "Requirement 2"
    ],
    benefits: [
        "Benefit 1",
        "Benefit 2"
    ],
    approved: true
}
```

## Technologies Used

- **Frontend**: HTML5, CSS3, Vanilla JavaScript
- **Backend**: Node.js with Express
- **Design**: Responsive CSS Grid and Flexbox layouts
- **Icons**: Unicode emojis for simple, accessible icons

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## License

MIT License - see LICENSE file for details

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## Support

For questions or issues, please open an issue on GitHub.