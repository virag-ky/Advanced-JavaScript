// Example 1
function greet() {
  console.log('hello');
}

setTimeout(greet, 3000);

// Example 2
function greetName(name) {
  console.log(`Hello ${name}`);
}

setTimeout(greetName, 2000, 'Maisy');

// Clear a timeout, nothing will be logged to the console
function sayHi() {
  console.log('Hi');
}

const timeoutId = setTimeout(sayHi, 3000);
clearTimeout(timeoutId);
