const grupoApoioModel = require('../models/grupoApoioModel');


exports.criarGrupoDeApoio = async (req, res) => {
    try {
        const { link, descricao} = req.body;
        const novoGrupo = await grupoApoioModel.criarGrupoDeApoio(link, descricao);
        res.status(201).json(novoGrupo);
    } catch (error) {
        console.error("Erro ao criar o novo grupo de apoio", error);
        res.status(500).json({ error: "Erro ao criar grupo de apoio"});
    }
}

exports.buscarGruposDeApoios = async (req, res) => {
    try{
        const grupos = await grupoApoioModel.buscarGruposDeApoios();
        res.status(200).json(grupos);
    } catch (error){
        console.error("Erro ao buscas os grupos de apoio", error);
        res.status(500).json({ error: "Erro ao buscar grupos de apoio"});
    }
}


exports.buscarGrupoDeApoioPorId = async (req, res) => {
    try{
        const { id } = req.params;
        const grupo = await usuarioModel.buscarGrupoDeApoioPorId(parseInt(id));


        if(!grupo) {
            return res.status(404).json({ error: "Grupo de apoio não encontrado"});
        }
        res.status(200).json(grupo);
    } catch(error){
        console.error("Erro ao buscar grupo de apoio por Id", error);
        res.status(500).json({ error: "Erro ao bsucar grupo de apoio"})
    }
}


exports.atualizarGrupoDeApoio = async (req, res) => {
    try{
        const {id} = req.params;
        const {link, descricao} = req.body;


        const grupoAtualizado = await grupoApoioModel.atualizargrupoDeApoio(parseInt(id), link, descricao);
        res.status(200).json(grupoAtualizado)
    } catch( error) {
        console.error("Erro ao atualizar o grupo de apoio", error);
        res.status(200).json({error: "Erro ao atualizar grupo de apoio"})
    }
}


exports.deletargrupoDeApoio = async (req, res) => {
    try{
        const {id} = req.params;
        await grupoApoioModel.deletargrupoDeApoio(parseInt(id));
        res.status(200).json({message: "grupo de apoio deletado"});
    } catch (error) {
        console.error("Erro ao deletar grupo de apoio", error);
        res.status(500).json({ error: "Erro ao deletar grupo de apoio"})
    }
}
