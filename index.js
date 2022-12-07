const divContenair = document.querySelector('#main_contenair');

function hundleSubmit(event) {
    event.preventDefault();
}

function addLink () {
    let newLink = document.createElement('a');
    return newLink
}


function addNewDiv () {
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
    const result = document.querySelector('#header_input').value;
    
    fetch(`https://pokeapi.co/api/v2/pokemon?limit=${151}&offset=0`)
    .then((response) => response.json())
    .then((data) => {
        data.results.map(pokemon => {
            fetch(pokemon.url)
            .then((response) => response.json())
            .then((data) => {

                let link = addLink();
                link.href=pokemon.url;
                link.classList.add('link__color')

                let newDiv = addNewDiv();

                let paragraph = addParagraphe(pokemon.name);
                paragraph.classList.add('main__card__title');

                let image = addImage(data.sprites.front_default);
                image.classList.add('main__card__image');

                let divTypeContenair = addNewDiv();
                divTypeContenair.classList.add('main__contenair__type');

                data.types.map(typeOfPokemon =>{
                    //console.log(typeOfPokemon);
                    let pokeType = addParagraphe(typeOfPokemon.type.name);
                    pokeType.classList.add(`${typeOfPokemon.type.name}_color`);
                    
                    divTypeContenair.append(pokeType)
                })
                

                newDiv.append(image);
                newDiv.append(paragraph);
                newDiv.append(divTypeContenair);
                newDiv.classList.add("main__card_contenair");
                link.append(newDiv)
                divContenair.append(link);

                
            })
        })

    });
}

fetchPokemon();

function langFecth(){
    let test = FR.name;
    let retest = parseInt(test);
    let i =0;
    //console.log(retest);
                FR.onclick = () => { 
                    fetchPokemon();
                }
            }
                //fetch(`"https://pokeapi.co/api/v2/language/${langfr}/"`)
            
langFecth();