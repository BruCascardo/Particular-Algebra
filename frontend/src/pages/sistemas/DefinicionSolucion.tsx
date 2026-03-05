import React from 'react';
import 'katex/dist/katex.min.css';
import { InlineMath, BlockMath } from 'react-katex';
import TopicHeader from '../../components/TopicHeader';
import TopicNavigation from '../../components/TopicNavigation';
import AiChatBot from '../../components/AiChatBot';
import '../vectores/VectorTopic.css';

const DefinicionSolucion: React.FC = () => {
  return (
    <div className="vector-topic-container">
      <TopicHeader 
        title="1.1. Definición y Conjunto Solución" 
        subtitle="Sistemas de Ecuaciones Lineales (SEL)"
      />

      <main className="topic-content">
        <div className="concept-box">
          <h3>¿Qué es una Ecuación Lineal?</h3>
          <p>
            Una <strong>ecuación lineal</strong> en <InlineMath math="n" /> variables (<InlineMath math="x_1, x_2, \dots, x_n" />) es una expresión algebraica de la forma:
          </p>
          <div className="formula-box">
            <BlockMath math="a_1 x_1 + a_2 x_2 + \dots + a_n x_n = b" />
          </div>
          <p>
            Donde los <InlineMath math="a_i" /> son números reales (coeficientes) y <InlineMath math="b" /> es el término independiente. Lo importante es que las variables están a la primera potencia y no hay productos entre ellas.
          </p>
        </div>

        <h2>Sistemas de Ecuaciones Lineales (SEL)</h2>
        <p>
          Un <strong>Sistema de Ecuaciones Lineales</strong> es un conjunto de <InlineMath math="m" /> ecuaciones lineales simultáneas con <InlineMath math="n" /> incógnitas. Se busca encontrar los valores de las incógnitas que satisfagan simultáneamente <em>todas</em> las ecuaciones del sistema.
        </p>
        
        <div className="formula-box">
          <BlockMath math="\begin{cases} a_{11}x_1 + a_{12}x_2 + \dots + a_{1n}x_n = b_1 \\ a_{21}x_1 + a_{22}x_2 + \dots + a_{2n}x_n = b_2 \\ \vdots \\ a_{m1}x_1 + a_{m2}x_2 + \dots + a_{mn}x_n = b_m \end{cases}" />
        </div>

        <h3>Conjunto Solución</h3>
        <p>
          El <strong>conjunto solución</strong> es el conjunto formado por todas las <InlineMath math="n" />-uplas <InlineMath math="(s_1, s_2, \dots, s_n)" /> de números que, al sustituir a las variables <InlineMath math="x_1, x_2, \dots, x_n" /> respectivamente, hacen que cada ecuación del sistema se reduzca a una proposición verdadera.
        </p>

        <ul className="list-styled">
          <li>Si el sistema tiene solución, se denomina <strong>Compatible</strong>.</li>
          <li>Si el sistema NO tiene solución (la conjunción es absurda), se denomina <strong>Incompatible</strong>.</li>
        </ul>

        <div className="example-box">
          <h4>Ejemplo Simple en 2D</h4>
          <p>
            Un sistema de 2 ecuaciones con 2 incógnitas representa geométricamente a dos rectas en un plano. Encontrar la solución del sistema es equivalente a encontrar los puntos de intersección de ambas rectas.
          </p>
          <BlockMath math="\begin{cases} x + y = 2 \\ 2x - y = 1 \end{cases}" />
          <p>La solución en este caso es la dupla <InlineMath math="(1, 1)" />, y por lo tanto, el sistema es compatible.</p>
        </div>

      </main>

      <TopicNavigation 
        nextPath="/parcial2/sistemas/compatibles" 
      />
    
      <AiChatBot 
        topicTitle="Definición y Solución de SEL" 
        topicContext="Definición de ecuaciones lineales, sistemas mxn, y qué significa el conjunto solución de manera algebraica y conceptual." 
      />
    </div>
  );
};

export default DefinicionSolucion;
