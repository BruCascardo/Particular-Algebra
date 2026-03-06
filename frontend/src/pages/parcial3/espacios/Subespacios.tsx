import React from 'react';
import { InlineMath } from 'react-katex';
import TopicHeader from '../../../components/TopicHeader';
import TopicNavigation from '../../../components/TopicNavigation';
import AiChatBot from '../../../components/AiChatBot';
import './EspaciosTopic.css';

const Subespacios: React.FC = () => {
  return (
    <div className="espacios-topic-container">
      <TopicHeader 
        title="Subespacios Vectoriales" 
        subtitle="Condiciones para que un subconjunto sea un espacio vectorial por sí mismo"
      />

      <main className="topic-content">
        <div className="concept-box">
          <h3>Definición</h3>
          <p>
            Un <strong>subespacio vectorial</strong> <InlineMath math="S" /> es un subconjunto no vacío de un espacio vectorial <InlineMath math="V" /> (es decir, <InlineMath math="S \subseteq V" />) que, bajo las mismas operaciones de suma y producto por escalar definidas en <InlineMath math="V" />, resulta ser también un espacio vectorial.
          </p>
        </div>

        <h2>Condiciones necesarias y suficientes</h2>
        <p>
          Para demostrar que un conjunto <InlineMath math="S" /> es un subespacio vectorial de <InlineMath math="V" />, no hace falta verificar los 10 axiomas. Es suficiente comprobar las siguientes tres condiciones:
        </p>
        
        <ul className="list-styled">
          <li><strong>1. El vector nulo pertenece a <InlineMath math="S" />:</strong> <br/><InlineMath math="\vec{0} \in S" />. <br/>(Esto también garantiza que <InlineMath math="S" /> no es vacío).</li>
          <li><strong>2. Cerradura de la suma:</strong> <br/>Si tomamos dos vectores cualesquiera <InlineMath math="\vec{u}, \vec{v} \in S" />, entonces su suma debe estar en <InlineMath math="S" /> <br/><InlineMath math="\vec{u} + \vec{v} \in S" />.</li>
          <li><strong>3. Cerradura del producto por escalar:</strong> <br/>Si tomamos cualquier vector <InlineMath math="\vec{u} \in S" /> y cualquier escalar <InlineMath math="\alpha \in K" />, entonces su producto debe estar en <InlineMath math="S" /> <br/><InlineMath math="\alpha \cdot \vec{u} \in S" />.</li>
        </ul>

        <div className="example-box">
          <p>
            <strong>Nota importante:</strong> Una forma rápida de descartar que algo sea un subespacio es verificar si el vector cero está en el conjunto. Si <InlineMath math="\vec{0} \notin S" />, entonces <InlineMath math="S" /> <strong>no</strong> puede ser un subespacio.
          </p>
        </div>

        <h2>Ejemplo ilustrativo</h2>
        <p>
          Consideremos el espacio vectorial <InlineMath math="V = \mathbb{R}^2" /> y el subconjunto <InlineMath math="S = \{(x, y) \in \mathbb{R}^2 \mid y = 2x\}" />. ¿Es <InlineMath math="S" /> un subespacio?
        </p>
        <ol className="list-styled">
          <li>El vector nulo <InlineMath math="(0,0)" /> está en <InlineMath math="S" /> porque <InlineMath math="0 = 2(0)" />.</li>
          <li>Si <InlineMath math="\vec{u} = (x_1, 2x_1)" /> y <InlineMath math="\vec{v} = (x_2, 2x_2)" /> están en <InlineMath math="S" />, su suma <InlineMath math="\vec{u} + \vec{v} = (x_1 + x_2, 2x_1 + 2x_2) = (x_1+x_2, 2(x_1+x_2))" /> también cumple la condición, así que pertenece a <InlineMath math="S" />.</li>
          <li>Si tomamos <InlineMath math="\alpha \in \mathbb{R}" /> y <InlineMath math="\vec{u} \in S" />, <InlineMath math="\alpha\vec{u} = (\alpha x_1, 2\alpha x_1)" />. Vemos que la segunda coordenada es el doble de la primera, por lo que pertenece a <InlineMath math="S" />.</li>
        </ol>
        <p>Por lo tanto, <InlineMath math="S" /> es un subespacio vectorial.</p>
        
        <h2>Subespacios Triviales</h2>
        <p>
          Cualquier espacio vectorial <InlineMath math="V" /> tiene al menos dos subespacios garantizados:
        </p>
        <ul className="list-styled">
          <li>El subespacio formado solo por el elemento neutro: <InlineMath math="\{\vec{0}\}" />.</li>
          <li>El propio espacio vectorial: <InlineMath math="V" />.</li>
        </ul>

      </main>

      <TopicNavigation 
        prevPath="/parcial3/espacios/definicion"
        nextPath="/parcial3/espacios/combinacion-lineal" 
      />

      <AiChatBot 
        topicTitle="Subespacios Vectoriales" 
        topicContext="Condiciones para que un subconjunto sea un subespacio vectorial. Comprobación del vector nulo, cerradura bajo la adición y bajo la multiplicación por un escalar. Subespacios triviales y ejemplos geométicos en R2 y R3." 
      />
    </div>
  );
};

export default Subespacios;
