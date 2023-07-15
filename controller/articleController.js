const Article = require("../models/Article");
const User = require("../models/User");
const Comment = require("../models/Comment");

const articleController = {
  getAllArticles: async (req, res) => {
    try {
      const articles = await Article.findAll({ include: Comment });
      const articlesWithUserNames = [];

      for (const article of articles) {
        const user = await User.findByPk(article.user_id);
        const articleWithUserName = {
          ...article.toJSON(),
          pseudo: user ? user.pseudo : "Unknown User",
        };
        articlesWithUserNames.push(articleWithUserName);
      }

      res.json(articlesWithUserNames);
    } catch (error) {
      res.status(500).send("Error while retrieving articles");
    }
  },

  // Get the article with the most likes
  // Méthode pour récupérer l'article trié par likes
  getArticleByLike: async (req, res) => {
    try {
      const articles = await Article.findAll({
        order: [["likes", "DESC"]],
      });

      if (articles.length > 0) {
        const article = articles[0];
        const userId = article.user_id;

        const user = await User.findByPk(userId);

        if (user) {
          const pseudo = user.pseudo;
          res.json({ article, pseudo });
        } else {
          res.status(404).send("User not found");
        }
      } else {
        res.status(404).send("No articles found");
      }
    } catch (error) {
      console.log(error);
      res.status(500).send("Error while retrieving articles");
    }
  },

  getArticle: async (req, res) => {
    try {
      const article = await Article.findByPk(req.params.id);
      if (!article) {
        res.status(404).send("There is no article with this id");
      } else {
        res.json(article);
        console.log(article);
      }
    } catch (error) {
      console.log(error);
      res.status(500).send("Error while retrieving the article");
    }
  },

  createArticle: async (req, res) => {
    try {
      const newArticle = await Article.create({
        title: req.body.title,
        manga: req.body.manga,
        category_id: req.body.category_id,
        content: req.body.content,
        likes: req.body.likes,
        edited: req.body.edited,
        user_id: req.body.user_id,
      });

      res.json({ article_id: newArticle.article_id });
      console.log("Article added successfully");
    } catch (error) {
      console.log(error);
      res.status(500).send("Error while adding the article");
    }
  },

  updateArticle: async (req, res) => {
    try {
      const article = await Article.findByPk(req.params.id);
      if (!article) {
        res.status(404).send("There is no article with this id");
      } else {
        await article.update({
          title: req.body.title,
          content: req.body.content,
          likes: req.body.likes,
          edited: req.body.edited,
        });

        res.json(article);
        console.log("Article updated successfully");
      }
    } catch (error) {
      console.log(error);
      res.status(500).send("Error while updating the article");
    }
  },

  deleteArticle: async (req, res) => {
    try {
      const article = await Article.findByPk(req.params.id);
      if (!article) {
        res.status(404).send("There is no article with this id");
      } else {
        await article.destroy();
        res.json(article);
        console.log("Article deleted successfully");
      }
    } catch (error) {
      console.log(error);
      res.status(500).send("Error while deleting the article");
    }
  },
};

module.exports = articleController;
