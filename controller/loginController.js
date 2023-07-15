const User = require("../models/User");
const bcrypt = require("bcrypt");

const loginController = {
  getLoggedUser: async (req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({
      where: {
        email: email,
      },
    });

    console.log(user);

    if (user) {
      const isPasswordValid = bcrypt.compareSync(password, user.password);

      if (isPasswordValid) {
        res.json(user);
      } else {
        console.log("Incorrect password");
        res.status(401).send("Incorrect password");
      }
    } else {
      console.log("User not found");
      res.status(404).send("User not found");
    }
  },
};

module.exports = loginController;
