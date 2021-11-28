const express = require("express");
const router = express.Router();
const reserva_controller = require("../controller/reserva");
const auth = require('../middleware/user');

router.get("/", auth, reserva_controller.getAll);

router.get("/:id", auth, reserva_controller.getById);

router.post("/", auth, reserva_controller.create);

router.delete("/:id", auth, reserva_controller.delete);

router.put("/:id", auth, reserva_controller.update);

module.exports = router;