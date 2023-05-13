const express = require("express");

const proyectoRoutes = require("../routes/proyectos/proyecto.routes");

function routerApi(app) {
  const router = express.Router();
  app.use("/api/v1", router);

  router.use("/proyectos", proyectoRoutes);
}

module.exports = routerApi;
