import React, { useState, useEffect } from "react";
import Header from "../../components/layout/header/HeaderPaciente";
import GrupoApoio from "../../components/ui/grupoApoio";
import "./pageGrupoApoio.css";

const carregarGruposDeApoio = async () => {
  try {
    const response = await fetch("/gruposDeApoio.json");
    const grupos = await response.json();
    return grupos;
  } catch (error) {
    console.error("Erro ao carregar grupos de apoio:", error);
    return [];
  }
};

function GrupoApoioPage() {
  const [gruposAleatorios, setGruposAleatorios] = useState([]);

  useEffect(() => {
    const obterGruposAleatorios = async () => {
      const grupos = await carregarGruposDeApoio();

      const gruposSelecionados = [];
      while (gruposSelecionados.length < 5 && grupos.length > 0) {
        const indiceAleatorio = Math.floor(Math.random() * grupos.length);
        gruposSelecionados.push(grupos[indiceAleatorio]);
        grupos.splice(indiceAleatorio, 1); 
      }

      setGruposAleatorios(gruposSelecionados);
    };

    obterGruposAleatorios();
  }, []);

  return (
    <div className="GrupoApoio">
      <Header />
      <div className="grupoAPoio-container">
        <div className="lista-gruposDeApoio">
          <h2>Grupos de apoio</h2>
          {gruposAleatorios.map((grupo, index) => (
            <GrupoApoio key={index} nome={grupo.nome} linkGroup={grupo.link} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default GrupoApoioPage;
