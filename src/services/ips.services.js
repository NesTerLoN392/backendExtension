// ips.service.js
const Ips = require("../models/ips.models");

class IpsService {
  static async createIp(ipData) {
    console.log(ipData);
    try {
      const createdIp = await Ips.create(ipData);
      console.log("serivio despues de crear");
      return createdIp;
    } catch (error) {
      throw error;
    }
  }

  static async getAllIps() {
    try {
      const ips = await Ips.findAll();
      return ips;
    } catch (error) {
      throw Error("Error al obtener las IPs");
    }
  }

  static async updateIp(ipId, ipData) {
    try {
      const updatedIp = await Ips.update(ipData, {
        where: { id: ipId },
      });
      return updatedIp;
    } catch (error) {
      throw Error("Error al actualizar la IP");
    }
  }
}

module.exports = IpsService;
