class Animal{
    constructor(option){
        this.type = option.type;
    }
}

class Bat extends Animal{
    constructor(option){
        super(option);
        this.action1 = option.action1;
        this.action2 = option.action2;
    }

    call(){
        return `A ${this.type} can ${this.action1} and ${this.action2} `
    }
}

class Fish extends Animal{
    constructor(option){
        super(option);
        this.action1 = option.action1;
        this.action2 = option.action2;
    }

    call(){
        return `A ${this.type} can ${this.action1} and ${this.action2} `
    }
}

class Whale extends Animal{
    constructor(option){
        super(option);
        this.action1 = option.action1;
        this.action2 = option.action2;
    }

    call(){
        return `A ${this.type} can ${this.action1} and ${this.action2} `
    }
}

class Bird extends Animal{
    constructor(option){
        super(option);
        this.action1 = option.action1;
        this.action2 = option.action2;
    }

    call(){
        return `A ${this.type} can ${this.action1} and ${this.action2} `
    }
}

const bat = new Bat({type: 'bat', action1: 'fly', action2: 'feed milk'});
const fish = new Fish({type: 'fish', action1: 'swim', action2: 'lay eggs'});
const whale = new Whale({type: 'whale', action1: 'swim', action2: 'feed milk'});
const bird = new Bird({type: 'bird', action1: 'fly', action2: 'lay eggs'});

console.log(bat.call());
console.log(fish.call());
console.log(whale.call());
console.log(bird.call());