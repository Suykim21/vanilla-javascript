// String

const name1 = 'Jeff';
const name2 = new String('Jeff');

// you can add property
name2.foo = 'bar';

// prints [string: 'Jeff'] as primitive value = 0: 'j' 1: 'e' etc.
// console.log(name2)

// prints object
// console.log(typeof name2);


// Number
const num1 = 5;
const num2 = new Number(5);

// prints [Number: 5]
console.log(num2);

// Boolean
const bool1 = true;
const bool2 = new Boolean(true);

console.log(bool2);

// Function
const getSum1 = function(x, y){
  return x + y;
}

console.log(getSum1(1, 1));

const getSum2 = new Function('x', 'y', 'return 1 + 1')

console.log(getSum2(1,1));

// Object
const john = {name: "John"};
const john2 = new Object({name: "John"});
console.log(john2);

// Arrays
const arr1 = [1,2,3,4];
const arr2 = new Array(1,2,3,4);

//prints [1,2,3,4]
console.log(arr2);

// Regular Expressions
const re1 = /\w+/;
const re2 = new RegExp('\\w+');

console.log(re2);