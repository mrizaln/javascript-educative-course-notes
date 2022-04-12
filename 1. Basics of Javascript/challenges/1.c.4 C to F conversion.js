/*
    Write a program that asks for a temperature in degrees celsius, then displays it on the Fahrenheit scale.
*/

let tempC = Number(prompt("Enter Temp in Celcius: "));
let tempF = (tempC * 9 / 5) + 32

let outString = `Temp in Fahrenheit: ${tempF}`
alert(outString);
console.log(outString);
