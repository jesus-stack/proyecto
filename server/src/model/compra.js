const { Schema, model } = require('mongoose');


const schema = new Schema({
    Usuario: {
        type: Schema.Types.ObjectId,
        ref: 'user'
    },
    Cantidad : Number,
    Subtotal: Number,
    Descuento : Number,
    MontoTotal : Number,
    habilitado: {type:Boolean,default:true},

});

const compra =model('compra',schema);

module.exports = compra;