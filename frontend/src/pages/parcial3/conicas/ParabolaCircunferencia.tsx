import React from 'react';
import { InlineMath, BlockMath } from 'react-katex';
import TopicHeader from '../../../components/TopicHeader';
import TopicNavigation from '../../../components/TopicNavigation';
import AiChatBot from '../../../components/AiChatBot';
import './ConicasTopic.css';

const ParabolaCircunferencia: React.FC = () => {
  return (
    <div className="conicas-topic-container">
      <TopicHeader 
        title="Circunferencia y Parábola" 
        subtitle="Analizando las secciones cónicas más comunes"
      />

      <main className="topic-content">
        <div className="concept-box">
          <h3>¿Qué son las Cónicas?</h3>
          <p>
            Al cortar un <strong>cono doble hueco</strong> de infinitud geométrica con un plano, la figura resultante de la intersección se llama sección cónica. Según la inclinación de ese plano de corte respecto al eje del cono, obtenemos las cuatro curvas fundamentales: Circunferencia, Elipse, Parábola e Hipérbola.
          </p>
        </div>

        <h2>La Circunferencia</h2>
        <p>
          Geométricamente, es el conjunto de todos los puntos <InlineMath math="(x,y)" /> del plano que se encuentran a una distancia constante (el <strong>radio</strong> <InlineMath math="r" />) de un punto fijo llamado <strong>centro</strong> <InlineMath math="(h, k)" />.
        </p>
        <div className="formula-box">
          <BlockMath math="(x - h)^2 + (y - k)^2 = r^2" />
        </div>
        <p>
          <strong>Importante:</strong> En la ecuación general, la identificas de reojo si el coeficiente que acompaña a <InlineMath math="x^2" /> es idéntico en signo y valor al coeficiente que acompaña a <InlineMath math="y^2" />.
        </p>

        <h2>La Parábola</h2>
        <p>
          Geométricamente, es el conjunto de puntos que mantienen exactamente la misma distancia hacia un punto fijo (el <strong>Foco</strong>) y hacia una línea recta fija (la <strong>Directriz</strong>).
        </p>
        
        <div className="concept-box">
          <h3>Elementos Clave</h3>
          <ul className="list-styled">
            <li><strong>Vértice (<InlineMath math="V" />):</strong> Es el punto de "giro" de la parábola, ubicado exactamente en el punto medio entre el foco y la directriz. Coordenadas <InlineMath math="(h,k)" />.</li>
            <li><strong>Parámetro focal (<InlineMath math="p" />):</strong> Es la distancia dirigida que existe desde el vértice hacia el foco. Su signo dicta hacia adónde "abre" la campana parabólica. (Ojo: a veces los profesores definen a <InlineMath math="c" /> u otra letra. La distancia vértice-foco siempre es <InlineMath math="|p|" /> y la directriz está a la misma distancia pero hacia "atrás").</li>
          </ul>
        </div>

        <p><strong>Ecuaciones Ordinarias o Canónicas:</strong></p>
        <p>
          La ecuación de una parábola se delata fácilmente porque solo <strong>una de sus variables está elevada al cuadrado</strong>, mientras que la otra variable es lineal (está a la potencia 1).
        </p>

        <ul className="list-styled">
          <li><strong>Eje focal vertical (abre arriba / abajo):</strong> El lado que está al cuadrado es el de las equis. El parámetro es <InlineMath math="4p" /> o <InlineMath math="4c" />.
            <div className="formula-box">
              <InlineMath math="(x - h)^2 = 4p(y - k)" />
            </div>
            Si <InlineMath math="p > 0" />, abre hacia arriba. Si <InlineMath math="p < 0" />, abre hacia abajo.
          </li>
          
          <li><strong>Eje focal horizontal (abre a la derecha / izquierda):</strong> La variable al cuadrado es ahora la <InlineMath math="y" />.
            <div className="formula-box">
              <InlineMath math="(y - k)^2 = 4p(x - h)" />
            </div>
            Si <InlineMath math="p > 0" />, abre a la derecha. Si <InlineMath math="p < 0" />, abre hacia la izquierda.
          </li>
        </ul>

      </main>

      <TopicNavigation 
        nextPath="/parcial3/conicas/elipse-hiperbola" 
      />

      <AiChatBot 
        topicTitle="Circunferencia y Parábola" 
        topicContext="Definición de las secciones cónicas. Ecuación de la circunferencia (x-h)^2 + (y-k)^2 = r^2. Definición matemática de la parábola (equidistancia a foco y directriz) y sus variantes ordinarias: eje vertical (x-h)^2 = 4p(y-k) y eje horizontal (y-k)^2 = 4p(x-h)." 
      />
    </div>
  );
};

export default ParabolaCircunferencia;
