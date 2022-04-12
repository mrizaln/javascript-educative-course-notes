//============[ declaring a variable ]============

let a;
a = 121039;
let b = 2143;
let c = 2312_234_324
console.log(a, b, c);



//============[ declaring a constant variable ]============

const pi = 3.14159;
// pi = 213;                   // will return an error



//============[ increment a number variable ]============

let d = 0;
d += 1;
console.log(d);
d++;
console.log(d);



//============[ variable scope ]============
let num1 = 0;
{
    num1 = 1; // OK : num1 is declared in the parent block
    const num2 = 0;
}

console.log(num1); // OK : num1 is declared in the current block
// console.log(num2); // Error! num2 is not visible here