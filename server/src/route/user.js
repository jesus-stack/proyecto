//rutas
const express = require('express');
const userController = require('../controller/user');
const Router =express.Router();

const auth = require('../middleware/user');

//obtener
Router.get('/all' ,userController.getuser)
//sigin
Router.post('/signin',userController.signin)
//obtener
Router.post('/signup',userController.signup)

//crear
//Router.post('/',userController.createuser)

//eliminar
Router.delete('/:id',userController.deleteuser)

//obtenerbyid
Router.get('/:id',userController.getById)

//obtenerbyid
Router.put('/:id',userController.updateuser)



module.exports = Router;