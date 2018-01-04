// Object.prototype
// Ex: Person.prototype

// Person constructor
function Person(firstName, lastName, dob) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.birthday = new Date(dob);
  // this.calculateAge = function(){
  //   const diff = Date.now() - this.birthday.getTime();
  //   const ageDate = new Date(diff);
  //   return Math.abs(ageDate.getUTCFullYear() - 1970);
  // }
}

// Calculate Age - prototype provides not flooding methods inside the constructor
Person.prototype.calculateAge = function(){
  const diff = Date.now() - this.birthday.getTime();
  const ageDate = new Date(diff);
  return Math.abs(ageDate.getUTCFullYear() - 1970);
}

// Get full name
Person.prototype.getFullName = function(){
  return `${this.firstName} ${this.lastName}`;
}

// Gets Married
Person.prototype.getsMarried = function(newLastName){
  this.lastName = newLastName;
}


const john = new Person('John', 'Doe', '8-12-90');
const mary = new Person('Mary', 'Doe', 'March 20 1977');

console.log(mary);

mary.getsMarried('Smith');

// prints Mary Smith
console.log(mary.getFullName());

// Checks if it has property called firstName = true
console.log(mary.hasOwnProperty('firstName'));

// prints false;
console.log(mary.hasOwnProperty('getFullName'));