//2.1
const div = document.createElement("div")
document.body.appendChild(div)

//2.2
const divParrafo = document.createElement("div")
const parrafo = document.createElement("p")

parrafo.textContent = "Holiiis"

divParrafo.appendChild(parrafo)

document.body.appendChild(divParrafo);

//2.3
const divLoop = document.createElement("div");

for (let i= 0; i < 6; i++ ){
    const parrafoLoop = document.createElement("p");
    parrafoLoop.textContent = "Párrafo " + i;

    divLoop.appendChild(parrafoLoop);
}

document.body.appendChild(divLoop);

//2.4
const parrafoDinamico = document.createElement("p");

parrafoDinamico.textContent = "Soy dinámico!";

document.body.appendChild(parrafoDinamico);

//2.5
const h2 = document.createElement("h2")
h2.classList.add(".fn-insert-here");
h2.textContent = "Wubba Luba dub dub";

document.body.appendChild(h2);

//2.6
const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];

const array = document.createElement("ul");

for(let app of apps){
    const li = document.createElement("li");
    li.textContent = app;
    array.appendChild(li);
}

document.body.appendChild(array);

//2.7
const borrar = document.querySelectorAll(".fn-remove-me");

for (const borrado of borrar) {
    borrado.remove()
}

//2.8 --> Lo puse entre el loop y el soy dinámico
const elementoIntermedio = document.createElement("p")
elementoIntermedio.textContent = 'Voy en medio!' 

divLoop.after(elementoIntermedio)

//2.9
const dentro = document.querySelectorAll(".fn-insert-here")

for (const element of dentro) {
    const parrafosDentro  = document.createElement("p")
    parrafosDentro.textContent = "Voy dentro!"

    element.appendChild(parrafosDentro)
}