var mongose = require('mongoose');
var Schema = mongoose.Schema;

var answerSchema = new Schema({
    body: String,
    user: {type: Schema.Types.ObjectId, ref: 'User'},
    comments: [{type: Schema.Types.ObjectId, ref: 'Comment'}],
    date: Date
});

module.exports = answerSchema;
