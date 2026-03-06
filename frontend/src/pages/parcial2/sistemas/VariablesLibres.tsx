import React, { useState } from 'react';
import 'katex/dist/katex.min.css';
import { InlineMath, BlockMath } from 'react-katex';
import TopicHeader from '../../../components/TopicHeader';
import TopicNavigation from '../../../components/TopicNavigation';
import AiChatBot from '../../../components/AiChatBot';
import { useConfig } from '../../../context/ConfigContext';
import TrainingQuiz from '../../../components/TrainingQuiz';
import { parcial2Tema1Questions } from '../../../data/quizzes';
import '../../vectores/VectorTopic.css';

const VariablesLibres: React.FC = () => {
  const { isTrainingMode } = useConfig();
  const [quizPassed, setQuizPassed] = useState(false);

  return (
    <div className="vector-topic-container">
      <TopicHeader 
        title="1.6. Variables Libres y Rango" 
        subtitle="Analizando los Grados de Libertad de un SEL"
      />

      <main className="topic-content">
        <div className="concept-box">
          <h3>Variables Principales y Variables Libres</h3>
          <p>
            Al finalizar el proceso de eliminación Gaussiana sobre la matriz de coeficientes, es habitual que <strong>no todas las columnas contengan un pivote</strong>.
            Esta distinción separa las variables algebraicas del problema en dos grupos diferentes fundamentales para la resolución.
          </p>
        </div>

        <h2>Diferenciación de Variables</h2>

        <p>
          Las columnas que <strong>sí contienen pivote</strong> se denominan <strong>Columnas Pivote</strong>. Las variables asociadas con estas columnas se llaman <strong>Variables Principales</strong> (o variables dependientes).
        </p>
        <p>
          Por el contrario, cualquier columna que <strong>no posea</strong> una entrada principal o pivote en su estructura (al estar ya escalonada), identifica a sus variables correspondientes como <strong>Variables Libres</strong> (o variables independientes/parámetros).
        </p>

        <ul className="list-styled" style={{ marginTop: '1rem' }}>
            <li>Las variables principales quedarán finalmente definidas matemáticamente <em>en términos y en función</em> de qué valor asuman las variables libres.</li>
            <li>A cada variable libre se le otorga el poder de asumir libremente cualquier métrica en los números Reales (<InlineMath math="\mathbb{R}" />). Originando así las <strong>Infinitas Soluciones</strong> (Sistema Compatible Indeterminado).</li>
            <li>Si no hay ninguna variable libre presente, entonces el sistema (de ser consistente) siempre representará un Sistema Compatible con Solución Determinada Única.</li>
        </ul>

        <h2>El Concepto de Rango de una Matriz</h2>
        <p>
           El <strong>rango</strong> o "rank" de una matriz, notado comúnmente como <InlineMath math="\text{rg}(A)" /> o <InlineMath math="\text{rank}(A)" /> o <InlineMath math="\rho(A)" />, es un número fundamental. Se define en la práctica (y después de escalar una matriz por eliminación de filas) como el **número total de filas no nulas** en la matriz escalonada resultante.
        </p>

        <p>
          Igualmente y de forma más formal y abstracta:
        </p>
        <div className="formula-box" style={{ background: 'rgba(50, 60, 100, 0.4)' }}>
           <p style={{ margin: 0, fontSize: '1rem', color: '#e0e1dd' }}>El Rango Lineal</p>
          <BlockMath math="\text{rg}(A) = \text{Número Máximo de Columnas o Filas Linealmente Independientes}" />
        </div>
        
        <p>El Rango siempre cumple la coincidencia con la cantidad final de <strong>Pivotes</strong> hallados o número de variables principales. El número inamovible de Pivotes define el Rango.</p>

        <div className="example-box">
          <h4>¿Por qué las Filas Nulas no afectan el Rango?</h4>
          <p>Tengamos el siguiente caso de tres ecuaciones iguales pero con distintos múltiplos (sistema homogéneo):</p>
          <BlockMath math="\begin{bmatrix} 1 & 2 & 3 \\ 2 & 4 & 6 \\ -1 & -2 & -3 \end{bmatrix} \sim \begin{bmatrix} 1 & 2 & 3 \\ 0 & 0 & 0 \\ 0 & 0 & 0 \end{bmatrix}" />
          <ul className="list-styled" style={{ marginTop: '1rem' }}>
            <li>
              Posee únicamente un <InlineMath math="1" /> principal actuando de Pivote principal. <InlineMath math="\Rightarrow \text{rg}(A) = 1" />.
            </li>
            <li>
              Tiene 2 columnas (<InlineMath math="y, z" />) faltas de pivote. Son dos <strong>Variables Libres</strong> y Parámetros para este hiperplano infinito. 
            </li>
            <li>
              Sus dos filas nulas tras la reducción indican que la información analítica sobre la restricción del modelo estaba redundante en esas tres ecuaciones originales, valiendo realmente lo mismo que haber brindado una sola. 
            </li>
          </ul>
        </div>
        <p>
          La relación que liga a todos estos componentes se expresa con el <em>Teorema de Rango-Nulidad</em> para dimensiones: <InlineMath math="\text{Total de Variables (Columnas)} = \text{rg}(A) + \text{Número de Variables Libres}" />.
          También conocido como "Dimensión del Espacio Nulo" a esa cantidad de variables libres.
        </p>

      </main>

      {!isTrainingMode || quizPassed ? (
        <TopicNavigation 
          prevPath="/parcial2/sistemas/pivote"
          nextPath="/parcial2/escalonada/matriz-escalonada" 
        />
      ) : (
        <TrainingQuiz 
          topicName="Tema 1: Sistemas de Ecuaciones Lineales"
          questions={parcial2Tema1Questions} 
          onPass={() => setQuizPassed(true)} 
        />
      )}
    
      <AiChatBot 
        topicTitle="Variables Libres, Principales y Rango Matemático" 
        topicContext="Indica diferencia clave entre Variables Dependientes Principales con Pivot frente a Variables con Libertad Paramétrica sobre Reales. La relación con el Rango rg(A) e introducción final a Sistemas Determinados o Indeterminados según Rango comparado con incógnitas." 
      />
    </div>
  );
};

export default VariablesLibres;
