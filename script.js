function showPage(pageId) {
    // Cache toutes les pages
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });
    // Affiche uniquement la page sélectionnée
    document.getElementById(pageId).classList.add('active');
}

function handleSubmit(event) {
    event.preventDefault();
    
    // Récupération des données du formulaire
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        subject: document.getElementById('subject').value,
        message: document.getElementById('message').value
    };
    
    // Ici, vous pouvez ajouter votre logique d'envoi du formulaire
    console.log('Formulaire soumis :', formData);
    
    // Réinitialisation du formulaire
    event.target.reset();
    
    // Affichage d'un message de confirmation
    alert('Message envoyé avec succès ! Nous vous répondrons dans les plus brefs délais.');
}