$("#submit").on("click", function() {
  event.preventDefault();

  var newFriend = {
    name: $("#userName").val(),
    photo: $("#userPhoto").val(),
    scores: [
      $("#q1").val(),
      $("#q2").val(),
      $("#q3").val(),
      $("#q4").val(),
      $("#q5").val(),
    ]
  };

  console.log(newFriend);

  var currentURL = window.location.origin;

  $.post(currentURL + "/api/friends", newFriend, function(data) {

    if (data == true) {
      //run function that shows best match
    } else if (data == false) {
      alert("this is false. ask what exactly is false and how this is judged")
    }

    $("#q1").val("");
    $("#q2").val("");
    $("#q3").val("");
    $("#q4").val("");
    $("#q5").val("");
  });

  return false;

});
