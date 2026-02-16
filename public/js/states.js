// State data with requirements and information
const statesData = {
    "california": {
        name: "California",
        abbreviation: "CA",
        courseLength: "8 hours",
        price: "$24.95",
        requirements: [
            "Must be 18 years or older",
            "Valid driver's license",
            "Traffic violation within last 18 months"
        ],
        benefits: [
            "Mask one point on your driving record",
            "Potential insurance discount",
            "Avoid increased insurance rates"
        ],
        approved: true
    },
    "texas": {
        name: "Texas",
        abbreviation: "TX",
        courseLength: "6 hours",
        price: "$24.95",
        requirements: [
            "Have valid Texas driver's license",
            "Eligible traffic citation",
            "Not taken course in last 12 months"
        ],
        benefits: [
            "Dismiss traffic ticket",
            "Avoid points on license",
            "Prevent insurance increase"
        ],
        approved: true
    },
    "florida": {
        name: "Florida",
        abbreviation: "FL",
        courseLength: "4 hours",
        price: "$19.95",
        requirements: [
            "Valid Florida driver's license",
            "Eligible traffic citation",
            "Course not taken in last 12 months"
        ],
        benefits: [
            "Reduce points on driving record",
            "Insurance discount eligibility",
            "Satisfy court requirements"
        ],
        approved: true
    },
    "new-york": {
        name: "New York",
        abbreviation: "NY",
        courseLength: "6 hours",
        price: "$24.95",
        requirements: [
            "Valid New York driver's license",
            "No serious violations",
            "Complete course within 18 months of violation"
        ],
        benefits: [
            "Reduce up to 4 points",
            "10% insurance reduction",
            "Valid for 3 years"
        ],
        approved: true
    },
    "illinois": {
        name: "Illinois",
        abbreviation: "IL",
        courseLength: "4 hours",
        price: "$19.95",
        requirements: [
            "Valid Illinois driver's license",
            "Court approved for ticket dismissal",
            "First time completion"
        ],
        benefits: [
            "Traffic ticket dismissal",
            "Avoid insurance increase",
            "Keep clean driving record"
        ],
        approved: true
    },
    "pennsylvania": {
        name: "Pennsylvania",
        abbreviation: "PA",
        courseLength: "6 hours",
        price: "$24.95",
        requirements: [
            "Valid Pennsylvania driver's license",
            "PennDOT approved violations",
            "Complete within court timeframe"
        ],
        benefits: [
            "Point reduction",
            "License suspension prevention",
            "Insurance benefits"
        ],
        approved: true
    },
    "ohio": {
        name: "Ohio",
        abbreviation: "OH",
        courseLength: "6 hours",
        price: "$24.95",
        requirements: [
            "Valid Ohio driver's license",
            "Court or BMV approval",
            "Eligible traffic violation"
        ],
        benefits: [
            "Point reduction",
            "Ticket dismissal",
            "Insurance savings"
        ],
        approved: true
    },
    "georgia": {
        name: "Georgia",
        abbreviation: "GA",
        courseLength: "6 hours",
        price: "$24.95",
        requirements: [
            "Valid Georgia driver's license",
            "Eligible traffic citation",
            "Once every 5 years"
        ],
        benefits: [
            "Reduce 7 points from record",
            "Insurance discount",
            "License protection"
        ],
        approved: true
    },
    "north-carolina": {
        name: "North Carolina",
        abbreviation: "NC",
        courseLength: "8 hours",
        price: "$24.95",
        requirements: [
            "Valid NC driver's license",
            "Court or DMV approval",
            "Complete within specified timeframe"
        ],
        benefits: [
            "Insurance point reduction",
            "Ticket dismissal option",
            "Insurance discount eligibility"
        ],
        approved: true
    },
    "michigan": {
        name: "Michigan",
        abbreviation: "MI",
        courseLength: "4 hours",
        price: "$19.95",
        requirements: [
            "Valid Michigan driver's license",
            "Court approved",
            "Eligible moving violation"
        ],
        benefits: [
            "Ticket dismissal",
            "Point reduction",
            "Insurance savings"
        ],
        approved: true
    }
};

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = statesData;
}
