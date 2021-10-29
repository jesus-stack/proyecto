const express = require("express");
const router = express.Router();
const vueloController = require("../controller/vuelo");

/*router.get("/",(req,res,next)=>{
    res.send("vuelo works");
});*/

router.get("/", vueloController.getAll);

router.get("/:id", vueloController.getById);

router.post("/", vueloController.create);

router.delete("/:id", vueloController.delete);

router.put("/:id", vueloController.update);

module.exports = router;

