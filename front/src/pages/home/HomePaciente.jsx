import React, { useState, useEffect } from "react";
import Profissional from "../../components/ui/visao-paciente/profissional";
import "./home.css";
import Header from "../../components/layout/header/HeaderPaciente";
import ReagendarTerapia from "../../components/ui/visao-paciente/reagendarTerapia";
import ProxAgendamento from "../../components/ui/visao-paciente/proxAgendamento";
import Paciente from "../../components/ui/visao-profissional/paciente";

function Home(props) {
  const [profissionais, setProfissionais] = useState([]);
  const [profissionaisAleatorios, setProfissionaisAleatorios] = useState([]);

  // Função para buscar os dados dos profissionais
  const buscarDadosProfissionais = async () => {
    try {
      const resposta = await fetch('/profissionais.json'); // Caminho correto do JSON
      if (!resposta.ok) {
        throw new Error('Falha ao carregar os profissionais');
      }
      const dados = await resposta.json();
      setProfissionais(dados); // Atualiza o estado com os dados dos profissionais
    } catch (erro) {
      console.error(erro);
    }
  };

  // Função para selecionar aleatoriamente 5 profissionais
  const selecionarProfissionaisAleatorios = (dados) => {
    const selecionados = [];
    const indiceAleatorio = (tamanho) => Math.floor(Math.random() * tamanho);

    while (selecionados.length < 5 && selecionados.length < dados.length) {
      const indice = indiceAleatorio(dados.length);
      if (!selecionados.includes(dados[indice])) {
        selecionados.push(dados[indice]);
      }
    }
    setProfissionaisAleatorios(selecionados); // Atualiza o estado com os 5 profissionais aleatórios
  };

  // Chama as funções quando o componente for montado
  useEffect(() => {
    buscarDadosProfissionais();
  }, []);

  // Quando os dados dos profissionais são carregados, seleciona aleatoriamente os 5 profissionais
  useEffect(() => {
    if (profissionais.length > 0) {
      selecionarProfissionaisAleatorios(profissionais);
    }
  }, [profissionais]); // Dependência no 'profissionais' para rodar quando ele for atualizado

  return (
    <div className="home">
      <Header />
      <div className="container-home">
        <div className="profissionaisLista">
          <h3>Conheça Profissionais</h3>
          {profissionaisAleatorios.length > 0 ? (
            profissionaisAleatorios.map((profissional) => (
              <Profissional
                key={profissional.id}
                local={profissional.local}
                nome={profissional.nome}
                especialidade={profissional.especialidade}
              />
            ))
          ) : (
            <p>Carregando profissionais...</p>
          )}
          <button className="outrosProf">Ver outros profissionais</button>
        </div>

        <div className="resumoAgend">
          <h3>Resumos de Agendamentos</h3>
          <div className="container-reagendar">
            <ReagendarTerapia horario="11:00" profissional="Profissional X" />
            <ProxAgendamento horario="11:00" profissional="Profissional X" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
