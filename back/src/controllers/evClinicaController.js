const evClinicaModel = require('../models/evClinicaModel');

exports.criarEvolucaoClinica = async (req, res) => {
    try {
        const {data, relato_atendimento, ajustes_tratamento, pacienteId, profissionalId} = req.body;
        const novaEvolucaoClinica = await evClinicaModel.criarEvolucaoClinica(data, relato_atendimento, ajustes_tratamento, pacienteId, profissionalId);
        res.status(201).json(novaEvolucaoClinica);
    } catch (error) {
        console.error("Erro ao criar o nova evolução clínica", error);
        res.status(500).json({ error: "Erro ao criar evolução clínica"});
    }
}

exports.buscarEvolucoesClinicas = async (req, res) => {
    try{
        const evolucoesClinicas = await evClinicaModel.buscarEvolucoesClinicas();
        res.status(200).json(evolucoesClinicas);
    } catch (error){
        console.error("Erro ao buscar evoluções clínicas", error);
        res.status(500).json({ error: "Erro ao buscar evoluções clínicas"});
    }
}

exports.buscarEvolucaoClinicaPorId = async (req, res) => {
    try{
        const { id } = req.params;
        const evolucaoClinica = await evClinicaModel.buscarEvolucaoClinicaPorId(parseInt(id));


        if(!evolucaoClinica) {
            return res.status(404).json({ error: "Evolução clínicas não encontrada"});
        }
        res.status(200).json(evolucaoClinica);
    } catch(error){
        console.error("Erro ao buscar evolução clínica por Id", error);
        res.status(500).json({ error: "Erro ao buscar evolução clínica"})
    }
}

exports.deletarEvolucaoClinica = async (req, res) => {
    try{
        const {id} = req.params;
        await evClinicaModel.deletarEvolucaoClinica(parseInt(id));
        res.status(200).json({message: "Evolução clínica deletada"});
    } catch (error) {
        console.error("Erro ao deletar evolução clínica", error);
        res.status(500).json({ error: "Erro ao deletar evolução clínica"})
    }
}