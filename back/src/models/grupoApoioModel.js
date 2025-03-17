const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();


async function criarGrupoDeApoio(link, descricao) {
    try{
        const novoGrupoDeApoio = await prisma.grupo_apoio.create({
            data: {
                link: link,
                descricao: descricao
            },
        });
        return novoGrupoDeApoio;
    }catch (error){
        console.error("Erro ao criar grupo de apoio", error);
        throw error;
    }
}


async function buscarGruposDeApoios(){
    try{
        const grupos = await prisma.grupo_apoio.findMany();
        return grupos;
    }catch (error){
        console.error("Erro ao buscar grupos de apoio: ", error);
        throw error;
    }
}


async function buscarGrupoDeApoioPorId(id){
    try{
        const grupo = await prisma.grupo_apoio.findUnique({
            where: {
                id: id,
            },
        });
        return grupo;
    }catch (error) {
        console.error("Erro ao buscar grupo por ID:", error);
        throw error;
    }
}


async function atualizargrupoDeApoio(id, link, descricao){
    try{
        const grupoAtualizado = await prisma.grupo_apoio.update({
            where: {
                id: id,
            },
            data: {
                link: link,
                descricao: descricao
            },
        });
        return grupoAtualizado;
    } catch(error){
        console.error("Erro ao atualizar grupo de apoio: ", error);
        throw error;
    }
}


async function deletargrupoDeApoio(id){
    try{
        const grupoDeletado = await prisma.grupo_apoio.delete({
            where: {
                id: id,
            },
        });
        return grupoDeletado;
    } catch (error){
        console.error("Erro ao deletar grupo de apoio: ", error);
        throw error;
    }
}


module.exports = {
    criarGrupoDeApoio,
    buscarGruposDeApoios,
    buscarGrupoDeApoioPorId,
    atualizargrupoDeApoio,
    deletargrupoDeApoio,
};
