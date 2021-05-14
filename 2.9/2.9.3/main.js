'use strict';

const lostNumbers = [4, 8, 15, 16, 23, 42];
const evenLostNumbers = [];
const multipleof3 = [];

function bestLostNumbers(){
  
for(let i=0; i<lostNumbers.length; i++){
  if(lostNumbers[i] % 2 ===0){
    evenLostNumbers.push(lostNumbers[i]);
  }else if (lostNumbers[i] % 3 ===0){
  multipleof3.push(lostNumbers[i]);
   } 
 }
 const all= evenLostNumbers.concat(multipleof3);
 console.log(all);
}


bestLostNumbers();



console.log(evenLostNumbers);
console.log(multipleof3);

