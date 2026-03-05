import { InlineMath, BlockMath } from 'react-katex';
import TopicHeader from '../../components/TopicHeader';
import TopicNavigation from '../../components/TopicNavigation';
import AiChatBot from '../../components/AiChatBot';
import './VectorTopic.css';

const SegmentoOrientado: React.FC = () => {

  return (
    <div className="vector-topic-container">
      <TopicHeader 
        title="Segmento Orientado" 
        subtitle="Un paso más allá del segmento clásico en la geometría"
      />

      <main className="topic-content">
        <div className="concept-box">
          <h3>Definición Clave</h3>
          <p>
            Un <strong>segmento orientado</strong> es un segmento de recta en el cual se ha distinguido uno de sus extremos como <em>origen</em> y el otro como <em>extremo</em>. Se denota definiendo primero el origen y luego el extremo, usualmente con una flecha arriba (ej: <InlineMath math="\vec{AB}" />).
          </p>
        </div>

        <h2>Diferencia con un segmento de recta común</h2>
        <p>
          En la geometría clásica, el segmento de recta que une los puntos <InlineMath math="A" /> y <InlineMath math="B" /> es el mismo que une <InlineMath math="B" /> con <InlineMath math="A" />, es decir, el segmento <InlineMath math="\overline{AB}" /> es exactamente igual al segmento <InlineMath math="\overline{BA}" />. Su única medida es su <strong>longitud</strong>.
        </p>

        <p>
          En cambio, cuando hablamos de un <strong>segmento orientado</strong>, importa de dónde salimos y a dónde llegamos. Por lo tanto, el segmento orientado <InlineMath math="\vec{AB}" /> (que va de <InlineMath math="A" /> hacia <InlineMath math="B" />) es <strong>distinto</strong> del segmento orientado <InlineMath math="\vec{BA}" /> (que va de <InlineMath math="B" /> hacia <InlineMath math="A" />).
        </p>

        <h2>Elementos de un Segmento Orientado</h2>
        <ul className="list-styled">
          <li><strong>Origen (Punto de aplicación):</strong> Es el punto inicial (Ej: el punto <InlineMath math="A" />).</li>
          <li><strong>Extremo:</strong> Es el punto final hacia donde se dirige la flecha (Ej: el punto <InlineMath math="B" />).</li>
          <li><strong>Recta de acción:</strong> Es la recta que contiene al segmento y determina su <em>dirección</em>.</li>
        </ul>

        <div className="example-box">
          <p>
            Imagina un auto que viaja desde Buenos Aires (<InlineMath math="A" />) hasta Córdoba (<InlineMath math="B" />). El desplazamiento representa el segmento orientado <InlineMath math="\vec{AB}" />. Si el auto hiciera el viaje de vuelta, de Córdoba a Buenos Aires, sería el segmento orientado <InlineMath math="\vec{BA}" />. Aunque la ruta (distancia métrica) sea la misma, el viaje es conceptualmente el opuesto.
          </p>
        </div>

        <h2>Simbología</h2>
        <p>
          Generalmente, a un segmento orientado en particular se lo representa gráficamente mediante una flecha que arranca en <InlineMath math="A" /> y termina en <InlineMath math="B" />.
        </p>
        <div className="formula-box">
          <BlockMath math="\vec{AB} \neq \vec{BA}" />
        </div>
      </main>

      <TopicNavigation 
        nextPath="/parcial1/vectores/modulo-direccion-sentido" 
      />

      <AiChatBot 
        topicTitle="Segmento Orientado" 
        topicContext="Definición básica de segmento orientado en vectores de R2 y R3, diferenciando origen y extremo explícitamente y mostrando nomenclatura con flechas." 
      />
    </div>
  );
};

export default SegmentoOrientado;
