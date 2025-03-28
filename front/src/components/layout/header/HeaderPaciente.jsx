import React, { useState, useEffect } from 'react';
import { Link, useLocation } from "react-router-dom";
import Search from '../../features/search';
import './header.css';
import { Menu, Home, Users, Calendar, User } from 'lucide-react';

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
      <i class='bx bx-menu' ></i>
      </div>

      <div className={`column2 ${isMenuOpen ? 'open' : ''}`}>
        <Link to="/Home" className={location.pathname === "/Home" ? "ativo" : ""}>
          <div>
          <i class='bx bxs-home'></i>
          </div>
        </Link>

        <Link to="/GrupoApoio" className={location.pathname === "/GrupoApoio" ? "ativo" : ""}>
          <div>
            <i class='bx bxs-group'></i>
          </div>
        </Link>

        <Link to="/Agendamento" className={location.pathname === "/Agendamento" ? "ativo" : ""}>
          <div>
          <i class='bx bx-calendar-star' ></i>
        </div>
        </Link>

        <Link to="/pacientProfile" className={location.pathname === "/pacientProfile" ? "ativo" : ""}>
          <div>
          <i class='bx bx-user' ></i>
          </div>
        </Link>
      </div>
    </header>
  );
}

export default Header;
