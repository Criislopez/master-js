const albums = [
  "De Mysteriis Dom Sathanas",
  "Reign of Blood",
  "Ride the Lightning",
  "Painkiller",
  "Iron Fist",
];


const container = document.createElement("div");
const title = document.createElement("h1");
const ul = document.createElement("ul");

title.textContent = "🎸 Álbumes de Metal";

for (const album of albums) {
    const li = document.createElement("li");
    li.textContent = album;

    li.style.padding = "10px";
    li.style.margin = "10px 0";

    ul.appendChild(li);
}

container.appendChild(title);
container.appendChild(ul);

document.body.appendChild(container);