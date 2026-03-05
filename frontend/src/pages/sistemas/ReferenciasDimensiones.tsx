import React from 'react';
import 'katex/dist/katex.min.css';
import { InlineMath, BlockMath } from 'react-katex';
import TopicHeader from '../../components/TopicHeader';
import TopicNavigation from '../../components/TopicNavigation';
import AiChatBot from '../../components/AiChatBot';
import '../vectores/VectorTopic.css'; // Reutilizamos los mismos estilos

const ReferenciasDimensiones: React.FC = () => {
  return (
    <div className="vector-topic-container">
      <TopicHeader 
        title="3.1. Sistemas de Referencia (1D, 2D y 3D)" 
        subtitle="Ubicando vectores analíticamente en el espacio dimensional"
      />

      <main className="topic-content">
        <div className="concept-box">
          <h3>La Importancia Analítica</h3>
          <p>
            Hasta ahora, analizamos vectores de forma geométrica clásica (como flechas en el aire). El <strong>álgebra lineal y analítica</strong> requiere referenciar estas magnitudes a un sistema de ejes coordenados fijos. Esta "traducción" nos permite utilizar números (componentes) para operar analíticamente en lugar de métodos gráficos.
          </p>
        </div>

        <h2>Sistemas de Coordenadas Cartesianas</h2>

        <h3>1. Unidimensional: La Recta Real (<InlineMath math="\mathbb{R}^1" />)</h3>
        <p>
          Es el sistema más simple. Consta de un eje (comúnmente llamado eje X), donde establecemos un punto de origen <InlineMath math="O (0)" /> y fijamos una unidad de medida.
        </p>
        <ul className="list-styled">
          <li>Un punto se identifica con una sola coordenada escalar: <InlineMath math="P(x)" />.</li>
          <li>Cualquier vector <InlineMath math="\vec{v}" /> sobre esta recta tendrá <strong>una sola componente</strong>.</li>
        </ul>
        <div className="formula-box">
          <BlockMath math="\vec{v} = (v_x)" />
        </div>

        <h3>2. Bidimensional: El Plano Cartesiano (<InlineMath math="\mathbb{R}^2" />)</h3>
        <p>
          Formado por la intersección perpendicular de dos rectas coordinadas: el eje de abscisas (<InlineMath math="X" />) y el eje de ordenadas (<InlineMath math="Y" />). Su punto de intersección es el Origen <InlineMath math="O(0, 0)" />.
        </p>
        <ul className="list-styled">
          <li>Todo punto en el plano está definido por un <em>par ordenado</em> de números reales: <InlineMath math="P(x, y)" />.</li>
          <li>Un vector <InlineMath math="\vec{v}" /> queda unívocamente definido por <strong>dos componentes ortogonales</strong>. Esas componentes corresponden a la proyección del vector sobre cada eje.</li>
        </ul>
        <div className="formula-box">
          <p style={{ margin: 0, fontSize: '1rem', color: '#e0e1dd' }}>Forma Cartesiana o Canónica en <InlineMath math="\mathbb{R}^2" />:</p>
          <BlockMath math="\vec{v} = (v_x, v_y) \quad \text{o bien} \quad \vec{v} = v_x \breve{i} + v_y \breve{j}" />
        </div>

        <div className="example-box">
          <h4>Vectores Base Natural</h4>
          <p>
            En <InlineMath math="\mathbb{R}^2" />, los versores fundamentales son <InlineMath math="\breve{i} = (1, 0)" /> y <InlineMath math="\breve{j} = (0, 1)" />. De esta forma, si tienes el vector proyectado de valor 3 en X y 4 en Y, estás haciendo la combinación lineal:
          </p>
          <BlockMath math="\vec{v} = 3(1,0) + 4(0,1) = (3, 4)" />
        </div>

        <h3>3. Tridimensional: El Espacio (<InlineMath math="\mathbb{R}^3" />)</h3>
        <p>
          Se añade un tercer vector perpendicular a los anteriores, formando un sistema dextrógiro (o regla de la mano derecha). El eje <InlineMath math="Z" /> se denomina "eje de cotas" o "aplicadas". Todo converge en <InlineMath math="O(0,0,0)" />.
        </p>
        <ul className="list-styled">
          <li>Todo punto queda determinado por una <em>terna ordenada</em>: <InlineMath math="P(x, y, z)" />.</li>
          <li>Todo vector requiere de <strong>tres componentes</strong> espaciales.</li>
          <li>Los planos coordenados principales dividen al espacio en 8 cuartos u <em>octantes</em>. Los planos son <InlineMath math="XY" />, <InlineMath math="XZ" /> e <InlineMath math="YZ" />.</li>
        </ul>
        <div className="formula-box" style={{ background: 'rgba(50, 60, 100, 0.4)' }}>
           <p style={{ margin: 0, fontSize: '1rem', color: '#e0e1dd' }}>Expresión Vectorial Analítica en <InlineMath math="\mathbb{R}^3" />:</p>
          <BlockMath math="\vec{v} = (v_x, v_y, v_z) \quad \text{o bien} \quad \vec{v} = v_x \breve{i} + v_y \breve{j} + v_z \breve{k}" />
        </div>

      </main>

      <TopicNavigation 
        prevPath="/parcial1/operaciones/producto-por-escalar"
        nextPath="/parcial1/sistemas/condicion-paralelismo" 
      />
    
      <AiChatBot 
        topicTitle="Sistemas de Referencias" 
        topicContext="Sistemas métricos. Puntos cartesianos vs vectores libres. Representación en 1D, 2D y 3D." 
      />
    </div>
  );
};

export default ReferenciasDimensiones;
