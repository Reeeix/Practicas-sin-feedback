//?Buscador de nombres: Crea una función que reciba por parámetro un array y el valor que desea comprobar que existe dentro de dicho array - comprueba si existe el elemento, en caso que existan nos devuelve un true y la posición de dicho elemento y por la contra un false. Puedes usar este array para probar tu función:
const nameFinder = [
  'Peter',
  'Steve',
  'Tony',
  'Natasha',
  'Clint',
  'Logan',
  'Xabier',
  'Bruce',
  'Peggy',
  'Jessica',
  'Marc'
];
function finderName(array, firstName) {
      if (array.includes(firstName)) {
        console.log(`${firstName} is included in you array. It's position is ${array.indexOf(firstName)} `)
      } else {
        console.log(`Sorry, "${firstName}", is not included in our list.`)
      }
}
finderName(nameFinder, "Marc");
finderName(nameFinder, "Raquel");