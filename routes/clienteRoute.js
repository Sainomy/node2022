var express = require("express");
var router = express.Router();
const clienteController = require("../controller/clienteController");
const multer = require("../config/multer");

//listar todos os dados
router.get("/", clienteController.list);
//listar dados com filtro
router.post("/", clienteController.listfiltro);
//abre add
router.get("/add", clienteController.abreadd);
//adicionar dados no banco
router.post("/add", clienteController.add);
//abrir editar
router.get("/edt/:id", clienteController.abreedt);
//editar dados no banco
router.post("/edt/:id", clienteController.edt);
//deletar dados
router.get("/del/:id", clienteController.del);

module.exports = router;
