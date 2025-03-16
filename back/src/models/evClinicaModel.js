const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function criarEvolucaoClinica(data, relato_atendimento, ajustes_tratamento, pacienteId, profissionalId) {
    try{
        const novaEvolucaoClinica = await prisma.evolucao_clinica.create({
            data: {
                data: data,
                relato_atendimento: relato_atendimento,
                ajustes_tratamento: ajustes_tratamento,
                pacienteId: pacienteId,
                profissionalId: profissionalId
            },
        });
        return novaEvolucaoClinica;
    }catch (error){
        console.error("Erro ao criar evolução clínica", error);
        throw error;
    }
}

async function buscarEvolucoesClinicas(){
    try{
        const evolucoesClinicas = await prisma.evolucao_clinica.findMany();
        return evolucoesClinicas;
    }catch (error){
        console.error("Error ao buscar evoluções clínicas: ", error);
        throw error;
    }
}

async function buscarEvolucaoClinicaPorId(id){
    try{
        const evolucaoClinica = await prisma.evolucao_clinica.findUnique({
            where: {
                id: id,
            },
        });
        return evolucaoClinica;
    }catch (error) {
        console.error("Erro ao buscar evolução clínica por ID:", error);
        throw error;
    }
}

async function deletarEvolucaoClinica(id){
    try{
        const evolucaoClinicaDeletada = await prisma.evolucao_clinica.delete({
            where: {
                id: id,
            },
        });
        return evolucaoClinicaDeletada;
    } catch (error){
        console.error("Erro ao deletar evolução clínica: ", error);
        throw error;
    }
}

module.exports = {
   criarEvolucaoClinica,
   buscarEvolucoesClinicas,
   buscarEvolucaoClinicaPorId,
   deletarEvolucaoClinica,
};