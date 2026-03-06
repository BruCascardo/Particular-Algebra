import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

const Header: React.FC = () => {
  const location = useLocation();

  // No mostrar el header si estamos en la ruta principal (Home)
  if (location.pathname === '/' || location.pathname === '/home') {
    return null;
  }

  return (
    <header className="global-header">
      <div className="header-container">
        {/* Izquierda: Logo */}
        <Link to="/" className="header-logo">
          Particular AyGA
        </Link>

        {/* Medio: Menú de Navegación */}
        <nav className="header-nav">
          
          <div className="nav-item">
            <span className="nav-link" style={{ cursor: 'pointer' }}>
              Parciales ▾
            </span>
            <div className="dropdown-menu">
              <Link to="/parcial1" className="dropdown-item">Parcial 1</Link>
              <Link to="/parcial2" className="dropdown-item">Parcial 2</Link>
              <Link to="/parcial3" className="dropdown-item">Parcial 3</Link>
            </div>
          </div>

          <div className="nav-item">
            <Link to="/finales" className="nav-link">
              Finales
            </Link>
          </div>

          <div className="nav-item">
            <Link to="/herramientas" className="nav-link">
              Herramientas
            </Link>
          </div>

          <div className="nav-item">
            <Link to="/configuracion" className="nav-link">
              Configuración
            </Link>
          </div>

        </nav>

        {/* Derecha: Espacio vacío para balancear el flexbox centering (misma medida que el logo approx) */}
        <div style={{ width: '130px' }}></div>
      </div>
    </header>
  );
};

export default Header;
