const words = [
  'code',
  'repeat',
  'eat',
  'sleep',
  'code',
  'enjoy',
  'sleep',
  'code',
  'enjoy',
  'sleep',
  'code'
];
function repeatCounter(list , word) {
  contador = 0
  for (let i = 0; i<=list.length; i++){
        if(list[i] === word){
            contador++
        }
  }
  return contador
}

console.log(repeatCounter(words, "sleep"));

