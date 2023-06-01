const express = require("express");
const router = express.Router();
const {
  createUser,
  updateUser,
  getAllUsers,
} = require("../controllers/users.controllers");

// Ruta para crear un usuario
router.post("/v1/crearuser", createUser);

// Ruta para actualizar un usuario
router.put("/v1/update:userId", updateUser);

// Ruta para obtener todos los usuarios
router.get("/v1/users", getAllUsers);

module.exports = router;
