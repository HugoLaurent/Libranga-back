const User = require("../models/User");
const Article = require("../models/Article");
const Comment = require("../models/Comment");
const Category = require("../models/Category");

async function createTables() {
  await User.sync();
  await Article.sync();
  await Comment.sync();
  await Category.sync();
}

createTables();
