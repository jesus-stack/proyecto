const { Schema, model } = require('mongoose');

var schema = new Schema(
    {
        identificador: String,
        modelo: String,
        marca: String,
        anio: Number,
        cant_pasajeros: Number,
        cant_Filas: Number,
        cant_AsientosFila: Number,
        
    }
);

const tipoAvion_model = model("tipoAvion", schema);

module.exports = tipoAvion_model;