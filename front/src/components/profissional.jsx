import './profissional.css'
function profissional(){
  const local = "Quixelo"
  const nome = "fabs"
  const especialidade = "ser gay"

  return (
    <div className="container-profi">
      <div className="info-profissional">
        <ion-icon name="person-circle-outline" className="user"></ion-icon>
        <div>
          <p className="name-user">{nome}</p>
          <p className="especialidade-user">{especialidade}</p>
        </div>
      </div>

      <div className='localizacao'>
        <p>{local}</p>
        <ion-icon name="location" className="location"></ion-icon>
      </div>
    </div>
  )
}
export default profissional;