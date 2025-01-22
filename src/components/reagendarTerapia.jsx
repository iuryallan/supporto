import './reagendarTerapia.css'

function reagendarTerapia(props){
  return(
    <div>
      <p className="ult-agend">Último agendamento:</p>
      <div className="card-ult-agend">
        <div className="secaocom">
          <h4>Sessão de Terapia</h4>
          <p>com {props.profissional}</p>
        </div>
        <button className="newagend">Agendar Novamente</button>
        <div className='dataehora'>
          <p>18 de janeiro, 2025</p>
          <p>{props.horario}</p>
        </div>
      </div>
    </div>
  )
}

export default reagendarTerapia;