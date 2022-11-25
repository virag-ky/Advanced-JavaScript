/* The idea of currying is when we take a function with multiple arguments and we transform that function into a sequence of nesting functions that take one argument at a time. */

function sum(a, b, c) {
  return a + b + c;
}

sum(2, 3, 5); // 10

// we should transform sum(2, 3, 5) into sum(2)(3)(5)

function curry(fn) {
  return function (a) {
    return function (b) {
      return function (c) {
        return fn(a, b, c);
      };
    };
  };
}

const curriedSum = curry(sum);
curriedSum(2)(3)(5); // 10

const add2 = curriedSum(2);
const add3 = add2(3);
const add5 = add3(5);
console.log(add5); // 10

/* Why would we need currying?

Currying is a checking method to make sure that you get everything you need before you proceed. It helps you to avoid passing the same variable again and again. It divides your function into multiple smaller functions that can handle one responsibility.

*/
