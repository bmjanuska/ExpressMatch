//getting answers from select
//======================================================
$(".submit").on("click", function (){
  console.log("click!")
  //get input from "#q1"
  event.preventDefault();

// Inputs from user
var userInput = {
  name: $("#userName").val(),
  photo: $("#photoLink").val(),
  scores: [
  $('[name="q1"]').val(),
  $('[name="q2"]').val(),
  $('[name="q3"]').val(),
  $('[name="q4"]').val(),
  $('[name="q5"]').val(),
  $('[name="q6"]').val(),
  $('[name="q7"]').val(),
  $('[name="q8"]').val()
  ]
};
  console.log(userInput);

  // Send userInput through a POST to the friends API
  $.post("/api/friends", userInput)
    .then(function(data) {
      console.log(data);
    });

});
//======================================================


// function crash (){
//
// }
// const crash =() => {
//
// }


// JS Calculations
//======================================================
// app.post("/api/friends", function(req, res) {
//     // req.body hosts is equal to the JSON post sent from the user
//     // This works because of our body-parser middleware
//     var results = req.body.results;
//     // console.log(results);
//     //empty array to pull comparison results
//     var resultsArray = [];
//     //base number set to 0 to find closest match
//     var baseNum = 0;
// //loop through array of friends objects
// for (var i = 0; i < friends.length; i++) {
//     //set variable for difference to 0
//     var difference = 0;
//     //loop through each individual objects key value array of results
//     for (var j = 0; j < results.length; j++) {
//         //find the difference from each index of the results array in each object and the
//         //user results in as an absolute value (eliminating the potential for negative results)
//         //and assign the sum of those differences to the variable of difference
//         difference += (Math.abs(parseInt(friends[i].results[j]) - parseInt(results[j])))
//     }
//     //push those results into an array
//     resultsArray.push(difference);
// }
//     // loop over resultsarray and find the number closest to basenumber
//     for (var i = 0; i < resultsArray.length; i++) {
//         //if the result is greater than or equal to zero, assign that
//         //number to the base number until the highest number in the difference results remains
//         //as the base number
//         if (resultsArray[i] >= resultsArray[baseNum]) {
//             //reassign base number to highest number in results array
//             baseNum = i;
//         }
//     }
//     //pull the friend at the index that matches the basenumber and assign to a variable
//     var theOne = friends[baseNum];
//     res.json(theOne);
//     friends.push(req.body);
//
//     console.log(theOne.name);
//     console.log(theOne.photo);

    // res.redirect("/");

//======================================================
