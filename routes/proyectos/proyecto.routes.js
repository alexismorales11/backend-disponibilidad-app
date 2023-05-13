const express = require("express");
const ProyectosServices = require("../../services/proyectos/proyectos.services");

const routes = express.Router();

const service = new ProyectosServices();

routes.get("/", async (req, res, next) => {
  try {
    const inmuebles = await service.getProyecto();
    res.json(inmuebles);
  } catch (error) {
    next(error);
  }
});

module.exports = routes;