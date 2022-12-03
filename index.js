const pokemons = ['pikachu', 'bulbizard', 'poussifeu', 'bulbizar', "tiplouf", 'florentin', 'salameche'];
const chifres = ['1', '2', '3', '4', "5", '6', '7'];
// Récupéré la div contenair.

const divContenair = document.querySelector("#contenair");

// créer une fonction qui va créer des paragraphe en lui ajoutant du texte.

function addParagraphe(value){
    let newP = document.createElement('p');//crée une balise <p>
    newP.textContent = value;
    return newP;
}

// pour chaque élément du tableaux ajouté le paragraphe au contenaire.

for(let i = 0; i < pokemons.length; i++){
    let paragraph = addParagraphe(pokemons[i]);
    paragraph.classList.add('main_title')
    divContenair.append(paragraph);
}

for(let i = 0; i < chifres.length; i++){
    let paragraph = addParagraphe(i);
    divContenair.append(paragraph);
}