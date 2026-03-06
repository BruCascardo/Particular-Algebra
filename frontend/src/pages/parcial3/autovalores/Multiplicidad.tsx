import React from 'react';
import { InlineMath, BlockMath } from 'react-katex';
import TopicHeader from '../../../components/TopicHeader';
import TopicNavigation from '../../../components/TopicNavigation';
import AiChatBot from '../../../components/AiChatBot';
import './AutovaloresTopic.css';

const Multiplicidad: React.FC = () => {
  return (
    <div className="av-topic-container">
      <TopicHeader 
        title="Espacios Propios y Multiplicidades" 
        subtitle="Analizando la cantidad y calidad de los autovectores asociados"
      />

      <main className="topic-content">
        <div className="concept-box">
          <h3>Espacio Propio o Autoespacio (<InlineMath math="E_\lambda" />)</h3>
          <p>
            Al calcular un autovalor específico <InlineMath math="\lambda_1" />, no le corresponde un único autovector mágico, ¡le corresponden infinitos! Cualquier múltiplo de un autovector sigue siendo autovector. 
            El conjunto completo de <strong>todos</strong> los autovectores asociados a <InlineMath math="\lambda_1" />, unidos al vector nulo <InlineMath math="\vec{0}" />, constituye un subespacio vectorial legítimo llamado <strong>Autoespacio</strong>.
          </p>
          <div className="formula-box">
            <BlockMath math="E_{\lambda_1} = \ker(A - \lambda_1 I)" />
          </div>
          <p>Se obtiene llanamente reemplazando el valor de <InlineMath math="\lambda_1" /> en la matriz y resolviendo el sistema homogéneo para hallar su base.</p>
        </div>

        <h2>Multiplicidad Algebraica (M.A.)</h2>
        <p>
          Un polinomio puede tener raíces repetidas. Por ejemplo, en <InlineMath math="(\lambda - 2)^3 \cdot (\lambda + 1) = 0" />, la raíz <InlineMath math="\lambda=2" /> aparece tres veces. La <strong>Multiplicidad Algebraica</strong> de un autovalor es el número de veces que ese autovalor figura como raíz del polinomio característico.
        </p>

        <h2>Multiplicidad Geométrica (M.G.)</h2>
        <p>
          La <strong>Multiplicidad Geométrica</strong> de un autovalor cuenta la cantidad "real" de direcciones distintas (totalmente independientes) que se asocian a ese autovalor. Se define analíticamente como la <strong>dimensión del espacio propio asociado</strong>:
        </p>
        <div className="formula-box">
          <BlockMath math="\text{M.G.} = \dim(E_\lambda) = n - \text{Rango}(A - \lambda I)" />
        </div>

        <div className="example-box">
          <p><strong>El Teorema Crucial de Relación (Desigualdad fundamental):</strong></p>
          <p>
            La realidad (M.G.) nunca puede superar a las expectativas teóricas (M.A.), pero sí puede quedarse corta. La regla de oro que siempre se cumple para cualquier autovalor es:
          </p>
          <div className="formula-box">
             <InlineMath math="1 \le \text{M.G.} \le \text{M.A.} \le n" />
          </div>
          <p>Si la M.A. de una raíz es 1 (es raíz simple), ¡la M.G. está obligada a ser 1! Pero si la M.A. es 3, a veces resolveremos el sistema y lograremos encontrar 3 vectores base (M.G.=3), de a veces solo 2 o incluso apenas 1.</p>
          <p>Cuando la multiplicidad geométrica se queda "corta" respecto a la algebraica (M.G. &lt; M.A.), se dice que la matriz es <strong>defectuosa</strong> (le faltan autovectores independientes para modelar el espacio completo).</p>
        </div>

      </main>

      <TopicNavigation 
        prevPath="/parcial3/autovalores/polinomio-caracteristico"
        nextPath="/parcial3/autovalores/diagonalizacion" 
      />

      <AiChatBot 
        topicTitle="Espacios Propios y Multiplicidad" 
        topicContext="Obtención del autoespacio (Kerevl E_lambda) como nulidad de la matriz evaluada. Definición y diferencia entre Multiplicidad Algebraica (veces que repite la raíz) y Multiplicidad Geométrica (dimensión del autoespacio o cantidad de vectores de su base). La desigualdad insalvable general 1 <= M.G. <= M.A." 
      />
    </div>
  );
};

export default Multiplicidad;
