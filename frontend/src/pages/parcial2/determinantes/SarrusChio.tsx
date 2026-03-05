import React from 'react';
import 'katex/dist/katex.min.css';
import { InlineMath, BlockMath } from 'react-katex';
import TopicHeader from '../../../components/TopicHeader';
import TopicNavigation from '../../../components/TopicNavigation';
import AiChatBot from '../../../components/AiChatBot';
import '../../vectores/VectorTopic.css';

const SarrusChio: React.FC = () => {
  return (
    <div className="vector-topic-container">
      <TopicHeader 
        title="6.2. Reglas de Sarrus y Chío" 
        subtitle="Atajos Tácticos para la Reducción Dimensional"
      />

      <main className="topic-content">
        <div className="concept-box">
          <h3>Calculadoras Humanas </h3>
          <p>
             Resolver por el Teorema General de Laplace desmenuzando Adjuntos y Cofactores un Determinante tan grande como un <InlineMath math="4 \times 4" /> a pie, puede tardar horas de multiplicaciones desgastantes. Por obra grata, dos matemáticos inventaron sendos métodos infalibles que el mundo emplea a la fecha para obviar el cansancio y evadir las sumatorias infinitas cruzadas reduciendo inteligentemente el espacio.
          </p>
        </div>

        <h2>1. La Regla de Sarrus (Exclusiva para <InlineMath math="3 \times 3" />)</h2>

        <p>
          Esta sagrada Regla geométrica ideada por Pierre Frédéric Sarrus sirve y funciona categóricamente si, y solo si, la matriz en tu escritorio asienta firmemente en el orden exacto y riguroso de <strong>3 filas por 3 columnas</strong>. Jamás puede ni debe invocarse en matrices 4x4 o de longitud mayor.
        </p>

        <div className="example-box">
          <h4>El Método Práctico Visual de Sarrus</h4>
          <p>Dado el determinante puro de orden tres <InlineMath math="|A|" />:</p>
          <BlockMath math="\begin{vmatrix} a_{11} & a_{12} & a_{13} \\ a_{21} & a_{22} & a_{23} \\ a_{31} & a_{32} & a_{33} \end{vmatrix}" />
          <p><strong>Paso Magia 1:</strong> Tú mental o físicamente extiendes el pizarrón <em>copiando las dos primeras Columnas</em> enteras de forma idéntica, pegándolas foráneas hacia la derecha final como anexos estiradores del espacio:</p>
          <div style={{ padding: '1rem', background: '#2c3e50', borderRadius: '8px', color: '#ecf0f1', margin: '1rem 0', fontFamily: 'monospace', textAlign: 'center' }}>
            | A B C | <b>A B</b> <br/>
            | D E F | <b>D E</b> <br/>
            | G H I | <b>G H</b> <br/>
          </div>
          <p><strong>Paso Magia 2:</strong> Atraviesas con tu pluma las 3 posibles Diagonales Principales (descendentes) y las multiplicas de frente sumando sus tres macros entre sí: <InlineMath math="(AEI + BFG + CDH)" />.</p>
          <p><strong>Paso Magia 3:</strong> Atraviesas reversa tres Diagonales Secundarias (ascendentes desde abajo a la izquierda hacia arriba) multiplicándolas... ¡pero ahora les sustraes fuertemente un signo menos a todo el gran bloque conjurado global! <InlineMath math="-(GEC + HFA + IDB)" />.</p>
          <p>La sumatoria colateral pura de los trillizos, positiva y negativa, arroja inquebrantable el volumen final determinístico <InlineMath math="|A|" />.</p>
        </div>

        <h2>2. La Regla de Chío (Reducción por Pivotaje)</h2>
        <p>
           Cuando la matriz que enfrentas asciende en terror excediendo longitudes de orden superior (Como las infames <InlineMath math="4 \times 4" />, <InlineMath math="5 \times 5" />), la humanidad de Sarrus perece inoperante y el universo apela a las leyes de reducción del maestro <em>Felice Chió</em>.
        </p>
        
        <div className="formula-box" style={{ background: 'rgba(50, 60, 100, 0.4)' }}>
           <p style={{ margin: 0, fontSize: '1rem', color: '#e0e1dd' }}>El Objetivo: Fabricar un Asesino de Filas/Columnas</p>
           <p style={{ marginTop: '0.5rem', fontSize: '0.85rem' }}>El fin de Chio es transmutar tu enorme determinante original apoyándote en las inofensivas  <strong>Operaciones Elementales Fila</strong> de Gauss hasta lograr acorralar todo e infestar artificialmente una Columna (o Fila entera) repleta y plagada estrictamente al 100% por Ceros (<InlineMath math="0" />) ... dejando a propósito a la vista aislado a un simple y mortal ocupante pivote, idealmente un Uno (<InlineMath math="1" />).</p>
        </div>

        <div className="example-box" style={{ borderColor: '#a8c5ff' }}>
          <h4>El Golpe de Gracia por Laplace Guiada</h4>
          <p>
            Imagina que luego de manipular restando Fila2-Fila1 y parecidos, lograste mágicamente este monstruo modificado equivalente equivalente al determinante original:
          </p>
          <BlockMath math="\begin{vmatrix} 4 & \mathbf{1} & 8 & 3 \\ 2 & \mathbf{0} & 7 & 6 \\ -5 & \mathbf{0} & 9 & -2 \\ 6 & \mathbf{0} & -4 & 1 \end{vmatrix}" />
          <p>
            Como notarás a plena vista, la Columna 2 es la que ha sido emboscada. Ahora, despliegas triunfal el temido Teorema Analítico de Cofactores sobre esa gloriosa columna. Al multiplicar el valor real de cada caja, como tres de ellos son un asombroso "0", ¡se aniquilarán todos aquellos sub-menores grandes instantáneamente extinguiéndose de la faz del cálculo pesado!
          </p>
          <BlockMath math="|A| = \cancel{0 \cdot A_{22}} + \cancel{0 \cdot A_{32}} + \cancel{0 \cdot A_{42}} + ( 1 \cdot A_{12} ) " />
          <p>
            Resumiéndose abismalmente a: <br/> <InlineMath math="\bold{|A| = 1 \cdot (-1)^{1+2} \cdot \begin{vmatrix} 2 & 7 & 6 \\ -5 & 9 & -2 \\ 6 & -4 & 1 \end{vmatrix} }" />. <br/><br/>
            Y voilà: Logramos milagrosamente <strong>Rebajar y degradar dimensionalmente de grado</strong> el agobiante coloso original 4x4 a un minúsculo, cálido y familiar determinante resoluble <InlineMath math="3 \times 3" /> abordable en segundos por Sarrus ordinario.
          </p>
        </div>

      </main>

      <TopicNavigation 
        prevPath="/parcial2/determinantes/concepto"
        nextPath="/parcial2/determinantes/preliminares" 
      />
    
      <AiChatBot 
        topicTitle="Atajos de Sarrus y Regla de Chío" 
        topicContext="Dominio absoluto de la metodologica Sarrus para la expansión de determinantes atados fuertemente a cuadrantes 3x3 exclusivos repitiendo diagonales cruzadas positivas principales menos las secundarias en masa global. Y el concepto de Chío para matrices 4x4 usando alteraciones de Gauss hasta amasar una columna llena de Ceros y un (1) pivot unitario, forzando usar el desarrollo de Laplace para exterminar tres cuartos del problema por absorberse en Cero y lograr disminuir un grado de cálculo matricial (-1 dimensión)." 
      />
    </div>
  );
};

export default SarrusChio;
