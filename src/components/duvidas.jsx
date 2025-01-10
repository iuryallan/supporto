import './duvidas.css';
import DownArrow from '../assets/down-arrow.svg';
import UpArrow from '../assets/up-arrow.svg';

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
            <div>
              <img src={DownArrow} alt="seta para baixo" />
            </div>
          </summary>
          <div className='texto-ajuda'>
            <p>Nossa plataforma é focada em atendimento de baixo custo, com o objetivo de incentivar o máximo de pessoas a cuidarem da saúde mental. Alguns profissionais inclusive oferecem sessões gratuitas antes de você decidir pagar pelo serviço.</p>
          </div>
        </details>

        <details>
          <summary>
            <div>Como achar meu profissional ideal?</div>
            <div>
              <img src={DownArrow} alt="seta para baixo" />
            </div>
          </summary>
          <div className="texto-ajuda">
            <p>Você pode pesquisar por perfis de profissionais que estão na nossa plataforma, ver sobre suas especialidades e abordagens, e decidir qual é o melhor match pra você. Caso você e seu profissional atual não se conectem da forma necessária, você é livre para encontrar que se adeque melhor às suas expectativas.</p>
          </div>
        </details>

        <details>
          <summary>
            <div>Como funcionam os atendimentos?</div>
            <div>
              <img src={DownArrow} alt="seta para baixo" />
            </div>
          </summary>
          <div className="texto-ajuda">
            <p>Nós somos uma plataforma que conecta usuários e profissionais de diversos locais, por isso, trabalhamos com atendimentos totalmente à distância. Basta marcar os dias e horários de atendimento que mais se adequeam à sua rotina - de acordo com a disponibilidade do seu profissional - e começar de fato suas sessões.</p>
          </div>
        </details>

        <details>
          <summary>
            <div>Como posso me tornar um colaborador?</div>
            <div>
              <img src={DownArrow} alt="seta para baixo" />
            </div>
          </summary>
          <div className="texto-ajuda">
            <p>Cada um de nossos profissionais possui um perfil exclusivo. Nesses perfis, os profissionais apresentam suas informações educacionais, especialidades, público-alvo, além de demais informações que julguem válidas para receber os pacientes que mais se adequam ao seus trabalhos. Basta criar seu perfil e vir fazer parte do nosso time!</p>
          </div>
        </details>
      </div>
    </section>
  )
}

export default duvidas;