const db = require("../db");

const articleController = {
  /**
   * Display all the articles
   */
  getAllArticles: async (req, res) => {
    try {
      const result = await db.query(`SELECT * FROM "article"`);
      res.json(result.rows);
      console.log(result.rows);
    } catch (err) {
      console.log(err);
      res.status(500).send("Error while retrieving articles");
    }
  },

  /**
   * Display an article by his id
   */
  getArticle: async (req, res) => {
    try {
      const result = await db.query(
        `SELECT * FROM "article" WHERE article_id = $1`,
        [req.params.id]
      );
      result.rows.length === 0
        ? res.status(404).send("There is no article with this id")
        : res.json(result.rows);
      console.log(result.rows);
    } catch (err) {
      console.log(err);
      res.status(500).send("Error while retrieving the article");
    }
  },

  /**
   * Add a new article
   * @param {string} title - The title of the article
   * @param {string} content - The content of the article
   * @param {string} likes - The number of like of the article
   * @param {string} edited - The edited of the article
   * @param {string} user_id - The user_id of the article
   */
  createArticle: async (req, res) => {
    try {
      const result = await db.query(
        `INSERT INTO "article" (title, content, "likes", edited, user_id)
             VALUES ($1, $2, $3, $4, $5)
             RETURNING article_id`,
        [
          req.body.title,
          req.body.content,
          req.body.likes,
          req.body.edited,
          req.body.user_id,
        ]
      );
      res.json({ article_id: result.rows[0].article_id });
      console.log("Article added successfully");
    } catch (err) {
      console.log(err);
      res.status(500).send("Error while adding the article");
    }
  },

  /**
   * Update an article
   * @param {string} title - The title of the article
   * @param {string} content - The content of the article
   * @param {string} like - The number of like of the article
   * @param {string} edited - The edited of the article
   */
  updateArticle: async (req, res) => {
    try {
      const result = await db.query(
        `UPDATE "article" SET title = $1, content = $2, likes = $3, edited = $4 WHERE article_id = $5`,
        [
          req.body.title,
          req.body.content,
          req.body.likes,
          req.body.edited,
          req.params.id,
        ]
      );
      res.json(result.rows);
      console.log("Article updated successfully");
    } catch (err) {
      console.log(err);
      res.status(500).send("Error while updating the article");
    }
  },

  /**
   * Delete an aritcle
   * @param {number} article_id - The id of the article
   */
  deleteArticle: async (req, res) => {
    try {
      const result = await db.query(
        `DELETE FROM "article" WHERE article_id = $1`,
        [req.params.id]
      );
      res.json(result.rows);
      console.log("Article deleted successfully");
    } catch (err) {
      console.log(err);
      res.status(500).send("Error while deleting the Article");
    }
  },
};

module.exports = articleController;
