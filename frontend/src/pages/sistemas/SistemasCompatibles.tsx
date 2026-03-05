import React from 'react';
import 'katex/dist/katex.min.css';
import { InlineMath, BlockMath } from 'react-katex';
import TopicHeader from '../../components/TopicHeader';
import TopicNavigation from '../../components/TopicNavigation';
import AiChatBot from '../../components/AiChatBot';
import '../vectores/VectorTopic.css';

const SistemasCompatibles: React.FC = () => {
  return (
    <div className="vector-topic-container">
      <TopicHeader 
        title="1.2. Sistemas Compatibles: Determinados e Indeterminados" 
        subtitle="Analizando la existencia y cantidad de soluciones"
      />

      <main className="topic-content">
        <div className="concept-box">
          <h3>Sistemas Compatibles</h3>
          <p>
            Un Sistema de Ecuaciones Lineales se clasifica como <strong>Compatible</strong> cuando posee <em>al menos una solución</em>. Es decir, existe al menos una <InlineMath math="n" />-upla que satisface simultáneamente todas las ecuaciones del sistema. A su vez, dependiendo de cuántas soluciones tenga, se subdivide en dos categorías.
          </p>
        </div>

        <h2>Sistemas Compatibles Determinados (S.C.D)</h2>
        <p>
          Un sistema es <strong>Compatible Determinado</strong> si admite <strong>exactamente una solución única</strong>.
        </p>
        <ul className="list-styled">
          <li>El conjunto solución consta de un solo elemento (una sola n-upla).</li>
          <li>Geométricamente (en <InlineMath math="\mathbb{R}^2" /> o <InlineMath math="\mathbb{R}^3" />), esto indica que las rectas o planos se intersectan en un único punto puntual.</li>
        </ul>
        
        <div className="example-box">
          <h4>Intersección en un punto</h4>
          <p>Dos rectas no paralelas en el plano siempre formarán un Sistema Compatible Determinado, cruzándose exactamente en una coordenada <InlineMath math="(x_0, y_0)" />.</p>
        </div>

        <h2>Sistemas Compatibles Indeterminados (S.C.I)</h2>
        <p>
          Un sistema es <strong>Compatible Indeterminado</strong> si posee <strong>infinitas soluciones</strong>.
        </p>
        <ul className="list-styled">
          <li>El conjunto solución tiene infinitos elementos.</li>
          <li>Todas las soluciones pueden expresarse en función de variables llamadas "libres" o "parámetros".</li>
          <li>Ocurre cuando hay menos ecuaciones "útiles" o independientes que la cantidad de incógnitas del sistema. Algunas ecuaciones terminan siendo múltiplos (combinaciones lineales) de otras.</li>
        </ul>
        
        <div className="formula-box">
          <p style={{ margin: 0, fontSize: '1rem', color: '#e0e1dd' }}>Ejemplo de infinitas soluciones (rectas coincidentes en <InlineMath math="\mathbb{R}^2" />):</p>
          <BlockMath math="\begin{cases} x + y = 2 \\ 2x + 2y = 4 \end{cases}" />
          <p style={{ marginTop: '1rem' }}>Ambas ecuaciones representan a la misma recta, por ende, cualquier punto sobre dicha recta es solución válida.</p>
        </div>

        <h2>Resumen Algebraico de Rouché-Frobenius (Adelanto)</h2>
        <p>
          Aunque lo veremos formalmente más adelante (con el Teorema de Rouché-Frobenius basado en rangos de matrices), un SEL de <InlineMath math="n" /> incógnitas será:
        </p>
        <ul className="list-styled">
          <li><strong>SCD</strong> (Solución única) si hay la misma cantidad "pura" de información sin redundancia que de variables.</li>
          <li><strong>SCI</strong> (Infinitas soluciones) si hay menos información efectiva que variables, lo que obliga a tener grados de libertad (parámetros).</li>
        </ul>

      </main>

      <TopicNavigation 
        prevPath="/parcial2/sistemas/definicion-solucion" 
        nextPath="/parcial2/sistemas/incompatibles" 
      />
    
      <AiChatBot 
        topicTitle="Sistemas Compatibles" 
        topicContext="Definición teórica de Sistemas Compatibles Determinados (SCD) e Indeterminados (SCI). Relación con infinitas y únicas soluciones." 
      />
    </div>
  );
};

export default SistemasCompatibles;
