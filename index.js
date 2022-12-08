const divContenair = document.querySelector("#main_contenair");
const formulaireLanguage = document.querySelector("#header__lang_form");
const buttonLanguage = document.querySelectorAll(".heander__langPokedex");
const pokemonCards = document.querySelectorAll(".main__card_contenair");

formulaireLanguage.addEventListener("click", hundleSubmit);

// Je veux récupérer toutes les valeur de lobjet pour obtenir name et faire un if avec sur une boucle

function hundleSubmit(event) {
  event.preventDefault();
}

function removeElementsByClass(className) {
  const elements = document.getElementsByClassName(className);
  while (elements.length > 0) {
    elements[0].parentNode.removeChild(elements[0]);
  }
}

function hundleClickButtonLanguage() {
  for (let button of buttonLanguage) {
    button.addEventListener("click", () => {
      fetchLanguage(button.value);
    });
  }
}

function fetchLanguage(value) {
  removeElementsByClass("main__card_contenair");
  switch (value) {
    case "fr":
      fetchPokemon(4);

      break;

    case "en":
      fetchPokemon(8);

      break;

    case "ja":
      fetchPokemon(9);

      break;

    case "ko":
      fetchPokemon(2);

      break;

    case "de":
      fetchPokemon(5);

      break;

    case "es":
      fetchPokemon(6);

      break;

    case "it":
      fetchPokemon(7);

      break;

    case "zh":
      fetchPokemon(3);

      break;
  }
}

function addNewDiv() {
  let newDiv = document.createElement("div");
  return newDiv;
}

function addParagraphe(value) {
  let newP = document.createElement("p");
  newP.textContent = value;
  return newP;
}

function addImage(url) {
  let newImage = document.createElement("img");
  newImage.src = url;
  return newImage;
}

function fetchPokemon(value) {
  fetch(`https://pokeapi.co/api/v2/pokemon?limit=10&offset=0`)
    .then((response) => response.json())
    .then((pokemons) => {
      pokemons.results.map((pokemon) => {
        fetch(pokemon.url)
          .then((response) => response.json())
          .then((pokemonsDetails) => {
            fetch(
              `https://pokeapi.co/api/v2/pokemon-species/${pokemonsDetails.id}/`
            )
              .then((response) => response.json())
              .then((pokemonsSpeciesDetails) => {
                let newDiv = addNewDiv();

                let pokemonName = addParagraphe(
                  pokemonsSpeciesDetails.names[value].name
                );
                pokemonName.classList.add("main__card__title");

                let pokemonDescription = addParagraphe(
                  pokemonsSpeciesDetails.flavor_text_entries[value].flavor_text
                );
                pokemonDescription.classList.add("main__card_flavorText");
                pokemonDescription.classList.add(
                  "main__card_flavorText--display"
                );
                let image = addImage(pokemonsDetails.sprites.front_default);
                image.classList.add("main__card__image");

                let divTypeContenair = addNewDiv();
                divTypeContenair.classList.add("main__contenair__type");

                pokemonsDetails.types.map((typeOfPokemon) => {
                  fetch(typeOfPokemon.type.url)
                    .then((response) => response.json())
                    .then((typeOfPokemonDetails) => {
                      let pokeType = addParagraphe(
                        typeOfPokemonDetails.names[value - 1].name
                      );
                      pokeType.classList.add(
                        `${typeOfPokemon.type.name}_color`
                      );

                      divTypeContenair.append(pokeType);
                    });
                });

                newDiv.append(image);
                newDiv.append(pokemonName);
                newDiv.append(pokemonDescription);
                newDiv.append(divTypeContenair);
                newDiv.classList.add("main__card_contenair");
                newDiv.addEventListener("click", () => {
                  newDiv.classList.toggle("main__card_contenair--toggle");
                  if (
                    pokemonDescription.classList.contains(
                      "main__card_flavorText--display"
                    )
                  ) {
                    setTimeout(() => {
                      pokemonDescription.classList.toggle(
                        "main__card_flavorText--display"
                      );
                    }, 300);
                  } else {
                    pokemonDescription.classList.toggle(
                      "main__card_flavorText--display"
                    );
                  }
                });
                divContenair.append(newDiv);
              });
          });
      });
    });
}

fetchPokemon(8);
hundleClickButtonLanguage();
