import React from 'react';
import 'katex/dist/katex.min.css';
import { InlineMath, BlockMath } from 'react-katex';
import TopicHeader from '../../../components/TopicHeader';
import TopicNavigation from '../../../components/TopicNavigation';
import AiChatBot from '../../../components/AiChatBot';
import '../../vectores/VectorTopic.css';

const Transposicion: React.FC = () => {
  return (
    <div className="vector-topic-container">
      <TopicHeader 
        title="4.2. Transposición de Matrices" 
        subtitle="Permutando Filas y Columnas, de lado a lado"
      />

      <main className="topic-content">
        <div className="concept-box">
          <h3>El Espejismo Transpuesto </h3>
          <p>
            La <strong>Transposición</strong> es una operación o filtro morfológico intrigante que se aplica en solitario sobre una sola matriz. Consiste simple y tajantemente en agarrar el arreglo entero de datos numéricos y <strong>convertir todas sus filas en las nuevas columnas</strong> de una nueva matriz equivalente.
          </p>
          <p>
            Al hacerlo, naturalmente todo lo que era columna pasa inmediatamente a ser fila. Se denota a la matriz transpuesta coronándola con una letra T mayúscula en su exponente: <InlineMath math="A^T" />.
          </p>
        </div>

        <h2>Alteración de Dimensiones</h2>

        <p>
          Una consecuencia directa de acostar lo que estaba de pie, es que la dimensión geométrica de escala de la matriz se da vuelta. Si la Matriz originaria <InlineMath math="A" /> era un rascacielos rectangular del orden <InlineMath math="m \times n" />, su hija mutada <InlineMath math="A^T" /> se acostará renaciendo forzosamente como una matriz del orden inverso <InlineMath math="n \times m" />.
        </p>

        <div className="example-box">
          <h4>Viendo a la Transpuesta de Pie</h4>
          <p>Tengamos una matriz no cuadrada clásica de <InlineMath math="2 \times 3" /> (2 filas, 3 columnas):</p>
          <BlockMath math="A = \begin{bmatrix} 1 & 2 & 3 \\ 4 & 5 & 6 \end{bmatrix}" />
          <p>
            Para generar a <InlineMath math="A^T" />, agarramos la Fila 1 de A (<InlineMath math="[1 \ 2 \ 3]" />) y la dejamos caer parada conformando rígidamente la entera Columna 1 transpuesta. Lo mismo con Fila 2 resultando Columna 2:
          </p>
          <BlockMath math="A^T = \begin{bmatrix} 1 & 4 \\ 2 & 5 \\ 3 & 6 \end{bmatrix}" />
          <p>La nueva matriz transpuesta lógicamente quedó indexada bajo el orden reverso de <InlineMath math="3 \times 2" />.</p>
        </div>

        <div className="formula-box" style={{ background: 'rgba(50, 60, 100, 0.4)' }}>
           <p style={{ margin: 0, fontSize: '1rem', color: '#e0e1dd' }}>La Regla Invariable de Intercambio Posicional (<InlineMath math="a_{ij} \to a_{ji}" />):</p>
          <BlockMath math="C = A^T \iff c_{ij} = a_{ji} \quad \forall \ i, \ j" />
        </div>

        <h2>Particularidades en Cuadradas: Simetría</h2>
        <p>
           Cuando aplicamos el efecto transposición sobre el selecto grupo de las <em>Matrices Cuadradas</em>, como las dimensiones de filas y columnas son idénticas... ocurre que <InlineMath math="A^T" /> retiene la forma cuadrada idéntica a su padre.
           Bajo esta circunstancia específica, nacen dos de las clasificaciones algebraicas más hermosas:
        </p>

        <h3>1. Matriz Simétrica</h3>
        <p>
           Una matriz es laureada como netamente Simétrica si, luego de someterla en el quirófano a un proceso de Transposición rigurosa intercambiando sus filas por sus columnas... el paciente final resulta ser matemáticamente, y en todas sus casillas, <strong>indistinguible y 100% una réplica exacta de la original pre-operación.</strong>
        </p>
        <div style={{ paddingLeft: '1.5rem', borderLeft: '3px solid #778da9', margin: '1rem 0' }}>
            <BlockMath math="\text{Condición Formal: } A = A^T" />
            <p style={{ fontSize: '0.85rem', marginTop: '0.5rem' }}>Visualmente, los números arriba de la diagonal principal son un perfecto espejo simétrico de los de abajo.</p>
        </div>

        <h3>2. Matriz Antisimétrica </h3>
        <p>
           De lo contrario, es Antisimétrica cuando tras haber girado e transpuesto todo hacia la inversa... tú constatas que obtuviste exactamente a su matriz original <InlineMath math="A" />, solo que toda y cada una multiplicada por un factor pesimista e invasivo negativo universal (<InlineMath math="-1" />). 
        </p>
        <div style={{ paddingLeft: '1.5rem', borderLeft: '3px solid #e06666', margin: '1rem 0' }}>
            <BlockMath math="\text{Condición Formal: } A^T = -A" />
            <p style={{ fontSize: '0.85rem', marginTop: '0.5rem' }}>Para que esto sea mágicamente posible sin corromperse, su Diagonal Principal debe estar obligatoriamente habitada y ocupada entera de ceros ($0$).</p>
        </div>

      </main>

      <TopicNavigation 
        prevPath="/parcial2/operaciones/adicion-escalar"
        nextPath="/parcial2/operaciones/producto-matricial" 
      />
    
      <AiChatBot 
        topicTitle="Operación de Transposición" 
        topicContext="Filtro visual A^T invirtiendo roles entre Filas y Columnas, y alternando la matriz nXm a mXn. Disensión específica para reconocer Simetrías perfectas rebotadas en el espejo de las matrices cuadradas y las Anti-Simétricas (multiplicadas todo por menos 1 frente a su contraparte normal pre-alteracion)." 
      />
    </div>
  );
};

export default Transposicion;
