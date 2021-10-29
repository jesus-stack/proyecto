const { Schema, model } = require('mongoose');

const schema = new Schema({
    user: String,
    password : String,
    name: String,
    email : String,
    birthdate : Date,
    address: String,
    phone_number : String,
    mobile: String,
    role: {
        type: String,
        default: "user",
        enum: ["user", "admin"],
      },

});

module.exports = model('user',schema);