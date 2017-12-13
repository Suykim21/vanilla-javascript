// REPLACE ELEMENT

// CREATE ELEMENT
const newHeading = document.createElement('h2');

// ADD ID
newHeading.id = 'task-title';
// NEW TEXT NODE
newHeading.appendChild(document.createTextNode('Task List'));


//GET THE OLD HEADING
const oldHeading = document.getElementById('task-title');

//PARENT 
const cardAction = document.querySelector('.card-action');

// REPLACE
// replaceChild(add new, replace old)
cardAction.replaceChild(newHeading, oldHeading);


// REMOVE ELEMENT
const lis = document.querySelectorAll('li');
const list = document.querySelector('ul');


// REMOVE LIST ITEM
lis[0].remove();

// REMOVE CHILD ELEMENT
list.removeChild(lis[3]);



// CLASSES & ATTR
const firstLi = document.querySelector('li:first-child');
const link = firstLi.children[0]

let val;

val = link.className;
val = link.classList;
// assessing individual class name
val = link.classList[0];
link.classList.add('test');
link.classList.remove('test');
val = link;


// Attributes
val = link.getAttribute('href');
// add link to href;
val = link.setAttribute('href', 'http://google.com')
// boolean to check if it has attr
val = link.hasAttribute('title')

link.removeAttribute('title');
val = link;


console.log(val);