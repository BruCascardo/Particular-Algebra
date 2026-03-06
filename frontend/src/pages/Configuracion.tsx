import React from 'react';
import { useConfig } from '../context/ConfigContext';
import './Configuracion.css';

const Configuracion: React.FC = () => {
  const { isTrainingMode, toggleTrainingMode } = useConfig();

  return (
    <div className="config-container">
      <header className="config-header">
        <h1>Configuración</h1>
        <p>Ajustes personales, preferencias de estudio y opciones avanzadas.</p>
      </header>

      <div className="settings-group">
        <h2><span>⚙️</span> Modo de Estudio</h2>
        
        <div className="setting-item">
          <div className="setting-info">
            <span className="setting-title">Modo Entrenamiento</span>
            <span className="setting-desc">
              Al activarse, el sistema bloqueará el avance libre. Se requerirá aprobar un simulacro o 
              mini-examen teórico/práctico de 10 preguntas obligatorias para poder destrabar y avanzar a 
              la siguiente sección de cada tema. Ideal para preparar fechas de parciales rigurosamente.
            </span>
          </div>
          
          <label className="toggle-switch">
            <input 
              type="checkbox" 
              checked={isTrainingMode} 
              onChange={toggleTrainingMode} 
            />
            <span className="slider"></span>
          </label>
        </div>
      </div>
      
      {/* Futuros Settings Group pueden ir aquí */}
      <div className="settings-group" style={{ opacity: 0.5, pointerEvents: 'none' }}>
        <h2><span>🎨</span> Apariencia (Próximamente)</h2>
        <div className="setting-item">
          <div className="setting-info">
            <span className="setting-title">Tema Claro / Oscuro</span>
            <span className="setting-desc">Alterna entre los colores de fondo de la aplicación.</span>
          </div>
          <label className="toggle-switch">
            <input type="checkbox" disabled />
            <span className="slider"></span>
          </label>
        </div>
      </div>

    </div>
  );
};

export default Configuracion;
