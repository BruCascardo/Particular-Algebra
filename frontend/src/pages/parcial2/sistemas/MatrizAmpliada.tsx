import React from 'react';
import 'katex/dist/katex.min.css';
import { InlineMath, BlockMath } from 'react-katex';
import TopicHeader from '../../../components/TopicHeader';
import TopicNavigation from '../../../components/TopicNavigation';
import AiChatBot from '../../../components/AiChatBot';
import '../../vectores/VectorTopic.css';

const MatrizAmpliada: React.FC = () => {
  return (
    <div className="vector-topic-container">
      <TopicHeader 
        title="1.4. Matriz Ampliada y Transformaciones Elementales" 
        subtitle="De Ecuaciones a Matrices y Operaciones Equivalentes"
      />

      <main className="topic-content">
        <div className="concept-box">
          <h3>La Notación Matricial</h3>
          <p>
            Trabajar con las variables algebraicas (<InlineMath math="x, y, z" />) explícitamente a lo largo de procesos largos resulta tedioso y propenso a errores. Por esto, abstraemos el sistema lineal a una <strong>Matriz</strong>.
          </p>
          <p>
            Un sistema se puede expresar matricialmente como el producto de una matriz de coeficientes <InlineMath math="A" /> por un vector columna de incógnitas <InlineMath math="\vec{x}" />, igualado a un vector columna de constantes <InlineMath math="\vec{b}" />:
          </p>
          <BlockMath math="A\vec{x} = \vec{b}" />
        </div>

        <h2>La Matriz Ampliada</h2>

        <p>
          Para resolver el sistema aplicando el método de Gauss o Gauss-Jordan, agrupamos los coeficientes de las variables (la matriz <InlineMath math="A" />) añadiendo como última columna los términos independientes (el vector <InlineMath math="\vec{b}" />).
        </p>
        <p>
          Esta "fusión" se denomina <strong>Matriz Ampliada</strong>, y geométricamente representa de forma pura el hiperplano y cruce de todo nuestro sistema de ecuaciones sin el "ruido visual" de las letras.
        </p>

        <div className="formula-box" style={{ background: 'rgba(50, 60, 100, 0.4)' }}>
           <p style={{ margin: 0, fontSize: '1rem', color: '#e0e1dd' }}>Formato de una Matriz Ampliada <InlineMath math="[A|b]" />:</p>
          <BlockMath math="\left[ \begin{array}{cccc|c} a_{11} & a_{12} & \dots & a_{1n} & b_1 \\ a_{21} & a_{22} & \dots & a_{2n} & b_2 \\ \vdots & \vdots & \ddots & \vdots & \vdots \\ a_{m1} & a_{m2} & \dots & a_{mn} & b_m \end{array} \right]" />
        </div>

        <h2>Transformaciones Elementales por Fila</h2>
        <p>
          Para resolver este arreglo (llevarlo a su forma escalonada), podemos manipular sus filas sin alterar en lo más mínimo el <em>Conjunto Solución</em> del sistema. Dos matrices que representan sistemas lineales con la misma solución se denominan <strong>Sistemas Equivalentes</strong> (notación: <InlineMath math="\sim" />).
        </p>
        <p>Las 3 operaciones fundamentales permitidas son:</p>

        <ol className="list-styled" style={{ marginTop: '1rem' }}>
          <li>
            <strong>Intercambio de Filas (Permutación):</strong> 
            <p>Se pueden alterar el orden posicional de dos filas, escribiendo por ejemplo <InlineMath math="R_i \leftrightarrow R_j" />.</p>
          </li>
          <li>
            <strong>Múltiplo Escalar (Escalado):</strong> 
            <p>Se puede multiplicar todo el contenido de una fila completa por un número real cualquiera <InlineMath math="k" /> diferente de nulo. <InlineMath math="R_i \leftarrow k \cdot R_i" /> (donde <InlineMath math="k \neq 0" />).</p>
          </li>
          <li>
            <strong>Combinación Lineal (Reemplazo):</strong> 
            <p>Es la operación principal para la eliminación. Podemos reemplazar el contenido de una fila, con la suma armónica de esa misma fila sumando otra fila multiplicada previamente por un escalar. <InlineMath math="R_i \leftarrow R_i + k \cdot R_j" />.</p>
          </li>
        </ol>

        <div className="example-box">
          <h4>Ejemplo: Aplicando un Reemplazo</h4>
          <p>Tengamos las siguientes dos filas de una matriz (1 y 2):</p>
          <BlockMath math="\begin{bmatrix} 1 & 2 & | & 5 \\ 3 & 4 & | & 7 \end{bmatrix}" />
          <p>
            Queremos eliminar el <InlineMath math="3" /> de la fila 2 (<InlineMath math="R_2" />). 
            Podemos hacer la operación <InlineMath math="R_2 \leftarrow R_2 - 3 \cdot R_1" />.
          </p>
          <p>
            Mentalmente:<br/>
            Fila 2 origin: <InlineMath math="[3, 4, |, 7]" /><br/>
            -3 * Fila 1: <InlineMath math="[-3, -6, |, -15]" /><br/>
            Suma resulta en <strong>Fila 2 Nueva</strong>: <InlineMath math="[0, -2, |, -8]" />
          </p>
          <p>La matriz equivalente generada sería:</p>
          <BlockMath math="\sim \begin{bmatrix} 1 & 2 & | & 5 \\ 0 & -2 & | & -8 \end{bmatrix}" />
        </div>

      </main>

      <TopicNavigation 
        prevPath="/parcial2/sistemas/incompatibles"
        nextPath="/parcial2/sistemas/pivote" 
      />
    
      <AiChatBot 
        topicTitle="Matriz Ampliada y Transformaciones Elementales" 
        topicContext="Elaboración, abstracción e iniciación en la notación matricial ampliada Ax=b. Identificación de Transformaciones elementales que preservan o mantienen sistemas un estado equivalente de resoluciones conjuntas entre intercambios, múltiplos escalares o sumas y restas combinadas." 
      />
    </div>
  );
};

export default MatrizAmpliada;
