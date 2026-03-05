import React from 'react';
import 'katex/dist/katex.min.css';
import { InlineMath, BlockMath } from 'react-katex';
import TopicHeader from '../../components/TopicHeader';
import TopicNavigation from '../../components/TopicNavigation';
import AiChatBot from '../../components/AiChatBot';
import '../vectores/VectorTopic.css';

const CoplanaridadRectas: React.FC = () => {

  return (
    <div className="vector-topic-container">
      <TopicHeader 
        title="6.3. Coplanaridad de Rectas" 
        subtitle="Analizando si dos trazas perdidas en el espacio realmente habitan un mismo piso"
      />

      <main className="topic-content">
        <div className="concept-box">
          <h3>Un abanico de posibilidades espaciales</h3>
          <p>
            A diferencia de la geometría simple del plano <InlineMath math="\mathbb{R}^2" /> donde dos rectas obligatoriamente o chocaban o eran paralelas, en la inmensidad del espacio <InlineMath math="\mathbb{R}^3" /> existe una tercera chance espeluznante: las rectas podrían <strong>cruzarse a diferentes profundidades como puentes de autopista (Rectas alabeadas)</strong> sin jamás tocarse, ni tampoco ser paralelas.
          </p>
          <p>
            Entonces, ¿cómo afirmamos categóricamente si dos rectas espaciales pertenecen o se pueden apoyar sobre una misma "hoja de papel" perfecta (es decir, son coplanares)?
          </p>
        </div>

        <h2>La Condición Maestra del Producto Mixto</h2>
        <p>
          Para descifrar este enigma requerimos secuestrar <strong>tres vectores clave</strong> escondidos en nuestra data:
        </p>
        <ul className="list-styled">
          <li>El vector director <InlineMath math="\vec{u_1}" /> de la primera recta.</li>
          <li>El vector director <InlineMath math="\vec{u_2}" /> de la segunda recta.</li>
          <li>El ingenio humano intercede: inventamos un <strong>Tercer Vector <InlineMath math="\vec{P_1P_2}" /></strong> uniendo gráficamente un punto anatómico de la recta 1 con otro punto de la recta 2.</li>
        </ul>

        <div className="example-box">
          <p>
            Si estas dos líneas rectas realmente conviven en armonía sobre ese mismo plano imaginario, significa rotunda y lógicamente que <strong>los tres vectores que enumeramos arriba se verían forzados a vivir achatados sobre él también</strong>.
          </p>
          <p style={{ marginTop: '0.8rem' }}>
            Y si recordás nuestra última clase estrella de <a href="/parcial1/productos/producto-mixto" style={{ color: 'var(--accent-color)' }}>Producto Mixto</a>, hay una única forma en la que tres vectores no levanten vuelo volumétrico desde el suelo (Volumen cero): ¡Deben dar Producto Mixto Nulo!
          </p>
        </div>

        <div className="formula-box" style={{ background: 'rgba(50, 60, 100, 0.4)' }}>
          <p style={{ margin: 0, fontSize: '1rem', color: '#e0e1dd', paddingBottom: '0.8rem' }}>Ecuación de la Coplanaridad Absoluta:</p>
          <BlockMath math="\vec{P_1P_2} \cdot (\vec{u_1} \times \vec{u_2}) = 0" />
        </div>

        <p>Traducido al método analítico relámpago, debes plantar las tres hileras armando un determinante mágico 3x3:</p>

        <div className="formula-box" style={{ overflowX: 'auto', border: '1px solid var(--border-color)' }}>
           <BlockMath math="\begin{vmatrix} (x_2 - x_1) & (y_2 - y_1) & (z_2 - z_1) \\ u_{1x} & u_{1y} & u_{1z} \\ u_{2x} & u_{2y} & u_{2z} \end{vmatrix} = 0" />
        </div>

        <h2>Veredicto Final</h2>
        <ul className="list-styled">
          <li><strong>Si el determinante da IGUAL a cero:</strong> Las rectas son <strong>coplanares</strong>. Te garantiza sin dudarlo que o bien se cortan violentamente en un punto común o corren fielmente de manera paralela infinita. (No hay más opciones planas posibles).</li>
          <li><strong>Si el determinante da DISTINTO de cero (<InlineMath math="\neq 0" />):</strong> Las rectas definitivamente <strong>NO son coplanares</strong>. Son "alabeadas" y cruzan cual viaducto sobre distinto nivel. <i>(El número arrojado terminaría siendo el abultado volumen de la caja imaginaria que forman entre puentes).</i></li>
        </ul>

      </main>

      <TopicNavigation 
        prevPath="/parcial1/espacio-planos/planos-proyectantes"
        nextPath="/parcial1/espacio-planos/plano-recta-punto" 
      />
    
      <AiChatBot 
        topicTitle="Coplanaridad de Rectas" 
        topicContext="Condición para que dos rectas en 3D radiquen sobre el mismo plano usando el determinante / producto mixto nulo (intersectan o son paralelas)." 
      />
    </div>
  );
};

export default CoplanaridadRectas;
