// State detail page script

function getUrlParameter(name) {
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    const regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    const results = regex.exec(location.search);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
}

function loadStateDetails() {
    const stateKey = getUrlParameter('state');
    const stateContent = document.getElementById('state-content');
    
    if (!stateKey || !statesData[stateKey]) {
        stateContent.innerHTML = `
            <div class="error-message">
                <h2>State Not Found</h2>
                <p>The requested state information could not be found.</p>
                <a href="index.html" class="btn btn-primary">Return to Home</a>
            </div>
        `;
        return;
    }
    
    const state = statesData[stateKey];
    
    stateContent.innerHTML = `
        <div class="state-header">
            <div class="state-title">
                <h1>${state.name} Traffic School</h1>
                <span class="state-badge">${state.abbreviation}</span>
            </div>
            <div class="state-price">
                <span class="price-label">Course Price:</span>
                <span class="price-amount">${state.price}</span>
            </div>
        </div>
        
        <div class="state-info-grid">
            <div class="info-card">
                <h2>Course Information</h2>
                <div class="info-item">
                    <strong>Duration:</strong> ${state.courseLength}
                </div>
                <div class="info-item">
                    <strong>Status:</strong> ${state.approved ? '<span class="badge-approved">State Approved</span>' : '<span class="badge-pending">Pending Approval</span>'}
                </div>
                <div class="info-item">
                    <strong>Format:</strong> Online, Self-Paced
                </div>
            </div>
            
            <div class="info-card">
                <h2>Requirements</h2>
                <ul class="requirements-list">
                    ${state.requirements.map(req => `<li>${req}</li>`).join('')}
                </ul>
            </div>
            
            <div class="info-card">
                <h2>Benefits</h2>
                <ul class="benefits-list">
                    ${state.benefits.map(benefit => `<li>${benefit}</li>`).join('')}
                </ul>
            </div>
        </div>
        
        <div class="cta-section">
            <h2>Ready to Get Started?</h2>
            <p>Complete your ${state.name} traffic school course today!</p>
            <button class="btn btn-large btn-success" onclick="enrollCourse('${stateKey}')">Enroll Now - ${state.price}</button>
        </div>
        
        <div class="additional-info">
            <h2>What to Expect</h2>
            <div class="info-steps">
                <div class="info-step">
                    <h3>📚 Course Content</h3>
                    <p>Comprehensive defensive driving material covering traffic laws, safe driving practices, and accident prevention techniques specific to ${state.name}.</p>
                </div>
                <div class="info-step">
                    <h3>📝 Quizzes & Exams</h3>
                    <p>Interactive quizzes throughout the course and a final exam. Unlimited retakes available to ensure your success.</p>
                </div>
                <div class="info-step">
                    <h3>🎓 Certificate</h3>
                    <p>Upon completion, receive your official certificate of completion, which can be submitted to the court or DMV as required.</p>
                </div>
            </div>
        </div>
    `;
}

function enrollCourse(stateKey) {
    alert(`Enrollment for ${statesData[stateKey].name} traffic school would begin here. This is a demo application.`);
}

// Load state details when page loads
document.addEventListener('DOMContentLoaded', loadStateDetails);
