import React from 'react';
import 'katex/dist/katex.min.css';
import { InlineMath, BlockMath } from 'react-katex';
import TopicHeader from '../../components/TopicHeader';
import TopicNavigation from '../../components/TopicNavigation';
import AiChatBot from '../../components/AiChatBot';
import '../vectores/VectorTopic.css';

const ProductoVectorial: React.FC = () => {

  return (
    <div className="vector-topic-container">
      <TopicHeader 
        title="4.3. Producto Vectorial (Cruz)" 
        subtitle="Generando un nuevo vector perpendicular en el espacio tridimensional"
      />

      <main className="topic-content">
        <div className="concept-box">
          <h3>La Gran Diferencia</h3>
          <p>
            Al contrario de lo que ocurre con el producto escalar (que nos arroja un simple número), el <strong>Producto Vectorial</strong> o producto cruz de dos vectores espaciales <InlineMath math="\vec{u}" /> y <InlineMath math="\vec{v}" /> <strong>da como resultado un TERCER vector totalmente nuevo</strong>. Su gran particularidad es que este nuevo vector es <strong>perpendicular (ortogonal) a los dos originales simultáneamente</strong>.
          </p>
          <p>Se simboliza con una cruz o aspa: <InlineMath math="\vec{u} \times \vec{v}" />.</p>
          <p><em>Aclaración importante:</em> Esta operación matemática <strong>solo está definida para vectores espaciales en <InlineMath math="\mathbb{R}^3" /></strong>.</p>
        </div>

        <h2>Describiendo al nuevo vector resultante</h2>
        <p>
          Al ser un vector puro y duro, el resultado del producto vectorial necesita tener, tal como vimos antes, sus propias tres características únicas: dirección, sentido y módulo.
        </p>

        <h3>1. Dirección</h3>
        <p>
          La dirección del vector respuesta (<InlineMath math="\vec{u} \times \vec{v}" />) será siempre una <strong>recta perpendicular al plano geométrico donde yacen u y v</strong>. Dicho analíticamente:
        </p>
        <div className="formula-box">
          <BlockMath math="(\vec{u} \times \vec{v}) \perp \vec{u} \quad \text{y} \quad (\vec{u} \times \vec{v}) \perp \vec{v}" />
        </div>

        <h3>2. Sentido (Regla de la mano derecha)</h3>
        <p>
          Como toda recta tiene dos sentidos posibles (hacia "arriba" del plano o hacia "abajo"), el sentido se define universalmente usando la <strong>Regla del Tirabuzón o Regla de la Mano Derecha</strong>:
        </p>
        <ul className="list-styled">
          <li>Extiende los dedos de tu mano derecha rectos y alineados sobre la dirección del primer vector del producto (<InlineMath math="\vec{u}" />).</li>
          <li>"Cierra" tus dedos (flexionalos) por el camino más corto curvándolos hacia apuntar al segundo vector (<InlineMath math="\vec{v}" />).</li>
          <li>La dirección estirada donde termine apuntando tu dedo <strong>pulgar derecho</strong> es el sentido afirmativo del vector resultante.</li>
        </ul>

        <h3>3. Módulo (Y su interpretación geométrica estrella)</h3>
        <p>La longitud del vector resultante obtenida por este choque se define matemáticamente como el área total del paralelogramo delineado en el espacio usando los dos vectores originales como los lados adyacentes de esa figura.</p>
        
        <div className="formula-box" style={{ background: 'rgba(100, 70, 40, 0.4)' }}>
           <p style={{ margin: 0, fontSize: '1rem', color: '#e0e1dd', paddingBottom: '0.8rem' }}>Módulo del Producto Vectorial = Gema Geométrica:</p>
          <BlockMath math="||\vec{u} \times \vec{v}|| = ||\vec{u}|| \cdot ||\vec{v}|| \cdot \sin(\alpha) = \text{Área del Paralelogramo}" />
        </div>

        <div className="example-box">
           <h4>Propiedad Estrella (Producto Nulo)</h4>
           <p>
             Sabiendo que el <InlineMath math="\sin(0^\circ) = 0" />, esto significa que si dos vectores son paralelos o colineales (no tienen "apertura" angular entre ellos), <strong>el producto vectorial entre ellos da el Vector Nulo</strong> (<InlineMath math="\vec{0}" />). 
             <br/><br/>Tienen absoluto sentido visual: No podés formar un paralelogramo bidimensional si los vectores están achatados en una misma recta, ergo área = 0.
           </p>
        </div>

        <h2>Resolución Analítica por Determinante Simbólico</h2>
        <p>Para la resolución práctica a base de componentes en <InlineMath math="\mathbb{R}^3" />, se suele apelar la regla nemotécnica de construir un determinante matricial 3x3 donde la primera fila son los versores base y las restantes los vectores:</p>

        <div className="formula-box" style={{ overflowX: 'auto' }}>
           <BlockMath math="\vec{u} \times \vec{v} = \begin{vmatrix} \breve{i} & \breve{j} & \breve{k} \\ u_x & u_y & u_z \\ v_x & v_y & v_z \end{vmatrix}" />
        </div>

        <ul className="list-styled">
          <li><strong>Anticonmutativa:</strong> Cambiar el orden de los vectores revierte brutalmente el sentido del resultado. <InlineMath math="\vec{u} \times \vec{v} = -(\vec{v} \times \vec{u})" /></li>
        </ul>

      </main>

      <TopicNavigation 
        prevPath="/parcial1/productos/cosenos-directores"
        nextPath="/parcial1/productos/producto-mixto" 
      />
    
      <AiChatBot 
        topicTitle="Producto Vectorial" 
        topicContext="Cross Product en R3. Determinante para su cálculo y regla de la mano derecha. Vector ortogonal a los dos multiplicandos." 
      />
    </div>
  );
};

export default ProductoVectorial;
