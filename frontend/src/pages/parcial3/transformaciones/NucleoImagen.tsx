import React from 'react';
import { InlineMath, BlockMath } from 'react-katex';
import TopicHeader from '../../../components/TopicHeader';
import TopicNavigation from '../../../components/TopicNavigation';
import AiChatBot from '../../../components/AiChatBot';
import './TransformacionesTopic.css';

const NucleoImagen: React.FC = () => {
  return (
    <div className="tl-topic-container">
      <TopicHeader 
        title="Núcleo e Imagen de una TL" 
        subtitle="Analizando lo que se pierde y lo que se alcanza"
      />

      <main className="topic-content">
        <p>
          Toda Transformación Lineal <InlineMath math="T: V \to W" /> tiene asociados dos subespacios fundamentales, uno de ellos "vive" en el dominio (<InlineMath math="V" />) y el otro en el codominio (<InlineMath math="W" />). Estos subespacios deciden qué tan "buena" (o inyectiva/sobreyectiva) es la transformación.
        </p>

        <div className="concept-box">
          <h3>El Núcleo (Kernel o Nulidad)</h3>
          <p>
            El <strong>Núcleo</strong> de <InlineMath math="T" />, denotado como <InlineMath math="\ker(T)" /> o <InlineMath math="N(T)" />, es el conjunto de <strong>todos los vectores del dominio <InlineMath math="V" /></strong> que "se apagan" o se destruyen al aplicarles la transformación. Es decir, aquellos que mueren aplastados contra el vector nulo del codominio.
          </p>
          <div className="formula-box">
            <BlockMath math="\ker(T) = \{ \vec{v} \in V \mid T(\vec{v}) = \vec{0}_W \}" />
          </div>
          <ul className="list-styled">
            <li>El núcleo es siempre un <strong>subespacio vectorial</strong> de <InlineMath math="V" />.</li>
            <li>Para calcular el núcleo de una T.L., debes escribir la ecuación que define a <InlineMath math="T" />, igualarla al vector <InlineMath math="\vec{0}" /> y resolver el sistema de ecuaciones homogéneo resultante.</li>
          </ul>
        </div>

        <div className="example-box">
          <p><strong>Transformaciones Inyectivas (Monorfismos):</strong></p>
          <p>
            Una transformación lineal es 1 a 1 (<strong>inyectiva</strong>) si y solo si su núcleo contiene única y exclusivamente al vector nulo.
          </p>
          <div className="formula-box">
            <InlineMath math="T \text{ es inyectiva} \iff \ker(T) = \{\vec{0}_V\}" />
          </div>
        </div>

        <div className="concept-box">
          <h3>La Imagen (Recorrido)</h3>
          <p>
            La <strong>Imagen</strong> de <InlineMath math="T" />, denotada como <InlineMath math="\text{Im}(T)" />, es el conjunto de <strong>todos los vectores del codominio <InlineMath math="W" /></strong> que realmente logran ser "alcanzados" o "generados" por algún vector del dominio a través de la transformación.
          </p>
          <div className="formula-box">
            <BlockMath math="\text{Im}(T) = \{ \vec{w} \in W \mid \text{existe } \vec{v} \in V \text{ con } T(\vec{v}) = \vec{w} \}" />
          </div>
          <ul className="list-styled">
            <li>La imagen es siempre un <strong>subespacio vectorial</strong> de <InlineMath math="W" />.</li>
            <li><strong>¿Cómo hallar la imagen?</strong> La forma más directa es recordar que <strong>la imagen está generada por las transformaciones de los vectores de cualquier base del dominio</strong>. Si <InlineMath math="B = \{\vec{v}_1, \dots, \vec{v}_n\}" /> es base de <InlineMath math="V" />, entonces <InlineMath math="\text{Im}(T) = Gen(\{T(\vec{v}_1), \dots, T(\vec{v}_n)\})" />. Luego, eliminas los linealmente dependientes para encontrar una base.</li>
          </ul>
        </div>

        <div className="example-box">
          <p><strong>Transformaciones Sobreyectivas (Epimorfismos):</strong></p>
          <p>
            Una transformación lineal cubre todo el espacio final (es <strong>sobreyectiva</strong>) si y solo si su imagen es exactamente igual a todo el codominio.
          </p>
          <div className="formula-box">
            <InlineMath math="T \text{ es sobreyectiva} \iff \text{Im}(T) = W" />
          </div>
        </div>

      </main>

      <TopicNavigation 
        prevPath="/parcial3/transformaciones/definicion"
        nextPath="/parcial3/transformaciones/teorema-dimensiones" 
      />

      <AiChatBot 
        topicTitle="Núcleo e Imagen de una TL" 
        topicContext="Definición analítica del Núcleo (Kernel): conjunto de vectores v donde T(v) = 0. Cálculo del núcleo como S.E.L. homogéneo. Relación inyectividad <=> kernel = {0}. Definición de Imagen, su cálculo a partir de aplicar T a las bases de V. Relación sobreyectividad <=> Im(T) = W." 
      />
    </div>
  );
};

export default NucleoImagen;
