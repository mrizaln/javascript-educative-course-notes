// an object in programming is an entity that has properties


//============[ creating an object ]============

const pen = {
    type: "ballpoint",
    color: "blue",
    brand: "Bic",
};

// piece of code above is called an object literal




//============[ accessing an object properties ]===========

console.log(pen.type);
console.log(pen.color);
console.log(pen.brand);

console.log(`I write with a ${pen.color} ${pen.brand} ${pen.type} pen`);




//============[ modifying an object ]============

pen.color = "red";      // modify the pen color property

console.log(`I write with a ${pen.color} ${pen.brand} ${pen.type} pen`);




//============[ dynamically add new properties ]============

pen.price = 2.5;        // add new price property to pen object

console.log(`My pen costs \$${pen.price}`);