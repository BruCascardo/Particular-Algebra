import React from 'react';
import { InlineMath, BlockMath } from 'react-katex';
import TopicHeader from '../../../components/TopicHeader';
import TopicNavigation from '../../../components/TopicNavigation';
import AiChatBot from '../../../components/AiChatBot';
import './ProductoInteriorTopic.css';

const NormaDistanciaAngulo: React.FC = () => {
  return (
    <div className="pi-topic-container">
      <TopicHeader 
        title="Norma, Distancia y Ángulo" 
        subtitle="Midiendo tamaños y direcciones a través del producto interior"
      />

      <main className="topic-content">
        <p>
          Tener un producto interior nos permite transferir los conceptos geométricos que conocemos del plano y el espacio tridimensional a cualquier espacio abstracto.
        </p>

        <div className="concept-box">
          <h3>Norma de un vector (Longitud)</h3>
          <p>
            La <strong>norma</strong> (o longitud/magnitud) de un vector <InlineMath math="\vec{v}" />, denotada como <InlineMath math="\|\vec{v}\|" />, es simplemente la raíz cuadrada del producto interior del vector consigo mismo:
          </p>
          <div className="formula-box">
            <BlockMath math="\|\vec{v}\| = \sqrt{\langle \vec{v}, \vec{v} \rangle}" />
          </div>
          <p>
            Un vector que tiene norma igual a 1 (es decir, <InlineMath math="\|\vec{v}\| = 1" />) se llama <strong>vector unitario</strong> o versor. Podemos "normalizar" cualquier vector no nulo multiplicándolo por el inverso de su norma: <InlineMath math="\vec{u} = \frac{\vec{v}}{\|\vec{v}\|}" />.
          </p>
        </div>

        <h2>Distancia entre dos vectores</h2>
        <p>
          La distancia entre dos vectores <InlineMath math="\vec{u}" /> y <InlineMath math="\vec{v}" />, denotada como <InlineMath math="d(\vec{u}, \vec{v})" />, se define como la "longitud del vector diferencia":
        </p>
        <div className="formula-box">
          <BlockMath math="d(\vec{u}, \vec{v}) = \|\vec{u} - \vec{v}\| = \sqrt{\langle \vec{u}-\vec{v}, \vec{u}-\vec{v} \rangle}" />
        </div>

        <h2>Desigualdad de Cauchy-Schwarz</h2>
        <p>
          Uno de los teoremas más importantes del álgebra lineal establece que el valor absoluto del producto interior entre dos vectores jamás puede exceder el producto de sus normas:
        </p>
        <div className="formula-box">
          <BlockMath math="|\langle \vec{u}, \vec{v} \rangle| \le \|\vec{u}\| \|\vec{v}\|" />
        </div>
        <p>
          La igualdad se cumple si y solo si los vectores son linealmente dependientes (uno es múltiplo del otro).
        </p>

        <h2>Ángulo entre vectores</h2>
        <p>
          Gracias a la Desigualdad de Cauchy-Schwarz, garantizamos que el cociente <InlineMath math="\frac{\langle \vec{u}, \vec{v} \rangle}{\|\vec{u}\|\|\vec{v}\|}" /> siempre cae dentro del intervalo <InlineMath math="[-1, 1]" />. Esto permite definir el <strong>ángulo</strong> <InlineMath math="\theta" /> entre dos vectores no nulos a través de la función arcocoseno:
        </p>
        <div className="formula-box">
          <BlockMath math="\cos(\theta) = \frac{\langle \vec{u}, \vec{v} \rangle}{\|\vec{u}\| \|\vec{v}\|}" />
        </div>

        <div className="example-box">
          <p><strong>Reflexión Geométrica:</strong></p>
          <ul className="list-styled">
            <li>Si <InlineMath math="\cos(\theta) = 1" />, los vectores apuntan en la misma dirección (<InlineMath math="\theta = 0" />).</li>
            <li>Si <InlineMath math="\cos(\theta) = -1" />, los apuntan en direcciones opuestas (<InlineMath math="\theta = \pi" />).</li>
            <li>Si el producto interior es <InlineMath math="0" />, entonces <InlineMath math="\cos(\theta) = 0" />, lo que significa que el ángulo es de <InlineMath math="90^\circ" /> (o <InlineMath math="\pi/2" /> radianes). A esto le llamaremos <strong>ortogonalidad</strong>.</li>
          </ul>
        </div>

      </main>

      <TopicNavigation 
        prevPath="/parcial3/producto-interior/definicion"
        nextPath="/parcial3/producto-interior/ortogonalidad" 
      />

      <AiChatBot 
        topicTitle="Norma, Distancia y Ángulo" 
        topicContext="Fórmulas de la norma inducida por un producto interior, fórmula de la métrica (distancia) d(u,v) = ||u - v||. Desigualdad de Cauchy-Schwarz y definición del coseno del ángulo usando la relación entre el producto interior y las normas." 
      />
    </div>
  );
};

export default NormaDistanciaAngulo;
