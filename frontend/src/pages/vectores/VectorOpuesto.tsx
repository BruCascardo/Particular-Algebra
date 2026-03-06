import React from 'react';
import 'katex/dist/katex.min.css';
import { InlineMath, BlockMath } from 'react-katex';
import TopicHeader from '../../components/TopicHeader';
import TopicNavigation from '../../components/TopicNavigation';
import AiChatBot from '../../components/AiChatBot';
import { useConfig } from '../../context/ConfigContext';
import TrainingQuiz from '../../components/TrainingQuiz';
import { parcial1Tema1Questions } from '../../data/quizzes';
import './VectorTopic.css';

const VectorOpuesto: React.FC = () => {
  const { isTrainingMode } = useConfig();
  const [quizPassed, setQuizPassed] = React.useState(false);

  return (
    <div className="vector-topic-container">
      <TopicHeader 
        title="Vector Opuesto" 
        subtitle="Un vector en sentido contrario"
      />

      <main className="topic-content">
        <div className="concept-box">
          <h3>La Definición</h3>
          <p>
            El <strong>vector opuesto</strong> a un vector <InlineMath math="\vec{v}" /> es otro vector que posee el mismo módulo, la misma dirección, pero <strong>sentido opuesto</strong> (contrario).
          </p>
        </div>

        <div className="formula-box">
          <p style={{ margin: 0, fontSize: '1rem', color: '#e0e1dd' }}>Vector Opuesto de <InlineMath math="\vec{v}" /> se denota:</p>
          <BlockMath math="-\vec{v}" />
        </div>

        <h2>Características Clave</h2>
        <ul className="list-styled">
          <li><strong>Módulo idéntico:</strong> La longitud de <InlineMath math="-\vec{v}" /> es exactamente igual a la longitud de <InlineMath math="\vec{v}" />. O sea: <InlineMath math="||-\vec{v}|| = ||\vec{v}||" />.</li>
          <li><strong>Dirección compartida:</strong> Ambos vectores se encuentran sobre rectas paralelas o superpuestas. Tienen la misma inclinación en el espacio.</li>
          <li><strong>Sentidos contrarios:</strong> Si <InlineMath math="\vec{v}" /> apunta a la derecha y arriba, entonces <InlineMath math="-\vec{v}" /> apunta a la izquierda y abajo. Intercambian su origen y extremo. Si el segmento orientado era <InlineMath math="\vec{AB}" />, su opuesto es el vector <InlineMath math="\vec{BA}" />.</li>
        </ul>

        <div className="example-box">
          <h4>Componentes Numéricas</h4>
          <p>
            Desde el punto de vista algebraico, encontrar el vector opuesto es tan sencillo como cambiarle el signo a todas las componentes escalares de tu vector inicial.
          </p>
          <p style={{ marginTop: '0.5rem' }}>
            Si en R³ tu vector inicial es:
            <BlockMath math="\vec{v} = (3, -5, 0)" />
          </p>
          <p style={{ marginTop: '0.5rem' }}>
            Entonces el vector opuesto será simplemente:
            <BlockMath math="-\vec{v} = (-3, 5, 0)" />
          </p>
        </div>

        <div className="example-box" style={{ background: 'rgba(150, 50, 50, 0.2)', borderLeft: '4px solid #cc4444' }}>
          <h4>Elemento Neutro de la Suma</h4>
          <p>
            Al sumar cualquier vector con su respectivo vector opuesto, el resultado siempre será el <strong>rector nulo</strong> (<InlineMath math="\vec{0}" />), que es aquel vector cuyo módulo es cero y no tiene dirección o sentido definido.
          </p>
          <div className="formula-box">
            <BlockMath math="\vec{v} + (-\vec{v}) = \vec{0}" />
          </div>
        </div>
      </main>

      {/* Módulo de Entrenamiento (Conditional Render) */}
      {isTrainingMode && !quizPassed ? (
        <TrainingQuiz 
          questions={parcial1Tema1Questions}
          topicName="1. Vectores"
          onPass={() => setQuizPassed(true)}
        />
      ) : (
        <TopicNavigation 
          prevPath="/parcial1/vectores/versor"
          nextPath="/parcial1/operaciones/suma-vectores"
          nextLabel="Siguiente Tema"
        />
      )}

      <AiChatBot 
        topicTitle="Vector Opuesto" 
        topicContext="El Vector Opuesto conserva magnitud y dirección pero voltea el sentido 180 grados. Multiplicación de componentes por menos 1, y su rol vital como elemento neutro aditivo resultando en el Vector Nulo." 
      />
    </div>
  );
};

export default VectorOpuesto;
