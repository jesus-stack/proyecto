const express = require("express");
const router = express.Router();
const tipoAvionController = require("../controller/tipoAvion");

/*router.get("/",(req,res,next)=>{
    res.send("vuelo works");
});*/

router.get("/", tipoAvionController.getAll);

router.get("/:id", tipoAvionController.getById);

router.post("/", tipoAvionController.create);

router.delete("/:id", tipoAvionController.delete);

router.put("/:id", tipoAvionController.update);

module.exports = router;