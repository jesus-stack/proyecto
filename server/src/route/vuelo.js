const express = require("express");
const router = express.Router();
const vueloController = require("../controller/vuelo");
const auth = require('../middleware/user');

router.get("/", auth, vueloController.getAll);

router.get("/:id", auth, vueloController.getById);

router.post("/", auth, vueloController.create);

router.delete("/:id", auth, vueloController.delete);

router.put("/:id", auth, vueloController.update);

module.exports = router;

