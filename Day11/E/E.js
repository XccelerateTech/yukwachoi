function Food(type) {
    this.food = type;
    this.orginal = 'UK';
}
Food.prototype.taste = 'tasty';
var carrot = new Food('carrot');//setting the new identity to the object Food
console.log(carrot);// Food{ food: 'carrot', orginal: 'UK' }
carrot.taste; // 'tasty from prototype
var noodles = new Food('noodles');
console.log(noodles);//Food { food: 'noodles', orginal: 'UK' }

function Player(name) {
    this.name = name;
    this.energy = 100;
    this.attack = function attack(opponent) {
        opponent.energy -= 10;
    };
}

var odysseus = new Player('Odysseus');
var cyclopes = new Player('Cyclopes');

cyclopes.attack(odysseus);
console.log(odysseus.energy); // 90

// add a new method using prototype
Player.prototype.revenge = function(opponent) {
    opponent.energy -= 80;
};

odysseus.revenge(cyclopes);
console.log(cyclopes.energy); // 20

// add new property using prototype
Player.prototype.bonus = 100;
console.log(odysseus.bonus); // 100

class Car {
    drive() {
        return 'vroom'
    }
}
const car = new Car();
car.drive() // 'vroom'

class Car {
    constructor(options) {
        this.type = options.type;
    }
    drive() {
        return 'vroom'
    }
}
const car = new Car({ type: 'pickup' });
car.drive() // 'vroom'
console.log(car.type); // 'pickup'