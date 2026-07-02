async function getRandomPokemon() {
  const randomId = Math.floor(Math.random() * 1025) + 1;

  const response = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${randomId}`
  );

  const data = await response.json();

  const img = document.querySelector(".random-image");
  img.src = data.sprites.front_default;
}

getRandomPokemon();