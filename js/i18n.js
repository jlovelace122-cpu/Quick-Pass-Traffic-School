// Simple i18n translation system (no external dependencies)
let currentLanguage = localStorage.getItem('preferredLanguage') || 'en';
let translations = {};

// Load translations
async function loadTranslations() {
    try {
        const [en, es, pt] = await Promise.all([
            fetch('locales/en.json').then(r => r.json()),
            fetch('locales/es.json').then(r => r.json()),
            fetch('locales/pt.json').then(r => r.json())
        ]);
        
        translations = { en, es, pt };
        console.log('Translations loaded successfully');
    } catch (error) {
        console.error('Error loading translations:', error);
        translations = { en: {}, es: {}, pt: {} };
    }
}

function t(key) {
    const keys = key.split('.');
    let value = translations[currentLanguage];
    
    for (const k of keys) {
        if (value && typeof value === 'object') {
            value = value[k];
        } else {
            return key; // Return key if translation not found
        }
    }
    
    return value || key;
}

function setLanguage(lang) {
    if (translations[lang]) {
        currentLanguage = lang;
        localStorage.setItem('preferredLanguage', lang);
        updatePageLanguage();
        updateFormLabels();
    }
}

function getLanguage() {
    return currentLanguage;
}

function updatePageLanguage() {
    // Page title and subtitle
    const pageTitle = document.getElementById('pageTitle');
    const pageSubtitle = document.getElementById('pageSubtitle');
    if (pageTitle) pageTitle.textContent = t('page.title');
    if (pageSubtitle) pageSubtitle.textContent = t('page.subtitle');

    // Update language selector buttons
    document.querySelectorAll('.language-selector button').forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.lang === currentLanguage) {
            btn.classList.add('active');
        }
    });
}

