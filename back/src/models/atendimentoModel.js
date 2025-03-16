const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function criarAtendimento(data, status, pacienteId, profissionalId) {
    try{
        const novoAtendimento = await prisma.atendimento.create({
            data: {
                data: data,
                status: status,
                pacienteId: pacienteId,
                profissionalId: profissionalId,
            },
        });
        return novoAtendimento;
    }catch (error){
        console.error("Erro ao criar atendimento", error);
        throw error;
    }
}

async function buscarAtendimentos(){
    try{
        const atendimentos = await prisma.atendimento.findMany();
        return atendimentos;
    }catch (error){
        console.error("Error ao buscar atendimentos: ", error);
        throw error;
    }
}

async function buscarAtendimentoPorId(id){
    try{
        const atendimento = await prisma.atendimento.findUnique({
            where: {
                id: id,
            },
        });
        return atendimento;
    }catch (error) {
        console.error("Erro ao buscar atendimento por ID:", error);
        throw error;
    }
}

async function atualizarAtendimento(id, data, status, pacienteId, profissionalId){
    try{
        const atendimentoAtualizado = await prisma.atendimento.update({
            where: {
                id: id,
            },
            data: {
               data: data,
               status: status,
               pacienteId: pacienteId,
               profissionalId: profissionalId,
            },
        });
        return atendimentoAtualizado
    } catch(error){
        console.error("Erro ao atualizar atendimento: ", error);
        throw error;
    }
}

async function deletarAtendimento(id){
    try{
        const atendimentoDeletado = await prisma.atendimento.delete({
            where: {
                id: id,
            },
        });
        return atendimentoDeletado;
    } catch (error){
        console.error("Erro ao deletar atendimento: ", error);
        throw error;
    }
}

module.exports = {
    criarAtendimento,
    buscarAtendimentos,
    buscarAtendimentoPorId,
    atualizarAtendimento,
    deletarAtendimento,
};