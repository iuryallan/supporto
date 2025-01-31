import Button from '../button/Button';
import './header.css';
import Search from '../search';
import { Link } from "react-router-dom";

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
        <Link to="/Home">
          <div>
            <ion-icon name="home-outline"></ion-icon>
          </div>
        </Link>
        <Link to="/Agendamento">
          <div>
            <ion-icon name="calendar"></ion-icon>
          </div>
        </Link>
        <Link to="/User">
          <div>
            <ion-icon name="person-outline"></ion-icon>
          </div>
        </Link>
      </div>
    </header>
  );
}

export default Header;
