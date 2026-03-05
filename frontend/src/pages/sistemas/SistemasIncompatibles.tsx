import React from 'react';
import 'katex/dist/katex.min.css';
import { InlineMath, BlockMath } from 'react-katex';
import TopicHeader from '../../components/TopicHeader';
import TopicNavigation from '../../components/TopicNavigation';
import AiChatBot from '../../components/AiChatBot';
import '../vectores/VectorTopic.css';

const SistemasIncompatibles: React.FC = () => {
  return (
    <div className="vector-topic-container">
      <TopicHeader 
        title="1.3. Sistemas Incompatibles" 
        subtitle="Analizando la inexistencia de soluciones y el conjunto vacío"
      />

      <main className="topic-content">
        <div className="concept-box">
          <h3>Sistemas Incompatibles</h3>
          <p>
            Un Sistema de Ecuaciones Lineales se clasifica como <strong>Incompatible</strong> cuando <em>no tiene ninguna solución</em>. Es decir, no existe ninguna <InlineMath math="n" />-upla de números reales que verifique, al mismo tiempo, todas las ecuaciones que conforman el sistema.
          </p>
        </div>

        <h2>Conjunto Solución Vacío</h2>
        <p>
          Al no existir valores que satisfagan el sistema cerrado, decimos que el Conjunto Solución (<InlineMath math="S" />) es el <strong>conjunto vacío</strong>. Se denota como:
        </p>
        <div className="formula-box">
          <BlockMath math="S = \emptyset" />
        </div>

        <h2>Interpretación Geométrica</h2>
        <p>
          La incompatibilidad de un sistema puede visualizarse rápidamente en bajas dimensiones:
        </p>
        <ul className="list-styled">
          <li>
            <strong>En <InlineMath math="\mathbb{R}^2" />:</strong> Si tenemos dos ecuaciones que representan dos rectas paralelas y distintas, al no cruzarse nunca, no existe un punto común (<InlineMath math="x, y" />) que pertenezca a ambas simultáneamente. Por ende, el sistema es incompatible.
          </li>
          <li>
            <strong>En <InlineMath math="\mathbb{R}^3" />:</strong> Podríamos tener tres planos donde no existe ningún punto común a los tres. Por ejemplo, dos de los planos podrían ser paralelos entre sí.
          </li>
        </ul>

        <div className="example-box">
          <h4>Ejemplo Algebraico (Absurdo)</h4>
          <p>
            Consideremos el siguiente sistema de dos ecuaciones algebraicas con dos incógnitas:
          </p>
          <BlockMath math="\begin{cases} x + y = 5 \\ x + y = 10 \end{cases}" />
          <p style={{ marginTop: '1rem' }}>
            Si restamos la segunda ecuación de la primera obtenemos una falsedad (un absurdo matemático):
          </p>
          <BlockMath math="0x + 0y = -5 \implies 0 = -5 \quad \text{(Falso)}" />
          <p>
            La aparición de este tipo de absurdos (como <InlineMath math="0 = k" /> donde <InlineMath math="k \neq 0" />) durante la resolución es el indicador algebraico definitivo de que el sistema es Incompatible.
          </p>
        </div>

      </main>

      <TopicNavigation 
        prevPath="/parcial2/sistemas/compatibles" 
        nextPath="/parcial2/sistemas/matriz-ampliada" 
      />
    
      <AiChatBot 
        topicTitle="Sistemas Incompatibles" 
        topicContext="Concepto del conjunto solución vacío, interpretación geométrica de sistemas sin solución y la identificación de absurdos matemáticos (0=k) en la resolución." 
      />
    </div>
  );
};

export default SistemasIncompatibles;
