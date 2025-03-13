import './registro.css'
import ButtonLogin from '../../components/ButtonsLogin';

function RegistrarEvolucao () {
   return (
      <div className="login">
         <div className='container-login'>
            <form>
               <h2 className='titulo-login'>Evolução Clínica</h2>
               <div className='input-field'>
                  <label>
                     Relatos do atendimento: <br />
                     <input type="text" name="sintomas" required />
                  </label>
               </div>
               <div className='input-field'>
                  <label>
                     Ajustes no tratamento: <br />
                     <input type="text" name="historicoFamiliar" required />
                  </label>
               </div>
               <div className='input-field'>
                  <label>
                     Data: <br />
                     <input type="date" name="data" required />
                  </label>
               </div>
               <ButtonLogin type="submit" value="salvar"/>
            </form>
         </div>
      </div>
   )
}

export default RegistrarEvolucao;