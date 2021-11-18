const tipoAvionModel = require('../model/tipoAvion');
//avance 5: 
const mongoose = require("mongoose");
// fin ///////////////////


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
    const { identificador, modelo, marca, anio, cant_pasajeros, cant_filas, cant_asientosfila } = req.body;
    const tipoAvion = new tipoAvionModel({ identificador, modelo, marca, anio, cant_pasajeros, cant_filas, cant_asientosfila });
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

    const { identificador, modelo, marca, anio, cant_pasajeros, cant_filas, cant_asientosfila} = req.body;
    const tipoAvion = await tipoAvionModel.findOneAndUpdate(
        {
            _id: req.params.id
        },
        {
            identificador, modelo, marca, anio, cant_pasajeros, cant_filas, cant_asientosfila
        },
        {
            new: true
        }
    );
    res.json(tipoAvion);
};

/* //avance 5, pag 6
module.exports.createComment = async (req, res, next) => {
    const isValidId = mongoose.isValidObjectId(req.params.id);
    if (isValidId) {
        const comment = new tipoAvionModel({ ...req.body });
        comment.save();
        const updated = await PostModel.findOneAndUpdate(
            { _id: req.params.id },
            { $push: { comments: mongoose.Types.ObjectId(comment._id) } },
            { new: true }
        ).exec();
        res.json(updated);
    } else {
        res.json({ error: "Invalid Id" });
    } 
};*/