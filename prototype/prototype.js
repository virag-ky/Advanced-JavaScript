function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

const p1 = new Person('Virag', 'Kormoczy');
const p2 = new Person('Maisy', 'Doe');

Person.prototype.getFullName = function () {
  return this.firstName + ' ' + this.lastName;
};

console.log(p1.getFullName()); // Virag Kormoczy
console.log(p2.getFullName()); // Maisy Doe
