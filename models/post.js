var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// post schema
var PostSchema = new Schema({
    title: String,
    location: Number
});

// post model
var Post = mongoose.model('Post', PostSchema);

module.exports = Post;
