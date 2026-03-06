import React from 'react';
import { InlineMath, BlockMath } from 'react-katex';
import TopicHeader from '../../../components/TopicHeader';
import TopicNavigation from '../../../components/TopicNavigation';
import AiChatBot from '../../../components/AiChatBot';
import './EspaciosTopic.css';

const CambioBase: React.FC = () => {
  return (
    <div className="espacios-topic-container">
      <TopicHeader 
        title="Coordenadas y Cambio de Base" 
        subtitle="Un mismo vector, distintas perspectivas"
      />

      <main className="topic-content">
        <div className="concept-box">
          <h3>Sistemas de Coordenadas</h3>
          <p>
            Un mismo vector se puede representar de diferentes formas dependiendo del sistema de referencia o la "base" que utilicemos. Al escribir un vector <InlineMath math="\vec{v}" /> en una base ordenada específica <InlineMath math="B = \{\vec{u}_1, \vec{u}_2, \dots, \vec{u}_n\}" />, los escalares que multiplican a los vectores de la base son únicos.
          </p>
          <div className="formula-box">
             <InlineMath math="\vec{v} = c_1\vec{u}_1 + c_2\vec{u}_2 + \dots + c_n\vec{u}_n" />
          </div>
          <p>
            El vector de coordenadas de <InlineMath math="\vec{v}" /> respecto a esa base, denotado como <InlineMath math="[\vec{v}]_B" />, se forma colocando esos escalares en forma de columna:
          </p>
          <div className="formula-box">
            <BlockMath math="[\vec{v}]_B = \begin{pmatrix} c_1 \\ c_2 \\ \vdots \\ c_n \end{pmatrix}" />
          </div>
        </div>

        <h2>La Matriz de Cambio de Base (o Transición)</h2>
        <p>
          Si disponemos de dos bases diferentes <InlineMath math="B" /> ("base vieja") y <InlineMath math="B'" /> ("base nueva") en el mismo espacio vectorial, podemos convertir las coordenadas de un vector en <InlineMath math="B" /> directamente a coordenadas en <InlineMath math="B'" /> mediante una multiplicación matricial:
        </p>

        <div className="formula-box">
          <BlockMath math="[\vec{v}]_{B'} = P_{B \to B'} \, [\vec{v}]_B" />
        </div>

        <ul className="list-styled">
          <li><strong><InlineMath math="P_{B \to B'}" /></strong> es la llamada "Matriz de Cambio de Base" de <InlineMath math="B" /> a <InlineMath math="B'" />.</li>
          <li>Sus <strong>columnas</strong> son los vectores de la base vieja <InlineMath math="B" /> escritos usando las coordenadas de la base nueva <InlineMath math="B'" />. En símbolos: <br/> <InlineMath math="P = \Big( [\vec{u}_1]_{B'} \mid [\vec{u}_2]_{B'} \mid \dots \mid [\vec{u}_n]_{B'} \Big)" />.</li>
        </ul>

        <div className="example-box">
          <p><strong>Propiedades asombrosas:</strong></p>
          <ul className="list-styled">
            <li>La matriz de cambio de base es siempre <strong>inversible</strong> porque las bases están formadas por vectores L.I.</li>
            <li>Para volver de la base nueva a la vieja, usamos la inversa: <InlineMath math="P_{B' \to B} = (P_{B \to B'})^{-1}" />.</li>
          </ul>
        </div>

        <h2>Un consejo práctico</h2>
        <p>
          El caso más frecuente es cambiar desde cualquier base arbitraria <InlineMath math="B" /> a la base canónica <InlineMath math="E" />. Si los vectores de <InlineMath math="B" /> ya están dados en sus componentes estándar, entonces la matriz <InlineMath math="P_{B \to E}" /> se forma simplemente poniendo los vectores de <InlineMath math="B" /> como columnas de la matriz. Por lo tanto:
        </p>
        <div className="formula-box">
          <BlockMath math="\vec{v} = P_{B \to E} \, [\vec{v}]_B" />
        </div>
        <p>
          Y para encontrar <InlineMath math="[\vec{v}]_B" /> a partir del vector estándar, despejamos usando la inversa:
        </p>
        <div className="formula-box">
          <BlockMath math="[\vec{v}]_B = (P_{B \to E})^{-1} \, \vec{v}" />
        </div>

      </main>

      <TopicNavigation 
        prevPath="/parcial3/espacios/base-dimension"
      />

      <AiChatBot 
        topicTitle="Coordenadas y Matriz de Cambio de Base" 
        topicContext="Vectores de coordenadas respecto a bases ordenadas. Construcción de la matriz de cambio de base, propiedades, invertibilidad y su uso para transformar componentes de vectores entre diferentes sistemas de referencia." 
      />
    </div>
  );
};

export default CambioBase;
