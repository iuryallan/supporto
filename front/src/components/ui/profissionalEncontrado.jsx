import "./profissionalEncontrado.css"

function resultadoPesquisa({profissional, local}){
  return (
    <div className="container-resultadoPesquisa">
      <p>{profissional}</p>
      <div>
        <p>{local}</p>
        <ion-icon name="location" className="location"></ion-icon>
      </div>
    </div>
  )
}

export default resultadoPesquisa;