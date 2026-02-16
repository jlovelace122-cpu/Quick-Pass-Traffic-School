// Courses page script

function loadCourses() {
    const coursesGrid = document.getElementById('courses-grid');
    if (!coursesGrid) return;

    // Sort states alphabetically
    const sortedStates = Object.keys(statesData).sort((a, b) => {
        return statesData[a].name.localeCompare(statesData[b].name);
    });

    sortedStates.forEach(stateKey => {
        const state = statesData[stateKey];
        const courseCard = document.createElement('div');
        courseCard.className = 'course-card';
        courseCard.innerHTML = `
            <div class="course-header">
                <h2>${state.name}</h2>
                <span class="state-abbr-badge">${state.abbreviation}</span>
            </div>
            <div class="course-body">
                <div class="course-detail">
                    <span class="label">Duration:</span>
                    <span class="value">${state.courseLength}</span>
                </div>
                <div class="course-detail">
                    <span class="label">Price:</span>
                    <span class="value price">${state.price}</span>
                </div>
                <div class="course-detail">
                    <span class="label">Status:</span>
                    <span class="value">${state.approved ? '<span class="badge-approved">Approved</span>' : '<span class="badge-pending">Pending</span>'}</span>
                </div>
                <div class="course-benefits">
                    <strong>Key Benefits:</strong>
                    <ul>
                        ${state.benefits.slice(0, 2).map(benefit => `<li>${benefit}</li>`).join('')}
                    </ul>
                </div>
            </div>
            <div class="course-footer">
                <a href="state.html?state=${stateKey}" class="btn btn-primary">View Details</a>
            </div>
        `;
        coursesGrid.appendChild(courseCard);
    });
}

document.addEventListener('DOMContentLoaded', loadCourses);
