import React from 'react';
import 'katex/dist/katex.min.css';
import { InlineMath, BlockMath } from 'react-katex';
import TopicHeader from '../../components/TopicHeader';
import TopicNavigation from '../../components/TopicNavigation';
import AiChatBot from '../../components/AiChatBot';
import '../vectores/VectorTopic.css';

const PerpendicularidadParalelismoRectas: React.FC = () => {

  return (
    <div className="vector-topic-container">
      <TopicHeader 
        title="5.3. Perpendicularidad y Paralelismo" 
        subtitle="Condiciones rectoras absolutas entre pares de rectas en el plano"
      />

      <main className="topic-content">
        <div className="concept-box">
          <h3>El Vínculo Directo</h3>
          <p>
            Al tener dos rectas enfrentadas colisionando o ignorándose en el vacío del espacio <InlineMath math="\mathbb{R}^2" />, las propiedades geométricas profundas que las vinculan (como cruzarse a 90 grados o correr perfectamente a la par) recaen exclusivamente en la <strong>naturaleza de la relación entre sus vectores directores o sus vectores normales ortogonales</strong>.
          </p>
        </div>

        <h2>Condición de Paralelismo Rectilíneo (<InlineMath math="r_1 \parallel r_2" />)</h2>
        <p>
          Dos hermosas rectas serán matemáticamente paralelas (jamás llegando a intersecarse o bien superponiéndose de manera idéntica) si y solo si sus vectores directores o normales son geométricamente proporcionales.
        </p>

        <div className="formula-box" style={{ background: 'rgba(50, 60, 100, 0.4)' }}>
          <p style={{ margin: 0, fontSize: '1rem', color: '#e0e1dd', paddingBottom: '0.8rem' }}>Por Proporcionalidad de Componentes:</p>
          <BlockMath math="\frac{u_{1x}}{u_{2x}} = \frac{u_{1y}}{u_{2y}}" />
        </div>

        <div className="example-box">
          <h4>¿Qué pasa con las pendientes?</h4>
          <p>
            Al tenerlas en forma explícita <InlineMath math="(y = mx + h)" />, este requerimiento de paralelismo vectorizado se traduce inmediatamente en la igualdad absoluta de sus grados de inclinación.
          </p>
          <BlockMath math="r_1 \parallel r_2 \iff m_1 = m_2" />
        </div>


        <h2>Condición de Perpendicularidad (<InlineMath math="r_1 \perp r_2" />)</h2>
        <p>
          De manera análoga, dos rectas resultan ser rígidamente perpendiculares chocando a 90° exactos si y solo si el Producto Escalar de sus respectivos vectores directores (o normales) se somete y aniquila mutuamente resultando ser nulo absoluto.
        </p>

        <div className="formula-box" style={{ background: 'rgba(150, 50, 50, 0.2)', border: '1px solid #cc4444' }}>
          <p style={{ margin: 0, fontSize: '1rem', color: '#e0e1dd', paddingBottom: '0.8rem' }}>Por Producto Escalar:</p>
          <BlockMath math="\vec{u_1} \cdot \vec{u_2} = 0" />
        </div>
        
        <div className="example-box">
          <h4>Perpendicularidad de las pendientes</h4>
          <p>Puesto que todo emana de las entrañas matemáticas directas, si volvemos a la notación simple paramétrica o explícita, que dos rectas colisionen perpenticularmente obliga a que sus pendientes sean exactamente la <strong>inversa negativa</strong> recíproca una respecto de la otra.</p>
          <BlockMath math="r_1 \perp r_2 \iff m_1 = -\frac{1}{m_2}" />
        </div>

      </main>

      <TopicNavigation 
        prevPath="/parcial1/recta-plano/angulo-rectas"
        nextPath="/parcial1/recta-plano/distancia-punto-recta" 
      />
    
      <AiChatBot 
        topicTitle="Perpendicularidad y Paralelismo" 
        topicContext="Uso de pendientes ($m1 * m2 = -1$ o $m1 = m2$) y vectores directores para probar rectas ortogonales o colineales." 
      />
    </div>
  );
};

export default PerpendicularidadParalelismoRectas;
