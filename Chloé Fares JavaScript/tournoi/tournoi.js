class Guerrier {
    constructor(nom, attaque, precision, vie) {
        this.nom = nom;
        this.attaque = attaque;
        this.precision = precision;
        this.vie = vie;
    }

    functionPrecision(cible) { 
        if(Math.random()<this.precision){
            this.getAttaque(cible)
        }
    }

    getAttaque(cible) {
        cible.vie = cible.vie - this.attaque 
    }

}

let Ferox = new Guerrier('Ferox', 1, 0.5, 3);
let Moustik = new Guerrier('Moustik', 1.5, 0.75, 2);
/*nom = Ferox, attaque = 1, precision = 0.5, vie = 3 (Se refere au constructor) */

while(Ferox.vie!=0 && Moustik.vie!=0){
    Ferox.functionPrecision(Moustik)
    Moustik.functionPrecision(Ferox)
}

/* && = et; == veut dire égale */
if(Ferox.vie==0 && Moustik.vie==0){
    console.log('Match nul.')
} else if(Moustik.vie==0){
    console.log('Ferox à gagné.')
} else{
    console.log('Moustik à gagné.')
}