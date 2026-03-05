import React from 'react';
import 'katex/dist/katex.min.css';
import { InlineMath } from 'react-katex';
import TopicHeader from '../../components/TopicHeader';
import TopicNavigation from '../../components/TopicNavigation';
import AiChatBot from '../../components/AiChatBot';
import './VectorTopic.css';

const IgualdadVectores: React.FC = () => {

  return (
    <div className="vector-topic-container">
      <TopicHeader 
        title="Igualdad de Vectores" 
        subtitle="¿Cuándo podemos afirmar matemáticamente que dos flechas son idénticas?"
      />

      <main className="topic-content">
        <div className="concept-box">
          <h3>Definición Vectorial de Igualdad</h3>
          <p>
            Dos vectores <InlineMath math="\vec{u}" /> y <InlineMath math="\vec{v}" /> son <strong>libres e iguales</strong> si y solo si poseen el mismo <strong>módulo</strong>, la misma <strong>dirección</strong> y el mismo <strong>sentido</strong>. Es irrelevante si tienen distinto punto de aplicación (origen).
          </p>
        </div>

        <p>
          A diferencia de los segmentos orientados en física rígida, en el <em>"álgebra vectorial"</em> pura que estudiamos, se asume el concepto de vector como <strong>Vector Libre</strong>. Esto significa que un vector no está anclado a un punto específico del espacio. Podemos agarrar cualquier flecha que lo represente, moverla paralelamente a sí misma sin cambiar su tamaño, y seguirá siendo <strong>el mismo vector</strong>.
        </p>
        
        <p>
          Por esta razón, una infinita familia de segmentos orientados paralelos de igual longitud e igual sentido son, en realidad, <strong>representantes del mismo vector libre</strong>.
        </p>

        <div className="example-box">
          <p>
            Si se te pide graficar un vector <InlineMath math="\vec{u} = (2, 3)" />, puedes dibujarlo saliendo del origen de coordenadas <InlineMath math="(0,0)" /> y llegando a <InlineMath math="(2,3)" />. Pero también puedes dibujarlo arrancando desde <InlineMath math="(1,1)" /> y terminando en <InlineMath math="(3,4)" />. Ambas flechas representan matemáticamente a <InlineMath math="\vec{u}" />.
          </p>
        </div>

        <h2>Clasificación Complementaria</h2>
        <ul className="list-styled">
          <li><strong>Vectores Equipolentes:</strong> Es una relación geométrica. Cuando dos segmentos orientados tienen idéntico módulo, dirección y sentido, se dice que son equipolentes. Matemáticamente la equipolencia define la igualdad en el conjunto de los vectores libres.</li>
          <li><strong>Vectores Fijos, Deslizantes y Libres:</strong> En estática y mecánica, interesa si la fuerza se puede mover por todo el espacio (libre), solo sobre su línea de acción (deslizante), o si no se puede mover de su origen (fijo o ligado). En álgebra <strong>asumimos vectores libres</strong> a no ser que se aclare otra cosa.</li>
        </ul>

        <h2>El Concepto del Paralelogramo</h2>
        <p>
          Una forma gráfica de comprobar la igualdad de dos vectores <InlineMath math="\vec{AB}" /> y <InlineMath math="\vec{CD}" /> que <em>no pertenecen a la misma recta</em>, es verificar si los puntos <InlineMath math="A" />, <InlineMath math="B" />, <InlineMath math="D" /> y <InlineMath math="C" /> (leídos en el orden final-inicial cruzado) forman los vértices de un <strong>paralelogramo</strong>.
        </p>

      </main>

      <TopicNavigation 
        prevPath="/parcial1/vectores/modulo-direccion-sentido"
        nextPath="/parcial1/vectores/versor" 
      />

      <AiChatBot 
        topicTitle="Igualdad de Vectores" 
        topicContext="Condición matemática y conceptual de igualdad entre vectores libres en el espacio. Explicación de equipolencia, libertad al trasladar el origen y el uso gráfico del paralelogramo para probar la igualdad." 
      />
    </div>
  );
};

export default IgualdadVectores;
