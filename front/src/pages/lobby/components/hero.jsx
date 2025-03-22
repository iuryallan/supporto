import './hero.css'
import Button from '../../lobby/components/Button'
import ImgHero from '../../../assets/img-hero.svg'
import { Link } from "react-router-dom";


function hero(){
  return(
    <section id= 's1' className="section-hero">
      <div className="content-hero">
        <h2>
          Nem toda tempestade você precisa enfrentar sozinho(a). Procure ajuda.
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
        <div className='creditos'>
          <p>Designed by FreePik</p>
        </div>
      </div>
    </section>
  );
}

export default hero;