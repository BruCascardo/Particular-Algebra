import React from 'react';
import 'katex/dist/katex.min.css';
import { InlineMath, BlockMath } from 'react-katex';
import TopicHeader from '../../components/TopicHeader';
import TopicNavigation from '../../components/TopicNavigation';
import AiChatBot from '../../components/AiChatBot';
import { useConfig } from '../../context/ConfigContext';
import TrainingQuiz from '../../components/TrainingQuiz';
import { parcial1Tema3Questions } from '../../data/quizzes';
import '../vectores/VectorTopic.css';

const ProyeccionOrtogonal: React.FC = () => {
  const { isTrainingMode } = useConfig();
  const [quizPassed, setQuizPassed] = React.useState(false);

  return (
    <div className="vector-topic-container">
      <TopicHeader 
        title="3.3. Proyección Ortogonal" 
        subtitle="La sombra matemática que proyecta un vector sobre la acción de otro"
      />

      <main className="topic-content">
        <div className="concept-box">
          <h3>La Idea Intuitiva (La Sombra)</h3>
          <p>
            Imagina que iluminas el espacio con una linterna apuntando exactamente de manera perpendicular a la dirección un vector base (<InlineMath math="\vec{v}" />). Si atraviesas otro vector (<InlineMath math="\vec{u}" />) en esa iluminación, la "sombra" perfecta y recta que arroja <InlineMath math="\vec{u}" /> sobre la línea de acción de <InlineMath math="\vec{v}" /> se la denomina <strong>Proyección Ortogonal</strong>.
          </p>
          <p>Ortogonal significa "a 90 grados" o "perpendicuar".</p>
        </div>

        <h2>Distinción Clave: Proyección Escalar vs Proyección Vectorial</h2>

        <h3>1. Proyección Escalar (Módulo proyectado)</h3>
        <p>
          Es simplemente un <strong>número (escalar)</strong> que representa el tamaño (la longitud firmada o algebráica) de esa "sombra". También informa sobre el ángulo entre ellos. Se denota como <InlineMath math="proy_v(\vec{u})" />.
        </p>
        <ul className="list-styled">
          <li>Si el número es positivo, la sombra apunta en el mismo sentido que el vector base. (Ángulo agudo).</li>
          <li>Si el número es negativo, la sombra apunta en contra. (Ángulo obtuso).</li>
          <li>Si el resultado es 0, significa que el vector principal ya es perpendicular (no arroja sombra).</li>
        </ul>

        <div className="formula-box">
          <p style={{ margin: 0, fontSize: '1rem', color: '#e0e1dd', paddingBottom: '0.8rem' }}>Cálculo usando funciones trigonométricas (si conoces el ángulo <InlineMath math="\alpha" /> entre ellos):</p>
          <BlockMath math="proy_v(\vec{u}) = ||\vec{u}|| \cdot \cos(\alpha)" />
        </div>

        <p>
          Dado que, como veremos más adelante, el <strong>Producto Escalar</strong> está intrínsecamente ligado a esto, la fórmula fundamental analítica que no requiere conocer el ángulo explícito es:
        </p>

        <div className="formula-box" style={{ background: 'rgba(50, 60, 100, 0.4)' }}>
           <p style={{ margin: 0, fontSize: '1rem', color: '#e0e1dd', paddingBottom: '0.8rem' }}>Cálculo clásico analítico (usando producto escalar habitual):</p>
          <BlockMath math="proy_v(\vec{u}) = \frac{\vec{u} \cdot \vec{v}}{||\vec{v}||}" />
        </div>

        <h3>2. Vector Proyección</h3>
        <p>
          Mientras la proyección escalar es sólo un número, muchas veces nos piden encontrar el <strong>Vector</strong> exacto que ocupa ese espacio geométrico sobre la recta "suelo". Se le llama Vector Proyección <InlineMath math="\vec{P}" />.
        </p>
        <p>
          Para encontrarlo, primero definimos la "esencia direccional" de la recta suelo usando un <a href="/parcial1/vectores/versor" style={{ color: 'var(--accent-color)' }}>Versor</a> (<InlineMath math="\breve{v}" />). Luego alargamos ese versor la cantidad de unidades que nos dio la proyección escalar calculada anteriormente.
        </p>

        <div className="formula-box" style={{ border: '1px solid #a2bce0' }}>
           <p style={{ margin: 0, fontSize: '1rem', color: '#e0e1dd', paddingBottom: '0.8rem' }}>Vector Proyección Ortogonal:</p>
          <BlockMath math="\vec{P} = proy_v(\vec{u}) \cdot \breve{v} = \left( \frac{\vec{u} \cdot \vec{v}}{||\vec{v}||} \right) \cdot \frac{\vec{v}}{||\vec{v}||}" />
        </div>

      </main>

      {isTrainingMode && !quizPassed ? (
        <TrainingQuiz 
          questions={parcial1Tema3Questions}
          topicName="3. Sistemas y Referencias"
          onPass={() => setQuizPassed(true)}
        />
      ) : (
        <TopicNavigation 
          prevPath="/parcial1/sistemas/condicion-paralelismo"
          nextPath="/parcial1/productos/producto-escalar"
        />
      )}
    
      <AiChatBot 
        topicTitle="Proyección Ortogonal" 
        topicContext="Proyección de un vector sobre la dirección de otro. Concepto de vector proyección y magnitud (proyección escalar)." 
      />
    </div>
  );
};

export default ProyeccionOrtogonal;
