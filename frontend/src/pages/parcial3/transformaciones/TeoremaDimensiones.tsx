import React from 'react';
import { InlineMath, BlockMath } from 'react-katex';
import TopicHeader from '../../../components/TopicHeader';
import TopicNavigation from '../../../components/TopicNavigation';
import AiChatBot from '../../../components/AiChatBot';
import './TransformacionesTopic.css';

const TeoremaDimensiones: React.FC = () => {
  return (
    <div className="tl-topic-container">
      <TopicHeader 
        title="Teorema de las Dimensiones" 
        subtitle="Un equilibrio perfecto: La ley de conservación de la dimensión"
      />

      <main className="topic-content">
        <div className="concept-box">
          <h3>La Ecuación Fundamental</h3>
          <p>
            El <strong>Teorema de las Dimensiones</strong> (también conocido a veces como Teorema Rango-Nulidad) establece la asombrosa relación que existe entre el tamaño del dominio de una transformación y los espacios núcleo e imagen.
          </p>
          <p>
            Para cualquier Transformación Lineal <InlineMath math="T: V \to W" />, donde <InlineMath math="V" /> tiene dimensión finita, se cumple rigurosamente que:
          </p>
        </div>

        <div className="formula-box">
          <BlockMath math="\dim(V) = \dim(\ker(T)) + \dim(\text{Im}(T))" />
        </div>

        <p>
          Esta ecuación describe una "ley de conservación de información": la dimensión total de todo nuestro espacio de salida (el Dominio <InlineMath math="V" />) se divide o se descompone en dos destinos...
        </p>

        <ul className="list-styled">
          <li><strong>Lo que se pierde:</strong> La dimensión del núcleo (<InlineMath math="\dim(\ker(T))" />, llamada la <strong>nulidad</strong>) que representa cuántas dimensiones se comprimen hasta colapsar en el vector nulo.</li>
          <li><strong>Lo que se visualiza:</strong> La dimensión de la imagen (<InlineMath math="\dim(\text{Im}(T))" />, llamada el <strong>rango</strong>) que representa el número de dimensiones que logran "sobrevivir" y manifestarse dentro del codominio <InlineMath math="W" />.</li>
        </ul>

        <h2>Consecuencias y deducciones rápidas</h2>
        <p>
          Este teorema es una de las herramientas más potentes para responder rápidamente preguntas sin necesidad de calcular bases:
        </p>

        <div className="example-box">
          <p><strong>1. Casos imposibles:</strong></p>
          <p>
            Si tienes una transformación lineal de <InlineMath math="\mathbb{R}^5 \to \mathbb{R}^3" />. Usando el teorema: <InlineMath math="5 = \dim(\ker) + \dim(\text{Im})" />.
            Sabemos que la imagen vive en <InlineMath math="\mathbb{R}^3" />, así que a lo sumo <InlineMath math="\dim(\text{Im}) = 3" />.
            Esto obliga a que la dimensión del núcleo sea, <strong>como mínimo</strong> de <InlineMath math="2" />. <br/>
            <strong>Conclusión instantánea:</strong> ¡Es imposible que esta transformación sea inyectiva! El núcleo obligatoriamente será mayor a <InlineMath math="0" />.
          </p>
        </div>

        <div className="example-box">
          <p><strong>2. Matriz Cuadrada / Isomorfismo:</strong></p>
          <p>
            Si las dimensiones del dominio y codominio son iguales (<InlineMath math="\dim(V) = \dim(W)" />), entonces el teorema dicta que:
          </p>
          <ul className="list-styled">
            <li>Si el núcleo tiene dimensión 0 (es inyectiva) <InlineMath math="\implies" /> la imagen forzosamente tiene dimensión máxima (es sobreyectiva).</li>
            <li>Si la imagen "llena" todo el codominio (es sobreyectiva) <InlineMath math="\implies" /> el núcleo debe ser 0 obligatoriamente (es inyectiva).</li>
          </ul>
          <p>
            Por lo tanto, en espacios de la misma dimensión (como de <InlineMath math="\mathbb{R}^3 \to \mathbb{R}^3" />), ser inyectivo implica ser sobreyectivo ¡y viceversa! Una función con ambas propiedades se llama <strong>Isomorfismo (Biyectiva)</strong>.
          </p>
        </div>

      </main>

      <TopicNavigation 
        prevPath="/parcial3/transformaciones/nucleo-imagen"
        nextPath="/parcial3/transformaciones/matriz-asociada" 
      />

      <AiChatBot 
        topicTitle="Teorema de las Dimensiones" 
        topicContext="Fórmula fundamental Dim(V) = Dim(Ker) + Dim(Im). Relación como principio de conservación: nulidad + rango = dimensión del dominio. Deducciones veloces de no-inyectividad y no-sobreyectividad analizando diferencias de dimensiones. El isomorfismo (Biyectividad) cuando dim(V)=dim(W)." 
      />
    </div>
  );
};

export default TeoremaDimensiones;
