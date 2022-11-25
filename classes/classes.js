class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  sayMyName() {
    return this.firstName + ' ' + this.lastName;
  }
}

const classP1 = new Person('Virag', 'Kormoczy');
console.log(classP1.sayMyName()); // Virag Kormoczy

// inheritance with classes

class Superhero extends Person {
  constructor(firstName, lastName) {
    super(firstName, lastName);
    this.isSuperHero = true;
  }

  fightCrime() {
    console.log('Fighting crime');
  }
}

const batman = new Superhero('John', 'Doe');
console.log(batman.sayMyName()); // John Doe
