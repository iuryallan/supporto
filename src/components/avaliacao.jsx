import Star from "../assets/star.svg"
import Ellipse from "../assets/ellipse.svg"
import './avaliacao.css'
function Avaliacao(){
    return (
        <section className="secaoAvaliacao">
            <div className="tituloAvaliacao">
                <h2>Qual a opinião dos nossos usuários?</h2>
            </div>
            <div className="conteinerCards">
                <div className="cardAvaliacao">
                    <div className="headerCard">
                        <h3>Fulano</h3>
                        <p>Paciente de Fulana</p>
                    </div>
                    <div className="bodyCard">
                        <p>“Profissional incrível! Sou muito grato por toda ajuda.”</p>
                    </div>
                    <div className="footerCard">
                        <img src={Star} alt="icone de estrela" />
                        <img src={Star} alt="icone de estrela" />
                        <img src={Star} alt="icone de estrela" />
                        <img src={Star} alt="icone de estrela" />
                        <img src={Star} alt="icone de estrela" />
                    </div>
                </div>
                
                <div className="cardAvaliacao">
                    <div className="headerCard">
                        <h3>Fulano</h3>
                        <p>Paciente de Fulana</p>
                    </div>
                    <div className="bodyCard">
                        <p>“Profissional incrível! Sou muito grato por toda ajuda.”</p>
                    </div>
                    <div className="footerCard">
                        <img src={Star} alt="icone de estrela" />
                        <img src={Star} alt="icone de estrela" />
                        <img src={Star} alt="icone de estrela" />
                        <img src={Star} alt="icone de estrela" />
                        <img src={Star} alt="icone de estrela" />
                    </div>
                </div>
                <div className="cardAvaliacao">
                    <div className="headerCard">
                        <h3>Fulano</h3>
                        <p>Paciente de Fulana</p>
                    </div>
                    <div className="bodyCard">
                        <p>“Profissional incrível! Sou muito grato por toda ajuda.”</p>
                    </div>
                    <div className="footerCard">
                        <img src={Star} alt="icone de estrela" />
                        <img src={Star} alt="icone de estrela" />
                        <img src={Star} alt="icone de estrela" />
                        <img src={Star} alt="icone de estrela" />
                        <img src={Star} alt="icone de estrela" />
                    </div>
                </div>
            </div>
            
            <div className="navAvaliacao">
                
                <img src={Ellipse} alt="icone ellipse" />
                <img src={Ellipse} alt="icone ellipse" />
            </div>
        </section>
    )
} 
export default Avaliacao;