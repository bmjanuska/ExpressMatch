//getting answers from select
//======================================================
$(".submit").on("click", function (){
  console.log("click");
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

  // Send userInput through a POST to the friends API
  $.post("/api/friends", userInput)
  .then(function(data) {
    console.log(data);
  });

  //make modal here
  // $("#").modal();

});
//======================================================


// function crash (){
//
// }
// const crash =() => {
//
// }
