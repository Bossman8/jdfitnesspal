var Sequelize = require("sequelize");
var sequelize = require("../config/connection.js");

var User = sequelize.define(
  "user",
  {
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
    weight: {
      type: Sequelize.INTEGER
    },
    excersize: {
      type: Sequelize.STRING
    }
  },
  {
    timestamps: false
  }
);

User.sync();

module.exports = User;
