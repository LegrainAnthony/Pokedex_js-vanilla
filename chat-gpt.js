const divContainer = document.querySelector("#main_container");
const formLanguage = document.querySelector("#header__lang_form");
const buttonsLanguage = document.querySelectorAll(".header__langPokedex");

formLanguage.addEventListener("submit", handleFormSubmit);

async function handleFormSubmit(event) {
  event.preventDefault();
  const language = new FormData(formLanguage).get("language");
  const pokemonData = await fetchPokemonData(language);
  renderPokemonCards(pokemonData);
}

async function fetchPokemonData(language) {
  const response = await fetch(
    `https://pokeapi.co/api/v2/pokemon?limit=10&offset=0&expand=1`
  );
  const pokemonData = await response.json();
  for (let pokemon of pokemonData.results) {
    const response = await fetch(pokemon.url);
    const pokemonDetails = await response.json();
    const speciesResponse = await fetch(pokemonDetails.species.url);
    const speciesDetails = await speciesResponse.json();
    pokemon.name =
      speciesDetails.names.find((name) => name.language.name === language)
        ?.name || pokemon.name;
    pokemon.description =
      speciesDetails.flavor_text_entries.find(
        (entry) => entry.language.name === language
      )?.flavor_text || "";
    pokemon.image = pokemonDetails.sprites.front_default;
    pokemon.types = pokemonDetails.types.map((type) => type.type.name);
  }
  return pokemonData;
}

function renderPokemonCards(pokemonData) {
  divContainer.innerHTML = "";
  for (let pokemon of pokemonData.results) {
    const card = createPokemonCard(pokemon);
    divContainer.appendChild(card);
  }
}

function createPokemonCard(pokemon) {
  const typesHTML = pokemon.types
    .map((type) => `<p class="${type}_color">${type}</p>`)
    .join("");
  return `
    <div class="main__card_contenair">
      <img src="${pokemon.image}" alt="${pokemon.name}" class="main__card__image">
      <p class="main__card__title">${pokemon.name}</p>
      <p class="main__card_flavorText">${pokemon.description}</p>
      <div class="main__contenair__type">${typesHTML}</div>
    </div>
  `;
}

function handleClickButtonLanguage(event) {
  if (event.target.matches(".header__langPokedex")) {
    formLanguage.submit();
  }
}

buttonsLanguage.forEach((button) =>
  button.addEventListener("click", handleClickButtonLanguage)
);

formLanguage.language.value = "en";
formLanguage.dispatchEvent(new Event("submit"));
