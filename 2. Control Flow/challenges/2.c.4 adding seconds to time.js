/*
    Write a program that asks for a time under the form of three information (hours, minutes, seconds).
    The program calculates and shows the time one second after. Incorrect inputs must be taken into account.
*/

let h = Number(prompt("Enter the hours: "));
let m = Number(prompt("Enter the minutes: "));
let s = Number(prompt("Enter the seconds: "));

if ((0 <= h) && (h < 24) && (0 <= m) && (m < 60) && (0 <= s) && (s < 60)) {
    s++;

    if (s > 59) {
        m++;
        s = 0;
    }

    if (m > 59) {
        h++;
        m = 0;
    }

    if (h > 23)
        h = 0;

    console.log(`In a second, the time will be ${h} hours, ${m} minutes, and ${s} seconds`);   
}
else {
    console.log("Invalid input");
}