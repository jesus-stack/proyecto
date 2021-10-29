const express = require("express");
const router = express.Router();
const reserva_controller = require("../controller/reserva");

/*router.get("/",(req,res,next)=>{
    res.send("reserva works");
});*/

router.get("/", reserva_controller.getAll);

router.get("/:id", reserva_controller.getById);

router.post("/", reserva_controller.create);

router.delete("/:id", reserva_controller.delete);

router.put("/:id", reserva_controller.update);

module.exports = router;