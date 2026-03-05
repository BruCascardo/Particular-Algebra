import React from 'react';
import 'katex/dist/katex.min.css';
import { InlineMath, BlockMath } from 'react-katex';
import TopicHeader from '../../../components/TopicHeader';
import TopicNavigation from '../../../components/TopicNavigation';
import AiChatBot from '../../../components/AiChatBot';
import '../../vectores/VectorTopic.css';

const RelacionTrazaDeterminante: React.FC = () => {
  return (
    <div className="vector-topic-container">
      <TopicHeader 
        title="6.5. Relación entre Traza y Determinante" 
        subtitle="El Cierre Analítico: Autovalores y Polinomios"
      />

      <main className="topic-content">
        <div className="concept-box">
          <h3>Un Vínculo Oculto en la Dimensión Matriz</h3>
          <p>
            Hemos destilado a lo largo del cuatrimestre a la matriz analítica en dos de sus entes condensadores escalares más potentes: La <strong>Traza</strong> (la reduccion lineal estricta <InlineMath math="\sum" /> sumatoria de su diagonal principal) y el <strong>Determinante</strong> (el valor final <InlineMath math="|A|" /> del volumen paraleloespacial producto de sus cruzamientos iterativos fila$\times$columna). 
          </p>
          <p>
            Para culminar este gran módulo de Álgebra Lineal, es valioso mencionar que ambos escalares, aunque nacen de operativas radicalmente opuestas (adición vs multiplicación factorial), habitan íntegramente abrazados bajo el tejido espacial subyacente de la matriz general.
          </p>
        </div>

        <h2>La Sinfonía de los Autovalores (<InlineMath math="\lambda" />)</h2>

        <p>
          En matemáticas avanzadas, las matrices Cuadradas poseen ciertos vectores direccionales privilegiados llamados "Autovectores" y sus factores escalares acoplados directos de estiramiento llamados <strong>Autovalores (<InlineMath math="\lambda" />)</strong>.
        </p>

        <p>
           El descubrimiento apoteósico radica en que, si tú fueras capaz de reunir en tu escritorio mental a la familia entera de "Los N autovalores de una matriz <InlineMath math="A" /> del orden universal <InlineMath math="n \times n" />":
        </p>

        <ul className="list-styled" style={{ marginTop: '1rem', marginBottom: '2rem' }}>
           <li>
              <strong>Traza Equivalente:</strong> La simple suma pacífica civilizada de todos esos mágicos <em>Autovalores</em> empíricos <InlineMath math="\lambda" /> encontrados, resultará siempre ser matemáticamente una equivalencia y copia idéntica calcada de la <strong>Traza (<InlineMath math="\text{Tr}(A)" />)</strong> de esa matriz.
              <BlockMath math="\text{Tr}(A) = \lambda_1 + \lambda_2 + \dots + \lambda_n" />
           </li>
           <li>
              <strong>Determinante Equivalente:</strong> Idénticamente pero a mayor escala, el masivo producto multiplicatorio abrumador de la coalición cruzada entera e inalterada unida factorialmente entre todos esos <em>Autovalores</em> existentes... arrojará sin piedad un escalar que no es otro que el mismísimo sagrado volumen de <strong>Determinante (<InlineMath math="|A|" />)</strong> de la matriz base.
              <BlockMath math="|A| = \lambda_1 \cdot \lambda_2 \cdot \dots \cdot \lambda_n" />
           </li>
        </ul>

        <div className="formula-box" style={{ background: 'rgba(50, 60, 100, 0.4)' }}>
           <p style={{ margin: 0, fontSize: '1rem', color: '#e0e1dd' }}>El Polinomio Característico Cuadrático ($2 \times 2$)</p>
           <p style={{ marginTop: '0.5rem', fontSize: '0.85rem' }}>Esta sagrada relación se corona de oro y evidencia visualmente brutal de golpe en el polinomio característico bidimensional, el cual encierra al Determinante en su cola inerte y a la suma de la Traza acoplada de raíz en su seno medio multiplicada por un factor negativo genérico inconfundible:</p>
          <BlockMath math="\lambda^2 - \text{Tr}(A)\lambda + |A| = 0" />
        </div>

        <div className="example-box">
          <h4>Viendo la Reducción Final</h4>
          <p>Dada la inofensiva matriz genérica de orden <InlineMath math="2 \times 2" />: <InlineMath math="A = \begin{bmatrix} 3 & 1 \\ 2 & 4 \end{bmatrix}" />.</p>
          <p>
            Sacamos la Traza base sumatoria diagonal: <InlineMath math="\text{Tr}(A) = 3 + 4 = \bold{7}" />.
            <br />
            Sacamos el Determinante base de Sarrus: <InlineMath math="|A| = (3 \cdot 4) - (1 \cdot 2) = 12 - 2 = \bold{10}" />.
          </p>
          <p>
            Al inyectarlos en la joya polinómica central, obtienes instantáneamente el mapa abstracto inaudito codificado que rige el estiramiento y colapso de dicha arquitectura:
          </p>
          <BlockMath math="\lambda^2 - 7\lambda + 10 = 0" />
        </div>

        <p style={{ marginTop: '2rem', textAlign: 'center', fontWeight: 'bold', fontSize: '1.2rem', color: '#a8d5ba' }}>
           ¡Felicidades! Has dominado el Parcial 2.
        </p>

      </main>

      <TopicNavigation 
        prevPath="/parcial2/determinantes/inversa"
        nextPath="/parcial2" 
        nextLabel="Volver al Menú"
      />
    
      <AiChatBot 
        topicTitle="El Vínculo Oculto: Traza, Determinante y Polinómios" 
        topicContext="Cerramos el bloque conectando conceptualmente por primera vez a los misteriosos Autovalores escalares abstractos \lambda como eslabones perfectos: Exponer analíticamente que la mera Suma aglomerada terrenal de tales autovalores equivale de porción identicaria a la propia Función de Traza pura matricial original de coeficientes, del mismo exacto y recíproco y fascinante modo, en que su incesante Multiplicatoria iterativa factorial devuelve como resultado único de volumen estelar paraleloespacial calcado al Determinante universal propio de dicha área formacional. Visto esto reflejado sin ropajes al desnudo visualmente en la ecuación bi-dimensional base." 
      />
    </div>
  );
};

export default RelacionTrazaDeterminante;
