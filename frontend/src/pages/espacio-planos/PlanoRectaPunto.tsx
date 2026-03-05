import React from 'react';
import 'katex/dist/katex.min.css';
import { InlineMath, BlockMath } from 'react-katex';
import TopicHeader from '../../components/TopicHeader';
import TopicNavigation from '../../components/TopicNavigation';
import AiChatBot from '../../components/AiChatBot';
import '../vectores/VectorTopic.css';

const PlanoRectaPunto: React.FC = () => {

  return (
    <div className="vector-topic-container">
      <TopicHeader 
        title="6.4. Plano que contiene recta y punto" 
        subtitle="Construyendo la sábana plana infinita que une a los huérfanos del espacio"
      />

      <main className="topic-content">
        <div className="concept-box">
          <h3>El Paradigma del Plano General</h3>
          <p>
            A diferencia de la recta tridimensional, un Plano <InlineMath math="\pi" /> completo flotando en el espacio absoluto sí posee e irradia una preciosa Ecuación General única y contundente comandada por un todoterreno Vector Normal ortogonal único <InlineMath math="\vec{n} = (A, B, C)" />.
          </p>
          <BlockMath math="\pi: A x + B y + C z + D = 0" />
          <p>La misión clásica en ingeniería es reconstruir la trama entera de ese Plano General cuando nos proveen esqueléticamente solo de las pistas superficiales: <strong>Una recta escarpada <InlineMath math="r" /> contenida dentro y un único punto <InlineMath math="P_0" /> estrellado ajeno a ella, pero que yace tirado en ese mismo suelo buscado.</strong></p>
        </div>

        <h2>Receta en tres pasos para la construcción analítica del Plano <InlineMath math="\pi" /></h2>

        <h3>Paso 1: Armado vectorial del suelo</h3>
        <p>
          Sabemos con certeza que la recta <InlineMath math="r" /> yace tirada completamente contenida recubriendo nuestro ansiado Plano. 
          <br/><br/>Eso nos regala de facto nuestro primer bastión: <strong>El vector director de esa recta (<InlineMath math="\vec{u}" />) funcionará mágicamente como uno de los vectores directores generadores base del Plano bidimensional.</strong>
        </p>

        <h3>Paso 2: Generando la segunda rienda</h3>
        <p>
          Tenemos un solo vector de control hasta ahora (<InlineMath math="\vec{u}" />). Necesitamos imperativamente un segundo vector director distinto. 
          <br/><br/>Logramos crear este segundo andamio uniendo despiadadamente con una flecha el punto solitario suelto de la pared <InlineMath math="P_0" /> en contra del punto de pase anatómico oficial extraído del cuerpo estructural de la recta <InlineMath math="P_r" />.
        </p>
        <div className="formula-box">
          <BlockMath math="\vec{v} = \vec{P_rP_0}" />
        </div>

        <h3>Paso 3: El golpe de gracia Normal (La Crucificción final)</h3>
        <p>
          Ahora portamos en nuestra mano a dos formidables vectores directores que rigen el esqueleto del plano entero. 
          <br/><br/>¿Cómo hallamos al fin el <strong>Vector Normal definitivo (<InlineMath math="\vec{n}" />)</strong> que nos revelará de golpe los ansiados coeficientes ciegos <InlineMath math="A, B" /> y <InlineMath math="C" /> de la Ecuación General?
        </p>
        
        <div className="example-box" style={{ background: 'rgba(100, 70, 40, 0.4)' }}>
           <p>¡Usando la pesadilla perpendicular que crea un vector huérfano normal y ortogonal a todo lo tocado: <strong>El majestuoso Producto Vectorial Múltiple</strong>!</p>
           <BlockMath math="\vec{n} = \vec{u} \times \vec{P_rP_0}" />
        </div>

        <p>
          Una vez detonado el Producto Cruz, obtendrás el santo grial <InlineMath math="\vec{n} = (A, B, C)" />. 
          <br/>Solo faltará forzar un reemplazo en bruto de un punto cualquiera (por ej el <InlineMath math="P_0" />) para despejar aritméticamente el único coeficiente remanente (<InlineMath math="D" />) conformando así en victoria a la impoluta ecuación de tu Plano.
        </p>

      </main>

      <TopicNavigation 
        prevPath="/parcial1/espacio-planos/coplanaridad-rectas"
        nextPath="/parcial1"
        nextLabel="Terminar Temario (Inicio)"
      />
    
      <AiChatBot 
        topicTitle="Plano por Recta y Punto" 
        topicContext="Generación de la ecuación de un Plano que contiene una recta y un punto pre-definido externo usando vectores de la recta a dicho punto." 
      />
    </div>
  );
};

export default PlanoRectaPunto;
