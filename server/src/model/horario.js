const { Schema, model } = require('mongoose');

var schema = new Schema(
    {
        dia: String,
        hora: String,
        precio: String,
        hora_Llegada: String        
    }
);

const horario_model = model("horario", schema);

module.exports = horario_model;