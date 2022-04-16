// Let’s try creating a mini-role playing game (RPG) using objects
// In a role-playing game, each character is defined by many attributes like strength, stamina or intelligence.

// In our simpler example, a character will have three attributes:
    //     name,
    //     health (number of life points),
    //     strength.




//============[ a naive example ]============

const aurora = {
    name: "Aurora",
    health: 150,
    strength: 25,
};

console.log(`${aurora.name} has ${aurora.health} health points and ${aurora.strength} as strength`);

// Aurora is harmed by an arrow
aurora.health -= 20;

// Aurora equips a strength neclace
aurora.strength += 10;

console.log(`${aurora.name} has ${aurora.health} health points and ${aurora.strength} as strength`);




//===========[ introducing methods ]============

// a function that descibes aurora

function describe(character) {
    return `${aurora.name} has ${aurora.health} health points and ${aurora.strength} as strength`;
}

console.log(describe(aurora));


// alternative: a method inside aurora object that describe itself

// adding the method dynamically
aurora.describe = () => `${this.name} has ${this.health} health points and ${this.strength} as strength. hey, it's method`;

console.log(aurora.describe());

// if the method is creted with the object initialization:
/*
    const aurora = {
        name: "Aurora",
        health: 150,
        strength: 25,

        describe() {
            return `${this.name} has ${this.health} health points and ${this.strength} as strength. hey, it's method`;
        },
    };
*/