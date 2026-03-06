import React from 'react';
import { InlineMath, BlockMath } from 'react-katex';
import TopicHeader from '../../../components/TopicHeader';
import TopicNavigation from '../../../components/TopicNavigation';
import AiChatBot from '../../../components/AiChatBot';
import './ConicasTopic.css';

const RotacionTraslacion: React.FC = () => {
  return (
    <div className="conicas-topic-container">
      <TopicHeader 
        title="Rotación y Traslación de Ejes" 
        subtitle="La diagonalización como arma para enderezar el plano"
      />

      <main className="topic-content">
        <div className="concept-box">
          <h3>El problema de la curvatura rota</h3>
          <p>
            Vimos que una cónica con ecuación general contiene un despreciable término <InlineMath math="Bxy" /> que indica que su gráfica está torcida. 
            El <strong>Teorema de los Ejes Principales</strong> jura solemnemente que, con una simple rotación inteligente del plano, podemos obligar a esos ejes "chuecos" a volver a alinearse y hacer desaparecer el término cruzado, devolviéndonos una ecuación fácil de graficar.
          </p>
        </div>

        <h2>La Forma Matricial de la Cónica</h2>
        <p>
          La clave magna de la Geometría Analítica moderna es incrustar los términos cuadráticos de la ecuación (la matriz causante de la rotación) en una matriz real <strong>estrictamente simétrica</strong>. 
        </p>

        <p>La ecuación <InlineMath math="Ax^2 + Bxy + Cy^2" /> se puede escribir siempre como el producto matricial:</p>
        <div className="formula-box">
          <BlockMath math="\begin{pmatrix} x & y \end{pmatrix} \begin{pmatrix} A & B/2 \\ B/2 & C \end{pmatrix} \begin{pmatrix} x \\ y \end{pmatrix}" />
        </div>
        <p>
          ¡Bingo! Esa matriz central de coeficientes <InlineMath math="2 \times 2" /> (llamamémosla <InlineMath math="Q" />) es <strong>simétrica por definición</strong>.
        </p>

        <h2>Enderezar: Una "Diagonalización Ortogonal"</h2>
        <p>
          Acudimos a nuestro querido <strong>Teorema Espectral</strong>. Si la matriz <InlineMath math="Q" /> es simétrica, nos garantiza poder descubrir una matriz de rotación ortogonal <InlineMath math="P" /> formada por sus autovectores normalizados, de modo que nos conduzca al paraíso de una matriz diagonal impecable <InlineMath math="D" />.
        </p>
        
        <p>El algoritmo de purificación es:</p>
        <ul className="list-styled">
          <li><strong>Paso 1:</strong> Calcular el polinomio característico de <InlineMath math="Q" /> usando su determinante.</li>
          <li><strong>Paso 2:</strong> Encontrar sus dos raíces (sus <strong>autovalores <InlineMath math="\lambda_1" /> y <InlineMath math="\lambda_2" /></strong>). ¡Aleluya! Con solo estos dos números, la nueva ecuación <strong>rotada</strong> carecerá de <InlineMath math="Bxy" />. Los coeficientes <InlineMath math="A'" /> y <InlineMath math="C'" /> de los nuevos ejes <InlineMath math="x'" /> e <InlineMath math="y'" /> serán exactamente los propios autovalores:</li>
        </ul>
        <div className="formula-box">
          <BlockMath math="\lambda_1 (x')^2 + \lambda_2 (y')^2 + D'x' + E'y' + F' = 0" />
        </div>
        
        <div className="example-box">
          <p><strong>Cuidado con los términos lineales:</strong></p>
          <p>Si la cónica original tenía términos en solitario <InlineMath math="Dx + Ey" />, rotar los ejes (<InlineMath math="P" />) también afectará a sus coeficientes. Deberás multiplicar el vector transpuesto de esos términos genéricos por la matriz ortogonal construída <InlineMath math="P" /> para revelar exactamente qué números irán dentro de <InlineMath math="D'" /> y <InlineMath math="E'" />.</p>
        </div>

        <h2>Traslación: El golpe final</h2>
        <p>
          Una vez ejecutada la diagonalización (o si no era requerida de antemano por tener <InlineMath math="B=0" />), solo nos quedamos con una curva derecha pero que sigue fuera de su centro original (una "traslación"). El último remate estético se realiza <strong>completando el trinomio cuadrado perfecto</strong> independientemente para las <InlineMath math="x'" /> y para las <InlineMath math="y'" />. 
        </p>
        <p>
          Este sencillo procedimiento algebraico nos agrupará esas variables intrusas en potencias binómicas <InlineMath math="(x' - h)^2" /> y <InlineMath math="(y' - k)^2" />, y en el acto el punto de "origen" geométrico puro quedará desenmascarado en el centro formal <InlineMath math="(h, k)" />. Tras esta simple re-escritura final, habrás llegado a la ansiada y predecible Ecuación Canónica.
        </p>

      </main>

      <TopicNavigation 
        prevPath="/parcial3/conicas/ecuacion-general"
        nextPath="/parcial3/conicas/cuadricas" 
      />

      <AiChatBot 
        topicTitle="Rotación y Traslación de Ejes" 
        topicContext="El uso de matrices simétricas P y su diagonalización ortogonal D para eliminar Bxy. P provee los ejes, D (autovalores) provee los nuevos coeficientes A y C de la cónica rotada en lambdas. La operación final matricial sobre el vector lineal (D, E)x. Completar el trinomio cuadrado perfecto de ambas variables en la nueva ecuación para aplicar la 'traslación' de ejes al verdadero centro h, k finalizando el problema." 
      />
    </div>
  );
};

export default RotacionTraslacion;
