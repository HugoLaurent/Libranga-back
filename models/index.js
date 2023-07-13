const User = require("./User");
const Article = require("./Article");
const Comment = require("./Comment");
const Category = require("./Category");

User.hasMany(Article, { foreignKey: "user_id" });
Article.belongsTo(User, { foreignKey: "user_id" });

Article.hasMany(Comment, { foreignKey: "article_id" });
Comment.belongsTo(Article, { foreignKey: "article_id" });

User.hasMany(Comment, { foreignKey: "user_id" });
Comment.belongsTo(User, { foreignKey: "user_id" });

Category.hasMany(Article, { foreignKey: "category_id" });
Article.belongsTo(Category, { foreignKey: "category_id" });

module.exports = { User, Article };
