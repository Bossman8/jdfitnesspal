$(document).ready(function() {
  $(".parallax").parallax();
  $(".button-collapse").sideNav();
});
$(document).ready(function() {
  $(".carousel").carousel();
});
$(document).ready(function() {
  $(".modal").modal();
});
$(document).ready(function() {
  $("select").formSelect();
});
$(document).ready(function() {
  $(".sidenav").sidenav();
});

// var ctx = document.getElementById('myChart').getContext('2d');
// var myDoughnutChart = new Chart(ctx, {
//     type: 'doughnut',
//     data = {
//         labels: ["Yes", "No"],
//         datasets: [
//             {
//                 data: [65, 89]
//             }
//         ],
//         labels: [
//             "Red", "Blue"
//         ]

//     },
//     options: options
// });
$("#surveyBtn").on("click", function(event) {
  event.preventDefault();

  var newData = {
    workout: $("#q1")
      .val()
      .trim(),
    food: $("#q2")
      .val()
      .trim(),
    excercise: $("#q3")
      .val()
      .trim()
  };
  $.post("/api/new", newData).done(function(data) {
    console.log(data);
  });
  $("q1").val("");
  $("q2").val("");
  $("q3").val("");
  location.reload();
});

$("#deleteBtn").on("click", function(event) {
  event.preventDefault();

  var delInfo = {
    id: $("#Delete")
      .val()
      .trim()
  };

  $.post("/api/delete", delInfo).done(function(delData) {
    console.log(delData);
  });
});

function getCharts() {
  $.get("/api/chartInfo", function(data) {
    console.log(data);
    var workYes = 0;
    var workNo = 0;
    var foodYes = 0;
    var foodNo = 0;
    var exYes = 0;
    var exNo = 0;
    for (i = 0; i < data.length; i++) {
      if (data[i].workout === "1") {
        workYes += 1;
      } else if (data[i].workout === "2") {
        workNo += 1;
      }
      if (data[i].food === "1") {
        foodYes += 1;
      } else if (data[i].food === "2") {
        foodNo += 1;
      }
      if (data[i].excercise === "1") {
        exYes += 1;
      } else if (data[i].excercise === "2") {
        exNo += 1;
      }
    }
    var ctx = document.getElementById("myChart").getContext("2d");
    var chart = new Chart(ctx, {
      // The type of chart we want to create
      type: "doughnut",

      // The data for our dataset
      data: {
        labels: ["Yes", "N0"],
        datasets: [
          {
            label: "January",
            backgroundColor: ["Teal", "White"],
            borderColor: ["Teal", "White"],
            data: [foodYes, foodNo]
          }
        ]
      },

      // Configuration options go here
      options: {}
    });
    var ctr = document.getElementById("myChart1").getContext("2d");
    var chart = new Chart(ctr, {
      // The type of chart we want to create
      type: "doughnut",

      // The data for our dataset
      data: {
        labels: ["Yes", "N0"],
        datasets: [
          {
            label: "January",
            backgroundColor: ["Teal", "White"],
            borderColor: ["Teal", "White"],
            data: [workYes, workNo]
          }
        ]
      },

      // Configuration options go here
      options: {}
    });
    var ctc = document.getElementById("myChart2").getContext("2d");
    var chart = new Chart(ctc, {
      // The type of chart we want to create
      type: "doughnut",

      // The data for our dataset
      data: {
        labels: ["Yes", "N0"],
        datasets: [
          {
            label: "January",
            backgroundColor: ["Teal", "White"],
            borderColor: ["Teal", "White"],
            data: [exYes, exNo]
          }
        ]
      },

      // Configuration options go here
      options: {}
    });
    console.log(workYes);
    console.log(workNo);
    console.log(foodYes);
    console.log(foodNo);
    console.log(exYes);
    console.log(exNo);
  });
}
getCharts();
