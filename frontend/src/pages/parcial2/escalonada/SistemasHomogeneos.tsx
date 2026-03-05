import React from 'react';
import 'katex/dist/katex.min.css';
import { InlineMath, BlockMath } from 'react-katex';
import TopicHeader from '../../../components/TopicHeader';
import TopicNavigation from '../../../components/TopicNavigation';
import AiChatBot from '../../../components/AiChatBot';
import '../../vectores/VectorTopic.css';

const SistemasHomogeneos: React.FC = () => {
  return (
    <div className="vector-topic-container">
      <TopicHeader 
        title="2.3. Sistemas Homogéneos (SELH)" 
        subtitle="Sistemas que Comparten el Origen"
      />

      <main className="topic-content">
        <div className="concept-box">
          <h3>La Definición de un SEL Homogéneo</h3>
          <p>
            Un <strong>Sistema de Ecuaciones Lineales Homogéneo (SELH)</strong> es un caso particular de sistemas algebraicos en donde el término independiente de <em>absolutamente todas</em> las ecuaciones en juego es <strong>cero</strong>.
          </p>
          <p>
            Matricialmente, la ecuación unificadora toma una forma icónica: <InlineMath math="A\vec{x} = \vec{0}" />.
          </p>
        </div>

        <h2>La Garantía de Compatibilidad (Siempre tienen solución)</h2>

        <p>
           A diferencia de los sistemas heterogéneos comunes que vimos antes (los cuales podían resultar absurdos e incompatibles o Inconsistentes), un Sistema Homogéneo goza de la propiedad más sólida del universo del análisis matemático: <strong>Jamás puede ser incompatible</strong>.
        </p>
        <p>
           El teorema de Rouché-Frobenius en las matrices ampliadas nos demuestra que dado que añadir una columna entera de parámetros puramente ceros a cualquier matriz <InlineMath math="A" /> original es incapaz de alterar o generar nuevos pivotes luego de una eliminación de Gauss, el rango se mantiene constante: <InlineMath math="\text{rg}(A) = \text{rg}(A|0)" /> incondicionalmente.
        </p>

        <h2>Tipos de Soluciones de un SELH</h2>

        <h3>1. La Solución Trivial (SCD)</h3>
        <p>
          Dado que los hiperplanos no tienen coeficientes independientes que los arrastren o "desplacen" por las dimensiones del espacio vectorial, significa que todos obligatoriamente "atraviesan" por el centro del universo de ese gráfico. Por lo tanto, el vector cero o el punto <strong>Origen</strong> donde todas las variables valen matemáticamente cero: <InlineMath math="x_1 = 0, x_2 = 0, \dots, x_n = 0" /> es siempre y sin excepciones una solución que satisface instantáneamente TODAS las ecuaciones de todo sistema homogéneo. 
        </p>
        <p>
          A la solución que resulta en dar valor cero a todo se le denomina <strong>Solución Trivial</strong>. Cuando el SELH además tiene Rango completo y es Compatible Determinado, la trivial asume el trono como la de hecho la <strong>Única Solución</strong> posible.
        </p>

        <div className="formula-box" style={{ background: 'rgba(50, 60, 100, 0.4)' }}>
           <p style={{ margin: 0, fontSize: '1rem', color: '#e0e1dd' }}>Condición para Solución Trivial Única:</p>
          <BlockMath math="\text{rg}(A) = n \quad \text{(Igual al número total de Incógnitas)}" />
           <p style={{ textAlign: "center", fontStyle: "italic", marginTop: "1rem" }}>El sistema intersecta única y exclusivamente en el Origen del sistema de coordenadas.</p>
        </div>

        <h3>2. Soluciones No Triviales (SCI)</h3>
        <p>
          Pero, ¿qué sucede si la matriz <InlineMath math="A" /> carece del rango o de ecuaciones independientes suficientes para someter a todas las variables? Generaremos <strong>variables paramétricas u libres</strong> como en los sistemas anteriores indeterminados. 
        </p>
        <p>
          Si un SELH es un sistema Compatible Indeterminado (<InlineMath math="\text{rg} < n" />), significa que, además de retener a la solución trivial (el origen es indiscutible siempre), los hiperplanos se tocan y se entremezclan de manera masiva al azar en infinidad de otros puntos formales. Las soluciones compuestas por cualquier número diferente a ceros completos se denominan como <strong>Soluciones No Triviales</strong>. 
        </p>
        <div className="example-box">
          <h4>Visto Espacialmente</h4>
          <p>
            Imagina que de tu lapicera se originan dos rayos láser en dos direcciones idénticas del espacio para apuntar al techo (están encimadas en el vacío, superpuestas). Ambos salen invariablemente del punto de origen o de emisión (solución Trivial), pero se rozan infinitamente al unísono proyectando una única recta sobre los muros de la habitación (infinitas de intersecciones No Triviales a lo largo de su existencia infinita).
          </p>
        </div>

      </main>

      <TopicNavigation 
        prevPath="/parcial2/escalonada/teoremas-sel"
        nextPath="/parcial2/escalonada/interpretacion" 
      />
    
      <AiChatBot 
        topicTitle="Sistemas Homogéneos y Soluciones Triviales" 
        topicContext="El Sistema Ax=0 en Sistemas Homogéneos. Concepto matemático y geométrico riguroso sobre por qué están obligados a ser siempre Compatibles en base a Rouché-Frobenius. Solución Trivial (Cero vector) que subyace al determinismo Vs soluciones No Triviales para la indeterminación general." 
      />
    </div>
  );
};

export default SistemasHomogeneos;
