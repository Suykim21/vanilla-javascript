// Log to console
console.log('Hello world');
console.log(123);
console.log(true);
var greeting = 'hello';
console.log(greeting);
console.log([1,2,3,4]);
console.log({a:1, b:2});
console.table({a:1, b:2});

console.error('This is some error');
console.clear();
console.warn('This is a warning');

console.time('hello');
  console.log('hello world');
  console.log('hello world');
  console.log('hello world');
  console.log('hello world');
console.timeEnd('hello');
console.clear();

// var, let, const

var name = "john doe";
console.log(name);
name = 'Steve Smith'
console.log(name);

// Init var
var greeting;
console.log(greeting);
greeting = 'hello';
console.log(greeting);

// letters, numbers, _, $
// can not start with number
var _name = 'John';


// Multi word vars
var firstName = 'john'; //camel case
var first_name = 'sara'; //underscore
var FirstName = 'tom'; // Pascal case
var firstName;

console.clear();

// LET
let nameOne = "john doe";
console.log(nameOne);
nameOne = 'Steve Smith'
console.log(nameOne);

// CONST
const nameTwo = "john doe";
console.log(nameTwo);
// can not reassign
// nameTwo = 'Steve Smith'
console.log(nameTwo);
// Have to assign a value
// const greeting;

const person = {
  name: 'John',
  age: 30
}

person.name = 'Sara';
person.age = 32;

console.log(person);


const numbers = [1,2,3,4,5];
numbers.push(6);


console.log(numbers);