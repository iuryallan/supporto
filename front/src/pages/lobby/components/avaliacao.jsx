import React, { useState, useEffect } from "react";
import Axios from "axios";
import CardOpiniao from "./cardOpiniao";
import "./avaliacao.css";

function Avaliacao() {
  const [avaliacaoReal, setAvaliacaoReal] = useState([]);

  const avaliacaoGenerica = {
    nome: "Usuário Genérico",
    opiniao: "Este é um comentário genérico para preencher o card.",
  };

  useEffect(() => {
    Axios.get("http://localhost:3007/depoimentos")
      .then((response) => {
        const embaralhado = response.data.sort(() => Math.random() - 0.5);
        setAvaliacaoReal(embaralhado.slice(0, 4));
      })
      .catch((error) => {
        console.error("Erro ao carregar as avaliações:", error);
      });
  }, []);

  return (
    <section id="s2" className="secaoAvaliacao">
      <div>
        <div className="tituloAvaliacao">
          <h2>Qual a opinião dos nossos usuários?</h2>
        </div>
        <div className="conteinerCards">
          {avaliacaoReal.length > 0 ? (
            avaliacaoReal.map((avaliacao, index) => (
              <CardOpiniao
                key={index}
                nome={avaliacao.data}
                opiniao={avaliacao.texto}
              />
            ))
          ) : (
            <CardOpiniao
              nome="Carregando..."
              opiniao="Carregando avaliação..."
            />
          )}
        </div>
      </div>
    </section>
  );
}

export default Avaliacao;
