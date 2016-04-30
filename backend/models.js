var answerSchema = require('./schemas/answer-sc.js');
var userSchema = require('./schemas/user-sc.js');
var questSchema = require('./schemas/quest-sc.js');
var commentSchema = require('./schemas/comment-sc.js');

module.exports = {
    Comment: mongoose.model('Comment', commentSchema),
    User: mongoose.model('User', userSchema),
    Answer: mongoose.model('Answer', answerSchema),
    Quest: mongoose.model('Quest', questSchema)
};
