import React, { useState } from "react";
import "./search.css";
import Profissional from "../ui/visao-paciente/profissional";

function Search() {
  const [mostrarFiltros, setMostrarFiltros] = useState(false);

  const alternarFiltros = () => {
    setMostrarFiltros(!mostrarFiltros);
  };

  return (
    <div
      className={
        !mostrarFiltros
          ? "container-barraPesquisa"
          : "container-barraPesquisa-pos-filtros"
      }
    >
      <input
        type="text"
        name="pesquisa"
        id="campo-pesquisa"
        className="input-pesquisa"
        autoComplete="off"
      />
      <label htmlFor="campo-pesquisa">
        <ion-icon name="search" className="icone-lupa"></ion-icon>
      </label>

      <div className="icone-filtros" onClick={alternarFiltros}>
        <ion-icon name="options-outline"></ion-icon>
      </div>

      {mostrarFiltros && (
        <div className="painel-filtros">
          <select name="estado" id="selecao-estado">
            <option value="CE">CE</option>
            <option value="PE">PE</option>
            <option value="FO">FO</option>
            <option value="QU">QU</option>
            <option value="IC">IC</option>
          </select>
          <select name="doenca-mental" id="selecao-doenca-mental">
            <option value="depressao">Depressão</option>
            <option value="ansiedade">Ansiedade</option>
            <option value="crise-de-panico">Crise de Pânico</option>
            <option value="osteoporose">Osteoporose</option>
          </select>
          <select name="faixa-etaria" id="selecao-faixa-etaria">
            <option value="crianca">Criança</option>
            <option value="adolescente">Adolescente</option>
            <option value="jovem-adulto">Jovem-Adulto</option>
            <option value="adulto">Adulto</option>
            <option value="idoso">Idoso</option>
          </select>
          <div className="lista-profissionais">
            <Profissional />
          </div>
        </div>
      )}
    </div>
  );
}

export default Search;
