const db = require("../db");

const commentController = {
  /**
   * Display all the comments
   */
  getAllComments: async (req, res) => {
    try {
      const result = await db.query(`SELECT * FROM "comment"`);
      res.json(result.rows);
      console.log(result.rows);
    } catch (err) {
      console.log(err);
      res.status(500).send("Error while retrieving comments");
    }
  },

  /**
   * Display a comment by his id
   */
  getComment: async (req, res) => {
    try {
      const result = await db.query(
        `SELECT * FROM "comment" WHERE comment_id = $1`,
        [req.params.id]
      );
      result.rows.length === 0
        ? res.status(404).send("There is no comment with this id")
        : res.json(result.rows);
      console.log(result.rows);
    } catch (err) {
      console.log(err);
      res.status(500).send("Error while retrieving the comment");
    }
  },

  /**
   * Add a new comment
   * @param {string} title - The title of the comment
   * @param {string} content - The content of the comment
   * @param {string} likes - The number of like of the comment
   * @param {string} user_id - The user_id of the comment
   * @param {string} article_id - The article_id of the comment
   */
  createComment: async (req, res) => {
    try {
      const result = await db.query(
        `INSERT INTO "comment" (title, content, "likes", user_id, article_id)
             VALUES ($1, $2, $3, $4, $5)
             RETURNING comment_id`,
        [
          req.body.title,
          req.body.content,
          req.body.likes,
          req.body.user_id,
          req.body.article_id,
        ]
      );
      res.json({ comment_id: result.rows[0].comment_id });
      console.log("Comment added successfully");
    } catch (err) {
      console.log(err);
      res.status(500).send("Error while adding the comment");
    }
  },

  /**
   * Update an comment
   * @param {string} title - The title of the comment
   * @param {string} content - The content of the comment
   * @param {string} like - The number of like of the comment
   * @param {string} edited - The edited of the comment
   */
  updateComment: async (req, res) => {
    try {
      const result = await db.query(
        `UPDATE "comment" SET title = $1, content = $2, likes = $3 WHERE comment_id = $4`,
        [req.body.title, req.body.content, req.body.likes, req.params.id]
      );
      res.json(result.rows);
      console.log("Comment updated successfully");
    } catch (err) {
      console.log(err);
      res.status(500).send("Error while updating the comment");
    }
  },

  /**
   * Delete a comment
   * @param {number} comment_id - The id of the comment
   */
  deleteComment: async (req, res) => {
    try {
      const result = await db.query(
        `DELETE FROM "comment" WHERE comment_id = $1`,
        [req.params.id]
      );
      res.json(result.rows);
      console.log("Comment deleted successfully");
    } catch (err) {
      console.log(err);
      res.status(500).send("Error while deleting the comment");
    }
  },
};

module.exports = commentController;
