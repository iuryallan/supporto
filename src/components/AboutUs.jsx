import './aboutus.css';
import ImgAboutUs from '../assets/img-aboutus.svg';

function aboutUs() {
    return (
        <section className='about-us'>
            <div className='quem-somos'>
                <h2>Quem Somos?</h2>
            </div>
            <div className='content-about'>
                <div>
                    <img src={ImgAboutUs} alt="imagem de comunidade" className='img-aboutus'/>
                </div>
                <div className='text-about'>
                    <h3>Nossa missão é disponibilizar ajuda psicológica de forma prática, segura e de baixo custo. </h3>
                    <p>Acreditamos que a saúde mental está ligada diretamente à qualidade de vida, portanto, não deve ser negligenciada.</p>
                </div>
            </div>
        </section>
    )
}

export default aboutUs;