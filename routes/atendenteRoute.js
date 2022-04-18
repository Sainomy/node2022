var express = require("express");
var router = express.Router();
const atendenteController = require("../controller/atendenteController");
const multer = require("../config/multer");

//listar todos os dados
router.get("/", atendenteController.list);
//listar dados com filtro
router.post("/", atendenteController.listfiltro);
//abre add
router.get("/add", atendenteController.abreadd);
//adicionar dados no banco
router.post("/add", multer.single("foto"), atendenteController.add);
//abrir editar
router.get("/edt/:id", atendenteController.abreedt);
//editar dados no banco
router.post("/edt/:id", multer.single("foto"), atendenteController.edt);
//deletar dados
router.get("/del/:id", atendenteController.del);

module.exports = router;
