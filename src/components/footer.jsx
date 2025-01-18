import React from 'react';
import './footer.css';
import ImgFace from '../assets/icon-face.svg';
import ImgInsta from '../assets/icon-insta.svg';
import ImgTwitter from '../assets/icon-x.svg';

function Footer (){
    return(
        <footer className='footer'>
            <div className='footer-section'>
                <h4>
                    Sobre o suportto
                </h4>
                <ul>
                    <li><a href=''>Quem somos nós</a></li>
                    <li><a href=''>Nossas avaliações</a></li>
                </ul>
            </div>
            <div className='footer-section'>
                <h4>
                    Quero me registrar
                </h4>
                <ul>
                    <li><a href=''>Sou profissional</a></li>
                    <li><a href=''>Sou paciente</a></li>
                </ul>
            </div>
            <div className='footer-section'>
                <h4>
                    Ajuda
                </h4>
                <ul>
                    <li><a href=''>Principais dúvidas</a></li>
                    <li><a href=''>Fórum</a></li>
                </ul>
                <div className='social-icons'>
                    <a href=''><img src={ImgInsta} alt="Instagram" className='icon'/></a>
                    <a href=''><img src={ImgFace} alt="Facebook" className='icon'/></a>
                    <a href=''><img src= {ImgTwitter} alt="Twitter" className='icon'/></a>
                </div>
            </div>
            <div className="footer-contact">
                <h4>
                    Contato
                </h4>
                <p>
                    Atendimento segunda à sexta das 09h às 18h (exceto feriados).
                </p>
                <p><strong>E-mail:</strong> contato@supporto.com</p>
                <p><strong>Telefones:</strong></p>
                <p>Capitais e regiões metropolitanas: (85) 3392-1444</p>
                <p>Outras regiões: 0800 85 338 10</p>
            </div>
        </footer>
    );
}

export default Footer;