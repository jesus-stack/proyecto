const rutaModel = require('../model/ruta');

module.exports.getAll = async (req, res, next) => {
    const ruta = await rutaModel.find().exec();
    res.json(ruta);
};

module.exports.getById = async (req, res, next) => {
    const id = req.params.id;
    const ruta = await rutaModel.findById(id).exec();
    res.json(ruta);
};

module.exports.create = (req, res, next) => {
    const { identificador, duracion, origen, destino, porc_descuento } = req.body;
    const ruta = new rutaModel({ identificador, duracion, origen, destino, porc_descuento });
    ruta.save();
    res.json(ruta);
};

module.exports.delete = async (req, res, next) => {
    const ruta = await rutaModel.findByIdAndRemove(req.params.id);
    if (ruta) {
        res.json({ result: "Borrado Correctamente", post: ruta });
    } else {
        res.json({ result: "ID invalido", post: ruta });
    }
};

module.exports.update = async (req, res, next) => {

    const {  identificador, duracion, origen, destino, porc_descuento } = req.body;
    const ruta = await rutaModel.findOneAndUpdate(
        { 
            _id: req.params.id 
        },
        { 
            identificador, duracion, origen, destino, porc_descuento
        },
        { 
            new: true
        }
    );
    res.json(ruta);
};