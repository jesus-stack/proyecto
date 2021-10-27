const express = require('express');
const mongoose = require('mongoose');
const app = express();
const vuelo_route = require('./route/vuelo');
const reserva_route = require('./route/reserva');

//Conexion a base de datos
mongoose.connect("mongodb://localhost/skylinedb");

mongoose.connection.on("error", function (e) {
    console.log("Error");
});

mongoose.connection.once("open", function (e) {
    console.log("Conexion exitosa");
});

//Rutas
app.use("/vuelo/",vuelo_route);
app.use("/reserva/",reserva_route);

//Puerto del servidor
app.listen(3000);
