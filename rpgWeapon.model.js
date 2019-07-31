const Mongoose = require('mongoose');
const Schema = Mongoose.Schema;

const WeaponSchema = new Schema({
	id: String,
	rpgclass: String,
	name: String,
	index: String,
	bg: String,
	basicname: String,
	basicdescription: String,
	basiceffect: String,
	basicdamagecalc: String,
	basicweaponatt: Number,
	basicmisschance: String,
	basiccritchance: String,
	basicbuff: [{
		val: String,
		color: String,
		effect: String
	}],
	basicdebuff: [{
		val: String,
		color: String,
		effect: String
	}],
	specialname: String,
	specialdescription: String,
	specialmanacost: Number,
	specialeffect: String,
	specialdamagecalc: String,
	specialweaponatt: Number,
	specialcritchance: String,
	specialmisschance: String,
	specialbuff: [{
		val: String,
		color: String,
		effect: String
	}],
	specialdebuff: [{
		val: String,
		color: String,
		effect: String
	}]
});

module.exports = Mongoose.model('Weapon', WeaponSchema);