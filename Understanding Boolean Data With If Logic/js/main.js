/* Use Conditional Logic with If Statements */
function test(mycondition) {
  if (mycondition) {
    return "This string return if parameter is set to true."
  }
  return "This string return if parameter is set to false."
}

let mytest1 = test(true);
console.log(mytest1);

let mytest2 = test(false);
console.log(mytest2);

/* Comparison with the Equality Operator */
function testEqual(val) {
  if (val == 12) {
    return "If true return this string."
  }
  return "If false return this string."
}

let test3 = testEqual(10);
console.log(test3);

let test4 = testEqual(12);
console.log(test4);

/* Comparison with the Strict Equality Operator */
function testStrict(val) {
  if (val === 12) {
    return "Strictly Equal"
  }
  return "Not equal"
}

let mytest3 = testStrict(12);
console.log(mytest3);

let mytest4 = testStrict("12");
console.log(mytest4);

function compareEquality(a, b) {
  if (a === b) {
    return "equal"
  }
  return "unequal"
}

let mytest5 = compareEquality(10, 10);
console.log(mytest5);

let mytest6 = compareEquality(10, "10");
console.log(mytest6);

/* Comparison with the Inequality Operator */
function testNotEqual(val) {
  if (val != 99) {
    return "Not Equal"
  }
  return "Equal"
}

let mytest7 = testNotEqual(10);
console.log(mytest7);

let mytest8 = testNotEqual(99);
console.log(mytest8);

/* Comparison with the Strict Inequality Operator */
function testStrictNotEqual(val) {
  if (val !== 17) {
    return 100
  }
  return 10
}

let test12 = testStrictNotEqual(10);
console.log(test12);

let test13 = testStrictNotEqual(17);
console.log(test13);

/* Comparison with the Greater Than Operator */
/* testGreaterThan(0) should return the string 10 or Under
Passed:testGreaterThan(10) should return the string 10 or Under
Passed:testGreaterThan(11) should return the string Over 10
Passed:testGreaterThan(99) should return the string Over 10
Passed:testGreaterThan(100) should return the string Over 10
Passed:testGreaterThan(101) should return the string Over 100
Passed:testGreaterThan(150) should return the string Over 100
Passed:You should use the > operator at least twice */

function testGreaterThan(val) {
  if (val > 100) {
    return "Over 100";
  }
  if (val > 10) {
    return "Over 10";
  }
  return "10 or Under"
}
let testOne = testGreaterThan(0);
console.log(testOne);

let testTwo = testGreaterThan(10);
console.log(testTwo);

let testThree = testGreaterThan(11);
console.log(testThree);

let testFour = testGreaterThan(99);
console.log(testFour);

let testFive = testGreaterThan(100);
console.log(testFive);

let testSix = testGreaterThan(101);
console.log(testSix);

let testSeven = testGreaterThan(150);
console.log(testSeven);

/* Comparison with the Greater Than Or Equal To Operator */
/* testGreaterOrEqual(0) should return the string Less than 10
Waiting:testGreaterOrEqual(9) should return the string Less than 10
Waiting:testGreaterOrEqual(10) should return the string 10 or Over
Waiting:testGreaterOrEqual(11) should return the string 10 or Over
Waiting:testGreaterOrEqual(19) should return the string 10 or Over
Waiting:testGreaterOrEqual(100) should return the string 20 or Over
Waiting:testGreaterOrEqual(21) should return the string 20 or Over
Waiting:You should use the >= operator at least twice */
function testGreaterOrEqual(val) {
  if (val >= 20) {
    return "20 or Over";
  }
  if (val >= 10) {
    return "10 or Over";
  }
  return "Less Than 10";
}

let test11 = testGreaterOrEqual(0);
console.log(test11);

let test22 = testGreaterOrEqual(9);
console.log(test22);

let test33 = testGreaterOrEqual(10);
console.log(test33);

let test44 = testGreaterOrEqual(11);
console.log(test44);

let test55 = testGreaterOrEqual(19);
console.log(test55);

let test66 = testGreaterOrEqual(21);
console.log(test66);

let test77 = testGreaterOrEqual(100);
console.log(test77);

/* Comparison with the Less Than Operator */
/* testLessThan(0) should return the string Under 25
Waiting:testLessThan(24) should return the string Under 25
Waiting:testLessThan(25) should return the string Under 55
Waiting:testLessThan(54) should return the string Under 55
Waiting:testLessThan(55) should return the string 55 or Over
Waiting:testLessThan(99) should return the string 55 or Over */

function testLessThan(val) {
  if (val < 25) {
    return "Under 25";
  }
  if (val < 55) {
    return "Under 55";
  }
  return "55 Or Over";
}

testLessThan(0);
testLessThan(24);
testLessThan(25);
testLessThan(54);
testLessThan(55);
testLessThan(99);

/* Comparison with the Less Than Or Equal To Operator */
/* testLessOrEqual(0) should return the string Smaller Than or Equal to 12
Waiting:testLessOrEqual(11) should return the string Smaller Than or Equal to 12
Waiting:testLessOrEqual(12) should return the string Smaller Than or Equal to 12
Waiting:testLessOrEqual(23) should return the string Smaller Than or Equal to 24
Waiting:testLessOrEqual(24) should return the string Smaller Than or Equal to 24
Waiting:testLessOrEqual(25) should return the string More Than 24
Waiting:testLessOrEqual(55) should return the string More Than 24 */
function testLessOrEqual(val) {
  if (val <= 12) {
    return "Smaller Than or Equal to 12";
  }
  if (val <= 24) {
    return "Smaller Than or Equal to 24";
  }
  return "More Than 24"; 
}
testLessOrEqual(0);
testLessOrEqual(11);
testLessOrEqual(12);
testLessOrEqual(23);
testLessOrEqual(24);
testLessOrEqual(25);
testLessOrEqual(55);

/* Comparisons with the Logical And Operator */
/* Replace the two if statements with one statement, using the && operator, which will return the string Yes if val is less than or equal to 50 and greater than or equal to 25. Otherwise, will return the string No. */
function testLogicalAnd(val) {
  if (val <= 50 && val >= 25) {
    return "Yes";
  }
  return "No";
}
testLogicalAnd(0);
testLogicalAnd(24);
testLogicalAnd(25);
testLogicalAnd(30);
testLogicalAnd(50);
testLogicalAnd(51);
testLogicalAnd(75);
testLogicalAnd(80);

/* Comparisons with the Logical Or Operator */
/* Combine the two if statements into one statement which returns the string Outside if val is not between 10 and 20, inclusive. Otherwise, return the string Inside. */

function testLogicalOr(val) {
  if (val < 10 || val > 20) {
    return "Outside";
  }
  return "Inside";
}
testLogicalOr(0);
testLogicalOr(9);
testLogicalOr(10);
testLogicalOr(15);
testLogicalOr(19);
testLogicalOr(20);
testLogicalOr(21);
testLogicalOr(25);