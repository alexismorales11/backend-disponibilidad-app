const express = require("express");

const proyectoRoutes = require("../routes/proyectos/proyecto.routes");
const coordenadasRoutes = require("../routes/coordenadas/coordenadas.routes");

function routerApi(app) {
  const router = express.Router();
  app.use("/api/v1", router);

  router.use("/proyectos", proyectoRoutes);
  router.use("/coordenadas", coordenadasRoutes);
}

module.exports = routerApi;
