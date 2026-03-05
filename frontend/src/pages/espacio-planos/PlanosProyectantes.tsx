import React from 'react';
import 'katex/dist/katex.min.css';
import { InlineMath, BlockMath } from 'react-katex';
import TopicHeader from '../../components/TopicHeader';
import TopicNavigation from '../../components/TopicNavigation';
import AiChatBot from '../../components/AiChatBot';
import '../vectores/VectorTopic.css';

const PlanosProyectantes: React.FC = () => {

  return (
    <div className="vector-topic-container">
      <TopicHeader 
        title="6.2. Planos Proyectantes" 
        subtitle="Definiendo a la recta tridimensional como la cicatriz entre dos abismos planos"
      />

      <main className="topic-content">
        <div className="concept-box">
          <h3>La Recta General del Espacio (Intersección de Planos)</h3>
          <p>
            En un salto mental alucinante, en el espacio de tres dimensiones, la <strong>Ecuación General implícita (como <InlineMath math="Ax + By + Cz + D = 0" />) ya no representa a una estricta recta infinita</strong> como ocurría en el plano 2D, sino que pasa a simbolizar y representar formalmente a todo un <strong>Plano entero inmenso flotando en el infinito</strong>.
          </p>
          <p>
            Por lo tanto, la "forma general" de una recta en el espacio requiere obligatoriamente de plantear un <strong>sistema de dos ecuaciones implícitas enfrentadas</strong>. Se visualiza a la recta como la delgada marca visible de corte o intersección tajante entre esos dos grandes planos concurrentes no paralelos.
          </p>
        </div>

        <div className="formula-box">
          <p style={{ margin: 0, fontSize: '1rem', color: '#e0e1dd', paddingBottom: '0.8rem' }}>Recta como Intersección de 2 Planos Generales:</p>
          <BlockMath math="\begin{cases} A_1 x + B_1 y + C_1 z + D_1 = 0 \\ A_2 x + B_2 y + C_2 z + D_2 = 0 \end{cases}" />
        </div>

        <h2>Los Planos Proyectantes Prístinos</h2>
        <p>
          Aunque podés elegir a la fuerza bruta cualquier par ridículo de planos torcidos en el universo que al chocar formen tu recta, existe un tridente sagrado y único de planos extremadamente "limpios" llamados los <strong>Planos Proyectantes de la Recta</strong>.
        </p>
        <p>
          Estos tres planos tienen la fascinante y extrema particularidad de contener abrazada a la recta incrustada adentro de ellos... ¡Y al mismo tiempo resultar ser <strong>perfectamente perpendiculares a uno de los Planos Coordinados primarios</strong> base del infinito sistema de referencias del universo (<InlineMath math="XY, XZ" /> o <InlineMath math="YZ" />)!
        </p>

        <ul className="list-styled">
          <li><strong>Plano Proyectante Horizontal (Sobre <InlineMath math="XY" />):</strong> Es el plano perpendicular al suelo cartesiano. Carece intensionalmente de la variable <InlineMath math="Z" /> en su ecuación inmaculada.</li>
          <li><strong>Plano Proyectante Vertical (Sobre <InlineMath math="XZ" />):</strong> Es el plano ortogonal a la pared izquierda. Carece de la variable <InlineMath math="Y" /> en su fórmula estructural.</li>
          <li><strong>Plano Proyectante Perfil (Sobre <InlineMath math="YZ" />):</strong> Es el plano de fondo. Descifra y pule la variable <InlineMath math="X" /> extirpándola.</li>
        </ul>

        <div className="example-box" style={{ background: 'rgba(100, 70, 40, 0.4)' }}>
          <h4>¿De dónde narices los saco analíticamente?</h4>
          <p>
            Literalmente basta con observar y exprimir a la ya conocida y salvadora <strong>Ecuación Simétrica espuria</strong> de la recta. De la famosa triple igualdad cruzada, aislaste agrupándolos de a pares en tríadas:
          </p>
          
          <p style={{ marginTop: '0.8rem' }}>Agarrá la igualdad del par 1 y 2, pasá multiplicando cruzado los denominadores y ponelo todo junto con un "= 0". ¡BUM! Obtendrás el plano sobre XY, porque al aislar los dos primeros bloques evitas la letra Z.</p>
          <BlockMath math="\frac{x - x_1}{u_x} = \frac{y - y_1}{u_y} \quad \implies (\text{Termmina resultando el Plano carente de } Z)" />

          <p style={{ marginTop: '0.8rem' }}>Haz lo mismo igualando la parte 1 y la 3, y adquirirás el bloque sin la Y (Plano sobre XZ).</p>
        </div>

      </main>

      <TopicNavigation 
        prevPath="/parcial1/espacio-planos/formas-espaciales"
        nextPath="/parcial1/espacio-planos/coplanaridad-rectas" 
      />
    
      <AiChatBot 
        topicTitle="Planos Proyectantes" 
        topicContext="Una recta espacial como la intersección de distintos planos. Planos formados anulando componentes X, Y o Z." 
      />
    </div>
  );
};

export default PlanosProyectantes;
