var mongoose = require('mongoose');
var userSchema = require('./schemas/user-sc.js');
var commentSchema = require('./schemas/comment-sc.js');
var AnsCommentSchema = require('./schemas/ans-comment-sc.js');
var answerSchema = require('./schemas/answer-sc.js');
var questSchema = require('./schemas/quest-sc.js');

module.exports = {
    User: mongoose.model('User', userSchema),
    Comment: mongoose.model('Comment', commentSchema),
    AnsComment: mongoose.model('AnsComment',AnsCommentSchema),
    Answer: mongoose.model('Answer', answerSchema),
    Quest: mongoose.model('Quest', questSchema)
};

