"use strict";

// // avatar por defecto
// const DEFAULT_AVATAR = 'http://placehold.it/300x300';
// // avatar que eligió el usuario al registrarse
// let userAvatar = 'http://www.fillmurray.com/300/300';
// let noAvatar = "" === FEFAULT_AVATAR

// document.querySelector('img').src= userAvatar || noAvatar;

const firstYear = 15;
const secondYear = 9;
const otherYear = 5;

const dogAge = 10;

if (dogAge === 1) {
    console.log('15 años humanos')
} else if (dogAge === 2) {
    console.log('24 años humanos')
}
else {
    console.log((firstYear+secondYear+(dogAge-2)*otherYear) + ' años humanos')
}