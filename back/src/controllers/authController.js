const usuarioModel = require("../models/usuarioModel");
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");

const login = async (req, res) => {
  try {
    const { email, senha } = req.body;

    const usuario = await usuarioModel.findUserByEmail(email);
    if (!usuario) return res.status(404).json({ error: "Usuário não encontrado" });

    const validPassword = await bcrypt.compare(senha, usuario.senha);
    if (!validPassword) return res.status(401).json({ error: "Senha inválida" });

    const token = jwt.sign(
      { id: usuario.id, tipo: usuario.tipo },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    res.json({ token });
  } catch (error) {
    res.status(500).json({ error: "Erro ao fazer login" });
  }
};

module.exports = {login };