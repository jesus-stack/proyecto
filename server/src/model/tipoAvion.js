const { Schema, model } = require('mongoose');

var schema = new Schema(
    {
        identificador: String,
        modelo: String,
        marca: String,
        anio: String,
        cant_pasajeros: String,
        cant_filas: String,
        cant_asientosfila: String,
        
    }
);

const tipoAvion_model = model("tipoAvion", schema);

module.exports = tipoAvion_model;