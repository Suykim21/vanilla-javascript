
/*
const sayHello = function() {
  console.log('Hello');
}
sayHello();
*/

/*
const sayHello = () => {
  console.log('Hello');
}
sayHello();
*/

/*
// ONE LINE FUNCTION DOES NOT NEED BRACES
const sayHello = () => console.log('Hello');
*/

/*
// ONE LINE RETURNS
const sayHello = () => 'Hello';
console.log(sayHello());

// SAME AS ABOVE
const sayHello = function() {
  return 'Hello';
}
*/

/*
// RETURN OBJECT
const sayHello = () => ({msg:'Hello'});
console.log(sayHello());
*/

/*
// SINGLE PARAM DOES NOT NEED PARENTHESIS
const sayHello = name => console.log(`Hello ${name}`);
*/

/*
// MULTIPLE PARAMS NEED PARENTHESIS
const sayHello = (firstName, lastName) => console.log(`Hello ${firstName} ${lastName}`);

sayHello('Steve', 'Kim');
*/


const users = ['Nathan', 'John', 'William'];

/*
// map() - creates new array with the results of calling a provided function on every element in the calling array
const nameLengths = users.map(function(name){
  return name.length;
});

// Shorter
const nameLengths = users.map((name) => {
  return name.length;
})

// Shortest
const nameLengths = users.map(name => name.length);

// Print [6,4,7]
console.log(nameLengths);
*/