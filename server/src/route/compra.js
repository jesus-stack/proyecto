//rutas
const express = require('express');
const compraController = require('../controller/compra');
const Router =express.Router();

const auth = require('../middleware/user');

//obtener
Router.get('/' ,compraController.getcompra)


//crear
Router.post('/',compraController.createcompra)

//eliminar
Router.delete('/:id',compraController.deletecompra)

//obtenerbyid
Router.get('/:id',compraController.getById)

//obtenerbyid
Router.put('/:id',compraController.updatecompra)



module.exports = Router;