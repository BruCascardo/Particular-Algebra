import React from 'react';
import { InlineMath, BlockMath } from 'react-katex';
import TopicHeader from '../../../components/TopicHeader';
import TopicNavigation from '../../../components/TopicNavigation';
import AiChatBot from '../../../components/AiChatBot';
import './EspaciosTopic.css';

const CombinacionLineal: React.FC = () => {
  return (
    <div className="espacios-topic-container">
      <TopicHeader 
        title="Combinación Lineal y Espacio Generado" 
        subtitle="Construyendo nuevos vectores a partir de otros"
      />

      <main className="topic-content">
        <div className="concept-box">
          <h3>Combinación Lineal</h3>
          <p>
            Dado un conjunto de vectores <InlineMath math="A = \{\vec{v}_1, \vec{v}_2, \dots, \vec{v}_k\}" /> en un espacio vectorial <InlineMath math="V" />, decimos que un vector <InlineMath math="\vec{u} \in V" /> es una <strong>combinación lineal</strong> de los vectores de <InlineMath math="A" /> si existen escalares <InlineMath math="\alpha_1, \alpha_2, \dots, \alpha_k \in K" /> tales que:
          </p>
        </div>

        <div className="formula-box">
          <BlockMath math="\vec{u} = \alpha_1\vec{v}_1 + \alpha_2\vec{v}_2 + \dots + \alpha_k\vec{v}_k" />
        </div>

        <p>
          En otras palabras, podemos "fabricar" o "alcanzar" a <InlineMath math="\vec{u}" /> estirando, contrayendo o invirtiendo los vectores de <InlineMath math="A" /> y luego sumándolos.
        </p>

        <h2>Espacio Generado (Cápsula Lineal)</h2>
        <div className="concept-box">
          <h3>Definición</h3>
          <p>
            El conjunto de <strong>todas</strong> las posibles combinaciones lineales de un conjunto de vectores <InlineMath math="A = \{\vec{v}_1, \vec{v}_2, \dots, \vec{v}_k\}" /> se llama <strong>espacio generado</strong> por <InlineMath math="A" />, y se denota como <InlineMath math="Gen(A)" /> o <InlineMath math="gen\{\vec{v}_1, \dots, \vec{v}_k\}" />.
          </p>
        </div>

        <div className="formula-box">
          <BlockMath math="Gen(A) = \{ \vec{u} \in V \mid \vec{u} = \alpha_1\vec{v}_1 + \dots + \alpha_k\vec{v}_k \text{ para } \alpha_i \in K \}" />
        </div>

        <ul className="list-styled">
          <li><strong>Teorema:</strong> El espacio generado por cualquier subconjunto de vectores es <strong>siempre</strong> un subespacio vectorial de <InlineMath math="V" />.</li>
          <li>Incluso si el conjunto <InlineMath math="A" /> no es un subespacio en sí mismo, al tomar todas sus combinaciones lineales, "rellenamos" los huecos y creamos un subespacio (la adición del vector nulo está garantizada haciendo todos los escalares cero).</li>
        </ul>

        <div className="example-box">
          <p>
            <strong>Ejemplo:</strong> En <InlineMath math="\mathbb{R}^3" />, si tomamos un solo vector no nulo <InlineMath math="\vec{v}" />, el espacio que genera <InlineMath math="gen\{\vec{v}\}" /> es una recta que pasa por el origen. <br/>
            Si tomamos dos vectores no nulos <InlineMath math="\vec{v}_1" /> y <InlineMath math="\vec{v}_2" /> que no apuntan en la misma dirección (no son colineales), su espacio generado <InlineMath math="gen\{\vec{v}_1, \vec{v}_2\}" /> es un plano que pasa por el origen.
          </p>
        </div>

        <h2>Conjuntos Generadores</h2>
        <p>
          Si el espacio generado por un conjunto de vectores <InlineMath math="A" /> coincide con todo el espacio vectorial <InlineMath math="V" /> (es decir, <InlineMath math="Gen(A) = V" />), se dice que <InlineMath math="A" /> es un <strong>sistema de generadores</strong> de <InlineMath math="V" />.
        </p>

      </main>

      <TopicNavigation 
        prevPath="/parcial3/espacios/subespacios"
        nextPath="/parcial3/espacios/dependencia-lineal" 
      />

      <AiChatBot 
        topicTitle="Combinación Lineal y Espacio Generado" 
        topicContext="Definición de combinación lineal, concepto de espacio generado (gen o span) y conjuntos generadores. Interpretación geométrica y teoremas fundamentales." 
      />
    </div>
  );
};

export default CombinacionLineal;
