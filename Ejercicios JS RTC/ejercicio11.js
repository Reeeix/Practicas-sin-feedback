//?Calcular promedio de strings: Crea una función que reciba por parámetro un array y cuando es un valor number lo sume y de lo contrario cuente la longitud del string y lo sume. Puedes usar este array para probar tu función:

const mixedElements = [6, 1, 'Rayo', 1, 'vallecano', '10', 'upgrade', 8, 'hub'];
function averageWord(param) {
  let suma = 0;
  for (element of mixedElements) {
    if (typeof element === 'number') {
      suma += element;
    } else {
      suma += element.length; 
    }
  }
  console.log(suma) //Should say 41
}

averageWord(mixedElements);