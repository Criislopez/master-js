const { createElement } = require("react");

//3.1
const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];

const ul = document.createElement("ul");

for (const country of countries) {
    const li = document.createElement("li");
    li.textContent = country;

    ul.appendChild(li);

}

document.body.appendChild(ul);

//3.2
const remove = document.querySelectorAll(".fn-remove-me");

for (const element of remove) {
    element.remove();
}

//3.3
const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];

const div = document.querySelector('[data-function="printHere"]');

const ul = document.createElement("ul");

for (const car of cars) {
    const li = document.createElement("li");
    li.textContent = car;

    ul.appendChild(li);
}

div.appendChild(ul);

//3.4

const countries = [
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5'}
];

for (const country of countries) {
    const div = document.createElement("div");

    const h4 = document.createElement("h4");
    h4.textContent = country.title;

    const image = document.createElement("img");
    image.src=country.imgUrl;
    image.alt = country.title;

    div.appendChild(h4)
    div.appendChild(image)
    document.body.appendChild(div);
}

//3.5
const btnBorrar = document.createElement("button");
btnBorrar.textContent = "Borrar último";

btnBorrar.addEventListener("click", () => {
    const divs = document.querySelectorAll("div");

    if (divs.length > 0) {
        divs[divs.length - 1].remove();
    }
});

document.body.appendChild(btnBorrar);

//3.6
for (const country of countries) {
    const div = document.createElement("div");
    const h4 = document.createElement("h4");
    const image = document.createElement("img");
    const button = document.createElement("button");

    h4.textContent = country.title;
    image.src = country.imgUrl;
    image.alt = country.title;

    button.textContent = "Eliminar";

    button.addEventListener("click", () => {
        div.remove();
    });

    div.appendChild(h4);
    div.appendChild(image);
    div.appendChild(button);

    document.body.appendChild(div);
}