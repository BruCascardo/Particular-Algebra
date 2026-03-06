import React from 'react';
import { InlineMath, BlockMath } from 'react-katex';
import TopicHeader from '../../../components/TopicHeader';
import TopicNavigation from '../../../components/TopicNavigation';
import AiChatBot from '../../../components/AiChatBot';
import './ProductoInteriorTopic.css';

const GramSchmidt: React.FC = () => {
  return (
    <div className="pi-topic-container">
      <TopicHeader 
        title="Proceso de Ortogonalización de Gram-Schmidt" 
        subtitle="Construyendo bases perfectas a partir de bases defectuosas"
      />

      <main className="topic-content">
        <div className="concept-box">
          <h3>El problema</h3>
          <p>
            Trabajar con bases ortogonales (y mejor aún, ortonormales) simplifica enormemente los cálculos algebraicos, porque elimina las interferencias entre direcciones cruzadas. 
            Sin embargo, a menudo la naturaleza o el problema nos entrega una base ordinaria y "desordenada" que no es ortogonal. 
          </p>
          <p>
            El <strong>Proceso de Gram-Schmidt</strong> es el algoritmo que toma cualquier base ordinaria de un espacio vectorial con producto interior y, paso a paso, la transforma en una base <strong>ortogonal</strong> que genera exactamente el mismo espacio.
          </p>
        </div>

        <h2>El Algoritmo Paso a Paso</h2>
        <p>
          Supongamos que tenemos una base L.I. inicial <InlineMath math="B = \{\vec{v}_1, \vec{v}_2, \dots, \vec{v}_n\}" />. Queremos construir una nueva base ortogonal <InlineMath math="B' = \{\vec{u}_1, \vec{u}_2, \dots, \vec{u}_n\}" />.
        </p>

        <ul className="list-styled">
          <li><strong>Paso 1:</strong> El primer vector lo tomamos directamente igual al primero de nuestra base inicial. No necesitas ajustarlo con respecto a nada más.
            <div className="formula-box">
              <InlineMath math="\vec{u}_1 = \vec{v}_1" />
            </div>
          </li>
          
          <li><strong>Paso 2:</strong> Para el segundo vector, tomamos <InlineMath math="\vec{v}_2" /> y le restamos su componente (proyección ortogonal) que va en la dirección del primer vector <InlineMath math="\vec{u}_1" /> (el que acabamos de aceptar). Así, nos aseguramos de que el remanente sea 100% independiente y perpendicular a <InlineMath math="\vec{u}_1" />.
            <div className="formula-box">
              <BlockMath math="\vec{u}_2 = \vec{v}_2 - \frac{\langle \vec{v}_2, \vec{u}_1 \rangle}{\|\vec{u}_1\|^2}\vec{u}_1" />
            </div>
          </li>

          <li><strong>Paso 3:</strong> Para el tercer vector, tomamos <InlineMath math="\vec{v}_3" /> y le rebanamos toda porción de los vectores ya aceptados.
            <div className="formula-box">
              <BlockMath math="\vec{u}_3 = \vec{v}_3 - \frac{\langle \vec{v}_3, \vec{u}_1 \rangle}{\|\vec{u}_1\|^2}\vec{u}_1 - \frac{\langle \vec{v}_3, \vec{u}_2 \rangle}{\|\vec{u}_2\|^2}\vec{u}_2" />
            </div>
          </li>

          <li><strong>Paso 4 en adelante:</strong> Patrón general recursivo, continuamos el proceso restando de <InlineMath math="\vec{v}_k" /> sus proyecciones sobre todos los anteriores.</li>
        </ul>

        <div className="example-box">
          <p><strong>Cuidado con los errores:</strong></p>
          <p>
             Notese que el algoritmo proyecta el nuevo vector <InlineMath math="\vec{v}_k" /> contra los vectores <strong>propios de la nueva base (<InlineMath math="\vec{u}_1, \dots, \vec{u}_{k-1}" />)</strong>, y NO contra los anteriores de la vieja base. Este es el error más común en parciales.
          </p>
        </div>

        <h2>Convertirla a Ortonormal</h2>
        <p>
          El proceso produce una base ortogonal <InlineMath math="B'" /> cuyos vectores generamente no tienen norma 1.
          Para llevarla a la forma óptima final, basta con <strong>normalizar</strong> cada vector calculando su producto por el inverso de su propia norma:
        </p>
        <div className="formula-box">
          <BlockMath math="\vec{w}_k = \frac{\vec{u}_k}{\|\vec{u}_k\|}" />
        </div>
        <p>
          Ese conjunto de <InlineMath math="\{\vec{w}_1, \dots, \vec{w}_n\}" /> es nuestra gloriosa base ortonormal.
        </p>
      </main>

      <TopicNavigation 
        prevPath="/parcial3/producto-interior/ortogonalidad"
        nextPath="/parcial3/producto-interior/proyeccion" 
      />

      <AiChatBot 
        topicTitle="Proceso de Gram-Schmidt" 
        topicContext="El algoritmo paso a paso del Proceso de Ortogonalización de Gram-Schmidt. La recursión basada en proyecciones ortogonales escalón por escalón u_k = v_k - proyecciones(v_k sobre u_1..u_{k-1}). La normalización para el cálculo de una base ortonormal final." 
      />
    </div>
  );
};

export default GramSchmidt;
