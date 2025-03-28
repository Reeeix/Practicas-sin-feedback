//? 1.1 Añade un botón a tu html con el id btnToClick y en tu javascript añade el evento click que ejecute un console log con la información del evento del click
const myButton = document.createElement("button");
myButton.textContent = "Escuchador de evento";
document.body.append(myButton);
myButton.addEventListener('click', (e) => {
  console.log(e.type);
})

//? 1.2 Añade un evento 'focus' que ejecute un console.log con el valor del input.
const myInput = document.querySelector("input");

myButton.addEventListener('focus', () => {
  console.log(myInput.value);
})

//? 1.3 Añade un evento 'input' que ejecute un console.log con el valor del input.

let my2ndInput = document.querySelector(".value");
my2ndInput.addEventListener('input', () => {
  console.log(my2ndInput.value);
})