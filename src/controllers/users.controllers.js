const UsersService = require("../services/user.services");

const createUser = async (req, res) => {
  try {
    const userData = req.body;
    const createdUser = await UsersService.createUser(userData);
    res.status(201).json(createdUser);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getAllUsers = async (req, res) => {
  try {
    const users = await UsersService.getAllUsers();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateUser = async (req, res) => {
  try {
    const userId = req.params.userId;
    const userData = req.body;
    const updatedUser = await UsersService.updateUser(userId, userData);
    res.status(200).json(updatedUser);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createUser,
  getAllUsers,
  updateUser,
};
