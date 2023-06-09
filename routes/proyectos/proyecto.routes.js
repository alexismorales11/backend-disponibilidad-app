const express = require("express");
const ProyectosServices = require("../../services/proyectos/proyectos.services");

const routes = express.Router();

const service = new ProyectosServices();

routes.get("/", async (req, res, next) => {
  try {
    const proyectos = await service.getProyecto();
    res.json(proyectos);
  } catch (error) {
    next(error);
  }
});

routes.get("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const proyecto = await service.getProyectoId(id);
    res.json(proyecto);
  } catch (error) {
    next(error);
  }
});

routes.post("/", async (req, res, next) => {
  try {
    const body = req.body;
    const proyecto = await service.createProyecto(body);
    res.json(proyecto);
  } catch (error) {
    next(error);
  }
});

routes.patch("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const changes = req.body;
    const proyecto = await service.updateProyecto(id, changes);
    res.json(proyecto);
  } catch (error) {
    next(error);
  }
});

routes.delete("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const proyecto = await service.deleteProyecto(id);
    res.json(proyecto);
  } catch (error) {
    next(error);
  }
});

module.exports = routes;
