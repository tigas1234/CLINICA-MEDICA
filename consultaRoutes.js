const express = require("express");
const controller = require("../controllers/consultaController");
const router = express.Router();
router.post("/", controller.criar);
router.get("/", controller.listar);
router.get("/:id", controller.buscar);
router.put("/:id", controller.atualizar);
router.delete("/:id", controller.deletar);
module.exports = router;
