// 1.
const jedi = {
    nombre: "Luke Skywalker", 
    edad: 19
};

jedi.edad = 25

console.log(jedi.edad)

// 2. 
const leiaOrgana = {
    nombre: "Leia",
    apellido:"Organa",
    edad:20
}
console.log("Soy " + leiaOrgana.nombre + " " + leiaOrgana.apellido + ", tengo " + leiaOrgana.edad + " años y soy una princesa de Alderaan.");

// 3. 
const sable1 = {
    nombre: "Shoto de Yoda", 
    precio: 1500
};

const sable2 = {
    nombre: "Sable de Darth Vader", 
    precio: 2000
};

console.log("Total de los dos sables: " + sable1.precio+sable2.precio)

// 4.
let precioBaseGlobal = 10000;

// Cambia el precio base en esta linea modificando la variable
precioBaseGlobal = 25000;

const nave1 = {
    nombre: "Ala-X", 
    precioBase: 50000, 
    precioFinal: 60000
};
const nave2 = {
    nombre: "Halcón Milenario", 
    precioBase: 70000, 
    precioFinal: 80000

};

// Tu código para actualizar el precio final de cada nave aquí...
nave1.precioFinal = precioBaseGlobal + nave1.precioBase
nave2.precioFinal = precioBaseGlobal + nave2.precioBase

console.log(nave1)
console.log(nave2)