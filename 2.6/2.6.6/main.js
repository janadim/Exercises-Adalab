'use strict';

const basket = {
  max: 10,
  min: 2,
  act: 6,
  init: 4 
};

basket.add = function() {
  return  1 + this.act;
} ;
console.log(basket.add());


basket.remove = function() {
  return  this.act - 1;
} ;
console.log(basket.remove());


basket.restore = function() {
  return  this.init;
} ;
console.log(basket.restore());