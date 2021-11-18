const reserva_model = require('../model/reserva');

module.exports.getAll = async (req, res, next) => {
    const reservas = await reserva_model.find()
    .populate({
        path: 'compra',
        populate: { path: 'Usuario' }
    }).populate({
        path: 'vuelo',
        populate: { path: 'ruta'}
    }).exec();
    res.json(reservas);
};

module.exports.getById = async (req, res, next) => {
    const id = req.params.id;
    const reserva = await reserva_model.findById(id).populate('vuelo').populate('compra').exec();
    res.json(reserva);
};

module.exports.create = (req, res, next) => {
    const { compra, vuelo, asiento } = req.body;
    habilitado = true;
    const reserva = new reserva_model({ compra, vuelo, asiento, habilitado });
    reserva.save();
    res.json(reserva);
};

module.exports.delete = async (req, res, next) => {

    habilitado = false;
    const vuelo = await reserva_model.findOneAndUpdate(
        { _id: req.params.id },
        { habilitado },
        { new: true }
    );
    res.json(vuelo);
};

module.exports.update = async (req, res, next) => {

    const { vuelo, asiento } = req.body;
    const reserva = await reserva_model.findOneAndUpdate(
        { _id: req.params.id },
        { vuelo, asiento },
        { new: true }
    );
    res.json(reserva);
};