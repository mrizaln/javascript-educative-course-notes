/*
    Write a program that launches a carousel for 10 turns, showing the turn number each time.
*/

turns = Number(prompt("Enter number of turns: "));

// using while loop
let number = 1;
while (number <= turns) {
    console.log(`Turn number: ${number}`);
    number++;
}

// using for loop
for (let i = 1; i <= turns; i++) {
    console.log(`Turn number: ${i}`);
}