// task 1

for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0)
        console.log(`${i} is even`);
    else
        console.log(`${i} is odd`);
}




// task 2

const start = Number(prompt("Enter a number: "));
const end = start + 10;

for (let i = start; i <= end; i++) {
    if (i % 2 === 0)
        console.log(`${i} is even`);
    else
        console.log(`${i} is odd`);
}