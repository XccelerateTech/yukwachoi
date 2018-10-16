class Monster {
    constructor (whatever){
        this.name = "IamMonster";
        this.health = 100;
    }

    hero (max, min){ 
        var damage = Math.floor(Math.random() * (max - min + 1)) + min;
        this.wounded(damage); 
    }

    wounded(damage){
        if(this.health > 0){
            this.health -= damage;
            this.hero(20, 5);
        } else{
            return " I am dead Mon ";
        }
    }

}

const CatMon = new Monster("catmon");
console.log(CatMon.health);
CatMon.hero(20, 5);
console.log(CatMon.health);
console.log(CatMon.wounded());

