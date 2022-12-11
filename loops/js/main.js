/* Iterate with JavaScript While Loops */
const ourArray = [];
let i = 0;

while (i < 5) {
  ourArray.push(i);
  i++;
}

console.log(ourArray);

const array = [];
let j = 5;

while (j >= 0) {
  array.push(j);
  j--;
}
console.log(array);

/* Iterate with JavaScript For Loops */

const myArray = [];

for (let i = 0; i < 5; i++) {
  myArray.push(i);
}

console.log(myArray);

/* Iterate Odd Numbers With a For Loop */

const myarray = ["odd number"];

for (let i = 1; i < 10; i += 2) {
  myarray.push(i);
}
console.log(myarray);

/* Count Backwards With a For Loop */

const arrAy = ['count backwards'];
for (let i = 10; i > 0; i -= 2) {
  arrAy.push(i);
}

console.log(arrAy);

/* Iterate Through an Array with a For Loop */
const anarr = [10, 9, 8, 7, 6];
for (let i = 0; i < anarr.length; i++) {
  console.log(anarr[i]);
}

/* Declare and initialize a variable total to 0. Use a for loop to add the value of each element of the myArr3 array to total. */

const myArr3 = [2, 3, 4, 5, 6];
let total = 0;
for (let i = 0; i < myArr3.length; i++) {
  total = total + myArr3[i];
  console.log(total);
}

/* Nesting For Loops */

const arr4 = [
  [1, 2], [3, 4], [5, 6]
];

for (let i = 0; i < arr4.length; i++) {
  for (let j = 0; j < arr4[i].length; j++) {
    console.log(arr4[i][j]);
  }
}

/* Modify function multiplyAll so that it returns the product of all the numbers in the sub-arrays of arr. */



function multiplyAll(arr) {
  let product = 1;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      product *= arr[i][j];
    }
  }
  console.log(product);
}

multiplyAll([[1, 2], [3, 4], [5, 6, 7]]);

/* Iterate with JavaScript Do...While Loops */

const myArray1 = [];

let k = 10;

do {
  myArray1.push(k);
  k++; 
} while ( k < 10);

console.log(myArray1);

// Recursive

function factorial (n) {
  if (n <= 0) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
};
 console.log(factorial(4));

 //use of spread operator

//add the elements of an existing array into a new array.

let certsAdd = ["Algorithms", "Front End"];
let certificate = ["Responsive", ...certsAdd, "Data Visualization", "API"];

console.log(certificate);

//pass elements of an array as arguments to a function.

function addThreeElements(x, y, z) {
  return (x+y+z);
}
let spreadOperator = [22, 3, 5, 5, 15];
console.log(addThreeElements(...spreadOperator));

//copy arrays

let arr = [1, 2, 3];
let arr5 = [...arr];
arr5.unshift(0);
arr5.push(4);
console.log(arr5);
console.log(arr);

//Concatenate arrays

let array55 = [0, 1, 3, 5];
let array1 = [2, 4, 6];
/* console.log(array.concat(array1)); */
array = [...array55, ...array1, "string", null, true];
console.log(array);

//Rest: Condense multiple elements into an array

function multiply(multiplier, ...arg) {
  return arg.map(function (a) {
    return multiplier * a;
  })
}
console.log(multiply(2, 1, 4, 6))