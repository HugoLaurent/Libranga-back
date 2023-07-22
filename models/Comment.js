const { DataTypes } = require("sequelize");
const sequelize = require("../config/sequelize");

const Comment = sequelize.define(
  "Comment",
  {
    comment_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    content: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    likes: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    article_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    pseudo: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
  },
  {
    tableName: "comment",
    timestamps: true,
    createdAt: "created_at",
    updatedAt: "updated_at",
  }
);

module.exports = Comment;
