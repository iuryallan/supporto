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
        <Menu size={24} />
      </div>

      <div className={`column2 ${isMenuOpen ? 'open' : ''}`}>
        <Link to="/Home" className={location.pathname === "/Home" ? "ativo" : ""}>
          <div>
            <Home size={24} />
          </div>
        </Link>

        <Link to="/GrupoApoio" className={location.pathname === "/GrupoApoio" ? "ativo" : ""}>
          <div>
            <Users size={24} />
          </div>
        </Link>

        <Link to="/Agendamento" className={location.pathname === "/Agendamento" ? "ativo" : ""}>
          <div>
            <Calendar size={24} />
          </div>
        </Link>

        <Link to="/pacientProfile" className={location.pathname === "/pacientProfile" ? "ativo" : ""}>
          <div>
            <User size={24} />
          </div>
        </Link>
      </div>
    </header>
  );
}

export default Header;
