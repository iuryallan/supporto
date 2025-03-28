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
      <i class='bx bx-menu' ></i>
      </div>

      <div className={`column2 ${isMenuOpen ? 'open' : ''}`}>
        <Link to="/HomeProfissional" className={location.pathname === "/HomeProfissional" ? "ativo" : ""}>
          <div>
          <i class='bx bxs-home'></i>
          </div>
        </Link>

        <Link to="/AgendamentoProfissional" className={location.pathname === "/AgendamentoProfissional" ? "ativo" : ""}>
          <div>
          <i class='bx bx-calendar-star' ></i>
          </div>
        </Link>

        <Link to="/User" className={location.pathname === "/User" ? "ativo" : ""}>
          <div>
          <i class='bx bx-user' ></i>
          </div>
        </Link>
      </div>
    </header>
  );
}

export default Header;
