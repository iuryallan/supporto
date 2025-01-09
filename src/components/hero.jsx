import './hero.css'
import Button from './Button'

function hero(){
  return(
    <section>
      <div className="content-hero">
        <h2>
          Nem toda tempestade precisa ser enfrentada sozinha. Procure ajuda.
        </h2>
        <p>
          Somos uma plataforma de Apoio Psicológico Comunitário. Oferecemos profissionais qualificados e serviço acessível.
        </p>
        <Button label='Quero ajuda'/>
      </div>
      <div>
        <img src="../assets/img-hero.svg" alt="imagem pessoas abraçadas"/>
      </div>
    </section>
  );
}

export default hero;