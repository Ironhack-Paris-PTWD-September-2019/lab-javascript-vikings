// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health;
        this.strength = strength;
    }

    attack(){
        return this.strength;
    }

    receiveDamage(theDamage){
        this.health -= theDamage;
    }

}

class Viking extends Soldier{
        constructor(name, health, strenght){
            super(name, health, strenght)
            this.name = name;
            this.health = health;
            this.strength = strenght;
        }

        receiveDamage(theDamage){
            this.health -= theDamage;
            if (this.health > 0){
                return `${this.name} has received ${theDamage} points of damage`;
            } else if (this.health <= 0){
                return `${this.name} has died in act of combat`;
                
            }
        }

        battleCry(){
            return  "Odin Owns You All!";
        }
}

class Saxon extends Soldier {
    constructor(health, strength){
        super(health, strength)
        this.health = health; 
        this.strength = strength;
    }

    receiveDamage(theDamage){
        this.health -= theDamage;
        if (this.health > 0){
            return `A Saxon has received ${theDamage} points of damage`;
        } else if (this.health <= 0){
            return `A Saxon has died in combat`;
        }
    }
}

// War
class War {
    constructor(){
        this.vikingArmy = [];
        this.saxonArmy = [];
    }

    addViking(viking){
        this.vikingArmy.push(viking);
    }

    addSaxon(saxon){
        this.saxonArmy.push(saxon);
    }

    vikingAttack(){
        //let randomSaxon = this.saxon[Math.floor(Math.random()*this.saxon.length)];
    }
        
         
    
}


