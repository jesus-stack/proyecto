const express = require('express');
const userController = require('../controller/user');
const router = express.Router();
const auth = require('../middleware/user');

//obtener
//router.get('/all',auth ,userController.getuser)  ????

router.get('/' , userController.getuser)
//sigin
router.post('/signin', userController.signin)
//obtener
router.post('/signup', userController.signup)

//crear
//router.post('/', userController.createuser)

//eliminar
router.delete('/:id', userController.deleteuser)

//obtenerbyid
router.get('/:id', userController.getById)

//obtenerbyid
router.put('/:id', userController.updateuser)

module.exports = router;