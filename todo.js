'use strict';

const todoform = document.querySelector('.todoform');
const todoinput = document.querySelector('.todoform :first-child')
const todolist = document.querySelector('.todolist');




function printTodo(savedTodo){
  todolist.innerHTML = '';
  savedTodo.forEach((value, index, array) => {
    const li = document.createElement('li');
    const span = document.createElement('span');
    const button = document.createElement('button');
    button.id = index;
    button.className = 'delbtn';
    button.type = 'button';

    li.appendChild(span);
    li.appendChild(button);
    button.innerText = 'x';
    span.innerText = value;
    todolist.appendChild(li);
    button.addEventListener('click', deleteTodo);
  })
};

function todoHandler(event){
  event.preventDefault();
  const savedTodo = saveTodos();
  printTodo(savedTodo);
  todoinput.value = '';
};

function saveTodos(){
  const newTodo = todoinput.value;
  if(localStorage.getItem('todoArray')){
    if(newTodo){
      let savedTodo = JSON.parse(localStorage.getItem('todoArray'));
      savedTodo.push(newTodo);
      localStorage.setItem('todoArray', JSON.stringify(savedTodo));
    } else{};

  } else {
    let todoArray = [];
    localStorage.setItem('todoArray', JSON.stringify(todoArray));
    }
  return JSON.parse(localStorage.getItem('todoArray'));
}

function deleteTodo(event) {
  event.preventDefault()
  const selectedTodo = event.target;
  const selectedIndex = Number(selectedTodo.id)
  console.log(selectedIndex)

  let todoArray = JSON.parse(localStorage.getItem('todoArray'))
  todoArray.splice(selectedIndex, 1);
  console.log(todoArray)
  localStorage.setItem('todoArray', JSON.stringify(todoArray));

  printTodo(saveTodos());
}


printTodo(saveTodos());
todoform.addEventListener('submit', todoHandler);
