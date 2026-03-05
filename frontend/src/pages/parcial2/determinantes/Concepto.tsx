import React from 'react';
import 'katex/dist/katex.min.css';
import { InlineMath, BlockMath } from 'react-katex';
import TopicHeader from '../../../components/TopicHeader';
import TopicNavigation from '../../../components/TopicNavigation';
import AiChatBot from '../../../components/AiChatBot';
import '../../vectores/VectorTopic.css';

const Concepto: React.FC = () => {
  return (
    <div className="vector-topic-container">
      <TopicHeader 
        title="6.1. Concepto de Determinante y Adjunto" 
        subtitle="Midiendo el Volumen y la Trascendencia Dimensional"
      />

      <main className="topic-content">
        <div className="concept-box">
          <h3>¿Qué es realmente el Determinante (<InlineMath math="|A|" />)?</h3>
          <p>
            Hemos hablado largo y tendido de las matrices como meras grillas visuales esparcidas de información. Pero, ¿Qué si te dijera que cada matriz encierra y posee intrínsecamente un único "peso" numérico real que define todo su rollo de existencia? Ese escalar mágico absoluto es el <strong>Determinante</strong>.
          </p>
          <p>
            Geométricamente hablando, en vez de ver a la matriz como datos, si la vemos como 2 vectores (en 2D) o 3 vectores (en 3D), el valor numérico arrojado por el Determinante de la matriz calcula y mapea milimétricamente el <em>Área</em> del paralelogramo (o el <em>Volumen</em> del paralelepípedo) perfecto que conforman dichos vectores encerrando el espacio.
          </p>
        </div>

        <h2>Requisito Único: Cuadradas Exclusivas</h2>

        <p>
          ¡Alto ahí! La Función Determinante, por leyes elementales de cálculo de área completa, se rehúsa y es inoperable sobre arquitecturas rectangulares. Para denotar y aplicarlo, solo son aptas formaciones abstractas <strong>100% Cuadradas (<InlineMath math="n \times n" />)</strong>.
          Se lo escribe cambiando y enderezando los grandes corchetes clásicos en simples barras verticales absolutas: <InlineMath math="\det(A)" /> o rígidamente  <InlineMath math="|A|" />.
        </p>

        <div className="example-box">
          <h4>Determinante Básico de Orden 2x2</h4>
          <p>La regla más esencial humana para el orden más bajo. Se multiplica la diagonal principal y se le sustrae la secundaria cruzada:</p>
          <BlockMath math="A = \begin{bmatrix} a & b \\ c & d \end{bmatrix} \implies |A| = \begin{vmatrix} a & b \\ c & d \end{vmatrix} = (\bold{a \cdot d}) - (\bold{b \cdot c})" />
        </div>

        <h2>Desarmando Titanes: El Menor y el Cofactor</h2>

        <p>
           Para poder calcular el Determinante generalizado en matrices gigantes (orden <InlineMath math="3, 4, \dots, n" />), el Teorema de Laplace dicta destrozar y romper la matriz reduciéndola recursivamente en partes más diminutas. Aquí nacen dos conceptos fundamentales anatómicos:
        </p>

        <h3>1. El Menor Complementario (<InlineMath math="M_{ij}" />)</h3>
        <p>
           Si te posicionas sobre cualquier elemento numérico particular <InlineMath math="a_{ij}" /> y clavas la mirada ahí, el <em>Menor Complementario</em> <InlineMath math="M_{ij}" /> es matemáticamente el cálculo crudo resultante del <strong>Determinante a la nueva submatriz menor sobreviviente</strong>... que ha que quedado libre tras tú haber borrado visual y ficticiamente toda la fila <InlineMath math="i" /> y toda la columna <InlineMath math="j" /> a las que pertenecía tu número original anudado.
        </p>

        <div className="formula-box" style={{ background: 'rgba(50, 60, 100, 0.4)' }}>
           <p style={{ margin: 0, fontSize: '1rem', color: '#e0e1dd' }}>2. El Adjunto o Cofactor formal (<InlineMath math="A_{ij}" /> o <InlineMath math="\text{Cof}_{ij}" />):</p>
          <BlockMath math="A_{ij} = (-1)^{(i+j)} \cdot M_{ij}" />
        </div>
        
        <p>
           <strong>La Diferencia con el Menor:</strong> El Cofactor Adjunto agarra al Menor crudo, y lo enriquece aplicándole un <em>Signo Alternante Posicional</em> obligatorio fijado por ley natural.
           El signo lo dictamina el esotérico factor <InlineMath math="(-1)^{i+j}" />: Si la sumatoria de las coordenadas del asiento (<InlineMath math="i+j" />) arroja un número Par, el signo se consolida Positivo (<InlineMath math="+" />). Si arroja Impar, el valor es castigado con un Negativo fuerte reversor (<InlineMath math="-" />).
        </p>

        <div className="example-box" style={{ borderColor: '#a8d5ba' }}>
           <h4>Plano Visual de Tablero de Signos</h4>
           <p>Solo al ver los asientos de un cuadrilátero <InlineMath math="3 \times 3" /> y sumar fila+columna, obtienes en crudo este patrón con el cual multiplicar inalterablemente los Menores, asimilándolo a un perfecto tablero de ajedrez algebraico:</p>
           <BlockMath math="\begin{bmatrix} + & - & + \\ - & + & - \\ + & - & + \end{bmatrix}" />
        </div>

      </main>

      <TopicNavigation 
        prevPath="/parcial2/propiedades/adicionales"
        nextPath="/parcial2/determinantes/sarrus-chio" 
      />
    
      <AiChatBot 
        topicTitle="El Concepto de Determinante y Adjunto" 
        topicContext="Filtros restrictos: Solo matrices abstractas Cuadradas pueden ostentar Determinante o Área (|A|). Explicación minuciosa de desglosar por Laplace tomando el Adjunto (A_ij) el cual lleva fundido a fuego el alternador de signo en forma de Tablero de Ajedrez (-1)^(i+j) fusionado con el Menor Complementario limpio (Determinante submatriz) originado borrando la cruz de Fila y Columna i-j." 
      />
    </div>
  );
};

export default Concepto;
