const express = require('express');
const conectDB = require('./config/db');
const cors = require('cors');
// importar la dependencia del archivo recien creado al inicio del archivo

//creacion server
const app = express();

//coneccion a la base de datos
conectDB();
app.use(cors());
app.use(express.json())

//Rutas
app.use("/vuelo/",require('./route/vuelo'));
app.use("/reserva/",require('./route/reserva'));
app.use('/user/',require('./route/user'));
app.use('/tipoAvion/',require('./route/tipoAvion'));
app.use('/horario/',require('./route/horario'));
app.use('/ruta/',require('./route/ruta'));

//Puerto del servidor
app.listen(8080,()=>{
    console.log('servidor iniciado correctamente');
})
