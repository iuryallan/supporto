import './duvidas.css'

function duvidas(){
  return(
    <section className='secao-duvidas'>
      <div className='h2-duvidas'>
        <h2>Em caso de dúvidas...</h2>
      </div>

      <div className="perguntas-respostas">
        <details>
          <summary>
            <div>Quanto custa?</div>
            <div>v</div>
            </summary>
          <div className='texto-ajuda'>
            <p>Nossa plataforma é focada em atendimento de baixo custo, com o objetivo de incentivar o máximo de pessoas a cuidarem da saúde mental. Alguns profissionais inclusive oferecem sessões gratuitas antes de você decidir pagar pelo serviço. </p>
          </div>
        </details>

        <details>
          <summary>Como achar meu profissional ideal?</summary>
          <div className="texto-ajuda">
            <p>Nossa plataforma é focada em atendimento de baixo custo, com o objetivo de incentivar o máximo de pessoas a cuidarem da saúde mental. Alguns profissionais inclusive oferecem sessões gratuitas antes de você decidir pagar pelo serviço. </p>
          </div>
        </details>

        <details>
          <summary>Como funcionam os atendimentos?</summary>
          <div className="texto-ajuda">
            <p>Nossa plataforma é focada em atendimento de baixo custo, com o objetivo de incentivar o máximo de pessoas a cuidarem da saúde mental. Alguns profissionais inclusive oferecem sessões gratuitas antes de você decidir pagar pelo serviço. </p>
          </div>
        </details>

        <details>
          <summary>Como me tornar um colaborador?</summary>
          <div className="texto-ajuda">
            <p>Nossa plataforma é focada em atendimento de baixo custo, com o objetivo de incentivar o máximo de pessoas a cuidarem da saúde mental. Alguns profissionais inclusive oferecem sessões gratuitas antes de você decidir pagar pelo serviço. </p>
          </div>
        </details>
      </div>
    </section>
  )
}

export default duvidas;