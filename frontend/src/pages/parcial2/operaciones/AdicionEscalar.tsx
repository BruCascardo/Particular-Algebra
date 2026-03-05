import React from 'react';
import 'katex/dist/katex.min.css';
import { InlineMath, BlockMath } from 'react-katex';
import TopicHeader from '../../../components/TopicHeader';
import TopicNavigation from '../../../components/TopicNavigation';
import AiChatBot from '../../../components/AiChatBot';
import '../../vectores/VectorTopic.css';

const AdicionEscalar: React.FC = () => {
  return (
    <div className="vector-topic-container">
      <TopicHeader 
        title="4.1. Adición de Matrices y Escalares" 
        subtitle="Suma Equivalente y Amplificación Distributiva"
      />

      <main className="topic-content">
        <div className="concept-box">
          <h3>La Ley de la Conformidad en Sumas</h3>
          <p>
            Al igual que en la vida real no puedes sumar 3 manzanas con 2 sillas y esperar un resultado consistente, en Álgebra Lineal no puedes sumar dos matrices que no sean de especies compatibles.
          </p>
          <p>
            Requisito Inquebrantable: Para poder sumar o restar dos matrices <InlineMath math="A" /> y <InlineMath math="B" />, <strong>ambas deben obligatoriamente poseer la misma dimensión exacta</strong> (mismo número de filas y mismo número de columnas, <InlineMath math="m \times n" />). Cuando cumplen esto, se les denomina Matrices "Conformes para la Adición".
          </p>
        </div>

        <h2>Adición y Sustracción (<InlineMath math="A \pm B" />)</h2>

        <p>
          Una vez aprobada la conformidad del orden, la matemática detrás de la adición es extremadamente empírica y directa: <strong>Se suman o restan los elementos uno a uno con su contraparte posicional</strong> exacta.
        </p>
        <p>
          Si definimos una Matriz resultante <InlineMath math="C = A + B" />, cada uno de sus elementos internos nacerán desde la función base <InlineMath math="c_{ij} = a_{ij} + b_{ij}" /> para todo <InlineMath math="i, j" />.
        </p>

        <div className="example-box">
          <h4>Visto Numéricamente</h4>
          <p>Tengamos dos matrices cuadradas de orden <InlineMath math="2" />:</p>
          <BlockMath math="A = \begin{bmatrix} 4 & 1 \\ -2 & 3 \end{bmatrix} \quad B = \begin{bmatrix} 1 & 5 \\ 6 & 0 \end{bmatrix}" />
          <p>
            Para hallar la matriz <InlineMath math="C = A + B" />, emparejamos casillas gemelas:
          </p>
          <BlockMath math="C = \begin{bmatrix} (4+1) & (1+5) \\ (-2+6) & (3+0) \end{bmatrix} \Rightarrow C = \begin{bmatrix} 5 & 6 \\ 4 & 3 \end{bmatrix}" />
        </div>

        <h2>Producto por un Escalar Matemático (<InlineMath math="k \cdot A" />)</h2>
        <p>
           De manera muy distinta a sumar, <em>Multiplicar</em> una Matriz entera por un escalar (un número real suelto que vive de manera unidimensional, llamémoslo <InlineMath math="k" />) es un acto de fuerza bruta en donde <strong>todos y cada uno</strong> de los habitantes de la retícula matricial se ven forzados a multiplicarse distributivamente por ese invasor "<InlineMath math="k" />".
        </p>

        <div className="formula-box" style={{ background: 'rgba(50, 60, 100, 0.4)' }}>
           <p style={{ margin: 0, fontSize: '1rem', color: '#e0e1dd' }}>Amplificación por Escalar <InlineMath math="k" />:</p>
          <BlockMath math="C = k \cdot A \iff c_{ij} = k \cdot a_{ij} \quad \forall i,j" />
        </div>

        <div className="example-box" style={{ borderColor: '#a8c5ff' }}>
          <h4>El Efecto Multiplicador en Acción</h4>
          <p>
            Usemos la Matriz <InlineMath math="A" /> de arriba y multipliquémosla por un factor de <InlineMath math="k = 3" />:
          </p>
          <BlockMath math="3 \cdot A = 3 \cdot \begin{bmatrix} 4 & 1 \\ -2 & 3 \end{bmatrix} = \begin{bmatrix} (3 \cdot 4) & (3 \cdot 1) \\ (3 \cdot -2) & (3 \cdot 3) \end{bmatrix} = \begin{bmatrix} 12 & 3 \\ -6 & 9 \end{bmatrix}" />
        </div>

        <p>Esta es la misma operación mental que ejecuta y habilita internamente la función de las Transformaciones Elementales vistas en el método de Gauss (multiplicar toda una fila por un coeficiente no nulo).</p>

      </main>

      <TopicNavigation 
        prevPath="/parcial2/matrices/escalar"
        nextPath="/parcial2/operaciones/transposicion" 
      />
    
      <AiChatBot 
        topicTitle="Suma e Interacción Escalar" 
        topicContext="Reglas de conformidad geométrica inquebrantable para que A+B sea lícito en el multiverso. Cómo un Escalar unitario invasor 'k' aplica influencia y distribución perfecta a todo habitante interno de una matriz por igual." 
      />
    </div>
  );
};

export default AdicionEscalar;
