$(document).ready(function() {
  $(".modal").modal();
});

$("#addNew").on("click", function(event) {
  event.preventDefault();

  var newUser = {
    name: $("#name")
      .val()
      .trim(),
    number: $("#number")
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
    id: $("#delEmail").val()
  };
  $.post("/api/delete", info).done(function(deldata) {
    console.log(deldata);
  });
});
