/*
    Write a program that asks the user for his first and last name and returns an
    appropriate hello message from the sayHello() function.
*/

function sayHello(fName, lName) {
    console.log(`Hello ${fName} ${lName}!`);
}

const fName = prompt("Enter First Name: ");
const lName = prompt("Enter Second Name: ");
sayHello(fName, lName);