import React from 'react';
import 'katex/dist/katex.min.css';
import { InlineMath, BlockMath } from 'react-katex';
import TopicHeader from '../../../components/TopicHeader';
import TopicNavigation from '../../../components/TopicNavigation';
import AiChatBot from '../../../components/AiChatBot';
import '../../vectores/VectorTopic.css';

const ProductoMatricial: React.FC = () => {
  return (
    <div className="vector-topic-container">
      <TopicHeader 
        title="4.3. El Producto Matricial" 
        subtitle="Cruzando Filas y Columnas en la Multiplicación"
      />

      <main className="topic-content">
        <div className="concept-box">
          <h3>La Verdadera Multiplicación de Matrices</h3>
          <p>
            El <strong>Producto Matricial (<InlineMath math="A \cdot B" />)</strong> no es una operación inocente y directa elemento a elemento como sucede y hemos resuelto durante la suma o la resta. Constituye el alma transformadora del Álgebra Lineal porque describe fielmente lo que sucede matemáticamente cuando componemos dos transformaciones distintas una detrás de otra en el espacio.
          </p>
          <p>
            Para poder operar y certificar que la multiplicación se puede llegar a realizar, entra en juego una nueva y más estricta <strong>Regla de Conformidad Multiplicativa</strong>.
          </p>
        </div>

        <h2>La Regla de Oro: Coincidencia Dimensiones Internas</h2>

        <p>
          Si pretendes realizar al pie de la letra el cálculo <InlineMath math="A \cdot B" /> (llamando a la matriz "A" el factor Pre-Multiplicador y a la matriz "B" factor Post-Multiplicador de la izquierda a derecha), <strong>es obligatoriamente necesario que el número total de Columnas que posea la Matriz <InlineMath math="A" /> coincida exacta y milimétricamente con el número total de Filas de la Matriz <InlineMath math="B" />.</strong>
        </p>

        <div className="example-box">
          <h4>Viendo las Dimensiones</h4>
          <p>Considerando la Matriz <InlineMath math="A" /> de orden <InlineMath math="m \times p" /> y la matriz <InlineMath math="B" /> de orden <InlineMath math="p \times n" />:</p>
          <div style={{ textAlign: "center", fontStyle: "italic", margin: "1rem 0" }}>
              <InlineMath math="A_{m \times \mathbf{p}} \cdot B_{\mathbf{p} \times n}" /> 
              <p>
                 Si ese parámetro medio de puente "<InlineMath math="p" />" (columnas primera vs filas segunda) embona y es el <strong>mismo número</strong>, entonces la operación es perfectamente legal y conformable en ese estricto sentido.
              </p>
              <br/>
              <p>
                 La matriz <InlineMath math="C" /> resultante heredará inevitablemente las dimensiones "exteriores" no utilizadas en el puente: Naciendo en el orden <InlineMath math="C = m \times n" />
              </p>
          </div>
        </div>

        <h2>¿Cómo se calcula cada elemento <InlineMath math="c_{ij}" />?</h2>
        <p>
           Averiguar los números ocultos resultantes del nuevo casillero exige realizar el <strong>Producto Punto Escalar</strong> (como en la Unidad 1 de Vectores espaciales) pero cruzando íntegramente de izquierda a derecha de un barrido mental <strong>absolutamente toda la estructura Fila <InlineMath math="i" /> de la matriz <InlineMath math="A" /></strong> y multiplicándola término a término horizontal/vertical contra <strong>toda y cada número de la Columna <InlineMath math="j" /> completa proveniente de la matriz <InlineMath math="B" /></strong>, y sumando el gran total numérico final de todos esos cruces para fundirlos en una sola cifra de escalar.
        </p>

        <div className="formula-box" style={{ background: 'rgba(50, 60, 100, 0.4)' }}>
           <p style={{ margin: 0, fontSize: '1rem', color: '#e0e1dd' }}>Regla Específica de Operación (<InlineMath math="C = A \cdot B" />):</p>
          <BlockMath math="c_{ij} = \sum_{k=1}^{p} a_{ik} \cdot b_{kj}" />
        </div>

        <div className="example-box" style={{ borderColor: '#a8d5ba' }}>
          <h4>Ejemplo Completo 2x2</h4>
          <p>Tomemos 2 matrices cuadradas 2x2. Puente (2 columnas en A = 2 filas en B). Legal.</p>
          <BlockMath math="\begin{bmatrix} 1 & 2 \\ 3 & 4 \end{bmatrix} \cdot \begin{bmatrix} 5 & 6 \\ 7 & 8 \end{bmatrix}" />
          
          <ul className="list-styled" style={{ marginTop: '1rem' }}>
            <li>Casillero <InlineMath math="c_{11}" /> <span style={{fontSize: '0.85rem'}}>(Fila1 de A $\times$ Columna1 de B)</span>: $(1 \times 5) + (2 \times 7) = 5 + 14 = \mathbf{19}$</li>
            <li>Casillero <InlineMath math="c_{12}" /> <span style={{fontSize: '0.85rem'}}>(Fila1 de A $\times$ Columna2 de B)</span>: $(1 \times 6) + (2 \times 8) = 6 + 16 = \mathbf{22}$</li>
            <li>Casillero <InlineMath math="c_{21}" /> <span style={{fontSize: '0.85rem'}}>(Fila2 de A $\times$ Columna1 de B)</span>: $(3 \times 5) + (4 \times 7) = 15 + 28 = \mathbf{43}$</li>
            <li>Casillero <InlineMath math="c_{22}" /> <span style={{fontSize: '0.85rem'}}>(Fila2 de A $\times$ Columna2 de B)</span>: $(3 \times 6) + (4 \times 8) = 18 + 32 = \mathbf{50}$</li>
          </ul>
          
          <p>Matriz Final <InlineMath math="C_{2 \times 2}" /> Resultado:</p>
          <BlockMath math="C = \begin{bmatrix} 19 & 22 \\ 43 & 50 \end{bmatrix}" />
        </div>

        <h2>Falta de Conmutatividad (<InlineMath math="A \cdot B \neq B \cdot A" />)</h2>
        <div style={{ paddingLeft: '1.5rem', borderLeft: '3px solid #e06666', margin: '1rem 0' }}>
            <p>
              ¡Atención suprema! A diferencia de los números normales de la vida civil donde <InlineMath math="2 \times 3" /> es indiscutiblemente equivalente en el tiempo y universo a <InlineMath math="3 \times 2" />, las matrices habitan rigiéndose bajo otras reglas cósmicas topográficas.
            </p>
            <p>
              El producto y multiplicador Matricial <strong>no es un proceso conmutativo general</strong>.
              El simple hecho subyacente de rotar un papel girándolas de lugar (<InlineMath math="B \cdot A" />) puede llegar a hacer que el puente interno "<InlineMath math="p" />" deje de coincidir por completo y la operación sea ilegal, y aún si por suerte fueren cuadradas y lo permitieran, el cruce y resultado final de esas sumatorias mutantes (<InlineMath math="c_{ij}" />) divergirán y dará matrices totalmente diferentes con rotaciones de dimensiones espaciales distintas.
            </p>
        </div>

      </main>

      <TopicNavigation 
        prevPath="/parcial2/operaciones/transposicion"
        nextPath="/parcial2/propiedades/inversa-identidad" 
      />
    
      <AiChatBot 
        topicTitle="Producto Matricial por Filas y Columnas" 
        topicContext="Filtros inquebrantables pXp del pre-multiplicado y el post-multiplicador (Columnas d_1 = Filas d_2 de matrices en ordenamiento de composición). Explicación fundamental a fuego de por qué el producto en el álgebra superior NO es conmutativo (A*B es distinto de B*A), que no es lo mismo girar un dado y luego taparlo, que taparlo y luego girarlo inerte de posición." 
      />
    </div>
  );
};

export default ProductoMatricial;
