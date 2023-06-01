const Users = require("./users.models");
const Ips = require("./ips.models");

const initModels = () => {
  //Users 1 - 1 Ips
  Users.belongsTo(Ips, { foreignKey: "ip_user" });
  Ips.hasOne(Users, { foreignKey: "ip_user" });
};
Users.sync();
Ips.sync();
module.exports = initModels;
