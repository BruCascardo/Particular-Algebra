import React from 'react';
import { InlineMath } from 'react-katex';
import TopicHeader from '../../../components/TopicHeader';
import TopicNavigation from '../../../components/TopicNavigation';
import AiChatBot from '../../../components/AiChatBot';
import './TransformacionesTopic.css';

const Definicion: React.FC = () => {
  return (
    <div className="tl-topic-container">
      <TopicHeader 
        title="Definición de Transformación Lineal" 
        subtitle="Las funciones que respetan la estructura del espacio"
      />

      <main className="topic-content">
        <div className="concept-box">
          <h3>¿Qué es una Transformación Lineal?</h3>
          <p>
            Una <strong>transformación lineal</strong> (o aplicación lineal) es una función especial <InlineMath math="T: V \to W" /> que va desde un espacio vectorial <InlineMath math="V" /> (Dominio) hacia otro espacio vectorial <InlineMath math="W" /> (Codominio). Su característica principal es que no deforma la estructura algebraica de los espacios: "preserva" las sumas y las multiplicaciones por escalares.
          </p>
        </div>

        <h2>Las Dos Condiciones Fundamentales</h2>
        <p>
          Para que una función <InlineMath math="T" /> sea considerada una Transformación Lineal, debe cumplir estrictamente dos condiciones para todo vector <InlineMath math="\vec{u}, \vec{v} \in V" /> y todo escalar <InlineMath math="\alpha \in \mathbb{R}" /> (o el cuerpo <InlineMath math="K" />):
        </p>

        <ul className="list-styled">
          <li><strong>1. Aditividad (Preserva la suma):</strong> La transformación de una suma de vectores debe ser igual a la suma de las transformaciones individuales.
            <div className="formula-box">
              <InlineMath math="T(\vec{u} + \vec{v}) = T(\vec{u}) + T(\vec{v})" />
            </div>
          </li>
          <li><strong>2. Homogeneidad (Preserva el producto por escalar):</strong> Al escalar un vector antes de transformarlo, el resultado debe ser exactamente igual a escalar el vector ya transformado.
            <div className="formula-box">
              <InlineMath math="T(\alpha \cdot \vec{u}) = \alpha \cdot T(\vec{u})" />
            </div>
          </li>
        </ul>

        <div className="example-box">
          <p><strong>Truco rápido de comprobación (Teorema):</strong></p>
          <p>
             Toda transformación lineal <strong>debe obligatoriamente</strong> enviar el vector nulo del dominio al vector nulo del codominio: <InlineMath math="T(\vec{0}_V) = \vec{0}_W" />.
          </p>
          <p>
             ¡Cuidado! Si ves que <InlineMath math="T(\vec{0}) \neq \vec{0}" /> (por ejemplo, si la función le suma una constante a las coordenadas como <InlineMath math="T(x) = x + 3" />), entonces la función <strong>NO</strong> es una transformación lineal. Es una transformación <em>afín</em>.
          </p>
        </div>

        <h2>Ejemplos Geométricos y Algebraicos</h2>
        <ul className="list-styled">
          <li><strong>Rotaciones alrededor del origen:</strong> En <InlineMath math="\mathbb{R}^2" />, si rotas todo el plano un ángulo fijo con respecto al origen, la red de vectores enteros gira sin romperse (es lineal).</li>
          <li><strong>Reflexiones (Espejo) por un eje que pasa por el origen:</strong> Cambiar el signo de una coordenada: <InlineMath math="T(x,y) = (x, -y)" />.</li>
          <li><strong>Multiplicación por una Matriz:</strong> Si fijamos cualquier matriz constante <InlineMath math="A" /> de <InlineMath math="m \times n" />, la función que agarra un vector columna <InlineMath math="\vec{x}" /> y le multiplica la matriz <InlineMath math="T(\vec{x}) = A\vec{x}" /> es <em>siempre</em> lineal.</li>
          <li><strong>La Derivada:</strong> En el espacio de los polinomios <InlineMath math="\mathbb{P}_n" />, el operador de la derivada <InlineMath math="D(P) = P'" /> es una transformación lineal debido a las propiedades clásicas de la suma y extracción de constantes.</li>
        </ul>

      </main>

      <TopicNavigation 
        nextPath="/parcial3/transformaciones/nucleo-imagen" 
      />

      <AiChatBot 
        topicTitle="Definición de Transformación Lineal (TL)" 
        topicContext="Definición estricta de una transformación lineal: T(V) -> W. Las condiciones de Aditividad T(u+v) = T(u) + T(v) y Homogeneidad T(a*u) = a*T(u). La propiedad imperativa de que T(0) = 0. Ejemplos de transformaciones como rotaciones, proyecciones y derivadas." 
      />
    </div>
  );
};

export default Definicion;
