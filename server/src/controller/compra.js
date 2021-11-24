const model = require('../model/compra');
const umodel = require('../model/user');
const compraController = {};

compraController.createcompra = async (req, res, next) => {
    const compra = new model(req.body);
  
    await compra.save(function (err) {
        if (err) {
            return res.json({ success: false, msg: ' Ha ocurrido un !Error.' });
        }
        res.json({ success: true, msg: 'Se ha creado la compra exitosamente' });
    });
};
compraController.getcompra =  async (req, res, next) => {
    const compras2 = await model.find();
    const compras = await model.find().populate('Usuario')
    return res.json(compras);
};
compraController.deletecompra = async (req, res, next) => {
    habilitado = false;
    const compra = await model.findOneAndUpdate(
        { _id: req.params.id },
        { habilitado },
        { new: true }
    );
    
    res.json('eliminado exitosamente');
};
compraController.getById = async (req, res, next) => {
    const compra = await model.findById(req.params.id);
    res.json(compra);
};
compraController.updatecompra = async (req, res, next) => {
   const compra = await model.findByIdAndUpdate(req.params.id, req.body);
   if(!compra){
    res.json({ success: false, msg: 'ha ocurrido un error.' });
   }
   res.json({ success: true, msg: 'editado exitosamente.' });

};

module.exports = compraController;