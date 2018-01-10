/*
// EVALUATION FUNCTIONS
let re;
re = /hello/;
re = /hello/i; // i = case insensitive
// re = /hello/g; // Global search

/*
// prints /hello/
console.log(re);
// prints hello
console.log(re.source);


// exec() - Return result in an array or null
// prints - ["hello", index: 0, input: "hello world"]
const result = re.exec('hello world');

console.log(result);
// prints hello
console.log(result[0]);
console.log(result.index);
console.log(result.input);
*/

/*
// test() - Returns true or false
// prints false - case sensitive - need to put i flag to make it true
const result = re.test('hello');
console.log(result);
*/

/*
// match() - Return result array or null
const str = 'Hello There';
const result = str.match(re);
console.log(result);
*/

/*
// search() - Returns index of the first match if not found returns -1
const str = 'Hello There';
const result = str.search(re);
// prints 0 - shows index where hello starts
console.log(result);
*/

/*
// replace() - Return new string with some or all matches of a pattern
const str = 'Hello There';
const newStr = str.replace(re, 'Hi');
// Prints Hi There
console.log(newStr);
*/


// METACHARACTER SYMBOLS

let re;
// Literal Characters
re = /hello/;
re = /hello/i;

// Metacharacter Symbols
re = /^h/i;         // Must start(^) with h
re = /world$/i;     // Must end($) with world
re = /^hello$/i;    // Must start and end with hello
re = /^h.llo$/i;    // Matches any ONE character - . is wild card any character can be                         inserted.
re = /h*llo/i;      // Matches any character 0 or more times
re = /gre?a?y/i;    // Optional character - Grey or Gray;
re = /gre?a?y\?/i;  // Escape character


// Brackets [] - Character Sets
re = /gr[ae]y/i;    // Must be an a or e
re = /[GF]ray/i;    // Must be an G or F
re = /[^GF]ray/i;   // Match anything except a G or F - ^ inside []
re = /[A-Z]ray/;    // Match any uppercase letter
re = /[a-z]ray/;    // Match any lowercase letter
re = /[A-Za-z]ray/; // Match any letter
re = /[0-9][0-9]ray/;    // Match any digit


// Braces {} - Quantifiers
re = /Hel{2}o/i;    // Must occur exactly {n} amount of times
re = /Hel{2,4}o/i;  // Must occur between {2} and {4} amount of times
re = /Hel{2,}o/i;   // Must occur at least {n} times


// Parentheses () - Grouping
re = /^([0-9]x){3}$/ // Grouping to repeat 3 times

// Shorthand Character Classes
re = /\w/;          // Word character - alphanumeric or _
re = /\w+/;         // + = one or more
re = /\W/;          // Non-Word character
re = /\d/;          // Match any digit
re = /\d+/;         // Match any digit 0 or more times
re = /\D/;          // Match any Non-Digit 
re = /\s/;          // Match whitespace character 
re = /\S/;          // Match Non-Whitespace character
re = /Hell\b/i;     // Word boundary - specific looks for 'hell'

// Assertions
re = /x(?=y)/;      // Match x only if followed by y
re = /x(?!y)/;      // Match x only if NOT followed by y

// String to match
const str = 'xfaladsfxy';


// Log results
const result = re.exec(str);
console.log(result);

function reTest(re, str) {
  if(re.test(str)) {
    console.log(`${str} matches ${re.source}`);
  } else {
    console.log(`${str} does NOT match ${re.source}`)
  }
}

reTest(re, str);