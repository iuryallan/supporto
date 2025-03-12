import Header from "../../components/header/Header";
import Profissional from "../../components/profissional";
import "./grupoApoio.css"
function grupoApoio(){
  return(
    <div className="GrupoApoio">

      <Header/>
      <div className="grupoAPoio-container">
        <div className="lista-gruposDeApoio">
          <Profissional/>
          <Profissional/>
          <Profissional/>
          <Profissional/>
          <Profissional/>
        </div>
      </div>
    </div>
  )
}

export default grupoApoio;