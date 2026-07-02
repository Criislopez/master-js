const select = document.querySelector("#character-list");
const image = document.querySelector(".character-image");

fetch("https://thronesapi.com/api/v2/Characters")
  .then((response) => response.json())
  
  .then((characters) => {


    select.characters = characters;

    characters.forEach((character) => {
      const option = document.createElement("option");

      option.textContent = character.fullName;
      option.value = character.id;

      select.appendChild(option);
    });

    image.src = characters[0].imageUrl;
    image.alt = characters[0].fullName;
  });

select.addEventListener("change", (ev) => {
  const selectedId = Number(ev.target.value);

  const character = select.characters.find(
    (character) => character.id === selectedId
  );

  image.src = character.imageUrl;
  image.alt = character.fullName;
});