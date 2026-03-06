import React from 'react';
import './Tools.css';

interface ToolItem {
  name: string;
  description: string;
  url: string;
  badge: string;
}

const calculadoras: ToolItem[] = [
  {
    name: "Symbolab",
    description: "Excelente calculadora de matrices paso a paso. Útil para diagonalización, determinantes, inversas y Gauss-Jordan.",
    url: "https://www.symbolab.com/solver/matrix-calculator",
    badge: "Paso a paso"
  },
  {
    name: "Mathos AI",
    description: "Una potente IA conversacional de matemáticas. Excelente asistente interactivo capaz de resolver paso a paso y explicar teoría y práctica.",
    url: "https://www.mathos.ai/es",
    badge: "IA de Matemáticas"
  },
  {
    name: "MatrixCalc",
    description: "Súper rápida para operaciones matriciales directas y resolución de SEL (Sistemas de Ecuaciones Lineales).",
    url: "https://matrixcalc.org/es/",
    badge: "Rápida"
  }
];

const graficadoras: ToolItem[] = [
  {
    name: "GeoGebra 3D",
    description: "El estándar de oro para geometría analítica. Ideal para graficar planos, rectas, cuádricas y vectores en el espacio 3D.",
    url: "https://www.geogebra.org/3d",
    badge: "Esencial"
  },
  {
    name: "Desmos",
    description: "Increíblemente intuitiva para graficar Cónicas 2D (Parábolas, Elipses, Hipérbolas) manipulando deslizadores.",
    url: "https://www.desmos.com/calculator",
    badge: "Cónicas 2D"
  },
  {
    name: "Math3D",
    description: "Visualizador tridimensional liviano para renderizar superficies paramétricas, vectores y trazas algebraicas.",
    url: "https://www.math3d.org/",
    badge: "Avanzado 3D"
  }
];

const ToolCard: React.FC<{ tool: ToolItem }> = ({ tool }) => (
  <a href={tool.url} target="_blank" rel="noopener noreferrer" className="tool-card">
    <div className="tool-header">
      <span className="tool-name">{tool.name}</span>
      <span className="tool-badge">{tool.badge}</span>
    </div>
    <p className="tool-description">{tool.description}</p>
    <div className="tool-link-icon">
      Abrir sitio web <span>↗</span>
    </div>
  </a>
);

const Tools: React.FC = () => {
  return (
    <div className="tools-container">
      <header className="tools-header">
        <h1>Herramientas Útiles</h1>
        <p>
          Una cuidadosa selección de calculadoras y graficadoras interactivas para complementar el cruce entre software y el Álgebra / Geometría Analítica.
        </p>
      </header>

      {/* Banner de Google Drive */}
      <div className="drive-banner">
        <div className="drive-banner-content">
          <h2>
            <span>📚</span> Material Oficial de la Cátedra
          </h2>
          <p>
            Accede a toda la bibliografía, apuntes teóricos completos, diapositivas y guías de trabajos prácticos de los 3 parciales en nuestra carpeta compartida.
          </p>
        </div>
        <a 
          href="https://drive.google.com/drive/u/0/folders/1PntDyH7coDsL_rEwg_9IllNMbG8SgVxA" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="drive-banner-link"
        >
          Abrir Google Drive ↗
        </a>
      </div>

      <div className="tools-grid">
        
        {/* Calculadoras de Matrices */}
        <section className="tools-category">
          <h2 className="category-title">
            <span className="icon">🧮</span> Calculadoras Matriciales
          </h2>
          <div className="tools-list">
            {calculadoras.map((tool, idx) => <ToolCard key={`calc-${idx}`} tool={tool} />)}
          </div>
        </section>

        {/* Graficadoras 2D y 3D */}
        <section className="tools-category">
          <h2 className="category-title">
            <span className="icon">📈</span> Graficadores Geométricos
          </h2>
          <div className="tools-list">
            {graficadoras.map((tool, idx) => <ToolCard key={`graf-${idx}`} tool={tool} />)}
          </div>
        </section>

      </div>
    </div>
  );
};

export default Tools;
