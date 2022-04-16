// create two functions that can calculate the circumference and area of a circle

const circumference = r => (2 * Math.PI * r);
const area = r => Math.PI * r * r;

console.log("circumference of a circle with radius 5: ", circumference(5));
console.log("area of a circle with radius 5: ", area(5));