import React from 'react';
import 'katex/dist/katex.min.css';
import { InlineMath, BlockMath } from 'react-katex';
import TopicHeader from '../../components/TopicHeader';
import TopicNavigation from '../../components/TopicNavigation';
import AiChatBot from '../../components/AiChatBot';
import './VectorTopic.css';

const SumaVectores: React.FC = () => {

  return (
    <div className="vector-topic-container">
      <TopicHeader 
        title="Suma y Resultante Poligonal" 
        subtitle="Composición e interpretación geométrica de la adición de vectores"
      />

      <main className="topic-content">
        <div className="concept-box">
          <h3>Definición Analítica (Componentes)</h3>
          <p>
            Sean dos vectores en el plano <InlineMath math="\vec{u} = (u_x, u_y)" /> y <InlineMath math="\vec{v} = (v_x, v_y)" />. La adición o suma de estos vectores se define sumando algebraicamente sus componentes homólogas:
          </p>
          <div className="formula-box">
            <BlockMath math="\vec{u} + \vec{v} = (u_x + v_x, \; u_y + v_y)" />
          </div>
          <p>La misma regla aplica exactamente en <InlineMath math="\mathbb{R}^3" /> sumando las respectivas componentes <InlineMath math="z" />.</p>
        </div>

        <h2>Interpretación Geométrica</h2>
        <p>Existen dos métodos gráficos principales para resolver de forma geométrica la suma de dos o más vectores:</p>

        <h3>1. Método del Paralelogramo (Para 2 vectores concurrentes)</h3>
        <p>
          Este método es ideal cuando ambos vectores se dibujan saliendo del <strong>mismo origen</strong> (son concurrentes).
        </p>
        <ul className="list-styled">
          <li>Se traza una recta paralela a <InlineMath math="\vec{u}" /> por el extremo de <InlineMath math="\vec{v}" />.</li>
          <li>Se traza una recta paralela a <InlineMath math="\vec{v}" /> por el extremo de <InlineMath math="\vec{u}" />.</li>
          <li>Ambas rectas se cruzan en un punto. Este punto es el <strong>extremo del vector suma</strong> (resultante). El origen de la resultante es el mismo punto desde donde salieron ambos vectores.</li>
        </ul>
        <div className="formula-box" style={{ fontSize: '1rem', color: '#e0e1dd' }}>
          La fuerza diagonal en el centro de un paralelogramo representa a: <br/> <BlockMath math="\vec{R} = \vec{u} + \vec{v}" />
        </div>

        <h3>2. Método Poligonal o Triángulo (Para varios vectores)</h3>
        <p>
          Este método trata a los vectores como "pasos" en un viaje y es muy útil para sumar más de dos vectores consecutivamente.
        </p>
        <ul className="list-styled">
          <li>A partir de un punto cualquiera, dibujas el vector <InlineMath math="\vec{u}" />.</li>
          <li>En el <strong>extremo</strong> de <InlineMath math="\vec{u}" />, colocas el <strong>origen</strong> de <InlineMath math="\vec{v}" />.</li>
          <li>Al final del viaje, la <strong>Resultante</strong> es el vector dibujado desde el <em>origen del primer vector</em> hasta el <em>extremo del último vector</em>.</li>
        </ul>

        <div className="example-box">
          <h4>Ejemplo Analítico</h4>
          <p>
            Si <InlineMath math="\vec{u} = (2, 5)" /> y <InlineMath math="\vec{v} = (-1, 3)" />:
          </p>
          <BlockMath math="\vec{u} + \vec{v} = (2 + (-1), 5 + 3) = (1, 8)" />
          <p>
            Geométricamente, avanzarías 2 unidades a la derecha y 5 arriba. A partir de allí, avanzarías 1 a la izquierda y 3 más hacia arriba. El destino final en el mapa cartesiano, saliendo desde <InlineMath math="(0,0)" />, es exactamente <InlineMath math="(1, 8)" />.
          </p>
        </div>
      </main>

      <TopicNavigation 
        prevPath="/parcial1/vectores/vector-opuesto"
        nextPath="/parcial1/operaciones/propiedades-adicion" 
      />
    
      <AiChatBot 
        topicTitle="Suma de Vectores" 
        topicContext="Suma de vectores analíticamente sumando componentes respectivas (R2 y R3) y gráficamente por método del paralelogramo o polígono." 
      />
    </div>
  );
};

export default SumaVectores;
