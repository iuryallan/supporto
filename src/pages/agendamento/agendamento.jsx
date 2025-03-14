import Header from "../../components/layout/header/Header";
import ProxAgend from "../../components/ui/proxAgendamento";
import ReagendarTerapia from "../../components/ui/reagendarTerapia";
import "./agendamento.css";
import ProfUltimoAtend from "../../components/ui/profUltimoAtend";
import ProfProxAtend from "../../components/ui/profProxAgend";

function agendamento() {
  return (
    <div>
      <Header />
      <div className="secao-agendar">
        <div className="container-agendamentos">
          <h3>Próximos Agendamentos</h3>
          <ProxAgend />
          <ProxAgend />
        </div>
        <div className="container-agendamentos">
          <h3>Ultimos Agendamentos</h3>
          <ReagendarTerapia />
          <ReagendarTerapia />
        </div>
      </div>
    </div>
  );
}

export default agendamento;
