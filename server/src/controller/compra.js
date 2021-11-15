const model = require('../model/compra');
const compraController = {};

compraController.createcompra = async (req, res, next) => {
    const compra = new model(req.body);
    await compra.save();
    res.json('guardado exitosamente');
};
compraController.getcompra = async (req, res, next) => {
    const compras = await model.find();
    res.json(compras);
};
compraController.deletecompra = async (req, res, next) => {
    await model.findByIdAndRemove(req.params.id);
    res.json('eliminado exitosamente');
};
compraController.getById = async (req, res, next) => {
    const compra = await model.findById(req.params.id);
    res.json(compra);
};
compraController.updatecompra = async (req, res, next) => {
    await model.findByIdAndUpdate(req.params.id, req.body);
    res.json('editado exitosamente');
};

module.exports = compraController;