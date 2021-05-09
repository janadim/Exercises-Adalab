"use strict";

// const title = document.querySelector("h2");
// const text = document.querySelector("p")

// const notification = document.querySelector(".js-msg");


// // const msg= document.querySelector(".js-msg")

// // if (msg === advise) {
// //     advise.classList.remove("hidden");
    
// // }
// if (notification.classList.contains ("warning")) {
//     title.innerHTML = "Aviso";
//     text.innerHTML = "Tenga cuidado";
    
// }



// const result = document.querySelector(".js-text");

// const price = 100;
// const iva = price * 0.21;
// const total = price + iva;

// result.innerHTML = `El precio es ${price} el IVA es ${iva}, y el total a pagar es ${total}`;


console.log("hola")
function getEl(selector) {
     const result = document.querySelector(selector)
    return result
}

const btnEl = getEl('.js-landing');
console.log(btnEl);


