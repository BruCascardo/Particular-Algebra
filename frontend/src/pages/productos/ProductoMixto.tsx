import React from 'react';
import 'katex/dist/katex.min.css';
import { InlineMath, BlockMath } from 'react-katex';
import TopicHeader from '../../components/TopicHeader';
import TopicNavigation from '../../components/TopicNavigation';
import AiChatBot from '../../components/AiChatBot';
import { useConfig } from '../../context/ConfigContext';
import TrainingQuiz from '../../components/TrainingQuiz';
import { parcial1Tema4Questions } from '../../data/quizzes';
import '../vectores/VectorTopic.css';

const ProductoMixto: React.FC = () => {
  const { isTrainingMode } = useConfig();
  const [quizPassed, setQuizPassed] = React.useState(false);

  return (
    <div className="vector-topic-container">
      <TopicHeader 
        title="4.4. Producto Mixto" 
        subtitle="Uniendo lo escalar y vectorial para explorar volúmenes espaciales"
      />

      <main className="topic-content">
        <div className="concept-box">
          <h3>Definición de Triple Operación</h3>
          <p>
            Como su nombre sugiere brillantemente, este producto "mezcla" los dos tipos de operaciones que recién aprendimos para relacionar de un solo golpe a <strong>tres vectores en el espacio simultáneamente</strong> (<InlineMath math="\vec{u}, \vec{v}" /> y <InlineMath math="\vec{w}" />).
          </p>
          <p>Primero, opera dos vectores vectorialmente (cruz), generando un nuevo vector normal. Luego asesta ese resultado escalarmente (punto) contra el tercer y último vector. Todo finaliza devolviéndonos así un simple <strong>escalar numérico</strong>.</p>
        </div>

        <div className="formula-box" style={{ background: 'rgba(40, 40, 50, 0.4)' }}>
          <BlockMath math="\text{Producto Mixto}(\vec{u}, \vec{v}, \vec{w}) = \vec{u} \cdot (\vec{v} \times \vec{w})" />
        </div>

        <h2>Resolución Analítica Inmediata</h2>
        <p>
          Si poseemos los tres vectores formados en componentes absolutas, en vez de hacer la aburrida parte cruz primero y al final el punto, hay un "atajo legal" masivo aportando todo en un simple determinante tridimensional:
        </p>

        <div className="formula-box" style={{ overflowX: 'auto', border: '1px solid var(--border-color)' }}>
           <BlockMath math="\vec{u} \cdot (\vec{v} \times \vec{w}) = \begin{vmatrix} u_x & u_y & u_z \\ v_x & v_y & v_z \\ w_x & w_y & w_z \end{vmatrix}" />
        </div>
        <p>
          Lo cual nos tira el beneficio directo de resolver por triangulación de Sarrus o método de Laplace para arrojar el número escalar final de forma contundente.
        </p>

        <h2>La Interpretación Geométrica Estrella</h2>
        <p>Al igual que el producto vectorial desenterraba para nosotros el área escondida de un paralelogramo achatado en un plano 2D, el producto mixto se lanza volumétricamente tridimensional:</p>
        <p>
          El <strong>valor absoluto (módulo puro) del número derivante del producto mixto</strong>, no es más que el <strong>Volumen exacto y tridimensional del Paralelepípedo</strong> cuyos filos concurrentes y adyacentes son trazados por los mismísimos vectores <InlineMath math="\vec{u}, \vec{v}" /> y <InlineMath math="\vec{w}" /> brotando radiantes desde el mismo vértice central del origen coordenado.
        </p>

        <div className="formula-box" style={{ background: 'rgba(100, 70, 40, 0.4)' }}>
           <p style={{ margin: 0, fontSize: '1rem', color: '#e0e1dd', paddingBottom: '0.8rem' }}>Volumen del Paralelepípedo (Caja oblicua):</p>
          <BlockMath math="V = |\vec{u} \cdot (\vec{v} \times \vec{w})|" />
        </div>

        <div className="example-box" style={{ background: 'rgba(150, 50, 50, 0.2)', borderLeft: '4px solid #cc4444' }}>
           <h4>Condición de Coplanaridad (Truco Examen Final)</h4>
           <p>
             Sabiendo que el producto mixto es el volumen, hay un corolario brutal. <strong>Si el volumen te da 0 exacto, los 3 vectores son obligadamente complanares</strong> (pertenecen juntos a un mismo aplastado plano en común).
             <br/><br/>Tiene todo el sentido geométrico: si los tres vectores yacen acostados sin levantarse espacialmente como una carpa, entonces la caja conformada no tiene altura y su volumen natural es 0 absoluto.
           </p>
           <BlockMath math="\vec{u}, \vec{v}, \vec{w} \text{ coplanares (L.D)} \iff \vec{u} \cdot (\vec{v} \times \vec{w}) = 0" />
        </div>

      </main>

      {isTrainingMode && !quizPassed ? (
        <TrainingQuiz 
          questions={parcial1Tema4Questions}
          topicName="4. Productos Vectoriales"
          onPass={() => setQuizPassed(true)}
        />
      ) : (
        <TopicNavigation 
          prevPath="/parcial1/productos/producto-vectorial"
          nextPath="/parcial1/recta-plano/ecuaciones-recta"
        />
      )}
    
      <AiChatBot 
        topicTitle="Producto Mixto" 
        topicContext="Combinación de cruz y punto. Calculado vía el determinante 3x3 de tres vectores. Significado geométrico (Volumen del paralelepípedo)." 
      />
    </div>
  );
};

export default ProductoMixto;
