//============[ return value ]============

function sayHello() {
    return "Hello!";
}

console.log("start of the program");
const message = sayHello();
console.log(message);
console.log("end of the program");




//============[ local variables ]============

function saySayHello() {
    const message = "Hello";            // a local variable
    return message;
} // message dies here

console.log(saySayHello());




//============[ parameter passing ]============

function saySaySayHello(name) {         // name is a parameter
    return `Hello ${name}!`;
} // name dies here

function sayHelloThree(name1, name2, name3) {           // more than one parameter
    return `Hello ${name1}, ${name2}, and ${name3}!`;
}

console.log(saySaySayHello("Maiuna"));
console.log(saySaySayHello("Esteria"));

console.log(sayHelloThree("Rosmontis", "Amiya", "Kaltsit"));