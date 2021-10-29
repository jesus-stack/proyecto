const express = require('express');
const conectDB = require('./config/db');
const cors = require('cors');
const vuelo_route = require('./route/vuelo');
const reserva_route = require('./route/reserva');

//creacion server
const app = express();

//coneccion a la base de datos
conectDB();
app.use(cors());
app.use(express.json())

//Rutas
app.use("/vuelo/",vuelo_route);
app.use("/reserva/",reserva_route);
app.use('/user',require('./route/user'));

//Puerto del servidor
app.listen(8080,()=>{
    console.log('servidor iniciado correctamente');
})
