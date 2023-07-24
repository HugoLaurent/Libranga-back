const User = require("../models/User");
const Article = require("../models/Article");
const Comment = require("../models/Comment");
const Category = require("../models/Category");

async function populateTables() {
  await Category.bulkCreate([
    {
      category_id: 1,
      name: "Shonen",
      limit: 0,
    },
    {
      category_id: 2,
      name: "Seinen",
      limit: 0,
    },
    {
      category_id: 3,
      name: "Shojo",
      limit: 0,
    },
    {
      category_id: 4,
      name: "Josei",
      limit: 0,
    },
    {
      category_id: 5,
      name: "Isekai",
      limit: 0,
    },
    {
      category_id: 6,
      name: "Mecha",
      limit: 0,
    },
    {
      category_id: 7,
      name: "Slice of Life",
      limit: 0,
    },
    {
      category_id: 8,
      name: "Fantasy",
      limit: 0,
    },
    {
      category_id: 9,
      name: "Sci-Fi",
      limit: 0,
    },
    {
      category_id: 10,
      name: "Horror",
      limit: 18,
    },
    {
      category_id: 11,
      name: "Hentai",
      limit: 18,
    },
  ]);
}

populateTables();
