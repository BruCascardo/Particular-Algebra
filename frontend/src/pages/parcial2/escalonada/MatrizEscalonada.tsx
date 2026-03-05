import React from 'react';
import 'katex/dist/katex.min.css';
import { InlineMath, BlockMath } from 'react-katex';
import TopicHeader from '../../../components/TopicHeader';
import TopicNavigation from '../../../components/TopicNavigation';
import AiChatBot from '../../../components/AiChatBot';
import '../../vectores/VectorTopic.css';

const MatrizEscalonada: React.FC = () => {
  return (
    <div className="vector-topic-container">
      <TopicHeader 
        title="2.1. Matriz Escalonada" 
        subtitle="Condiciones de una Matriz en Forma de Escalera"
      />

      <main className="topic-content">
        <div className="concept-box">
          <h3>La Forma Escalonada por Filas</h3>
          <p>
            Al aplicar el método de eliminación Gaussiana sobre la matriz de un sistema, el objetivo final es llevar esa matriz a su <strong>Forma Escalonada por Filas</strong>. Esta estructura revela al instante si el sistema tiene solución, cuáles y cuántas variables son libres, y el rango de la matriz.
          </p>
          <p>
            Decimos que una matriz está "escalonada" si cumple obligatoriamente con las siguientes <strong>tres condiciones matemáticas</strong> inquebrantables:
          </p>
        </div>

        <h2>Las 3 Condiciones Fundamentales</h2>

        <ul className="list-styled" style={{ marginTop: '1rem' }}>
          <li>
            <strong>Condición 1 (Filas Nulas al Fondo):</strong><br/>
            Si existen filas compuestas enteramente por ceros (filas nulas), estas deben agruparse <strong>todas en la parte inferior</strong> de la matriz, debajo de cualquier fila que tenga al menos un elemento distinto de cero.
          </li>
          <li>
            <strong>Condición 2 (El Desplazamiento del Pivote):</strong><br/>
            Para cualquier fila no nula, el primer elemento distinto de cero (la entrada principal o <InlineMath math="1" /> principal) debe estar ubicado estrictamente <strong>a la derecha</strong> del pivote de la fila inmediatamente superior. Esto es lo que forma visualmente los "escalones" descendentes.
          </li>
          <li>
            <strong>Condición 3 (Ceros bajo el Pivote):</strong><br/>
            Debido a la condición 2, se asume obligatoriamente que <strong>todos</strong> los números que se encuentran en la misma columna exactamente <em>por debajo</em> de un pivote, tienen que ser indefectiblemente ceros (<InlineMath math="0" />).
          </li>
        </ul>

        <div className="example-box">
          <h4>Ejemplos Visuales: Determinando si están Escalonadas</h4>
          
          <p><strong>✅ Ejemplo 1: Matriz Escalonada Correcta</strong></p>
          <BlockMath math="\begin{bmatrix} \bold{1} & 4 & -3 & 7 \\ 0 & \bold{2} & 5 & 0 \\ 0 & 0 & 0 & \bold{1} \end{bmatrix}" />
          <p>
            Cumple las reglas: Los pivotes (1, 2, 1) se desplazan hacia la derecha a medida que bajamos. Todo lo que está debajo de un pivote es cero.
          </p>

          <p><strong>❌ Ejemplo 2: Matriz NO Escalonada</strong></p>
          <BlockMath math="\begin{bmatrix} \bold{1} & 4 & -3 & 7 \\ 0 & \bold{2} & 5 & 0 \\ 0 & \bold{1} & 0 & 0 \end{bmatrix}" />
          <p>
            Falla la Condición 2 y 3. El pivote de la tercera fila (1) <em>no</em> está estrictamente a la derecha del pivote de la segunda fila (2), de hecho están en la misma columna. Todavía falta eliminar ese 1 restando la fila 3 con un múltiplo de la 2.
          </p>
        </div>

        <h2>Forma Escalonada Reducida por Filas (Gauss-Jordan)</h2>
        <p>
           Existe un peldaño superior de simplificación matricial. Si aplicamos la Eliminación de <strong>Gauss-Jordan</strong> en lugar del clásico Gauss, llegaremos a la <em>Matriz Escalonada Reducida por Filas</em>.
           Para alcanzar este nivel, además de las tres condiciones anteriores, se deben cumplir <strong>dos requisitos extra</strong>:
        </p>
        <ol className="list-styled" style={{ marginTop: '1rem' }}>
          <li>
            <strong>Pivotes Unitarios:</strong> Toda entrada principal (pivote) de cualquier fila no nula tiene que ser obligatoriamente un número uno positivo (<InlineMath math="1" />).
          </li>
          <li>
            <strong>Aislamiento Total del Pivote:</strong> No solo los números por debajo del pivote deben ser cero, sino que <strong>todo número por encima</strong> de ese pivote en la misma columna también debe transformarse en cero.
          </li>
        </ol>

        <div className="formula-box" style={{ background: 'rgba(50, 60, 100, 0.4)' }}>
           <p style={{ margin: 0, fontSize: '1rem', color: '#e0e1dd' }}>Matriz en Forma Escalonada Reducida:</p>
          <BlockMath math="\begin{bmatrix} \bold{1} & 0 & 0 & | & 5 \\ 0 & \bold{1} & 0 & | & -2 \\ 0 & 0 & \bold{1} & | & 4 \end{bmatrix}" />
           <p style={{ textAlign: "center", fontStyle: "italic", marginTop: "1rem" }}>La gran ventaja de la escalonada reducida es que nos entrega la solución explícita sin necesidad de un despeje de reemplazo hacia atrás. <InlineMath math="x=5, y=-2, z=4" />.</p>
        </div>

      </main>

      <TopicNavigation 
        prevPath="/parcial2/sistemas/variables-libres-rango"
        nextPath="/parcial2/escalonada/teoremas-sel" 
      />
    
      <AiChatBot 
        topicTitle="Matriz Escalonada y Reducida" 
        topicContext="Desglosar las 3 reglas de una matriz escalonada y las 2 nuevas reglas si es Escalonada Reducida. Dar énfasis empírico de por qué las filas nulas van al fondo y los pivotes derivan hacia la derecha como una identidad en escalera." 
      />
    </div>
  );
};

export default MatrizEscalonada;
