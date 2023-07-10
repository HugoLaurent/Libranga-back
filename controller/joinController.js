const Comment = require("../models/Comment");
const { User, Article } = require("../models/index");

const joinController = {
  getArticlesByUser: async (req, res) => {
    const user_id = req.params.id;
    try {
      const articles = await Article.findAll({
        where: {
          user_id: user_id,
        },
      });

      res.json(articles);
      console.log(articles);
    } catch (error) {
      console.log(error);
      res.status(500).send("Error while retrieving articles");
    }
  },

  getCommentsByArticle: async (req, res) => {
    const article_id = req.params.id;

    try {
      const articles = await Comment.findAll({
        where: {
          article_id: article_id,
        },
      });

      res.json(articles);
      console.log(articles);
    } catch (error) {
      console.log(error);
      res.status(500).send("Error while retrieving articles");
    }
  },
};

module.exports = joinController;
