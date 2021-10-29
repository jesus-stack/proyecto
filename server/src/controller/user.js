const model = require('../model/user')
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

module.exports = userController;