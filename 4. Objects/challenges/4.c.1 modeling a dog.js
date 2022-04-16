/* Create a Dog object with the following properties:

    A name property is set to “Tim”
    A species property is set to “German Shepherd”
    A size property is set to “3 foot”
    describe() - returns “Tim belongs to German Shepherd species and its size is 3 foot”
    bark() - returns “Woof!”
*/

var dog = {
    name: "Tim",
    species: "German Shepherd",
    size: '3 foot',
  
    describe() {
        return `${this.name} belongs to ${this.species} species and its size is ${this.size}`;
    },
    bark() {
        return "Woof!";
    },
};

console.log(dog.describe());
console.log(dog.bark());
