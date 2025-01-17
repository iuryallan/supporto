import Ellipse from "../assets/ellipse.svg"
import CardOpiniao from "./cardOpiniao";


import './avaliacao.css'
function Avaliacao(){
    return (
        <section className="secaoAvaliacao">
            <div className="tituloAvaliacao">
                <h2>Qual a opinião dos nossos usuários?</h2>
            </div>
            <div className="conteinerCards">
                <CardOpiniao nome='diego' profissional='barbeiro' opiniao = 'topsisisismo'/>
                <CardOpiniao nome='iury' profissional='prefeito' opiniao = 'competentissisismo'/>
                <CardOpiniao nome='Fabs' profissional='gay' opiniao = 'gente boasisisimo'/>
            </div>
            
            <div className="navAvaliacao">
                <ion-icon name="ellipse" className='elipse-nav'></ion-icon>
                <ion-icon name="ellipse" className='elipse-nav'></ion-icon>
            </div>
        </section>
    )
} 
export default Avaliacao;