import React from 'react';
import 'katex/dist/katex.min.css';
import { InlineMath, BlockMath } from 'react-katex';
import TopicHeader from '../../components/TopicHeader';
import TopicNavigation from '../../components/TopicNavigation';
import AiChatBot from '../../components/AiChatBot';
import '../vectores/VectorTopic.css';

const CosenosDirectores: React.FC = () => {

  return (
    <div className="vector-topic-container">
      <TopicHeader 
        title="4.2. Cosenos Directores" 
        subtitle="Descomposición canónica y orientación espacial exacta"
      />

      <main className="topic-content">
        <div className="concept-box">
          <h3>¿Qué son los Ángulos Directores?</h3>
          <p>
            Al situar un vector <InlineMath math="\vec{v}" /> fijo en el origen de las coordenadas cartesianas espaciales <InlineMath math="\mathbb{R}^3" />, este vector formará tres ángulos específicos con la dirección positiva de los diferentes <strong>ejes coordenados</strong> (<InlineMath math="X, Y, Z" />).
          </p>
          <ul className="list-styled">
            <li><InlineMath math="\alpha" /> (alfa): Ángulo que forma con el eje X.</li>
            <li><InlineMath math="\beta" /> (beta): Ángulo que forma con el eje Y.</li>
            <li><InlineMath math="\gamma" /> (gamma): Ángulo que forma con el eje Z.</li>
          </ul>
        </div>

        <h2>Cosenos Directores Analíticos</h2>
        <p>
          Si conocemos las tres componentes de nuestro vector <InlineMath math="\vec{v} = (v_x, v_y, v_z)" /> y calculamos previamente su módulo <InlineMath math="||\vec{v}||" />, los cosenos de estos tres ángulos (llamados <strong>Cosenos Directores</strong>) pueden obtenerse directamente proyectando el vector.
        </p>

        <div className="formula-box">
          <BlockMath math="\cos(\alpha) = \frac{v_x}{||\vec{v}||}" />
          <BlockMath math="\cos(\beta)  = \frac{v_y}{||\vec{v}||}" />
          <BlockMath math="\cos(\gamma) = \frac{v_z}{||\vec{v}||}" />
        </div>

        <div className="example-box">
          <p>
            <strong>Conclusión fundamental:</strong> Observá detalladamente las fórmulas de arriba. Son exactamente el resultado de dividir cada componente escalar del vector entre su módulo total. ¡Esa es precisamente la definición del <a href="/parcial1/vectores/versor" style={{color: 'var(--accent-color)'}}>Versor Asociado!</a>
          </p>
          <p style={{ marginTop: '0.8rem' }}>
            Por ende, las componentes del versor de un vector cualquiera equivalen ni más ni menos que a sus cosenos directores:
          </p>
          <BlockMath math="\breve{v} = (\cos(\alpha), \cos(\beta), \cos(\gamma))" />
        </div>

        <h2>Relación Fundamental Teorema Pitagórico</h2>
        <p>
          Dado que el módulo de todo versor obligatoriamente siempre es exactamente igual a 1, y además sabiendo que las componentes de ese versor son simplemente los cosenos directores espaciales, podemos desprender del Teorema de Pitágoras tridimensional (módulo al cuadrado) la siguiente <strong>Relación Fundamental de Orientación:</strong>
        </p>

        <div className="formula-box" style={{ border: '2px solid #a2bce0' }}>
          <BlockMath math="\cos^2(\alpha) + \cos^2(\beta) + \cos^2(\gamma) = 1" />
        </div>

        <p>
          Si te dan dos ángulos en un problema o examen (por ejemplo: "el vector forma <InlineMath math="45^\circ" /> con X y <InlineMath math="60^\circ" /> con Y, encuentre el ángulo con Z"), siempre podés usar esta identidad Pitagórica para despejar analíticamente el tercer ángulo director incógnita.
        </p>
      </main>

      <TopicNavigation 
        prevPath="/parcial1/productos/producto-escalar"
        nextPath="/parcial1/productos/producto-vectorial" 
      />
    
      <AiChatBot 
        topicTitle="Cosenos Directores" 
        topicContext="Ángulos determinantes directores (alpha, beta, gamma). Identidad de la suma de los cuadrados de los cosenos directores igual a 1." 
      />
    </div>
  );
};

export default CosenosDirectores;
