// Your `server.js` file should require the basic npm packages we've used in class: `express`, `body-parser` and `path`.

// Dependencies
//======================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
//======================================================

// Set up Exress app
//======================================================
var app = express();
var PORT = process.env.PORT || 3000;

//setting up static directory
app.use(express.static('app/public'))

// Set up Exress app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
//======================================================

// People Data ??? where we have all of our attractive candidates...
//======================================================

//======================================================

// Router
//======================================================
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

//======================================================

// Listener
//======================================================
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
//======================================================
