//? 1.1 Consigue el valor "HULK" del array de avengers y muestralo por consola.
const avengers = ["HULK", "SPIDERMAN", "BLACK PANTHER"];

console.log(avengers[0]);

//? 1.2 Cambia el primer elemento de avengers a "IRONMAN"
const avengers2 = ["HULK", "SPIDERMAN", "BLACK PANTHER"];
avengers[0] = "IRONMAN";
console.log(avengers[0]);

//? 1.3 console numero de elementos en el array usando la propiedad correcta de Array.
const avengers3 = ["HULK", "SPIDERMAN", "BLACK PANTHER"];
console.log(avengers3.length);

//? 1.4 Añade 2 elementos al array: "Morty" y "Summer". 
//? Muestra en consola el último personaje del array
const rickAndMortyCharacters = ["Rick", "Beth", "Jerry"];
rickAndMortyCharacters.push("Morty", "Summer");
console.log(rickAndMortyCharacters[4]);

//? 1.5 Elimina el último elemento del array y muestra el primero y el último por consola.
const rickAndMortyCharacters1 = ["Rick", "Beth", "Jerry", "Morty", "Summer", "Lapiz Lopez"];
rickAndMortyCharacters1.pop();
console.log(`The first character in you array is ${rickAndMortyCharacters1[0]} and the last one is ${rickAndMortyCharacters1[4]}`);

//? 1.6 Elimina el segundo elemento del array y muestra el array por consola.
const rickAndMortyCharacters2 = ["Rick", "Beth", "Jerry", "Morty", "Summer", "Lapiz Lopez"];

rickAndMortyCharacters2.splice(1,1);
console.log(rickAndMortyCharacters2);
