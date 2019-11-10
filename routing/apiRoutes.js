var Chart = require("../app/models/registration.js");

module.exports = function(app) {
  app.get("/api/chartInfo", (req, res) => {
    Chart.findAll({}).then(function(results) {
      res.json(results);
    });
  });

  app.get("/api/:excercise", (req, res) => {
    if (req.params.excercise) {
      Chart.findAll({
        where: {
          excercise: req.params.excercise
        }
      }).then(function(results) {
        res.json(results);
      });
    }
  });

  app.get("/api/:workout", (req, res) => {
    if (req.params.workout) {
      Chart.findAll({
        where: {
          workout: req.params.workout
        }
      }).then(function(results) {
        res.json(results);
      });
    }
  });

  app.get("/api/:food", (req, res) => {
    if (req.params.food) {
      Chart.findAll({
        where: {
          food: req.params.food
        }
      }).then(function(results) {
        res.json(results);
      });
    }
  });

  app.post("/api/new", (req, res) => {
    Chart.create({
      workout: req.body.workout,
      food: req.body.food,
      excercise: req.body.excercise
    });
  });

  app.post("/api/delete", (req, res) => {
    Chart.destroy({
      where: {
        id: req.body.id
      }
    });
  });
};
