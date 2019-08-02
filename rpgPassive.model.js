const Mongoose = require('mongoose');
const Schema = Mongoose.Schema;

const PassiveSchema = new Schema({
	id: String,
	name: String,
	description: String,
	levelreq: Number,
	index: String,
	bg: String,
	hp: Number,
	att: Number,
	def: Number,
	int: Number,
	res: Number,
	mana: Number,
});

module.exports = Mongoose.model('Passive', PassiveSchema);