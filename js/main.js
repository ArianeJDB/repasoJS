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
  fetch('https://api.github.com/users/' + input.value)
    .then(response => response.json())
    .then(data => {
      
      list.innerHTML = `<li>${data.name}</li>`;
    });

 
};

button.addEventListener("click", getName());
