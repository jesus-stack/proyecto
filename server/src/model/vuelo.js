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
        horario: {
            type: Schema.Types.ObjectId,
            ref: "horario"
        }
    }
);

const vuelo_model = model("vuelo", schema);

module.exports = vuelo_model;