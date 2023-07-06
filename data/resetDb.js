const User = require("../models/User");
const Article = require("../models/Article");
const Comment = require("../models/Comment");
const Category = require("../models/Category");

async function resetDatabase() {
  try {
    // Supprimer toutes les tables existantes
    await User.drop({ cascade: true });
    await Article.drop({ cascade: true });
    await Comment.drop({ cascade: true });
    await Category.drop({ cascade: true });

    // Recréer les tables
    await User.sync();
    await Article.sync();
    await Comment.sync();
    await Category.sync();
  } catch (error) {
    console.error("An error occurred while dropping the table:", error);
  }
}

resetDatabase();
