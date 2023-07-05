const Sequelize = require("sequelize");

const dbHost = process.env.DB_HOST;
const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASSWORD;
const dbName = process.env.DB_NAME;

const sequelize = new Sequelize(dbName, dbUser, dbPassword, {
  host: dbHost,
  dialect: "postgres",
  port: 5432,
  define: {
    createdAt: "created_at",
    updatedAt: "updated_at",
  },
});

module.exports = sequelize;
