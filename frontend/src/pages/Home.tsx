import React from 'react';
import { useNavigate } from 'react-router-dom';
import SearchBar from '../components/SearchBar';
import '../App.css';

const Home: React.FC = () => {
  const navigate = useNavigate();

  const sections = [
    {
      title: "Parcial 1",
      description: "Vectores, rectas y planos en R2 y R3. Geometría inicial.",
      icon: "📐",
      path: "/parcial1"
    },
    {
      title: "Parcial 2",
      description: "Matrices, determinantes y resolución de sistemas de ecuaciones.",
      icon: "🔢",
      path: "/parcial2"
    },
    {
      title: "Parcial 3",
      description: "Espacios vectoriales, subespacios y transformaciones lineales.",
      icon: "〽️",
      path: "/parcial3"
    },
    {
      title: "Finales",
      description: "Exámenes de años anteriores resueltos y explicados paso a paso.",
      icon: "📝",
      path: "/finales"
    },
    {
      title: "Herramientas",
      description: "Calculadoras de matrices, graficadores 3D y simuladores.",
      icon: "🔧",
      path: "/herramientas"
    },
    {
      title: "Configuración",
      description: "Ajustes de tu cuenta, preferencias y notificaciones.",
      icon: "⚙️",
      path: "/configuracion"
    }
  ];

  return (
    <div className="app-container">
      <header className="hero">
        <h1>Álgebra y Geometría Analítica</h1>
        <p>
          Conceptos claros, explicaciones paso a paso y herramientas para aprobar.
          Selecciona una sección para comenzar a estudiar.
        </p>
      </header>

      <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
        <SearchBar />
      </div>

      <main className="grid-container">
        {sections.map((section, index) => (
          <div key={index} className="card" onClick={() => navigate(section.path)}>
            <div>
              <span className="card-icon">{section.icon}</span>
              <h2>{section.title}</h2>
              <p>{section.description}</p>
            </div>
            <div className="card-decoration"></div>
          </div>
        ))}
      </main>
    </div>
  );
};

export default Home;
