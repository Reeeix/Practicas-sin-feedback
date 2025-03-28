//?1.1 Basandote en el array siguiente, crea una lista ul > li dinámicamente en el html que imprima cada uno de los paises.
    const countriess = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];
      let countriessUl = document.createElement("ul");
      document.body.appendChild(countriessUl);
      let PrintList = (array, parentElement) => {
  
        for (const element of array) {
          let li = document.createElement("li");
          li.textContent = element;
          parentElement.appendChild(li);
        }
      }
      countriessUl.style.listStyle = "none";
      PrintList(countriess, countriessUl);

//?1.2 Elimina el elemento que tenga la clase .fn-remove-me.

      let removeMe = document.querySelector(".fn-remove-me");
      removeMe.remove();

//?1.3 Utiliza el array para crear dinamicamente una lista ul > li de elementos en el div de html con el atributo data-function="printHere".
      const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];
    //Selecciono el div
      document.addEventListener("DOMContentLoaded", ()  => {
      const myParentDiv = document.querySelector('[data-function="printHere"]');
    //Creo mi Ul
      let carUl = document.createElement("ul");
      myParentDiv.appendChild(carUl);
      PrintList(cars, carUl);
});


//?1.4 Crea dinamicamente en el html una serie de divs que contenga un elemento h4 para el titulo y otro elemento img para la imagen.
        const countries = [
	        {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1'}, 
	        {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2'},
	        {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3'},
	        {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4'},
	        {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5'}
        ];

        let imgSection = document.createElement("section");
        for (const country of countries) {
          //Creo un div por cada elemento de mi array
            let div = document.createElement("div");
          //Recojo el nombre y la imagen del país en una variable
            let countryName = country.title;
            let countryImg = country.imgUrl;
          //Creo un h4 y una img
            let h4 = document.createElement("h4");
            let img = document.createElement("img")
          //Le doy al título su contenido
            h4.textContent = countryName;
          //Le pongo el atributo src y alt a img 
            img.src = countryImg;
            img.setAttribute("alt", countryName);
            img.alt = countryName;
          //Meto el título y la imagen dentro de mi div
            div.appendChild(h4);
            div.appendChild(img);
            imgSection.appendChild(div);
        }
        document.body.appendChild(imgSection);
//?1.5 Basandote en el ejercicio anterior. Crea un botón que elimine el último elemento de la serie de divs.

        //Creo mi botón y le doy texto
        const eliminarUltimo = document.createElement("button");
        eliminarUltimo.textContent = "Pulsa para eliminar el último elemento";
        document.body.append(eliminarUltimo);
        eliminarUltimo.addEventListener('click', () => {
          const divs = document.querySelectorAll("section div");
          if (divs.length > 0) {
            divs[divs.length - 1].remove();
          }
        })

      
        
//?1.6 Basandote en el ejercicio anterior. Crea un botón para cada uno de los divs que elimine ese mismo elemento del html.
        let myDivs = document.querySelectorAll("section div");
        for (const div of myDivs) {
          const deletear = document.createElement("button");
          deletear.textContent = "Eliminar";
          div.appendChild(deletear);
        }
      
        let mybuttons = document.querySelectorAll("div button");
        console.log(mybuttons);
        for (const button of mybuttons) {
          button.addEventListener('click', () => {
            button.parentElement.remove();
          })
        }
      
      

