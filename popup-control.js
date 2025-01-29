<script>
// Webflow Popup Session Control
// Ce script contrôle l'affichage d'un popup pour qu'il n'apparaisse qu'une fois par session
// ID du popup : popup-gen-ai
// Classe du popup : popup_gen_ai

function initPopupControl() {
    console.log("Script lancé");
    const popup = document.getElementById('popup-gen-ai');
    console.log("Popup trouvée ?", popup);

    if (popup) {
        // Si la popup a déjà été montrée dans la session
        if (sessionStorage.getItem('popupShown')) {
            console.log("Forcer la désactivation de la popup");
            popup.classList.remove('popup_gen_ai');
            popup.style.display = "none"; // Masquer la popup immédiatement
            return; // Ne pas continuer l'exécution
        }

        // Sinon, afficher la popup pour la première fois
        console.log("Affichage du popup");
        popup.classList.add('popup_gen_ai');

        // Ajouter un gestionnaire d'événement pour fermer la popup
        const closeButton = popup.querySelector('.close-button');
        if (closeButton) {
            closeButton.addEventListener('click', () => {
                console.log("Popup fermé");
                popup.classList.remove('popup_gen_ai');
                popup.style.display = "none"; // Masquer la popup
                sessionStorage.setItem('popupShown', 'true');
            });
        }
    } else {
        console.log("Popup non trouvé dans le DOM");
    }
}

// Exécuter lorsque le document est complètement chargé
window.onload = function() {
    initPopupControl();
};
</script>
