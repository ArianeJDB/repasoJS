"use strict";

//elemtnos que usar: .field .btn .list
//fetch a la api
//listener al boton:
//value del input buscarlo en el api
// nueva url con la base mas el value (usuaria)
// buscar la propiedad nombre real del usuario
//ese nombre dividirlo en letras
//cada letra escribirla en un li dentro de ol

const input = document.querySelector(".field");
const button = document.querySelector(".btn");
const list = document.querySelector(".list");
const user = input.value;

const getName = () => { 
  const url = 'https://api.github.com/users/' + input.value; 
  
  fetch(url)
    .then(response => response.json())
    .then(data => {
      const split = (data.name).split(' ');
      const name = split[0];
      const nameSplit = name.split('');
      
      // for(items of nameSplit) {
      //   console.log();
      // }
      for (let i = 0; i < nameSplit.lenght; i++) {
        console.log('hola');
      }

      list.innerHTML = `<li>${nameSplit}</li>`;
    });

 

};

button.addEventListener("click", getName);
