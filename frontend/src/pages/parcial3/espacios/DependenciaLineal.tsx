import React from 'react';
import { InlineMath, BlockMath } from 'react-katex';
import TopicHeader from '../../../components/TopicHeader';
import TopicNavigation from '../../../components/TopicNavigation';
import AiChatBot from '../../../components/AiChatBot';
import './EspaciosTopic.css';

const DependenciaLineal: React.FC = () => {
  return (
    <div className="espacios-topic-container">
      <TopicHeader 
        title="Dependencia e Independencia Lineal" 
        subtitle="Analizando la redundancia en conjuntos de vectores"
      />

      <main className="topic-content">
        <div className="concept-box">
          <h3>El problema de la redundancia</h3>
          <p>
            Al tener un conjunto de vectores, a veces uno de ellos no aporta "nueva información" o una "nueva dirección", porque ya puede ser construido combinando los otros vectores. Esta es la diferencia fundamental entre la dependencia y la independencia lineal.
          </p>
        </div>

        <h2>Dependencia Lineal (L.D.)</h2>
        <p>
          Un conjunto de vectores <InlineMath math="A = \{\vec{v}_1, \vec{v}_2, \dots, \vec{v}_k\}" /> es <strong>linealmente dependiente</strong> si la ecuación dada por la combinación lineal igualada al vector nulo:
        </p>
        <div className="formula-box">
          <BlockMath math="\alpha_1\vec{v}_1 + \alpha_2\vec{v}_2 + \dots + \alpha_k\vec{v}_k = \vec{0}" />
        </div>
        <p>
          Tiene <strong>soluciones no triviales</strong>. Es decir, existe alguna solución donde al menos uno de los escalares <InlineMath math="\alpha_i" /> sea distinto de cero.
        </p>
        <ul className="list-styled">
          <li><strong>Consecuencia geométrica:</strong> Al menos uno de los vectores puede escribirse como una combinación lineal de los demás. Ese vector es "redundante" en la generación de espacios.</li>
          <li>Cualquier conjunto que contenga el vector nulo es automáticamente L.D.</li>
        </ul>

        <h2>Independencia Lineal (L.I.)</h2>
        <p>
          Un conjunto de vectores <InlineMath math="A = \{\vec{v}_1, \vec{v}_2, \dots, \vec{v}_k\}" /> es <strong>linealmente independiente</strong> si la única forma de obtener el vector nulo mediante una combinación lineal es usando escalares que sean todos cero (la solución trivial):
        </p>
        <div className="formula-box">
          <BlockMath math="\alpha_1\vec{v}_1 + \alpha_2\vec{v}_2 + \dots + \alpha_k\vec{v}_k = \vec{0} \implies \alpha_1 = \alpha_2 = \dots = \alpha_k = 0" />
        </div>
        <ul className="list-styled">
          <li><strong>Consecuencia geométrica:</strong> Ningún vector del conjunto puede escribirse como combinación lineal de los otros. Todo vector apunta en una "nueva dirección" independiente de los demás.</li>
          <li>Para dos vectores, son L.I. si y solo si no son múltiplos escalares el uno del otro (no son paralelos).</li>
        </ul>

        <div className="example-box">
          <p><strong>Comprobación mediante Matrices:</strong></p>
          <p>
             Para determinar si un conjunto de vectores en <InlineMath math="\mathbb{R}^n" /> es L.I. o L.D., podemos colocar los vectores como columnas (o filas) de una matriz y:
          </p>
          <ol className="list-styled">
             <li>Resolver el sistema homogéneo igualado a 0.</li>
             <li>O usar el determinante: Si la matriz es cuadrada, los vectores son L.I. si y solo si el <strong>determinante es distinto de cero</strong> (<InlineMath math="\det(A) \neq 0" />). Si el determinante es cero, son L.D.</li>
          </ol>
        </div>

      </main>

      <TopicNavigation 
        prevPath="/parcial3/espacios/combinacion-lineal"
        nextPath="/parcial3/espacios/base-dimension" 
      />

      <AiChatBot 
        topicTitle="Dependencia e Independencia Lineal" 
        topicContext="Diferencia entre dependencia e independencia lineal. Ecuación vectorial y solución trivial vs no trivial. Métodos matriciales y determinantes para verificar independencia lineal." 
      />
    </div>
  );
};

export default DependenciaLineal;
