var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ansCommentSchema = new Schema({
    _user: {type: Schema.Types.ObjectId, ref: 'User'},
    _answer: {type: Schema.Type.ObjectId, ref: 'Answer'},
    body: String,
    date: Date
});

module.exports = ansCommentSchema;
