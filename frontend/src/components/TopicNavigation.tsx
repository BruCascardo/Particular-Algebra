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

  // Parcial 2
  '/parcial2': 'Temario Parcial 2',
  '/parcial2/sistemas/definicion-solucion': '1.1 Definición y Conj. Solución',
  '/parcial2/sistemas/compatibles': '1.2 Sistemas Compatibles',
  '/parcial2/sistemas/incompatibles': '1.3 Sistemas Incompatibles',
  '/parcial2/sistemas/matriz-ampliada': '1.4 Matriz Ampliada',
  '/parcial2/sistemas/pivote': '1.5 Pivote y Variable Delantera',
  '/parcial2/sistemas/variables-libres-rango': '1.6 Variables Libres y Rango',
  
  '/parcial2/escalonada/matriz-escalonada': '2.1 Matriz Escalonada',
  '/parcial2/escalonada/teoremas-sel': '2.2 Teoremas SEL',
  '/parcial2/escalonada/sistemas-homogeneos': '2.3 Sistemas Homogéneos',
  '/parcial2/escalonada/interpretacion': '2.4 Interpretación Geomét. y Algeb.',

  '/parcial2/matrices/definicion': '3.1 Definición y Submatrices',
  '/parcial2/matrices/iguales-filas-columnas': '3.2 Matrices Iguales',
  '/parcial2/matrices/cuadradas-nulas': '3.3 Cuadradas y Nulas',
  '/parcial2/matrices/triangulares-diagonales': '3.4 Triangular y Diagonal',
  '/parcial2/matrices/escalar': '3.5 Matriz Escalar',

  '/parcial2/operaciones/adicion-escalar': '4.1 Adición y Escalar',
  '/parcial2/operaciones/transposicion': '4.2 Transposición',
  '/parcial2/operaciones/producto-matricial': '4.3 Producto Matricial',

  '/parcial2/propiedades/inversa-identidad': '5.1 Inversa e Identidad',
  '/parcial2/propiedades/solucion-unica': '5.2 Solución Única Ax=b',
  '/parcial2/propiedades/traza': '5.3 Traza',
  '/parcial2/propiedades/adicionales': '5.4 Prop. Adicionales',

  '/parcial2/determinantes/concepto': '6.1 Concepto y Adjunto',
  '/parcial2/determinantes/sarrus-chio': '6.2 Reglas Sarrus y Chío',
  '/parcial2/determinantes/preliminares': '6.3 Matriz Adjunta y Regular',
  '/parcial2/determinantes/inversa': '6.4 Teoremas de Inversa',
  '/parcial2/determinantes/relacion-traza-determinante': '6.5 Relac. Traza/Determinante',

  // Parcial 3
  '/parcial3': 'Temario Parcial 3',
  '/parcial3/espacios/definicion': '1.1 Def. y Propiedades',
  '/parcial3/espacios/subespacios': '1.2 Subespacios Vectoriales',
  '/parcial3/espacios/combinacion-lineal': '1.3 Combinación y Span',
  '/parcial3/espacios/dependencia-lineal': '1.4 Dependencia Lineal',
  '/parcial3/espacios/base-dimension': '1.5 Base y Dimensión',
  '/parcial3/espacios/cambio-base': '1.6 Cambio de Base',

  '/parcial3/producto-interior/definicion': '2.1 Definición y Axiomas (PI)',
  '/parcial3/producto-interior/norma-distancia-angulo': '2.2 Norma, Distancia y Ángulo',
  '/parcial3/producto-interior/ortogonalidad': '2.3 Ortogonalidad',
  '/parcial3/producto-interior/gram-schmidt': '2.4 Gram-Schmidt',
  '/parcial3/producto-interior/proyeccion': '2.5 Proyección Ortogonal',

  '/parcial3/transformaciones/definicion': '3.1 Definición de TL',
  '/parcial3/transformaciones/nucleo-imagen': '3.2 Núcleo e Imagen',
  '/parcial3/transformaciones/teorema-dimensiones': '3.3 Teorema Dimensiones',
  '/parcial3/transformaciones/matriz-asociada': '3.4 Matriz Asociada',
  '/parcial3/transformaciones/composicion-inversa': '3.5 Composición e Inversa',

  '/parcial3/autovalores/definicion': '4.1 Autovalores y Autovectores',
  '/parcial3/autovalores/polinomio-caracteristico': '4.2 Pol. Característico',
  '/parcial3/autovalores/multiplicidad': '4.3 Multiplicidad y Esp. Propios',
  '/parcial3/autovalores/diagonalizacion': '4.4 Diagonalización',
  '/parcial3/autovalores/diagonalizacion-ortogonal': '4.5 Diag. Ortogonal',

  '/parcial3/conicas/parabola-circunferencia': '5.1 Parábola/Circunferencia',
  '/parcial3/conicas/elipse-hiperbola': '5.2 Elipse/Hipérbola',
  '/parcial3/conicas/ecuacion-general': '5.3 Ecuación General',
  '/parcial3/conicas/rotacion-traslacion': '5.4 Rotación y Traslación',
  '/parcial3/conicas/cuadricas': '5.5 Superficies Cuádricas',
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
