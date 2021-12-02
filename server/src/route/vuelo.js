const express = require("express");
const router = express.Router();
const vueloController = require("../controller/vuelo");
const auth = require('../middleware/user');

router.get("/", vueloController.getAll);

router.get("/:id", vueloController.getById);

router.post("/", auth, vueloController.create);

router.delete("/:id", auth, vueloController.delete);

router.put("/:id", auth, vueloController.update);

module.exports = router;

