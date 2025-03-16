const depoimentoModel = require('../models/depoimentoModel');

exports.criarDepoimento = async (req, res) => {
    try {
        const {texto, data, usuarioId} = req.body;
        const novoDepoimento = await depoimentoModel.criarUsuario(texto, data, usuarioId);
        res.status(201).json(novoDepoimento);
    } catch (error) {
        console.error("Erro ao criar o novo depoimento", error);
        res.status(500).json({ error: "Erro ao criar depoimento"});
    }
}

exports.buscarDepoimentos = async (req, res) => {
    try{
        const depoimentos = await depoimentoModel.buscarDepoimentos();
        res.status(200).json(depoimentos);
    } catch (error){
        console.error("Erro ao buscar os depoimentos", error);
        res.status(500).json({ error: "Erro ao buscar depoimentos"});
    }
}

exports.buscarDepoimentoPorId = async (req, res) => {
    try{
        const { id } = req.params;
        const depoimento = await depoimentoModel.buscarDepoimentoPorId(parseInt(id));

        if(!depoimento) {
            return res.status(404).json({ error: "Depoimento não encontrado"});
        }
        res.status(200).json(depoimento);
    } catch(error){
        console.error("Erro ao buscar depoimento por Id", error);
        res.status(500).json({ error: "Erro ao buscar depoimento"})
    }
}

exports.deletarDepoimento = async (req, res) => {
    try{
        const {id} = req.params;
        await depoimentoModel.deletarDepoimento(parseInt(id));
        res.status(200).json({message: "Depoimento deletado"});
    } catch (error) {
        console.error("Erro ao deletar depoimento", error);
        res.status(500).json({ error: "Erro ao deletar depoimento"})
    }
}