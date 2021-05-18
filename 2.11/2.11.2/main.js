"use strict";

const charList = document.querySelector(".js-list");
const click = document.querySelector(".js-btn");
const text = document.querySelector(".js-text");
let chars = [];

// function renderCharacters(){
//   for (const character of characters){
//     charList.innerHTML += `<li> ${}</li>`
//   }
// }

function getCharacter() {
  const character = text.value;
  const url = `https://swapi.dev/api/people/?search=
  ${character}`;
  // console.log(getCharacter);
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      chars = data.results;
      console.log(data.results[0].name + " " + data.results[0].gender);
      charList.innerHTML = data.results[0].name + " " + data.results[0].gender;
    });
}

click.addEventListener("click", getCharacter);
