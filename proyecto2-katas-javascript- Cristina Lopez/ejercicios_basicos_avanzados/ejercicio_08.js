const avengers = [
  "Hulk",
  "Thor",
  "Iron Man",
  "Captain A.",
  "Spiderman",
  "Captain M.",
];
function findLongestWord(stringList) {
  // Completar código
  let larga = stringList[0]

  for(let i=0; i<stringList.length; i++){

    if(larga.length < stringList[i].length){
        larga = stringList[i]
    }
  }
  return larga
}

let palabra = findLongestWord(avengers)
console.log(findLongestWord(avengers)+ "Es la palabra más larga con " + palabra.length + " caracteres")