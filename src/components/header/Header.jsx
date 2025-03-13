import React, { useState, useEffect } from 'react';
import { Link, useLocation } from "react-router-dom";
import Search from '../search';
import './header.css';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMenuOpen]);

  return (
    <header>
      <div className="column1">
        <h1 className="title">Supporto</h1>
        <Search />
      </div>

      <div className="menu-hamburguer" onClick={toggleMenu}>
        <ion-icon name="menu-sharp"></ion-icon>
      </div>

      <div className={`column2 ${isMenuOpen ? 'open' : ''}`}>
        <Link to="/Home" className={location.pathname === "/Home" ? "ativo" : ""}>
          <div>
            <ion-icon name="home-outline"></ion-icon>
          </div>
        </Link>

        <Link to="/GrupoApoio" className={location.pathname === "/GrupoApoio" ? "ativo" : ""}>
          <div>
            <ion-icon name="people-outline"></ion-icon>
          </div>
        </Link>

        <Link to="/Agendamento" className={location.pathname === "/Agendamento" ? "ativo" : ""}>
          <div>
            <ion-icon name="calendar"></ion-icon>
          </div>
        </Link>

        <Link to="/User" className={location.pathname === "/User" ? "ativo" : ""}>
          <div>
            <ion-icon name="person-outline"></ion-icon>
          </div>
        </Link>
      </div>
    </header>
  );
}

export default Header;
