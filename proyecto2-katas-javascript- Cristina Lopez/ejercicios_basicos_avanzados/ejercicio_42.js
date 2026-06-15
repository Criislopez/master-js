const fantasticFour = [
  "La antorcha humana",
  "Mr. Fantástico",
  "La mujer invisible",
  "La cosa",
];

let guardarPosicion = 0

function swap(array, index1, index2) {
    guardarPosicion = array[index1];
    array[index1] = array[index2]; 
    array[index2] = guardarPosicion;
    return array
}

console.log(swap(fantasticFour, 0,2));
