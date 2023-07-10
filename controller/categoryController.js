const db = require("../db");

const Category = require("../models/Category");

const categoryController = {
  getAllCategories: async (req, res) => {
    try {
      const categories = await Category.findAll();
      res.json(categories);
      console.log(categories);
    } catch (error) {
      console.log(error);
      res.status(500).send("Error while retrieving categories");
    }
  },

  getCategory: async (req, res) => {
    try {
      const category = await Category.findByPk(req.params.id);
      if (!category) {
        res.status(404).send("There is no category with this id");
      } else {
        res.json(category);
        console.log(category);
      }
    } catch (error) {
      console.log(error);
      res.status(500).send("Error while retrieving the category");
    }
  },

  createCategory: async (req, res) => {
    try {
      const newCategory = await Category.create({
        name: req.body.name,
        limit: req.body.limit,
      });
      res.json({ category_id: newCategory.category_id });
      console.log("Category added successfully");
    } catch (error) {
      console.log(error);
      res.status(500).send("Error while adding the category");
    }
  },

  updateCategory: async (req, res) => {
    try {
      const category = await Category.findByPk(req.params.id);
      if (!category) {
        res.status(404).send("There is no category with this id");
      } else {
        await category.update({
          name: req.body.name,
          limit: req.body.limit,
        });
        res.json(category);
        console.log("Category updated successfully");
      }
    } catch (error) {
      console.log(error);
      res.status(500).send("Error while updating the category");
    }
  },

  deleteCategory: async (req, res) => {
    try {
      const category = await Category.findByPk(req.params.id);
      if (!category) {
        res.status(404).send("There is no category with this id");
      } else {
        await category.destroy();
        res.json(category);
        console.log("Category deleted successfully");
      }
    } catch (error) {
      console.log(error);
      res.status(500).send("Error while deleting the category");
    }
  },
};

module.exports = categoryController;
