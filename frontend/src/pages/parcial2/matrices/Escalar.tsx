import React from 'react';
import 'katex/dist/katex.min.css';
import { InlineMath, BlockMath } from 'react-katex';
import TopicHeader from '../../../components/TopicHeader';
import TopicNavigation from '../../../components/TopicNavigation';
import AiChatBot from '../../../components/AiChatBot';
import '../../vectores/VectorTopic.css';

const Escalar: React.FC = () => {
  return (
    <div className="vector-topic-container">
      <TopicHeader 
        title="3.5. La Matriz Escalar" 
        subtitle="Unidades Constantes en la Diagonal Central"
      />

      <main className="topic-content">
        <div className="concept-box">
          <h3>Un Caso muy Particular: La Familia Escalar</h3>
          <p>
            Hemos destilado la definición de matrices con escalones y formas abstractas hasta llegar puramente a la médula de las <strong>Matrices Diagonales</strong> (donde solo sobreviven entes y cifras matemáticas estrictamente sobre su línea Diagonal Principal inquebrantable que cruza <InlineMath math="a_{ij}" /> para <InlineMath math="i=j" />).
          </p>
          <p>
            Al sub-dividir esta misma clase de matrices puras aún más microscópicamente, damos con uno de los entes matriciales más preciosos e importantes de la matemática teórica. Un conjunto en donde todos los ocupantes remanentes a lo ancho de su diagonal principal, comparten un clonado y repetitivo mismo valor numérico constante designado como el Escalar "<InlineMath math="k" />". Estas son las ilustres <strong>Matrices Escalares</strong>.
          </p>
        </div>

        <h2>Clasificación de una Matriz Escalar</h2>

        <p>
           De manera formal, una matriz genérica <InlineMath math="A" /> de orden Cuadrado <InlineMath math="n \times n" /> es bautizada oficialmente como <strong>Escalar</strong> matemáticamente si conjuga al unísono estos dos estatutos rectores:
        </p>

        <ul className="list-styled" style={{ marginTop: '1rem' }}>
          <li>
            Primero, todos los elementos inmersos algebraicamente <strong>por fuera</strong> del territorio trazado por la Diagonal Principal deben perecer para transformarse irrestrictamente en sendos <strong>ceros paramétricos (<InlineMath math="0" />)</strong>, como pasaba idéntico con la matriz Diagonal a la cual subsisten y nacen de ellas. Formalmente <InlineMath math="a_{ij} = 0 \ \ \forall i \neq j" />.
          </li>
          <li>
            La diferencia crucial: La cualidad adicional indica de oficio que, todos y absolutamente la integridad de entes superpuestos y anclados con seguridad sobre terreno propio firme a lo largo y tendido del rayo de la <strong>Diagonal Principal</strong> encarnarán y personificaran con suma lealtad estricta... a un <strong>mismo y singular número escalar repetitivo</strong> clonado o paramétrico apodado comúnmente en la literatura literaria y universitaria como "<InlineMath math="k" />".
            <InlineMath math="a_{ij} = k \ \ \forall i = j" />
          </li>
        </ul>

        <div className="formula-box" style={{ background: 'rgba(50, 60, 100, 0.4)' }}>
           <p style={{ margin: 0, fontSize: '1rem', color: '#e0e1dd' }}>Representación Universal Analítica de Forma Escalar:</p>
          <BlockMath math="E = \begin{bmatrix} \bold{k} & 0 & 0 & \dots & 0 \\ 0 & \bold{k} & 0 & \dots & 0 \\ 0 & 0 & \bold{k} & \dots & 0 \\ \vdots & \vdots & \vdots & \ddots & \vdots \\ 0 & 0 & 0 & \dots & \bold{k} \end{bmatrix}" />
        </div>

        <div className="example-box">
          <h4>Visto Numéricamente</h4>
          <p>Si evaluamos esta minúscula matriz puramente escalar de orden y longitud de 3:</p>
          <BlockMath math="A = \begin{bmatrix} 7 & 0 & 0 \\ 0 & 7 & 0 \\ 0 & 0 & 7 \end{bmatrix} \quad \text{Donde } k = 7" />
          <p>
            Es idéntico a sacar matemáticamente como vector libre el número 7 como <strong>factor común escalar unitario</strong> y unificado por fuera del ente multiplicando a una matriz con puros unos clonados en su zona de diagonal matriz, es la suma unificación y cruce de la adición masiva escalar.
          </p>
        </div>

        <h2>La Mítica Matriz Identidad</h2>
        <p>
           El Santo Grial subyacente de este diminuto conjunto Escalado e iterativo paramétrico asoma únicamente su corona cuando al famoso y clonado valor numérico independiente iterativo de su sagrada diagonal principal estelar... Tú seccionas designarle e investirlo soberano explícitamente y al unísono con el absoluto y contundente número arábigo real del <strong>uno (<InlineMath math="1" />)</strong>.
        </p>
        <p>
           Cuando <InlineMath math="k = 1" />, esa matriz resultante inamovible pasará el resto de sus días bajo el título indiscutible de <strong>Matriz Identidad</strong> de longitud <InlineMath math="n" /> e indexada rígidamente y en imprenta analítica universal por encima del mapa humano bajo la nomenclatura mayúscula <InlineMath math="I" /> o <InlineMath math="I_n" />. 
        </p>

        <div className="formula-box" style={{ background: 'rgba(30, 70, 50, 0.4)' }}>
           <p style={{ margin: 0, fontSize: '1rem', color: '#a8d5ba' }}>Matriz Identidad (<InlineMath math="I_3" />):</p>
          <BlockMath math="I_3 = \begin{bmatrix} 1 & 0 & 0 \\ 0 & 1 & 0 \\ 0 & 0 & 1 \end{bmatrix}" />
           <p style={{ textAlign: "center", fontStyle: "italic", marginTop: "1rem" }}>Es el Elemento Neutro del Producto Multiplicativo Matricial Universalmente.</p>
        </div>

      </main>

      <TopicNavigation 
        prevPath="/parcial2/matrices/triangulares-diagonales"
        nextPath="/parcial2/operaciones/adicion-escalar" 
      />
    
      <AiChatBot 
        topicTitle="M. Escalares y Matriz Identidad" 
        topicContext="Separación en la Familia de Escalares. Donde toda de todo número natural que cruce por la Diagonal matriz principal de a_ij asuma en conjunción obligada con el resto un solo parámetro de unidad estricta repetitivo y replicable k>0. La Matriz identidad suprema donde ese número unitario pasa a conformarlo sin parangón el mismísimo uno natural (k=1)." 
      />
    </div>
  );
};

export default Escalar;
