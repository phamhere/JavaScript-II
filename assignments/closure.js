// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
const sampleFunc = () => {
  let variable = 'value'
  const nestedFunc = () => {
    console.log(`I want ${variable} from the sampleFunc closure in this nestedFunc!`);
  }
  nestedFunc()
};
sampleFunc();

// ==== Challenge 2: Create a counter function ====
const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
  let count = 0;
  return function() {
    count++;
    return count;
  }
};
// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2

/* STRETCH PROBLEM, Do not attempt until you have completed all previous tasks for today's project files */

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
  let count = 0;
  return counterObject = {
    count: 0,
    increment() {
      count++;
      return count;
    },
    decrement() {
      count--;
      return count;
    }
  }
};
// const newCounter2 = counterFactory()
// console.log(newCounter2.increment())
// console.log(newCounter2.increment())
