import Button from '../button/Button';
import './header.css';
import Search from '../search';

function Header() {
  return (
    <header>
      <div className="column1">
        <h1 className="title">
          Supporto
        </h1>
        <Search />
      </div>

      <div className="column2">
        <div className='icon-ativado'>
          <ion-icon name="home-outline"></ion-icon>
        </div>
        <div>
          <ion-icon name="calendar"></ion-icon>
        </div>
        <div>
          <ion-icon name="person-outline"></ion-icon>
        </div>
      </div>
    </header>
  );
}

export default Header;
