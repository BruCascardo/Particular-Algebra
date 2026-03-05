import React from 'react';
import 'katex/dist/katex.min.css';
import { InlineMath, BlockMath } from 'react-katex';
import TopicHeader from '../../../components/TopicHeader';
import TopicNavigation from '../../../components/TopicNavigation';
import AiChatBot from '../../../components/AiChatBot';
import '../../vectores/VectorTopic.css';

const TriangularesDiagonales: React.FC = () => {
  return (
    <div className="vector-topic-container">
      <TopicHeader 
        title="3.4. Triangulares y Diagonales" 
        subtitle="Las Familias Simples de Matrices Cuadradas"
      />

      <main className="topic-content">
        <div className="concept-box">
          <h3>Estructuras Cuadrática Simplificadas</h3>
          <p>
             Cuando te hallas inmerso obligatoriamente interactuando con las Matrices Cuadradas (orden <InlineMath math="n \times n" />), emergen familias o divisiones con morfologías peculiares respecto a la disposición estricta que dictaminan los ceros (<InlineMath math="0" />) con relación a la <strong>Diagonal Principal</strong> de dicho arreglo de coeficientes. Descubramos cómo nombrar a esas tres famosas tribus escalonadas base.
          </p>
        </div>

        <h2>1. Matrices Triangulares Superiores</h2>
        <p>
           Decimos y concluimos que una matriz abstracta pertenece y ha ascendido para siempre a la familia o ser denominada <strong>Matriz Triangular Superior</strong>, cuando acata o reacciona frente al requerimiento obligatorio de que <em>todos, ineludiblemente todos</em> los elementos matemáticos contenidos que habitan visual y analíticamente exactamente <strong>por debajo</strong> de la trazada y limitante frontera diagonal principal que cruza desde arriba... Sean un riguroso número cero (<InlineMath math="0" />).
        </p>
        <p>
          En lenguaje algebraico superior, esto se resume elegante y estruendosamente como: Para todo sub-elemento en <InlineMath math="a_{ij}" />, si la fila <InlineMath math="i" /> es mayor estrictamente que la columna posicional <InlineMath math="j" /> (<InlineMath math="i > j" />), se anula de oficio obligándolos a un <InlineMath math="a_{ij} = 0" /> incondicionalmente de por medio.
        </p>

        <div className="formula-box" style={{ background: 'rgba(50, 60, 100, 0.4)' }}>
           <p style={{ margin: 0, fontSize: '1rem', color: '#e0e1dd' }}>El Triángulo Superior (<InlineMath math="a_{ij} = 0" /> para todo <InlineMath math="i > j" />):</p>
          <BlockMath math="\begin{bmatrix} a_{11} & a_{12} & a_{13} \\ \bold{0} & a_{22} & a_{23} \\ \bold{0} & \bold{0} & a_{33} \end{bmatrix}" />
        </div>

        <h2>2. Matrices Triangulares Inferiores</h2>
        <p>
           Simétricamente y en efecto inverso fotográfico estricto, definimos a un arreglo amparado genéricamente y con validez el nombre y ser etiquetado de una <strong>Matriz Triangular Inferior</strong> a aquella matriz cuadrada provista que, sin importar todo lo que habite por debajo, cumpla que <em>todos absolutamente 100%</em> sus números que rebotan matemáticamente limitados de la cota <strong>por encima y sobre</strong> la raya delimitadora central de la diagonal principal... Se ahoguen siempre y decanten unívocamente en un cero (<InlineMath math="0" />).
        </p>

        <div className="example-box">
          <h4>Visto Numéricamente</h4>
          <p>La notación exige en una Triangular de esta bajada que: <InlineMath math="a_{ij} = 0" /> en y todo y por para lugar condicional <InlineMath math="i < j" /> (Fila numéricamente más cercana a 1 de lo que se haya movido a columna transversal n).</p>
          <BlockMath math="L = \begin{bmatrix} \bold{5} & 0 & 0 \\ -2 & \bold{3} & 0 \\ 4 & 1 & \bold{8} \end{bmatrix}" />
          <p>
            Al observar tal Matriz <InlineMath math="L" />, se evidencia de golpe visual inmediato en ella que todo aquel dígito situado sobre los entes remarcados del centro 5-3-8 es nulo.
          </p>
        </div>

        <h2>3. Matrices Diagonales</h2>
        <p>
            Cuando tú llegas por casualidades del destino y operaciones matemáticas o te topas cruzado en una noche sin luna en tus cálculos, de la nada y de forma muy milagrosa y sublime bajo las dos condicionales superiores a la misma vez, tú serás bendecido con una <strong>Matriz Diagonal</strong>.
        </p>
        <p>
           Aquellas en donde obligatoriamente TODO número natural sin contar lo que está clavado inmóvil arriba en la intocable Diagonal Principal, vale inevitablemente CERO a su alrededor espeso. En otras palabras, son triangulares por debajo de si, tanto como lo son triangulares idénticamente por arriba.
        </p>

        <div className="formula-box" style={{ background: 'rgba(50, 60, 100, 0.4)' }}>
           <p style={{ margin: 0, fontSize: '1rem', color: '#e0e1dd' }}>Matriz Diagonal (<InlineMath math="a_{ij} = 0" /> para todo <InlineMath math="i \neq j" />):</p>
          <BlockMath math="D = \begin{bmatrix} a_{11} & \bold{0} & \bold{0} \\ \bold{0} & a_{22} & \bold{0} \\ \bold{0} & \bold{0} & a_{33} \end{bmatrix}" />
        </div>

      </main>

      <TopicNavigation 
        prevPath="/parcial2/matrices/cuadradas-nulas"
        nextPath="/parcial2/matrices/escalar" 
      />
    
      <AiChatBot 
        topicTitle="Triangulares y Diagonales Cuadradas" 
        topicContext="Separación en T.Superior (todo elemento debajo de la línea matriz a_ij i>j siendo nulo) y T.Inferior. Las implicancias determinantes. La hibridación en la Matriz Diagonal (todo lo que no es a_ii en el centro, resulta nulo y anulado en su derredor)." 
      />
    </div>
  );
};

export default TriangularesDiagonales;
