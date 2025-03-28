import './profissional.css'
import { MapPin, User } from 'lucide-react';

function profissional({local,nome,especialidade}){

  return (
    <div className="container-profi">
      <div className="info-profissional">
        <User size={24} />
        <div>
          <p className="name-user">{nome}</p>
          <p className="especialidade-user">{especialidade}</p>
        </div>
      </div>

      <div className='localizacao'>
        <p>{local}</p>
        <MapPin size={24} />
      </div>
    </div>
  )
}
export default profissional;