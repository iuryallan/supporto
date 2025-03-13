import React, { useState, useEffect } from 'react';
import Button from '../button/Button';
import './header.css';
import Search from '../search';
import { Link } from "react-router-dom";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
        <Link to="/Home">
          <div>
            <ion-icon name="home-outline"></ion-icon>
          </div>
        </Link>
        <Link to="/GrupoApoio">
          <div>
            <ion-icon name="people-outline"></ion-icon>
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
