import React from 'react';
import 'katex/dist/katex.min.css';
import { InlineMath, BlockMath } from 'react-katex';
import TopicHeader from '../../components/TopicHeader';
import TopicNavigation from '../../components/TopicNavigation';
import AiChatBot from '../../components/AiChatBot';
import '../vectores/VectorTopic.css';

const CondicionParalelismo: React.FC = () => {

  return (
    <div className="vector-topic-container">
      <TopicHeader 
        title="3.2. Condición de Paralelismo" 
        subtitle="¿Cuándo dos vectores corren sobre la misma pista?"
      />

      <main className="topic-content">
        <div className="concept-box">
          <h3>Definición Vectorial de Paralelismo</h3>
          <p>
            Dos vectores <InlineMath math="\vec{u}" /> y <InlineMath math="\vec{v}" /> (no nulos) se consideran <strong>paralelos</strong> (denotado <InlineMath math="\vec{u} \parallel \vec{v}" />) si y solo si poseen la <strong>misma dirección</strong>. 
          </p>
          <p>
            En términos algebraicos, esto implica que uno es obligatoriamente un múltiplo escalar del otro.
          </p>
        </div>

        <div className="formula-box">
          <p style={{ margin: 0, fontSize: '1rem', color: '#e0e1dd' }}>Ecuación de Paralelismo Vectorial:</p>
          <BlockMath math="\vec{u} \parallel \vec{v} \iff \exists \; k \in \mathbb{R} \setminus \{0\} \; / \; \vec{u} = k \cdot \vec{v}" />
        </div>

        <h2>La Condición de Proporcionalidad Analítica</h2>
        <p>
          Si trabajamos con componentes cartesianas, la ecuación fundamental del paralelismo se traduce en una regla supremamente útil y fácil de calcular: <strong>las componentes homólogas de dos vectores paralelos deben ser proporcionales</strong>.
        </p>

        <p>
          Supongamos dos vectores espaciales en <InlineMath math="\mathbb{R}^3" />:
          <BlockMath math="\vec{u} = (u_x, u_y, u_z)" />
          <BlockMath math="\vec{v} = (v_x, v_y, v_z)" />
        </p>

        <p>
          La condición de paralelismo se cumple si existe un único número <InlineMath math="k" /> constante tal que:
        </p>

        <div className="formula-box" style={{ background: 'rgba(60, 100, 60, 0.3)', border: '1px solid #669966' }}>
          <BlockMath math="\frac{u_x}{v_x} = \frac{u_y}{v_y} = \frac{u_z}{v_z} = k" />
        </div>

        <p>
          <em>(Nota: Asumiendo que ninguna componente del denominador es cero. Si una componente de <InlineMath math="\vec{v}" /> es 0, la homóloga de <InlineMath math="\vec{u}" /> también debe ser 0 obligatoriamente para poder ser paralelos).</em>
        </p>

        <div className="example-box">
          <h4>Ejemplo Práctico para un Examen</h4>
          <p>
            ¿Son los vectores <InlineMath math="\vec{a} = (2, -3, 4)" /> y <InlineMath math="\vec{b} = (-6, 9, -12)" /> paralelos?
          </p>
          <p>Apicamos la condición analítica de proporcionalidad:</p>
          <BlockMath math="\frac{-6}{2} = -3" />
          <BlockMath math="\frac{9}{-3} = -3" />
          <BlockMath math="\frac{-12}{4} = -3" />
          <p>
            Como vemos, todas las fracciones arrojan el <strong>mismo escalar <InlineMath math="k = -3" /></strong>. 
          </p>
          <p style={{marginTop: '0.8rem'}}>
            <strong>Conclusión:</strong> Sí, son paralelos. De hecho podemos escribir <InlineMath math="\vec{b} = -3\vec{a}" />. Al ser la constante negativa, también afirmamos que tienen <strong>sentidos opuestos</strong>.
          </p>
        </div>

        <h2>Tipos de Paralelismo según 'k'</h2>
        <ul className="list-styled">
          <li>Si <InlineMath math="k > 0" />: Los vectores apuntan con <strong>igual dirección y el mismo sentido</strong> (paralelismo convergente).</li>
          <li>Si <InlineMath math="k < 0" />: Los vectores son paralelos pero con <strong>sentidos contrarios</strong> u opuestos (antiparalelismo o paralelismo divergente).</li>
        </ul>
      </main>

      <TopicNavigation 
        prevPath="/parcial1/sistemas/referencias-dimensiones"
        nextPath="/parcial1/sistemas/proyeccion-ortogonal" 
      />
    
      <AiChatBot 
        topicTitle="Condición de Paralelismo" 
        topicContext="Proporcionalidad estricta entre las componentes de dos vectores para ser paralelos ($u = k * v$)." 
      />
    </div>
  );
};

export default CondicionParalelismo;
