const express = require("express");
const loginController = require("../controller/loginController");

const routerPrivate = express.Router();

routerPrivate.post("/api/user/login", loginController.getLoggedUser);

module.exports = routerPrivate;
