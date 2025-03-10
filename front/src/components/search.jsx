import React, { useState } from "react";
import "./search.css";
import Profissional from "../components/profissional";

function Search() {

  const [mostrarFiltros, setMostrarFiltros] = useState(false);

  const alternarFiltros = () => {
    setMostrarFiltros(!mostrarFiltros);
  };

  return (
    <div className={!mostrarFiltros? "barraPesquisa":"barra-posFiltros"}>
      <input
        type="text"
        name="search"
        id="search"
        className="input-filtro"
        autoComplete="off"
      />
      <label htmlFor="search">
        <ion-icon name="search" className="lupa"></ion-icon>
      </label>

      <div className="icone-filtros" onClick={alternarFiltros}>
        <ion-icon name="options-outline"></ion-icon>
      </div>

      {mostrarFiltros && (
        <div className="filtros">
          <div className="pos-filtro">
            <select name="estado" id="estado">
              <option value="estado">CE</option>
              <option value="estado">PE</option>
              <option value="estado">FO</option>
              <option value="estado">QU</option>
              <option value="estado">IC</option>
            </select>
            <select name="doentesMentais" id="doentesMentais">
              <option value="estado">depressao</option>
              <option value="estado">ansiedade</option>
              <option value="estado">crise de panico </option>
              <option value="estado">iury sem muie</option>
              <option value="estado">ostioporose</option>
            </select>
            <select name="faixaEtaria" id="faixaEtaria">
              <option value="estado">Criança</option>
              <option value="estado">Adolecente</option>
              <option value="estado">Jovem-Adulto</option>
              <option value="estado">Adulto</option>
              <option value="estado">véi</option>
            </select>
          </div>
          <div className="filtro-profissionais">
            <Profissional />
          </div>
        </div>
      )}
    </div>
  );
}

export default Search;
