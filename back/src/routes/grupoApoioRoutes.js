const express = require("express")
const router = express.Router();
const grupoDeApoio = require('../controllers/grupoApoioController')

router.post("/", grupoDeApoio.criarGrupoDeApoio);
router.get("/", grupoDeApoio.buscarGruposDeApoios);
router.get("/:id", grupoDeApoio.buscarGrupoDeApoioPorId);
router.put("/:id", grupoDeApoio.atualizarGrupoDeApoio);
router.delete("/:id", grupoDeApoio.deletarGrupoDeApoio);

module.exports = router;