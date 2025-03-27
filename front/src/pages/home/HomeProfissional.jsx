import React, { useState, useEffect } from "react";
import "./home.css";
import Header from "../../components/layout/header/HeaderProf";
import ProfUltimoAtend from "../../components/ui/visao-profissional/profUltimoAtend";
import ProfProxAtend from "../../components/ui/visao-profissional/profProxAgend";
import Paciente from "../../components/ui/visao-profissional/paciente";

// Função assíncrona para carregar pacientes do JSON
const carregarPacientes = async () => {
  try {
    const response = await fetch("/pacientes.json");
    const pacientes = await response.json();
    return pacientes;
  } catch (error) {
    console.error("Erro ao carregar pacientes:", error);
    return [];
  }
};

function Home(props) {
  const [pacientesAleatorios, setPacientesAleatorios] = useState([]);

  useEffect(() => {
    const obterPacientesAleatorios = async () => {
      const pacientes = await carregarPacientes();

      // Selecionar 5 pacientes aleatórios
      const pacientesSelecionados = [];
      while (pacientesSelecionados.length < 5 && pacientes.length > 0) {
        const indiceAleatorio = Math.floor(Math.random() * pacientes.length);
        pacientesSelecionados.push(pacientes[indiceAleatorio]);
        pacientes.splice(indiceAleatorio, 1);
      }

      setPacientesAleatorios(pacientesSelecionados);
    };

    obterPacientesAleatorios();
  }, []);

  return (
    <div className="home">
      <Header />

      <div className="container-home">
        <div className="container-pacientes">
          <h3>Meus Pacientes</h3>
          {pacientesAleatorios.map((paciente, index) => (
            <Paciente key={index} nome={paciente.nome} relatorio={paciente.relatorio} />
          ))}
        </div>

        <div className="resumoAgend">
          <h3>Resumos de Agendamentos</h3>
          <div className="container-reagendar">
            <ProfUltimoAtend horario="11:00" profissional="Iury" />
            <ProfProxAtend horario="11:00" profissional="Iury" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
