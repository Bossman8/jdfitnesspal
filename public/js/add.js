$(document).ready(function() {
  $(".modal").modal();
});

$("#addNew").on("click", function(event) {
  event.preventDefault();
  console.log("#name");

  var newUser = {
    username: $("#name")
      .val()
      .trim(),
    usernumber: $("#number")
      .val()
      .trim(),
    email: $("#email")
      .val()
      .trim(),
    weight: $("#weight")
      .val()
      .trim(),
    excercise: $("#excercise")
      .val()
      .trim()
  };

  $.post("/api/new", newUser).done(function(data) {
    console.log(data);
  });

  $("#name").val("");
  $("#number").val("");
  $("#email").val("");
  $("#weight").val("");
  $("#excercise").val("");
});

$("#delete").on("click", function(event) {
  event.preventDefault();
  var email = $("#delEmail").val();
  console.log(email);

  var info = {
    email: $("#delEmail").val()
  };
  $.post("/api/delete", info).done(function(deldata) {
    console.log(deldata);
  });
});
