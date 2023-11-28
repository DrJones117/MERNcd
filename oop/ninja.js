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


const ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();
ninja1.showStats();
