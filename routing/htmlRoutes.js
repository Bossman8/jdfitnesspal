const path = require("path");

module.exports = function(app) {
  app.get("/register", function(req, res) {
    res.sendFile(path.join(__dirname + "/../public/register.html"));
  });
  app.use(function(req, res) {
    res.sendFile(path.join(__dirname + "/../public/index.html"));
  });
};
