const express = require("express");
const router = express.Router();
const {
  createIp,
  updateIp,
  getAllIps,
} = require("../controllers/ips.controllers");

// Ruta para crear una IP
router.post("/v1/crearip", createIp);

// Ruta para actualizar una IP
router.put("/v1/update:ipId", updateIp);
//ruta para traer
router.get("/v1/ips", getAllIps);

module.exports = router;
