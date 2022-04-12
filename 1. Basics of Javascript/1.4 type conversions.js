//============[ implicit conversions ]============

const f = 100;
// Show "Variable f contains the value 100"
console.log("Variable f contains the value " + f);          // here f converted from number to string

// this can't be done
const g = "five" * 2;
console.log(g);                 // show NaN, no error

// this also can't be done
const asdf = 3 * "lets do this ";
console.log(asdf);              // show NaN, no error




//============[ explicit conversion ]============

// Number(): convert string to number

const h = "5";
console.log(h + 1);     // concatenation: show the string "51"
const i = Number("5");
console.log(i + 1);     // numerical addition: show the number 6

// String(): convert number to string

const j = 5;
console.log(j + 1);     // addition
const k = String(j);
console.log(k + 1);     // concatenation


// boolean conversions

let string = '';
let boolstring = Boolean(string);       // false
console.log(boolstring);

string = "string";
boolstring = Boolean(string);           // true
console.log(boolstring);

let number = 0;
let boolnumber = Boolean(number);       // false
console.log(boolnumber);

number = 213;
boolnumber = Boolean(number);           // true
console.log(boolnumber);
