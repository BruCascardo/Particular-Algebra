import React from 'react';
import 'katex/dist/katex.min.css';
import { InlineMath, BlockMath } from 'react-katex';
import TopicHeader from '../../../components/TopicHeader';
import TopicNavigation from '../../../components/TopicNavigation';
import AiChatBot from '../../../components/AiChatBot';
import '../../vectores/VectorTopic.css';

const Preliminares: React.FC = () => {
  return (
    <div className="vector-topic-container">
      <TopicHeader 
        title="6.3. Definiciones Preliminares y Matriz Adjunta" 
        subtitle="Catalogando Estructuras mediante su Determinante Numérico"
      />

      <main className="topic-content">
        <div className="concept-box">
          <h3>La Prueba del Nueve: Singular y Regular</h3>
          <p>
            El mero cálculo de un escalar llamado <strong>Determinante (<InlineMath math="|A|" />)</strong> no es un capricho sádico de resolución para profesores. Funciona verdaderamente como un radar instantáneo capaz de desnudarte el alma de la matriz ante la que estás parado analíticamente. 
          </p>
          <p>
            Al verter todos sus coeficientes en la máquina y mirar el resultado arrojado, solo ocurren dos escenarios binarios posibles que sentencian su clasificación vitalicia.
          </p>
        </div>

        <h2>1. Matrices Singulares (<InlineMath math="|A| = 0" />)</h2>

        <p>
           Si la licuadora te dicta matemáticamente y resuelve tajante que el <strong>Determinante es absolutamente un Cero (<InlineMath math="0" />)</strong>, entonces estás ante la presencia trágica de una <em>Matriz Singular</em> o "degenerada". 
        </p>

        <ul className="list-styled">
           <li><strong>¿Qué infiere espacialmente?:</strong> Geométricamente, los vectores que la conforman están linealmente atados: uno es copia o múltiplo disfrazado de los otros (son Colineales o Coplanares). Como están aplastándose unos encima de otros espacialmente sobre un mismo plano/recta... el Volumen tridimensional que generan colapsó a cero. No hay espacio. </li>
           <li><strong>Sentencia de Condena ($A^{-1}$):</strong> Al no haber independencia lineal verdadera en sus filas, el Álgebra Lineal dicta a fuego que esta familia es <strong>INCAPAZ obligatoriamente de poseer jamás una Matriz Inversa (<InlineMath math="A^{-1}" />)</strong> por naturaleza.</li>
        </ul>

        <div className="example-box">
          <h4>Visto Numéricamente</h4>
          <p>Identificamos este eslabón "débil" en una matriz que evidentemente tiene la Fila 2 como un perfecto múltiplo paramétrico (multiplicada rígidamente por <InlineMath math="2" />) de su Fila 1 superior:</p>
          <BlockMath math="A = \begin{bmatrix} 1 & 2 \\ 2 & 4 \end{bmatrix} \implies |A| = (1 \cdot 4) - (2 \cdot 2) = 4 - 4 = \bold{0}" />
        </div>

        <h2>2. Matrices Regulares (<InlineMath math="|A| \neq 0" />)</h2>
        <p>
           El Santo Grial absoluto. El escenario más glorioso se da unívocamente cuando observamos con alivio que nuestro escalar crudo <strong>Determinante dio cualquier otro número vivo real (<InlineMath math="1, -5, 230, \frac{1}{2}" />)</strong>, pero tajantemente distinto al temido cero vacío absolutorio del espacio-tiempo.
        </p>
        
        <ul className="list-styled" style={{ marginTop: '1rem', marginBottom: '2rem' }}>
           <li><strong>Libertad Espacial Perfecta:</strong> Todas las 3 formaciones y vectores base dentro del cubo matricial apuntan forzosamente hacia dimensiones enteras y abren camino creando un volumen concreto. Tienen el codiciado estatus matemático de "Ser Linealmente Independientes entre sí".</li>
           <li><strong>Heredan la Perfección de la Inversa:</strong> Toda red matricial categorizada sin vacilaciones de <em>Regular</em>, tiene asegurada matemáticamente con firmeza la existencia de una (y sola una) <strong>Matriz Inversa (<InlineMath math="A^{-1}" />)</strong> de sí misma, la cual resolveremos su descubrimiento de caja fuerte con pura magia teórica a continuación.</li>
        </ul>

        <div className="formula-box" style={{ background: 'rgba(50, 60, 100, 0.4)' }}>
           <p style={{ margin: 0, fontSize: '1rem', color: '#e0e1dd' }}>Resumen Definitivo de Regularidad y Condición Suficiente ($R$):</p>
           <BlockMath math="\exists \ A^{-1} \iff \text{La det(} A \text{) de esa matriz cuadrada es nula jamás } \ (|A| \neq 0)" />
        </div>

        <h2>La Mística Matriz Adjunta (<InlineMath math="\text{Adj}(A)" />)</h2>

        <p>
            Existe un bloque constructivo indispensable a descubrir llamado coloquialmente como la <strong>Matriz Adjunta</strong> originaria de cualquier cuadro matemático. 
            El tedioso proceso de forjar y dar nacimiento real con nuestras manos a esta peculiar compañera morfológica sigue 2 estatutos obligatorios universales:
        </p>

        <div className="example-box" style={{ borderColor: '#a8d5ba' }}>
          <h4>El Largo Proceso Analítico </h4>
          <ol className="list-styled" style={{ marginBottom: 0 }}>
             <li><strong>Paso 1: Fabricar el Nido de la Cohorte.</strong> Se toma la matriz <InlineMath math="A" /> entera de base cuadrada y se <em>reemplaza cruelmente absolutamente todos uno y cada uno singular de sus habitantes <InlineMath math="a_{ij}" /></em> matemáticos originales numéricos reemplazándolos de facto con el valor final escalar de la multiplicación de su propio respectivo <em>Adjunto/Cofactor espacial (<InlineMath math="A_{ij}" />)</em> (Aquel calculado usando el alternador genérico <InlineMath math="(-1)^{i+j}" /> junto al Determinante temporal de la submatriz cruzada que vimos en la Tema 1 de Sarrus y Laplace). Ese paso da forzada procedencia a la llamada purista mundial de nombre genérico matriz de <em>Matriz de Cofactores <InlineMath math="\text{Cof}(A)" /></em>. </li>
             <br/>
             <li><strong>Paso 2: Volcar Su Gravedad.</strong> Finalmente tomas la susodicha Cofactores parásita y... la <strong>Transpones (<InlineMath math="(\text{Cof}(A))^T" />)</strong> enteramente sin miramientos cruzando su Fila $\times$ Columna espacial para originar lo que mundialmente bautizamos ante la humanidad por fin como la ilustrativa "Matriz Adjunta de la Matriz <InlineMath math="A" />".</li>
          </ol>
          <BlockMath math="\text{Adj}(A) = (\text{Cof}(A))^T" />
        </div>

      </main>

      <TopicNavigation 
        prevPath="/parcial2/determinantes/sarrus-chio"
        nextPath="/parcial2/determinantes/inversa" 
      />
    
      <AiChatBot 
        topicTitle="Regularidad Singular y Construcción Adjunta de Cofactores" 
        topicContext="Filtros excluyentes al descubrir un Cero analítico en el motor matemático Determinante. La muerte espacial y pérdida abstracta lineal frente al apocalipsis del origen. Cómo eso prohíbe hallar Inversa (Explicado matemáticamente en tema próximo 6.4). Desarrollo morfológico en el reemplazo de la grilla de Adjuntos A_ij para su posterior transpuesta formando el ente estelar Adj(A)." 
      />
    </div>
  );
};

export default Preliminares;
