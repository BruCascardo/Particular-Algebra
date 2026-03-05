import React from 'react';
import 'katex/dist/katex.min.css';
import { InlineMath, BlockMath } from 'react-katex';
import TopicHeader from '../../components/TopicHeader';
import TopicNavigation from '../../components/TopicNavigation';
import AiChatBot from '../../components/AiChatBot';
import './VectorTopic.css';

const PropiedadesAdicion: React.FC = () => {

  return (
    <div className="vector-topic-container">
      <TopicHeader 
        title="Propiedades de la Adición" 
        subtitle="Leyes matemáticas que rigen la suma de vectores"
      />

      <main className="topic-content">
        <div className="concept-box">
          <h3>Estructura Algebraica</h3>
          <p>
            Como la suma de vectores es analíticamente idéntica a la suma de números reales en sus respectivas componentes, los vectores heredan con naturalidad las propiedades de los números reales. El conjunto de vectores de dimensión <InlineMath math="n" /> con la adición forman internamente un <strong>Grupo Abeliano</strong>.
          </p>
        </div>

        <h2>Las 4 Propiedades Fundamentales</h2>

        <h3>1. Propiedad Conmutativa</h3>
        <p>El orden de los sumandos no altera el vector resultante (al igual que no altera su destino en el método gráfico del paralelogramo).</p>
        <div className="formula-box">
          <BlockMath math="\vec{u} + \vec{v} = \vec{v} + \vec{u}" />
        </div>

        <h3>2. Propiedad Asociativa</h3>
        <p>A la hora de sumar tres o más vectores, da igual cómo los agrupes operando de a pares; la resultante siempre será la misma pieza final del polígono.</p>
        <div className="formula-box">
          <BlockMath math="(\vec{u} + \vec{v}) + \vec{w} = \vec{u} + (\vec{v} + \vec{w})" />
        </div>

        <h3>3. Existencia del Elemento Neutro</h3>
        <p>Existe un vector único, el <strong>Vector Nulo</strong> <InlineMath math="\vec{0} = (0,0,...)" />, que al sumarse con cualquier otro vector, lo deja inalterado. Es el equivalente algebraico al "cero".</p>
        <div className="formula-box">
          <BlockMath math="\vec{u} + \vec{0} = \vec{u}" />
        </div>

        <h3>4. Existencia del Elemento Inverso (u Opuesto)</h3>
        <p>Para todo vector <InlineMath math="\vec{u}" />, siempre existe un único vector denominado <strong>Vector Opuesto</strong> <InlineMath math="-\vec{u}" />, tal que si sumamos ambos, nos devuelve el elemento neutro (el vector nulo).</p>
        <div className="formula-box">
          <BlockMath math="\vec{u} + (-\vec{u}) = \vec{0}" />
        </div>

        <div className="example-box">
          <h4>Aplicación en Ecuaciones Vectoriales</h4>
          <p>
            Gracias a estas propiedades exactas e idénticas a las del álgebra de números simples regulares, podemos "despejar" variables vectoriales con gran facilidad. Por ejemplo, en una ecuación abstracta:
          </p>
          <BlockMath math="\vec{x} + \vec{a} = \vec{b}" />
          <p>
            Podemos sumar el opuesto <InlineMath math="-\vec{a}" /> en ambos miembros, aplicar la asociatividad, aislar <InlineMath math="\vec{0}" /> debido a la existencia del inverso, para finalmente poder afirmar matemáticamente y de manera robusta que:
          </p>
          <BlockMath math="\vec{x} = \vec{b} - \vec{a}" />
        </div>
      </main>

      <TopicNavigation 
        prevPath="/parcial1/operaciones/suma-vectores"
        nextPath="/parcial1/operaciones/resta-vectores" 
      />
    
      <AiChatBot 
        topicTitle="Propiedades de la Adición" 
        topicContext="Propiedades de la suma vectorial: Conmutativa, Asociativa, Existencia de Neutro y Opuesto." 
      />
    </div>
  );
};

export default PropiedadesAdicion;
