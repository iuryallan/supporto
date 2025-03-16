const express = require("express")
const router = express.Router();
const depoimento = require('../controllers/depoimentoController');

router.post("/", depoimento.criarDepoimento);
router.get("/", depoimento.buscarDepoimentos);
router.get("/:id", depoimento.buscarDepoimentoPorId);
router.delete("/:id", depoimento.deletarDepoimento);

module.exports = router;