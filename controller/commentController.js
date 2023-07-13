const db = require("../db");
const Comment = require("../models/Comment");

const User = require("../models/User");

const commentController = {
  getAllComments: async (req, res) => {
    try {
      const comments = await Comment.findAll();

      if (comments.length > 0) {
        const commentData = comments.map((comment) => {
          const pseudo = comment.User ? comment.User.pseudo : "User not found";
          return { comment, pseudo };
        });

        res.json(commentData);
      } else {
        res.status(404).send("No comments found");
      }
    } catch (error) {
      console.log(error);
      res.status(500).send("Error while retrieving comments");
    }
  },

  getComment: async (req, res) => {
    try {
      const comment = await Comment.findByPk(req.params.id);
      if (!comment) {
        res.status(404).send("No comment found with this id");
      } else {
        res.json(comment);
        console.log(comment);
      }
    } catch (error) {
      console.log(error);
      res.status(500).send("Error while retrieving the comment");
    }
  },

  createComment: async (req, res) => {
    try {
      const newComment = await Comment.create({
        title: req.body.title,
        content: req.body.content,
        likes: req.body.likes,
        user_id: req.body.user_id,
        article_id: req.body.article_id,
      });

      res.json({ comment_id: newComment.comment_id });
      console.log("Comment added successfully");
    } catch (error) {
      console.log(error);
      res.status(500).send("Error while adding the comment");
    }
  },

  updateComment: async (req, res) => {
    try {
      const comment = await Comment.findByPk(req.params.id);
      if (!comment) {
        res.status(404).send("No comment found with this id");
      } else {
        await comment.update({
          title: req.body.title,
          content: req.body.content,
          likes: req.body.likes,
        });

        res.json(comment);
        console.log("Comment updated successfully");
      }
    } catch (error) {
      console.log(error);
      res.status(500).send("Error while updating the comment");
    }
  },

  deleteComment: async (req, res) => {
    try {
      const comment = await Comment.findByPk(req.params.id);
      if (!comment) {
        res.status(404).send("No comment found with this id");
      } else {
        await comment.destroy();
        res.json(comment);
        console.log("Comment deleted successfully");
      }
    } catch (error) {
      console.log(error);
      res.status(500).send("Error while deleting the comment");
    }
  },
};

module.exports = commentController;
