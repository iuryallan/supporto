import Button from './Button';
import './header.css'
// <Button label='Juntar-se'/>
function header(){
  return(
    <header>
      <h1 className="title">
        Supporto
      </h1>
      <div className="buttons-login">
        <Button label='Juntar-se'/>
        <Button label='Login'/>
      </div>
    </header>
  );
}

export default header;