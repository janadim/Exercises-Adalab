'use strict';

let numList = [];

function get100Numbers (){
  for (let i = 1; i < 101; i++){
    numList.push(i);
     }
}
get100Numbers();
console.log(numList);

function getReversed100Numbers (){
  get100Numbers()
  numList.reverse();
}
getReversed100Numbers();
console.log(numList);


