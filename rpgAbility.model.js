const Mongoose = require('mongoose');
const Schema = Mongoose.Schema;

const AbilitySchema = new Schema({

	/* Display Properties */
	id: String,
	name: String,
	index: String,
	rpgclass: String,
	type: String,
	bg: String,
	levelreq: Number,
	description: String,
	effect: String,
	damagecalc: String,

	/* Functional Properties */
	manacost: Number,
	target: String, // self, ally, allies, enemy, enemies
	weaponatt: Number,
	missrate: Number, // 0-3
	critrate: Number, // 0-3
	dmgtype: String, // att or int
	multiplier: Number,
	additive: Number,
	pierce: Number,
	heal: String,

	/* Buff/Debuff Arrays */
	buff: [{
		val: String,
		color: String,
		effect: String
	}],
	debuff: [{
		val: String,
		color: String,
		effect: String
	}],

});

module.exports = Mongoose.model('Ability', AbilitySchema);