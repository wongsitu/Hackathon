// SERVER-SIDE JAVASCRIPT

// require Express, create an Express app
var express = require('express');
var app = express();
var bodyParser = require('body-parser');

// add the body-parser middleware to the server
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// serve the public directory as a static file directory
app.use(express.static('public'));

// Require the models directory in server.js
var db = require('./models');
var controllers = require('./controllers');

////////////////////
//  ROUTES
///////////////////

// define a root route: localhost:3000/
app.get("/", (req, res) => {
  res.sendFile("views/index.html", { root: __dirname });
});

app.get('/api/posts', controllers.posts.index);;
app.post('/api/posts', controllers.posts.create);
/**********
 * SERVER *
**********/

// tell the app to listen on a port so that the server will start
app.listen(process.env.PORT || 3000, function () {
  console.log('Express server is running on http://localhost:3000/');
});
