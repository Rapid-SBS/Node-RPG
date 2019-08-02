const Mongoose = require('mongoose');
const Schema = Mongoose.Schema;

const AbilitySchema = new Schema({
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
	manacost: Number,
	target: String,
	weaponatt: Number,
	missrate: Number,
	critrate: Number,
	dmgtype: String,
	multiplier: Number,
	additive: Number,
	pierce: Number,
	heal: String,
	buff: [{
		val: String,
		color: String,
		attack: String,
		att: Number,
		def: Number,
		int: Number,
		res: Number
	}],
	debuff: [{
		val: String,
		color: String,
		effect: String,
		att: Number,
		def: Number,
		int: Number,
		res: Number
	}],

});

module.exports = Mongoose.model('Ability', AbilitySchema);