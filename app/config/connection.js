require("dotenv/config");

var keys = require("./keys");
var Sequelize = require("sequelize");
var password = keys.sql.myslq_pass;
console.log(keys.sql);

var sequelize = new Sequelize("jdfitnesspadDB", "root", "Laceylou22!", {
  host: "localhost",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    idle: 1000
  }
});

module.exports = sequelize;
