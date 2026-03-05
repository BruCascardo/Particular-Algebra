import React from 'react';
import 'katex/dist/katex.min.css';
import { InlineMath, BlockMath } from 'react-katex';
import TopicHeader from '../../../components/TopicHeader';
import TopicNavigation from '../../../components/TopicNavigation';
import AiChatBot from '../../../components/AiChatBot';
import '../../vectores/VectorTopic.css';

const Pivote: React.FC = () => {
  return (
    <div className="vector-topic-container">
      <TopicHeader 
        title="1.5. Pivote, Columna Pivote y Variable Delantera" 
        subtitle="Entendiendo la Estructura para Escalonar"
      />

      <main className="topic-content">
        <div className="concept-box">
          <h3>La Anatomía de una Fila Escalonada</h3>
          <p>
            Para resolver el sistema mediante la reducción de matrices usando el algoritmo de Gauss, necesitamos organizar la matriz en una forma "de escalera". Para lograr esto, identificamos elementos determinantes que llamaremos <strong>Pivotes</strong> o "entradas principales".
          </p>
        </div>

        <h2>La Entrada Principal o Variable Delantera</h2>

        <p>
          La <strong>Variable Delantera</strong> o entrada principal de una fila, indica simplemente el primer número estructural distinto de cero en toda esa fila (leyendo convencionalmente de izquierda a derecha), independientemente de la columna donde se encuentre alojado.
        </p>
        <p>
          Normalmente, se busca por conveniencia y pulcritud matemática, mediante transformaciones elementales convertir ese primer número en algo más fácil con lo que trabajar, siendo usualmente un <InlineMath math="1" />, pasando a denominarse "1 principal" o pivote. 
        </p>

        <h2>El Concepto de Pivote</h2>

        <p>
          Un <strong>Pivote</strong> es estrictamente el número u ocupante en posición de Variable Delantera que nos sirve de base o "pivote" activo para anular y transformar todos los demás elementos distintos de cero que se encuentren posicionados algebraicamente por debajo de su columna respectiva.
        </p>

        <h3>La Columna Pivote</h3>
        <p>
           De manera lógica, aquella columna completa de la matriz que contenga entre sus números al menos una posición elegida como pivote fundamental para procesar y reducir la matriz, recibe el nombre de <strong>Columna Pivote</strong>.
        </p>

        <div className="example-box">
          <h4>Viendo los Pivotes en Acción</h4>
          <p>Observemos una matriz ya llevada de forma parcial a un formato escalonado:</p>
          <BlockMath math="\begin{bmatrix} \bold{2} & -1 & 4 & | & 8 \\ 0 & \bold{3} & -2 & | & -5 \\ 0 & 0 & 0 & | & 0 \end{bmatrix}" />
          <ul className="list-styled" style={{ marginTop: '1rem' }}>
            <li>
              En la <strong>Fila 1</strong>, el primer número distinto de cero es <InlineMath math="\mathbf{2}" />. Este actúa como el pivot para anular la columna entera 1, que por ahora está vacía ya. Y la columna 1 será la columna pivote inicial.
            </li>
            <li>
              En la <strong>Fila 2</strong>, el primer número distinto de cero (leyendo de izquierda a derecha) es el <InlineMath math="\mathbf{3}" />. Este sería el pivot de su respectiva hilera, y de la Segunda Columna.
            </li>
            <li>
              En la <strong>Fila 3</strong>, al ser completamente de ceros, no posee variable delantera, primer elemento diferente de cero u pivote activo.
            </li>
          </ul>
        </div>

        <p>
          Recuerda: Si dos o más variables delanteras aparecen formando exactamente la misma columna vertical, no habremos finalizado la fase de escalonamiento. Deberás seguir aplicando sumas operativas en aquella columna para aniquilar cualquier registro e inferioridad al pivote seleccionado previamente en la parte superior.
        </p>

      </main>

      <TopicNavigation 
        prevPath="/parcial2/sistemas/matriz-ampliada"
        nextPath="/parcial2/sistemas/variables-libres-rango" 
      />
    
      <AiChatBot 
        topicTitle="Entradas Principales y Pivotes" 
        topicContext="Desglosar qué es y a qué nos referimos con Columna Pivote. Primer ingreso o elemento principal variable delantera. Relevancia y necesidad metódica." 
      />
    </div>
  );
};

export default Pivote;
