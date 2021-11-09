const tipoAvionModel = require('../model/tipoAvion');

module.exports.getAll = async (req, res, next) => {
    const tipoAvion = await tipoAvionModel.find().exec();
    res.json(tipoAvion);
};

module.exports.getById = async (req, res, next) => {
    const id = req.params.id;
    const tipoAvion = await tipoAvionModel.findById(id).exec();
    res.json(tipoAvion);
};

module.exports.create = (req, res, next) => {
    const { identificador, modelo, marca, anio, cant_Pasajeros, cant_Filas, cant_AsientosFila } = req.body;
    const tipoAvion = new tipoAvionModel({ identificador, modelo, marca, anio, cant_Pasajeros, cant_Filas, cant_AsientosFila });
    tipoAvion.save();
    res.json(tipoAvion);
};

module.exports.delete = async (req, res, next) => {
    const tipoAvion = await tipoAvionModel.findByIdAndRemove(req.params.id);
    if (tipoAvion) {
        res.json({ result: "Borrado Correctamente", post: tipoAvion });
    } else {
        res.json({ result: "ID invalido", post: tipoAvion });
    }
};

module.exports.update = async (req, res, next) => {

    const { identificador, modelo, marca, anio, cant_Pasajeros, cant_Filas, cant_AsientosFila  } = req.body;
    const tipoAvion = await tipoAvionModel.findOneAndUpdate(
        { 
            _id: req.params.id 
        },
        { 
            identificador, modelo, marca, anio, cant_Pasajeros, cant_Filas, cant_AsientosFila 
        },
        { 
            new: true
        }
    );
    res.json(tipoAvion);
};