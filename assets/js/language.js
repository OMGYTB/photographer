function changeLanguage(lang) {
    // Sauvegarde la langue sélectionnée dans localStorage
    localStorage.setItem('selectedLanguage', lang);
    
    // Met à jour tous les éléments traduisibles
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translations[lang] && translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });
}

// Fonction pour initialiser la langue au chargement de la page
function initializeLanguage() {
    const savedLanguage = localStorage.getItem('selectedLanguage') || 'fr';
    document.getElementById('languageSelect').value = savedLanguage;
    changeLanguage(savedLanguage);
}

// Ajoutez des attributs data-translate aux éléments HTML
document.addEventListener('DOMContentLoaded', function() {
    // Exemple d'ajout d'attributs aux éléments
    document.querySelector('.hero-title').setAttribute('data-translate', 'heroTitle');
    document.querySelector('.hero-subtitle').setAttribute('data-translate', 'heroSubtitle');
    document.querySelector('.cta-button').setAttribute('data-translate', 'bookButton');
    
    initializeLanguage();
});
