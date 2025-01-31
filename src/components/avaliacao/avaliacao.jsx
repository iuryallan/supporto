import CardOpiniao from "../card-opiniao/cardOpiniao";
import './avaliacao.css'

import './avaliacao.css'
function Avaliacao(){
    return (
        <section id = 's2' className="secaoAvaliacao">
            <div>
                <div className="tituloAvaliacao">
                    <h2>Qual a opinião dos nossos usuários?</h2>
                </div>
                <div className="conteinerCards">
                    <CardOpiniao nome='xxxx' profissional='xxxxx' opiniao = 'xxxxx'/>
                    <CardOpiniao nome='xxxx' profissional='xxxxx' opiniao = 'xxxxx'/>
                    <CardOpiniao nome='xxxxxx' profissional='xxxxx' opiniao = 'xxxx'/>
                </div>
            </div>
        </section>
    )
} 
export default Avaliacao;