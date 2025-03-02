function openModal(service) {
    const modal = document.getElementById('serviceModal');
    const modalContent = document.getElementById('modalContent');
    let content = '';

    switch(service) {
        case 'mariage':
            content = `
                <h2>Service Mariage Premium</h2>
                <p>Une couverture complète et professionnelle de votre journée de mariage, de la préparation jusqu'à la soirée.</p>
                <ul>
                    <li class="modal-item"><i class="fas fa-check"></i> Consultation préalable détaillée pour planifier votre reportage</li>
                    <li class="modal-item"><i class="fas fa-check"></i> Séance d'engagement offerte (2h) avant le mariage</li>
                    <li class="modal-item"><i class="fas fa-check"></i> Couverture complète le jour J (8-12h de présence)</li>
                    <li class="modal-item"><i class="fas fa-check"></i> Minimum 500 photos retouchées en haute définition</li>
                    <li class="modal-item"><i class="fas fa-check"></i> Album photo premium (30 pages, format 30x30cm)</li>
                    <li class="modal-item"><i class="fas fa-check"></i> Galerie en ligne privée pendant 1 an</li>
                    <li class="modal-item"><i class="fas fa-check"></i> Livraison express sous 10-15 jours</li>
                    <li class="modal-item"><i class="fas fa-check"></i> Clé USB personnalisée avec toutes les photos</li>
                    <li class="modal-item"><i class="fas fa-check"></i> 20 tirages 15x20cm offerts</li>
                </ul>
                <div class="modal-price">
                    <p>Forfait à partir de 1500€</p>
                    <small>Possibilité de personnaliser la prestation selon vos besoins</small>
                </div>
            `;
            break;

        case 'portrait':
            content = `
                <h2>Service Portrait Personnalisé</h2>
                <p>Des portraits uniques qui capturent votre personnalité, que ce soit pour un usage personnel ou professionnel.</p>
                <ul>
                    <li class="modal-item"><i class="fas fa-check"></i> Séance photo d'1 heure en studio ou en extérieur</li>
                    <li class="modal-item"><i class="fas fa-check"></i> Consultation préalable pour définir vos attentes</li>
                    <li class="modal-item"><i class="fas fa-check"></i> 15 photos retouchées en haute définition</li>
                    <li class="modal-item"><i class="fas fa-check"></i> Choix parmi 30-40 photos</li>
                    <li class="modal-item"><i class="fas fa-check"></i> Conseils pour la tenue et le style</li>
                    <li class="modal-item"><i class="fas fa-check"></i> Maquillage professionnel (en option)</li>
                    <li class="modal-item"><i class="fas fa-check"></i> Livraison rapide sous 24-48h</li>
                    <li class="modal-item"><i class="fas fa-check"></i> Format web et impression inclus</li>
                </ul>
                <div class="modal-price">
                    <p>Forfait à partir de 200€</p>
                    <small>Photos supplémentaires : 20€/photo</small>
                </div>
            `;
            break;

        case 'evenement':
            content = `
                <h2>Service Événementiel Sur Mesure</h2>
                <p>Une couverture professionnelle pour vos événements d'entreprise, lancements de produits, conférences et célébrations.</p>
                <ul>
                    <li class="modal-item"><i class="fas fa-check"></i> Reportage adapté à la durée de votre événement</li>
                    <li class="modal-item"><i class="fas fa-check"></i> Photos en temps réel pour vos réseaux sociaux</li>
                    <li class="modal-item"><i class="fas fa-check"></i> Minimum 200 photos HD par événement</li>
                    <li class="modal-item"><i class="fas fa-check"></i> Support technique complet</li>
                    <li class="modal-item"><i class="fas fa-check"></i> Éclairage professionnel inclus</li>
                    <li class="modal-item"><i class="fas fa-check"></i> Licence commerciale complète</li>
                    <li class="modal-item"><i class="fas fa-check"></i> Livraison express sous 48h</li>
                    <li class="modal-item"><i class="fas fa-check"></i> Galerie privée en ligne</li>
                    <li class="modal-item"><i class="fas fa-check"></i> Format optimisé web et print</li>
                </ul>
                <div class="modal-price">
                    <p>Forfait à partir de 500€</p>
                    <small>Tarif dégressif pour les événements de plusieurs jours</small>
                </div>
            `;
            break;
    }

    modalContent.innerHTML = content;
    modal.style.display = 'flex';
    
    // Ajouter l'animation à tous les éléments li
    const items = modal.querySelectorAll('.modal-item');
    items.forEach((item, index) => {
        item.style.animation = `slideIn 0.3s forwards ${index * 0.1}s`;
    });

    setTimeout(() => {
        modal.classList.add('active');
    }, 10);

    document.body.style.overflow = 'hidden';
}



function closeModal() {
    const modal = document.getElementById('serviceModal');
    modal.classList.remove('active');
    
    // Attendre la fin de l'animation avant de cacher le modal
    setTimeout(() => {
        modal.style.display = 'none';
    }, 300);

    // Réactiver le scroll sur le body
    document.body.style.overflow = '';
}

// Fermer le modal en cliquant en dehors
window.onclick = function(event) {
    const modal = document.getElementById('serviceModal');
    if (event.target === modal) {
        closeModal();
    }
}

// Fermer le modal avec la touche Escape
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeModal();
    }
});
