let number;
while (true) {
    number = Math.floor(Math.random()*50); // Generate random values between 0 and 49

    if ((number >= 2) && (number <= 8)) {
        console.log(`\nYou got ${number}, here's the multiplication table: `);
        break;
    }
    console.log(`You got ${number}, try again`);
}

for (let i = 1; i <= 10; i++) {
    console.log(`${number} x ${i} = ${number * i}`);
}