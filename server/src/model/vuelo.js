const { Schema, model } = require('mongoose');

var schema = new Schema(
    {
        ruta: {
            type: Schema.Types.ObjectId,
            ref: "ruta"
        },
        tipoAvion: {
            type: Schema.Types.ObjectId,
            ref: "tipoAvion"
        },
        dia: String,
        hora: String,
        horaLlegada: String,
        habilitado: Boolean,
        precio: Number
    }
);

const vuelo_model = model("vuelo", schema);

module.exports = vuelo_model;