import Header from '../../components/header/Header'
import ProxAgend from "../../components/proxAgendamento"
import ReagendarTerapia from "../../components/reagendarTerapia"
import './agendamento.css'
import ProfUltimoAtend from '../../components/profUltimoAtend'

function agendamento(){
  return(
    <div>
      <Header/>
      <div className="secao-agendar">
        <div className='container-agendamentos'>
          <h3>Próximos Agendamentos</h3>
          <ProxAgend/>
          <ProxAgend/>
        </div>
        <div className='container-agendamentos'>
        <h3>Ultimos Agendamentos</h3>
          <ReagendarTerapia/>
          <ReagendarTerapia/>
        </div>
      </div>
    </div>
  )
}

export default agendamento;