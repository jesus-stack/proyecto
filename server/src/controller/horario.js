const horarioModel = require('../model/horario');

module.exports.getAll = async (req, res, next) => {
    const horario = await horarioModel.find().exec();
    res.json(horario);
};

module.exports.getById = async (req, res, next) => {
    const id = req.params.id;
    const horario = await horarioModel.findById(id).exec();
    res.json(horario);
};

module.exports.create = (req, res, next) => {
    const { dia, hora, precio, hora_Llegada } = req.body;
    const horario = new horarioModel({ dia, hora, precio, hora_Llegada});
    horario.save();
    res.json(horario);
};

module.exports.delete = async (req, res, next) => {
    const horario = await horarioModel.findByIdAndRemove(req.params.id);
    if (horario) {
        res.json({ result: "Borrado Correctamente", post: horario });
    } else {
        res.json({ result: "ID invalido", post: horario });
    }
};

module.exports.update = async (req, res, next) => {

    const { dia, hora, precio, hora_Llegada } = req.body;
    const horario = await horarioModel.findOneAndUpdate(
        { 
            _id: req.params.id 
        },
        { 
            dia, hora, precio, hora_Llegada
        },
        { 
            new: true
        }
    );
    res.json(horario);
};