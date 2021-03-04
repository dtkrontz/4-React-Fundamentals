// We name the class:
class User {
    // We call the constructor function and create parameters. These will be values that we want to be passed in and stored in the object.
    constructor(first, last, e) {
            //On the right side of these expressions the word 'first', 'last', and 'e' below is the value that is getting passed into the parens when the object is created
                // vvv
        this.f = first;
        this.l = last;
        this.email = e;
    // ^^^^^^^^^^^^
    // On the right side we have the actual properties of the object. The left side stores the incoming value from the right side as the property for 'this' specific object being created.
    }
}

let userOne = new User("Paul", "O'Connor", "poconnor@elevenfifty.org");
console.log(userOne.first); // undefined
console.log(userOne.f); // Paul
console.log(userOne.l); // O'Connor
console.log(userOne); // User { f: 'Paul', l: "O'Connor", email: 'poconnor@elevenfifty.org' }

/* 
    THE CLASS LOOKS LIKE THIS:

class User {
    constructor(first, last, e) {
        this.f = first;
        this.l = last;
        this.email = e;
    }
}

*/


// PLAYER CLASS WITH THREE PROPERTIES OF NAME, NUMBER, AND AVERAGE POINTS.

class Player {
    constructor(name, number, points) {
        this.player = name;
        this.playerNumber = number;
        this.averagePoints = points;
    }
}

let playerOne = new Player("Dustin Krontz", 14, 45);
console.log(playerOne.name); // undefined
console.log(playerOne.player); // Dustin Krontz
console.log(playerOne.playerNumber); // 14
console.log(playerOne.averagePoints); // 45
console.log(playerOne); // Player { player: 'Dustin Krontz', playerNumber: 14, averagePoints: 45 }

// CAR CLASS WITH MAKE MODEL AND YEAR.

class Car {
    constructor(make, model, year) {
        this.car = make;
        this.carNumber = model;
        this.averagePoints = year;
    }
}

let carOne = new Car("Volkswagen", 'GTI', 2016);
console.log(carOne.name); // undefined
console.log(carOne.car); // Volkswagen
console.log(carOne.carNumber); // GTI
console.log(carOne.averagePoints); // 2016
console.log(carOne); // Car { car: 'Volkswagen', carNumber: 'GTI', averagePoints: 2016 }