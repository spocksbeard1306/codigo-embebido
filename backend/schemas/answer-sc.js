var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var answerSchema = new Schema({
    body: String,
    _user: {type: Schema.Types.ObjectId, ref: 'User'},
    _question: {type: Schema.Types.ObjectId, ref: 'Quest'},
    comments: [{type: Schema.Types.ObjectId, ref: 'Comment'}],
    date: Date
});

module.exports = answerSchema;
