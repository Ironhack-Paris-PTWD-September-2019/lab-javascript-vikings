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

class Viking extends Soldier {
  constructor(name, health, strength) {
    super(health, strength);
    this.name = name;
  }

  receiveDamage(damage) {
    super.receiveDamage(damage);
    return this.health > 0
      ? `${this.name} has received ${damage} points of damage`
      : `${this.name} has died in act of combat`;
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
    return this.health > 0
      ? `A Saxon has received ${damage} points of damage`
      : `A Saxon has died in combat`;
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
    let saxon = this.saxonArmy[
      Math.floor(Math.random() * this.saxonArmy.length)
    ];
    let viking = this.vikingArmy[
      Math.floor(Math.random() * this.vikingArmy.length)
    ];
    let res = saxon.receiveDamage(viking.strength);

    this.saxonArmy = this.saxonArmy.filter(saxon => saxon.health > 0);
    return res;
  }

  saxonAttack() {
    let saxon = this.saxonArmy[
      Math.floor(Math.random() * this.saxonArmy.length)
    ];
    let viking = this.vikingArmy[
      Math.floor(Math.random() * this.vikingArmy.length)
    ];
    let res = viking.receiveDamage(saxon.strength);
    this.vikingArmy = this.vikingArmy.filter(viking => viking.health > 0);
    return res;
  }

  showStatus() {
    if (this.saxonArmy.length === 0)
      return "Vikings have won the war of the century!";
    if (this.vikingArmy.length === 0)
      return "Saxons have fought for their lives and survive another day...";
    if (this.vikingArmy.length >= 1 && this.saxonArmy.length >= 1)
      return "Vikings and Saxons are still in the thick of battle.";
  }
}
