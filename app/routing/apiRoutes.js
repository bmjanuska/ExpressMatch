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
};
