import React from 'react';
import { InlineMath, BlockMath } from 'react-katex';
import TopicHeader from '../../../components/TopicHeader';
import TopicNavigation from '../../../components/TopicNavigation';
import AiChatBot from '../../../components/AiChatBot';
import './AutovaloresTopic.css';

const PolinomioCaracteristico: React.FC = () => {
  return (
    <div className="av-topic-container">
      <TopicHeader 
        title="Polinomio Característico" 
        subtitle="El método definitivo para cazar autovalores"
      />

      <main className="topic-content">
        <div className="concept-box">
          <h3>La Ecuación Característica</h3>
          <p>
            Vimos que para que exista un autovector no nulo, la ecuación homogénea <InlineMath math="(A - \lambda I)\vec{v} = \vec{0}" /> debe tener soluciones más allá de la trivial. La única forma de que eso ocurra es que la matriz <InlineMath math="(A - \lambda I)" /> tenga determinante cero. Esto da lugar a la <strong>Ecuación Característica</strong>:
          </p>
        </div>

        <div className="formula-box">
          <BlockMath math="\det(A - \lambda I) = 0" />
        </div>

        <h2>¿Qué es el Polinomio Característico?</h2>
        <p>
          Si tomas una matriz <InlineMath math="A" /> de <InlineMath math="n \times n" />, le restas la variable <InlineMath math="\lambda" /> (lambda) a los elementos de su diagonal principal, y calculas el determinante de esa nueva matriz usando las reglas de Sarrus o cofactores, obtendrás una función que depende puramente de <InlineMath math="\lambda" />. Esta función resultará ser obligatoriamente un polinomio de grado <InlineMath math="n" />.
        </p>

        <div className="formula-box">
          <BlockMath math="P_A(\lambda) = (-1)^n \lambda^n + c_{n-1}\lambda^{n-1} + \dots + c_1\lambda + c_0" />
        </div>
        
        <p>A este polinomio <InlineMath math="P_A(\lambda)" /> se lo llama <strong>Polinomio Característico</strong> de la matriz <InlineMath math="A" />.</p>

        <ul className="list-styled">
          <li>Los <strong>autovalores</strong> de la matriz <InlineMath math="A" /> son simple y llanamente las <strong>raíces</strong> de su polinomio característico (los valores que hacen que <InlineMath math="P_A(\lambda) = 0" />).</li>
          <li>Como es un polinomio de grado <InlineMath math="n" />, por el Teorema Fundamental del Álgebra tendrá exactamente <InlineMath math="n" /> raíces en el plano complejo, algunas de las cuales pueden ser reales, y algunas pueden estar repetidas.</li>
        </ul>

        <div className="example-box">
          <p><strong>Propiedades Mágicas de los Coeficientes:</strong></p>
          <ul className="list-styled">
             <li>El término independiente del polinomio (el <InlineMath math="c_0" /> sin <InlineMath math="\lambda" />) es exactamente igual al <strong>determinante de la matriz original</strong>: <InlineMath math="P_A(0) = \det(A)" />. (¡Por ello, el producto de todos los autovalores da el determinante!)</li>
             <li>El coeficiente de <InlineMath math="\lambda^{n-1}" /> está directamente atado a la <strong>traza</strong> de la matriz (la suma de la diagonal). (¡Por ello, la suma de todos los autovalores da la traza!)</li>
          </ul>
        </div>

        <h2>Tipos de Matrices Especiales</h2>
        <p>
          Si tienes una matriz <strong>triangular</strong> (superior o inferior) o <strong>diagonal</strong>, el cálculo del determinante de <InlineMath math="A - \lambda I" /> es meramente multiplicar los elementos de la diagonal. Por lo tanto, ¡los autovalores de una matriz triangular son directamente los números que ya están plantados en su diagonal principal!
        </p>

      </main>

      <TopicNavigation 
        prevPath="/parcial3/autovalores/definicion"
        nextPath="/parcial3/autovalores/multiplicidad" 
      />

      <AiChatBot 
        topicTitle="Polinomio Característico" 
        topicContext="El cálculo del determinante det(A - lambda*I) que da origen al polinomio característico P(lambda). Las raíces del polinomio como los valores propios del sistema. Relación comprobable de los coeficientes: producto de autovalores = determinante(A) y suma de autovalores = traza(A). Propiedad útil de matrices triangulares y diagonales." 
      />
    </div>
  );
};

export default PolinomioCaracteristico;
