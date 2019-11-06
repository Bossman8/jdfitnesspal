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
    username: {
      type: Sequelize.STRING
    },
    usernumber: {
      type: Sequelize.INTEGER
    },
    email: {
      type: Sequelize.STRING
    },
    weight: {
      type: Sequelize.INTEGER
    },
    excercise: {
      type: Sequelize.STRING
    }
  },
  {
    timestamps: false
  }
);

User.sync();

module.exports = User;
