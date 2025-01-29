<script>
// Webflow Popup Session Control
// Ce script contrôle l'affichage d'un popup avec animation, en conservant les styles définis dans Webflow
// ID du popup : popup-gen-ai

function initPopupControl() {
    console.log("Script lancé");
    const popup = document.getElementById('popup-gen-ai');
    console.log("Popup trouvée ?", popup);

    if (!popup) {
        console.error("Popup introuvable dans le DOM.");
        return;
    }

    // Vérifiez si le popup a déjà été affiché
    if (sessionStorage.getItem('popupShown')) {
        console.log("Popup déjà affichée dans cette session, elle ne sera pas affichée à nouveau.");
        popup.style.display = 'none'; // Assurez-vous qu'il reste masqué
        return;
    }

    // Afficher la popup avec les styles de Webflow
    popup.style.display = 'block'; // Permet à Webflow de gérer le reste (ex: transitions CSS)
    popup.style.opacity = '1'; // Si une opacité est gérée dans Webflow
    console.log("Affichage du popup avec les styles Webflow.");

    // Gestion de la fermeture
    const closeButton = popup.querySelector('.close-button');
    if (!closeButton) {
        console.error("Bouton de fermeture introuvable.");
        return;
    }

    closeButton.addEventListener('click', () => {
        console.log("Fermeture du popup demandée.");
        popup.style.opacity = '0'; // Assurez-vous que Webflow gère cette animation
        setTimeout(() => {
            popup.style.display = 'none'; // Masque complètement après l'animation
            console.log("Popup masqué.");
        }, 500); // Synchronisé avec vos animations CSS

        // Marquer le popup comme affiché
        sessionStorage.setItem('popupShown', 'true');
    });
}

// Exécuter lorsque le DOM est chargé
document.addEventListener('DOMContentLoaded', initPopupControl);
</script>
