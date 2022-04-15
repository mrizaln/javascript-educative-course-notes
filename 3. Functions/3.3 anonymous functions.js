//============[ function expression ]============

const hello = function(name) {
    const message = `Hello, ${name}!`;
    return message;
}
  
console.log(hello("Maiuna")); // "Hello, Richard!"

// the function created in this example has no name: it is anonymous




//============[ arrow function ]============

const helloHello = (name) => {
    const message = `Hello, ${name}!`;
    return message;
}

console.log(helloHello("Esteria"))

// arrow function syntax can be further simplified in some particular cases:
    // 1. when ther's only one statement in the function body, everything can be written on
    //    the same line without vurly braces. the return statement is omitted and implicit

    // 2. when the function accepts only one parameter, parantheses around it can be omitted


// one parameter one statement
const helloHelloHello = name => `Hello, ${name}!`;

console.log(helloHelloHello("Alianser"));


// two parameters one statement
const sum = (x, y) => x + y;

console.log(sum(12, 4));