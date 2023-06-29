const express = require("express");

const userController = require("../controller/userController");

const routerPublic = express.Router();

routerPublic.get("/api/user", userController.getAllData);
routerPublic.get("/api/user/:id", userController.getUser);
routerPublic.post("/api/user/create", userController.addUser);
routerPublic.put("/api/user/:id/update", userController.updateUser);
routerPublic.delete("/api/user/:id/delete", userController.deleteUser);

module.exports = routerPublic;
