'use strict';

const tasks = [
  { name: 'Recoger setas en el campo', completed: true },
  { name: 'Comprar pilas', completed: true },
  { name: 'Poner una lavadora de blancos', completed: true },
  {
    name: 'Aprender cómo se realizan las peticiones al servidor en JavaScript',
    completed: false
  }
];

const paintTask = document.querySelector('js-task1');

paintTask.innerHTML(tasks)
console.log(paintTask)


function myTasks(){
  if (tasks.completed === true){
    paintTask.innerHTML('.js-task1')
    
  }// }else{

  // }
  
}
