import React from 'react';
import 'katex/dist/katex.min.css';
import { InlineMath, BlockMath } from 'react-katex';
import TopicHeader from '../../components/TopicHeader';
import TopicNavigation from '../../components/TopicNavigation';
import AiChatBot from '../../components/AiChatBot';
import './VectorTopic.css';

const ModuloDireccionSentido: React.FC = () => {

  return (
    <div className="vector-topic-container">
      <TopicHeader 
        title="Módulo, Dirección y Sentido" 
        subtitle="Las tres características fundamentales que definen el ADN de un vector"
      />

      <main className="topic-content">
        <p>
          Todo vector o segmento orientado está completamente definido por tres características fundamentales: <strong>Módulo</strong>, <strong>Dirección</strong> y <strong>Sentido</strong>. Estas características diferencian a las magnitudes vectoriales (como la fuerza o la velocidad) de las escalares (como la masa o la temperatura).
        </p>

        <div className="concept-box">
          <h3>1. Módulo (o Norma)</h3>
          <p>
            Representa la <strong>longitud</strong> o "tamaño" del segmento orientado. Es un número real, siempre <strong>positivo o cero</strong> (no existen longitudes negativas). Se simboliza encerrando al vector entre barras.
          </p>
          <div className="formula-box" style={{ marginTop: '10px', marginBottom: '10px', padding: '10px' }}>
            <p style={{ margin: 0, fontSize: '1rem', color: '#e0e1dd' }}>Módulo de <InlineMath math="\vec{v}" />:</p>
            <BlockMath math="||\vec{v}|| \quad \text{o} \quad |\vec{v}|" />
          </div>
          <p>Geométricamente, es la distancia entre el origen y el extremo del vector.</p>
        </div>

        <div className="concept-box">
          <h3>2. Dirección</h3>
          <p>
            Está dada por la <strong>recta de acción</strong> (o recta soporte) que contiene al segmento orientado y por todas las rectas que son <strong>paralelas</strong> a ella. 
          </p>
          <p>
            ¡Ojo! "Norte", "Sur", "Arriba", "Abajo" NO son direcciones. La dirección es la <em>inclinación</em> o la recta en sí. Por ejemplo, "vertical", "horizontal" o "a 45 grados". Una misma dirección siempre contiene dos sentidos posibles (ida y vuelta).
          </p>
        </div>

        <div className="concept-box">
          <h3>3. Sentido</h3>
          <p>
            Indica hacia dónde "apunta" la flecha a lo largo de su recta de acción. Es la orientación sobre la dirección. Sirve para distinguir hacia qué lado se moviliza o aplica la magnitud.
          </p>
          <p>
            Como mencionamos, toda recta (dirección) tiene dos sentidos. Ejemplo: en la dirección horizontal, los sentidos son "hacia la derecha" y "hacia la izquierda". En la dirección vertical, los sentidos son "hacia arriba" y "hacia abajo".
          </p>
        </div>

        <div className="example-box">
          <h4>Analogía para examen:</h4>
          <ul className="list-styled">
            <li><strong>Módulo:</strong> "Viajé 100 kilómetros a 120 km/h". (El número y la unidad, la cantidad escalar).</li>
            <li><strong>Dirección:</strong> "Viajé por la Ruta Nacional 9". (La traza, la línea recta geográfica en la que te mueves).</li>
            <li><strong>Sentido:</strong> "Viajé hacia Rosario" o "Viajé hacia Buenos Aires". (Hay dos sentidos posibles a lo largo de la Ruta 9; eso marca tu destino final).</li>
          </ul>
        </div>
      </main>

      <TopicNavigation 
        prevPath="/parcial1/vectores/segmento-orientado"
        nextPath="/parcial1/vectores/igualdad-vectores" 
      />

      <AiChatBot 
        topicTitle="Módulo, Dirección y Sentido" 
        topicContext="Conceptos de Módulo (o Norma) como longitud escalar postiva, Dirección como inclinación de la recta de acción, y Sentido como hacia dónde apunta la flecha sobre un vector dado." 
      />
    </div>
  );
};

export default ModuloDireccionSentido;
