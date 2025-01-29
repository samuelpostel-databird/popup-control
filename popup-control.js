<script>
// Webflow Popup Session Control
// Ce script contrôle l'affichage d'un popup avec une animation gérée directement dans le script
// ID du popup : popup-gen-ai

function initPopupControl() {
    console.log("Script lancé");
    const popup = document.getElementById('popup-gen-ai');
    console.log("Popup trouvée ?", popup);

    if (popup) {
        // Vérifier si la popup a déjà été montrée cette session
        if (sessionStorage.getItem('popupShown')) {
            console.log("Popup déjà affichée dans cette session");
            return;
        }

        // Appliquer les styles pour préparer l'affichage
        popup.style.display = 'block';
        popup.style.opacity = '0';
        popup.style.transition = 'opacity 0.5s ease-in-out';

        // Afficher la popup avec une animation
        setTimeout(() => {
            popup.style.opacity = '1';
        }, 100);

        // Ajouter un gestionnaire d'événement pour fermer la popup
        const closeButton = popup.querySelector('.close-button');
        if (closeButton) {
            closeButton.addEventListener('click', () => {
                console.log("Popup fermé");
                popup.style.opacity = '0';
                
                // Masquer complètement après l'animation
                setTimeout(() => {
                    popup.style.display = 'none';
                }, 500);

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
