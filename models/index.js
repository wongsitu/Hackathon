// require mongoose and connect to database
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/disaster', { useNewUrlParser: true });

let Post = require('./post')

module.exports = {
  Post: Post
};
