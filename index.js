//Acceso a variables globales de archivo .env
require("dotenv").config();

//Importacion de dependencias
const express = require("express");
const cors = require("cors");
const routes = require("./routes/index.js");

//Creacion de instancia Express
const app = express();

//Obtenemos el puerto del servidor
const port = process.env.PORT;

//Se habilita middleware de express para solicitudes JSON
app.use(express.json());

//Se habilita Middleware de cors con configuracion anterior
app.use(cors());

//Se obtiene Endpoint para API de archivos correspondienes
routes(app);



//Inicialización del server 

app.listen(port, () => {
  console.log("Servidor corriendo en el puerto " + port);
});

/*
http.createServer(app).listen(3001, () => {
  console.log("Servidor corriendo en el puerto " + port);
});

https.createServer(options, app).listen(port);
*/