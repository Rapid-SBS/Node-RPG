class rpgClass {
    constructor(name, hp, att, def, int, res, description) {
      this.name = name;
      this.hp = hp;
      this.att = att;
      this.def = def;
      this.int = int;
      this.res = res;
      this.description = description;
    }
}
 
class characterClassCreator
{
  static createWarrior()
  { let description = 'Masters of swords, shields, and axes, Warriors can deal physical damage or protect their allies with their high defense.'
    return new rpgClass("Warrior", 26, 3, 4, 0, 2, description); }
  static createMonk()
  { let description = 'Advocates of peace yet masters of martial arts, Monks have well-balanced stats and a wide selection of support abilities.'
    return new rpgClass("Monk", 23, 3, 3, 3, 3, description); }
  static createCleric()
  { let description = 'With the power to heal, enhance, or revive your allies with potent light abilities, the Cleric is the ultimate support class.'
    return new rpgClass("Cleric", 24, 2, 2, 3, 4, description); }
  static createArcher()
  { let description = 'Attack from afar with the Archer. Deal high damage, pierce enemy defenses, or use your connection with nature to support your allies.'
    return new rpgClass("Archer", 25, 5, 1, 2, 2, description); }
  static createMage()
  { let description = 'Knowledge of the natural laws allows you to use incredible elemental abilities with the power of ice, fire, and lightning.'
    return new rpgClass("Mage", 26, 0, 0, 6, 3, description); }
  static createRuneMaster()
  { let description = 'Combine elements with runestones, balance light and darkness, or wield deadly runeblades as a Rune Master.'
    return new rpgClass("Rune Master", 24, 3, 2, 4, 2, description); }
  static createRogue()
  { let description = 'As deadly thieves and assassins, Rogues can become one with the shadows, dealing high damage with daggers, shuriken, or sai.'
    return new rpgClass("Rogue", 26, 6, 2, 0, 1, description); }
}

class Weapon {
	constructor(name, id) {
		this.name = name;
		this.id = id;
	}
}

/* ---------- [ ABILITIES ] ---------- */
class Ability {
	constructor(name, type, manacost, target, missrate, critrate) {
		this.name = name;
		this.type = type;
	  this.manacost = manacost;
	  this.target = target;
	  this.missrate = missrate;
		this.critrate = critrate;
	}
}

class Attack extends Ability {
	constructor(name, type, manacost, target, missrate, critrate, dmgtype, multiplier, additive, pierce, buff, debuff) {
		super(name, type, manacost, target, missrate, critrate);
		this.dmgtype = dmgtype;
	  this.multiplier = multiplier;
	  this.additive = additive;
	  this.pierce = pierce;
	  this.buff = buff;
	  this.debuff = debuff;
	  if (this.dmgtype == "att") {
		  this.dmg = function() {
		  	return current.att
		  };
		} else if (this.dmgtype == "int") {
			this.dmg = function() {
				return current.int
			};
		}
	  this.attCalc = function() {
	    return this.dmg() * this.multiplier + this.additive
	  };
	}
}

class Heal extends Ability {
	constructor(name, type, manacost, target, missrate, critrate, multiplier, additive, buff, debuff) {
		super(name, type, manacost, target, missrate, critrate);
		this.multiplier = multiplier;
	  this.additive = additive;
	  this.buff = buff;
	  this.debuff = debuff;
	  this.heal = function() {
	  	return current.int
	  };
	  this.healCalc = function() {
	    return this.heal() * this.multiplier + this.additive
	  };
	}
}

class Buff extends Ability {
	constructor(name, type, manacost, target, buff, debuff) {
		super(name, type, manacost, target);
		this.buff = buff;
		this.debuff = debuff;
	}
}

class AttackHeal extends Ability {
	constructor(name, type, manacost, target, missrate, critrate, dmgtype, multiplier, additive, pierce) {
		super(name, type, manacost, target, missrate, critrate);
		this.dmgtype = dmgtype;
	  this.multiplier = multiplier;
	  this.additive = additive;
	  this.pierce = pierce;
	  if (this.dmgtype == "att") {
		  this.dmg = function() {
		  	return current.att
		  };
		} else if (this.dmgtype == "int") {
			this.dmg = function() {
				return current.int
			};
		}
	  this.attCalc = function() {
	    return this.dmg() * this.multiplier + this.additive
	  };
	  this.healCalc = function() {
	    return this.dmg() * this.multiplier + this.additive
	  };
	}
}

class EnemyAttack {
	constructor(name, type, target, missrate, critrate, nthturn, dmgtype, multiplier, additive, pierce, heal, buff, debuff) {
		this.name = name;
		this.type = type;
		this.target = target;
		this.missrate = missrate;
		this.critrate = critrate;
		this.nthturn = nthturn;
		this.dmgtype = dmgtype;
	  this.multiplier = multiplier;
	  this.additive = additive;
	  this.pierce = pierce;
	  this.heal = heal;
	  this.buff = buff;
	  this.debuff = debuff;
	  if (this.dmgtype == "att") {
		  this.dmg = function() {
		  	return enemy.att
		  };
		} else if (this.dmgtype == "int") {
			this.dmg = function() {
				return enemy.int
			};
		}
	  this.attCalc = function() {
	    return this.dmg() * this.multiplier + this.additive
	  };
	}
}