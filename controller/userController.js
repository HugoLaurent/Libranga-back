const User = require("../models/User");
const Article = require("../models/Article");
const Comment = require("../models/Comment");

const userController = {
  getAllData: async (req, res) => {
    try {
      const users = await User.findAll({
        include: [
          {
            model: Comment,
          },
          {
            model: Article,
          },
        ],
      });
      res.json(users);
      console.log(users);
    } catch (error) {
      console.log(error);
      res.status(500).send("Error while retrieving users");
    }
  },

  getUser: async (req, res) => {
    try {
      const user = await User.findByPk(req.params.id);
      if (!user) {
        res.status(404).send("No user found with this id");
      } else {
        res.json(user);
        console.log(user);
      }
    } catch (error) {
      console.log(error);
      res.status(500).send("Error while retrieving the user");
    }
  },

  addUser: async (req, res) => {
    try {
      const newUser = await User.create({
        pseudo: req.body.pseudo,
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email,
        password: req.body.password,
        age: req.body.age,
        role: req.body.role,
      });

      res.json({ user_id: newUser.user_id });
      console.log("User added successfully");
    } catch (error) {
      console.log(error);
      res.status(500).send("Error while adding the user");
    }
  },

  updateUser: async (req, res) => {
    try {
      const user = await User.findByPk(req.params.id);
      if (!user) {
        res.status(404).send("No user found with this id");
      } else {
        await user.update({
          pseudo: req.body.pseudo,
          firstname: req.body.firstname,
          lastname: req.body.lastname,
          email: req.body.email,
          password: req.body.password,
          age: req.body.age,
          role: req.body.role,
        });

        res.json(user);
        console.log("User updated successfully");
      }
    } catch (error) {
      console.log(error);
      res.status(500).send("Error while updating the user");
    }
  },

  deleteUser: async (req, res) => {
    try {
      const user = await User.findByPk(req.params.id);
      if (!user) {
        res.status(404).send("No user found with this id");
      } else {
        await user.destroy();
        res.json(user);
        console.log("User deleted successfully");
      }
    } catch (error) {
      console.log(error);
      res.status(500).send("Error while deleting the user");
    }
  },
};

module.exports = userController;
