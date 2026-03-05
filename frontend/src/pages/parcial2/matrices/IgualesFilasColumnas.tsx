import React from 'react';
import 'katex/dist/katex.min.css';
import { InlineMath, BlockMath } from 'react-katex';
import TopicHeader from '../../../components/TopicHeader';
import TopicNavigation from '../../../components/TopicNavigation';
import AiChatBot from '../../../components/AiChatBot';
import '../../vectores/VectorTopic.css';

const IgualesFilasColumnas: React.FC = () => {
  return (
    <div className="vector-topic-container">
      <TopicHeader 
        title="3.2. Criterio de Igualdad, Filas y Columnas" 
        subtitle="Analizando Formas Extremas y Clonación Matricial"
      />

      <main className="topic-content">
        <div className="concept-box">
          <h3>¿Cuándo Dos Matrices Son Oficialmente Iguales?</h3>
          <p>
            Aceptar que una matriz es perfectamente idéntica o "igual" a otra, demanda cumplir dos estatutos matemáticos categóricos simultáneos que no perdonan excepciones.
            Se designa la igualdad como <InlineMath math="A = B" /> si y solo si amparan rigurosidad en estos dos puntos:
          </p>
        </div>

        <ul className="list-styled" style={{ marginTop: '1rem', marginBottom: '2rem' }}>
            <li><strong>Igualdad de Dimensiones (Orden):</strong> Ambas matrices tienen que ostentar estrictamente la misma idéntica dimensión del área rectangular. Igual número de Filas que de Columnas de par en par. <InlineMath math="A_{m \times n}" /> y <InlineMath math="B_{m \times n}" />.</li>
            <li><strong>Igualdad Escalar Individual (Elemento por Elemento):</strong> Cada número ubicado en una celda en específico de la primera matriz, debe ser una asombrosa copia del que ocupa la celda hermana de la matriz dual. Geométricamente: <InlineMath math="a_{ij} = b_{ij}" /> para todo <InlineMath math="i" /> y todo <InlineMath math="j" /> posible de la estructura total entera.</li>
        </ul>

        <div className="example-box">
          <h4>Viendo lo que NO es Igualdad</h4>
          <p>Compara estas matrices:</p>
          <BlockMath math="A = \begin{bmatrix} 1 & 2 \\ 3 & 4 \end{bmatrix} \quad B = \begin{bmatrix} 1 & 3 \\ 2 & 4 \end{bmatrix}" />
          <p>
            Vemos que <InlineMath math="A \neq B" />. Tienen los mismos números totales (1,2,3,4) como contenido interno global, y ambas son matrices cuadradas <InlineMath math="2 \times 2" />... Pero los puestos y casillas que ocupan individualmente no coinciden en lo absoluto (Por ejemplo: en la matriz <InlineMath math="A" />, el elemento de la celda <InlineMath math="a_{12} = 2" />, mientras que en <InlineMath math="B" />, el elemento análogo cohabitante <InlineMath math="b_{12} = 3" />). Su cruce algebraico vectorial dista en su efecto.
          </p>
        </div>

        <h2>Matrices de Una Sola Dimensión: Vectores</h2>
        <p>
           A veces reducimos la gigantesca escala bidimensional a lo más primitivo del plano unidireccional y se terminan emparentando íntimamente con los mismísimos vectores y coordenadas clásicas que usaste en la Unidad 1.
        </p>

        <h3>Matriz Fila (Vector Renglón)</h3>
        <p>
          Es aquella retícula extrema que ha quedado constituida por <strong>una y tan sola única Fila</strong> horizontal conteniendo a sus componentes dispersos en ancha extensión. Su orden y dimensión teórica por lo expuesto, recaerá invariablemente en <InlineMath math="1 \times n" />.
        </p>
        <div className="formula-box" style={{ background: 'rgba(50, 60, 100, 0.4)' }}>
          <BlockMath math="F_{1 \times n} = \begin{bmatrix} f_{11} & f_{12} & \dots & f_{1n} \end{bmatrix}" />
        </div>

        <h3>Matriz Columna (Vector Columna)</h3>
        <p>
          Total contrapuesto es la Matriz Columna, el arreglo puramente erguido y vertical amueblado de arriba a abajo por <strong>una sola Columna unificadora</strong> de alto calibre sobre el papel.
          En consecuencia teórica, el orden invariable de estas espigas lo anotarás tú frente a un profesor siempre como: <InlineMath math="m \times 1" />. 
        </p>
        <div className="formula-box" style={{ background: 'rgba(50, 60, 100, 0.4)' }}>
          <BlockMath math="C_{m \times 1} = \begin{bmatrix} c_{11} \\ c_{21} \\ \vdots \\ c_{m1} \end{bmatrix}" />
        </div>
        <p>Para la resolución estricta del curso de matemática superior y álgebra lineal, tú vas a tener siempre presente tratar e ingresar universalmente todos los <em>vectores de variables</em> y <em>vectores de soluciones</em> en formato vertical o "Matriz Columna".</p>

      </main>

      <TopicNavigation 
        prevPath="/parcial2/matrices/definicion"
        nextPath="/parcial2/matrices/cuadradas-nulas" 
      />
    
      <AiChatBot 
        topicTitle="Igualdad Teórica y Formas Fila-Columna" 
        topicContext="Esclarecimiento en Igualdad rígida paramétrica 1:1, donde cambiar de puesto una variable hace incompatible la igualación global final. Identificación inmediata para Vectors-Rows (1xn) o Vectors-Columns transitorios del plano (mx1)." 
      />
    </div>
  );
};

export default IgualesFilasColumnas;
