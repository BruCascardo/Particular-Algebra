import React from 'react';
import { InlineMath } from 'react-katex';
import TopicHeader from '../../../components/TopicHeader';
import TopicNavigation from '../../../components/TopicNavigation';
import AiChatBot from '../../../components/AiChatBot';
import './EspaciosTopic.css';

const BaseDimension: React.FC = () => {
  return (
    <div className="espacios-topic-container">
      <TopicHeader 
        title="Bases y Dimensión" 
        subtitle="El andamiaje fundamental de un espacio vectorial"
      />

      <main className="topic-content">
        <div className="concept-box">
          <h3>Base de un Espacio Vectorial</h3>
          <p>
            Un conjunto de vectores <InlineMath math="B = \{\vec{v}_1, \vec{v}_2, \dots, \vec{v}_n\}" /> es una <strong>base</strong> de un espacio vectorial <InlineMath math="V" /> si cumple que forma el "esqueleto" perfecto del espacio. Formalmente, debe cumplir dos condiciones rigurosas al mismo tiempo:
          </p>
          <ul className="list-styled">
            <li><strong>1. Genera a <InlineMath math="V" />:</strong> Todo vector de <InlineMath math="V" /> puede obtenerse como combinación lineal de los vectores de <InlineMath math="B" /> (es decir, <InlineMath math="Gen(B) = V" />).</li>
            <li><strong>2. Es Linealmente Independiente (L.I.):</strong> No hay vectores redundantes en el conjunto <InlineMath math="B" />.</li>
          </ul>
        </div>

        <p>
          La importancia de una base radica en que <strong>todo vector del espacio se puede escribir de forma única</strong> como combinación lineal de los vectores de la base.
        </p>

        <h2>Bases Canónicas</h2>
        <p>
          Existen bases estándar, llamadas <strong>bases canónicas</strong>, que son las más naturales y sencillas para trabajar en los espacios típicos.
        </p>
        <ul className="list-styled">
          <li><strong>En <InlineMath math="\mathbb{R}^2" />:</strong> <InlineMath math="B_c = \{(1,0), (0,1)\}" /> (A menudo llamados <InlineMath math="\mathbf{i}, \mathbf{j}" />)</li>
          <li><strong>En <InlineMath math="\mathbb{R}^3" />:</strong> <InlineMath math="B_c = \{(1,0,0), (0,1,0), (0,0,1)\}" /> (A menudo llamados <InlineMath math="\mathbf{i}, \mathbf{j}, \mathbf{k}" />)</li>
          <li><strong>Polinomios <InlineMath math="\mathbb{P}_2" />:</strong> <InlineMath math="B_c = \{1, x, x^2\}" /></li>
        </ul>

        <div className="concept-box">
          <h3>Dimensión</h3>
          <p>
            La <strong>dimensión</strong> de un espacio vectorial <InlineMath math="V" />, denotada como <InlineMath math="\dim(V)" />, es el número de vectores que tiene cualquiera de sus bases.
          </p>
          <ul className="list-styled">
            <li>Un teorema clave afirma que, aunque un espacio vectorial tiene infinitas bases distintas, <strong>todas tienen exactamente el mismo número de vectores</strong>. Ese número es la dimensión.</li>
            <li>Si la base tiene <InlineMath math="n" /> elementos, la dimensión es <InlineMath math="n" />.</li>
            <li>Ejemplo: <InlineMath math="\dim(\mathbb{R}^n) = n" />, y <InlineMath math="\dim(\mathbb{P}_n) = n + 1" />.</li>
          </ul>
        </div>

        <h2>Relación entre Dimensión, Generadores y L.I.</h2>
        <div className="example-box">
          <p>Si sabemos que un espacio <InlineMath math="V" /> tiene dimensión <InlineMath math="n" />:</p>
          <ol className="list-styled">
            <li>Cualquier conjunto con <strong>más</strong> de <InlineMath math="n" /> vectores es obligatoriamente Linealmente Dependiente (L.D.).</li>
            <li>Cualquier conjunto con <strong>menos</strong> de <InlineMath math="n" /> vectores no puede generar todo <InlineMath math="V" />.</li>
            <li>Un conjunto con exactamente <InlineMath math="n" /> vectores es base si es independiente <strong>o</strong> si genera <InlineMath math="V" /> (al cumplirse una, se cumple automáticamente la otra).</li>
          </ol>
        </div>

      </main>

      <TopicNavigation 
        prevPath="/parcial3/espacios/dependencia-lineal"
        nextPath="/parcial3/espacios/cambio-base" 
      />

      <AiChatBot 
        topicTitle="Bases y Dimensión" 
        topicContext="Definición estricta de base (generador y LI). Dimensión de un espacio vectorial y bases canónicas. Relación en cardinalidad entre dimensión y conjuntos L.I. o generadores." 
      />
    </div>
  );
};

export default BaseDimension;
