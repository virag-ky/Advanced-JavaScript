/* This example will log 1 all the time because we are immediately calling the inner function inside the outer function and each time the counter is set to 0 as a starting point. */

function outer() {
  let counter = 0;

  function inner() {
    counter++;
    console.log(counter);
  }
  inner();
}

outer(); // 1
outer(); // 1

/* This example is a concept of a closure, we store the outer function in the fn variable and it's result is the inner function. When we invoke the fn function twice, the first time we get the number 1 and the second time we get the number 2 => this is because we are now returning the inner function inside the outer function and also we are returning the inner functions scope, which in this case has the counter variable. */

function outer2() {
  let counter = 0;

  function inner2() {
    counter++;
    console.log(counter);
  }
  return inner2;
}

const fn = outer2(); // the result is the inner function
fn(); // 1
fn(); // 2
