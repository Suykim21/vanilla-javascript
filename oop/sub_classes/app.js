class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  greeting() {
    return `Hello there ${this.firstName} ${this.lastName}`;
  }
}

// Creating subclass of Person
class Customer extends Person {
  constructor(firstName, lastName, phone, membership) {
    // Similar to Person.call(this, firstName, lastName) - es5
    super(firstName, lastName);

    this.phone = phone;
    this.membership = membership;
  }

  static getMembershipCost(){
    return 500;
  }
}

const john = new Customer('John', 'Doe', '555-555-5555', 'Standard');

console.log(john);

console.log(Customer.getMembershipCost());