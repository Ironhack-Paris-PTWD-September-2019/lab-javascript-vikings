// Soldier
class Soldier {
  constructor (health, strength){
    this.health = health;
    this.strength = strength;
  }

  attack(){
    return this.strength;
  }

  receiveDamage(damage){
    this.health -= damage;
  }
}

// Viking
class Viking extends Soldier {
  constructor(name,health,strength){
    super(health,strength);
    this.name = name;
  }

  receiveDamage(damage){
    this.health -= damage;
    if (this.health>0){
      return (this.name+" has received " + damage.toString() + " points of damage");
    }
    return (this.name + " has died in act of combat")
  }

  battleCry(){
    return("Odin Owns You All!");
  }

}

// Saxon
class Saxon extends Soldier {
  constructor(health, strength){
    super(health,strength);
  }

  receiveDamage(damage){
    this.health -= damage;
    if (this.health > 0){
      return("A Saxon has received " + damage.toString() + " points of damage");
    }
    return ("A Saxon has died in combat")
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
    var chosenSax = Math.floor(Math.random()*this.saxonArmy.length);
    var chosenVik = Math.floor(Math.random()*this.vikingArmy.length);
    this.saxonArmy[chosenSax].receiveDamage(this.vikingArmy[chosenVik].strength);
    if (this.saxonArmy[chosenSax].health <=0){
      this.saxonArmy.splice(chosenSax,1);
      return ("A Saxon has died in combat");
    }
    return("A Saxon has received " + this.vikingArmy[chosenVik].strength.toString() + " points of damage");
    
  }

  saxonAttack(){
    var chosenSax = Math.floor(Math.random()*this.saxonArmy.length);
    var chosenVik = Math.floor(Math.random()*this.vikingArmy.length);
    this.vikingArmy[chosenVik].receiveDamage(this.saxonArmy[chosenSax].strength);
    if (this.vikingArmy[chosenVik].health <=0){
      
      var res= this.vikingArmy[chosenVik].name + " has died in act of combat"
      this.vikingArmy.splice(chosenVik,1);
      return (res);
    }
    return(this.vikingArmy[chosenVik].name+" has received " + this.saxonArmy[chosenSax].strength.toString() + " points of damage");
    
  }

  showStatus(){
    if (this.saxonArmy.length ===0){
      return ("Vikings have won the war of the century!");
    }
    else if (this.vikingArmy.length === 0){
      return ("Saxons have fought for their lives and survive another day...")
    }
    return ("Vikings and Saxons are still in the thick of battle.");
  }
}
