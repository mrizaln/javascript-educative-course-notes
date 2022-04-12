/*
    Write a program that asks the user for a raw price.
    After that, it calculates the corresponding final price using a VAT rate of 20.6
*/

const vatRate = 20.6

let rawPrice = Number(prompt("Enter Raw Price: "));
let finalPrice = rawPrice * (100 + vatRate) / 100;

let string = `Final Price: ${finalPrice}`;
alert(string);
console.log(string);