import React from 'react';
import 'katex/dist/katex.min.css';
import { InlineMath, BlockMath } from 'react-katex';
import TopicHeader from '../../components/TopicHeader';
import TopicNavigation from '../../components/TopicNavigation';
import AiChatBot from '../../components/AiChatBot';
import './VectorTopic.css';

const ModuloDosPuntos: React.FC = () => {

  return (
    <div className="vector-topic-container">
      <TopicHeader 
        title="Módulo de un vector determinado por dos puntos" 
        subtitle="Distancia entre P0 y P1 a través del análisis de vectores"
      />

      <main className="topic-content">
        <div className="concept-box">
          <h3>Un Vínculo Íntimo con la Resta</h3>
          <p>
            Imaginemos un punto de partida <InlineMath math="A = (x_1, y_1)" /> y un punto de destino <InlineMath math="B = (x_2, y_2)" /> flotando en nuestro plano espacial. Podemos formar un segmento orientado <InlineMath math="\vec{AB}" /> que arranca desde el primero y frena en el segundo.
          </p>
          <p>
            Analíticamente, definir este vector de desplazamiento equivale siempre a <strong>restar las coordenadas geométricas del punto Extremo menos el punto Origen</strong>.
          </p>
          <div className="formula-box" style={{ marginTop: '0.5rem' }}>
            <BlockMath math="\vec{AB} = B - A = (x_2 - x_1, \; y_2 - y_1)" />
            <p style={{ margin: 0, fontSize: '0.9rem', color: '#e0e1dd' }}>Esta es la famosa regla de "Final menos Inicial".</p>
          </div>
        </div>

        <h2>La Fórmula de la Distancia (Módulo)</h2>
        <p>
          Una vez fabricadas las verdaderas componentes netas del vector usando la regla anterior, queremos sacar la cinta métrica y medir su <strong>Módulo</strong> absoluto (recordemos que el módulo se definía como un tamaño numérico no negativo).
        </p>

        <p>
          Si llamamos a las nuevas delgas extraídas <InlineMath math="\Delta x = x_2 - x_1" /> y <InlineMath math="\Delta y = y_2 - y_1" />, al proyectarse en el plano de la vida real, conforman exactamente los dos catetos base de un triángulo rectángulo puro. El vector que tú posees es geométricamente idéntico a la <strong>Hipotenusa</strong>.
        </p>

        <p>Por lo tanto, utilizando la legendaria Ley de Pitágoras, definimos una fórmula enraizada formal:</p>
        <div className="formula-box">
          <BlockMath math="||\vec{AB}|| = \sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}" />
        </div>

        <p>Esta expresión la debes conocer informalmente como la clásica <em>Fórmula de Distancia entre dos puntos.</em></p>

        <h3>Expansión en el Espacio (R³)</h3>
        <p>
          La matemática moderna es preciosa porque nos permite escalar esta clase de demostraciones cartesianas tridimensionalmente utilizando la misma lógica pitagórica sobre el agregado de una altura fundamental en el eje Z. Los componentes pasarán simplemente a ser tres partes ortogonales, resultando en:
        </p>
        <div className="formula-box">
          <BlockMath math="||\vec{AB}|| = \sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2 + (z_2 - z_1)^2}" />
        </div>

        <div className="example-box">
          <h4>Ejemplo Práctico en Dimensión Lineal de R²</h4>
          <p>
            Si comenzamos en el punto original de lanzamiento de cohete <InlineMath math="A = (-2, 1)" /> y logramos aterrizar estrepitosamente en el punto topográfico <InlineMath math="B = (4, 9)" />. Queremos rastrear con láser cuánta distancia neta viajó linealmente la máquina calculando el módulo pitagórico. 
          </p>
          <BlockMath math="\text{1. Hacemos componentes de } \vec{AB}: \;\;\; (4 - (-2), \; 9 - 1) = (6, 8)" />
          <BlockMath math="\text{2. Medimos la hipoténusa pitagórica con: } ||\vec{AB}|| = \sqrt{6^2 + 8^2}" />
          <BlockMath math="||\vec{AB}|| = \sqrt{36 + 64} = \sqrt{100} = 10" />
          <p>
            La máquina de despegue recorrió una distancia de exactamente <strong>10 unidades espaciales de longitud.</strong>
          </p>
        </div>
      </main>

      <TopicNavigation 
        prevPath="/parcial1/operaciones/resta-vectores"
        nextPath="/parcial1/operaciones/producto-por-escalar" 
      />
    
      <AiChatBot 
        topicTitle="Módulo entre Dos Puntos" 
        topicContext="Cálculo de la distancia (módulo) entre dos puntos en coordenadas cartesianas R2 y R3 usando el teorema de Pitágoras espacial." 
      />
    </div>
  );
};

export default ModuloDosPuntos;
