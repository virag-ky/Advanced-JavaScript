function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

Person.prototype.getFullName = function () {
  return this.firstName + ' ' + this.lastName;
};

function Superhero(firstName, lastName) {
  Person.call(this, firstName, lastName);
  this.isSuperHero = true;
}

Superhero.prototype = Object.create(Person.prototype);

Superhero.prototype.fightCrime = function () {
  console.log('Fight crime');
};

const batman = new Superhero('John', 'Doe');
console.log(batman.getFullName());

/* We need to do this because JS thinks that Superhero is created from Person. */
Superhero.prototype.constructor = Superhero;
