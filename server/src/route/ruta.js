const express = require("express");
const router = express.Router();
const rutaController = require("../controller/ruta");
const auth = require('../middleware/user');

router.get("/", auth, rutaController.getAll);

router.get("/:id", auth, rutaController.getById);

router.post("/", auth, rutaController.create);

router.delete("/:id", auth, rutaController.delete);

router.put("/:id", auth, rutaController.update);

module.exports = router;