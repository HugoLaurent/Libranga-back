require("dotenv").config();

const express = require("express");
const routerPublic = require("./router/routerPublic");

const app = express();

const PORT = process.env.PORT || 3000;

// Définissez vos routes et middleware ici
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routerPublic);

// Démarrez le serveur // Définissez le numéro de port que vous souhaitez utiliser
app.listen(PORT, () => {
  console.log(`Le serveur est en cours d'exécution sur le port ${PORT}`);
});
