import React from 'react';
import { InlineMath, BlockMath } from 'react-katex';
import TopicHeader from '../../../components/TopicHeader';
import TopicNavigation from '../../../components/TopicNavigation';
import AiChatBot from '../../../components/AiChatBot';
import './AutovaloresTopic.css';

const Diagonalizacion: React.FC = () => {
  return (
    <div className="av-topic-container">
      <TopicHeader 
        title="Diagonalización de Matrices" 
        subtitle="Transformando el caos en una matriz diagonal perfecta"
      />

      <main className="topic-content">
        <div className="concept-box">
          <h3>¿Qué significa diagonalizar?</h3>
          <p>
            Una matriz cuadrada <InlineMath math="A" /> de <InlineMath math="n \times n" /> es <strong>diagonalizable</strong> si existe una matriz inversible <InlineMath math="P" /> (llamada matriz de paso) y una matriz diagonal <InlineMath math="D" /> tales que:
          </p>
          <div className="formula-box">
             <BlockMath math="A = P \cdot D \cdot P^{-1}" />
          </div>
          <p>
            Equivalentemente, multiplicando por la derecha, podríamos escribir <InlineMath math="D = P^{-1} \cdot A \cdot P" />. Esto implica que la matriz original <InlineMath math="A" /> es <em>semejante</em> a una matriz diagonal, la cual es drásticamente más fácil de operar (por ejemplo, para elevar a potencias, <InlineMath math="A^k = P \cdot D^k \cdot P^{-1}" />).
          </p>
        </div>

        <h2>La Condición Estricta (El Teorema Principal)</h2>
        <p>
          Lamentablemente, no todas las matrices se pueden diagonalizar. El teorema supremo dictamina que una matriz <InlineMath math="n \times n" /> es diagonalizable <strong>si y solo si posee exactamente <InlineMath math="n" /> autovectores que sean linealmente independientes (L.I.)</strong>.
        </p>

        <p>
          Este requisito genera tres grandes "rutas de decisión" al analizar una matriz:
        </p>
        <ul className="list-styled">
          <li><strong>1. Si todos los autovalores son distintos:</strong> El polinomio característico tiene todas raíces simples. Entoces, sus correspondientes autovectores siempre serán automáticamente independientes. ¡La matriz es <strong>siempre diagonalizable</strong>!</li>
          <li><strong>2. Si hay autovalores repetidos, pero cumplen el cupo:</strong> Algún autovalor tiene Multiplicidad Algebraica <InlineMath math="> 1" />. Aquí hay que rezar. Se debe calcular la base del autoespacio. Si el número de vectores obtenidos (Multiplicidad Geométrica) resulta ser <strong>igual</strong> a la multiplicidad algebraica de esa raíz repetida, ¡se juntan <InlineMath math="n" /> autovectores L.I. y la matriz será <strong>diagonalizable</strong>!</li>
          <li><strong>3. La matriz defectuosa:</strong> Algún autovalor repetido entrega una Multiplicidad Geométrica menor a su M.Algebraica. Se pierden dimensiones. No se alcanza el cupo de <InlineMath math="n" /> autovectores independientes. Esta matriz es <strong>NO diagonalizable</strong> en ninguna base posible.</li>
        </ul>

        <div className="example-box">
          <p><strong>El Método de Ensamblaje:</strong></p>
          <p>Si confirmamos que la matriz es diagonalizable porque logramos reunir los <InlineMath math="n" /> autovectores L.I., el proceso constructivo es extremadamente elegante:</p>
          <ol className="list-styled">
            <li>La <strong>Matriz Diagonal <InlineMath math="D" /></strong> se construye depositando en su diagonal principal únicamente los autovalores <InlineMath math="\lambda_1, \lambda_2 \dots" /> encontrados (si alguno está repetido, se escribe esa cantidad de veces).</li>
            <li>La <strong>Matriz de Paso <InlineMath math="P" /></strong> se construye ordenando como columnas a los <strong>autovectores correspondientes</strong> a esos autovalores, exactamente en el mismo orden correlativo en que fueron puestos en <InlineMath math="D" />.</li>
          </ol>
        </div>

      </main>

      <TopicNavigation 
        prevPath="/parcial3/autovalores/multiplicidad"
        nextPath="/parcial3/autovalores/diagonalizacion-ortogonal" 
      />

      <AiChatBot 
        topicTitle="Diagonalización de Matrices" 
        topicContext="Definición de matriz diagonalizable y relación A = PDP^{-1}. Teorema de exigencia de tener n autovectores linealmente independientes. Regla de valores propios distintos = siempre diagonalizable. Regla de valores propios repetidos = diagonalizable si y solo si M.G. = M.A. para todos ellos. Construcción de P con los autovectores como columnas y de D con los autovalores." 
      />
    </div>
  );
};

export default Diagonalizacion;
