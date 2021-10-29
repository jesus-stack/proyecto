const reserva_model = require('../model/reserva');

module.exports.getAll = async (req, res, next) => {
    const reservas = await reserva_model.find().exec();
    res.json(reservas);
};

module.exports.getById = async (req, res, next) => {
    const id = req.params.id;
    const reserva = await reserva_model.findById(id).exec();
    res.json(reserva);
};

module.exports.create = (req, res, next) => {
    const { compra, vuelo, asiento } = req.body;
    const reserva = new reserva_model({ compra, vuelo, asiento });
    reserva.save();
    res.json(reserva);
};

module.exports.delete = async (req, res, next) => {
    const reserva = await reserva_model.findByIdAndRemove(req.params.id);
    if (reserva) {
        res.json({ result: "Borrado Correctamente", post: reserva });
    } else {
        res.json({ result: "ID invalido", post: reserva });
    }
};

module.exports.update = async (req, res, next) => {

    const { compra, vuelo, asiento } = req.body;
    const reserva = await reserva_model.findOneAndUpdate(
        { 
            _id: req.params.id 
        },
        { 
            compra, vuelo, asiento
        },
        { 
            new: true
        }
    );
    res.json(reserva);
};