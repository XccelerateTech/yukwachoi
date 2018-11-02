function Player(name) {
    this.name = name;
    this.energy = 50;
    this.attack = function (opperent) {
        opperent.energy -= 10;
    }
}

var mary = new Player('Mary');
var pete = new Player('Pete');


Player.prototype.recover = function (name) {
    name.energy += 5;
};

var a = 0;
var b = 0;

function strike() {
    if (number >= 0.5) {
            mary.attack(pete);
            console.log('Mary attack');
            console.log(number);
            console.log('Pete energy is ' + pete.energy);
            b++; // for each mary attacking to pete, pete will count one
            a = 0; // for each mary attacking, the a value will be zero 
        } else {
            pete.attack(mary);
            console.log('Pete attack');
            console.log(number);
            console.log('Mary energy is ' + mary.energy);
            a++;
            b = 0;
     }
}

function checkenergy() {
    if (a !== 0 && a % 3 == 0) {
        mary.recover(mary);
        console.log('Mary add 5 point and her energy is ' + mary.energy);
    }

    if (b !== 0 && b % 3 == 0) {
        pete.recover(pete);
        console.log('Pete add 5 point and his energy is ' + pete.energy);
    }

    console.log(a);
    console.log(b);
}


while (mary.energy != 0 && pete.energy != 0 && mary.energy > 0 && pete.energy > 0) {
    strike();
    var number = Math.random();
    checkenergy();
}

if (mary.energy <= 0) {
    console.log('Pete win');
} else if (pete.energy <= 0 ) {
    console.log('Mary win');
}


// while (mary.energy == !0) {
//     strike();
//     var number = Math.random();
// }