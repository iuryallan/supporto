const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();


async function criarPaciente(nome, genero, data_nasc, motivo_terapia, medicamentos, historico_familiar, principal_queixa, email_contato, usuarioId) {
    try{
        const novoPaciente = await prisma.paciente.create({
            data: {
                nome: nome,
                genero: genero,
                data_nasc: new Date(data_nasc),
                motivo_terapia: motivo_terapia,
                medicamentos: medicamentos,
                historico_familiar: historico_familiar, 
                principal_queixa: principal_queixa,
                email_contato: email_contato,
                usuarioId: usuarioId
            },
        });
        return novoPaciente;
    }catch (error){
        console.error("Erro ao criar paciente", error);
        throw error;
    }
}


async function buscarPacientes(){
    try{
        const pacientes = await prisma.paciente.findMany();
        return pacientes;
    }catch (error){
        console.error("Error ao buscar pacientes: ", error);
        throw error;
    }
}


async function buscarPacientePorId(id){
    try{
        const paciente = await prisma.paciente.findUnique({
            where: {
                id: id,
            },
        });
        return paciente;
    }catch (error) {
        console.error("Erro ao buscar paciente por ID:", error);
        throw error;
    }
}


async function atualizarPaciente(id, nome, genero, data_nasc, motivo_terapia, medicamentos, historico_familiar, principal_queixa, email_contato, usuarioId){
    try{
        const pacienteAtualizado = await prisma.paciente.update({
            where: {
                id: id,
            },
            data: {
                nome: nome,
                genero: genero,
                data_nasc: new Date(data_nasc),
                motivo_terapia: motivo_terapia,
                medicamentos: medicamentos,
                historico_familiar: historico_familiar, 
                principal_queixa: principal_queixa,
                email_contato: email_contato,
                usuarioId: usuarioId
            },
        });
        return pacienteAtualizado;
    } catch(error){
        console.error("Erro ao atualizar paciente: ", error);
        throw error;
    }
}


async function deletarPaciente(id){
    try{
        const pacienteDeletado = await prisma.paciente.delete({
            where: {
                id: id,
            },
        });
        return pacienteDeletado;
    } catch (error){
        console.error("Erro ao deletar paciente: ", error);
        throw error;
    }
}


module.exports = {
    criarPaciente,
    buscarPacientes,
    buscarPacientePorId,
    atualizarPaciente,
    deletarPaciente,
};
