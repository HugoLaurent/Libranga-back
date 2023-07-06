const Sequelize = require("sequelize");

const sequelize = new Sequelize("libranga", "libranga", "libranga", {
  host: "localhost",
  dialect: "postgres",
  port: 5432,
  define: {
    createdAt: "created_at",
    updatedAt: "updated_at",
  },
});

module.exports = sequelize;
