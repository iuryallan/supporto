const express = require("express")
const router = express.Router();
const usuario = require('../controllers/usuarioController');


router.post("/", usuario.criarUsuario);
router.get("/", usuario.buscarUsuarios);
router.get("/:id", usuario.buscarUsuarioPorId);
router.put("/:id", usuario.atualizarUsuario);
router.delete("/:id", usuario.deletarUsuario);


module.exports = router;