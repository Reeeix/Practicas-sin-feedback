//?1.1 Inserta dinamicamente en un html un div vacio con javascript.
const myEmptyDiv = document.createElement("div");
 document.body.appendChild(myEmptyDiv);
//?1.2 Inserta dinamicamente en un html un div que contenga una p con javascript.
const myFilledDiv = document.createElement("div");
const myP = document.createElement("p");
myFilledDiv.appendChild(myP);
document.body.appendChild(myFilledDiv);

//?1.3 Inserta dinamicamente en un html un div que contenga 6 p utilizando un loop con javascript.
let my3rdDiv = document.createElement("div");
document.body.appendChild(my3rdDiv);

for (let i = 0; i < 6; i++) {
  let mynewP = document.createElement("p");
  my3rdDiv.appendChild(mynewP);
  
  
}

//?1.4 Inserta dinamicamente con javascript en un html una p con el texto 'Soy dinámico!'.
let my3rdP = document.createElement("p");
my3rdP.textContent = "Soy dinámico!"
document.body.appendChild(my3rdP);

//?1.5 Inserta en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'.
const myH2 = document.querySelector(".fn-insert-here");
myH2.textContent = "Wubba Lubba dub dub";

//?1.6 Basandote en el siguiente array crea una lista ul > li con los textos del array.
 const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];
const newUl = document.createElement("ul");
document.body.append(newUl);
for (const app of apps) {
  const li = document.createElement("li");
  li.textContent = app;
  newUl.append(li);
}
//?1.7 Elimina todos los nodos que tengan la clase .fn-remove-me
 const eliminar = document.querySelectorAll(".fn-remove-me");
  for (const elemento of eliminar) {
    elemento.remove();
  }


//?1.8 Inserta una p con el texto 'Voy en medio!' entre los dos div. Recuerda que no solo puedes insertar elementos con .appendChild.
//Selecciono todos mis div y los meto en un arreglo
const allMyEmptyDivs = document.querySelectorAll("div");
console.log(allMyEmptyDivs);
//Creo el párrafo y le doy contenido
const myOtherP = document.createElement("p");
myOtherP.textContent = "Voy enmedio!";
//Recupero el último Div de mi array
let i = (allMyEmptyDivs.length - 1);
let miUltimoDiv = allMyEmptyDivs[i];
console.log(miUltimoDiv);
document.body.insertBefore(myOtherP, miUltimoDiv);


//?1.9 Inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase .fn-insert-here
//Seleccionamos los div con la clase .fn-insert-here y los metemos en un array
let myFilledDivs = document.querySelectorAll(".fn-insert-here");
for (const div of myFilledDivs) {
  let p = document.createElement("p");
  p.textContent = "Voy dentro!"
  div.appendChild(p);
}

