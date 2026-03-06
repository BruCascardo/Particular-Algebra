import React from 'react';
import { InlineMath, BlockMath } from 'react-katex';
import TopicHeader from '../../../components/TopicHeader';
import TopicNavigation from '../../../components/TopicNavigation';
import AiChatBot from '../../../components/AiChatBot';
import './AutovaloresTopic.css';

const Definicion: React.FC = () => {
  return (
    <div className="av-topic-container">
      <TopicHeader 
        title="Autovalores y Autovectores (Valores Propios)" 
        subtitle="Las direcciones inmutables de una matriz"
      />

      <main className="topic-content">
        <div className="concept-box">
          <h3>La Idea Central</h3>
          <p>
            Al multiplicar un vector por una matriz cuadrada <InlineMath math="A" />, el resultado suele ser un vector nuevo que cambió tanto de tamaño como de <em>dirección</em> (rotó). Sin embargo, para casi toda matriz existen ciertas "direcciones especiales" o privilegiadas. Si tomas un vector que apunte en esas direcciones y lo multiplicas por la matriz, <strong>el vector no cambia de dirección, solo se estira, se contrae, o se invierte</strong>. 
          </p>
        </div>

        <h2>Definición Formal</h2>
        <p>
          Sea <InlineMath math="A" /> una matriz cuadrada de <InlineMath math="n \times n" />. Un número escalar <InlineMath math="\lambda" /> se llama <strong>autovalor</strong> (o valor propio / eigenvalor) de <InlineMath math="A" /> si existe un vector <strong>no nulo</strong> <InlineMath math="\vec{v} \in \mathbb{R}^n" /> tal que:
        </p>

        <div className="formula-box">
          <BlockMath math="A\vec{v} = \lambda\vec{v}" />
        </div>

        <ul className="list-styled">
          <li><strong>Autovector:</strong> El vector <InlineMath math="\vec{v} \neq \vec{0}" /> que satisface la ecuación. (Nota: El vector nulo nunca se considera autovector, porque <InlineMath math="A\vec{0} = \lambda\vec{0}" /> es trivialmente cierto para <em>cualquier</em> <InlineMath math="\lambda" />).</li>
          <li><strong>Autovalor (<InlineMath math="\lambda" />):</strong> Es el factor de estiramiento. Si <InlineMath math="\lambda = 2" />, el vector duplica su tamaño. Si <InlineMath math="\lambda = -1" />, el vector no cambia de largo pero invierte su sentido 180°. Si <InlineMath math="\lambda = 0" />, el vector colapsa al vector nulo (se pierde en el kernel).</li>
        </ul>

        <div className="example-box">
          <p><strong>El Efecto Geométrico:</strong></p>
          <p>
            Imagina una imagen plasmada en una hoja de goma elástica. Si agarras la hoja y la estiras horizontalmente, todos los vectores dibujados en la hoja se inclinarán hacia el eje horizontal... <em>excepto</em> aquellos vectores que ya estaban acostados sobre el eje horizontal o sobre el eje vertical. Esas líneas simplemente se hicieron más largas o se quedaron igual. Esos ejes son las direcciones dadas por los autovectores.
          </p>
        </div>

        <h2>La ecuación de búsqueda</h2>
        <p>
          Si reescribimos la ecuación <InlineMath math="A\vec{v} = \lambda\vec{v}" /> pasando todo al mismo lado y factorizando <InlineMath math="\vec{v}" />, necesitamos usar la matriz identidad <InlineMath math="I" /> para que la resta tenga sentido matricial:
        </p>
        <div className="formula-box">
           <BlockMath math="(A - \lambda I)\vec{v} = \vec{0}" />
        </div>
        <p>
          Esta es un sistema homogéneo. Como dijimos que <InlineMath math="\vec{v}" /> no puede ser el vector nulo, ¡estamos buscando que este sistema tenga soluciones infinitas / no triviales! Para que un sistema homogéneo cuadrado tenga soluciones no triviales, la matriz del sistema <strong>no debe ser invertible</strong>, lo que significa que <strong>su determinante debe ser cero</strong>.
        </p>

      </main>

      <TopicNavigation 
        nextPath="/parcial3/autovalores/polinomio-caracteristico" 
      />

      <AiChatBot 
        topicTitle="Autovalores y Autovectores" 
        topicContext="Definición de valores propios (eigenvalores) y vectores propios (eigenvectores) mediante la ecuación A*v = lambda*v. Interpretación geométrica de direcciones invariantes. Deducción de la ecuación fundamental (A - lambda*I)*v = 0." 
      />
    </div>
  );
};

export default Definicion;
