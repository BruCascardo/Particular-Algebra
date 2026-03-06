import React from 'react';
import { InlineMath, BlockMath } from 'react-katex';
import TopicHeader from '../../../components/TopicHeader';
import TopicNavigation from '../../../components/TopicNavigation';
import AiChatBot from '../../../components/AiChatBot';
import './TransformacionesTopic.css';

const ComposicionInversa: React.FC = () => {
  return (
    <div className="tl-topic-container">
      <TopicHeader 
        title="Composición e Inversa de Transformaciones" 
        subtitle="Uniendo cadenas de funciones lineales"
      />

      <main className="topic-content">
        <div className="concept-box">
          <h3>Composición de Transformaciones Lineales</h3>
          <p>
            Si tenemos dos transformaciones lineales secuenciales, primero <InlineMath math="T_1: U \to V" /> y luego <InlineMath math="T_2: V \to W" />, su <strong>composición</strong> <InlineMath math="T_2 \circ T_1" /> se define matemáticamente como aplicar primero <InlineMath math="T_1" /> y al resultado aplicarle <InlineMath math="T_2" />:
          </p>
          <div className="formula-box">
            <BlockMath math="(T_2 \circ T_1)(\vec{u}) = T_2(T_1(\vec{u}))" />
          </div>
          <p>
            El resultado es una nueva transformación lineal que va directamente de <InlineMath math="U \to W" />. ¡La composición de transformaciones lineales es siempre otra transformación lineal!
          </p>
        </div>

        <h2>La Magia de las Matrices en la Composición</h2>
        <p>
          Aquí es donde brilla el Álgebra Lineal: la operación funcional de "composición" se traduce algebraicamente en una simple <strong>multiplicación de matrices</strong>.
        </p>
        <p>
          Si la transformación <InlineMath math="T_1" /> tiene asociada la matriz <InlineMath math="A" />, y <InlineMath math="T_2" /> tiene asociada la matriz <InlineMath math="B" />, entonces la transformación compuesta <InlineMath math="T_2 \circ T_1" /> tendrá como matriz asociada exactactamente el producto matricial en ese mismo orden:
        </p>
        <div className="formula-box">
          <BlockMath math="M_{T_2 \circ T_1} = B \cdot A = M_{T_2} \cdot M_{T_1}" />
        </div>

        <div className="concept-box">
          <h3>Suma de Funciones</h3>
          <p>La misma relación biyectiva existe para la suma y escalar. Si sumas dos funciones <InlineMath math="(T_1 + T_2)(\vec{v})" />, la matriz resultante es sencillamente <InlineMath math="A+B" />.  Y si multiplicas <InlineMath math="c \cdot T_1(\vec{v})" /> es <InlineMath math="cA" />. En el fondo, el espacio de Transformaciones Lineales y el espacio de Matrices se comportan exactamente igual (son Isomorfos).</p>
        </div>

        <h2>Inversa de una Transformación Lineal</h2>
        <p>
          Una transformación lineal <InlineMath math="T: V \to W" /> tiene <strong>inversa</strong> (es invertible) si y solo si es <strong>biyectiva</strong> (es decir, Isomorfismo: inyectiva y sobreyectiva a la vez). Esto solo es posible si los espacios tienen la misma dimensión <InlineMath math="\dim(V) = \dim(W)" />.
        </p>

        <p>
          La transformación inversa, denotada como <InlineMath math="T^{-1}: W \to V" />, deshace el efecto de <InlineMath math="T" />, retornando al vector original:
        </p>
        <div className="formula-box">
          <InlineMath math="T^{-1}(T(\vec{v})) = \vec{v}" />  y  <InlineMath math="T(T^{-1}(\vec{w})) = \vec{w}" />
        </div>

        <div className="example-box">
          <p><strong>Cálculo de la Transformación Inversa:</strong></p>
          <p>Nuevamente, no necesitas trabajar analíticamente con funciones complicadas. La matriz asociada a la transformación inversa <InlineMath math="T^{-1}" /> es, sorpresivamente, la inversa de la matriz que representa a <InlineMath math="T" />:</p>
          <div className="formula-box">
             <InlineMath math="M_{(T^{-1})} = (M_{T})^{-1}" />
          </div>
          <p>
             Esto es un alivio total a la hora de resolver ejercicios en parciales. Para hallar como actúa la función inversa solo invierte la matriz (usando el método de Gauss-Jordan u operando determinantes por cofactores). ¡La matriz resultante describirá por completo a <InlineMath math="T^{-1}" />!
          </p>
        </div>

      </main>

      <TopicNavigation 
        prevPath="/parcial3/transformaciones/matriz-asociada" 
      />

      <AiChatBot 
        topicTitle="Composición e Inversa de Transformaciones" 
        topicContext="El increíble isomorfismo entre la composición de funciones y el producto de sus matrices asociadas.  M_{T2 o T1} = M_{T2} * M_{T1} . Condición de biyectividad para la inversa de la función. Equivalencia M_{T^{-1}} = (M_T)^{-1} . Ejercicios de invertir transformaciones resolviendo como Gauss-Jordan la matriz estándar asociada." 
      />
    </div>
  );
};

export default ComposicionInversa;
