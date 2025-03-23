import './cardOpiniao.css'

function cardOpiniao(props){
  return(
    <div className="cardAvaliacao">

      <div className="bodyCard">
          <p>{props.opiniao}</p>
      </div>
      <div className="footerCard">
      <ion-icon name="star"></ion-icon>
      <ion-icon name="star"></ion-icon>
      <ion-icon name="star"></ion-icon>
      <ion-icon name="star"></ion-icon>
      <ion-icon name="star"></ion-icon>
      </div>
    </div>  

  )
}

export default cardOpiniao;