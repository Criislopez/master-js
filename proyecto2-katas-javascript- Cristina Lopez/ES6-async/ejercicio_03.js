//3.1
const users = [
	{id: 1, name: 'Abel'},
	{id:2, name: 'Julia'},
	{id:3, name: 'Pedro'},
	{id:4, name: 'Amanda'}
];

const names = users.map((user) => user.name)

console.log(names);

//3.2
const users2 = [
	{id: 1, name: 'Abel'},
	{id:2, name: 'Julia'},
	{id:3, name: 'Pedro'},
	{id:4, name: 'Amanda'}
];

const names2 = users2.map((user2) => {
    if(user2.name.startsWith("A")){
        user2.name = "Anacleto"
    }
    return user2.name
});
console.log(names2);

//3.3
const cities = [
	{isVisited:true, name: 'Tokyo'},
	{isVisited:false, name: 'Madagascar'},
	{isVisited:true, name: 'Amsterdam'},
	{isVisited:false, name: 'Seul'}
];

const cities2 = cities.map((city) => {
    if(city.isVisited === true) {
        return city.name + " (Visitado)."
    }
    return city.name
})

console.log(cities2);
