import React from 'react';
import { InlineMath } from 'react-katex';
import TopicHeader from '../../../components/TopicHeader';
import TopicNavigation from '../../../components/TopicNavigation';
import AiChatBot from '../../../components/AiChatBot';
import './ProductoInteriorTopic.css';

const Definicion: React.FC = () => {
  return (
    <div className="pi-topic-container">
      <TopicHeader 
        title="Producto Interior (Definición y axiomas)" 
        subtitle="Añadiendo nociones geométricas a espacios abstractos"
      />

      <main className="topic-content">
        <div className="concept-box">
          <h3>Definición Clave</h3>
          <p>
            Un <strong>Producto Interior</strong> (o producto escalar generalizado) sobre un espacio vectorial <InlineMath math="V" /> es una función que toma dos vectores <InlineMath math="\vec{u}, \vec{v} \in V" /> y les asocia un número real (o escalar). Se denota comúnmente mediante corchetes angulares <InlineMath math="\langle \vec{u}, \vec{v} \rangle" />. Su función principal es permitirnos hablar de <strong>longitud, distancia y ángulos</strong> en espacios que de otro modo serían puramente abstractos (como polinomios o matrices).
          </p>
        </div>

        <h2>Axiomas del Producto Interior</h2>
        <p>
          Para que una función se considere un producto interior válido en un espacio vectorial real, debe satisfacer los siguientes cuatro axiomas para todos los vectores <InlineMath math="\vec{u}, \vec{v}, \vec{w} \in V" /> y todo escalar <InlineMath math="c \in \mathbb{R}" />:
        </p>

        <ul className="list-styled">
          <li><strong>1. Simetría (o Conmutatividad):</strong> <br/><InlineMath math="\langle \vec{u}, \vec{v} \rangle = \langle \vec{v}, \vec{u} \rangle" /></li>
          <li><strong>2. Aditividad en el primer argumento:</strong> <br/><InlineMath math="\langle \vec{u} + \vec{w}, \vec{v} \rangle = \langle \vec{u}, \vec{v} \rangle + \langle \vec{w}, \vec{v} \rangle" /></li>
          <li><strong>3. Homogeneidad (Sacar escalares):</strong> <br/><InlineMath math="\langle c\vec{u}, \vec{v} \rangle = c \langle \vec{u}, \vec{v} \rangle" /></li>
          <li><strong>4. Positividad definida:</strong> <br/><InlineMath math="\langle \vec{u}, \vec{u} \rangle \ge 0" /> y <InlineMath math="\langle \vec{u}, \vec{u} \rangle = 0" /> si y solo si <InlineMath math="\vec{u} = \vec{0}" />.</li>
        </ul>

        <div className="example-box">
          <p><strong>Ejemplos Comunes de Productos Interiores:</strong></p>
          <ul className="list-styled">
            <li><strong>En <InlineMath math="\mathbb{R}^n" />:</strong> El clásico producto escalar (punto). Si <InlineMath math="\vec{u} = (u_1, u_2)" /> y <InlineMath math="\vec{v} = (v_1, v_2)" />, entonces <InlineMath math="\langle \vec{u}, \vec{v} \rangle = u_1v_1 + u_2v_2" />.</li>
            <li><strong>Espacio de Funciones Continuas <InlineMath math="C[a,b]" />:</strong> Usando la integral definida: <br/> <InlineMath math="\langle f, g \rangle = \int_a^b f(x)g(x) \,dx" /></li>
            <li><strong>Espacio de Matrices <InlineMath math="M_{n \times n}" />:</strong> Mediante la traza: <br/> <InlineMath math="\langle A, B \rangle = \text{tr}(A^T B)" /></li>
          </ul>
        </div>
        
        <p>
          Cualquier espacio vectorial que tenga equipado un producto interior se denomina <strong>espacio con producto interior</strong> (o espacio prehilbertiano).
        </p>
      </main>

      <TopicNavigation 
        nextPath="/parcial3/producto-interior/norma-distancia-angulo" 
      />

      <AiChatBot 
        topicTitle="Producto Interior (Definición y axiomas)" 
        topicContext="Definición formal de un producto interior usando notación angular (langle, rangle). Los cuatro axiomas fundamentales: Simetría, Aditividad, Homogeneidad y Positividad definida. Ejemplos de PI clásicos como el producto punto en Rn, integrales en funciones y trazas en matrices." 
      />
    </div>
  );
};

export default Definicion;
