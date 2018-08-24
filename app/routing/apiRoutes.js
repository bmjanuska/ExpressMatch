// * A GET route with the url `/api/friends`. This will be used to display a JSON of all possible friends.
// * A POST routes `/api/friends`. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.


var friends = require("../data/friends");

module.exports = function(app) {
  // Friends JSON shows up on 3000/api/friends
  app.get("/api/friends", function(req, res) {
    res.json(friends);
  });

  // Recieving new information from user input and adding it to our JSON of friends
  app.post("/api/friends", function(req, res) {
    var newDate = req.body;
    console.log(newDate);
    friends.push(newDate);
    res.json(newDate);
  });

  var friends = require("../data/friends");
  module.exports = function(app){

    app.post("/api/friends", function(req, res){
      var results = req.body.results;
      var resultsArray = [];

      var lowestNum = 0;

      for (var i = 0; i < friends.length; i++){
        var difference = 0;

        for (var j = 0; j < results.length; j++){
          difference += (Math.abs(parseInt(friends[i].results[j]) - parseInt(results[j])))
        }
        resultsArray.push(difference);

        for (var i = 0; i < resultsArray.length; i++) {
          if (resultsArray[i] >= resultsArray [lowestNum]){
            lowestNum = i;
          }
        }

        var theMatch = friends[lowestNum];
        res.json(theMatch);
        friends.push(req.body);

        console.log(theMatch.name);
        console.log(theMatch.photo);

        //get this information to pop up on /match
      }
    });

  };
};
