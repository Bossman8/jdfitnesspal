var Sequelize = require("sequelize");

var sequelize = new Sequelize(
  "heroku_64e34bb2eb9c5d1",
  "bd28da3dce2aa6",
  "df7a56b2",
  {
    host: "us-cdbr-iron-east-05.cleardb.net",
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      idle: 1000
    }
  }
);

module.exports = sequelize;

DB_HOST = us - cdbr - iron - east - (05).cleardb.net;
DB_USER = bd28da3dce2aa6;
DB_PASS = df7a56b2;
DB_NAME = heroku_64e34bb2eb9c5d1;
