const { DataTypes } = require("sequelize");
const sequelize = require("../config/sequelize");

const Article = sequelize.define(
  "Article",
  {
    article_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING(128),
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
    edited: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    tableName: "article",
    timestamps: false,
  }
);

module.exports = Article;
