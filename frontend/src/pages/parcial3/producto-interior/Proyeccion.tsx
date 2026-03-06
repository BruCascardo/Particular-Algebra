import React from 'react';
import { InlineMath, BlockMath } from 'react-katex';
import TopicHeader from '../../../components/TopicHeader';
import TopicNavigation from '../../../components/TopicNavigation';
import AiChatBot from '../../../components/AiChatBot';
import './ProductoInteriorTopic.css';

const Proyeccion: React.FC = () => {
  return (
    <div className="pi-topic-container">
      <TopicHeader 
        title="Complemento Ortogonal y Proyección Ortogonal" 
        subtitle="Descomposición del espacio en subespacios perpendiculares"
      />

      <main className="topic-content">
        <div className="concept-box">
          <h3>Suma Directa en Subespacios</h3>
          <p>
            Imaginemos el espacio 3D donde <InlineMath math="W" /> es el plano <InlineMath math="XY" />. Resulta intuitivo que cualquier vector que esté en el eje <InlineMath math="Z" /> será ortogonal a todos y cada uno de los vectores dentro de <InlineMath math="W" />.
          </p>
        </div>

        <h2>Complemento Ortogonal (<InlineMath math="W^\perp" />)</h2>
        <p>
          Dado un subespacio vectorial <InlineMath math="W" /> de <InlineMath math="V" />, el <strong>complemento ortogonal</strong>, denotado como <InlineMath math="W^\perp" /> ("W ortogonal" o "W perpendicular"), es el conjunto de <strong>todos</strong> los vectores <InlineMath math="\vec{u} \in V" /> que son ortogonales a todos y cada uno de los vectores del subespacio <InlineMath math="W" />.
        </p>
        <div className="formula-box">
          <BlockMath math="W^\perp = \{ \vec{u} \in V \mid \langle \vec{u}, \vec{w} \rangle = 0 \text{ para todo } \vec{w} \in W \}" />
        </div>
        
        <ul className="list-styled">
          <li><strong>Teorema:</strong> <InlineMath math="W^\perp" /> no es un simple conjunto, es en sí mismo un subespacio vectorial genuino de <InlineMath math="V" />.</li>
          <li>La intersección entre <InlineMath math="W" /> y <InlineMath math="W^\perp" /> contiene única y exclusivamente al vector nulo: <InlineMath math="W \cap W^\perp = \{\vec{0}\}" />.</li>
          <li>Sus dimensiones son complementarias: <InlineMath math="\dim(V) = \dim(W) + \dim(W^\perp)" />.</li>
        </ul>

        <div className="example-box">
          <p><strong>Cálculo:</strong></p>
          <p>
            Si conocemos una base de <InlineMath math="W" />, basta con exigir que un vector genérico sea ortogonal (producto escalar = 0) a cada uno de los vectores que constituyen esa base de <InlineMath math="W" />. Resolviendo ese sistema de ecuaciones homogéneas, obtendremos el conjunto de todo el complemento <InlineMath math="W^\perp" />.
          </p>
        </div>

        <h2>Proyección Ortogonal</h2>
        <p>
          Gracias al Teorema de la Proyección, cualquier espacio <InlineMath math="V" /> (de dimensión finita) se puede descomponer perfectamente. 
          Esto significa que cualquier vector <InlineMath math="\vec{v} \in V" /> se puede escribir de forma <strong>única</strong> como la suma de dos partes:
        </p>
        <div className="formula-box">
          <BlockMath math="\vec{v} = \vec{w}_1 + \vec{w}_2" />
        </div>
        <p>Donde <InlineMath math="\vec{w}_1 \in W" /> (es la proyección) y <InlineMath math="\vec{w}_2 \in W^\perp" /> (es el residuo ortogonal u "ortogonal respecto a W").</p>

        <h3>Cálculo de la Proyección sobre <InlineMath math="W" /></h3>
        <p>
          Para encontrar esa precisa <InlineMath math="\vec{w}_1" /> que llamamos la proyección ortogonal de <InlineMath math="\vec{v}" /> sobre <InlineMath math="W" /> (<InlineMath math="P_W(\vec{v})" />):
        </p>
        <ol className="list-styled">
          <li>Primero debes hallar una <strong>base ortogonal</strong> <InlineMath math="\{\vec{u}_1, \dots, \vec{u}_k\}" /> para <InlineMath math="W" /> (podrías usar Gram-Schmidt si solo tienes base ordinaria de W).</li>
          <li>Luego, calculas la suma de las proyecciones elementales sobre cada vector de esa base:</li>
        </ol>
        <div className="formula-box">
          <BlockMath math="P_W(\vec{v}) = \frac{\langle \vec{v}, \vec{u}_1 \rangle}{\|\vec{u}_1\|^2}\vec{u}_1 + \dots + \frac{\langle \vec{v}, \vec{u}_k \rangle}{\|\vec{u}_k\|^2}\vec{u}_k" />
        </div>
        
        <p>
          La parte residual (que apunta a <InlineMath math="W^\perp" />) se la obtiene simplemente restando: <InlineMath math="\vec{w}_2 = \vec{v} - P_W(\vec{v})" />.
        </p>

        <div className="concept-box">
          <h3>Distancia mínima</h3>
          <p>La proyección ortogonal tiene una propiedad asombrosa. De todos los infinitos puntos y vectores que habitan en el subespacio <InlineMath math="W" />, la proyección ortogonal <InlineMath math="P_W(\vec{v})" /> es el punto <strong>más cercano</strong> ("mejor aproximación") bién la menor distancia geométrica real hasta el vector <InlineMath math="\vec{v}" />. La distancia se mide por la norma del residuo: <InlineMath math="d_{min} = \|\vec{v} - P_W(\vec{v})\|" />.</p>
        </div>

      </main>

      <TopicNavigation 
        prevPath="/parcial3/producto-interior/gram-schmidt" 
      />

      <AiChatBot 
        topicTitle="Complemento Ortogonal y Proyección Ortogonal" 
        topicContext="El concepto de Complemento Ortogonal (W perp) con su dimensión V = dim W + dim W perp, su cálculo mediante resolución de sistema homogéneo partiendo de la base de W. El teorema de la proyección ortogonal u = w1 + w2 en la suma directa, cálculo usando una base de W exclusivamente ortogonal y la propiedad de la aproximación óptima / distancia mínima." 
      />
    </div>
  );
};

export default Proyeccion;
