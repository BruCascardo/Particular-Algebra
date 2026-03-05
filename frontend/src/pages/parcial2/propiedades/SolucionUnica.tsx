import React from 'react';
import 'katex/dist/katex.min.css';
import { InlineMath, BlockMath } from 'react-katex';
import TopicHeader from '../../../components/TopicHeader';
import TopicNavigation from '../../../components/TopicNavigation';
import AiChatBot from '../../../components/AiChatBot';
import '../../vectores/VectorTopic.css';

const SolucionUnica: React.FC = () => {
  return (
    <div className="vector-topic-container">
      <TopicHeader 
        title="5.2. Teorema de Solución Única Inversible" 
        subtitle="Despejando Sistemas bajo el Poder de la Identidad"
      />

      <main className="topic-content">
        <div className="concept-box">
          <h3>Uniendo Mundos: El Álgebra y los Sistemas</h3>
          <p>
             Hasta ahora hemos desmenuzado Sistemas de Ecuaciones SEL y Operaciones de Matrices como si habitaran mundos dispares y desconectados. Hoy usaremos el destructivo poder hallado recién en la <strong>Matriz Inversa</strong> para resolver y aniquilar sin dudarlo la incerteza de un sistema completo de incógnitas <InlineMath math="Ax = b" /> en breves y elegantes movimientos de magia algebraica superior.
          </p>
        </div>

        <h2>El Teorema Inversible</h2>

        <p>
           El teorema te da un salvoconducto total: "Si te enfrentas a una Ecuación Matricial Abstracta de la forma <InlineMath math="A \cdot x = b" />, y logras comprobar con absoluta certeza que tu matriz madre de coeficientes <InlineMath math="A" /> es del carácter Cuadrada e <strong>Inversible</strong>... Entonces, mi joven alumno, tienes por ley garantizado un Sistema Compatible Determinado, que goza indiscutible de una y solo una <strong>Única Solución en el tejido espacial universal</strong>".
        </p>

        <div className="example-box">
           <h4>La Demostración y El Despeje Formal</h4>
           <p>Si partiéramos ingenuamente de la expresión:</p>
           <BlockMath math="A \cdot x = b" />
           <p>Deseamos lógicamente despejar la escurridiza matriz columna incógnita <InlineMath math="x" />. Como en las matrices no existe el "pasar dividiendo", usaremos el as bajo la manga. Pre-Multiplicamos rígidamente ambos lados del muro de la igualdad por el ente anulador <InlineMath math="A^{-1}" />:</p>
           <BlockMath math="A^{-1} \cdot (A \cdot x) = A^{-1} \cdot b" />
           <p>Bajo la santidad de la ley asociativa interna, unimos lo destructivo de la izquierda y sabemos por definición previa que su colisión genera la ceniza inerte y neutra de la identidad (<InlineMath math="I" />):</p>
           <BlockMath math="(A^{-1} \cdot A) \cdot x = A^{-1} \cdot b \Rightarrow I \cdot x = A^{-1} \cdot b" />
           <p>Cualquier cosa operada con el elemento Neutro Identidad, es en sí misma... con lo cual, queda probada y al desnudo nuestra abstracta y hermosa fórmula mágica de resolución absoluta:</p>
        </div>

        <div className="formula-box" style={{ background: 'rgba(50, 60, 100, 0.4)' }}>
           <p style={{ margin: 0, fontSize: '1rem', color: '#e0e1dd' }}>Ecuación Formal Deductiva Mágica de Unicidad:</p>
          <BlockMath math="\bold{x = A^{-1} \cdot b}" />
        </div>

        <p>
           El corolario es brutalmente franco, no tienes que usar Gauss si no lo deseas para un SEL Cuadrado perfecto (Fila n = Columna n incógnitas) si dominas invertir matrices por adjuntos. Tomas el vector columna de los términos independientes (<InlineMath math="b" />), lo multiplicas pre-operando por la pesada Matriz Inversa total <InlineMath math="A^{-1}" /> y las incógnitas flotarán resueltas ante ti instantáneamente en <InlineMath math="x" />.
        </p>

      </main>

      <TopicNavigation 
        prevPath="/parcial2/propiedades/inversa-identidad"
        nextPath="/parcial2/propiedades/traza" 
      />
    
      <AiChatBot 
        topicTitle="Despeje de Sistemas Cuadrados con Inversas" 
        topicContext="Demostración paso a paso de despejar Ax=b sabiendo pre-multiplicar por A^{-1} a ambos extremos de la igualación para aprovechar la absorción neutra Identidad reduciendo la pesada estructura a nada más ni nada menos que un vector columa x=A^{-1}*B garantizando el cruce perfecto en único hiper-punto en el espacio vectorial determinado." 
      />
    </div>
  );
};

export default SolucionUnica;
