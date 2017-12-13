// SET LOCAL STORAGE ITEM
// setItem(key, value)
localStorage.setItem('name', 'John');
localStorage.setItem('age', '30');

// SET SESSION STORAGE ITEM - CLEARS WHENEVER BROWSER IS CLOSED
// setItem(key, value)
sessionStorage.setItem('name', 'Beth');

// REMOVE FROM LOCAL STORAGE
//removeItem(key)
localStorage.removeItem('name');

// GET FROM STORAGE
const name = localStorage.getItem('name');
const age = localStorage.getItem('age');
// clear local storage
localStorage.clear();

console.log(name, age);


document.querySelector('form').addEventListener('submit', function(e){
  const task = document.getElementById('task').value;

  //initializing tasks variable
  let tasks;
  //if local storage is empty
  if(localStorage.getItem('tasks') === null) {
    // create empty array
    tasks = [];
  } else {
    // store task into exisiting array
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }

  tasks.push(task);


  localStorage.setItem('tasks', JSON.stringify(tasks));

  alert('task saved');

  e.preventDefault();
})

const tasks = JSON.parse(localStorage.getItem('tasks'));

tasks.forEach(function(task){
  console.log(task);
});