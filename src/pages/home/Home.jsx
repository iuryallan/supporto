import Profissional from "../../components/profissional";
import "./home.css";
import Header from "../../components/header/Header";
import ReagendarTerapia from "../../components/reagendarTerapia";
import ProxAgendamento from "../../components/proxAgendamento";
import ProfUltimoAtend from "../../components/profUltimoAtend";
import ProfProxAtend from "../../components/profProxAgend";
import Paciente from "../../components/paciente/paciente"
function Home(props) {
  return (
    <div className="home">

      <Header />

      <div className="container">
        <div className="container-pacientes">
          <h3>Meus Pacientes</h3>
          <Paciente nome="Diego" relatorio="homem"/>
          <Paciente nome="Diego" relatorio="homem"/>
          <Paciente nome="Diego" relatorio="homem"/>
          <Paciente nome="Diego" relatorio="homem"/>
          <Paciente nome="Diego" relatorio="homem"/>
          <Paciente nome="Diego" relatorio="homem"/>
          <Paciente nome="Diego" relatorio="homem"/>
          <Paciente nome="Diego" relatorio="homem"/>
          <Paciente nome="Diego" relatorio="homem"/>
          <Paciente nome="Diego" relatorio="homem"/>
        </div>
      </div>
      {/* <div className="container-home">
        <div className="profissionaisLista">
          <h3>Conheça Profissionais</h3>
          <Profissional />
          <Profissional />
          <Profissional />
          <Profissional />
          <Profissional />
          <button className="outrosProf">Ver outros profissionais</button>
        </div>

        <div className="resumoAgend">
          <h3>Resumos de Agendamentos</h3>

          <div className="container-reagendar">
            <ReagendarTerapia horario="11:00" profissional="Iury" />
            <ProxAgendamento horario="11:00" profissional="Iury"/>
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default Home;
