// Person constructor
function Person(name, age, dob) {
  this.name = name;
  this.age = age;
  this.birthday = new Date(dob);
  this.calculateAge = function(){
    const diff = Date.now() - this.birthday.getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }

  // this refers to instances ex: steve, brad
  console.log(this);
}

const steve = new Person('steve', 30, '9-10-1990');
const brad = new Person('brad', 36);

console.log(steve);
console.log(steve.age);