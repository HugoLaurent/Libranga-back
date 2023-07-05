const express = require("express");

const userController = require("../controller/userController");
const articleController = require("../controller/articleController");
const commentController = require("../controller/commentController");
const categoryController = require("../controller/categoryController");

const routerPublic = express.Router();

routerPublic.get("/api/user/all", userController.getAllData);
routerPublic.get("/api/user/:id", userController.getUser);
routerPublic.post("/api/user/create", userController.addUser);
routerPublic.put("/api/user/:id/update", userController.updateUser);
routerPublic.delete("/api/user/:id/delete", userController.deleteUser);

routerPublic.get("/api/article/all", articleController.getAllArticles);
routerPublic.get("/api/article/:id", articleController.getArticle);
routerPublic.post("/api/article/create", articleController.createArticle);
routerPublic.put("/api/article/:id/update", articleController.updateArticle);
routerPublic.delete("/api/article/:id/delete", articleController.deleteArticle);

routerPublic.get("/api/comment/all", commentController.getAllComments);
routerPublic.get("/api/comment/:id", commentController.getComment);
routerPublic.post("/api/comment/create", commentController.createComment);
routerPublic.put("/api/comment/:id/update", commentController.updateComment);
routerPublic.delete("/api/comment/:id/delete", commentController.deleteComment);

routerPublic.get("/api/category/all", categoryController.getAllCategories);
routerPublic.get("/api/category/:id", categoryController.getCategory);
routerPublic.post("/api/category/create", categoryController.createCategory);
routerPublic.put("/api/category/:id/update", categoryController.updateCategory);
routerPublic.delete(
  "/api/category/:id/delete",
  categoryController.deleteCategory
);

module.exports = routerPublic;
