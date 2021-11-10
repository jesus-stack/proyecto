const express = require("express");
const router = express.Router();
const rutaController = require("../controller/ruta");

/*router.get("/",(req,res,next)=>{
    res.send("vuelo works");
});*/

router.get("/", rutaController.getAll);

router.get("/:id", rutaController.getById);

router.post("/", rutaController.create);

router.delete("/:id", rutaController.delete);

router.put("/:id", rutaController.update);

module.exports = router;