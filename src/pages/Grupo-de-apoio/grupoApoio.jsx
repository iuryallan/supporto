import Header from "../../components/layout/header/Header";
import Profissional from "../../components/ui/visao-paciente/profissional";
import "./grupoApoio.css";
function grupoApoio() {
  return (
    <div className="GrupoApoio">
      <Header />
      <div className="grupoAPoio-container">
        <div className="lista-gruposDeApoio">
          <h2>Grupos de apoio</h2>
          <Profissional />
          <Profissional />
          <Profissional />
          <Profissional />
          <Profissional />
        </div>
      </div>
    </div>
  );
}

export default grupoApoio;
