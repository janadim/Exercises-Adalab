'use strict';

const ulElement = document.querySelector('.js-task1');

const tasks = [
  { name: 'Recoger setas en el campo', completed: true },
  { name: 'Comprar pilas', completed: true },
  { name: 'Poner una lavadora de blancos', completed: true },
  {
    name: 'Aprender cómo se realizan las peticiones al servidor en JavaScript',
    completed: false
  }
];





function paintTasks(){
  let html = "";
  let className = "";
  let checked = "";
 
  for (let i = 0; i < tasks.length; i++) {
    
    let task = tasks[i];
    if (task.completed === true){
      className = 'crossout';
      checked = 'checked';
    }else{
      className = "";
      checked = "";
    }

  html += `<li class = "${className}">`
  html += `<input class='js-checkbox' type = 'checkbox' value= "${i}" ${checked}/>`;
  html += `${task.name} </li>`;
  }
  ulElement.innerHTML = html;
  listenClick();
}

function listenClick(){
  const checkboxElements = document.querySelectorAll('.js-checkbox');
  for (let i = 0; i < checkboxElements.length; i++) {
    checkboxElements[i].addEventListener('change', handleCheck)
  }
}

function handleCheck(evt){
  console.log(evt.target.value);
  const clicked = evt.target.value
  tasks[clicked].completed = !tasks[clicked].completed;
  paintTasks()
}


paintTasks();


  //   document.getElementById("js-task1").innerHTML = tasks[i];
  // 



  

