"use strict";

const input = document.querySelector(".input");
const paragraph = document.querySelector(".paragraph");

function handlerType(event) {
    const inputValue = event.currentTarget.class;
    paragraph.innerHTML = inputValue;
    console.log(inputValue)

}

input.addEventListener('change', handlerType);