const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt-nodejs')

const schema = new Schema({
    user:  {type:String,index:true,unique: true,required: true},
    password :{type:String,required:true},
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

schema.pre('save', function (next) {
  var user = this;
  if (this.isModified('password') || this.isNew) {
      bcrypt.genSalt(10, function (err, salt) {
          if (err) {
              return next(err);
          }
          bcrypt.hash(user.password, salt, null, function (err, hash) {
              if (err) {
                  return next(err);
              }
              user.password = hash;
              next();
          });
      });
  } else {
      return next();
  }
});

schema.methods.comparePassword = async (passw, userPassw, cb) => {
  bcrypt.compare(passw, userPassw, function (err, isMatch) {
      if (err) {
          return cb(err);
      }
      cb(null, isMatch);
  });
};
const usser =model('user',schema);

module.exports = usser;