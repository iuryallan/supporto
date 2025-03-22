import "./home.css";
import Header from "../../components/layout/header/HeaderProf";
import ProfUltimoAtend from "../../components/ui/visao-profissional/profUltimoAtend";
import ProfProxAtend from "../../components/ui/visao-profissional/profProxAgend";
import Paciente from "../../components/ui/visao-profissional/paciente";
function Home(props) {
  return (
    <div className="home">
      <Header />

      <div className="container-home">

        <div className="container-pacientes">
          <h3>Meus Pacientes</h3>
          <Paciente nome="Diego" relatorio="homem" />
          <Paciente nome="Diego" relatorio="homem" />
          <Paciente nome="Diego" relatorio="homem" />
          <Paciente nome="Diego" relatorio="homem" />
          <Paciente nome="Diego" relatorio="homem" />
          <Paciente nome="Diego" relatorio="homem" />
          <Paciente nome="Diego" relatorio="homem" />
          <Paciente nome="Diego" relatorio="homem" />
          <Paciente nome="Diego" relatorio="homem" />
          <Paciente nome="Diego" relatorio="homem" />
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
