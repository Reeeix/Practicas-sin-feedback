//?Utiliza el array para crear dinamicamente una lista ul > li de elementos en el div de html con el atributo data-function="printHere".

const places = ["Gondor", "Mordor", "Rivendel", "La Comarca", "Nümenor"];
const ul = document.createElement("ul")
document.addEventListener('DOMContentLoaded', () => {
  let miDiv = document.querySelector('[data-function="printHere"]')

  for (const place of places) {
    let li = document.createElement("li");
    li.textContent = place;
    ul.append(li);
  }
})

document.body.append(ul);