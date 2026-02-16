// Main JavaScript file for interactivity

// Load states into the grid
function loadStates() {
    const stateGrid = document.getElementById('state-grid');
    if (!stateGrid) return;

    Object.keys(statesData).forEach(stateKey => {
        const state = statesData[stateKey];
        const stateCard = document.createElement('div');
        stateCard.className = 'state-card';
        stateCard.innerHTML = `
            <div class="state-abbr">${state.abbreviation}</div>
            <h3>${state.name}</h3>
            <p class="course-info">${state.courseLength} Course</p>
            <p class="price">${state.price}</p>
            <a href="state.html?state=${stateKey}" class="btn btn-primary">View Details</a>
        `;
        stateGrid.appendChild(stateCard);
    });
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    loadStates();
    
    // Add smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});
