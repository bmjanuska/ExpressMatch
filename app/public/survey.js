console.log("sanity");

//getting answers from select
$(".submit").on("click", function (){
  console.log("click!")
  //get input from "#q1"
  var scores = [];



  scores.push($('[name="q1"]').val());
  var ans2 = $('[name="q2"]').val();
  var ans3 = $('[name="q3"]').val();
  var ans4 = $('[name="q4"]').val();
  var ans5 = $('[name="q5"]').val();
  var ans6 = $('[name="q6"]').val();
  var ans7 = $('[name="q7"]').val();
  var ans8 = $('[name="q8"]').val();

  console.log(scores);



});

// function crash (){
//
// }
// const crash =() => {
//
// }
