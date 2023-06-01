const Users = require("../models/users.models");

class UsersService {
  static async createUser(userData) {
    try {
      const createdUser = await Users.create(userData);
      return createdUser;
    } catch (error) {
      throw error;
    }
  }

  static async getAllUsers() {
    try {
      const users = await Users.findAll();
      return users;
    } catch (error) {
      throw error;
    }
  }

  static async updateUser(userId, userData) {
    try {
      const updatedUser = await Users.update(userData, {
        where: { id: userId },
      });
      return updatedUser;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = UsersService;
