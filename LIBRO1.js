let currentPair = 0; // Commence à 0 pour inclure la couverture
const totalPairs = 6; // Nombre total de paires de pages

// Gestionnaire d'événement pour le bouton "Prev"
document.getElementById('prev').addEventListener('click', () => {
    if (currentPair > 0) {
        if (currentPair === 1) {
            // Ferme la couverture si on revient à la première page
            document.getElementById('cover').classList.remove('open');
            document.getElementById('book').classList.remove('open');
        } else {
            // Cache la paire de pages actuelle
            document.getElementById(`pair${currentPair}`).classList.remove('active');
        }
        currentPair--; // Décrémente le compteur de paires
        if (currentPair > 0) {
            // Affiche la nouvelle paire de pages
            document.getElementById(`pair${currentPair}`).classList.add('active');
        }
    }
});

// Gestionnaire d'événement pour le bouton "Next"
document.getElementById('next').addEventListener('click', () => {
    if (currentPair === 0) {
        // Ouvre la couverture si on est à la première page
        document.getElementById('cover').classList.add('open');
        document.getElementById('book').classList.add('open');
    } else if (currentPair < totalPairs) {
        // Cache la paire de pages actuelle
        document.getElementById(`pair${currentPair}`).classList.remove('active');
    }
    if (currentPair < totalPairs) {
        currentPair++; // Incrémente le compteur de paires
        // Affiche la nouvelle paire de pages
        document.getElementById(`pair${currentPair}`).classList.add('active');
    }
});

// Affiche initialement la première paire de pages
document.getElementById('pair1').classList.add('active');
