const express = require("express")
const router = express.Router();
const profissional = require('../controllers/profissionalController')

router.post("/", profissional.criarProfissional);
router.get("/", profissional.buscarProfissionais);
router.get("/:id", profissional.buscarProfissionalPorId);
router.put("/:id", profissional.atualizarProfissional);
router.delete("/:id", profissional.deletarProfissional);

module.exports = router;