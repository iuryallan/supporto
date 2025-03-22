import Header from "../../components/layout/header/HeaderProf";
import "./agendamento.css";
import ProfUltimoAtend from "../../components/ui/visao-profissional/profUltimoAtend";
import ProfProxAtend from "../../components/ui/visao-profissional/profProxAgend";

function agendamento() {
  return (
    <div>
      <Header />
      <div className="secao-agendar">
        <div className="container-agendamentos">
          <h3>Próximos Agendamentos</h3>
          <ProfProxAtend />
          <ProfProxAtend />
        </div>
        <div className="container-agendamentos">
          <h3>Ultimos Agendamentos</h3>
          <ProfUltimoAtend />
          <ProfUltimoAtend />
        </div>
      </div>
    </div>
  );
}

export default agendamento;
