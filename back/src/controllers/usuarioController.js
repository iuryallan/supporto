const usuarioModel = require('../models/usuarioModel');
const { createUsuarioComPerfil } = require('../models/usuarioModel');

exports.criarUsuario = async (req, res) => {
    try {
        const { email, tipo, senha} = req.body;
        const novoUsuario = await usuarioModel.criarUsuario(email, tipo, senha);
        res.status(201).json(novoUsuario);
    } catch (error) {
        console.error("Erro ao criar o novo usuário", error);
        res.status(500).json({ error: "Erro ao criar usuário"});
    }
}

exports.buscarUsuarios = async (req, res) => {
    try{
        const usuarios = await usuarioModel.buscarUsuarios();
        res.status(200).json(usuarios);
    } catch (error){
        console.error("Erro ao buscas os usuários", error);
        res.status(500).json({ error: "Erro ao buscar usuários"});
    }
}


exports.buscarUsuarioPorId = async (req, res) => {
    try{
        const { id } = req.params;
        const usuario = await usuarioModel.buscarUsuarioPorId(parseInt(id));


        if(!usuario) {
            return res.status(404).json({ error: "Usuário não encontrado"});
        }
        res.status(200).json(usuario);
    } catch(error){
        console.error("Erro ao buscar usuário por Id", error);
        res.status(500).json({ error: "Erro ao bsucar usuário"})
    }
}


exports.atualizarUsuario = async (req, res) => {
    try{
        const {id} = req.params;
        const {email, tipo, senha} = req.body;


        const usuarioAtualizado = await usuarioModel.atualizarUsuario(parseInt(id), email, tipo, senha);
        res.status(200).json(usuarioAtualizado)
    } catch( error) {
        console.error("Erro ao atualizar o usuário", error);
        res.status(200).json({error: "Erro ao atualizar usuário"})
    }
}


exports.deletarUsuario = async (req, res) => {
    try{
        const {id} = req.params;
        await usuarioModel.deletarUsuario(parseInt(id));
        res.status(200).json({message: "Usuário deletado"});
    } catch (error) {
        console.error("Erro ao deletar usuário", error);
        res.status(500).json({ error: "Erro ao deletar usuário"})
    }
}

exports.getUserProfile = async (req, res) => {
    try {
      const id = req.usuario.id;
      const usuario = await usuarioModel.getUserProfile(id);
  
      if (!usuario) return res.status(404).json({ error: "Usuário não encontrado" });
  
      res.json(usuario);
    } catch (error) {
      res.status(500).json({ error: "Erro ao buscar perfil do usuário" });
    }
};

exports.cadastrarUsuario = async (req, res) => {
    try {
      const usuario = await createUsuarioComPerfil(req.body);
      res.status(201).json(usuario);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Erro ao cadastrar usuário' });
    }
};