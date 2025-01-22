import "./search.css"

function search (){
  return (
    <div className="barraPesquisa">
      <input type="text" name="search" id="search" />
      <label htmlFor="search">
        <ion-icon name="search"></ion-icon>
      </label>
    </div>
  )
}

export default search;