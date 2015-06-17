var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var LogSchema = new Schema({
	dateCreated: { type: Date, default: Date.now },
	//additional details
	//products will have a reference to the logs that they belong to
});

module.exports = mongoose.model('Log', LogSchema);