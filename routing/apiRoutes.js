const path = require("path");
const users = [];

module.exports = function(app) {
  app.get("/registered", (req, res) => {
    res.json(users);
  });
};
