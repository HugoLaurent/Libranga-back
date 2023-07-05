const Sequelize = require("sequelize");

const sequelize = new Sequelize("libranga", "libranga", "libranga", {
  host: "localhost",
  dialect: "postgres",
  port: 5432,
});

module.exports = sequelize;
