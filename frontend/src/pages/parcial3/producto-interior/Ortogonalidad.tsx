import React from 'react';
import { InlineMath, BlockMath } from 'react-katex';
import TopicHeader from '../../../components/TopicHeader';
import TopicNavigation from '../../../components/TopicNavigation';
import AiChatBot from '../../../components/AiChatBot';
import './ProductoInteriorTopic.css';

const Ortogonalidad: React.FC = () => {
  return (
    <div className="pi-topic-container">
      <TopicHeader 
        title="Ortogonalidad y Conjuntos Ortonormales" 
        subtitle="La perfección de las bases con ángulos rectos"
      />

      <main className="topic-content">
        <div className="concept-box">
          <h3>Ortogonalidad</h3>
          <p>
            Dos vectores <InlineMath math="\vec{u}" /> y <InlineMath math="\vec{v}" /> en un espacio con producto interior son <strong>ortogonales</strong> (perpendiculares a nivel generalizado) si y solo si su producto interior es cero:
          </p>
          <div className="formula-box">
             <InlineMath math="\langle \vec{u}, \vec{v} \rangle = 0" />
          </div>
          <p>
            El vector nulo <InlineMath math="\vec{0}" /> es ortogonal a absolutamente <strong>todos</strong> los vectores del espacio.
          </p>
        </div>

        <h2>Teorema de Pitágoras Generalizado</h2>
        <p>
          Al igual que en la geometría clásica, si dos vectores <InlineMath math="\vec{u}" /> y <InlineMath math="\vec{v}" /> son ortogonales, cumplen el Teorema de Pitágoras respecto a la norma inducida:
        </p>
        <div className="formula-box">
          <BlockMath math="\|\vec{u} + \vec{v}\|^2 = \|\vec{u}\|^2 + \|\vec{v}\|^2" />
        </div>

        <h2>Conjuntos Ortogonales y Ortonormales</h2>
        <p>
          Decimos que un conjunto de vectores <InlineMath math="S = \{\vec{v}_1, \vec{v}_2, \dots, \vec{v}_k\}" /> es <strong>ortogonal</strong> si todo par de vectores distintos dentro del conjunto son ortogonales entre sí. Formalmente, si <InlineMath math="\langle \vec{v}_i, \vec{v}_j \rangle = 0" /> para todo <InlineMath math="i \neq j" />.
        </p>

        <p>
          Un conjunto es <strong>ortonormal</strong> si además de ser ortogonal, <strong>todos sus vectores tienen norma 1</strong> (son unitarios). <br/>
          Una forma compacta de decirlo es usando la Delta de Kronecker (<InlineMath math="\delta_{ij}" />): <br/>
          <InlineMath math="\langle \vec{v}_i, \vec{v}_j \rangle = 1" /> si <InlineMath math="i = j" />, y <InlineMath math="0" /> si <InlineMath math="i \neq j" />.
        </p>

        <div className="example-box">
          <p><strong>Teorema de Independencia:</strong></p>
          <p>
             Todo conjunto ortogonal de vectores no nulos es <strong>Linealmente Independiente</strong> de forma automática. ¡Nunca es L.D. porque no pueden estar contenidos en los espacios generados por los otros!
          </p>
        </div>

        <h2>Bases Ortonormales</h2>
        <p>
          Una <strong>base ortonormal</strong> as el "santo grial" de los espacios vectoriales. La base canónica de <InlineMath math="\mathbb{R}^n" /> (compuesta por vectores con ceros y un uno) es el ejemplo perfecto de una base ortonormal respecto al producto punto escalar estándar.
        </p>
        
        <h3>Las coordenadas de Fourier</h3>
        <p>
          Si tienes una base ortogonal <InlineMath math="B = \{\vec{v}_1, \dots, \vec{v}_n\}" />, expresar un vector <InlineMath math="\vec{u}" /> como combinación lineal de esta base es extremadamente fácil. No necesitas resolver sistemas de ecuaciones matriciales. Cada coordenada se calcula de forma directa:
        </p>
        <div className="formula-box">
          <BlockMath math="\vec{u} = \frac{\langle \vec{u}, \vec{v}_1 \rangle}{\|\vec{v}_1\|^2}\vec{v}_1 + \frac{\langle \vec{u}, \vec{v}_2 \rangle}{\|\vec{v}_2\|^2}\vec{v}_2 + \dots + \frac{\langle \vec{u}, \vec{v}_n \rangle}{\|\vec{v}_n\|^2}\vec{v}_n" />
        </div>
        <p>
          Si la base además es <em>ortonormal</em>, los denominadores valen 1 y desaparecen:
        </p>
        <div className="formula-box">
          <BlockMath math="\vec{u} = \langle \vec{u}, \vec{v}_1 \rangle \vec{v}_1 + \dots + \langle \vec{u}, \vec{v}_n \rangle \vec{v}_n" />
        </div>

      </main>

      <TopicNavigation 
        prevPath="/parcial3/producto-interior/norma-distancia-angulo"
        nextPath="/parcial3/producto-interior/gram-schmidt" 
      />

      <AiChatBot 
        topicTitle="Ortogonalidad y Conjuntos Ortonormales" 
        topicContext="Definición de vectores ortogonales. Teorema de Pitágoras generalizado. Conjuntos ortogonales y conjuntos ortonormales. El teorema que afirma que conjuntos ortogonales (sin vector nulo) son l.i. Método inmediato para encontrar coordenadas en una base ortogonal." 
      />
    </div>
  );
};

export default Ortogonalidad;
