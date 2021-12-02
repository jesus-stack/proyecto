const express = require("express");
const router = express.Router();
const tipoAvionController = require("../controller/tipoAvion");
const auth = require('../middleware/user');

router.get("/", auth, tipoAvionController.getAll);

router.get("/:id", auth, tipoAvionController.getById);

router.post("/", auth, tipoAvionController.create);

router.delete("/:id", auth, tipoAvionController.delete);

router.put("/:id", auth, tipoAvionController.update);

module.exports = router;