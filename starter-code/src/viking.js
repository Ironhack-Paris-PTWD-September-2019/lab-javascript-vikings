// Soldier
class Soldier {
  constructor(health, strength) {
    (this.health = health), (this.strength = strength);
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
    if (this.health > 0) {
      return `${this.name} has received ${damage} points of damage`;
    } else {
      return `${this.name} has died in act of combat`;
    }
  }

  battleCry() {
    return "Odin Owns You All!";
  }
}
// Saxon
class Saxon extends Soldier {
  constructor(health, strength) {
    super(health, strength);
  }
  receiveDamage(damage) {
    super.receiveDamage(damage);
    if (this.health > 0) {
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
  addViking(vik) {
    this.vikingArmy.push(vik);
  }
  addSaxon(sax) {
    this.saxonArmy.push(sax);
  }
  vikingAttack() {
    this.saxA = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
    this.vikA = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
    this.saxA.receiveDamage(this.vikA.strength);

    if (this.saxA.health <= 0) {
      this.saxonArmy=this.saxonArmy.splice(this.saxonArmy.indexOf(this.saxA),1);
     
  }
  return this.saxonArmy;
  }

  saxonAttack() {
    this.saxB = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
    this.vikB = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];

    this.vikB.receiveDamage(this.saxB.strength);

    if (this.vikB.health <= 0) {
      this.vikingArmy=this.vikingArmy.splice(this.vikingArmy.indexOf(this.vikB),1);
     
  }
  return this.vikingArmy;

  }
  showStatus() {
    if (this.saxonArmy.length===0){
    return "Vikings have won the war of the century!";
  } else if(this.vikingArmy.length===0){
    return "Saxons have fought for their lives and survive another day...";
  } else if (this.saxonArmy.length>0 && this.vikingArmy.length>0){
    return "Vikings and Saxons are still in the thick of battle."           }
}
}




