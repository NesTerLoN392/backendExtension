const { DataTypes } = require("sequelize");
const db = require("../utils/database");

const Ips = db.define("ips_tabla", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  ip: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  activa: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
});

module.exports = Ips;
