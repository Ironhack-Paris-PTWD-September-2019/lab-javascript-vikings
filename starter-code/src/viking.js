// Soldier
class Soldier {
  constructor(health, strength) {
  this.health = health;
  this.strength = strength;
  }
  attack(){
     return this.strength
  }
  receiveDamage(damage) {
    this.health = this.health-damage;
  }
}

// Vik

class Viking extends Soldier {
  constructor (health, strength, name){
    super(health, strength)

    this.name = name;
  }
}

if this.health >= 1 {
  console.log(`${this.name} has received ${this.damage} points of damage`);
}

if this.health <1 {
  console.log(`${this.name} has died in act of combat`);
}

// Saxon
class Saxon {}

// War
class War {}

