var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var questSchema = new Schema({
    title: String,
    user: {type: Schema.Types.ObjectId, ref: 'User'},
    body: String,
    tags: [String],
    answers: [{type: Schema.Types.ObjectId, ref: 'Answer'}],
    comments: [{type: Schema.Types.ObjectId, ref: 'Comment'}],
    date: Date
});

module.exports = questSchema;
