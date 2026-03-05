import React from 'react';
import 'katex/dist/katex.min.css';
import { InlineMath, BlockMath } from 'react-katex';
import TopicHeader from '../../components/TopicHeader';
import TopicNavigation from '../../components/TopicNavigation';
import AiChatBot from '../../components/AiChatBot';
import './VectorTopic.css';

const VersorModulo1: React.FC = () => {

  return (
    <div className="vector-topic-container">
      <TopicHeader 
        title="Versor y Módulo 1 (i, j, k)" 
        subtitle="La base de todo nuestro sistema de coordenadas espaciales"
      />

      <main className="topic-content">
        <div className="concept-box">
          <h3>¿Qué es un versor?</h3>
          <p>
            Un versor (también llamado vector unitario o normalizado) es cualquier vector cuyo <strong>módulo es exactamente igual a 1</strong>. En general, todo vector (distinto del vector nulo) posee un versor asociado que comparte exactamente su misma dirección y sentido.
          </p>
        </div>

        <div className="formula-box" style={{ fontSize: '1.2rem', marginBottom: '2rem' }}>
          <p style={{ margin: 0, fontSize: '1rem', color: '#e0e1dd' }}>Módulo de un versor <InlineMath math="\breve{u}" /> o <InlineMath math="\hat{u}" />:</p>
          <BlockMath math="||\breve{u}|| = 1" />
        </div>

        <h2>Proceso de Normalización</h2>
        <p>
          "Normalizar" un vector es el proceso de encontrar su versor asociado. Para lograrlo, dividimos las componentes del vector origina por su propio módulo.
        </p>
        
        <div className="formula-box">
          <BlockMath math="\breve{u} = \frac{1}{||\vec{u}||} \cdot \vec{u}" />
        </div>

        <div className="example-box">
          <h4>Vectores Canónicos (i, j, k)</h4>
          <p>
            Los vectores unitarios más famosos del álgebra lineal son aquellos que apuntan en las direcciones de los ejes coordenados de nuestro sistema cartesiano. Estos versores fundamentales conforman la <strong>Base Canónica</strong>.
          </p>
          <ul className="list-styled" style={{ marginTop: '1rem' }}>
            <li><InlineMath math="\hat{i}" /> (o <InlineMath math="e_1" />): Tiene la dirección del eje X positivo. Representa el vector <InlineMath math="(1, 0)" /> en R2, o <InlineMath math="(1, 0, 0)" /> en R3.</li>
            <li><InlineMath math="\hat{j}" /> (o <InlineMath math="e_2" />): Tiene la dirección del eje Y positivo. Representa el vector <InlineMath math="(0, 1)" /> en R2, o <InlineMath math="(0, 1, 0)" /> en R3.</li>
            <li><InlineMath math="\hat{k}" /> (o <InlineMath math="e_3" />): Tiene la dirección del eje Z positivo. Representa el vector <InlineMath math="(0, 0, 1)" /> en R3.</li>
          </ul>
        </div>

        <h2>Uso principal</h2>
        <p>
          Los versores canónicos permiten expresar cualquier vector a través de una <strong>Combinación Lineal</strong>. Esta forma se utiliza ampliamente en libros de texto universitarios y en física.
        </p>
        <p>
          Si tienes el vector expresado por componentes <InlineMath math="\vec{v} = (5, -3, 2)" />, su expresión equivalente en versores canónicos sería:
        </p>
        <div className="formula-box">
          <BlockMath math="\vec{v} = 5\hat{i} - 3\hat{j} + 2\hat{k}" />
        </div>
        <p>
          Lo cual significa "muévete 5 unidades en x positivo, 3 unidades en y negativo, y 2 en z positivo".
        </p>
      </main>

      <TopicNavigation 
        prevPath="/parcial1/vectores/igualdad-vectores"
        nextPath="/parcial1/vectores/vector-opuesto" 
      />

      <AiChatBot 
        topicTitle="Versor y Módulo 1 (i, j, k)" 
        topicContext="El concepto de vector unitario o normalizado. Transformación de vector a versor y presentación formal de la Base Canónica (i, j, k) con combinaciones lineales espaciales." 
      />
    </div>
  );
};

export default VersorModulo1;
