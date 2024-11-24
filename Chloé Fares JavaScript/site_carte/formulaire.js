let form = document.querySelector('form')
console.log(form)

form.addEventListener('submit', function(event) {
    event.preventDefault();
    console.log('Envoi du form detecté !')

    let email = document.querySelector('#email')

    
    let errorContainer = document.querySelector('.error-container')
    let errorList = document.querySelector('.error-list')    
    // On a definit le errorContainer
    errorList.innerHTML = ''; // Nettoie la liste d'erreurs
    errorContainer.classList.remove('visible'); // Réinitialise l'état de visibilité (ça ne se repète pas)

    if(email.value == '') {
        console.log("email invalide") 
    } else {
        console.log('valide') // Va montrer dans la console que c'est valide
        email.classList.add('success') // Permet d'ajouter un css montrant que c'est bon
    }

    let pseudo = document.querySelector('#pseudo')

    if(pseudo.value.length <6 ) {
        console.log("pseudo invalide")

        //Je rend visible la zone d'erreur et enleve le success du pseudo s'il a existé
        errorContainer.classList.add('visible')
        pseudo.classList.remove('success')

        //Creation du message d'erreur
        let err = document.createElement('li')
        err.innerText = "Le champ pseudo doit contenir au moins 6 caractères"

        //Ajout au container
        errorList.appendChild(err)
    } else {
        pseudo.classList.add('success')
    }


    let password = document.querySelector('#password')

    let passCheck = new RegExp(
        "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[-+_!@#$%^&*., ?])^"
    );

    //Si le mdp n'a pas 10 caractère ou ne respecte pas la regex
    if(password.value.length < 10 || passCheck.test(password.value) == false) {
        // Je marque dans la console quand c'est invalide
        console.log("password invalide")

        // Je rend visible la zone d'erreur et enleve le succes du pseudo s'il a existé
        errorContainer.classList.add('visible')
        password.classList.remove('success')

        // Creation du message d'erreur
        let err = document.createElement('li')
        err.innerText = "Le mot de passe doit faire 10 caractères minimum, contenir minuscule, majuscule, chiffre, caractère spécial"

        //Ajout au container
        errorList.appendChild(err)
    }else {
        password.classList.add('success')
    }

    let passwordRepeat = document.querySelector('#passwordRepeat')
    // Definie la variable
    // chatgpt
    if (passwordRepeat.value !== password.value || passwordRepeat.value === '') {
        console.log("Les mots de passe ne correspondent pas ou sont vides");
    
        errorContainer.classList.add('visible');
        passwordRepeat.classList.remove('success');
    
        let err = document.createElement('li');
        err.innerText = "Les mots de passe doivent correspondre.";
        errorList.appendChild(err);
    } else {
        passwordRepeat.classList.add('success');
    }    
    //

    // Message que le formulaire est bien valide et à été envoyé
    let successContainer = document.querySelector('.message-success')
    successContainer.classList.remove('visible')

    if(
        pseudo.classList.contains('success') &&
        email.classList.contains('success') &&
        password.classList.contains('success') &&
        passwordRepeat.classList.contains('success')
    ) {
        successContainer.classList.add('visible')
    }
})
