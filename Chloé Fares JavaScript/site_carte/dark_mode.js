document.addEventListener("DOMContentLoaded", function() {
    let title = document.getElementById('mode');
    let header = document.querySelector('header');


    title.addEventListener("click", function() {
        console.log("élement cliqué")
        header.classList.toggle('header-dark');
        document.body.classList.toggle('fond'); // Change le fond du body
        document.body.classList.toggle('corp'); // Applique également la classe pour changer la couleur des textes

    })
})
