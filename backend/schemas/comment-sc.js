var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var commentSchema = new Schema({
    _user: {type: Schema.Types.ObjectId, ref: 'User'},
    _question: {type: Schema.Types.ObjectId, ref: 'Quest'},
    body: String,
    date: Date
});

module.exports = commentSchema;
