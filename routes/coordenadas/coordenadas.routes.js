const express = require("express");
const CoordenadasServices = require("../../services/coordenadas/coordenadas.services");

const routes = express.Router();

const service = new CoordenadasServices();

routes.get("/", async (req, res, next) => {
  try {
    const coordenadas = await service.getCoordenadas();
    res.json(coordenadas);
  } catch (error) {
    next(error);
  }
});

routes.get("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const Coordenada = await service.getCoordenadaId(id);
    res.json(Coordenada);
  } catch (error) {
    next(error);
  }
});

routes.post("/", async (req, res, next) => {
  try {
    const body = req.body;
    const Coordenada = await service.createCoordenada(body);
    res.json(Coordenada);
  } catch (error) {
    next(error);
  }
});

routes.patch("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const changes = req.body;
    const Coordenada = await service.updateCoordenada(id, changes);
    res.json(Coordenada);
  } catch (error) {
    next(error);
  }
});

routes.delete("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const Coordenada = await service.deleteCoordenada(id);
    res.json(Coordenada);
  } catch (error) {
    next(error);
  }
});

module.exports = routes;