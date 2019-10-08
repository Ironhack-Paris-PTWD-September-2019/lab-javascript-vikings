// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health;
        this.strength = strength;
    }

    attack() {
        return this.strength;
    }

    receiveDamage(damage) {
        this.health -= damage;
    }
}

// Viking
class Viking extends Soldier {
    constructor(name, health, strength) {
        super(health, strength);
        this.name = name;
    }

    receiveDamage(damage) {
        super.receiveDamage(damage);

        if(this.health > 0) {
            return `${this.name} has received ${damage} points of damage`;
        } else {
            return `${this.name} has died in act of combat`;
        }
    }

    battleCry() {
        return `Odin Owns You All!`;
    }
}

// Saxon
class Saxon extends Soldier {
    constructor(health, strength) {
        super(health, strength);
    }

    receiveDamage(damage) {
        super.receiveDamage(damage);
        
        if(this.health > 0) {
            return `A Saxon has received ${damage} points of damage`;
        } else {
            return `A Saxon has died in combat`;
        }
    }
}

// War
class War {
    constructor() {
        this.vikingArmy = [];
        this.saxonArmy = [];
    }

    addViking(viking) {
        this.vikingArmy.push(viking);
    }

    addSaxon(saxon) {
        this.saxonArmy.push(saxon);
    }

    vikingAttack() {
        let randomIndexViking = Math.floor(Math.random() * this.vikingArmy.length);
        let randomIndexSaxon = Math.floor(Math.random() * this.saxonArmy.length);

        this.vikingAttacker = this.vikingArmy[randomIndexViking];
        this.saxonDefender = this.saxonArmy[randomIndexSaxon];

        this.saxonDefender.receiveDamage(this.vikingAttacker.attack());

        if(this.saxonDefender.health <= 0) {
            this.saxonArmy.splice(randomIndexSaxon, 1);
            return `A Saxon has died in combat`;
        }

        return `A Saxon has received ${this.vikingAttacker.strength} points of damage`;
    }

    saxonAttack() {
        let randomIndexViking = Math.floor(Math.random() * this.vikingArmy.length);
        let randomIndexSaxon = Math.floor(Math.random() * this.saxonArmy.length);

        this.saxonAttacker = this.saxonArmy[randomIndexSaxon];
        this.vikingDefender = this.vikingArmy[randomIndexViking];

        this.vikingDefender.receiveDamage(this.saxonAttacker.attack());

        if(this.vikingDefender.health <= 0) {
            this.vikingArmy.splice(randomIndexViking, 1);
            return `A Viking has died in combat`;
        }

        return `${this.vikingDefender.name} has received ${this.saxonAttacker.strength} points of damage`;
    }

    showStatus() {
        if(this.vikingArmy.length !== 0 & this.saxonArmy.length !== 0) {
            return `Vikings and Saxons are still in the thick of battle.`;
        } else if (this.saxonArmy.length === 0) {
            return `Vikings have won the war of the century!`;
        } else {
            return `Saxons have fought for their lives and survive another day...`;
        }    
    }
}
