import React from 'react';
import 'katex/dist/katex.min.css';
import { InlineMath, BlockMath } from 'react-katex';
import TopicHeader from '../../../components/TopicHeader';
import TopicNavigation from '../../../components/TopicNavigation';
import AiChatBot from '../../../components/AiChatBot';
import '../../vectores/VectorTopic.css';

const Incompatibles: React.FC = () => {
  return (
    <div className="vector-topic-container">
      <TopicHeader 
        title="1.3. Sistemas Incompatibles" 
        subtitle="Cuando el Conjunto Solución es el Vacío"
      />

      <main className="topic-content">
        <div className="concept-box">
          <h3>Un Sistema es Incompatible si Nunca tiene Solución.</h3>
          <p>
            Se denomina a un sistema <strong>Incompatible</strong> (en inglés "Inconsistent") cuando no contiene absolutamente ningún vector de valores <InlineMath math="(s_1, s_2, \dots, s_n)" /> que satisfagan simultáneamente de nuevo todas las ecuaciones iniciales.
          </p>
          <p>
            El <strong>Conjunto Solución</strong> del sistema es un conjunto vacío universal: <InlineMath math="\emptyset \{\}" />.
          </p>
        </div>

        <h2>Evidencia Algebraica de Inconsistencia</h2>

        <p>
          ¿Cómo nos damos cuenta algebraicamente trabajando el sistema que este no tiene solución posible? Durante el proceso de eliminación e intentando resolver el sistema obtienes una <strong>contradicción matemática</strong> irrefutable.
        </p>
        <p>
          Esto sucede típicamente cuando te encuentras con una ecuación donde las variables despejadas de un lado son idénticas a otra ecuación, pero el término independiente resulta distinto. Lo que inevitablemente te llevará a algo del tipo:
        </p>

        <div className="formula-box" style={{ background: 'rgba(50, 60, 100, 0.4)' }}>
           <p style={{ margin: 0, fontSize: '1rem', color: '#e0e1dd' }}>La Inconsistencia en Forma Ecuacional Algorítmica:</p>
          <BlockMath math="0x_1 + 0x_2 + \dots + 0x_n = k" />
          <p style={{ textAlign: "center", fontStyle: "italic", marginTop: "1rem" }}>¡Donde <InlineMath math="k" /> es siempre un número Distinto a Cero (<InlineMath math="k \neq 0" />)!</p>
          <BlockMath math="0 = k" />
        </div>

        <p>Dado que no existe combinación alguna de variables que multiplicadas por cero puedan transformarlo por arte de magia en un número que no sea cero, es una forma algebraica de decir que el sistema no puede resolverse.</p>

        <div className="example-box">
          <h4>Interpretarlo Geométricamente. ¿Por qué Pasa?</h4>
          <p>Si evaluamos un sistema en <InlineMath math="\mathbb{R}^2" /> que sea incompatible:</p>
          <BlockMath math="\begin{cases} 3x - y = 5 \\ -6x + 2y = 4 \end{cases}" />
          <p>
            Tratemos de resolverlo. Al multiplicar toda la primera ecuación de la izquierda por <InlineMath math="-2" /> obtenemos <InlineMath math="-6x + 2y = -10" />.
            El lado izquierdo resulta igual al de la segunda ecuación del sistema. 
            Si restas la segunda menos la primera, se anulan variables pero no constantes, quedando: <InlineMath math="0 = -6" />.
          </p>
          <p>
            <strong>Geométricamente</strong>: Este absurdo representa que hemos introducido dos líneas rectas que tienen el mismo ángulo relativo (misma pendiente, o vector normal múltiple), son <strong>rectas estrictamente paralelas</strong>.
          </p>
          <p>
            Estas en la realidad espacial o hiper-espacial (planos o hiperplanos), nunca de los nuncas convergerán ni se intersecan, por más cerca que estén ubicadas. Resultando en el cruce un total y perpetuo vacío.
          </p>
        </div>

      </main>

      <TopicNavigation 
        prevPath="/parcial2/sistemas/compatibles"
        nextPath="/parcial2/sistemas/matriz-ampliada" 
      />
    
      <AiChatBot 
        topicTitle="Sistemas Incompatibles" 
        topicContext="SEL Incompatibles (conjunto u sistema vacío). Interpretación geométrica de este suceso, en donde las formas representativas que componen a las ecuaciones nunca llegarán a tocarse y cruzar en todo su extensión." 
      />
    </div>
  );
};

export default Incompatibles;
