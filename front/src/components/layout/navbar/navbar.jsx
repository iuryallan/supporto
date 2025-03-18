import { Link, useNavigate } from "react-router-dom";
import ImgFace from '../../assets/icon-face.svg';
import ImgInsta from '../../assets/icon-insta.svg';
import ImgTwitter from '../../assets/icon-x.svg';
import './navbar.css';

const Navbar = () => {
  const navigate = useNavigate();

  const handleAnchorClick = (section) => {
    navigate("/"); 
    setTimeout(() => {
      const element = document.getElementById(section);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 100);
  };

  return (
    <nav className="navbar">
        <div className='footer-section'>
            <h4>
                    Sobre o suportto
            </h4>
            <ul>
                <li><a href='#s1' onClick={() => handleAnchorClick("s1")}>Quem somos nós</a></li>
                <li><a href='#s2' onClick={() => handleAnchorClick("s2")}>Nossas avaliações</a></li>
            </ul>
        </div>
        <div className='footer-section'>
            <h4>
                Quero me registrar
            </h4>
            <ul>
                <li><Link to='/LoginProfissional'>Sou profissional</Link></li>
                <li><Link to='/LoginPaciente'>Sou paciente</Link></li>
            </ul>
        </div>
        <div className='footer-section'>
            <h4>
                Ajuda
            </h4>
            <ul>
                <li><a href='#s3' onClick={() => handleAnchorClick("s3")}>Principais dúvidas</a></li>
            </ul>
            <div className='social-icons'>
                <a href='https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExMDdyMWRuOTFzZzBoazU1M2E1MTZubjdtMm1wMXcxdzgyODdkNXNtaiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/KsYPcbR5cYKcJKwdcH/giphy.gif'><img src={ImgInsta} alt="Instagram" className='icon'/></a>
                <a href='https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExMDdyMWRuOTFzZzBoazU1M2E1MTZubjdtMm1wMXcxdzgyODdkNXNtaiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/KsYPcbR5cYKcJKwdcH/giphy.gif'><img src={ImgFace} alt="Facebook" className='icon'/></a>
                <a href='https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExMDdyMWRuOTFzZzBoazU1M2E1MTZubjdtMm1wMXcxdzgyODdkNXNtaiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/KsYPcbR5cYKcJKwdcH/giphy.gif'><img src= {ImgTwitter} alt="Twitter" className='icon'/></a>
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
    </nav>
  );
};

export default Navbar;