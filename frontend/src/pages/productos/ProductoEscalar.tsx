import React from 'react';
import 'katex/dist/katex.min.css';
import { InlineMath, BlockMath } from 'react-katex';
import TopicHeader from '../../components/TopicHeader';
import TopicNavigation from '../../components/TopicNavigation';
import AiChatBot from '../../components/AiChatBot';
import '../vectores/VectorTopic.css';

const ProductoEscalar: React.FC = () => {

  return (
    <div className="vector-topic-container">
      <TopicHeader 
        title="4.1. Producto Escalar (Punto)" 
        subtitle="Multiplicando vectores para obtener un escalar métrico"
      />

      <main className="topic-content">
        <div className="concept-box">
          <h3>Definición</h3>
          <p>
            El <strong>Producto Escalar</strong> (o producto punto) de dos vectores <InlineMath math="\vec{u}" /> y <InlineMath math="\vec{v}" /> es una operación que, a diferencia del álgebra clásica, <strong>no devuelve otro vector</strong>, sino que produce un único número real (un escalar).
          </p>
          <p>
            Mide qué tanto "apuntan" dos vectores en la misma dirección general, relacionando fuertemente sus magnitudes y el ángulo comprendido entre ellos.
          </p>
        </div>

        <h2>Forma Geométrica (Trigonométrica)</h2>
        <p>
          Si conocemos los módulos de los vectores y el ángulo <InlineMath math="\alpha" /> que forman entre ellos, el producto escalar se define por antonomasia como:
        </p>

        <div className="formula-box">
          <BlockMath math="\vec{u} \cdot \vec{v} = ||\vec{u}|| \cdot ||\vec{v}|| \cdot \cos(\alpha)" />
        </div>

        <ul className="list-styled">
          <li><strong>Si <InlineMath math="\alpha < 90^\circ" />:</strong> El \cos es positivo <InlineMath math="\implies" /> Producto escalar <InlineMath math="> 0" />.</li>
          <li><strong>Si <InlineMath math="\alpha > 90^\circ" />:</strong> El \cos es negativo <InlineMath math="\implies" /> Producto escalar <InlineMath math="< 0" />.</li>
        </ul>

        <div className="example-box" style={{ background: 'rgba(150, 50, 50, 0.2)', borderLeft: '4px solid #cc4444' }}>
          <h4>Condición de Perpendicularidad (Ortogonalidad)</h4>
          <p>
            La consecuencia más brillante y útil de la forma geométrica es que si el ángulo entre ellos es exactamente <InlineMath math="90^\circ" />, el coseno vale cero. Por lo tanto, <strong>el producto escalar de dos vectores perpendiculares siempre es nulo (cero)</strong>.
          </p>
          <BlockMath math="\vec{u} \perp \vec{v} \iff \vec{u} \cdot \vec{v} = 0" />
        </div>

        <h2>Forma Analítica (Por Componentes)</h2>
        <p>
          Cuando no conocemos el ángulo pero operamos dentro de un sistema de referencia cartesiano (conociendo las componentes), calcular el producto escalar es asombrosamente sencillo: <strong>se multiplican las componentes homólogas y luego se suman esos resultados parciales</strong>.
        </p>
        <p>
          Para el caso tridimensional (<InlineMath math="\mathbb{R}^3" />):
        </p>

        <div className="formula-box" style={{ background: 'rgba(50, 60, 100, 0.4)' }}>
          <BlockMath math="\vec{u} \cdot \vec{v} = (u_x \cdot v_x) + (u_y \cdot v_y) + (u_z \cdot v_z)" />
        </div>

        <div className="example-box">
           <p>Si <InlineMath math="\vec{u} = (2, -1, 3)" /> y <InlineMath math="\vec{v} = (-4, 5, 2)" />:</p>
           <BlockMath math="\vec{u} \cdot \vec{v} = (2 \cdot -4) + (-1 \cdot 5) + (3 \cdot 2)" />
           <BlockMath math="= -8 - 5 + 6 = -7" />
           <p>El resultado es el escalar <strong>-7</strong>.</p>
        </div>


        <h2>Propiedades del Producto Escalar</h2>
        <ul className="list-styled">
          <li><strong>Conmutativa:</strong> <InlineMath math="\vec{u} \cdot \vec{v} = \vec{v} \cdot \vec{u}" /></li>
          <li><strong>Distributiva respecto a suma vectorial:</strong> <InlineMath math="\vec{u} \cdot (\vec{v} + \vec{w}) = \vec{u} \cdot \vec{v} + \vec{u} \cdot \vec{w}" /></li>
          <li><strong>Con escalar:</strong> <InlineMath math="(k\vec{u}) \cdot \vec{v} = k(\vec{u} \cdot \vec{v}) = \vec{u} \cdot (k\vec{v})" /></li>
          <li><strong>Propiedad vinculante c/ Módulo:</strong> El producto escalar de un vector consigo mismo equivale al cuadrado de su norma: <br/><br/> <InlineMath math="\vec{v} \cdot \vec{v} = ||\vec{v}||^2" /></li>
        </ul>

      </main>

      <TopicNavigation 
        prevPath="/parcial1/sistemas/proyeccion-ortogonal"
        nextPath="/parcial1/productos/cosenos-directores" 
      />
    
      <AiChatBot 
        topicTitle="Producto Escalar" 
        topicContext="Producto Pinto o Escalar (Dot Product). Fórmula trigonométrica con el coseno del ángulo y fórmula analítica sumando el producto de componentes. Resultado escalar." 
      />
    </div>
  );
};

export default ProductoEscalar;
