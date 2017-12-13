// DEFINE UI VARS
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

// LOAD ALL EVENT LISTENERS
loadEventListeners();

function loadEventListeners() {
  // DOM LOAD EVENT
  document.addEventListener('DOMContentLoaded', getTasks);

  //ADD TASK EVENT
  form.addEventListener('submit', addTask);

  //REMOVE TASK EVENT
  taskList.addEventListener('click', removeTask);

  //CLEAR TASK EVENT
  clearBtn.addEventListener('click', clearTasks);

  // FILTER TASKS EVENT
  filter.addEventListener('keyup', filterTasks);
}



// GET TASKS FROM LOCAL STORAGE
function getTasks() {
  let tasks;
  
  if(localStorage.getItem('tasks') === null){
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }
  
  tasks.forEach(function(task){
    // CREATE LI ELEMENT
    const li = document.createElement('li');
    //ADD CLASS
    li.className = 'collection-item';
    // CREATE TEXT NODE AND APPEND TO LI
    // puts user input inside li tags
    li.appendChild(document.createTextNode(task));
    // CREATE NEW LINK ELEMENT
    const link = document.createElement('a');
    // ADD CLASS
    link.className = 'delete-item secondary-content';
    // ADD ICON HTML
    link.innerHTML = '<i class="fa fa-remove"></i>';
    //APPEND THE LINK TO LI
    li.appendChild(link);
    console.log(li);
    //APPEND LI TO UL
    taskList.appendChild(li);
  });
  
}

// ADD TASK
function addTask(e) {
  if(taskInput.value ==='') {
    alert('Add a task');
    return false;
  }

  // CREATE LI ELEMENT
  const li = document.createElement('li');
  //ADD CLASS
  li.className = 'collection-item';
  // CREATE TEXT NODE AND APPEND TO LI
  // puts user input inside li tags
  li.appendChild(document.createTextNode(taskInput.value));
  // CREATE NEW LINK ELEMENT
  const link = document.createElement('a');
  // ADD CLASS
  link.className = 'delete-item secondary-content';
  // ADD ICON HTML
  link.innerHTML = '<i class="fa fa-remove"></i>';
  //APPEND THE LINK TO LI
  li.appendChild(link);
  console.log(li);
  //APPEND LI TO UL
  taskList.appendChild(li);

  // STORE IN LOCAL STORAGE
  storeTaskInLocalStorage(taskInput.value);

  // CLEAR INPUT
  taskInput.value = '';

  // PREVENT FROM PAGE REFRESH
  e.preventDefault();
}


// STORE TASK
function storeTaskInLocalStorage(task) {
  let tasks;

  if(localStorage.getItem('tasks') === null){
    tasks = [];
  } else {
    console.log(JSON)
    tasks = JSON.parse(localStorage.getItem('tasks'));
    console.log(JSON.parse(localStorage.getItem('tasks')));
  }

  tasks.push(task);

  localStorage.setItem('tasks', JSON.stringify(tasks));
  console.log(JSON.stringify(tasks));
}



//REMOVE TASK
function removeTask(e){
  if(e.target.parentElement.classList.contains('delete-item')){
    if(confirm('Are you sure?')) {
      e.target.parentElement.parentElement.remove();

      // REMOVE FROM LOCAL STORAGE
      removeTaskFromLocalStorage(e.target.parentElement.parentElement);
    }
  }
}

//REMOVE FROM LOCAL STORAGE
function removeTaskFromLocalStorage(taskItem){
  let tasks;
  
  if(localStorage.getItem('tasks') === null){
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }
  
  tasks.forEach(function(task, index){
    if(taskItem.textContent === task){
      // delete one from the index
      tasks.splice(index, 1);
    }
  });

  localStorage.setItem('tasks', JSON.stringify(tasks));
}

// CLEAR TASKS
function clearTasks(){
  // option 1
  // taskList.innerHTML = '';

  // option 2
  // Faster
  // While there is first child - if theres still something on the list
  while(taskList.firstChild) {
    taskList.removeChild(taskList.firstChild);
  }

  // CLEAR FROM LOCAL STORAGE
  clearTasksFromLocalStorage();
}

//CLEAR TASKS FROM LOCAL STORAGE
function clearTasksFromLocalStorage(){
  localStorage.clear();
}


//FILTER TASKS
function filterTasks(e){
  const text = e.target.value.toLowerCase();

  // querySelectorAll - returns node lists
  document.querySelectorAll('.collection-item').forEach( function(task){
    // grab list text
    const item = task.firstChild.textContent;
    // if matches show
    if(item.toLowerCase().indexOf(text) != -1){
      task.style.display = 'block';
    } else {
      task.style.display = 'none';
    }
  });
}