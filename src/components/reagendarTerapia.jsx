import './reagendarTerapia.css'
import { Link } from "react-router-dom";

function reagendarTerapia(props){
  return(
    <div>
      <div className="card-ult-agend">
        <div className="secaocom">
          <h4>Sessão de Terapia</h4>
          <p>com {props.profissional}</p>
        </div>
        <Link to="/Calendario">
          <button className="newagend">Agendar Novamente</button>
        </Link>
        <div className='dataehora'>
          <p>18 de janeiro, 2025</p>
          <p>{props.horario}</p>
        </div>
      </div>
    </div>
  )
}

export default reagendarTerapia;