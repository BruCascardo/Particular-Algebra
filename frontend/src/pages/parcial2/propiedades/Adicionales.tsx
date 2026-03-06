import React, { useState } from 'react';
import 'katex/dist/katex.min.css';
import { InlineMath, BlockMath } from 'react-katex';
import TopicHeader from '../../../components/TopicHeader';
import TopicNavigation from '../../../components/TopicNavigation';
import AiChatBot from '../../../components/AiChatBot';
import { useConfig } from '../../../context/ConfigContext';
import TrainingQuiz from '../../../components/TrainingQuiz';
import { parcial2Tema5Questions } from '../../../data/quizzes';
import '../../vectores/VectorTopic.css';

const Adicionales: React.FC = () => {
  const { isTrainingMode } = useConfig();
  const [quizPassed, setQuizPassed] = useState(false);

  return (
    <div className="vector-topic-container">
      <TopicHeader 
        title="5.4. Propiedades Adicionales Clásicas" 
        subtitle="Un Catálogo Operativo para Despejar de Oficio"
      />

      <main className="topic-content">
        <div className="concept-box">
          <h3>Manejo Maestro del Álgebra Superior</h3>
          <p>
            Al desenvolverte enfrentando largas demostraciones o reducciones algebraicas, requerirás acudir inexorablemente a una especie de navaja suiza de atajos cognitivos probados matemáticamente.
            Las denominadas <strong>Propiedades de Oficio</strong>, nos revelan como mutan, interactúan o perecen diversas operaciones matrices al fusionárseles en un amasijo intrincado con funciones alteradoras vistas previamente como una <em>Inversión</em> o alteración espacial rotativa de base dimensional dictaminada por una severa <em>Transposición</em>.
          </p>
        </div>

        <h2>Familias de Involución </h2>

        <p>
           Un factor u operador <strong>Involutivo</strong> en general es un ente destructivamente repetitivo que, irónicamente e inversamente, al accionar o infligir daño por duplicado... desanda por completo o extingue de oficio y base su propio conjuro previo, anulando así todos los cambios cósmicos devolviéndote ileso y a salvaguardas el objeto primigenio idéntico al principio prístino virgen de tiempos no perturbado por agentes físicos.
        </p>

        <div className="example-box">
           <h4>A) La Doble Inversa Especular (<InlineMath math="(A^{-1})^{-1}" />)</h4>
           <BlockMath math="(A^{-1})^{-1} = A" />
           <p style={{ marginTop: '0.5rem', fontSize: '0.90rem' }}>
              La Matriz que es la Inversa absoluta neutralizadora de aquella otra inversa que originariamente se derivó de A... resulta recaer infaliblemente ser la mismísima A.
           </p>
        </div>

        <div className="example-box">
           <h4>B) El Doble Giro Transpuesto (<InlineMath math="(A^{T})^{T}" />)</h4>
           <BlockMath math="(A^{T})^{T} = A" />
           <p style={{ marginTop: '0.5rem', fontSize: '0.90rem' }}>
              Volver acostar algo que ya ha sido parado para convertir el <InlineMath math="m \to n" /> devolviéndolo al mismo orden nativo, restaura intacto todas las posiciones espaciales de la matriz idéntica sin margen de fuga.
           </p>
        </div>

        <h2>Álgebra Reversa sobre El Producto Cruzado (<InlineMath math="A \cdot B" />)</h2>

        <p>
           Las mutaciones matemáticas abismales de la <em>Inversa Fuerte Extensa y la Transposición Mágica</em> al verse lidiando frente al choque estructural cruzado atroz del Producto de Fila $\times$ Columna, presentan ambas idéntico proceder excepcional subversivo que perturba las leyes de asociación y composición natural e inocente de los humanos que solemos emplear.
        </p>
        
        <div style={{ paddingLeft: '1.5rem', borderLeft: '3px solid #f9a469', margin: '1rem 0' }}>
            <p style={{ fontWeight: 600, color: '#e0e1dd' }}><InlineMath math="\Rightarrow" /> 1. Propiedad Reversa Multiplicativa Transpuesta</p>
            <BlockMath math="(A \cdot B)^{T} = B^{T} \cdot A^{T}" />
            <p style={{ fontSize: '0.85rem', marginTop: '0.5rem' }}>Estructuralmente un Producto se defiende del salto de Dimensión de $T$ expulsando al último y pre-invirtiéndolo en la cabecera rotadora. Un milagro del orden $p \times p$ geométrico interno.</p>
        </div>

        <div style={{ paddingLeft: '1.5rem', borderLeft: '3px solid #e06666', margin: '1rem 0' }}>
            <p style={{ fontWeight: 600, color: '#e0e1dd' }}><InlineMath math="\Rightarrow" /> 2. Propiedad Reversa Multiplicativa Inversible</p>
            <BlockMath math="(A \cdot B)^{-1} = B^{-1} \cdot A^{-1}" />
            <p style={{ fontSize: '0.85rem', marginTop: '0.5rem' }}>Al igual que con la Transpuesta, la pesada capa y mortaja anuladora Inversa exige permutar radicalmente el puente del orden asociativo sin excepciones.</p>
        </div>

        <h2>Distribución Amigable con Constantes (<InlineMath math="k" />)</h2>
        <p>Las constantes unitarias ajenas resisten ciertas alteraciones:</p>
        <ul className="list-styled">
           <li><strong>Inversión a un Escalar:</strong> Si invertimos una multiplicada por $k$, ese escalar sufre la fuerza al natural y se invierte aritméticamente solo. <InlineMath math="(k \cdot A)^{-1} = \frac{1}{k} \cdot A^{-1}" /> <span style={{fontSize: '0.8rem'}}>(Se pide la precondición $k \neq 0$)</span></li>
           <li><strong>Transposición a un Escalar:</strong> Un número escalar es lógicamente ajeno y omnipotente a cualquier rotación dimensional externa o de papeles y ejes topográficos; simplemente se acomoda al producto transcurto. <InlineMath math="(k \cdot A)^T = k \cdot A^T" /></li>
        </ul>

      </main>

      {!isTrainingMode || quizPassed ? (
        <TopicNavigation 
          prevPath="/parcial2/propiedades/traza"
          nextPath="/parcial2/determinantes/concepto" 
        />
      ) : (
        <TrainingQuiz 
          topicName="Tema 5: Propiedades Matriciales"
          questions={parcial2Tema5Questions} 
          onPass={() => setQuizPassed(true)} 
        />
      )}
    
      <AiChatBot 
        topicTitle="Atajos Operativos y Propiedades Mágicas" 
        topicContext="Desglosar el extenso y contundente repertorio algebraico a emplearse: Involuciones destructivas idénticas (A^(-1))^(-1)=A y Transpuestas recíprocas (A^t)^t=A. Y por qué la humanidad decidió que ambas propiedades cruzadas a la vez en un Producto Matemático de Matrices permutan e insurreccionan a su composición original pasando mágicamente la B hacia primer orden por derecha y posponiendo el factor multiplicando pre-invertido A al final de la cola por leyes cósmicas geométricas inquebrantables de dimensionalidad matricial de conformidad pura." 
      />
    </div>
  );
};

export default Adicionales;
