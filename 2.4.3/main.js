"use strict";

function price(a){
    const iva = a*(21/100);
    const total = a + iva;

    return `Precio sin IVA: ${a} IVA: ${iva} y total: ${total};`
}
const precio = price(10);
console.log(precio)