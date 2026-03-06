import React from 'react';
import { InlineMath, BlockMath } from 'react-katex';
import TopicHeader from '../../../components/TopicHeader';
import TopicNavigation from '../../../components/TopicNavigation';
import AiChatBot from '../../../components/AiChatBot';
import './AutovaloresTopic.css';

const DiagonalizacionOrtogonal: React.FC = () => {
  return (
    <div className="av-topic-container">
      <TopicHeader 
        title="Diagonalización Ortogonal" 
        subtitle="Las matrices simétricas y el Teorema Espectral"
      />

      <main className="topic-content">
        <div className="concept-box">
          <h3>La Diagonalización Suprema</h3>
          <p>
            Vimos que una matriz ordinaria se diagonaliza buscando una matriz de paso <InlineMath math="P" /> (que agrupa sus autovectores) y hallando su inversa <InlineMath math="P^{-1}" /> para armar <InlineMath math="A = PDP^{-1}" />. Pero si tenemos suerte, podemos construir una matriz de paso tan perfecta (compuesta por autovectores <strong>ortogonales y unitarios</strong>) que su inversa coincida exactamente con su matriz transpuesta.
          </p>
          <div className="formula-box">
             <BlockMath math="P^{-1} = P^T \implies P^T P = I" />
          </div>
          <p>
            A este tipo de matrices se les llama <strong>Matrices Ortogonales</strong>.
            Si existe semejante matriz <InlineMath math="P" /> ortogonal que logre que <InlineMath math="P^T A P = D" />, decimos que la matriz <InlineMath math="A" /> es <strong>Ortogonalmente Diagonalizable</strong>.
          </p>
        </div>

        <h2>El Teorema Espectral (Para Matrices Simétricas Reales)</h2>
        <p>
          Este teorema es posiblemente el resultado más hermoso y resolutivo del Álgebra Lineal aplicada:
        </p>

        <ul className="list-styled">
          <li><strong>Condición Necesaria y Suficiente:</strong> Una matriz cuadrada <InlineMath math="A" /> de coeficientes reales es ortogonalmente diagonalizable <strong>si y solo si es una Matriz Simétrica</strong> (es decir, <InlineMath math="A = A^T" />).</li>
        </ul>

        <p>
          Si tú te topas con una matriz simétrica en un examen, el Teorema Espectral te garantiza inmediatamente, sin ningún cálculo, todos estos regalos matemáticos:
        </p>

        <div className="example-box">
          <p><strong>Los Regalos del Teorema Espectral:</strong></p>
          <ol className="list-styled">
            <li>La matriz <strong>siempre</strong> tendrá <InlineMath math="n" /> autovalores puramente reales (su polinomio característico nunca tendrá raíces complejas inalcanzables).</li>
            <li>Nunca será defectuosa. Para cualquier autovalor repetido, la M. Geométrica acompañará a la M. Algebraica sin chistar. Por tanto, <strong>toda matriz simétrica siempre será diagonalizable</strong> de forma ordinaria.</li>
            <li><strong>¡Ortogonalidad Automática!</strong> Los autovectores correspondientes a autovalores <em>distintos</em> salen del horno siendo ortogonales entre sí (su forma un ángulo de 90° directamente, sin que tengas que forzarlo).</li>
          </ol>
        </div>

        <h2>Receta para Diagonalizar Ortogonalmente</h2>
        <p>
          ¿Cómo construir la mítica matriz <InlineMath math="P" /> ortogonal para una matriz simétrica <InlineMath math="A" />?
        </p>
        <ol className="list-styled">
          <li>Calcula los autovalores y halla el espacio propio de cada uno.</li>
          <li>Como dijimos, los vectores de autoespacios diferentes ya son ortogonales mágicamente. ¡Pero cuidado! Si un autoespacio tiene <strong>dimensión mayor a 1</strong> (proveniente de un autovalor repetido), sus vectores base internos no garantizan ser ortogonales entre sí. Deberás aplicarles <strong>Gram-Schmidt</strong> para ortogonalizar exclusivamente esa base repetida.</li>
          <li>Una vez que posees un set de <InlineMath math="n" /> autovectores en los que absolutamente todos son perpendiculares a todos, procedes a <strong>normalizarlos</strong> a todos (dividiendo cada uno por su propia norma matemática).</li>
          <li>Apilas esos versores brillantes como columnas, ¡y acabas de construir a <InlineMath math="P" /> ortogonal! Por otro lado, <InlineMath math="D" /> se arma del mismo modo ordinario, situando sus respectivos autovalores paralelos a las columnas en la diagonal.</li>
        </ol>

      </main>

      <TopicNavigation 
        prevPath="/parcial3/autovalores/diagonalizacion" 
      />

      <AiChatBot 
        topicTitle="Diagonalización Ortogonal y Teorema Espectral" 
        topicContext="Definición de matriz de paso ortogonal P^-1 = P^T. Exigencia irrestricta de que la matriz A debe ser simétrica (A=A^T). Los corolarios del Teorema Espectral: autovalores siempre reales, M.G. siempre = M.A., autovectores de autovalores distintos siempre ortogonales nativamente. Receta para hallarlos implementando Gram-Schmidt solo a autoespacios mayores a dimensión 1, y finalizando con normalización extrema del espacio." 
      />
    </div>
  );
};

export default DiagonalizacionOrtogonal;
