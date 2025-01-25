import React, { useState } from "react";
import "./search.css";
import Profissional from "../components/profissional";

function Search() {
  // Estado para controlar a visibilidade dos filtros
  const [mostrarFiltros, setMostrarFiltros] = useState(false);

  // Funções para manipular o foco no input
  const mostrarFiltrosHandler = () => setMostrarFiltros(true);
  const esconderFiltrosHandler = () => setMostrarFiltros(false);

  return (
    <div className={!mostrarFiltros? "barraPesquisa":"barra-posFiltros"}>
      <input
        type="text"
        name="search"
        id="search"
        className="input-filtro"
        autocomplete="off"
        onFocus={mostrarFiltrosHandler} // Quando o input for focado, mostra os filtros
        onBlur={esconderFiltrosHandler}  // Quando o input perder o foco, esconde os filtros
      />
      <label htmlFor="search">
        <ion-icon name="search" className="lupa"></ion-icon>
      </label>

      {/* Exibe os filtros apenas quando o estado mostrarFiltros for true */}
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
