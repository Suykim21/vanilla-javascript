// ES6 VERSION

class Person {
  constructor(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthday = new Date(dob);
  }

  greeting() {
    return `Hello there ${this.firstName} ${this.lastName}`;
  }

  calculateAge() {
    const diff = Date.now() - this.birthday.getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear()-1970);
  }

  getsMarried(newLastName) {
    this.lastName = newLastName;
  }

  // STATIC METHOD IS NOT PART OF INSTANCES - its a standalone method
  static addNumbers(x, y) {
    return x + y;
  }
}

const mary = new Person('Mary', 'Jane',  '11-13-1990');

mary.getsMarried('Yoyo');

console.log(mary);

// prints uncaught typeerror as it is
console.log(mary.addNumbers(1,1))

// to use static method - must call object
console.log(Person.addNumbers(1,1));