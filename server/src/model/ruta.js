const { Schema, model } = require('mongoose');

var schema = new Schema(
    {
        identificador: String,
        duracion: String,
        origen: String,
        destino: String,
        porc_descuento: String
        
    }
);

const ruta_model = model("ruta", schema);

module.exports = ruta_model;