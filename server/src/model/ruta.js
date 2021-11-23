const { Schema, model } = require('mongoose');

var schema = new Schema(
    {
        identificador: String,
        duracion: Number,
        origen: String,
        destino: String,
        porc_descuento: Number
    }
);

const ruta_model = model("ruta", schema);

module.exports = ruta_model;