const atendimentoModel = require('../models/atendimentoModel');

exports.criarAtendimento = async (req, res) => {
    try {
        const {data, status, pacienteId, profissionalId} = req.body;
        const novoAtendimento = await atendimentoModel.criarAtendimento(data, status, pacienteId, profissionalId);
        res.status(201).json(novoAtendimento);
    } catch (error) {
        console.error("Erro ao criar o novo atendimento", error);
        res.status(500).json({ error: "Erro ao criar atendimento"});
    }
}

exports.buscarAtendimentos = async (req, res) => {
    try{
        const atendimentos = await atendimentoModel.buscarAtendimentos();
        res.status(200).json(atendimentos);
    } catch (error){
        console.error("Erro ao buscar os atendimentos", error);
        res.status(500).json({ error: "Erro ao buscar atendimentos"});
    }
}

exports.buscarAtendimentoPorId = async (req, res) => {
    try{
        const { id } = req.params;
        const atendimento = await atendimentoModel.buscarAtendimentoPorId(parseInt(id));

        if(!atendimento) {
            return res.status(404).json({ error: "Atendimento não encontrado"});
        }
        res.status(200).json(atendimento);
    } catch(error){
        console.error("Erro ao buscar atendimento por Id", error);
        res.status(500).json({ error: "Erro ao bsucar atendimento"})
    }
}

exports.atualizarAtendimento = async (req, res) => {
    try{
        const {id} = req.params;
        const {data, status, pacienteId, profissionalId} = req.body;

        const atendimentoAtualizado = await atendimentoModel.atualizarAtendimento(parseInt(id), data, status, pacienteId, profissionalId);
        res.status(200).json(atendimentoAtualizado)
    } catch( error) {
        console.error("Erro ao atualizar o atendimento", error);
        res.status(200).json({error: "Erro ao atualizar atendimento"})
    }
}

exports.deletarAtendimento = async (req, res) => {
    try{
        const {id} = req.params;
        await atendimentoModel.deletarAtendimento(parseInt(id));
        res.status(200).json({message: "Atendimento deletado"});
    } catch (error) {
        console.error("Erro ao deletar atendimento", error);
        res.status(500).json({ error: "Erro ao deletar atendimento"})
    }
}