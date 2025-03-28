import React, { useState } from "react";
import "./search.css";
import { Search as SearchIcon, Settings2 } from 'lucide-react';
import Profissional from "../ui/visao-paciente/profissional";
import ProfissionalEncontrado from "../ui/profissionalEncontrado";

function Search() {
  const [mostrarFiltros, setMostrarFiltros] = useState(false);
  const [termoPesquisa, setTermoPesquisa] = useState("");

  const profissionaisMock = [
    { nome: "Diego", local: "Tapuio" },
    { nome: "Maria", local: "Fortaleza" },
    { nome: "João", local: "Recife" },
  ];

  const profissionaisFiltrados =
    termoPesquisa.trim() !== ""
      ? profissionaisMock.filter((profissional) =>
          profissional.nome.toLowerCase().includes(termoPesquisa.toLowerCase())
        )
      : [];

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
        value={termoPesquisa}
        onChange={(e) => setTermoPesquisa(e.target.value)}
      />
      <label htmlFor="campo-pesquisa">
        <SearchIcon className="icone-lupa" size={24} />
      </label>

      <div className="icone-filtros" onClick={alternarFiltros}>
        <Settings2 size={24} />
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
          <button className="button">Aplicar</button>
        </div>
      )}

      {termoPesquisa.trim() !== "" && profissionaisFiltrados.length > 0 && (
        <div className="resultadosPesquisa">
          {profissionaisFiltrados.map((profissional, index) => (
            <ProfissionalEncontrado
              key={index}
              profissional={profissional.nome}
              local={profissional.local}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Search;
