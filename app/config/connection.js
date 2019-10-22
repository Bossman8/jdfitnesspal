var Sequelize = require("sequelize");

var sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASS,
  {
    host: "localhost",
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      idle: 1000
    }
  }
);

module.exports = sequelize;
console.log("worked");
