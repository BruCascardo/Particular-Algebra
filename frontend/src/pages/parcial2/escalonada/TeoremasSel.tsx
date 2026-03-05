import React from 'react';
import 'katex/dist/katex.min.css';
import { InlineMath, BlockMath } from 'react-katex';
import TopicHeader from '../../../components/TopicHeader';
import TopicNavigation from '../../../components/TopicNavigation';
import AiChatBot from '../../../components/AiChatBot';
import '../../vectores/VectorTopic.css';

const TeoremasSel: React.FC = () => {
  return (
    <div className="vector-topic-container">
      <TopicHeader 
        title="2.2. Teoremas de Resolución de Sistemas" 
        subtitle="El Teorema de Rouché-Frobenius (Rouché-Capelli)"
      />

      <main className="topic-content">
        <div className="concept-box">
          <h3>Prediciendo el Destino del Sistema</h3>
          <p>
            No siempre es necesario desgastar energía intentando resolver o despejar por completo un Sistema de Ecuaciones Lineales para saber qué tipo de solución aguarda al final del camino.
            En Álgebra Lineal, el <strong>Teorema de Rouché-Frobenius</strong> (o Rouché-Capelli en algunas literaturas) nos brinda una herramienta infalible para clasificar el tipo de SEL basándose única y exclusivamente en el concepto de <em>Rango</em>.
          </p>
        </div>

        <h2>El Teorema Fundamental de Rouché-Frobenius</h2>

        <p>
          Sea un sistema lineal expresado como <InlineMath math="A\vec{x} = \vec{b}" /> que contiene <InlineMath math="n" /> incógnitas variables. Denotemos:
        </p>
        <ul className="list-styled" style={{ marginTop: '0.5rem', marginBottom: '1.5rem' }}>
          <li><InlineMath math="\text{rg}(A)" />: Al Rango de la matriz de los coeficientes de las incógnitas.</li>
          <li><InlineMath math="\text{rg}(A|b)" />: Al Rango de la matriz <strong>ampliada</strong> (la que contiene también los resultados independientes <InlineMath math="b" /> en la última columna).</li>
          <li><InlineMath math="n" />: El número total de incógnitas en el sistema (número de columnas de <InlineMath math="A" />).</li>
        </ul>

        <div className="formula-box" style={{ background: 'rgba(30, 70, 50, 0.4)' }}>
           <h4 style={{ margin: 0, fontSize: '1.1rem', color: '#a8d5ba', marginBottom: '1rem' }}>Caso 1: Sistema Incompatible (SI)</h4>
          <p>
             El sistema <strong>no tiene solución</strong> (las hipersuperficies corren paralelas o no intersecan) si y solo si el rango de la matriz de coeficientes es estrictamente menor al de la ampliada.
          </p>
          <BlockMath math="\text{rg}(A) \neq \text{rg}(A|b)" />
          <p style={{ fontSize: '0.85rem', marginTop: '0.5rem' }}>
            <em>¿Por qué?</em> Porque significa que la matriz ampliada ganó un Pivote nuevo en la última columna de resultados al escalonarla. Formando un absurdo del tipo <InlineMath math="[0 \ 0 \ 0 \ | \ k]" />.
          </p>
        </div>

        <div className="formula-box" style={{ background: 'rgba(50, 60, 100, 0.4)', marginTop: '1.5rem' }}>
           <h4 style={{ margin: 0, fontSize: '1.1rem', color: '#a8c5ff', marginBottom: '1rem' }}>Caso 2: Sistema Compatible (SC)</h4>
          <p>
             El sistema <strong>tendrá solución</strong> asegurada si los rangos de ambas matrices resultan idénticos matemáticamente.
          </p>
          <BlockMath math="\text{rg}(A) = \text{rg}(A|b)" />
          
          <div style={{ paddingLeft: '1.5rem', borderLeft: '3px solid #778da9', marginTop: '1rem' }}>
            <p style={{ margin: '0.5rem 0' }}><strong>Subcaso 2.A: Compatible Determinado (SCD)</strong></p>
            <p>
              Si el rango coincide y además es <strong>exactamente igual</strong> al número de incógnitas totales <InlineMath math="n" />, el sistema posee una solución precisa y única <InlineMath math="(Punto)" />.
            </p>
            <BlockMath math="\text{rg}(A) = \text{rg}(A|b) = n" />
            
            <p style={{ margin: '1rem 0 0.5rem 0' }}><strong>Subcaso 2.B: Compatible Indeterminado (SCI)</strong></p>
            <p>
              Si el rango coincide pero es <strong>menor</strong> al número de incógnitas <InlineMath math="n" />, al sistema "le faltan datos reales". Posee infinitas soluciones.
            </p>
            <BlockMath math="\text{rg}(A) = \text{rg}(A|b) < n" />
            <p style={{ fontSize: '0.85rem' }}>
              Los grados de libertad (cantidad de variables libres/paramétricas necesarias que definirán la dimensión del subespacio solución) se calculan realizando: <InlineMath math="n - \text{rg}(A)" />.
            </p>
          </div>
        </div>

        <div className="example-box" style={{ marginTop: '2rem' }}>
          <h4>Analizando Visualmente un Caso Práctico</h4>
          <p>Mira la siguiente matriz ampliada escalonada con 3 incógnitas (<InlineMath math="x, y, z" />):</p>
          <BlockMath math="\begin{bmatrix} 1 & 2 & -1 & | & 4 \\ 0 & 3 & 5 & | & 2 \\ 0 & 0 & 0 & | & 0 \end{bmatrix}" />
          <p>
            1. Aislemos solo a <InlineMath math="A" /> (quitando la última columna): Vemos <InlineMath math="2" /> filas no nulas y <InlineMath math="2" /> pivotes. Por ende <InlineMath math="\text{rg}(A) = 2" />.<br/>
            2. Miremos a toda la matriz ampliada <InlineMath math="[A|b]" />: También tiene apenas <InlineMath math="2" /> filas no nulas (la de abajo es <InlineMath math="0=0" />). Por ende <InlineMath math="\text{rg}(A|b) = 2" />.<br/>
            3. Como <InlineMath math="\text{rg}(A) = \text{rg}(A|b)" />, entonces es un <strong>Sistema Compatible</strong>.<br/>
            4. El número total de incógnitas es <InlineMath math="n=3" />. Como <InlineMath math="2 < 3" />, determinamos en unos segundos que el sistema es un <strong>Sistema Compatible Indeterminado con 1 grado de libertad</strong> (3 - 2 = 1).
          </p>
        </div>

      </main>

      <TopicNavigation 
        prevPath="/parcial2/escalonada/matriz-escalonada"
        nextPath="/parcial2/escalonada/sistemas-homogeneos" 
      />
    
      <AiChatBot 
        topicTitle="Teorema de Rouché-Frobenius" 
        topicContext="Despliegue del Teorema de Rouché-Frobenius para sistemas cuadrados y rectangulares. Demostración sobre cómo RG(A) vs RG(A|b) predicen compatibilidad, y cómo al compararse con el número de variables 'n' dictaminan determinación." 
      />
    </div>
  );
};

export default TeoremasSel;
