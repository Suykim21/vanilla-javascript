const steve = {
  name: 'steve',
  age: 30
}

// prints { name: 'steve', age: 30}
// console.log(steve);
// prints 30
// console.log(steve.age);

// Person constructor
function Person(name, /*age,*/ dob) {
  this.name = name;
  // this.age = age;
  // prints all instances Person { name: 'susan'}
  // console.log(this);
  this.birthday = new Date(dob);
  this.calculateAge = function(){
    const diff = Date.now() - this.birthday.getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970); 
  }
}

// instantiating susan and john - passing in the name
// const susan = new Person('susan', 29);
// const john = new Person('john', 24);

// prints Person { name: 'susan'}
// console.log(susan);


const susan = new Person('Susan', '9-10-1988');

//prints Person { name: 'Susan', birthday: 1988-09-10T07:00:00.000Z }
// console.log(susan);

// prints 29
console.log(susan.calculateAge());

