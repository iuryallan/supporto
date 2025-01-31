import './hero.css'
import Button from '../button/Button'
import ImgHero from '../../assets/img-hero.svg'
import { Link } from "react-router-dom";


function hero(){
  return(
    <section className="section-hero">
      <div className="content-hero">
        <h2>
          Nem toda tempestade precisa ser enfrentada sozinha. Procure ajuda.
        </h2>
        <p>
          Somos uma plataforma de Apoio Psicológico Comunitário. Oferecemos profissionais qualificados e serviço acessível.
        </p>
        <Link to="/Login">
        <Button className="help-me" label='Quero ajuda'/>
        </Link>
      </div>
      <div>
        <img src={ImgHero} alt='duas pessoas abraçadas' className='img-hero'/>
      </div>
    </section>
  );
}

export default hero;