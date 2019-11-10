var Sequelize = require("sequelize");
var sequelize = require("../config/connection.js");

var Chart = sequelize.define(
  "chart",
  {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    workout: {
      type: Sequelize.STRING
    },
    food: {
      type: Sequelize.STRING
    },
    excercise: {
      type: Sequelize.STRING
    }
  },
  {
    timestamps: false
  }
);

Chart.sync();

module.exports = Chart;
