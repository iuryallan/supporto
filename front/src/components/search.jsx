import "./search.css"
import Profissional from "../components/profissional"
function search (){
  return (
    <div className="barraPesquisa">
      <input type="text" name="search" id="search" />
      <label htmlFor="search">
        <ion-icon name="search"></ion-icon>
      </label>

      <div className="filtros">
        <div className="pos-filtro">
          <div>
            <select name="estado" id="estado">
              <option value="estado">CE</option>
              <option value="estado">PE</option>
              <option value="estado">FO</option>
              <option value="estado">QU</option>
              <option value="estado">IC</option>
            </select>
            <select name="doentesMentais" id="doentesMentais">
              <option value="estado">depressao</option>
              <option value="estado">ansiedade</option>
              <option value="estado">crise de panico </option>
              <option value="estado">iury sem muie</option>
              <option value="estado">ostioporose</option>
            </select>
            <select name="faixaEtaria" id="faixaEtaria">
              <option value="estado">Criança</option>
              <option value="estado">Adolecente</option>
              <option value="estado">Jovem-Adulto</option>
              <option value="estado">Adulto</option>
              <option value="estado">véi</option>
            </select>
          </div>
          <div>
            <Profissional/>
          </div>

        </div>
      </div>

    </div>
  )
}

export default search;