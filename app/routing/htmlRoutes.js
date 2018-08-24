// * A GET Route to `/survey` which should display the survey page.
// * A default, catch-all route that leads to `home.html` which displays the home page.

//Dependencies
//======================================================
var path = require("path");
//======================================================


//Routing/ URL paths
//======================================================
module.exports = function(app){

  //Route to survey
  app.get("/survey", function (req,res){
    res.sendFile(path.join(__dirname, "../public/survey.html"));
  });
  //Route to home
  app.get("/", function (req,res){
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });
  //Route to results ( is this a modal in the end???)

};
//======================================================
