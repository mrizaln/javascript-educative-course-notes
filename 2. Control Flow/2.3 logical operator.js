//============[ logical operator ]============

let eval;
let aa = 1;
let bb = 0;
let cc = 9;

// logical AND (&&)
eval = (aa > bb) && (aa > cc);      // true and false = false
console.log(eval);

// logical OR (||)
eval = (aa > bb) || (aa > cc);      // true or false = true
console.log(eval);

// logical NOT (!)
eval = !(aa > bb) || (aa > cc);      // not true or false = false
console.log(eval);



//============[ logical operator on if statement ]============

if ((aa > bb) && (aa > cc))
    console.log("aa is greater than bb and cc");
else if ((aa > bb) && (aa < cc))
    console.log("aa is between bb and cc");
else if ((aa < bb) && (aa < cc))
    console.log("aa is less than bb and cc");