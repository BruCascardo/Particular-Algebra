import React from 'react';
import { InlineMath, BlockMath } from 'react-katex';
import TopicHeader from '../../../components/TopicHeader';
import TopicNavigation from '../../../components/TopicNavigation';
import AiChatBot from '../../../components/AiChatBot';
import './TransformacionesTopic.css';

const MatrizAsociada: React.FC = () => {
  return (
    <div className="tl-topic-container">
      <TopicHeader 
        title="Matriz Asociada a una Transformación Lineal" 
        subtitle="El ADN matricial de las funciones abstractas"
      />

      <main className="topic-content">
        <div className="concept-box">
          <h3>La Equivalencia Fundamental</h3>
          <p>
            Uno de los resultados más potentes del Álgebra Lineal es que <strong>toda</strong> transformación lineal <InlineMath math="T: V \to W" /> entre espacios de dimensión finita puede ser representada por una simple multiplicación de matrices. Esto significa que podemos estudiar, calcular y operar funciones complejas (como derivadas polínomicas o proyecciones 3D) usando el álgebra de matrices matricial común.
          </p>
        </div>

        <h2>Construcción de la Matriz Asociada</h2>
        <p>
          Para encontrar la <strong>matriz asociada</strong> a una transformación <InlineMath math="T" />, necesitamos elegir dos bases fijas:
        </p>
        <ul className="list-styled">
          <li>Una base <InlineMath math="B_1 = \{\vec{v}_1, \dots, \vec{v}_n\}" /> para el espacio de salida (Dominio <InlineMath math="V" />).</li>
          <li>Una base <InlineMath math="B_2 = \{\vec{w}_1, \dots, \vec{w}_m\}" /> para el espacio de llegada (Codominio <InlineMath math="W" />).</li>
        </ul>

        <p>
          La matriz <InlineMath math="A" /> (denotada frecuentemente como <InlineMath math="M_T" /> o <InlineMath math="[T]_{B_1}^{B_2}" />) se construye aplicando <InlineMath math="T" /> a cada vector de la base de salida <InlineMath math="B_1" />, y luego escribiendo ese resultado en las coordenadas de la base de llegada <InlineMath math="B_2" />. Estos vectores de coordenadas se colocan formando las <strong>columnas</strong> de la matriz.
        </p>
        
        <div className="formula-box">
          <BlockMath math="A = \Big( [T(\vec{v}_1)]_{B_2} \,\,\Big|\,\, [T(\vec{v}_2)]_{B_2} \,\,\Big|\,\, \dots \,\,\Big|\,\, [T(\vec{v}_n)]_{B_2} \Big)" />
        </div>

        <p>
          El resultado es una matriz de tamaño <InlineMath math="m \times n" /> (filas = dim codominio, columnas = dim dominio). Una vez obtenida esta matriz, evaluar <InlineMath math="T" /> en cualquier vector <InlineMath math="\vec{x}" /> es equivalente a multiplicarlo por la matriz <InlineMath math="A" />:
        </p>
        <div className="formula-box">
          <BlockMath math="[T(\vec{x})]_{B_2} = A \cdot [\vec{x}]_{B_1}" />
        </div>

        <div className="example-box">
          <p><strong>El caso clásico de <InlineMath math="\mathbb{R}^n" />: Matrices Estándar</strong></p>
          <p>
            Si trabajamos de <InlineMath math="\mathbb{R}^n \to \mathbb{R}^m" /> usando las bases canónicas estándar (<InlineMath math="E_1" /> y <InlineMath math="E_2" />), el proceso se simplifica enormemente. La matriz estándar se forma evaluando <InlineMath math="T" /> en los vectores <InlineMath math="\vec{e}_1 = (1,0,\dots,0)" />, <InlineMath math="\vec{e}_2 = (0,1,\dots,0)" />, etc., y poniendo los vectores resultantes <em>directamente</em> como columnas:
          </p>
          <div className="formula-box">
            <BlockMath math="A = \begin{pmatrix} | & | & & | \\ T(\vec{e}_1) & T(\vec{e}_2) & \dots & T(\vec{e}_n) \\ | & | & & | \end{pmatrix}" />
          </div>
          <p>
            Esta matriz se aplica directamente al vector entrada original: <InlineMath math="T(\vec{x}) = A\vec{x}" />.
          </p>
        </div>

      </main>

      <TopicNavigation 
        prevPath="/parcial3/transformaciones/teorema-dimensiones"
        nextPath="/parcial3/transformaciones/composicion-inversa" 
      />

      <AiChatBot 
        topicTitle="Matriz Asociada a una Transformación Lineal" 
        topicContext="Fórmula para determinar la Matriz de T respecto de las bases B1 y B2. Formar las columnas como coeficientes/coordenadas de T(v_i) en la base de llegada B2. Teorema [T(v)]_B2 = A * [v]_B1. Matriz estándar en Rn tomando los transformados de la base canónica (e_i)." 
      />
    </div>
  );
};

export default MatrizAsociada;
