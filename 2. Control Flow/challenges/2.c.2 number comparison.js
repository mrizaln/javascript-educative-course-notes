/*
    Write a program that accepts two numbers, then compares their values and displays an appropriate message in all cases.
*/

const x = Number(prompt("Enter first number: "));
const y = Number(prompt("Enter second number: "));

if (x > y)
    console.log(`${x} is greater than ${y}`);
else if (x < y)
    console.log(`${x} is less than ${y}`);
else
    console.log(`${x} is equal to ${y}`);