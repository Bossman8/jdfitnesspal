var Sequelize = require("sequelize");
var sequelize = require("../config/connection");

var User = Sequelize.define("user", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  name: {
    type: Sequelize.STRING
  },
  number: {
    type: Sequelize.INTEGER
  },
  email: {
    type: Sequelize.STRING
  },
  timestamps: false
});

User.sync();

module.exports = User;
