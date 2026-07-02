//4.1
console.log('EJERCICIO 4.1');
const ages = [22, 14, 24, 55, 65, 21, 12, 13, 90];

const overAge = ages.filter((age) => age > 18)

console.log(overAge);


//4.2
console.log('EJERCICIO 4.2');
const ages2 = [22, 14, 24, 55, 65, 21, 12, 13, 90];

const pares = ages2.filter((age) => age %2 === 0)

console.log(pares);

//4.3
console.log('EJERCICIO 4.3');
const streamers = [
	{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'},
	{name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'},
	{name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'},
	{name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
];

const streamersLOL = streamers.filter((stream) => stream.gameMorePlayed === 'League of Legends')

console.log(streamersLOL);

//4.4
console.log('EJERCICIO 4.4');
const streamers2 = [
	{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'},
	{name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'},
	{name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'},
	{name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
];

const streamerU = streamers2.filter((streamer) => streamer.name.includes('u'))

console.log(streamerU);

//4.5


console.log('EJERCICIO 4.5');

const streamers3 = [
	{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'},
	{name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'},
	{name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'},
	{name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
];

const result = streamers3.filter(streamer => {
    if (streamer.gameMorePlayed.includes('Legends')) {
        if (streamer.age > 35) {
            streamer.gameMorePlayed = streamer.gameMorePlayed.toUpperCase();
        }
        return true;
    }
    return false;
});

  console.log(result);
  