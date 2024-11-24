//Selectionne tout les li et converti en tableau
var collect = document.getElementsByTagName("li");
var arr = Array.prototype.slice.call(collect); //Convertit la collection HTML en tableau

arr.forEach((element) => {
    element.onclick = afficher; //Ajout de l'evenement click pour afficher
});

// Definit la fonction afficher
function afficher() {
    // Retire la classe tab-active des li
    var collect = document.getElementsByTagName("li");
    var arr = Array.from(collect); // Convertit en tableau pour utiliser forEach
    
    arr.forEach(element => {
        element.classList.remove("tab-active"); // Supprime tab-active
    });

    // Retire la classe active des div
    collect = document.getElementsByTagName("div");
    arr = Array.from(collect); // Convertit en tableau pour utiliser forEach
    arr.forEach(element => {
        element.classList.remove("active"); // Supprime active
    })

    // Ajoute la classe tab active à l'élément cliqué 
    this.classList.add("tab-active");

    if (this.classList.contains("tab-content1")){
        var block = document.getElementsByClassName("content1");
        block[0].classList.add("active");
    } else if (this.classList.contains("tab-content2")){
        var block = document.getElementsByClassName("content2");
        block[0].classList.add("active");
    } else {
        var block = document.getElementsByClassName("content3");
        block[0].classList.add("active");
    }
}