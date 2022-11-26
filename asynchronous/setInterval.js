// Logs 'hello' every 2 seconds
function greet() {
  console.log('hello');
}

setInterval(greet, 2000);

// Intervals keep running a task forever so we should clear the interval when appropriate
const intervalId = setInterval(greet, 2000);
clearInterval(intervalId);
