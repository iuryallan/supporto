import './proxAgendamento.css'
function proxAgendamento(props){
  return(
    <div>
      <p className="prox-agend">Proximo agendamento:</p>
      <div className="card-prox-agend">
        <div className="secaocom">
          <h4>Sessão de Terapia</h4>
          <p>com {props.profissional}</p>
        </div>
        <div className="dataehora">
          <p>18 de janeiro, 2025</p>
          <p>{props.horario}</p>
        </div>
      </div>
    </div>
  )
}

export default proxAgendamento;