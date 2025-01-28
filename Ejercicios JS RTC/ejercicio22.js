//?Usa un for para remplazar todas las comidas que no sean veganas con las frutas del array de frutas. Recuerda no usar frutas duplicadas. Finalmente, imprime el array resultante.

const fruits = ["Strawberry", "Banana", "Orange", "Apple"];
const foodSchedule = [
  { name: "Heura", isVegan: true },
  { name: "Salmon", isVegan: false },
  { name: "Tofu", isVegan: true },
  { name: "Burger", isVegan: false }, // i = 3
  { name: "Rice", isVegan: true },
  { name: "Pasta", isVegan: true },
];

for (let i = foodSchedule.length - 1; i >= 0; i--) {
  let food = foodSchedule[i];
  for (let j = 0; j < fruits.length; j++) {
    if (food.isVegan === false && !foodSchedule.includes(fruits[j])) {
      foodSchedule.splice(i, 1, fruits[j])
    }
  }
  
}
console.log(foodSchedule);