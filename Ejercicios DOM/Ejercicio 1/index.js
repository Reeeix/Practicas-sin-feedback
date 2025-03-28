//? 1.1 Usa querySelector para mostrar por consola el botón con la clase .showme
console.log(document.querySelector(".showme"));

//?1.2 Usa querySelector para mostrar por consola el h1 con el id #pillado
console.log(document.querySelector("#pillado"));
//?1.3 Usa querySelector para mostrar por consola todos los p
const todosMisP = document.querySelectorAll("p");
// console.log(document.querySelectorAll("p"))
for (const p of todosMisP) {
  console.log(p.textContent);
}
//?1.4 Usa querySelector para mostrar por consola todos los elementos con 
//?la clase.pokemon
const todosMisPokemon = document.querySelectorAll(".pokemon");
for (const pokemon of todosMisPokemon) {
  console.log(pokemon.textContent);
}

//?1.5 Usa querySelector para mostrar por consola todos los elementos con 
//? el atributo data-function="testMe".
const elements = document.querySelectorAll('span[data-function="testMe"]');
// console.log(elements);
for (const element of elements) {
  console.log(element.textContent);
}

//?Usa querySelector para mostrar por consola el 3 personaje con el atributo 
//?data-function="testMe".

for (let i = 0 ; i < elements.length ; i++) {
  const element = elements[i];
  if (i === 2) {
    console.log(element.textContent);
  }
}