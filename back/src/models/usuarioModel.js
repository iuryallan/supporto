const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();


async function criarUsuario(email, tipo, senha) {
    try{
        const novoUsuario = await prisma.usuario.create({
            data: {
                email: email,
                tipo: tipo,
                senha: senha,
            },
        });
        return novoUsuario;
    }catch (error){
        console.error("Erro ao criar usuário", error);
        throw error;
    }
}


async function buscarUsuarios(){
    try{
        const usuarios = await prisma.usuario.findMany();
        return usuarios;
    }catch (error){
        console.error("Error ao buscar usuários: ", error);
        throw error;
    }
}


async function buscarUsuarioPorId(id){
    try{
        const usuario = await prisma.usuario.findUnique({
            where: {
                id: id,
            },
        });
        return usuario;
    }catch (error) {
        console.error("Erro ao buscar usuário por ID:", error);
        throw error;
    }
}


async function atualizarUsuario(id, email, tipo, senha){
    try{
        const usuarioAtualizado = await prisma.usuario.update({
            where: {
                id: id,
            },
            data: {
                email: email,
                tipo: tipo,
                senha: senha,
            },
        });
        return usuarioAtualizado;
    } catch(error){
        console.error("Erro ao atualizar usuário: ", error);
        throw error;
    }
}


async function deletarUsuario(id){
    try{
        const usuarioDeletado = await prisma.usuario.delete({
            where: {
                id: id,
            },
        });
        return usuarioDeletado;
    } catch (error){
        console.error("Erro ao deletar usuário: ", error);
        throw error;
    }
}


module.exports = {
    criarUsuario,
    buscarUsuarios,
    buscarUsuarioPorId,
    atualizarUsuario,
    deletarUsuario,
};
