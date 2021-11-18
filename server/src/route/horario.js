const express = require("express");
const router = express.Router();
const horarioController = require("../controller/horario");

router.get("/", horarioController.getAll);

router.get("/:id", horarioController.getById);

router.post("/", horarioController.create);

router.delete("/:id", horarioController.delete);

router.put("/:id", horarioController.update);

module.exports = router;