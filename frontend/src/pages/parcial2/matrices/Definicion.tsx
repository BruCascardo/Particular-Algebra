import React from 'react';
import 'katex/dist/katex.min.css';
import { InlineMath, BlockMath } from 'react-katex';
import TopicHeader from '../../../components/TopicHeader';
import TopicNavigation from '../../../components/TopicNavigation';
import AiChatBot from '../../../components/AiChatBot';
import '../../vectores/VectorTopic.css';

const Definicion: React.FC = () => {
  return (
    <div className="vector-topic-container">
      <TopicHeader 
        title="3.1. Definición de Matriz y Submatrices" 
        subtitle="Estructuras de Datos Numéricos en Doble Dimensión"
      />

      <main className="topic-content">
        <div className="concept-box">
          <h3>¿Qué es una Matriz?</h3>
          <p>
            Una <strong>matriz</strong> es fundamentalmente un arreglo rectangular bidimensional compuesto de números, símbolos o expresiones matemáticas, ordenados meticulosamente en líneas horizontales y verticales.
          </p>
          <p>
            A las líneas horizontales se las denomina <strong>Filas</strong> o renglones (usualmente de índice <InlineMath math="m" /> o <InlineMath math="i" />), y a las líneas verticales se les llama <strong>Columnas</strong> (de índice <InlineMath math="n" /> o <InlineMath math="j" />). Al formato numérico total que describe el tamaño de su retícula se le llama <em>Orden</em> o <em>Dimensión</em> de la matriz y se describe empíricamente como <InlineMath math="m \times n" />.
          </p>
        </div>

        <h2>Notación Universal</h2>

        <p>
          Matemáticamente, por norma se nombra a las Matrices completas con <strong>letras mayúsculas</strong> de imprenta (como <InlineMath math="A, B, C" />). Para referirse a cada uno de sus elementos individuales u ocupantes aislados dentro de la estructura, utilizamos la misma letra en <strong>minúscula</strong> acompañada de un doble subíndice <InlineMath math="a_{ij}" />, donde <InlineMath math="i" /> indica la fila posicional exacta del número, y <InlineMath math="j" /> indica su columna posicional exacta.
        </p>

        <div className="formula-box" style={{ background: 'rgba(50, 60, 100, 0.4)' }}>
           <p style={{ margin: 0, fontSize: '1rem', color: '#e0e1dd' }}>Formato Genérico de Construcción de una Matriz <InlineMath math="A \in \mathbb{R}^{m \times n}" />:</p>
          <BlockMath math="A_{m \times n} = \begin{bmatrix} a_{11} & a_{12} & \dots & a_{1n} \\ a_{21} & a_{22} & \dots & a_{2n} \\ \vdots & \vdots & \ddots & \vdots \\ a_{m1} & a_{m2} & \dots & a_{mn} \end{bmatrix}" />
        </div>

        <div className="example-box">
          <h4>Interpretando los Índices <InlineMath math="a_{ij}" /></h4>
          <p>Supongamos tener la matriz de orden <strong>2x3</strong> (2 filas, 3 columnas):</p>
          <BlockMath math="B_{2 \times 3} = \begin{bmatrix} 8 & -2 & 5 \\ 0 & 3 & -7 \end{bmatrix}" />
          <ul className="list-styled" style={{ marginTop: '0.5rem' }}>
            <li>El elemento <InlineMath math="b_{12}" /> (fila 1, columna 2) es <InlineMath math="-2" />.</li>
            <li>El elemento <InlineMath math="b_{23}" /> (fila 2, columna 3) es <InlineMath math="-7" />.</li>
          </ul>
        </div>

        <h2>El Concepto de Submatriz</h2>

        <p>
          Como su nombre lo evidencia, una <strong>Submatriz</strong> es una parte o pedazo más diminuto extraído puramente de las entrañas de una matriz de escala superior. 
        </p>
        <p>
          Para aislar y formar una submatriz en base a una matriz <InlineMath math="A" /> principal, tú eliges matemáticamente suprimir, borrar temporalmente o tapar un conjunto de determinadas filas u columnas de la cuadrícula original. Lo que "sobrevive" inalterado, intacto e incrustado originará la nueva y más compacta pieza. Las submatrices son la pieza teórica esencial luego para poder calcular grandes operaciones como los clásicos <em>Determinantes por Adjuntos</em> y Co-Factores.
        </p>

        <div className="example-box" style={{ marginTop: '1rem', borderColor: '#a8d5ba' }}>
          <h4>Extrayendo una Submatriz</h4>
          <p>Dada un arreglo de dimensiones variadas <InlineMath math="3 \times 3" />:</p>
          <BlockMath math="A = \begin{bmatrix} \bold{1} & \bold{2} & \bold{3} \\ 4 & 5 & 6 \\ \bold{7} & \bold{8} & \bold{9} \end{bmatrix}" />
          <p>
            Si nosotros acordamos eliminar tajantemente a la segunda fila de en medio y a la segunda columna de en medio por cuestiones tácticas de estudio, nos quedaremos tan solo con una Submatriz menor e independiente de orden <InlineMath math="2 \times 2" /> de la siguiente magnitud:
          </p>
          <BlockMath math="\text{Sub}(A) = \begin{bmatrix} 1 & 3 \\ 7 & 9 \end{bmatrix}" />
        </div>

      </main>

      <TopicNavigation 
        prevPath="/parcial2/escalonada/interpretacion"
        nextPath="/parcial2/matrices/iguales-filas-columnas" 
      />
    
      <AiChatBot 
        topicTitle="Definición de Matriz y Elementos" 
        topicContext="Familiarización universal con el notorio índice sub-escrito a_{ij} designando Filas x Columnas para el orden posicional de los números. Detallar la disección en Submatrices puras al destripar filas y columnas para extraer información menor." 
      />
    </div>
  );
};

export default Definicion;
