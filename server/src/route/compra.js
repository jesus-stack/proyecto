const express = require('express');
const compraController = require('../controller/compra');
const router = express.Router();
const auth = require('../middleware/user');

router.get('/' , auth, compraController.getcompra)

router.post('/', compraController.createcompra)

router.delete('/:id', auth, compraController.deletecompra)

router.get('/:id', auth, compraController.getById)

router.put('/:id', auth, compraController.updatecompra)

module.exports = router;