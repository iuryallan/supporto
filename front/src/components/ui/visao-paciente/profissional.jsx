import './profissional.css'
import { MapPin, User } from 'lucide-react';

function profissional({cidade,nome,especialidade,estado}){

  return (
    <div className="professional-data-container">
      <div className="view-professional">
        <div className='user-icon'>
          <i class='bx bx-user' ></i>
        </div>
        <div className='nameAndSpecialty'>
          <p className="user-name">{nome}</p>
          <p className="user-specialty">{especialidade}</p>
        </div>
      </div>

      <div className='professional-location'>
        <p>{cidade} - {estado}</p>
        <i class='bx bxs-map' ></i>
      </div>
    </div>
  )
}
export default profissional;