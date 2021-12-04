const express = require("express");
const router = express.Router();
const horarioController = require("../controller/horario");
const auth = require('../middleware/user');

router.get("/", auth, horarioController.getAll);

router.get("/:id", auth, horarioController.getById);

router.post("/", auth, horarioController.create);

router.delete("/:id", auth, horarioController.delete);

router.put("/:id", auth, horarioController.update);

module.exports = router;