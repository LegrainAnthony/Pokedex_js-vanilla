const divContenair = document.querySelector('#main_contenair');

function hundleSubmit(event) {
    event.preventDefault();
}

function addNewCard () {
    let newDiv = document.createElement('div');
    return newDiv
}

function addParagraphe(value){
    let newP = document.createElement('p');
    newP.textContent = value;
    return newP;
}

function addImage(url) {
    let newImage = document.createElement('img')
    newImage.src = url;
    return newImage
}

function fetchPokemon () {
    
    fetch(`https://pokeapi.co/api/v2/pokemon?limit=151&offset=0`)
    .then((response) => response.json())
    .then((data) => {
        data.results.map(pokemon => {
            
            fetch(pokemon.url)
            .then((response) => response.json())
            .then((data) => {
                
                
                let newDiv = addNewCard();
                let paragraph = addParagraphe(pokemon.name);
                let image = addImage(data.sprites.front_default);
                
                newDiv.append(paragraph);
                newDiv.append(image);
                newDiv.classList.add("main__card_contenair");
                divContenair.append(newDiv);
                
            })
        })

    });
}

fetchPokemon();
