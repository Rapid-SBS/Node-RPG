const Mongoose = require('mongoose');
const Schema = Mongoose.Schema;

const ClassSchema = new Schema({
	id: String,
	name: String,
	hp: Number,
	att: Number,
	def: Number,
	int: Number,
	res: Number
});

module.exports = Mongoose.model('Class', ClassSchema);