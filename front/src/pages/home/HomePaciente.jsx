import React, { useState, useEffect } from "react";
import Profissional from "../../components/ui/visao-paciente/profissional";
import "./home.css";
import Header from "../../components/layout/header/HeaderPaciente";
import ReagendarTerapia from "../../components/ui/visao-paciente/reagendarTerapia";
import ProxAgendamento from "../../components/ui/visao-paciente/proxAgendamento";

function Home() {
  const [profissionais, setProfissionais] = useState([]);

  // Função para buscar os dados dos profissionais
  const buscarDadosProfissionais = async () => {
    try {
      const resposta = await fetch('/profissionais.json'); // Caminho correto do JSON
      if (!resposta.ok) {
        throw new Error('Falha ao carregar os profissionais');
      }
      const dados = await resposta.json();
      setProfissionais(dados); // Atualiza o estado com todos os profissionais
    } catch (erro) {
      console.error(erro);
    }
  };

  // Chama a função quando o componente for montado
  useEffect(() => {
    buscarDadosProfissionais();
  }, []);

  return (
    <div className="home">
      <Header />
      <div className="container-home">
        <div className="profissionaisLista">
          <h3>Conheça Profissionais</h3>
          {profissionais.length > 0 ? (
            profissionais.map((profissional) => (
              <Profissional
                key={profissional.id}
                cidade={profissional.cidade}
                estado={profissional.estado}
                nome={profissional.nome}
                especialidade={profissional.especialidade}
              />
            ))
          ) : (
            <p>Carregando profissionais...</p>
          )}
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
