const profissionalModel = require('../models/profissionalModel');


exports.criarProfissional = async (req, res) => {
    try {
        const { nome, matricula_profissional, foto_perfil, quant_atend_gratis, faixa_etaria, cidade, estado, genero, idade, usuarioId} = req.body;
        const novoProfissional = await profissionalModel.criarProfissional(nome, matricula_profissional, foto_perfil, quant_atend_gratis, faixa_etaria, cidade, estado, genero, idade, usuarioId);
        res.status(201).json(novoProfissional);
    } catch (error) {
        console.error("Erro ao criar o novo profissional", error);
        res.status(500).json({ error: "Erro ao criar profissional"});
    }
}


exports.buscarProfissionais = async (req, res) => {
    try{
        const profissionais = await profissionalModel.buscarProfissionais();
        res.status(200).json(profissionais);
    } catch (error){
        console.error("Erro ao buscar os profissionais", error);
        res.status(500).json({ error: "Erro ao buscar profissionais"});
    }
}

exports.buscarProfissionalPorId = async (req, res) => {
    try{
        const { id } = req.params;
        const profissional = await profissionalModel.buscarProfissionalPorId(parseInt(id));

        if(!profissional) {
            return res.status(404).json({ error: "Profissional não encontrado"});
        }
        res.status(200).json(profissional);
    } catch(error){
        console.error("Erro ao buscar profissional por Id", error);
        res.status(500).json({ error: "Erro ao buscar profissional"})
    }
}

exports.atualizarProfissional = async (req, res) => {
    try{
        const {id} = req.params;
        const {nome, matricula_profissional, foto_perfil, quant_atend_gratis, faixa_etaria, cidade, estado, genero, idade, usuarioId} = req.body;

        const profissionalAtualizado = await profissionalModel.atualizarProfissional(parseInt(id), nome, matricula_profissional, foto_perfil, quant_atend_gratis, faixa_etaria, cidade, estado, genero, idade, usuarioId);
        res.status(200).json(profissionalAtualizado)
    } catch( error) {
        console.error("Erro ao atualizar o profissional", error);
        res.status(200).json({error: "Erro ao atualizar profissional"})
    }
}


exports.deletarProfissional = async (req, res) => {
    try{
        const {id} = req.params;
        await profissionalModel.deletarUsuario(parseInt(id));
        res.status(200).json({message: "Profissional deletado"});
    } catch (error) {
        console.error("Erro ao deletar profissional", error);
        res.status(500).json({ error: "Erro ao deletar profissional"})
    }
}