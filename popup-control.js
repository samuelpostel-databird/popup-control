// Webflow Popup Session Control
// Ce script contrôle l'affichage d'un popup pour qu'il n'apparaisse qu'une fois par session
// ID du popup : popup-gen-ai
// Classe du popup : popup_gen_ai

function initPopupControl() {
    console.log("Script lancé");
    const popup = document.getElementById('popup-gen-ai');
    console.log("Popup trouvée ?", popup);
    
    if (popup) {
        // Vérifier si la popup a déjà été montrée cette session
        if (!sessionStorage.getItem('popupShown')) {
            console.log("Affichage du popup");
            popup.classList.add('popup_gen_ai');
            
            // Ajouter un gestionnaire d'événement pour le fermer
            const closeButton = popup.querySelector('.close-button');
            if (closeButton) {
                closeButton.addEventListener('click', () => {
                    console.log("Popup fermé");
                    popup.classList.remove('popup_gen_ai');
                    sessionStorage.setItem('popupShown', 'true');
                });
            }
        } else {
            console.log("Popup déjà affiché dans cette session");
        }
    } else {
        console.log("Popup non trouvé dans le DOM");
    }
}

// Exécuter lorsque le document est complètement chargé
window.onload = function() {
    initPopupControl();
};
