import React from 'react';
import { InlineMath, BlockMath } from 'react-katex';
import TopicHeader from '../../../components/TopicHeader';
import TopicNavigation from '../../../components/TopicNavigation';
import AiChatBot from '../../../components/AiChatBot';
import './ConicasTopic.css';

const ElipseHiperbola: React.FC = () => {
  return (
    <div className="conicas-topic-container">
      <TopicHeader 
        title="Elipse e Hipérbola" 
        subtitle="Las curvas de los semiejes y focos dobles"
      />

      <main className="topic-content">
        <h2>La Elipse</h2>
        <p>
          Geométricamente, es el conjunto de puntos cuya <strong>suma</strong> de distancias a dos puntos fijos (los Focos <InlineMath math="F_1, F_2" />) es siempre una cantidad constante (<InlineMath math="2a" />). El plano de corte del cono está más inclinado que en la circunferencia pero sin tocar la base.
        </p>

        <div className="concept-box">
          <h3>Ecuación y Elementos</h3>
          <p>
             Ecuación ordinaria centrada en <InlineMath math="(h,k)" />. Ambos términos <InlineMath math="x^2" /> y <InlineMath math="y^2" /> son positivos, pero están divididos por denominadores distintos (semiejes).
          </p>
          <div className="formula-box">
            <BlockMath math="\frac{(x - h)^2}{a^2} + \frac{(y - k)^2}{b^2} = 1" />
          </div>
          <ul className="list-styled">
            <li><strong><InlineMath math="a" /> (Semieje mayor):</strong> Siempre es el denominador de mayor magnitud. Dicta el largo máximo de la elipse. Si <InlineMath math="a^2" /> está bajo las <InlineMath math="x" />, es horizontal. Si está bajo las <InlineMath math="y" />, es vertical.</li>
            <li><strong><InlineMath math="b" /> (Semieje menor):</strong> El denominador más chico.</li>
            <li><strong><InlineMath math="c" /> (Distancia focal):</strong> Distancia del centro a los focos. Satisface la relación pitagórica <strong><InlineMath math="a^2 = b^2 + c^2" /></strong> (Cuidado, es distinta a la de hipérbola).</li>
          </ul>
        </div>

        <h2>La Hipérbola</h2>
        <p>
          Geométricamente, es el conjunto de puntos cuya <strong>diferencia</strong> (valor absoluto de la resta) de las distancias a dos focos es una constante. Esta curva nace cuando el plano corta el cono doble paralelamente a su eje geométrico vertical: tiene dos "ramas" que escapan al infinito persiguiendo sus asíntotas.
        </p>

        <div className="concept-box">
          <h3>Ecuación y Elementos</h3>
          <p>
             La ecuación presenta los dos cuadrados pero obligatoriamente con <strong>una resta (un término positivo y el otro negativo)</strong>.
          </p>
          
          <p><strong>Hipérbola Horizontal:</strong> El término positivo le pertenece a <InlineMath math="x" />.</p>
          <div className="formula-box">
            <BlockMath math="\frac{(x - h)^2}{a^2} - \frac{(y - k)^2}{b^2} = 1" />
          </div>

          <p><strong>Hipérbola Vertical:</strong> El término positivo le pertenece a <InlineMath math="y" />.</p>
          <div className="formula-box">
            <BlockMath math="\frac{(y - k)^2}{a^2} - \frac{(x - h)^2}{b^2} = 1" />
          </div>

          <ul className="list-styled">
            <li><strong><InlineMath math="a" />:</strong> Ahora NO importa quién sea más grande. El parámetro <InlineMath math="a^2" /> siempre es el denominador del término que tiene signo <strong>POSITIVO</strong>. Representa el semieje Real o Transverso (donde están los vértices).</li>
            <li><strong><InlineMath math="b" />:</strong> Es el denominador del término negativo. Representa el semieje Imaginario o Conjugado (solo se usa para graficar las asíntotas).</li>
            <li><strong><InlineMath math="c" /> (Distancia focal):</strong> Los focos siempre están más lejos que los vértices. La relación pitagórica cambia: aquí predomina la C. <strong><InlineMath math="c^2 = a^2 + b^2" /></strong>.</li>
          </ul>
        </div>

        <div className="example-box">
          <p><strong>Asíntotas de la Hipérbola Centrada (en el origen 0,0):</strong></p>
          <p>
            Sus rectas guía oblicuas responden a combinaciones de los semiejes:
            Si es horizontal: <InlineMath math="y = \pm \frac{b}{a} x" />. Si es vertical: <InlineMath math="y = \pm \frac{a}{b} x" />.
          </p>
        </div>

      </main>

      <TopicNavigation 
        prevPath="/parcial3/conicas/parabola-circunferencia"
        nextPath="/parcial3/conicas/ecuacion-general" 
      />

      <AiChatBot 
        topicTitle="Elipse e Hipérbola" 
        topicContext="Elipse: suma constante de distancias. Fórmula a, b, c (a^2 = b^2 + c^2). Hipérbola: diferencia constante de distancias. Términos restados, relación c^2 = a^2 + b^2. Las asíntotas de una hipérbola. Importante recalcar para la elipse 'a' es el mayor, y para la hipérbola 'a' es el del término positivo." 
      />
    </div>
  );
};

export default ElipseHiperbola;
