const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();


async function criarProfissional(nome, matricula_profissional, foto_perfil, quant_atend_gratis, faixas_etarias, cidade, estado, genero, idade, usuarioId) {
    try{
        const novoProfissional = await prisma.profissional.create({
            data: {
                nome: nome,
                matricula_profissional: matricula_profissional,
                foto_perfil: foto_perfil,
                quant_atend_gratis: quant_atend_gratis,
                faixas_etarias: faixas_etarias,
                cidade: cidade,
                estado: estado,
                genero: genero,
                idade: idade,
                usuarioId: usuarioId
            },
        });
        return novoProfissional;
    }catch (error){
        console.error("Erro ao criar profissional", error);
        throw error;
    }
}


async function buscarProfissionais(){
    try{
        const profissional = await prisma.profissional.findMany();
        return profissional;
    }catch (error){
        console.error("Error ao buscar profissionais: ", error);
        throw error;
    }
}

async function buscarProfissionalPorId(id){
    try{
        const profissional = await prisma.profissional.findUnique({
            where: {
                id: id,
            },
        });
        return profissional;
    }catch (error) {
        console.error("Erro ao buscar profissional por ID:", error);
        throw error;
    }
}

async function atualizarProfissional(id, nome, matricula_profissional, foto_perfil, quant_atend_gratis, faixas_etarias, cidade, estado, genero, idade, usuarioId){
    try{
        const profissionalAtualizado = await prisma.profissional.update({
            where: {
                id: id,
            },
            data: {
                nome: nome,
                matricula_profissional: matricula_profissional,
                foto_perfil: foto_perfil,
                quant_atend_gratis: quant_atend_gratis,
                faixas_etarias: faixas_etarias,
                cidade: cidade,
                estado: estado,
                genero: genero,
                idade: idade,
                usuarioId: usuarioId
            },
        });
        return profissionalAtualizado;
    } catch(error){
        console.error("Erro ao atualizar profissional: ", error);
        throw error;
    }
}


async function deletarProfissional(id){
    try{
        const profissionalDeletado = await prisma.profissional.delete({
            where: {
                id: id,
            },
        });
        return profissionalDeletado;
    } catch (error){
        console.error("Erro ao deletar profissional: ", error);
        throw error;
    }
}

module.exports = {
    criarProfissional,
    buscarProfissionais,
    buscarProfissionalPorId,
    atualizarProfissional,
    deletarProfissional
};
