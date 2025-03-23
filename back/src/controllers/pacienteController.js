const pacienteModel = require('../models/pacienteModel');


exports.criarPaciente = async (req, res) => {
    try {
        const { nome, genero, data_nasc, motivo_terapia, medicamentos, historico_familiar, principal_queixa, email_contato, usuarioId} = req.body;
        const novoPaciente = await pacienteModel.criarPaciente(nome, genero, data_nasc, motivo_terapia, medicamentos, historico_familiar, principal_queixa, email_contato, usuarioId);
        res.status(201).json(novoPaciente);
    } catch (error) {
        console.error("Erro ao criar o novo paciente", error);
        res.status(500).json({ error: "Erro ao criar paciente"});
    }
}


exports.buscarPacientes = async (req, res) => {
    try{
        const pacientes = await pacienteModel.buscarPacientes();
        res.status(200).json(pacientes);
    } catch (error){
        console.error("Erro ao buscar os pacientes", error);
        res.status(500).json({ error: "Erro ao buscar pacientes"});
    }
}

exports.buscarPacientePorId = async (req, res) => {
    try{
        const { id } = req.params;
        const paciente = await pacienteModel.buscarPacientePorId(parseInt(id));

        if(!paciente) {
            return res.status(404).json({ error: "Paciente não encontrado"});
        }
        res.status(200).json(paciente);
    } catch(error){
        console.error("Erro ao buscar paciente por Id", error);
        res.status(500).json({ error: "Erro ao buscar paciente"})
    }
}

exports.atualizarPaciente = async (req, res) => {
    try{
        const {id} = req.params;
        const {nome, genero, data_nasc, motivo_terapia, medicamentos, historico_familiar, principal_queixa, email_contato, usuarioId} = req.body;

        const pacienteAtualizado = await pacienteModel.atualizarPaciente(parseInt(id), nome, genero, data_nasc, motivo_terapia, medicamentos, historico_familiar, principal_queixa, email_contato, usuarioId);
        res.status(200).json(pacienteAtualizado)
    } catch( error) {
        console.error("Erro ao atualizar o paciente", error);
        res.status(200).json({error: "Erro ao atualizar paciente"})
    }
}


exports.deletarPaciente = async (req, res) => {
    try{
        const {id} = req.params;
        await pacienteModel.deletarPaciente(parseInt(id));
        res.status(200).json({message: "Paciente deletado"});
    } catch (error) {
        console.error("Erro ao deletar paciente", error);
        res.status(500).json({ error: "Erro ao deletar paciente"})
    }
}