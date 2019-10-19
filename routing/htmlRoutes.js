const path = require("path");

module.exports = function(app) {
  app.get("/register", function(req, res) {
    res.sendFile(path.join(__dirname + "/../public/register.html"));
  });
  app.get("/about", function(req, res) {
    res.sendFile(path.join(__dirname + "/../public/about.html"));
  });
  app.use(function(req, res) {
    res.sendFile(path.join(__dirname + "/../public/index.html"));
  });
};
