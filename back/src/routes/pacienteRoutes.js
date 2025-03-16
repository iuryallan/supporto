const express = require("express")
const router = express.Router();
const paciente = require('../controllers/pacienteController')

router.post("/", paciente.criarPaciente);
router.get("/", paciente.buscarPacientes);
router.get("/:id", paciente.buscarPacientePorId);
router.put("/:id", paciente.atualizarPaciente);
router.delete("/:id", paciente.deletarPaciente);

module.exports = router;