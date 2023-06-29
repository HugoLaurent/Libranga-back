const express = require("express");
const routerPublic = require("./router/routerPublic");

const app = express();
// Définissez vos routes et middleware ici
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routerPublic);

// Démarrez le serveur
const port = 3000; // Définissez le numéro de port que vous souhaitez utiliser
app.listen(port, () => {
  console.log(`Le serveur est en cours d'exécution sur le port ${port}`);
});
