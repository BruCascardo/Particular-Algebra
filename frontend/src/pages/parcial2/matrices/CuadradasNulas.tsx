import React from 'react';
import 'katex/dist/katex.min.css';
import { InlineMath, BlockMath } from 'react-katex';
import TopicHeader from '../../../components/TopicHeader';
import TopicNavigation from '../../../components/TopicNavigation';
import AiChatBot from '../../../components/AiChatBot';
import '../../vectores/VectorTopic.css';

const CuadradasNulas: React.FC = () => {
  return (
    <div className="vector-topic-container">
      <TopicHeader 
        title="3.3. Matrices Cuadradas y Nulas" 
        subtitle="Símétrica Perfecta y el Vacío Absoluto"
      />

      <main className="topic-content">
        <div className="concept-box">
          <h3>La Matriz Cuadrada</h3>
          <p>
            Al hablar de una <strong>Matriz Cuadrada</strong>, ingresamos en el terreno más denso y estudiado del Álgebra Lineal. El requisito para que una matriz sea denominada "cuadrada" es visualmente evidente: el número total de sus filas (<InlineMath math="m" />) y el número de sus columnas (<InlineMath math="n" />) deben ser <strong>exactamente el mismo</strong>.
          </p>
          <p>
            Matemáticamente, si <InlineMath math="A" /> es de orden <InlineMath math="m \times n" />, diremos sin titubear que es cuadrada si y solo si <InlineMath math="m = n" />. Como redundaría repetir ambos, se acorta a decir que es un arreglo de <em>orden <InlineMath math="n" /></em> sin más, denotado abstractamente como <InlineMath math="A \in \mathbb{R}^{n \times n}" />.
          </p>
        </div>

        <h2>Las Diagonales de la Cuadrada</h2>

        <p>
          Las Matrices Cuadradas son las únicas que albergan geométricamente el concepto pleno de <strong>Diagonales</strong> principales y secundarias en su cuadrícula matemática interna natural.
        </p>

        <h3>1. Diagonal Principal</h3>
        <p>
           La Diagonal Principal traza una línea mental desde el borde superior izquierdo ininterrumpidamente bajando hacia la esquina inferior derecha. 
        </p>
        <p>
           El rasgo algebraico incuestionable de cualquier elemento que logre pisar esta línea fuerte es que su subíndice de posición cumple inexorablemente con un requisito igualador: El índice de su fila coincide al 100% con su columna respectiva. Todo elemento <InlineMath math="a_{ij}" /> donde <InlineMath math="i = j" /> pertenece orgánicamente a la Diagonal Principal.
           (Ejemplos conformantes fijos: <InlineMath math="a_{11}, a_{22}, a_{33}, \dots" />).
        </p>
        <div className="formula-box" style={{ background: 'rgba(50, 60, 100, 0.4)' }}>
          <BlockMath math="\begin{bmatrix} \bold{a_{11}} & a_{12} & a_{13} \\ a_{21} & \bold{a_{22}} & a_{23} \\ a_{31} & a_{32} & \bold{a_{33}} \end{bmatrix}" />
        </div>

        <h3>2. Diagonal Secundaria</h3>
        <p>
           La línea en espejo reverso y en cruzamiento es la Diagonal Secundaria (denotada erróneamente en el secundario a veces como contra-diagonal), transitando del polo superior derecho para morir en el abismo izquierdo inferior.
           Se conforma bajo la norma explícita de todo elemento <InlineMath math="a_{ij}" /> cuya suma de los subíndices empate matemáticamente siempre en <InlineMath math="i + j = n + 1" />.
        </p>
        <div className="example-box">
          <h4>Subíndices del Reverso</h4>
          <p>
            Consideremos una matriz cuadrada de orden <InlineMath math="3 \times 3" /> (Como la de arriba, <InlineMath math="n=3" />). La condición decreta que la suma de sus índices tiene siempre que ser <InlineMath math="3 + 1 = 4" />. 
            Quienes cumplirían son el vértice  <InlineMath math="a_{13} \Rightarrow (1+3=4)" />,  <InlineMath math="a_{22} \Rightarrow (2+2=4)" />,  y <InlineMath math="a_{31} \Rightarrow (3+1=4)" /> respectivamente, delimitando el tajo diagonal innegable de la Secundaria.
          </p>
        </div>

        <h2>La Matriz Nula (El Concepto del Vacío)</h2>
        <p>
          Rompiendo con la obligatoriedad cuadrática o geométrica, surge la omnipresente <strong>Matriz Nula</strong> (habitualmente denotada bajo un cero hiper-trofiado y en negrita abstracta <InlineMath math="\bold{0}" /> o <InlineMath math="O_{m \times n}" /> o una zeta mayúscula en algunos alfabetos lógicos).
        </p>
        <p>
          Es aquel arreglo, de cualquier dimensión que tu creatividad logre forjar (<InlineMath math="2 \times 3" />, <InlineMath math="5 \times 5" />, etc,), donde rigurosamente todos, del primero al último de los elementos alojados en el interior de su estructura y red valen matemáticamente un número <strong>cero absoluto (<InlineMath math="0" />)</strong> sin discusión. Actúa como y es el <em>Elemento Neutro</em> de la adición masiva de matrices a lo largo del globo analítico y en dimensiones superiores como vimos anteriormente en el sistema de solución del hiperplano de los Teoremas SEL Homogéneos abstractos. 
        </p>

      </main>

      <TopicNavigation 
        prevPath="/parcial2/matrices/iguales-filas-columnas"
        nextPath="/parcial2/matrices/triangulares-diagonales" 
      />
    
      <AiChatBot 
        topicTitle="M. Cuadradas y Nulas" 
        topicContext="Desarrollo de Cuadradas simétricas de nxn, distinción matemática profunda de Diagonales principales (i=j uniformes) vs Secundarias cruzadas (i+j=n+1). Y noción rápida de Matrices nulas o neutras en su máxima pureza de ocuparse por infinitos de ceros vectoriales escalados O." 
      />
    </div>
  );
};

export default CuadradasNulas;
