const express = require("express")
const router = express.Router();
const atendimento = require('../controllers/atendimentoController');

router.post("/", atendimento.criarAtendimento);
router.get("/", atendimento.buscarAtendimentos);
router.get("/:id", atendimento.buscarAtendimentoPorId);
router.put("/:id", atendimento.atualizarAtendimento);
router.delete("/:id", atendimento.deletarAtendimento);

module.exports = router;