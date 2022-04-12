//============[ expression ]============

// 3 is an expression whose value is 3
const c = 3;

// d is an expression whose value is the value of c (3 here)
let d = c;

// (d + 1) is an expression whose value is d's + 1 (4 here)
d = d + 1; // d now contains the value 4
console.log(d); // Show 4




//============[ paranthesis can be used to "prioritize" expression ]============


let e = 3 + 2 * 4; // e contains 11 (3 + 8)
console.log(e);
e = (3 + 2) * 4;   // e contains 20 (5 * 4)
console.log(e);




//============[ template literals ]============

// basically variable substitution into a string
// equivalent to f-string in python

const country = "France";

console.log(`I live in ${country}`);        // Show "I live in France"
const x = 3;
const y = 7;
console.log(`${x} + ${y} = ${x + y}`);      // Show "3 + 7 = 10"