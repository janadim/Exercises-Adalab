'use strict';

const button = document.querySelector('.js-button');

// handler
function show(e) {
  console.log(e);
}

// listener sobre el elemento, con tipo de evento y handler
button.addEventListener('click', show);