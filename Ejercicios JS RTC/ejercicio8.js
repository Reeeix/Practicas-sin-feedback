//?Encontrar la palabra mas larga mediante una función

const avengers = ['Hulk', 'Thor', 'IronMan', 'Captain A', 'Spiderman', 'Captain M.'];
function findLongestWord(param) {
  let longestWord = avengers[0]; 
  for (let i = 0; i < avengers.length; i++) {
    if (avengers[i].length > longestWord.length) {
      longestWord = avengers[i]
    }
  }
  return longestWord;
}
const palabraMasLarga = findLongestWord(avengers); 
console.log(palabraMasLarga); 