//Acceso a variables globales de archivo .env
require("dotenv").config();

//Importacion de dependencias
const express = require("express");
const cors = require("cors");
const routes = require("./routes/index.js");

//Creacion de instancia Express
const app = express();

//Cors 
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  if (req.method === 'OPTIONS'){
    res.header('Access-Control-Allow-Methods','PUT, POST, GET, PATCH');
    return res.status(200).json({});
  }
  next();
});

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
