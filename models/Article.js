const { DataTypes } = require("sequelize");
const sequelize = require("../config/sequelize");

const User = require("./User");

const Article = sequelize.define(
  "Article",
  {
    article_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    manga: {
      type: DataTypes.STRING(128),
      allowNull: false,
    },
    title: {
      type: DataTypes.STRING(128),
      allowNull: false,
    },
    content: {
      type: DataTypes.STRING(1000),
      allowNull: false,
    },
    likes: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    edited: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    category_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    url: {
      type: DataTypes.STRING(128),
      allowNull: true,
    },
  },
  {
    tableName: "article",
    timestamps: true,
    createdAt: "created_at",
    updatedAt: "updated_at",
  }
);

module.exports = Article;
