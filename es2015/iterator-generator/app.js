/*
// Iterator Example
function nameIterator(names) {
  let nextIndex = 0;

  return {
    next: function() {
      return nextIndex < names.length ?
      { value: names[nextIndex++], done: false} :
      { done: true }
    }
  }
}

// Create an array of names
const namesArr = ['Jack', 'Jill', 'John'];
// Init iterator and pass in the names array
const names = nameIterator(namesArr);

// Iterating each time it is called
// prints Jack
console.log(names.next().value);
// prints Jill
console.log(names.next().value);
// Prints John
console.log(names.next().value);
*/


// Generator Example - note *
function* sayNames() {
  yield 'Jack';
  yield 'Jill';
  yield 'John';
}

const name = sayNames();
// prints Jack
console.log(name.next().value);


// ID Creator
function* createIds() {
  let index = 0;

  while(true) {
    yield index++;
  }
}

const gen = createIds();

console.log(gen.next().value);