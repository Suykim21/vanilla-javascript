// Create a symbol
const sym1 = Symbol();
const sym2 = Symbol('sym2');

// console.log(sym2);

// prints false - symbol can never be same
// console.log(Symbol() === Symbol());
// console.log(`Hello ${String(sym1)}`)

// Unique Object Keys
const KEY1 = Symbol();
const KEY2 = Symbol('sym2');

const myObj = {};

myObj[KEY1] = 'Prop1';
myObj[KEY2] = 'Prop2';
myObj.key3 = 'prop3';
myObj.key4 = 'prop4';

// Prints Prop1
console.log(myObj[KEY1]);

// Symbols are not enumerable in for ... in
for(let i in myObj) {
  console.log(`${i}: ${myObj[i]}`);
}


// Symbols are ignored by JSON.stringify
console.log(JSON.stringify({[Symbol('sym1')]: 'prop'}));