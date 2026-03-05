import React from 'react';
import 'katex/dist/katex.min.css';
import { InlineMath, BlockMath } from 'react-katex';
import TopicHeader from '../../components/TopicHeader';
import TopicNavigation from '../../components/TopicNavigation';
import AiChatBot from '../../components/AiChatBot';
import '../vectores/VectorTopic.css';

const DistanciaPuntoRecta: React.FC = () => {

  return (
    <div className="vector-topic-container">
      <TopicHeader 
        title="5.4. Distancia de un Punto a una Recta" 
        subtitle="Midiendo cruces, desvíos y lejanías exactas"
      />

      <main className="topic-content">
        <div className="concept-box">
          <h3>La Distancia Geométricamente Más Corta</h3>
          <p>
            Cuando hablamos de la distancia pura generada entre un punto solitario flotante <InlineMath math="P_0(x_0, y_0)" /> y una larga recta infinita <InlineMath math="r" /> trazada en el plano, siempre pero <strong>siempre nos estaremos refiriendo a la longitud del segmento perpendicular</strong> que logra lanzarse uniéndolos. Es la distancia de colisión más corta posible imaginable entre el ente matemático estático y el sendero infinito.
          </p>
        </div>

        <h2>Fórmula Explícita General</h2>
        <p>
          Si disponés de la forma limpia o lograste llevar rápidamente los datos a una ecuación en su formato <strong>General o Implícito <InlineMath math="(Ax + By + C = 0)" /></strong>, existe una preciada fórmula directa que procesa los cálculos arrojando una simple respuesta entera unificada.
        </p>
        <p>
          Debe insertarse analíticamente el punto rebelde <InlineMath math="P_0(x_0, y_0)" /> cruzándolo sin piedad directamente adentro del cuerpo algebraico principal de la recta, aplicándole de corrido valor absoluto y recostándolo todo bajo la sombra del módulo de su vector normal basal:
        </p>

        <div className="formula-box" style={{ background: 'rgba(50, 60, 100, 0.4)', padding: '2rem 1rem' }}>
          <BlockMath math="d(P_0, r) = \frac{|A x_0 + B y_0 + C|}{\sqrt{A^2 + B^2}}" />
        </div>

        <ul className="list-styled">
          <li><strong>El numerador absoluto:</strong> Funciona evaluando qué tan "desviado" está quedando el punto al rehusarse a anular la ecuación a 0 (como hubiese ocurrido si en cambio cayera perteneciendo propiamente adentro de la traza principal de esa recta original).</li>
          <li><strong>El denominador divisor:</strong> Resulta ser nada más ni nada menos que el rústico Módulo del Vector Normal de la misma recta <InlineMath math="||\vec{n}||" /> amortiguando y balanceando la carga escalar calculada.</li>
        </ul>

        <div className="example-box">
          <h4>Distancia entre Rectas Paralelas</h4>
          <p>
            ¿Qué sucede si un enloquecido parcial práctico en cambio te llega a arrojar sorpresivamente evaluar la separación entre <strong>dos rectas enteramente paralelas</strong> a falta de los puntos? 
            <br/><br/>
            Súmamente sencillo. Elegís a mano limpia fijando aleatoriamente o buscando cualquier punto obvio particular en una de ellas, lo expropias, y posteriormente sacás la implacable fórmula estándar superior usándolo incrustado ahora frente a la otra recta contrincante. ¡La distancia en ellas jamás variará sea cual sea tu elección de ese bendito punto!
          </p>
        </div>

      </main>

      <TopicNavigation 
        prevPath="/parcial1/recta-plano/perpendicularidad-paralelismo"
        nextPath="/parcial1/espacio-planos/formas-espaciales"
      />
    
      <AiChatBot 
        topicTitle="Distancia Punto a Recta" 
        topicContext="Fórmula general para calcular la distancia más corta de un punto P0 a una recta r explícita." 
      />
    </div>
  );
};

export default DistanciaPuntoRecta;
