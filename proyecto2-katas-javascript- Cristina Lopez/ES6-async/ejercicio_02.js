//2.1
const pointsList = [32, 54, 21, 64, 75, 43]

const pointsList2 = [...pointsList]

console.log(pointsList2);


//2.2
const toy = {name: 'Bus laiyiar', date: '20-30-1995', color: 'multicolor'};

const toy2 = {...toy}
console.log(toy2);

//2.3
const pointsList3 = [32, 54, 21, 64, 75, 43];
const pointsList4 = [54,87,99,65,32];

const points = [...pointsList3, ...pointsList4]

console.log(points);

//2.4
const toy3 = {name: 'Bus laiyiar', date: '20-30-1995', color: 'multicolor'};
const toyUpdate = {lights: 'rgb', power: ['Volar like a dragon', 'MoonWalk']}


const toys = {...toy3, ...toyUpdate}
console.log(toys);


//2.5
const colors = ['rojo', 'azul', 'amarillo', 'verde', 'naranja'];

const newColors = [
  ...colors.slice(0, 2), 
  ...colors.slice(3)     
];

console.log(newColors);

