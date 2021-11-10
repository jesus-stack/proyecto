const { Schema, model } = require('mongoose');


const schema = new Schema({
    Usuario:{type:Schema.Types.ObjectId,ref : 'user'},
    Cantidad : Number,
    Subtotal: Number,
    Descuento : Number,
    OntoTotal : Number

});

const compra =model('compra',schema);

module.exports = compra;