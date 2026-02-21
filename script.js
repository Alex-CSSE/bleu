document.addEventListener('DOMContentLoaded', function() {
    
    // --- 1. GESTION DE LA BANNIÈRE D'ALERTE (Facture) ---
    const closeBtnAlert = document.getElementById('btn-close-alert');
    const alertBanner = document.getElementById('invoice-alert');

    if (closeBtnAlert && alertBanner) {
        closeBtnAlert.addEventListener('click', () => {
            alertBanner.style.display = 'none';
        });
    }

    // --- 2. GESTION DE LA MODALE PROMO (iPhone 17) ---
    const promoModal = document.getElementById('promoModal');
    const closePromoBtn = document.getElementById('closePromoBtn');

    if (promoModal) {
        // Afficher la pub après 300ms
        setTimeout(() => {
            promoModal.style.display = "block";
        }, 300);

        // Fermer la pub
        if (closePromoBtn) {
            closePromoBtn.onclick = () => promoModal.style.display = "none";
        }
    }

    // --- 3. GESTION DU RENDEZ-VOUS (Boutiques) ---
    const apptModal = document.getElementById('appointment-modal');
    const openApptBtn = document.getElementById('open-modal-btn');
    const closeApptBtn = document.getElementById('close-appt-modal');
    const appointmentForm = document.getElementById('appointment-form');

    // Ouvrir la modale de RDV
    if (openApptBtn && apptModal) {
        openApptBtn.onclick = () => apptModal.style.display = "block";
    }

    // Fermer la modale de RDV
    if (closeApptBtn && apptModal) {
        closeApptBtn.onclick = () => apptModal.style.display = "none";
    }

    // Validation du formulaire de RDV
    if (appointmentForm) {
        appointmentForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const store = document.getElementById('appt-store').value;
            const date = document.getElementById('appt-date').value;
            const time = document.getElementById('appt-time').value;
            
            alert(`✅ C'est noté ! \n\nVotre rendez-vous est confirmé à la boutique de ${store} pour le ${date} à ${time}.`);
            apptModal.style.display = 'none';
        });
    }

    // --- 4. FERMETURE UNIVERSELLE (Clic en dehors des modales) ---
    window.addEventListener('click', (event) => {
        if (event.target == promoModal) promoModal.style.display = "none";
        if (event.target == apptModal) apptModal.style.display = "none";
    });

    // --- 5. RECHERCHE DE BOUTIQUE (Code Postal) ---
    const searchBtn = document.getElementById('btn-search-store');
    if (searchBtn) {
        searchBtn.addEventListener('click', function() {
            const cp = document.getElementById('store-input').value;
            const resultDiv = document.getElementById('store-result');
            if (cp.length === 5) {
                resultDiv.innerHTML = `<p style="color: #2ecc71; margin-top:10px;">📍 Boutique Bleu trouvée pour le secteur ${cp} ouverte jusqu'à 19h !</p>`;
            } else {
                resultDiv.innerHTML = `<p style="color: red; margin-top:10px;">Veuillez entrer un code postal valide.</p>`;
            }
        });
    }

    // --- 6. DIAGNOSTIC DE LA LIGNE ---
    const testBtn = document.getElementById('test-line-btn');
    const testResult = document.getElementById('test-result');

    if (testBtn) {
        testBtn.addEventListener('click', function() {
            testBtn.innerText = "Diagnostic en cours...";
            testBtn.disabled = true;

            setTimeout(() => {
                testBtn.innerText = "Tester ma ligne";
                testBtn.disabled = false;
                if (testResult) {
                    testResult.innerText = "✅ Votre ligne ne présente aucune anomalie. Débit optimal détecté.";
                    testResult.style.display = "block";
                    setTimeout(() => { testResult.style.display = "none"; }, 5000);
                }
            }, 2000);
        });
    }
});