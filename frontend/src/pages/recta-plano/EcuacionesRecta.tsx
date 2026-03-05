import React from 'react';
import 'katex/dist/katex.min.css';
import { InlineMath, BlockMath } from 'react-katex';
import TopicHeader from '../../components/TopicHeader';
import TopicNavigation from '../../components/TopicNavigation';
import AiChatBot from '../../components/AiChatBot';
import '../vectores/VectorTopic.css';

const EcuacionesRecta: React.FC = () => {

  return (
    <div className="vector-topic-container">
      <TopicHeader 
        title="5.1. Ecuaciones de la Recta en el Plano" 
        subtitle="Analíticamente una misma recta matemática puede vestirse de muchas formas diferentes"
      />

      <main className="topic-content">
        <div className="concept-box">
          <h3>La Identidad de una Recta</h3>
          <p>
            En geometría analítica bidimensional (<InlineMath math="\mathbb{R}^2" />), una recta queda perfectamente definida, anclada y orientada de manera única si logramos conocer dos porciones vitales de información:
          </p>
          <ul className="list-styled">
            <li><strong>Un punto de paso</strong> <InlineMath math="P_1(x_1, y_1)" /> por donde la recta atraviese. (Que la "ancla" al espacio).</li>
            <li><strong>Un vector director</strong> <InlineMath math="\vec{u} = (u_x, u_y)" /> que sea estrictamente paralelo a ella. (Que brinde su "inclinación").</li>
          </ul>
        </div>

        <p>A partir de estos dos ingredientes originarios, la ecuación analítica puede presentarse mutando en muchísimas "formas" o disfraces algebraicos equivalentes. Estudiaremos las cinco principales:</p>

        <h2>1. Ecuación Vectorial</h2>
        <p>Es la ecuación fundacional e intuitiva. Nos dice que para llegar a cualquier punto genérico <InlineMath math="P(x,y)" /> de la recta, basta con "pararse" primero en un punto conocido <InlineMath math="P_1" />, y luego arrastrarse a lo largo de la línea utilizando un múltiplo escalar del vector director.</p>
        <div className="formula-box">
          <BlockMath math="(x, y) = (x_1, y_1) + \lambda \cdot (u_x, u_y)" />
        </div>
        <p style={{textAlign: 'center', margin: 0}}><em>Donde <InlineMath math="\lambda" /> (lambda) es un parámetro que pertenece a los reales.</em></p>

        <h2>2. Ecuaciones Paramétricas</h2>
        <p>Se desprenden directa e inevitablemente de la vectorial anterior, al simplemente realizar la suma y agrupar todo lo que atañe a la coordenada <InlineMath math="X" /> por un lado, y a la coordenada <InlineMath math="Y" /> por el otro, generando un sistema paramétrico.</p>
        <div className="formula-box">
          <BlockMath math="\begin{cases} x = x_1 + \lambda u_x \\ y = y_1 + \lambda u_y \end{cases}" />
        </div>

        <h2>3. Ecuación General (o Implícita)</h2>
        <p>Se obtiene eliminando el parámetro <InlineMath math="\lambda" /> interno. Es la forma donde todas las variables y constantes conviven igualadas a cero de un mismo lado de la frontera.</p>
        <div className="formula-box" style={{ background: 'rgba(50, 60, 100, 0.4)' }}>
          <BlockMath math="A x + B y + C = 0" />
        </div>
        <div className="example-box">
          <h4>Vectores Directores vs Vectores Normales</h4>
          <p>
            Al tener la recta cruda exhibida en su forma General, los coeficientes desnudos que acompañan a las variables nos regalan el <strong>Vector Normal (Ortogonal) de la recta</strong> de forma directa e inmediata.
          </p>
          <BlockMath math="\vec{n} = (A, B)" />
          <p>
            Sabiendo esto, el Vector Director original, que debe ser perpendicular a este por propia definición, se consigue intercambiando sus posiciones y alterándole el signo exclusivamente a uno de los dos.
          </p>
          <BlockMath math="\vec{u} = (-B, A) \quad \text{o bien} \quad (B, -A)" />
        </div>

        <h2>4. Ecuación Segmentaria</h2>
        <p>Se usa una forma bellísima cuando conocemos los cortes limpios donde la recta agujerea los ejes coordenados de manera exacta. El corte con el eje de las abscisas <InlineMath math="X" /> lo llamaremos "<InlineMath math="a" />" y al corte con las ordenadas <InlineMath math="Y" /> lo llamaremos "<InlineMath math="b" />".</p>
        <div className="formula-box">
          <BlockMath math="\frac{x}{a} + \frac{y}{b} = 1" />
        </div>
        <p><em>(Obviamente, si la recta pasa justo por el (0,0) u origen, esta ecuación está prohibida debido a división por cero).</em></p>

        <h2>5. Ecuación Explícita</h2>
        <p>La forma más cotidiana escolar. Despeja a la variable dependiente Y completamente solitaria y aislada a la izquierda del ring.</p>
        <div className="formula-box">
          <BlockMath math="y = m x + h" />
        </div>
        <ul className="list-styled">
          <li><strong>Pendiente (<InlineMath math="m" />):</strong> Es el gradiente o tangente del ángulo de elevación. Si tuvieramos el vector director, se calcula rápidamente dividiendo <InlineMath math="\frac{u_y}{u_x}" />.</li>
          <li><strong>Ordenada al origen (<InlineMath math="h" />):</strong> Es numéricamente el punto exacto por el que la recta irrumpe verticalmente cruzando el eje Y. Corresponde y es homólogo a la constante de corte <InlineMath math="b" /> de la segmentaria.</li>
        </ul>

      </main>

      <TopicNavigation 
        prevPath="/parcial1/productos/producto-mixto"
        nextPath="/parcial1/recta-plano/angulo-rectas" 
      />
    
      <AiChatBot 
        topicTitle="Ecuaciones de la Recta" 
        topicContext="Trigonométrica, Vectorial, Paramétrica, Simétrica, General/Implícita, Segmentaria, Normal, Explícita de la Recta en R2." 
      />
    </div>
  );
};

export default EcuacionesRecta;
