const { DataTypes } = require("sequelize");
const db = require("../utils/database");

const Users = db.define("users", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  email: {
    type: DataTypes.STRING(50),
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true,
    },
  },
  numero: {
    type: DataTypes.STRING(50),
    allowNull: false,
    unique: false,
  },
  nombre: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  ip_users: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

module.exports = Users;
