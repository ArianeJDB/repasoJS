"use strict";


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

    list.innerHTML = '';

    for (const items of nameSplit) {
      const listElement = document.createElement('li');
      const letter = document.createTextNode(items);
      listElement.appendChild(letter);
      list.appendChild(listElement);
      listElement.setAttribute('class', 'listItem');
    }
    });
};

button.addEventListener("click", getName);
