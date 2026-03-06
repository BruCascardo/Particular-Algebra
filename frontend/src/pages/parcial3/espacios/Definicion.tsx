import React from 'react';
import { InlineMath } from 'react-katex';
import TopicHeader from '../../../components/TopicHeader';
import TopicNavigation from '../../../components/TopicNavigation';
import AiChatBot from '../../../components/AiChatBot';
import './EspaciosTopic.css';

const DefinicionPropiedades: React.FC = () => {
  return (
    <div className="espacios-topic-container">
      <TopicHeader 
        title="Definición y propiedades fundamentales" 
        subtitle="Introducción formal a los Espacios Vectoriales"
      />

      <main className="topic-content">
        <div className="concept-box">
          <h3>Definición Clave</h3>
          <p>
            Un <strong>espacio vectorial</strong> <InlineMath math="V" /> sobre un cuerpo <InlineMath math="K" /> (como los números reales <InlineMath math="\mathbb{R}" /> o complejos <InlineMath math="\mathbb{C}" />) es un conjunto no vacío acompañado de dos operaciones:
          </p>
          <ul className="list-styled">
            <li><strong>Suma de vectores:</strong> <InlineMath math="\vec{u} + \vec{v}" /></li>
            <li><strong>Producto por un escalar:</strong> <InlineMath math="\alpha \cdot \vec{u}" /></li>
          </ul>
        </div>

        <h2>Axiomas de un Espacio Vectorial</h2>
        <p>
          Para que <InlineMath math="V" /> sea considerado un espacio vectorial, debe cumplir las siguientes propiedades (axiomas) para todo <InlineMath math="\vec{u}, \vec{v}, \vec{w} \in V" /> y escalares <InlineMath math="\alpha, \beta \in K" />:
        </p>

        <h3>Propiedades de la Suma (Suma Vectorial)</h3>
        <ul className="list-styled">
          <li><strong>Cerradura:</strong> <InlineMath math="\vec{u} + \vec{v} \in V" /></li>
          <li><strong>Conmutatividad:</strong> <InlineMath math="\vec{u} + \vec{v} = \vec{v} + \vec{u}" /></li>
          <li><strong>Asociatividad:</strong> <InlineMath math="(\vec{u} + \vec{v}) + \vec{w} = \vec{u} + (\vec{v} + \vec{w})" /></li>
          <li><strong>Elemento Neutro (Vector Nulo):</strong> Existe <InlineMath math="\vec{0} \in V" /> tal que <InlineMath math="\vec{u} + \vec{0} = \vec{u}" /></li>
          <li><strong>Elemento Opuesto:</strong> Para cada <InlineMath math="\vec{u}" />, existe <InlineMath math="-\vec{u}" /> tal que <InlineMath math="\vec{u} + (-\vec{u}) = \vec{0}" /></li>
        </ul>

        <h3>Propiedades del Producto por un Escalar</h3>
        <ul className="list-styled">
          <li><strong>Cerradura:</strong> <InlineMath math="\alpha \cdot \vec{u} \in V" /></li>
          <li><strong>Distributividad respecto a la suma de vectores:</strong> <InlineMath math="\alpha \cdot (\vec{u} + \vec{v}) = \alpha \cdot \vec{u} + \alpha \cdot \vec{v}" /></li>
          <li><strong>Distributividad respecto a la suma de escalares:</strong> <InlineMath math="(\alpha + \beta) \cdot \vec{u} = \alpha \cdot \vec{u} + \beta \cdot \vec{u}" /></li>
          <li><strong>Asociatividad mixta:</strong> <InlineMath math="\alpha \cdot (\beta \cdot \vec{u}) = (\alpha \beta) \cdot \vec{u}" /></li>
          <li><strong>Elemento Identidad:</strong> <InlineMath math="1 \cdot \vec{u} = \vec{u}" /> (donde 1 es el elemento neutro del cuerpo)</li>
        </ul>

        <div className="example-box">
          <p><strong>Ejemplos Clásicos:</strong></p>
          <ul className="list-styled">
            <li><InlineMath math="\mathbb{R}^n" />: El espacio de tuplas <InlineMath math="(x_1, x_2, \dots, x_n)" /> de números reales.</li>
            <li><InlineMath math="\mathbb{P}_n" />: El espacio de polinomios de grado menor o igual a <InlineMath math="n" />.</li>
            <li><InlineMath math="M_{m \times n}" />: El espacio de matrices de tamaño <InlineMath math="m \times n" />.</li>
          </ul>
        </div>
      </main>

      <TopicNavigation 
        nextPath="/parcial3/espacios/subespacios" 
      />

      <AiChatBot 
        topicTitle="Definición y propiedades fundamentales" 
        topicContext="Definición formal de espacios vectoriales, los 10 axiomas de un espacio vectorial incluyendo cerradura, asociatividad, elemento neutro, inverso aditivo, y propiedades de la ley de composición externa (producto por un escalar)." 
      />
    </div>
  );
};

export default DefinicionPropiedades;
