const { DataTypes } = require("sequelize");
const sequelize = require("../config/sequelize");
const bcrypt = require("bcrypt");

const User = sequelize.define(
  "User",
  {
    user_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    pseudo: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    firstname: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    lastname: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING(100),
      allowNull: false,
      set(value) {
        const hashedPassword = bcrypt.hashSync(value, 10);
        this.setDataValue("password", hashedPassword);
      },
    },
    age: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    role: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    tableName: "user",
    timestamps: false,
  }
);

module.exports = User;
