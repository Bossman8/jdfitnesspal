var User = require("../app/models/registration.js");

module.exports = function(app) {
  app.get("/registered", (req, res) => {
    User.findAll({}).then(function(results) {
      res.json(results);
    });
  });
};
