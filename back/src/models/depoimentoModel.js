const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function criarDepoimento(texto, data, usuarioId) {
    try{
        const novoDepoimento = await prisma.depoimento.create({
            data: {
                texto: texto,
                data: data,
                usuarioId: usuarioId,
            },
        });
        return novoDepoimento;
    }catch (error){
        console.error("Erro ao criar depoimento", error);
        throw error;
    }
}

async function buscarDepoimentos(){
    try{
        const depoimentos = await prisma.depoimento.findMany();
        return depoimentos;
    }catch (error){
        console.error("Error ao buscar depoimentos: ", error);
        throw error;
    }
}

async function buscarDepoimentoPorId(id){
    try{
        const depoimento = await prisma.depoimento.findUnique({
            where: {
                id: id,
            },
        });
        return depoimento;
    }catch (error) {
        console.error("Erro ao buscar depoimento por ID:", error);
        throw error;
    }
}

async function deletarDepoimento(id){
    try{
        const depoimentoDeletado = await prisma.depoimento.delete({
            where: {
                id: id,
            },
        });
        return depoimentoDeletado;
    } catch (error){
        console.error("Erro ao deletar depoimento: ", error);
        throw error;
    }
}

module.exports = {
    criarDepoimento,
    buscarDepoimentos,
    buscarDepoimentoPorId,
    deletarDepoimento,
};