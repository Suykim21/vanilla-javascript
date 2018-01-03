// Define UI Vars
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

// Load all event listeners
loadEventListeners();

// Load all event listeners
function loadEventListeners() {
  // DOM Load Event
  document.addEventListener('DOMContentLoaded', getTasks);

  // Add task event
  form.addEventListener('submit', addTask);

  // Remove task event
  taskList.addEventListener('click', removeTask);

  // Clear task event
  clearBtn.addEventListener('click', clearTasks);

  // Filter tasks event
  filter.addEventListener('keyup', filterTasks);
}



// GET TASKS FROM LS
function getTasks() {
  let tasks;
  // if tasks does not exist on local storage, create new array
  if(localStorage.getItem('tasks') === null) {
    tasks = [];
  } else {
    // Parsing string into JSON/Object
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }

  tasks.forEach(function(task){
    // Create li element
  const li = document.createElement('li');

  /*
    Add class - collection-item is materialize css component
              - allows to be grouped together
  */
  li.className = 'collection-item';

  // Create text node and append to li
  li.appendChild(document.createTextNode(task));

  // Create new link element
  const link = document.createElement('a');

  /* 
    Add class - secondary-content allows element to be on                 right.
  */
  link.className = 'delete-item secondary-content';

  /*
    Add icon html - fa fa-remove are from font awesome.
                  - innerHTML allows element to be inside       parent element. Sets the content in HTML    format.
  */
  link.innerHTML = '<i class="fa fa-remove"></i>';

  //Append the link to li
  li.appendChild(link);

  // Append li to ul
  taskList.appendChild(li);
  });
}



// ADD TASK -- passes in event
function addTask(e) {
  if(taskInput.value === '') {
    alert('Add a task');
    return;
  } else {
  
  // Create li element
  const li = document.createElement('li');

  /*
    Add class - collection-item is materialize css component
              - allows to be grouped together
  */
  li.className = 'collection-item';

  // Create text node and append to li
  li.appendChild(document.createTextNode(taskInput.value));

  // Create new link element
  const link = document.createElement('a');

  /* 
    Add class - secondary-content allows element to be on                 right.
  */
  link.className = 'delete-item secondary-content';

  /*
    Add icon html - fa fa-remove are from font awesome.
                  - innerHTML allows element to be inside       parent element. Sets the content in HTML    format.
  */
  link.innerHTML = '<i class="fa fa-remove"></i>';

  //Append the link to li
  li.appendChild(link);

  // Append li to ul
  taskList.appendChild(li);

  // STORE IN LOCAL STORAGE
  storeTaskInLocalStorage(taskInput.value);

  //Clear input
  taskInput.value = '';
  }

  e.preventDefault();
}


// STORE TASK
function storeTaskInLocalStorage(task) {
  let tasks;
  // if tasks does not exist on local storage, create new array
  if(localStorage.getItem('tasks') === null) {
    tasks = [];
  } else {
    // Parsing string into JSON/Object
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }

  // Push taskInput.value or user input to tasks array
  tasks.push(task);

  // setItem(key, value) - set data to your browser
  // must store in string - JSON.stringify
  localStorage.setItem('tasks', JSON.stringify(tasks));
}


// REMOVE TASK
function removeTask(e) {
  // If user clicks on element that has parent element of i tag which "a tag" with class name of delete-item
  if(e.target.parentElement.classList.contains('delete-item')){
    if(confirm('Are you sure?')){
      // Remove li tag 
      e.target.parentElement.parentElement.remove();

      // REMOVE FROM LOCAL STORAGE
      removeTaskFromLocalStorage(e.target.parentElement.parentElement);
    }
  }
}


// REMOVE FROM LOCAL STORAGE
function removeTaskFromLocalStorage(taskItem) {
  let tasks;
  // if tasks does not exist on local storage, create new array
  if(localStorage.getItem('tasks') === null) {
    tasks = [];
  } else {
    // Parsing string into JSON/Object
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }

  tasks.forEach(function(task, index){
    if(taskItem.textContent === task) {

      // remove 1 item at current index position
      tasks.splice(index, 1);
    }
  });

  localStorage.setItem('tasks', JSON.stringify(tasks));
}


// CLEAR TASKS
function clearTasks() {
  // taskList.innerHTML = '';


  // Faster - https://jsperf.com/innerhtml-vs-removechild/47

  // While there is still a child - or there are elements in the list
  while(taskList.firstChild) {
    taskList.removeChild(taskList.firstChild);

    // CLEAR TASKS FROM LOCAL STORAGE
    localStorage.clear();

    }
}


// FILTER TASKS
function filterTasks(e) {
  const text = e.target.value.toLowerCase();

  /*
    Returns an elements with class="collection-item"
    forEach() - calls provided function once for each element in an array or nodeList in order
  */
  document.querySelectorAll('.collection-item').forEach( function(task){
    const item = task.firstChild.textContent;
    // IndexOf(user input) - if letter exists itll return 0 if not -1
    if(item.toLowerCase().indexOf(text) != -1){
       task.style.display = 'block';
    } else {
      task.style.display = 'none';
    }
  });

  console.log(text);
}