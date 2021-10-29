const model = require('../model/user');
const jwt = require('jsonwebtoken');

const config = process.env;
const userController = {};

userController.createuser= async (req, res,next)=>{
    const user = new model(req.body);
   await user.save();
   res.json('guardado exitosamente');
};
userController.getuser= async (req, res,next)=>{
    const users = await model.find();
    res.json(users);
};
userController.deleteuser= async (req, res,next)=>{
     await model.findByIdAndRemove(req.params.id);
    res.json('eliminado exitosamente');
};
userController.getById= async (req, res,next)=>{
   const user = await model.findById(req.params.id);
   res.json(user);
};
userController.updateuser= async (req, res,next)=>{
    await model.findByIdAndUpdate(req.params.id,req.body);
   res.json('editado exitosamente');
};


// creación de nuevos usuarios
userController.signup = async (req, res, next) => {
    const { user, password } = req.body;
    if (!user || !password) {
        res.json({ success: false, msg: 'Please pass useruser and password.' });
    } else {
        var newUser = new model(req.body);
        // save the user
        newUser.save(function (err) {
            if (err) {
                return res.json({ success: false, msg: 'Useruser already exists.' });
            }
            res.json({ success: true, msg: 'Successful created new user.' });
        });
    }
};

// logueo de usuarios
userController.signin = async (req, res, next) => {

    const { user, password } = req.body;

    const newuser = await model.findOne({ user: user }).exec();

    if (!newuser) {
        res.status(401).send({ success: false, msg: 'Authentication failed. User not found.' });
    } else {
        //Si el usuario existe verifica si las contraseñas
        newuser.comparePassword(password, newuser.password, function (err, isMatch) {
            if (isMatch && !err) {
              // Si el usuario es correcto y la contraseña coindice se procede a crear el token
              const token = jwt.sign(
                { user: user },
                config.SECRETWORDJWT,
                { expiresIn: "2h" }
              );
              // return the information including token as JSON
              const payload = { role: user.role, user: user.user };
              res.json({ success: true, token: token, user: payload });
            } else {
                //si la contraseña no coincide se procede a indicar el error
                //res.status(401).send({ success: false, msg: 'Authentication failed. Wrong password.' });
                res.json({ success: false, msg: 'Authentication failed. Wrong password.' });
            }
        });
    }
};

module.exports = userController;