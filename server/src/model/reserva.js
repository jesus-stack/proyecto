const { Schema, model } = require('mongoose');

var schema = new Schema(
    {
        compra: {
            type: Schema.Types.ObjectId,
            ref: "compra"
        },
        vuelo: {
            type: Schema.Types.ObjectId,
            ref: "vuelo"
        },
        asiento: String,
        habilitado: Boolean
    }
);

const reserva_model = model("reserva", schema);

module.exports = reserva_model;