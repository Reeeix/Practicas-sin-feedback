//?Contador de repeticiones: Crea una función que nos devuelva el múmero de veces que se repite cada una de las palabras que conforma nuestro array.

const counterWords = [
  'code',
  'repeat',
  'eat',
  'sleep',
  'code',
  'enjoy',
  'sleep',
  'code',
  'enjoy',
  'upgrade',
  'code'
];
function repeatCounter(array){
    for (let i=0 ; i < array.length ; i++){
      let repeat = 0;
      let word = array[i];
      for (let j = 0; j < array.length; j++){
        let verb = array[j];
        if (verb == word && j != i) {
          repeat = repeat + 1;
        }
         
      }
      console.log(`The word "${word}" it's been repeated ${repeat} times.`);
    }
}
repeatCounter(counterWords);

//!No me gusta como he solucionado este ejercicio porque al iterar sobre todos los elementos del array me repite las frases tantas veces como se repiten las palabras. Funciona pero no como me gustaría. He preguntado a la IA para que me ayude a solucionarlo y me dice que cree un objeto para almacenar las palabras y el numero de repeticiones y así no se repitan las frases pero no he acabado de entender el procedimiento asi que prefiero no copiarlo.