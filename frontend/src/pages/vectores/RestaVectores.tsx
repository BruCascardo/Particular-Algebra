import React from 'react';
import 'katex/dist/katex.min.css';
import { InlineMath, BlockMath } from 'react-katex';
import TopicHeader from '../../components/TopicHeader';
import TopicNavigation from '../../components/TopicNavigation';
import AiChatBot from '../../components/AiChatBot';
import './VectorTopic.css';

const RestaVectores: React.FC = () => {

  return (
    <div className="vector-topic-container">
      <TopicHeader 
        title="Resta de Vectores" 
        subtitle="Diferencia vectorial como suma del opuesto"
      />

      <main className="topic-content">
        <div className="concept-box">
          <h3>Suma Enmascarada</h3>
          <p>
            Al igual que en los números reales y la aritmética estándar, la resta de vectores no es una operación "nueva" por sí misma, sino que se define formalmente a partir de la <strong>suma y el vector opuesto</strong>.
          </p>
          <div className="formula-box">
            Restar un vector <InlineMath math="\vec{v}" /> a un vector <InlineMath math="\vec{u}" /> equivale a sumarle a <InlineMath math="\vec{u}" /> el opuesto de <InlineMath math="\vec{v}" />.
          </div>
          <div className="formula-box" style={{ marginTop: '0.5rem' }}>
            <BlockMath math="\vec{u} - \vec{v} = \vec{u} + (-\vec{v})" />
          </div>
        </div>

        <h2>Resolución Analítica</h2>
        <p>
          A efectos prácticos y analíticos, la diferencia geométrica simplemente implica restar algebraicamente todas y cada una de sus componentes ordenadas, tal como esperaríamos de la suma:
        </p>
        <div className="formula-box" style={{ marginBottom: '1.5rem' }}>
          <BlockMath math="\vec{u} - \vec{v} = (u_x - v_x, \;\; u_y - v_y)" />
        </div>

        <h2>Resolución Gráfica Geometrica</h2>
        <p>
          Dado que restar es sumar un opuesto, tenemos dos interpretaciones equivalentes en los ejes cartesianos:
        </p>

        <h3>Método 1: Invirtiendo el segundo vector</h3>
        <p>
          Partes de los vectores normales concurrentes en el origen <InlineMath math="\vec{u}" /> y <InlineMath math="\vec{v}" />. Tomas a <InlineMath math="\vec{v}" /> y dibujas su <strong>vector opuesto</strong> <InlineMath math="-\vec{v}" /> (misma recta y tamaño, pero apuntas la flecha hacia atrás un ángulo de 180 grados). A continuación, aplicas la antigua regla del paralelogramo o poligonal entre el original <InlineMath math="\vec{u}" /> y el nuevo <InlineMath math="-\vec{v}" />. La diagonal o cierre es tu <InlineMath math="\vec{u} - \vec{v}" />.
        </p>

        <h3>Método 2: Extremos concurrentes ("Atajo Directo")</h3>
        <p>
          Dibuja los vectores iniciales <InlineMath math="\vec{u}" /> y <InlineMath math="\vec{v}" /> saliendo amistosamente desde un punto en común (por lo general el verdadero centro de coordenadas). 
        </p>
        <p>
          El vector <strong>resta o diferencia</strong> <InlineMath math="\vec{u} - \vec{v}" /> resultaría ser un segmento flechado que va <strong>desde la punta de <InlineMath math="\vec{v}" /> hacia la punta de <InlineMath math="\vec{u}" /></strong>. Siempre se dibuja dirigiéndose hacia la cabeza (extremo) del número minuendo (el número principal al cual le estás restando o quitando algo positivo).
        </p>

        <div className="example-box">
          <h4>Ejemplo Numérico</h4>
          <p>
            Si tomamos los mismos amigos del ejemplo de la suma anterior pero los restamos:
            <BlockMath math="\vec{u} = (2, 5)" />
            <BlockMath math="\vec{v} = (-1, 3)" />
          </p>
          <BlockMath math="\vec{u} - \vec{v} = (2 - (-1), \;\; 5 - 3)" />
          <BlockMath math="\vec{u} - \vec{v} = (3, 2)" />
        </div>
      </main>

      <TopicNavigation 
        prevPath="/parcial1/operaciones/propiedades-adicion"
        nextPath="/parcial1/operaciones/modulo-dos-puntos" 
      />
    
      <AiChatBot 
        topicTitle="Resta de Vectores" 
        topicContext="Resta vectorial vista como la suma del vector minuendo con el opuesto del vector sustraendo. Demostración gráfica." 
      />
    </div>
  );
};

export default RestaVectores;
