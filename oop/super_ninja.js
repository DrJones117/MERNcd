class Ninja {
    constructor(name) {
        this.name = name;
        this.health = 90;
        this.speed = 3;
        this.strength = 3;
    }

    sayName() {
        console.log("Name: " + this.name)
    }

    showStats() {
        console.log("Health: " + this.health)
        console.log("speed: " + this.speed)
        console.log("strength: " + this.strength)
    }

    drinkSake() {
        this.health += 10;
    }
}

class Sensei extends Ninja {
    constructor(name, health = 210, speed = 10, strength = 10, wisdom = 10) {
        super(name, health, speed, strength)
        this.wisdom = wisdom
    }

    senseiStats() {
        const stats = super.showStats();
        console.log(`Wisdom: ${this.wisdom}`)
    }

    senseiName() {
        const name = super.sayName();
    }

    speakWisdom() {
        console.log("What one programmer can do in one month, two programmers can do in two months.")
    }
}


const ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();
ninja1.showStats();

const superSensei = new Sensei("Master Splinter", 10);
superSensei.senseiName();
superSensei.senseiStats();
superSensei.speakWisdom();