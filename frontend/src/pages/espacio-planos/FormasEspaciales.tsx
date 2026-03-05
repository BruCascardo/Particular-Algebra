import React from 'react';
import 'katex/dist/katex.min.css';
import { InlineMath, BlockMath } from 'react-katex';
import TopicHeader from '../../components/TopicHeader';
import TopicNavigation from '../../components/TopicNavigation';
import AiChatBot from '../../components/AiChatBot';
import '../vectores/VectorTopic.css';

const FormasEspaciales: React.FC = () => {

  return (
    <div className="vector-topic-container">
      <TopicHeader 
        title="6.1. Formas de la Recta en el Espacio" 
        subtitle="Agregando profundidad matemática a las trazas rectilíneas tridimensionales"
      />

      <main className="topic-content">
        <div className="concept-box">
          <h3>Un grado más de libertad: La cota Z</h3>
          <p>
            Al saltar del soporte plano <InlineMath math="\mathbb{R}^2" /> para abrazar por completo la inmensidad del espacio <InlineMath math="\mathbb{R}^3" />, la identidad de la recta muta necesariamente. Seguimos requiriendo los mismos ingredientes: un punto de anclaje base <InlineMath math="P_1(x_1, y_1, z_1)" /> y un vector director espacial de inclinación <InlineMath math="\vec{u} = (u_x, u_y, u_z)" />.
          </p>
          <p>Lo que cambia dramáticamente son las formas en la que se nos permite representarla matemáticamente para no generar colisiones u objetos equívocos.</p>
        </div>

        <h2>La Forma Paramétrica Espacial</h2>
        <p>
          Es la extensión directa e indolora de la parametrización bidimensional, a la cual simplemente se le añade de forma armónica el cordón atado a la tercera y nueva variable <InlineMath math="Z" /> en función del parámetro maestro <InlineMath math="\lambda" />.
        </p>

        <div className="formula-box" style={{ background: 'rgba(50, 60, 100, 0.4)' }}>
          <BlockMath math="\begin{cases} x = x_1 + \lambda u_x \\ y = y_1 + \lambda u_y \\ z = z_1 + \lambda u_z \end{cases}" />
        </div>

        <h2>La Forma Simétrica (o Continua)</h2>
        <p>
          Considerado el "estándar dorado" cuando se trabaja en <InlineMath math="\mathbb{R}^3" />. Se obtiene de un movimiento algebraico brillante: despejar el todopoderoso parámetro <InlineMath math="\lambda" /> simultáneamente en las tres ecuaciones paramétricas anteriores, e igualar las tres fracciones resultantes en cadena.
        </p>

        <div className="formula-box" style={{ border: '2px dashed var(--border-color)' }}>
          <BlockMath math="\frac{x - x_1}{u_x} = \frac{y - y_1}{u_y} = \frac{z - z_1}{u_z}" />
        </div>

        <ul className="list-styled">
          <li><strong>El numerador "restando":</strong> Grita descaradamente las coordenadas puras del punto de anclaje de pase de la recta <InlineMath math="P_1" />. (Ojo con los signos).</li>
          <li><strong>El denominador divisor:</strong> Expone de manera explícita y visible cada una de las componentes sagradas del vector director <InlineMath math="\vec{u}" />.</li>
        </ul>

        <div className="example-box">
          <h4>La Ley del Denominador Cero en <InlineMath math="\mathbb{R}^3" /></h4>
          <p>
            ¿Qué sucede en pleno examen si el vector director de tu recta resulta ser por ejemplo <InlineMath math="\vec{u} = (2, 0, -4)" />? Aparentemente no podrías armar la fracción del medio por división matemática por cero.
            <br/><br/>
            En geometría del espacio, la notación simétrica hace una convención de escritura <strong>permitiendo escribir formalmente el cero en el denominador</strong> única y expresamente para señalizar que el vector director en ese eje es nulo, y que por lo tanto la recta entera carece de traslación en ese eje (se mueve en estricta perpendicularidad al mismo y nunca evoluciona sobre esa coordenada). 
          </p>
          <BlockMath math="\frac{x - x_1}{2} = \frac{y - y_1}{0} = \frac{z - z_1}{-4}" />
        </div>

      </main>

      <TopicNavigation 
        prevPath="/parcial1/recta-plano/distancia-punto-recta"
        nextPath="/parcial1/espacio-planos/planos-proyectantes" 
      />
    
      <AiChatBot 
        topicTitle="Formas Espaciales de Recta" 
        topicContext="Recta en R3. Ausencia de ecuación general implícita de 1 forma, uso de paramétricas y proyecciones simétricas bidimensionales." 
      />
    </div>
  );
};

export default FormasEspaciales;