function updateFormLabels() {
    // Security notice
    const securityTitle = document.querySelector('.security-notice strong');
    const securityDesc = document.querySelector('.security-notice p');
    if (securityTitle) securityTitle.textContent = t('security.title');
    if (securityDesc) securityDesc.textContent = t('security.description');

    // Intro text
    const introPs = document.querySelectorAll('.intro-text p');
    if (introPs[0]) introPs[0].textContent = t('intro.text');
    if (introPs[1]) {
        introPs[1].innerHTML = `<strong>${t('intro.important')}</strong>`;
    }

    // Contact Information section
    const contactTitle = document.querySelector('.form-section:nth-of-type(1) .section-title');
    if (contactTitle) {
        const svg = contactTitle.querySelector('svg');
        contactTitle.textContent = t('contact.section');
        if (svg) contactTitle.prepend(svg);
    }

    // Update all labels
    updateLabel('firstName', t('contact.firstName'));
    updateLabel('middleInitial', t('contact.middleInitial'));
    updateLabel('lastName', t('contact.lastName'));
    updateLabel('address1', t('contact.streetAddress'));
    updateLabel('address2', t('contact.aptSuite'));
    updateLabel('city', t('contact.city'));
    updateLabel('state', t('contact.state'));
    updateLabel('zip', t('contact.zip'));
    updateLabel('dayPhone', t('contact.daytimePhone'));
    updateLabel('eveningPhone', t('contact.eveningPhone'));
    updateLabel('email', t('contact.email'));
    updateLabel('confirmEmail', t('contact.confirmEmail'));

    // Course Selection
    const courseStateSelect = document.getElementById('courseStateSelect');
    const courseSelect = document.getElementById('courseSelect');
    if (courseStateSelect) {
        const courseTitle = courseStateSelect.closest('.form-section').querySelector('.section-title');
        if (courseTitle) {
            const svg = courseTitle.querySelector('svg');
            courseTitle.textContent = t('course.section');
            if (svg) courseTitle.prepend(svg);
        }
        courseStateSelect.previousElementSibling.textContent = t('course.selectState') + ' ' + t('common.required');
    }
    if (courseSelect) {
        courseSelect.previousElementSibling.textContent = t('course.selectCourse') + ' ' + t('common.required');
    }

    // Update state selects
    document.querySelectorAll('select[name="State"], select[name="DLNState"], select[id="courseStateSelect"]').forEach(select => {
        const firstOption = select.querySelector('option[value=""]');
        if (firstOption) firstOption.textContent = t('contact.selectState');
        updateStateOptions(select);
    });

    // Arizona Section
    const arizonaSection = document.getElementById('arizonaSection');
    if (arizonaSection) {
        const h3 = arizonaSection.querySelector('h3');
        const p = arizonaSection.querySelector('p');
        if (h3) h3.innerHTML = t('arizona.section');
        if (p) p.innerHTML = `<strong>${t('arizona.important')}</strong>`;

        updateLabel('citationDate', t('arizona.citationDate'));
        updateLabel('courtDate', t('arizona.courtDate'));

        // Court date note
        const courtDateNote = document.querySelector('.court-date-note');
        if (courtDateNote) courtDateNote.innerHTML = t('arizona.courtDateNote');

        updateLabel('arizonaCounty', t('arizona.county'));
        updateLabel('arizonaCourt', t('arizona.court'));

        // County options
        const countySelect = document.getElementById('arizonaCounty');
        if (countySelect) {
            const firstOption = countySelect.querySelector('option[value=""]');
            if (firstOption) firstOption.textContent = t('arizona.selectCounty');
            
            const counties = t('arizona.counties');
            countySelect.querySelectorAll('option').forEach(option => {
                const countyKey = option.value;
                if (countyKey && counties[countyKey]) {
                    option.textContent = counties[countyKey];
                }
            });
        }

        // Court options
        const courtSelect = document.getElementById('arizonaCourt');
        if (courtSelect) {
            const firstOption = courtSelect.querySelector('option[value=""]');
            if (firstOption) firstOption.textContent = t('arizona.selectCourt');
        }

        // Eligibility checkboxes
        const h4 = arizonaSection.querySelector('.az-eligibility h4');
        if (h4) h4.textContent = t('arizona.eligibility.title');
        
        for (let i = 1; i <= 6; i++) {
            const checkbox = document.getElementById(`elig${i}`);
            if (checkbox && checkbox.nextElementSibling) {
                checkbox.nextElementSibling.textContent = t(`arizona.eligibility.elig${i}`);
            }
        }
    }

    // Driver License section
    const licenseTitle = document.querySelector('.form-section:last-of-type .section-title');
    if (licenseTitle) {
        const svg = licenseTitle.querySelector('svg');
        licenseTitle.textContent = t('license.section');
        if (svg) licenseTitle.prepend(svg);
    }

    updateLabel('licenseState', t('license.state'));
    updateLabel('licenseNumber', t('license.number'));

    // Gender
    const genderLabels = document.querySelectorAll('.radio-label');
    const genderFields = Array.from(genderLabels).filter(l => l.querySelector('input[name="Gender"]'));
    if (genderFields.length >= 2) {
        genderFields[0].textContent = '';
        genderFields[0].innerHTML = `<input type="radio" name="Gender" value="Male" required><span>${t('license.male')}</span>`;
        genderFields[1].textContent = '';
        genderFields[1].innerHTML = `<input type="radio" name="Gender" value="Female"><span>${t('license.female')}</span>`;
    }

    // Gender label
    const genderLabelText = document.querySelector('label:has(+ .radio-group-inline)');
    if (genderLabelText) genderLabelText.textContent = t('license.gender') + ' ' + t('common.required');

    // Birth date
    updateLabel('BirthMonth', t('license.birthDate') + ' ' + t('common.required'));

    // Update month/day/year selects
    const monthSelect = document.querySelector('select[name="BirthMonth"]');
    const daySelect = document.querySelector('select[name="BirthDay"]');
    const yearSelect = document.querySelector('select[name="BirthYear"]');

    const months = t('months');
    const days = t('days');
    const years = t('years');

    if (monthSelect) {
        const options = monthSelect.querySelectorAll('option');
        options.forEach((opt, idx) => {
            if (months[idx]) opt.textContent = months[idx];
        });
    }

    if (daySelect) {
        const options = daySelect.querySelectorAll('option');
        options.forEach((opt, idx) => {
            if (days[idx]) opt.textContent = days[idx];
        });
    }

    if (yearSelect) {
        const options = yearSelect.querySelectorAll('option');
        options.forEach((opt, idx) => {
            if (years[idx]) opt.textContent = years[idx];
        });
    }

    // Submit button
    const submitBtn = document.querySelector('.btn-submit');
    if (submitBtn) {
        const svg = submitBtn.querySelector('svg');
        submitBtn.textContent = t('submit.button');
        if (svg) submitBtn.appendChild(svg);
    }

    // Required note
    const requiredNote = document.querySelector('.required-note');
    if (requiredNote) requiredNote.textContent = t('common.required') + ' ' + t('submit.requiredNote');
}

function updateLabel(id, text) {
    const element = document.getElementById(id);
    if (element && element.previousElementSibling && element.previousElementSibling.tagName === 'LABEL') {
        const label = element.previousElementSibling;
        // Keep the required asterisk if it exists
        const hasRequired = label.querySelector('.required');
        if (hasRequired) {
            label.textContent = text.replace(' *', '');
            label.appendChild(hasRequired);
        } else {
            label.textContent = text;
        }
    }
}

function updateStateOptions(select) {
    const states = t('states');
    select.querySelectorAll('option').forEach(option => {
        const stateCode = option.value;
        if (stateCode && states[stateCode]) {
            option.textContent = states[stateCode];
        }
    });
}

// Initialize on DOM ready
async function initializeI18n() {
    // Load translations
    await loadTranslations();

    // Set up language change handlers
    document.querySelectorAll('.language-selector button').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const lang = e.target.dataset.lang;
            setLanguage(lang);
        });
    });

    // Initial page update
    updatePageLanguage();
    updateFormLabels();

    console.log('i18n initialized with language:', currentLanguage);
}

document.addEventListener('DOMContentLoaded', initializeI18n);

