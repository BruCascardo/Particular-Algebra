import React from 'react';
import 'katex/dist/katex.min.css';
import { InlineMath, BlockMath } from 'react-katex';
import TopicHeader from '../../components/TopicHeader';
import TopicNavigation from '../../components/TopicNavigation';
import AiChatBot from '../../components/AiChatBot';
import { useConfig } from '../../context/ConfigContext';
import TrainingQuiz from '../../components/TrainingQuiz';
import { parcial1Tema2Questions } from '../../data/quizzes';
import './VectorTopic.css';

const ProductoPorEscalar: React.FC = () => {
  const { isTrainingMode } = useConfig();
  const [quizPassed, setQuizPassed] = React.useState(false);

  return (
    <div className="vector-topic-container">
      <TopicHeader 
        title="Producto por un Escalar" 
        subtitle="Alargando, comprimiendo o invirtiendo flechas matemáticas"
      />

      <main className="topic-content">
        <div className="concept-box">
          <h3>Definición Formal (Analítica)</h3>
          <p>
            El producto de un número real cualquiera <InlineMath math="\alpha \in \mathbb{R}" /> (llamado escalar) por un vector <InlineMath math="\vec{v} = (v_x, v_y, ...)" /> da como resultado un <strong>nuevo vector</strong>. Este nuevo vector se obtiene multiplicando <em>cada una</em> de las componentes del vector original de forma distributiva por dicho número <InlineMath math="\alpha" />.
          </p>
          <div className="formula-box" style={{ marginTop: '0.5rem' }}>
            <BlockMath math="\alpha \cdot \vec{v} = (\alpha \cdot v_x, \;\; \alpha \cdot v_y, ...)" />
          </div>
        </div>

        <h2>Efectos Geométricos sobre el Vector</h2>
        <p>
          Multiplicar por un escalar tiene efectos directos en las tres características fundamentales del vector (<a href="/parcial1/vectores/modulo-direccion-sentido" style={{ color: 'var(--accent-color)', textDecoration: 'underline' }}>Módulo, Dirección y Sentido</a>).
        </p>

        <ul className="list-styled">
          <li><strong>Dirección:</strong> <em>Nunca cambia.</em> El nuevo vector siempre mantiene exactamente la misma inclinación (son vectores paralelos o superpuestos en la misma recta).</li>
          
          <li><strong>Sentido:</strong> Depende exclusivamente del signo que posea el escalar <InlineMath math="\alpha" />:
            <ul>
              <li>Si <InlineMath math="\alpha > 0" /> (positivo), el sentido del vector se <strong>mantiene idéntico</strong>.</li>
              <li>Si <InlineMath math="\alpha < 0" /> (negativo), el sentido del vector se <strong>invierte radicalmente 180°</strong> (por ejemplo, pasa de apuntar "arriba" a apuntar "abajo").</li>
            </ul>
          </li>

          <li><strong>Módulo (Su Longitud):</strong> El tamaño del nuevo vector resulta de multiplicar la longitud métrica original por el <em>valor absoluto</em> del número real <InlineMath math="|\alpha|" />. Esto obedece a la fórmula:
            <div className="formula-box" style={{ margin: '0.8rem 0' }}>
              <BlockMath math="||\alpha \cdot \vec{v}|| = |\alpha| \cdot ||\vec{v}||" />
            </div>
            <ul>
              <li>Si <InlineMath math="|\alpha| > 1" /> el vector se alarga mágicamente (DILATACIÓN).</li>
              <li>Si <InlineMath math="0 < |\alpha| < 1" /> el vector se encoge o se contrae trágicamente (CONTRACCIÓN).</li>
              <li>Si <InlineMath math="\alpha = -1" /> se obtiene exactamente el <strong>Vector Opuesto</strong>.</li>
              <li>Si <InlineMath math="\alpha = 0" /> se pulveriza al vector, obteniendo el <strong>Vector Nulo</strong> absoluto.</li>
            </ul>
          </li>
        </ul>

        <h2>Propiedades Algebraicas del Producto</h2>
        <p>Sean asumiendo aquí escalares representados por literales como <InlineMath math="\alpha, \beta \in \mathbb{R}" /> y vectores clásicos <InlineMath math="\vec{u}, \vec{v}" /> :</p>

        <h3>1. Clausura (o Ley de composición externa)</h3>
        <p>Multiplicar un vector base por cualquier número real del universo siempre, sin excepción matemática, te entregará un vector válido que pertenece al espacio.</p>
        
        <h3>2. Elemento Neutro del Producto Escalar</h3>
        <p>Multiplicar todo a un vector de origen directamente por la unidad formal del número 1, nos devuelve estructuralmente el mismísimo e inalterado vector.</p>
        <div className="formula-box" style={{ marginTop: '0.8rem' }}>
          <BlockMath math="1 \cdot \vec{v} = \vec{v}" />
        </div>

        <h3>3. Ley Asociativa Mixta de Escalares</h3>
        <p>No interesará jamás en qué orden específico emparejas la multiplicación sucesiva de diversos factores numéricos sobre un vector original.</p>
        <div className="formula-box" style={{ marginTop: '0.8rem' }}>
          <BlockMath math="\alpha \cdot (\beta \cdot \vec{v}) = (\alpha \cdot \beta) \cdot \vec{v}" />
        </div>

        <h3>4. Leyes Distributivas Estándar</h3>
        <p>Tanto para la adición interna de los factores escalares como de los vectores.</p>
        <div className="formula-box" style={{ marginTop: '0.8rem' }}>
          <p style={{ margin: 0, fontSize: '0.9rem', color: '#e0e1dd' }}>Distribución de un único escalar en una suma vectorial plana:</p>
          <BlockMath math="\alpha \cdot (\vec{u} + \vec{v}) = \alpha \cdot \vec{u} + \alpha \cdot \vec{v}" />
          <p style={{ margin: 0, fontSize: '0.9rem', color: '#e0e1dd', marginTop: '0.5rem' }}>Distribución de la suma de dos escalares reales sobre un inerte vector:</p>
          <BlockMath math="(\alpha + \beta) \cdot \vec{v} = \alpha \cdot \vec{v} + \beta \cdot \vec{v}" />
        </div>

        <div className="example-box">
          <h4>Multiplicación por un Factor Decimal</h4>
          <p>
            Al tener un vector de origen <InlineMath math="\vec{w} = (-4, 12, 8)" />, si lo castigamos de forma estricta al multiplicarlo externamente por el temido coeficiente fraccionario o decimal de encogimiento <InlineMath math="\alpha = 0.5" />.
          </p>
          <BlockMath math="0.5 \cdot \vec{w} = (0.5 \cdot (-4), \;\; 0.5 \cdot 12, \;\; 0.5 \cdot 8)" />
          <BlockMath math="\vec{w}_{final} = (-2, 6, 4)" />
          <p>
            Lograrás notar inmediatamente que su nuevo módulo final será matemáticamente la mitad exacta en milímetros de su encarnación y gloria gráfica anterior original, y además compartiendo la misma dirección y el mismo exacto sentido.
          </p>
        </div>
      </main>

      {/* Módulo de Entrenamiento (Conditional Render) */}
      {isTrainingMode && !quizPassed ? (
        <TrainingQuiz 
          questions={parcial1Tema2Questions}
          topicName="2. Operaciones con Vectores"
          onPass={() => setQuizPassed(true)}
        />
      ) : (
        <TopicNavigation 
          prevPath="/parcial1/operaciones/modulo-dos-puntos"
          nextPath="/parcial1/sistemas/referencias-dimensiones"
          nextLabel="Siguiente Tema"
        />
      )}
    
      <AiChatBot 
        topicTitle="Producto por un Escalar" 
        topicContext="Multiplicación de un vector por un número real k. Alteración del módulo, preservación de dirección y posible inversión de sentido." 
      />
    </div>
  );
};

export default ProductoPorEscalar;
