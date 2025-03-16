import "../visao-paciente/proxAgendamento";
import { Link } from "react-router-dom";

function ProfProxAtend(props) {
  return (
    <div>
      <div className="card-prox-agend">
        <div className="secaocom">
          <h4>Sessão de Terapia</h4>
          <p>com {props.paciente}</p>
          <p>Contato: {props.email}</p>
        </div>
        <Link to="/RegistrarEvolucao">
          <button className="newagend">Registrar Evolução</button>
        </Link>
        <div className="dataehora">
          <p>18 de janeiro, 2025</p>
          <p>{props.horario}</p>
        </div>
      </div>
    </div>
  );
}

export default ProfProxAtend;
