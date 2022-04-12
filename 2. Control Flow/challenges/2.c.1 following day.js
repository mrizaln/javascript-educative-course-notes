/*
    Write a program that accepts a day name from the user in the variable, then shows the name of the following day.
    Incorrect inputs must be taken into account.
*/

const today = prompt("Enter day: ");
// today = "Monday";

let nextDay;
switch (today) {
    case "Sunday": nextDay = "Monday"; break;
    case "Monday": nextDay = "Tuesday"; break;
    case "Tuesday": nextDay = "Wednesday"; break;
    case "Wednesday": nextDay = "Thursday"; break;
    case "Thursday": nextDay = "Friday"; break;
    case "Friday": nextDay = "Saturday"; break;
    case "Saturday": nextDay = "Sunday"; break;
    default: console.log("invalid");
}

console.log(`Following day: ${nextDay}`)