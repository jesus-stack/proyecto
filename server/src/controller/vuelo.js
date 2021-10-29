const vueloModel = require('../model/vuelo');

module.exports.getAll = async (req, res, next) => {
    const vuelos = await vueloModel.find().exec();
    res.json(vuelos);
};

module.exports.getById = async (req, res, next) => {
    const id = req.params.id;
    const vuelo = await vueloModel.findById(id).exec();
    res.json(vuelo);
};

module.exports.create = (req, res, next) => {
    const { ruta, tipoAvion, horario } = req.body;
    const vuelo = new vueloModel({ ruta, tipoAvion, horario });
    vuelo.save();
    res.json(vuelo);
};

module.exports.delete = async (req, res, next) => {
    const vuelo = await vueloModel.findByIdAndRemove(req.params.id);
    if (vuelo) {
        res.json({ result: "Borrado Correctamente", post: vuelo });
    } else {
        res.json({ result: "ID invalido", post: vuelo });
    }
};

module.exports.update = async (req, res, next) => {

    const { ruta, tipoAvion, horario } = req.body;
    const vuelo = await vueloModel.findOneAndUpdate(
        { 
            _id: req.params.id 
        },
        { 
            ruta, tipoAvion, horario
        },
        { 
            new: true
        }
    );
    res.json(vuelo);
};