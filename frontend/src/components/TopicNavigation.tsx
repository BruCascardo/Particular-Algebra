import React from 'react';
import { useNavigate } from 'react-router-dom';

interface TopicNavigationProps {
  prevPath?: string;
  prevLabel?: string;
  nextPath?: string;
  nextLabel?: string;
}

const topicLabels: Record<string, string> = {
  '/parcial1': 'Temario',
  '/parcial1/vectores/segmento-orientado': '1.1. Segmento Orientado',
  '/parcial1/vectores/modulo-direccion-sentido': '1.2. Módulo, Dirección y Sentido',
  '/parcial1/vectores/igualdad-vectores': '1.3. Igualdad de Vectores',
  '/parcial1/vectores/versor': '1.4. Versor y módulo 1',
  '/parcial1/vectores/vector-opuesto': '1.5. Vector Opuesto',
  '/parcial1/operaciones/suma-vectores': '2.1. Suma y Resultante Poligonal',
  '/parcial1/operaciones/propiedades-adicion': '2.2. Propiedades de la Adición',
  '/parcial1/operaciones/resta-vectores': '2.3. Resta de Vectores',
  '/parcial1/operaciones/modulo-dos-puntos': '2.4. Módulo determinado por dos puntos',
  '/parcial1/operaciones/producto-por-escalar': '2.5. Producto por un Escalar',
  '/parcial1/sistemas/referencias-dimensiones': '3.1. Sistemas de referencia',
  '/parcial1/sistemas/condicion-paralelismo': '3.2. Condición de paralelismo',
  '/parcial1/sistemas/proyeccion-ortogonal': '3.3. Proyección ortogonal',
  '/parcial1/productos/producto-escalar': '4.1. Producto Escalar',
  '/parcial1/productos/cosenos-directores': '4.2. Cosenos Directores',
  '/parcial1/productos/producto-vectorial': '4.3. Producto Vectorial',
  '/parcial1/productos/producto-mixto': '4.4. Producto Mixto',
  '/parcial1/recta-plano/ecuaciones-recta': '5.1. Ecuaciones de la Recta',
  '/parcial1/recta-plano/angulo-rectas': '5.2. Ángulo entre rectas',
  '/parcial1/recta-plano/perpendicularidad-paralelismo': '5.3. Perpendicularidad y Paralelismo',
  '/parcial1/recta-plano/distancia-punto-recta': '5.4. Distancia de punto a recta',
  '/parcial1/espacio-planos/formas-espaciales': '6.1. Formas de la recta en R3',
  '/parcial1/espacio-planos/planos-proyectantes': '6.2. Planos proyectantes',
  '/parcial1/espacio-planos/coplanaridad-rectas': '6.3. Coplanaridad de rectas',
  '/parcial1/espacio-planos/plano-recta-punto': '6.4. Plano, recta y punto',
};

const TopicNavigation: React.FC<TopicNavigationProps> = ({
  prevPath,
  prevLabel,
  nextPath,
  nextLabel
}) => {
  const navigate = useNavigate();

  const getPrevLabel = () => {
    if (prevLabel) return prevLabel;
    if (prevPath && topicLabels[prevPath]) return `Anterior: ${topicLabels[prevPath]}`;
    return "Anterior";
  };

  const getNextLabel = () => {
    if (nextLabel) return nextLabel;
    if (nextPath && topicLabels[nextPath]) return `Siguiente: ${topicLabels[nextPath]}`;
    return "Siguiente";
  };

  return (
    <nav className="nav-buttons">
      {prevPath ? (
        <button className="nav-btn" onClick={() => navigate(prevPath)}>
          <span className="arrow">←</span> {getPrevLabel()}
        </button>
      ) : (
        <div style={{ flex: 1 }} />
      )}
      
      {nextPath && (
        <button className="nav-btn next" onClick={() => navigate(nextPath)}>
          {getNextLabel()} <span className="arrow">→</span>
        </button>
      )}
    </nav>
  );
};

export default TopicNavigation;
