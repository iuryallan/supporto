import Header from "../../components/layout/header/HeaderPaciente";
import GrupoApoio from "../../components/ui/grupoApoio";
import "./pageGrupoApoio.css";
function grupoApoio() {
  return (
    <div className="GrupoApoio">
      <Header />
      <div className="grupoAPoio-container">
        <div className="lista-gruposDeApoio">
          <h2>Grupos de apoio</h2>
          <GrupoApoio nome="alcolatras" linkGroup="https://github.com/" />
          <GrupoApoio />
          <GrupoApoio />
          <GrupoApoio />
          <GrupoApoio />
        </div>
      </div>
    </div>
  );
}

export default grupoApoio;
