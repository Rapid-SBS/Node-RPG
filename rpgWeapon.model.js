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
	basicdamagecalc: String,
	basicweaponatt: Number,
	basicmisschance: String,
	basiccritchance: String,
	specialname: String,
	specialdescription: String,
	specialmanacost: Number,
	specialeffect: String,
	specialdamagecalc: String,
	specialweaponatt: Number,
	specialcritchance: String,
	specialmisschance: String,
	specialbuff: String,
	specialbuffval: String,
	specialbuffcolor: String,
	specialdebuff: String,
	specialdebuffval: String,
	specialdebuffcolor: String
});

module.exports = Mongoose.model('Weapon', WeaponSchema);