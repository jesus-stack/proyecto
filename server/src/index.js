const express = require('express');
const conectDB = require('./config/db');
const cors = require('cors');

//creacion server
const app = express();

//coneccion a la base de datos
conectDB();
app.use(cors());
app.use(express.json())

//Rutas
app.use("/vuelo/",require('./route/vuelo'));
app.use("/reserva/",require('./route/reserva'));
app.use('/user',require('./route/user'));

//Puerto del servidor
app.listen(8080,()=>{
    console.log('servidor iniciado correctamente');
})
