const { Schema, model } = require('mongoose');

var schema = new Schema(
    {
        identificador: String,
        modelo: String,
        marca: String,
        anio: String,
        cant_Pasajeros: String,
        cant_Filas: String,
        cant_AsientosFila: String,
        
    }
);

const tipoAvion_model = model("tipoAvion", schema);

module.exports = tipoAvion_model;