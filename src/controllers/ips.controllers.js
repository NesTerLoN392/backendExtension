// ips.controller.js
const ipsService = require("../services/ips.services");

const createIp = async (req, res) => {
  try {
    const ipData = req.body;
    const createdIp = await ipsService.createIp(ipData);
    res.status(201).json(createdIp);
    console.log("controlador despues de crear");
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getAllIps = async (req, res) => {
  try {
    const ips = await ipsService.getAllIps();
    res.status(200).json(ips);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateIp = async (req, res) => {
  try {
    const ipId = req.params.ipId;
    const ipData = req.body;
    const updatedIp = await ipsService.updateIp(ipId, ipData);
    res.status(200).json(updatedIp);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createIp,
  getAllIps,
  updateIp,
};
