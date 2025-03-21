import React, { useState, useEffect } from "react";
import Axios from "axios";
import CardOpiniao from "./cardOpiniao";
import './avaliacao.css';

function Avaliacao() {
  const [avaliacaoReal, setAvaliacaoReal] = useState(null);

  const avaliacaoGenerica = {
    nome: "Usuário Genérico",
    opiniao: "Este é um comentário genérico para preencher o card.",
  };


  useEffect(() => {
    Axios.get('http://localhost:3007/depoimentos')
      .then((response) => {
        console.log(response.data[0])
        setAvaliacaoReal(response.data[0]);
      })
      .catch((error) => {
        console.error('Erro ao carregar as avaliações:', error);
      });
  }, []);

  return (
    <section id='s2' className="secaoAvaliacao">
      <div>
        <div className="tituloAvaliacao">
          <h2>Qual a opinião dos nossos usuários?</h2>
        </div>
        <div className="conteinerCards">
          {avaliacaoReal ? (
            <CardOpiniao
              nome={avaliacaoReal.data}
              opiniao={avaliacaoReal.texto}
            />
          ) : (
            <CardOpiniao
              nome="Carregando..."
              opiniao="Carregando avaliação..."
            />
          )}

          <CardOpiniao
            nome={avaliacaoGenerica.nome}
            opiniao={avaliacaoGenerica.opiniao}
          />
          <CardOpiniao
            nome={avaliacaoGenerica.nome}
            opiniao={avaliacaoGenerica.opiniao}
          />
          <CardOpiniao
            nome={avaliacaoGenerica.nome}
            opiniao={avaliacaoGenerica.opiniao}
          />
        </div>
      </div>
    </section>
  );
}

export default Avaliacao;
