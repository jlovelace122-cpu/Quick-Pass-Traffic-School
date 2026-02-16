// Utility functions shared across the application

// Get URL parameters using URLSearchParams (more secure and standard)
function getUrlParameter(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name) || '';
}

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { getUrlParameter };
}
