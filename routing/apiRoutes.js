var User = require("../app/models/registration.js");

module.exports = function(app) {
  app.get("/api/registered", (req, res) => {
    User.findAll({}).then(function(results) {
      res.json(results);
    });
  });

  app.get("/api/:excercise", (req, res) => {
    if (req.params.excercise) {
      User.findAll({
        where: {
          title: req.params.excercise
        }
      }).then(function(results) {
        res.json(results);
      });
    }
  });
};
