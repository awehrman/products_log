var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ProductSchema = new Schema({
	dateCreated: { type: Date, default: Date.now },
	name: String,
	shortName: String,
	brand: String,
	category: String,
	price: Number,
	size: Number,
	sizeUnit: String,
	ingredients: String,
	inStock: Boolean,
	image: String,
	logs: [{type: mongoose.Schema.Types.ObjectId, ref: 'Log'}]
});

module.exports = mongoose.model('Product', ProductSchema);