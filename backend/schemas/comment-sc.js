var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var commentSchema = new Schema({
    user: {type: Schema.Types.ObjectId, ref: 'User'},
    body: String,
    date: Date
});

module.exports = commentSchema;
