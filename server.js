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
var PORT = 3000;

// Set up Exress app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
//======================================================

// People Data ??? where we have all of our attractive candidates...
//======================================================

//======================================================
