// Soldier
class Soldier {
    constructor(health, strength) {
        this.health=health;
        this.strength=strength;
    }
    attack(){
        return this.strength;
    }
    receiveDamage(damage){
        this.health=this.health-damage;

    }
  }

// Viking
class Viking extends Soldier {
    constructor(name,health,strength) {
        super(health,strength);
        this.name=name;
    }
    receiveDamage(damage){
        this.health=this.health-damage;
         if(this.health>0){
             return `${this.name} has received ${damage} points of damage`
         } else {
            return `${this.name} has died in act of combat`
         }
    }
    battleCry(){
        return "Odin Owns You All!"
    }
}

// Saxon
class Saxon extends Soldier {
    constructor(health,strength){
        super(health,strength);
    }
    receiveDamage(damage){
        this.health=this.health-damage;
        if(this.health>0){
            return `A Saxon has received ${damage} points of damage`
        } else {
           return `A Saxon has died in combat`
        }
    }
}

// War
class War {
    constructor(){
        this.vikingArmy=[];
        this.saxonArmy=[];
    }
    addViking(viking){
        this.vikingArmy.push(viking)
    }
    addSaxon(saxon){
        this.saxonArmy.push(saxon)
    }
    vikingAttack(){
// je n'y arrive pas
        let saxon = this.saxonArmy[Math.round(Math.random*this.saxonArmy.length)];
        let viking = this.vikingArmy[Math.round(Math.random*this.vikingArmy.length)];
        saxon.receiveDamage=viking.strength;
        if (saxon.health<=0){
            this.saxonArmy.splice(saxon.indexOf,1);
        } else {
            return saxon.receiveDamage(viking.strength);
        }  
    }
    saxonAttack(){
// même que vikingattack, je cale
    }
    showStatus(){
//erreur jasmine
        if(this.saxonArmy.length===0){
            return "Vikings have won the war of the century!"
        }
        if(this.vikingArmy.length===0){
            return "Saxons have fought for their lives and survive another day..."
        }
        if(this.vikingArmy.length>=1&&this.saxonArmy.length>=1){
           return "Vikings and Saxons are still in the thick of battle."
        }
        
    }
}
