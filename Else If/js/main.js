/* Introducing Else Statements */
function testElse(val) {
  let result = "";
  if (val > 5) {
    result = "Bigger than 5.";
  }
  else {
    result = "5 or Smaller."
  }
  return result;
}

testElse(4);

/* Introducing Else If Statements */

function testElseIf(val) {
  if (val > 10) {
    return "Greater than 10."
  }
  else if (val < 5) {
    return "Smaller than 5."
  }
  else {
    return "Between 5 and 10."
  }
}

let test = testElseIf(3);
console.log(test);

let test1 = testElseIf(7);
console.log(test1);

let test2 = testElseIf(11);
console.log(test2);

/* Chaining If Else Statements */
function testSize(num) {
  if (num < 5) {
    return "Tiny";
  }
  else if (num < 10) {
    return "Small";
  }
  else if (num < 15) {
    return "Medium";
  }
  else if (num < 20) {
    return "Large";
  }
  else if (num >= 20) {
    return "Huge";
  }
}

let test3 = testSize(0);
console.log(test3);

let test4 = testSize(4);
console.log(test4);

let test5 = testSize(8);
console.log(test5);

let test6 = testSize(10);
console.log(test6);

let test7 = testSize(14);
console.log(test7);

let test8 = testSize(15);
console.log(test8);

let test9 = testSize(17);
console.log(test9);

let test10 = testSize(20);
console.log(test10);

let test11 = testSize(25);
console.log(test11);

/* Golf Code */
const names = ["Hole-in-one", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

function golfScore(par, strokes) {
  if (strokes === 1) {
    return names[0];
  }
  else if (strokes <= par - 2) {
    return names[1];
  }
  else if (strokes === par -1) {
    return names[2];
  }
  else if (strokes === par) {
    return names[3];
  }
  else if (strokes === par + 1) {
    return names[4];
  }
  else if (strokes === par + 2) {
    return names[5];
  }
  else {return names[6];}
}

let test12 = golfScore(4, 1);
console.log(test12);

let test13 = golfScore(4, 2);
console.log(test13);

let test13a = golfScore(5, 2);
console.log(test13a);

let test14 = golfScore(4, 3);
console.log(test14);

let test15 = golfScore(4, 4);
console.log(test15);

let test16 = golfScore(5, 5);
console.log(test16);

let test17 = golfScore(1, 1);
console.log(test17);

let test18 = golfScore(4, 5);
console.log(test18);

let test19 = golfScore(4, 6);
console.log(test19);

let test20 = golfScore(4, 7);
console.log(test20);

let test21 = golfScore(5, 9);
console.log(test21);

function phoneticLookup(val) {
  let result = "";
  const lookup = {
    "alpha": "Adams",
    "bravo": "Boston",
    "charlie": "Chicago",
    "delta": "Denver",
    "echo": "Easy",
    "foxtrot": "Freak"
  }
  result = lookup[val];
  console.log(result);
  return result;
}
phoneticLookup("alpha");
phoneticLookup("bravo");
phoneticLookup("charlie");
phoneticLookup("delta");
phoneticLookup("echo");