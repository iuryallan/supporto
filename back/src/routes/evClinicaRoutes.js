const express = require("express")
const router = express.Router();
const evClinica = require('../controllers/evClinicaController');

router.post("/", evClinica.criarEvolucaoClinica);
router.get("/", evClinica.buscarEvolucoesClinicas);
router.get("/:id", evClinica.buscarEvolucaoClinicaPorId);
router.delete("/:id", evClinica.deletarEvolucaoClinica);

module.exports = router;