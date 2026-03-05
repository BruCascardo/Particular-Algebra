import React from 'react';
import 'katex/dist/katex.min.css';
import { InlineMath, BlockMath } from 'react-katex';
import TopicHeader from '../../../components/TopicHeader';
import TopicNavigation from '../../../components/TopicNavigation';
import AiChatBot from '../../../components/AiChatBot';
import '../../vectores/VectorTopic.css';

const Compatibles: React.FC = () => {
  return (
    <div className="vector-topic-container">
      <TopicHeader 
        title="1.2. Sistemas Compatibles" 
        subtitle="Sistemas con Varias o Única Solución"
      />

      <main className="topic-content">
        <div className="concept-box">
          <h3>Un Sistema es Compatible si tiene al menos Una Solución.</h3>
          <p>
            Cuando al menos una combinación de valores numéricos para las incógnitas (<InlineMath math="x_1, x_2, \dots" />) satisface simultáneamente todas las ecuaciones de nuestro Sistema Lineal, lo clasificamos como <strong>Compatible</strong> (en inglés, "Consistent").
          </p>
          <p>
            Esto significa geométricamente que los hiperplanos/rectas/planos descritos por las ecuaciones intersectan, en su conjunto, en uno o más puntos.
          </p>
        </div>

        <h2>Tipos de Sistemas Compatibles</h2>

        <h3>1. Compatible Determinado (Solución Única)</h3>
        <p>
          El sistema tiene <strong>exactamente una solución</strong>. Todas las rectas o planos del sistema intersecan precisamente en un único punto geométrico. Esto comúnmente ocurre cuando tenemos la misma cantidad de ecuaciones "esenciales" o linealmente independientes que incógnitas por resolver, y nos otorgan un valor específico e irreemplazable para cada incógnita.
        </p>

        <div className="example-box">
          <h4>Ejemplo: Compatible Determinado</h4>
          <p>Toma el siguiente sistema simple en <InlineMath math="\mathbb{R}^2" />:</p>
          <BlockMath math="\begin{cases} x + y = 3 \\ x - y = 1 \end{cases}" />
          <p>
            Al resolverlo (por ejemplo sumando ambas ecuaciones), vemos inmediatamente que <InlineMath math="2x = 4 \Rightarrow x=2" /> y de la misma manera <InlineMath math="y=1" />.
          </p>
          <p>
             La solución es el punto único <InlineMath math="(x,y) = (2,1)" /> representativo del cruce de las dos hiperrectas.
          </p>
        </div>

        <h3>2. Compatible Indeterminado (Infinitas Soluciones)</h3>
        <p>
          El sistema tiene un conjunto solución con <strong>infinitas soluciones</strong>. Los hiperplanos coinciden o intersecan de forma tal que no se reducen a un punto (por ejemplo, los planos se intersecan a lo largo de una recta entera, o ambos coinciden en el mismo plano).
        </p>
        <p>
          Algebraicamente, esta situación se da cuando después de reducir las ecuaciones, quedan menos ecuaciones linealmente independientes (no redundantes) que variables incógnita. Existen <strong>variables libres</strong> en las cuales las demás variables dependen (sistemas paramétricos).
        </p>

        <div className="example-box">
          <h4>Ejemplo: Compatible Indeterminado</h4>
          <p>Mira este otro sistema en <InlineMath math="\mathbb{R}^2" />:</p>
          <BlockMath math="\begin{cases} x + 2y = 4 \\ 2x + 4y = 8 \end{cases}" />
          <p>
            La segunda ecuación es solo la primera multiplicada por 2. Es decir, son <em>linealmente dependientes</em>. Son geométricamente <em>exactamente la misma recta</em>, superpuestas una encima de la otra.
          </p>
          <p>
            Todo punto en la primera recta también está en la segunda. Al despejar <InlineMath math="x" /> en base a un parámetro <InlineMath math="y" />: 
          </p>
          <BlockMath math="x = 4 - 2y" />
          <p>
            Las soluciones se expresan como un conjunto paramétrico: <InlineMath math="\{(4-2y,\;y) \mid y \in \mathbb{R}\}" /> para cualquier valor real dado a <InlineMath math="y" />.
          </p>
        </div>

      </main>

      <TopicNavigation 
        prevPath="/parcial2/sistemas/definicion-solucion"
        nextPath="/parcial2/sistemas/incompatibles" 
      />
    
      <AiChatBot 
        topicTitle="Sistemas Compatibles" 
        topicContext="SEL Compatibles. Diferenciación geométrica y algebraica entre Compatibles Determinados (solución única, p.ej líneas que cruzan en un punto) y Compatibles Indeterminados (infinitas soluciones, dependencia lineal o coincidentes)." 
      />
    </div>
  );
};

export default Compatibles;
