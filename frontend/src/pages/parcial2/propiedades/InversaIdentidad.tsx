import React from 'react';
import 'katex/dist/katex.min.css';
import { InlineMath, BlockMath } from 'react-katex';
import TopicHeader from '../../../components/TopicHeader';
import TopicNavigation from '../../../components/TopicNavigation';
import AiChatBot from '../../../components/AiChatBot';
import '../../vectores/VectorTopic.css';

const InversaIdentidad: React.FC = () => {
  return (
    <div className="vector-topic-container">
      <TopicHeader 
        title="5.1. Matriz Inversa e Identidad" 
        subtitle="Encontrando la antítesis para recuperar lo Neutro"
      />

      <main className="topic-content">
        <div className="concept-box">
          <h3>La Excepción a la Regla: La Matriz Inversa (<InlineMath math="A^{-1}" />)</h3>
          <p>
             En el álgebra tradicional escolar, sabemos que si tenemos un número <InlineMath math="5" />, podemos multiplicarlo por su recíproco o inverso <InlineMath math="1/5" /> (o <InlineMath math="5^{-1}" />) para anularse y retornar forzosamente al neutro universal: el <InlineMath math="1" />. 
          </p>
          <p>
            En Álgebra Lineal superior, existe un santo grial de comportamiento análogo llamado <strong>Matriz Inversa</strong>. Si tienes una matriz originaria <InlineMath math="A" />, su Inversa es aquella otra matriz mágica (denotada como <InlineMath math="A^{-1}" />) tal que, al efectuar el feroz producto matricial entre ambas, el tejido dimensional colapse devolviendo como resultado pacífico absoluto a la famosa Matriz Identidad (<InlineMath math="I" />).
          </p>
        </div>

        <h2>La Condición de Existencia</h2>

        <p>
          No todo arreglo de números es digno ni capaz de poseer una inversa en este universo numérico. Hay dos estatutos lapidarios para que nazca:
        </p>
        <ul className="list-styled">
           <li><strong>Ser Cuadrada Innegablemente:</strong> Solo las matrices del orden estricto <InlineMath math="n \times n" /> son candidatas a poseerla. Las rectangulares se descartan automáticamente.</li>
           <li><strong>Ser Regular (No-Singular):</strong> Un concepto abstracto que desentrañaremos con profundidad pura en el Tema 6 de <em>Determinantes</em>, pero asume por ahora que la data de sus filas no debe estar "viciada" o sobre-escrita generando dependencias redundantes.</li>
        </ul>

        <div className="formula-box" style={{ background: 'rgba(50, 60, 100, 0.4)' }}>
           <p style={{ margin: 0, fontSize: '1rem', color: '#e0e1dd' }}>Ecuación Canónica de la Invertibilidad por Excelencia:</p>
          <BlockMath math="A \cdot A^{-1} = I \quad \text{y también} \quad A^{-1} \cdot A = I" />
        </div>

        <div className="example-box">
           <h4>Una de las Pocas Conmutativas</h4>
           <p>
             Como advertimos trágicamente en el Tema 4, el producto de matrices jamás es conmutativo libre (<InlineMath math="A \cdot B \neq B \cdot A" />). 
             ¡Pero la Invertibilidad es una de las poquísimas <strong>excepciones</strong> divinas! Si tú logras dar con la verídica y auténtica matriz <InlineMath math="A^{-1}" />, está estipulado y teóricamente comprobado que la propiedad funcionará armónica en ambas direcciones, ya sea operando el cruce multiplicativo por la Izquierda, o atacando el producto por la Derecha: El cruce siempre finalizará escupiendo de retorno la bella <InlineMath math="I_{n \times n}" />.
           </p>
        </div>

        <h2>Propiedad del Producto Inversible</h2>
        <p>
           Si la malicia del destino hace que nos crucemos con un problema donde estemos obligados a desentrañar e invertir <strong>el producto conjunto íntegro de 2 matrices</strong> a la vez (<InlineMath math="(A \cdot B)^{-1}" />), surge una de las propiedades reversas más intrigantes para el matemático.  
        </p>

        <div style={{ paddingLeft: '1.5rem', borderLeft: '3px solid #e06666', margin: '1rem 0' }}>
            <BlockMath math="(A \cdot B)^{-1} = B^{-1} \cdot A^{-1}" />
            <p style={{ fontSize: '0.85rem', marginTop: '0.5rem' }}>Observa atentamente la fatalidad morfológica: El exponente invertidor no solo se reparte entre las letras internas, ¡sino que obliga teóricamente a permutar forzosamente el orden y posición de la operación! El de atrás pasa al frente, y viceversa para resguardar las dimensiones conformables <InlineMath math="p \times p" /> del producto.</p>
        </div>

      </main>

      <TopicNavigation 
        prevPath="/parcial2/operaciones/producto-matricial"
        nextPath="/parcial2/propiedades/solucion-unica" 
      />
    
      <AiChatBot 
        topicTitle="Matriz Inversa y El Elemento Neutro Identidad" 
        topicContext="Filosofía matemática tras el exponente inverso A^{-1} buscando el neutro absoluto. Condición de regularidad (superficial sin Determinante por ahora) y la rotura excepcional de la no-conmutatividad porque el producto de inversas (Derecha e Izq) siempre arrojan la Matriz Identidad I de la diagonal pura 1." 
      />
    </div>
  );
};

export default InversaIdentidad;
