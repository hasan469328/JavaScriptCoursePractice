const myArray = ["peanut", 9, "butter"];
console.log(myArray);
/* Multidimensional Array */
const MultidimensionalArray = [["good", 15, "bad"], ["man", "vs", "wild"]];
console.log(MultidimensionalArray);

/* Access Array Data With Indexes */
const myArray1 = [50, 60, 70, "goat"];
console.log(myArray1[1]);
const myArray3 = myArray1[3
];
console.log(myArray3);

/* Modify Array Data with Indexes */
const myArray4 = [35, 40, 60, "bull"];
myArray4[3] = 70;
console.log(myArray4);

/* Access Multi-Dimensional Arrays with Indexes */
const arr =[[1, 2, 3], [4, 5, 6], [7, 8, 9], [[10, 11, 12], 13, 14]];
console.log(arr);
const subarray = arr[3];
console.log(subarray);
const nestedsubarray = arr[3][0];
console.log(nestedsubarray);
const element = arr[3][0][2];
console.log(element);

/* Manipulate Arrays With push() function */
const arr1 = [1, 2, 3];
arr1.push(4);
console.log(arr1);
const arr2 = ["stimpson", "J", 
"cat"];
arr2.push(["happy", "Joy"]);
console.log(arr2);

/* Manipulate Arrays with pop() function */
const threeArray = [1, 2, 3];
const oneDown = threeArray.pop();
console.log(oneDown);
console.log(threeArray);
const nestedArray = [["cat", 6], ["dog, 7"]];
const oneArrayDown = nestedArray.pop();
console.log(oneArrayDown);
console.log(nestedArray);

/* Manipulate Arrays with shift() function */
const myArray5 = [["john", 23, 78], ["dog", 56]];
const removeFirstElement = myArray5.shift();
console.log(removeFirstElement);
console.log(myArray5);

/* Manipulate Arrays with unshift() function */
const myArray6 = [["cat", 6, 23], ["dog", 9, 55]];
myArray6.shift();
myArray6.unshift(["cow", 7, 15]);
console.log(myArray6);

/* Shoping List with 5 elements */
const myList = [
  ["book", 5],
  ["notebook", 10],
  ["diary", 15],
  ["pen", 12],
  ["pencil", 12]
];
console.log(myList);
