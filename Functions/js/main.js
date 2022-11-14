/* Write reusable Javascript with function */
function reusableFunction() {
  console.log("hello world!");
}
reusableFunction();

/* Passing values to Functions with arguments */
function functionWithArgs(a, b) {
  console.log(a + b);
  console.log(a - b);
}
functionWithArgs(1, 2);
functionWithArgs(7, 9);

/* Return a value from a function with return */
function plusThree(num) {
  return num + 3;
}
const answer = plusThree(5);
console.log(answer);

function timesFive(parameters) {
  return parameters * 5;
}

timesFive(5);
timesFive(2);
timesFive(0);

/* to see the value in console we declare multiply variables */

let multiply1 = timesFive(5);
console.log(multiply1);

let multiply2 = timesFive(2);
console.log(multiply2);

let multiply3 = timesFive(0);
console.log(multiply3);

/* Global and Local scope of variables and function */
let globalScope = "Variables which are defined outside of a function block have a Global Scope."
console.log(globalScope);

function myTest() {
  let localScope = "Variables which are declared within a function, as well as the function parameters, have local scope";
  console.log(localScope);
}
myTest();

/* Global vs Local Scope in function */
const sameVar = "hat";
function myFun() {
  /* const sameVar = "head"; if we uncomment local variables it can take precedence over global variables*/
  return sameVar;
}
let myvar22 = myFun();
console.log(myvar22);

/* Understanding Undefined Value returned from a Function. "Due to not using return statement result show undefined*/
let sum = 0;
function mysum() {
  sum = sum + 3;
}
let sum1 = mysum();
console.log(sum1);
/* Assignment with a Returned Value */
let processed = 0;
function processArg(num) {
  return (num + 3) / 5;
}
processed = processArg(7);
console.log(processed);

/* Stand In line */
function nextInLine(arr, item) {
  arr.push(item);
  let removed = arr.shift();
  return removed;
}

let myTest1 = nextInLine([1, 2, 3, 4, 5], 6);
console.log(myTest1);