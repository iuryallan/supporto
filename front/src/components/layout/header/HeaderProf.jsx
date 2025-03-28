import React, { useState, useEffect } from 'react';
import { Link, useLocation } from "react-router-dom";
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
      </div>

      <div className="menu-hamburguer" onClick={toggleMenu}>
        <Menu size={24} />
      </div>

      <div className={`column2 ${isMenuOpen ? 'open' : ''}`}>
        <Link to="/HomeProfissional" className={location.pathname === "/HomeProfissional" ? "ativo" : ""}>
          <div>
            <Home size={24} />
          </div>
        </Link>

        <Link to="/AgendamentoProfissional" className={location.pathname === "/AgendamentoProfissional" ? "ativo" : ""}>
          <div>
            <Calendar size={24} />
          </div>
        </Link>

        <Link to="/User" className={location.pathname === "/User" ? "ativo" : ""}>
          <div>
            <User size={24} />
          </div>
        </Link>
      </div>
    </header>
  );
}

export default Header;
