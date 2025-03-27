import "./paciente.css"

function paciente(props){
  return(
    <div className="meusPacientes">
      <div>{props.nome}</div>
      <p className="relatorio">{props.relatorio}</p>
    </div>
  )
}

export default paciente;