const fruits = ["Strawberry", "Banana", "Orange", "Apple"];

const foodSchedule = [
  { name: "Heura", isVegan: true },
  { name: "Salmon", isVegan: false },
  { name: "Tofu", isVegan: true },
  { name: "Burger", isVegan: false },
  { name: "Rice", isVegan: true },
  { name: "Pasta", isVegan: true },
];


for (const diet of foodSchedule)  {
    let randomNumber = Math.floor(Math.random()*fruits.length);
    if(diet.isVegan == false){
       diet.name = fruits[randomNumber];
       diet.isVegan= true
    }
}

console.log(foodSchedule)