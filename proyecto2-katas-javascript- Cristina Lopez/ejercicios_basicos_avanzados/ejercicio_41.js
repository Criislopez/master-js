function rollDice(carasDado){
    let resultadoTirada = Math.floor(Math.random() * carasDado) + 1
    return resultadoTirada
}

console.log(rollDice(8));
