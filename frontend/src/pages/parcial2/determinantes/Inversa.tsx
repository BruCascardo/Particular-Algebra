import React from 'react';
import 'katex/dist/katex.min.css';
import { InlineMath, BlockMath } from 'react-katex';
import TopicHeader from '../../../components/TopicHeader';
import TopicNavigation from '../../../components/TopicNavigation';
import AiChatBot from '../../../components/AiChatBot';
import '../../vectores/VectorTopic.css';

const Inversa: React.FC = () => {
  return (
    <div className="vector-topic-container">
      <TopicHeader 
        title="6.4. Matriz Inversa y Sus Teoremas" 
        subtitle="La Ecuación Divina de la Identidad en Base Cofactores"
      />

      <main className="topic-content">
        <div className="concept-box">
          <h3>Uniéndolo Todo: Hallando a <InlineMath math="A^{-1}" /> con Exactitud</h3>
          <p>
             Ya hemos dilucidado incansablemente a lo largo de este cuatrimestre a la célebre e intrépida Matriz Inversa empírica (<InlineMath math="A^{-1}" />), usándola para aplastar sin piedad SELs cuadrados complejos bajo el peso puro de su Teorema. Sin embargo... ¿Cómo logramos encontrarla numéricamente si nos dan la simple y cruda grilla original <InlineMath math="A" /> para estudiarla en clase práctica presencial?
          </p>
          <p>
            Existe y aguarda en la oscuridad una <strong>Fórmula Creadora de Inversas Excepcionales</strong> dictaminada y probada teóricamente que utiliza los monstruos analíticos recabados en los temas previos: El peso del <em>Determinante originario</em> y el ente estelar parasítico del espejo volcado llamado la <em>Matriz Adjunta</em>.
          </p>
        </div>

        <h2>La Fórmula de Oro Absoluta de la Invertibilidad</h2>

        <p>
           Asevera empíricamente que tú puedes alcanzar el nirvana al obtener formalmente esa esquiva Inversa procediendo con fe ciega tras agrupar y combinar los teoremas dictaminados multiplicando distributivamente un escalar general único... por la propia <InlineMath math="\text{Adj}(A)" />. Y ese "escalar invasor", no es otro que el mismísimo y diminuto resultado natural que arroja y expulsa tu <em>inversa fraccional uno sobre el Determinante originario central asolado</em>.
        </p>

        <div className="formula-box" style={{ background: 'rgba(50, 60, 100, 0.4)' }}>
           <p style={{ margin: 0, fontSize: '1rem', color: '#e0e1dd' }}>Ecuación Canónica Absoluta Descubridora de A-1:</p>
          <BlockMath math="A^{-1} = \frac{1}{|A|} \cdot \text{Adj}(A)" />
        </div>

        <div style={{ paddingLeft: '1.5rem', borderLeft: '3px solid #e06666', margin: '1rem 0' }}>
            <p style={{ fontWeight: 600, color: '#e0e1dd' }}><InlineMath math="\Rightarrow" /> ¿Entiendes ahora por qué <InlineMath math="|A|" /> jamás debe ser Cero?</p>
            <p style={{ fontSize: '0.95rem' }}>A nivel matemático escolar más crudo de fraccionales reales con racionales y divisorios en <InlineMath math="\mathbb{R}" />: Dividir un numerador entre un Cero ($0$) descalabra catastróficamente al Universo destrozando la matriz general y rompiendo límites topológicos que conllevan a un fallo estrepitoso por indefinición irreal o infinita del espacio. <br/> Y si $\det(A)=0$... La fórmula <InlineMath math="\frac{1}{0} \cdot \text{Adj}(A)" /> estallaría. ¡Es por eso riguroso indiscutible que una singular jamás, en ninguna encarnación natural, ostentará el poder de una <InlineMath math="A^{-1}" /> pura!</p>
        </div>

        <h2>Teoremas Veloces del Determinante (Atajos Mentales Útiles)</h2>
        <p>
          Al igual que el Álgebra regala a la humanidad <em>"Propiedades Adicionales"</em> a usar en los cálculos y reducciones complejas de las Transpuestas de multiplicación (hace dos clases atrás en 5.4), también te obsequia un set exquisitamente blindado y verídico de conjeturas milagrosas pre-aprobadas bajo ley determinística para salvar vidas y horas-reloj durante los exámenes más arduos.
        </p>

        <div className="example-box">
           <h4>A) El Producto Fracturado Multiplicativo Mágico (Teorema Estelar)</h4>
           <BlockMath math="|A \cdot B| = |A| \cdot |B|" />
           <p style={{ marginTop: '0.5rem', fontSize: '0.90rem' }}>
              En lugar de proceder y arrojarse obligatoriamente al tedioso paso abismal de operar durante largos instantes una multiplicación manual gigante $A \cdot B$ cruzando fila$\times$columna $p\times p$ para obtener una "nueva matriz inmensa C" a la cual luego aplicarle Sarrus con estrés mental a ciegas... Este Teorema nos cobija y te autoriza universalmente a <strong>calcular la medida en paz de ambos determinantes escurridizos solapados e ínfimos originarios en forma separada</strong> sin juntarlos. Luego, con los 2 números naturales en la mano logrados (<InlineMath math="k_1 \text{ y } k_2" />), los multiplicas de golpe en la civilización como {'<5 \\times 3> = 15'}. Exacto e infalible matemáticamente puro.
           </p>
        </div>

        <div className="example-box">
           <h4>B) El Espacio Homólogo al Acostarse Físicamente Inerte</h4>
           <BlockMath math="|A^{T}| = |A|" />
           <p style={{ marginTop: '0.5rem', fontSize: '0.90rem' }}>
              Volver acostar y transponer lo que ya estaba parado y de frente para alterar sus filas tornándolas en las columnas formales dimensionales... ¡No roba ni incrementa la cantidad cúbica o cuadrada tridimensional total final encapsulada alojada que formaban el volumen o área espacial atesorada! El espacio interior se mantiene idéntico imperturbado para un cuadro $\det(A)$, resultando por lógica aplastante valer empíricamente e intrínsecamente igual métricamente intacto de volumen al reordenarse en $A^T$.
           </p>
        </div>

        <div className="example-box" style={{ borderColor: '#a8d5ba' }}>
           <h4>C) La Potencia de Escala Intrusiva Global Extrema Invasora Estelar ($k$)</h4>
           <BlockMath math="|k \cdot A_{n \times n}| = k^n \cdot |A|" />
           <p style={{ marginTop: '0.5rem', fontSize: '0.90rem' }}>
              Peligro mortal inquebrantable para incautos. Si estás hallando o resolviendo un caso y pretendes extraer valiente o expulsar del cuadro global una de tus Variables unitarias de coeficientes unificadores Multiplicativos invasivos "Escalares ($k$)" para que salga victoriosa abandonando el nido general saliendo pacíficamente de <em>afuera del cascarón de un Determinante mágico</em>... Esa variable escapará multiplicando, ¡sí!, <strong>Pero siempre forzada intrínsecamente arrastrando obligatoriamente elevada exponencialmente a la enésima magnitud paramétrica ($n$) de Longitud exacta universal a la cual pertenecía abstractamente ese arreglo <InlineMath math="A_{n \times n}" /> origen.</strong>
           </p>
        </div>

      </main>

      <TopicNavigation 
        prevPath="/parcial2/determinantes/preliminares"
        nextPath="/parcial2/determinantes/relacion-traza-determinante" 
      />
    
      <AiChatBot 
        topicTitle="Teoremas Matricio Determinístico y de Extracciones k" 
        topicContext="Fórmula A^{-1} obligada de Adjunta multiplicada 1/|A|, excusa verídica final de la singularidad por la prohibición natural de dividir por 0 a las nulas. Teoremas estelares rompiendo el producto para evadir de oficio cálculos interminables matriciales sumatorios largos distribuyendo por 2 escalares. El colapso del Escalar global en la huida del nido elevándose y sufriendo los embates de su orden de escala 'n' de matriz original base tridimensional pura de cimentación." 
      />
    </div>
  );
};

export default Inversa;
