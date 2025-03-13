import "./paciente.css"

function paciente(props){
  return(
    <div className="meusPacientes">
      <p>props.nome</p>
      <p className="relatorio">props.relatorio</p>
    </div>
  )
}

export default paciente;