const contenaire = document.querySelector('#contenair') 


function addParagraphe(value){
    let newP = document.createElement('p');
    newP.textContent = value;
    return newP;
}

function fetchPokemon (number) {
    
    fetch(`https://pokeapi.co/api/v2/pokemon?limit=${number}&offset=0`)
    .then((response) => response.json())
    .then((data) => {
        data.results.map(pokemon => {
            let paragraph = addParagraphe(pokemon.name);
            paragraph.classList.add('main_title')
            divContenair.append(paragraph);
        })
    });
    
}
