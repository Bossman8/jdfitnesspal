$(document).ready(function() {
  $(".sidenav").sidenav();
});

$(document).on("click", "#submitLowCal", getLowCal);
$(document).on("click", "#submitHighCal", getHighCal);

function getLowCal() {
  $("#slimMeals").empty();
  var ingr = $("#lowCarbIngr")
    .val()
    .trim();

  var queryURL =
    "https://api.edamam.com/search?app_id=609fc0ed&app_key=271a312f942a82dfc148020a79d9a06a&q=" +
    ingr +
    "&calories=100-300&to=10";

  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
    for (i = 0; i < 9; i++) {
      var br = $("<br>");
      var title = $("<h4>");
      var pic = $("<img>");
      var recipe = $("<ul>");
      var label = response.hits[i].recipe.label;
      var image = response.hits[i].recipe.image;
      var ingredients3 = $("<li>");
      for (r = 0; r < response.hits[i].recipe.ingredientLines.length; r++) {
        var ingredients1 = response.hits[i].recipe.ingredientLines[r];
        ingredients3.append(ingredients1 + "  & ");
      }
      console.log(ingredients3);
      title.html(label);
      pic.attr("src", image);

      recipe.html(ingredients3);

      $("#slimMeals").append(title);
      $("#slimMeals").append(pic);
      $("#slimMeals").append(recipe);
      $("#slimMeals").append(br);
    }
  });
}

function getHighCal() {
  $("#carbMeals").empty();
  var ingr = $("#highCarbIngr")
    .val()
    .trim();

  var queryURL =
    "https://api.edamam.com/search?app_id=609fc0ed&app_key=271a312f942a82dfc148020a79d9a06a&q=" +
    ingr +
    "&calories=1000-3000&to=10";

  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
    for (i = 0; i < 9; i++) {
      var br = $("<br>");
      var title = $("<h4>");
      var pic = $("<img>");
      var recipe = $("<p>");
      var label = response.hits[i].recipe.label;
      var image = response.hits[i].recipe.image;
      var ingredients3 = [];
      for (r = 0; r < response.hits[i].recipe.ingredientLines.length; r++) {
        var ingredients1 = response.hits[i].recipe.ingredientLines[r];
        ingredients3.push(ingredients1 + "  & ");
      }
      console.log(ingredients3);
      title.html(label);
      pic.attr("src", image);

      recipe.html(ingredients3);

      $("#carbMeals").append(title);
      $("#carbMeals").append(pic);
      $("#carbMeals").append(recipe);
      $("#carbMeals").append(br);
    }
  });
}
