const { Client } = require("pg");

const client = new Client({
  user: "libranga",
  host: "localhost",
  database: "libranga",
  password: "libranga",
  port: 5432, // ou le port que vous utilisez pour PostgreSQL
});

client.connect();

module.exports = client;
