const User = require("../models/User");
const Article = require("../models/Article");
const Comment = require("../models/Comment");
const Category = require("../models/Category");

async function populateTables() {
  await User.bulkCreate([
    {
      pseudo: "JohnDoe",
      firstname: "John",
      lastname: "Doe",
      email: "johndoe@gmail.com",
      password: "password123",
      age: 25,
      role: 2,
    },
    {
      pseudo: "Devconte",
      firstname: "Jane",
      lastname: "Doe",
      email: "janesmith@gmail.com",
      password: "987654321",
      age: 30,
      role: 2,
    },
    {
      pseudo: "AliceWonder",
      firstname: "Alice",
      lastname: "Doe",
      email: "alicewonder@gmail.com",
      password: "qwertyuiop",
      age: 28,
      role: 2,
    },
    {
      pseudo: "BobRoss",
      firstname: "Bob",
      lastname: "Doe",
      email: "bobross@gmail.com",
      password: "password1234",
      age: 35,
      role: 2,
    },
    {
      pseudo: "EmilyGreen",
      firstname: "Emily",
      lastname: "Doe",
      email: "emilygreen@gmail.com",
      password: "abcdefg",
      age: 32,
      role: 2,
    },
  ]);

  await Article.bulkCreate([
    {
      title: "Food",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      likes: 199,
      edited: false,
      user_id: 2,
    },
    {
      title: "Technology",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      likes: 4,
      edited: false,
      user_id: 2,
    },
    {
      title: "Sports",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      likes: 0,
      edited: false,
      user_id: 3,
    },
    {
      title: "Fashion",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      likes: 0,
      edited: true,
      user_id: 3,
    },
    {
      title: "Nature",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      likes: 5,
      edited: false,
      user_id: 3,
    },
  ]);

  await Comment.bulkCreate([
    {
      title: "Lorem",
      content:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
      likes: 5,
      edited: false,
      user_id: 1,
      article_id: 1,
    },
    {
      title: "Dolor",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      likes: 2,
      edited: false,
      user_id: 2,
      article_id: 1,
    },
    {
      title: "Amet",
      content:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      likes: 3,
      edited: false,
      user_id: 3,
      article_id: 1,
    },
    {
      title: "Consectetur",
      content:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      likes: 1,
      edited: false,
      user_id: 4,
      article_id: 2,
    },
    {
      title: "Adipiscing",
      content:
        "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      likes: 4,
      edited: false,
      user_id: 5,
      article_id: 2,
    },
    {
      title: "Elit",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      likes: 0,
      edited: false,
      user_id: 6,
      article_id: 2,
    },
    {
      title: "Etiam",
      content:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
      likes: 2,
      edited: false,
      user_id: 7,
      article_id: 3,
    },
    {
      title: "Faucibus",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      likes: 3,
      edited: false,
      user_id: 8,
      article_id: 3,
    },
    {
      title: "Vitae",
      content:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      likes: 1,
      edited: false,
      user_id: 9,
      article_id: 3,
    },
    {
      title: "Ullamcorper",
      content:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      likes: 5,
      edited: false,
      user_id: 10,
      article_id: 3,
    },
  ]);

  await Category.bulkCreate([
    {
      category_id: 1,
      name: "Shonen",
      limit: 14,
    },
    {
      category_id: 2,
      name: "Seinen",
      limit: 18,
    },
    {
      category_id: 3,
      name: "Shojo",
      limit: 14,
    },
    {
      category_id: 4,
      name: "Josei",
      limit: 16,
    },
    {
      category_id: 5,
      name: "Isekai",
      limit: 14,
    },
    {
      category_id: 6,
      name: "Mecha",
      limit: 14,
    },
    {
      category_id: 7,
      name: "Slice of Life",
      limit: 14,
    },
    {
      category_id: 8,
      name: "Fantasy",
      limit: 16,
    },
    {
      category_id: 9,
      name: "Sci-Fi",
      limit: 16,
    },
    {
      category_id: 10,
      name: "Horror",
      limit: 18,
    },
  ]);
}

populateTables();
