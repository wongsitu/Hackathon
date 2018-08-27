var db = require('../models');

// GET '/api/posts'
function index(req, res) {
  db.Post.find({}, function(err, foundPost) {
    res.json(foundPost);
  });
}

// POST '/api/posts'
function create(req, res) {
    var newPost = new db.Post(req.body);
    foundPost.push(newPost);
    foundPost.save(function(err, savedPost) {
      res.json(newPost);
    });
}




module.exports = {
  index: index,
  create: create,
};
