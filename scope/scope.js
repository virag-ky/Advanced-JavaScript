/* Example of the lexical scope, where the inner function has access to the outer function scope and the variables declared in the global scope. */

let a = 10;

function outer() {
  let b = 20;

  function inner() {
    let c = 30;
    console.log(a, b, c);
  }
  inner();
}

outer(); // 10, 20, 30
