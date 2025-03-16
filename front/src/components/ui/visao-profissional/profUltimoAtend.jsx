import '../visao-paciente/reagendarTerapia.css'
import { Link } from "react-router-dom";

function ProfUltimoAtend(props){
   return(
     <div>
       <div className="card-ult-agend">
         <div className="secaocom">
           <h4>Sessão de Terapia</h4>
           <p>com {props.paciente}</p>
         </div>
         <Link to="/RegistrarEvolucao">
           <button className="newagend">Registrar Evolução</button>
         </Link>
         <div className="dataehora">
           <p>18 de janeiro, 2025</p>
           <p>{props.horario}</p>
         </div>
       </div>
     </div>
   )
}
 
export default ProfUltimoAtend;