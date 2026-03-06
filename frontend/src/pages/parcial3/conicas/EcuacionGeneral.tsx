import React from 'react';
import { InlineMath, BlockMath } from 'react-katex';
import TopicHeader from '../../../components/TopicHeader';
import TopicNavigation from '../../../components/TopicNavigation';
import AiChatBot from '../../../components/AiChatBot';
import './ConicasTopic.css';

const EcuacionGeneral: React.FC = () => {
  return (
    <div className="conicas-topic-container">
      <TopicHeader 
        title="La Ecuación General de Segundo Grado" 
        subtitle="Identificando cónicas ocultas a simple vista"
      />

      <main className="topic-content">
        <div className="concept-box">
          <h3>La Forma Pura</h3>
          <p>
            Cualquier curva cónica (por muy trasladada respecto del origen o rotada respecto a los ejes que esté) puede describirse mediante una ecuación polinómica general de dos variables que tiene término cuadrático, un término cruzado, dos términos lineales y una constante.
          </p>
        </div>

        <div className="formula-box">
          <BlockMath math="Ax^2 + Bxy + Cy^2 + Dx + Ey + F = 0" />
        </div>

        <p>
          Analizar esta ecuación es el problema central de este tema. ¿Cómo sabemos a simple vista qué figura geométrica esconde semejante mezcla de letras?
        </p>

        <h2>El Análisis Fundamental (Discriminante)</h2>
        <p>
          El tipo de cónica que esconde la ecuación se revela de forma inmediata e infalible prestando atención únicamente a los tres primeros coeficientes cuadráticos: <InlineMath math="A, B" /> y <InlineMath math="C" />.
        </p>
        
        <p>
          El <strong>Discriminante</strong> de la ecuación general se define como:
        </p>
        <div className="formula-box">
          <InlineMath math="\Delta = B^2 - 4AC" />
        </div>

        <div className="example-box">
          <p><strong>Clasificación Inmediata:</strong></p>
          <ul className="list-styled">
            <li><strong>Si <InlineMath math="\Delta < 0" /> (Negativo):</strong> Es una curva de tipo elíptico. Podría ser una <strong>Elipse</strong>, un <strong>punto</strong>, o un conjunto <strong>vacío</strong>. (Si descubres que es elíptico, es Circunferencia si y solo si <InlineMath math="B=0" /> y además <InlineMath math="A=C" />).</li>
            <li><strong>Si <InlineMath math="\Delta = 0" /> (Cero):</strong> Es una curva de tipo parabólico. Podría ser una <strong>Parábola</strong> o dos <strong>rectas</strong> asintóticas.</li>
            <li><strong>Si <InlineMath math="\Delta > 0" /> (Positivo):</strong> Es una curva de tipo hiperbólico. Será una <strong>Hipérbola</strong>, o bien <strong>dos rectas</strong> oblicuas que se cortan en un punto.</li>
          </ul>
        </div>

        <h2>La Presencia del Monstruo Cruzado: El término <InlineMath math="Bxy" /></h2>
        <p>
          El término <InlineMath math="Bxy" /> (el término rectangular "cruzado") es el causante de todos los males. Su existencia denota que nuestra cónica <strong>no está alineada con respecto a los ejes X e Y</strong>, sino que ha sido <strong>ROTA</strong> (inclinada un cierto ángulo <InlineMath math="\alpha" />). 
        </p>
        <p>
          Los términos lineales (<InlineMath math="Dx" /> y <InlineMath math="Ey" />) jamás causan rotación, solo empujan (<strong>Talasladan</strong>) el centro de la cónica a algún punto <InlineMath math="(h, k)" /> lejos del origen perfecto <InlineMath math="(0,0)" />.
        </p>

        <ul className="list-styled">
          <li><strong>Si <InlineMath math="B" /> es cero (<InlineMath math="B=0" />):</strong> No hay rotación. Podemos saltar directo a "Completar Cuadrados" con <InlineMath math="x" /> y con <InlineMath math="y" /> para deducir de inmediato el centro <InlineMath math="(h,k)" /> y llevarlo a la ecuación canónica ordinaria.</li>
          <li><strong>Si <InlineMath math="B" /> no es cero (<InlineMath math="B \neq 0" />):</strong> Completar cuadrados no servirá de nada. La única forma de eliminar ese estorbo algebraico será descubriendo su ángulo de inclinación <InlineMath math="\alpha" /> y realizando una rotación formal de ejes, lo que nos adentrará en el asombroso terreno de los autovalores y autovectores.</li>
        </ul>

      </main>

      <TopicNavigation 
        prevPath="/parcial3/conicas/elipse-hiperbola"
        nextPath="/parcial3/conicas/rotacion-traslacion" 
      />

      <AiChatBot 
        topicTitle="Ecuación General de 2do Grado" 
        topicContext="Fórmula Ax^2 + Bxy + Cy^2 + Dx + Ey + F = 0. Identificar la figura basada exclusivamente en el discriminante B^2 - 4AC (Elipse < 0, Parábola = 0, Hipérbola > 0). El término Bxy siendo el provocador estricto de la rotación y el término Dx + Ey siendo los provocadores de la traslación." 
      />
    </div>
  );
};

export default EcuacionGeneral;
