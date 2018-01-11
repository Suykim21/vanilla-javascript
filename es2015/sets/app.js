// SETS - Store unique values of any type

const set1 = new Set();

// Add values to set
set1.add(100);
set1.add('A string');
set1.add({name: 'John'});
set1.add(true);

//  prints Set(4) - only adds unique values
console.log(set1);

/*
const set2 = new Set([1, true, 'hello',]);
console.log(set2);
*/


// Get Count - 4
console.log(set1.size);


// Check for values - true
console.log(set1.has(100));
console.log(set1.has(50+50));
// prints false as object is not primitive value
console.log(set1.has({name: 'John'}))

// Delete from set
set1.delete(100);
console.log(set1);

// Iterating Through Sets


// For..of
for(let item of set1) {
  console.log(item);
}

// ForEach Loop
set1.forEach((value) => {
  console.log(value);
})

// CONVERT SET TO ARRAY
const setArr = Array.from(set1);
console.log(setArr);