import Header from "../../components/layout/header/HeaderPaciente";
import ProxAgend from "../../components/ui/visao-paciente/proxAgendamento";
import ReagendarTerapia from "../../components/ui/visao-paciente/reagendarTerapia";
import "./agendamento.css";

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
