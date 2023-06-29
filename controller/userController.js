const db = require("../db");

const userController = {
  /**
   * Display the data for all the users
   */
  getAllData: async (req, res) => {
    try {
      const result = await db.query(`SELECT * FROM "user"`);
      res.json(result.rows);
      console.log(result.rows);
    } catch (err) {
      console.log(err);
      res.status(500).send("Error while retrieving users");
    }
  },

  /**
   * Display the data for one user by id
   */
  getUser: async (req, res) => {
    try {
      const result = await db.query(`SELECT * FROM "user" WHERE user_id = $1`, [
        req.params.id,
      ]);
      res.json(result.rows);
      console.log(result.rows);
    } catch (err) {
      console.log(err);
      res.status(500).send("Error while retrieving the user");
    }
  },

  /**
   * Add a new user
   * @param {string} pseudo - The pseudo of the user
   * @param {string} firstname - The name of the user
   * @param {string} lastname - The firstname of the user
   * @param {string} email - The email of the user
   * @param {string} password - The password of the user
   * @param {string} role - The role of the user
   * @param {number} age - The age of the user
   */
  addUser: async (req, res) => {
    try {
      const result = await db.query(
        `INSERT INTO "user" (pseudo, firstname, lastname, email, password, age, role)
             VALUES ($1, $2, $3, $4, $5, $6, $7)
             RETURNING user_id`,
        [
          req.body.pseudo,
          req.body.firstname,
          req.body.lastname,
          req.body.email,
          req.body.password,
          req.body.age,
          req.body.role,
        ]
      );
      res.json({ user_id: result.rows[0].user_id });
      console.log("User added successfully");
    } catch (err) {
      console.log(err);
      res.status(500).send("Error while adding the user");
    }
  },

  /**
   * Update a user
   * @param {string} pseudo - The pseudo of the user
   * @param {string} firstname - The name of the user
   * @param {string} lastname - The firstname of the user
   * @param {string} email - The email of the user
   * @param {string} password - The password of the user
   * @param {string} role - The role of the user
   * @param {number} age - The age of the user
   */
  updateUser: async (req, res) => {
    try {
      const result = await db.query(
        `UPDATE "user" SET pseudo = $1, firstname = $2, lastname = $3, email = $4, password = $5, age = $6, role = $7 WHERE user_id = $8`,
        [
          req.body.pseudo,
          req.body.firstname,
          req.body.lastname,
          req.body.email,
          req.body.password,
          req.body.age,
          req.body.role,
          req.params.id,
        ]
      );
      res.json(result.rows);
      console.log("User updated successfully");
    } catch (err) {
      console.log(err);
      res.status(500).send("Error while updating the user");
    }
  },

  /**
   * Delete a user
   * @param {number} user_id - The id of the user
   */
  deleteUser: async (req, res) => {
    try {
      const result = await db.query(`DELETE FROM "user" WHERE user_id = $1`, [
        req.params.id,
      ]);
      res.json(result.rows);
      console.log("User deleted successfully");
    } catch (err) {
      console.log(err);
      res.status(500).send("Error while deleting the user");
    }
  },
};

module.exports = userController;
