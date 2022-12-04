const divContenair = document.querySelector('#contenair');
const inputText = document.querySelector('#fetchMax');
const form = document.querySelector('#form');

function hundleSubmit(event) {
    event.preventDefault();
}

function getinputValue(event){
    fetchPokemon(event.target.value)
    event.target.value = ''
}

form.addEventListener('submit', hundleSubmit)
inputText.addEventListener('change', getinputValue);

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
