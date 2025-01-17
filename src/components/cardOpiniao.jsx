import '../components/cardOpiniao.css'
import Star from "../assets/star.svg"

function cardOpiniao(props){
  return(
    <div className="cardAvaliacao">
      <div className="headerCard">
          <h3>{props.nome}</h3>
          <p>{props.profissional}</p>
      </div>
      <div className="bodyCard">
          <p>{props.opiniao}</p>
      </div>
      <div className="footerCard">
          <img src={Star} alt="icone de estrela" />
          <img src={Star} alt="icone de estrela" />
          <img src={Star} alt="icone de estrela" />
          <img src={Star} alt="icone de estrela" />
          <img src={Star} alt="icone de estrela" />
      </div>
    </div>  

  )
}

export default cardOpiniao;