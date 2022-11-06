/* Escaping literal Quotes in Strings */
const sampleString = "I am a \"double quoted\" string inside \"double quotes\".";
console.log(sampleString);

/* Quoting Strings with Single Quotes */

const string = 'Finn claims to Jack "Algebaric!"';
console.log(string);
const goodString = 'Jake asks Finn, "Hey, let\'s go on an adventure?"';
console.log(goodString);
const badString = 'Finn responds, "Let\'s go!"';
console.log(badString);

/* Escape sequences in Strings */
const myStrg = "FirstLine\n\t\\SecondLine\nThirdLine";
console.log(myStrg);

/* Concatenating Strings with Plus Operator */
const mystring = "This is the start. " + "This is the end."
console.log(mystring);

/* Concatenating Strings with Plus equal Operator */
let abc = "This is the first sentence. ";
abc += "This is the second sentence."
console.log(abc);

/* Constracting strings with Variable */
const myName = "freecodecamp";
const abcd = "Hellow, our name is " + myName + ", how are you?"
console.log(abcd);

/* Appended variables to strings */
const anAdjective = "awesome!";
let abcde = "freecodecamp is ";
abcde += anAdjective;
console.log(abcde);

/* Find the length of a string */
console.log(abcde.length);
let abde = "hasan";
console.log(abde.length);

/* Use Bracket Notation to find the first character in a string */
let abxz = "";
const abef= "Hasan";
abxz = abef[0];
console.log(abxz);

/* Nth character of a string */
let anf = "Hasan";
const fna = anf[3];
console.log(fna);

/* Last character of a string */
let mno = "Hasan!";
let onm = mno[mno.length - 1];
console.log(onm);

/* Use Bracket Notation to find the nth-to-last character ina string */
let jkl = "Augusta"
let lkj = jkl[jkl.length - 3];
console.log(lkj);

/* Word Blank My dog is so big and he can ran very quickly.*/
let noun = "dog";
let adjective = "big";
let verb = "ran";
let adverb = "quickly";
const wordblank = "My " + noun + " is so " + adjective + " that it can " + verb + " very " + adverb + "."
console.log(wordblank);
