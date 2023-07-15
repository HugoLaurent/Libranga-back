require("dotenv").config();

const express = require("express");
const routerPublic = require("./router/routerPublic");
const routerPrivate = require("./router/routerPrivate");

const app = express();

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:5173");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  next();
});

const PORT = process.env.PORT || 3500;

// Définissez vos routes et middleware ici
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routerPublic);

// Démarrez le serveur // Définissez le numéro de port que vous souhaitez utiliser
app.listen(PORT, () => {
  console.log(`Le serveur est en cours d'exécution sur le port ${PORT}`);
});
