const mainCharacters = [
  "Luke",
  "Leia",
  "Han Solo",
  "Chewbacca",
  "Rey",
  "Anakin",
  "Obi-Wan",
];

 

function findArrayIndex(array, text) {
    for(const caracter of array){
        if (caracter === text){
            return array.indexOf(caracter)
        }
    }
}

//Probando
console.log(findArrayIndex(mainCharacters, "Rey"));
console.log(findArrayIndex(mainCharacters, "Anakin"));
console.log(findArrayIndex(mainCharacters, "Han Solo"));



function removeItem(array, texto){
    
    array.splice(findArrayIndex(array,texto), 1)
    
    return array
}

console.log(removeItem(mainCharacters, "Rey"));