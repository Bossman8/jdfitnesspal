module.exports = function(app) {
  app.get("/registered", (req, res) => {
    res.json(users);
  });
};
