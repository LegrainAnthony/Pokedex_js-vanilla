/* 
* j'initie un tableaux avec des pokemons à l'intérieur qui s'apelle pokemons
* je séléctionne la div dans laquelle je vais vouloir injécté mes pokémons
*/

const pokemons = ['pikachu', 'bulbizard', 'poussifeu', 'bulbizar', "tiplouf", 'florentin'];
const contenair = document.querySelector('#contenair');

/* 
* je déclare une fonction qui va :
* créer un element html "paragraph"
* lui ajouter du texte qui sera le paramètre de la fonction
* inséré ce text à l'intérieur du paragraph
* puis return le resultat de la variable
*/


function addElement (value) {
    const newParagraph = document.createElement("p");
    const newContent = document.createTextNode(value);
    newParagraph.appendChild(newContent)
    return newParagraph
}

/* 
* j'appelle mon tableaux "pokemons" et j'utilise une méthode qui s'apelle map (C'est une boucle for fais exprès pour bouclé sur chaques valeurs du tableaux);
* chaque boucle va créer un nouvelle élément grâce à la fonction en lui passant le nom du pokemon sur laquel map boucle
* puis va linséré dans notre div contenaire dans le HTML
*/


pokemons.map(pokemon => {
    const newELM = addElement(pokemon);
    contenair.appendChild(newELM)
})

// l'quivalent en for c'est ça le resultat est le même

// for (i = 0; i < pokemons.length; i++) {
//     const newELM = addElement(pokemons[i]);
//     contenair.appendChild(newELM)
// }
console.log("test")