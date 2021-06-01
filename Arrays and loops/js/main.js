"use strict";

const promos = [
  {
    promo: "A",
    name: "Ada",
    students: [
      {
        id: "id-1",
        name: "Sofía",
        age: 20,
      },
      {
        id: "id-2",
        name: "María",
        age: 21,
      },
      {
        id: "id-3",
        name: "Lucía",
        age: 22,
      },
    ],
  },
  {
    promo: "B",
    name: "Borg",
    students: [
      {
        id: "id-4",
        name: "Julia",
        age: 23,
      },
      {
        id: "id-5",
        name: "Tania",
        age: 24,
      },
      {
        id: "id-6",
        name: "Alaia",
        age: 25,
      },
    ],
  },
  {
    promo: "C",
    name: "Clarke",
    students: [
      {
        id: "id-7",
        name: "Lidia",
        age: 26,
      },
      {
        id: "id-8",
        name: "Celia",
        age: 27,
      },
      {
        id: "id-9",
        name: "Nadia",
        age: 28,
      },
    ],
  },
];

const studentsWorkingInGoogle = ["id-2", "id-3", "id-5", "id-9"];

// TÚ CÓDIGO AQUÍ
//1
const listHTML = document.querySelector(".js-result");

const adaProm = promos[0].name;
const borgProm = promos[1].name;
const clarkeProm = promos[2].name;
const liElement = document.querySelector(".js-prom 1");

console.log(promos[0].students[2].name);
console.log(adaProm);

listHTML.innerHTML = `<ul><li class="js-prom 1"> ${adaProm}</li><li class="js-prom 2"> ${borgProm}</li> <li class="js-prom 3"> ${clarkeProm}</li>`;

//2
for (const promoName of promos) {
  const pElement = document.createElement("p");
  liElement.appendChild(pElement);
  const textElement = document.createTextNode(promoName.promo);
  pElement.appendChild(textElement);
}
