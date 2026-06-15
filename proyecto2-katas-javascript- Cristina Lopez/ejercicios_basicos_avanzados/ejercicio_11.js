const mixedElements = [
  6,
  1,
  "Marvel",
  1,
  "hamburguesa",
  "10",
  "Prometeo",
  8,
  "Hola mundo",
];

function averageWord(list) {
  let sumaNumeros = 0
  let sumaPalabras = 0
  for(let i = 0; i < list.length; i++){
    if(typeof list[i] === "number"){
        //Numero encontrado
        sumaNumeros += list[i]
    } else if (typeof list[i] === "string") {
       //Palabra encontrada
        sumaPalabras+=list[i].length
    }
  }
  return (sumaNumeros+sumaPalabras)/list.length
}

console.log(averageWord(mixedElements))