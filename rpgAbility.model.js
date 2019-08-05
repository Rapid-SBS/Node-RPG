const Mongoose = require('mongoose');
const Schema = Mongoose.Schema;

const AbilitySchema = new Schema({

	/* Display Properties */
	id: String,
	name: String,
	index: String,
	rpgclass: String,
	weapon: String,
	ability: String,
	type: String,
	bg: String,
	levelreq: Number,
	description: String,
	effect: String,
	damagecalc: String,

	/* Functional Properties */
	manacost: Number,
	target: String, // self, ally, allies, enemy, enemies
	dmgtype: String, // att or int
	crittype: String, // dmg or status
	weaponatt: Number,
	missrate: Number, // 0-3
	critrate: Number, // 0-3
	multiplier: Number,
	additive: Number,
	pierce: Number,
	heal: String,
	mana: Number,

	/* Buff/Debuff Arrays */
	buff: [{
		val: String,
		color: String,
		effect: String,
		duration: Number,
		att: Number,
		def: Number,
		int: Number,
		res: Number
	}],
	debuff: [{
		val: String,
		color: String,
		effect: String,
		duration: Number,
		att: Number,
		def: Number,
		int: Number,
		res: Number
	}],

});

module.exports = Mongoose.model('Ability', AbilitySchema);