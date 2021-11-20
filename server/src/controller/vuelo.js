const vueloModel = require('../model/vuelo');
const rutaModel = require('../model/ruta');

module.exports.getAll = async (req, res, next) => {
    const vuelos = await vueloModel.find().populate('ruta').populate('tipoAvion').exec();
    res.json(vuelos);
};

module.exports.getById = async (req, res, next) => {
    const id = req.params.id;
    const vuelo = await vueloModel.findById(id).populate('ruta').exec();
    res.json(vuelo);
};

module.exports.create = async (req, res, next) => {

    const { ruta, tipoAvion, dia, hora } = req.body;

    const habilitado = true;

    const rutaTemp = await rutaModel.findById(ruta);
    const diaTemp = new Date(dia);
    const time = new Date(diaTemp.getTime() + parseInt(hora.substr(0, hora.indexOf(":"))) * 60000);
    time.setTime(time.getTime() + parseInt(rutaTemp.duracion) * 60000);
    const horaLlegada = time.getMinutes() + ':' + hora.substr(hora.indexOf(":") + 1);

    const vuelo = new vueloModel({ ruta, tipoAvion, dia, hora, horaLlegada, habilitado });
    vuelo.save();
    res.json(vuelo);
};

module.exports.delete = async (req, res, next) => {

    habilitado = false;
    const vuelo = await vueloModel.findOneAndUpdate(
        { _id: req.params.id },
        { habilitado },
        { new: true }
    );
    res.json(vuelo);
};

module.exports.update = async (req, res, next) => {

    const { ruta, tipoAvion, dia, hora } = req.body;
    const vuelo = await vueloModel.findOneAndUpdate(
        { _id: req.params.id },
        { ruta, tipoAvion, dia, hora },
        { new: true }
    );
    res.json(vuelo);
};