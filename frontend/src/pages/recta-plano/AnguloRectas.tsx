import React from 'react';
import 'katex/dist/katex.min.css';
import { InlineMath, BlockMath } from 'react-katex';
import TopicHeader from '../../components/TopicHeader';
import TopicNavigation from '../../components/TopicNavigation';
import AiChatBot from '../../components/AiChatBot';
import '../vectores/VectorTopic.css';

const AnguloRectas: React.FC = () => {

  return (
    <div className="vector-topic-container">
      <TopicHeader 
        title="5.2. Ángulo entre dos rectas" 
        subtitle="Analizando la colisión direccional de dos caminos rectos cruzados"
      />

      <main className="topic-content">
        <div className="concept-box">
          <h3>La Conexión Fundamental con Vectores</h3>
          <p>
            Al tener dos rectas enfrentadas colisionando y cruzándose en el vacío del espacio <InlineMath math="\mathbb{R}^2" />, analíticamente el ángulo <InlineMath math="\alpha" /> que las separa al cortarse en tijera se define exactamente como el <strong>mismo ángulo directo que ostentan sus respectivos vectores directores</strong> o, análogamente, como el que forman solidariamente sus <strong>respectivos vectores normales ortogonales</strong>.
          </p>
        </div>

        <h2>La Fórmula Universal vía Coseno</h2>
        <p>
          Acogiéndonos por tanto al Teorema Geométrico del Producto Escalar, si consideramos <InlineMath math="r_1" /> (con su vector director asociado <InlineMath math="\vec{u_1}" />) y <InlineMath math="r_2" /> (con su director <InlineMath math="\vec{u_2}" />), el ángulo agudo de su encontronazo se determina usando sus directores:
        </p>

        <div className="formula-box">
          <BlockMath math="\cos(\alpha) = \frac{|\vec{u_1} \cdot \vec{u_2}|}{||\vec{u_1}|| \cdot ||\vec{u_2}||}" />
        </div>

        <p>
          <em>(El valor absoluto en el numerador asegura que calculemos consistentemente el ángulo menor y más cerrado (el agudo) situado entre <InlineMath math="0^\circ" /> y <InlineMath math="90^\circ" />).</em>
        </p>
        <p>
          Para despejar de manera limpia, evidentemente se aplica la función arcocoseno en calculadora:
        </p>
        <BlockMath math="\alpha = \arccos \left( \frac{|\vec{u_1} \cdot \vec{u_2}|}{||\vec{u_1}|| \cdot ||\vec{u_2}||} \right)" />

        <div className="example-box">
          <h4>Vía alternativa: Con las Pendientes</h4>
          <p>
            Cuando en plena exigencia de un problema (o si la geometría lo exige) ambas rectas caen en tus manos estando representadas de forma explícita <InlineMath math="(y = mx + h)" />, conociendo en consecuencia únicamente sus puras pendientes <InlineMath math="m_1" /> y <InlineMath math="m_2" />, podes evitar triangular sus vectores mediante la variante tangente trigonométrica:
          </p>
          <BlockMath math="\tan(\alpha) = \left| \frac{m_2 - m_1}{1 + m_1 \cdot m_2} \right|" />
        </div>

      </main>

      <TopicNavigation 
        prevPath="/parcial1/recta-plano/ecuaciones-recta"
        nextPath="/parcial1/recta-plano/perpendicularidad-paralelismo" 
      />
    
      <AiChatBot 
        topicTitle="Ángulo entre Rectas" 
        topicContext="Cálculo del ángulo interior entre dos rectas R1 y R2 usando el producto escalar de sus vectores directores o sus normales." 
      />
    </div>
  );
};

export default AnguloRectas;
