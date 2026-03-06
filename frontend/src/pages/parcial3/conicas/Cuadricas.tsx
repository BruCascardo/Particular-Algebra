import React from 'react';
import { InlineMath, BlockMath } from 'react-katex';
import TopicHeader from '../../../components/TopicHeader';
import TopicNavigation from '../../../components/TopicNavigation';
import AiChatBot from '../../../components/AiChatBot';
import './ConicasTopic.css';

const Cuadricas: React.FC = () => {
  return (
    <div className="conicas-topic-container">
      <TopicHeader 
        title="Superficies Cuádricas" 
        subtitle="Las cónicas saltando hacia la inmensidad del espacio tridimensional"
      />

      <main className="topic-content">
        <div className="concept-box">
          <h3>Un paso más: El espacio 3D</h3>
          <p>
            Al agregar un eje tridimensional <InlineMath math="z" /> a la ecuación simétrica de una cónica común, las curvas se inflan en deslumbrantes <strong>superficies cuádricas</strong>. Son las esferas, los conos y todas las vasijas e hiperboloides arquitectónicos del mundo real. 
          </p>
        </div>

        <p>
          Su ecuación general consta de seis términos de potencias (tres cuadráticas y tres cruzadas), y tres traslacionales:
        </p>
        <div className="formula-box">
           <BlockMath math="Ax^2 + By^2 + Cz^2 + Dxy + Exz + Fyz + Gx + Hy + Iz + J = 0" />
        </div>

        <p>A pesar de esta monstruosidad, el estudio <strong>está limitado únicamente a sus formas canónicas ordenadas</strong> (obviando en cálculo manual la asquerosa rotación espacial <InlineMath math="3 \times 3" />). Esto significa identificar rápidamente el sólido con base exclusiva en los signos y los exponentes de las ecuaciones perfectas dadas (semejantes y concéntricas en <InlineMath math="0,0,0" /> o en su mero centro geométrico <InlineMath math="h,k,j" />).</p>

        <h2>Catálogo Maestro de Superficies Canónicas (centradas en 0)</h2>

        <div className="example-box">
          <p><strong>Elipsoide</strong> (La pelota de Rugby)</p>
          <ul className="list-styled">
            <li>Las tres variables están al cuadrado.</li>
            <li>Las tres tienen signos <strong>positivos</strong> y se igualan a un <InlineMath math="1" /> constante.</li>
          </ul>
          <div className="formula-box">
             <InlineMath math="\frac{x^2}{a^2} + \frac{y^2}{b^2} + \frac{z^2}{c^2} = 1" />
          </div>
          <p>Si casualmente los tres denominadores miden igual a un número <InlineMath math="r^2" />... ¡Es una <strong>Esfera</strong> perfecta centrada en el origen!</p>
        </div>

        <div className="example-box">
          <p><strong>Cono Elíptico</strong> (El embudo gemelo)</p>
          <ul className="list-styled">
            <li>Las tres variables están al cuadrado.</li>
            <li>Una de ellas tiene <strong>signo negativo</strong> y se igualan estrictamente a un <InlineMath math="0" />. (Ninguna constante fuera).</li>
          </ul>
          <div className="formula-box">
             <InlineMath math="\frac{x^2}{a^2} + \frac{y^2}{b^2} - \frac{z^2}{c^2} = 0" />
          </div>
          <p>El término solitario de aquel lado (la z) es quien atraviesa abriendo y dirigiendo el cono vertical.</p>
        </div>

        <div className="example-box">
          <p><strong>Hiperboloides</strong></p>
          <ul className="list-styled">
            <li>Las tres variables cuadáticas saltan en la cancha e igualan a <InlineMath math="1" />.</li>
            <li><strong>De UNA hoja</strong> (El reactor nuclear, hiperboloide infinito con cintura pero nunca cortado): Tiene un término con <strong>signo negativo</strong> y dos positivos. El eje principal cruza por la variable estigmatizada de aquel negativo.</li>
            <div className="formula-box">
             <InlineMath math="\frac{x^2}{a^2} + \frac{y^2}{b^2} - \frac{z^2}{c^2} = 1" />
            </div>
            <li><strong>De DOS hojas</strong> (Un par de tazones solitarios flotando contrapuestos): Tiene increíblemente <strong>dos términos de signos negativos</strong> y un huérfano positivo dictándoles quién manda por la vía recta separadora.</li>
            <div className="formula-box">
             <InlineMath math="-\frac{x^2}{a^2} - \frac{y^2}{b^2} + \frac{z^2}{c^2} = 1" />
            </div>
          </ul>
        </div>

        <div className="example-box">
          <p><strong>Paraboloides</strong></p>
          <ul className="list-styled">
            <li><strong>SÓLO DOS</strong> variables corren elevándose al cuadrado. <strong>La última se queda aburrida a potencia lineal.</strong></li>
            <li><strong>Paraboloide Elíptico</strong> (La famosa 'tacita'): Las dos variables al cuadrado de aquel lado ostentan el mismo signo. Y se abren por completo sobre el eje de la valiente variable lineal central:  <InlineMath math="z = \frac{x^2}{a^2} + \frac{y^2}{b^2}" /></li>
            <li><strong>Paraboloide Hiperbólico</strong> (La "Silla de Montar"): Las dos variables del cuadrado poseen ahora mismo doloroso y temible <strong>signos opuestos</strong>:  <InlineMath math="z = \frac{x^2}{a^2} - \frac{y^2}{b^2}" /></li>
          </ul>
        </div>

      </main>

      <TopicNavigation 
        prevPath="/parcial3/conicas/rotacion-traslacion" 
      />

      <AiChatBot 
        topicTitle="Superficies Cuádricas 3D" 
        topicContext="El catálogo de Cuádricas canónicas 3D y atajos visuales infalibles: Elipsoide (todos x, y, z al cuadrado y todos positivos e igualado a 1). Hiperboloide de 1 hoja (todos al cuadrado, 1 menos). Hiperboloide de 2 hojas (todos al cuadrado, 2 menos). Cono elíptico (todos al cuadrado, negativo al cero igual, cero soluto 1). Paraboloides Elípticos vs Hiperbólicos basados exclusivamente en que a ellos una variable lineal se quedó sin cuadrado, dependiendo de si en un lado se suman (taza) o restan (silla montar)." 
      />
    </div>
  );
};

export default Cuadricas;
