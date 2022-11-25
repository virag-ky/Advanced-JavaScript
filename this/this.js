// implicit binding of "this" keyword
/* When a function is invoked with the dot notation, the object to the left of the dot is what "this" is referencing. */

const person = {
  name: 'Virag',
  sayName: function () {
    console.log(`My name is ${this.name}`);
  },
};

person.sayName(); // My name is Virag

// explicit binding of "this" keyword
/* We have to explicitly specify the context. For this we use the call method. This method allows us to specify the context with which the function is invoked. */

function sayMyName() {
  console.log(`My name is ${this.name}`);
}

sayMyName.call(person); // My name is Virag

// new binding of "this" keyword
/* When a function is invoked with the new keyword within the function the "this" keyword will always reference a new empty object. this = {}  */

function Person(name) {
  this.name = name;
}

const p1 = new Person('Virag');

// default binding of "this" keyword
/* JS sets the "this" keyword to the global object by default.  */
