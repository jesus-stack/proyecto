//rutas
const express = require('express');
const userController = require('../controller/user');
const Router =express.Router();

//obtener
Router.get('/',userController.getuser)

//crear
Router.post('/',userController.createuser)

//eliminar
Router.delete('/:id',userController.deleteuser)

//obtenerbyid
Router.get('/:id',userController.getById)

//obtenerbyid
Router.put('/:id',userController.updateuser)



module.exports = Router;