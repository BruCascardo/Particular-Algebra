import React from 'react';
import 'katex/dist/katex.min.css';
import { InlineMath, BlockMath } from 'react-katex';
import TopicHeader from '../../../components/TopicHeader';
import TopicNavigation from '../../../components/TopicNavigation';
import AiChatBot from '../../../components/AiChatBot';
import '../../vectores/VectorTopic.css';

const DefinicionSolucion: React.FC = () => {
  return (
    <div className="vector-topic-container">
      <TopicHeader 
        title="1.1. Definición y Conjunto Solución" 
        subtitle="Sistemas de Ecuaciones Lineales (SEL)"
      />

      <main className="topic-content">
        <div className="concept-box">
          <h3>Ecuación Lineal y Sistemas</h3>
          <p>
            Una <strong>ecuación lineal</strong> en <InlineMath math="n" /> variables <InlineMath math="x_1, x_2, \ldots, x_n" /> es una ecuación matemática de la forma:
          </p>
          <BlockMath math="a_1x_1 + a_2x_2 + \dots + a_nx_n = b" />
          <p>
            Donde <InlineMath math="a_1, a_2, \dots, a_n" /> y <InlineMath math="b" /> son números reales o complejos. Los términos <InlineMath math="a_i" /> son los coeficientes, las <InlineMath math="x_i" /> las incógnitas y <InlineMath math="b" /> es el término independiente.
          </p>
          <p>
            Un <strong>Sistema de Ecuaciones Lineales (SEL)</strong> es un conjunto de múltiples ecuaciones lineales (digamos, <InlineMath math="m" /> ecuaciones) que comparten las mismas <InlineMath math="n" /> incógnitas. Se busca la solución simultánea de todas ellas.
          </p>
        </div>

        <h2>El Conjunto Solución</h2>

        <p>
          Una <strong>solución</strong> del sistema es un conjunto ordenado de valores <InlineMath math="(s_1, s_2, \dots, s_n)" /> que, al sustituir <InlineMath math="x_1 = s_1, x_2 = s_2, \dots" />, satisface <em>todas</em> las ecuaciones del sistema simultáneamente.
        </p>
        <p>
          El <strong>Conjunto Solución</strong> son todos los valores posibles que son solución al sistema. Si dos o más sistemas distintos tienen exactamente el mismo conjunto solución, se denominan <strong>Sistemas Equivalentes</strong>.
        </p>

        <div className="formula-box" style={{ background: 'rgba(50, 60, 100, 0.4)' }}>
           <p style={{ margin: 0, fontSize: '1rem', color: '#e0e1dd' }}>Forma General de un SEL de <InlineMath math="m" /> ecuaciones y <InlineMath math="n" /> incógnitas:</p>
          <BlockMath math="\begin{cases} a_{11}x_1 + a_{12}x_2 + \dots + a_{1n}x_n = b_1 \\ a_{21}x_1 + a_{22}x_2 + \dots + a_{2n}x_n = b_2 \\ \vdots \\ a_{m1}x_1 + a_{m2}x_2 + \dots + a_{mn}x_n = b_m \end{cases}" />
        </div>

        <div className="example-box">
          <h4>Interpretación Geométrica</h4>
          <p>
            En <InlineMath math="\mathbb{R}^2" /> (dos variables <InlineMath math="x, y" />), cada ecuación lineal representa una línea recta. La solución del sistema es el punto (o puntos) donde todas las rectas se cruzan simultáneamente.
          </p>
          <p>
            En <InlineMath math="\mathbb{R}^3" /> (tres variables <InlineMath math="x, y, z" />), cada ecuación es un plano en el espacio 3D. La solución es todo lugar donde esos planos se intersecan a la misma vez (puede ser un único punto en el espacio, una recta que los atraviese a todos, o en algunos casos simplemente ningún lado).
          </p>
          <p>
             Matemáticamente generalizamos esto a dimensión <InlineMath math="n" /> como un <strong>hiperplano</strong>. Solucionar el sistema equivale a resolver la intersección de <InlineMath math="m" /> hiperplanos.
          </p>
        </div>

      </main>

      <TopicNavigation 
        prevPath="/parcial2"
        nextPath="/parcial2/sistemas/compatibles" 
      />
    
      <AiChatBot 
        topicTitle="Definición de SEL" 
        topicContext="Definición de ecuaciones lineales, sistemas de ecuaciones lineales de m x n, conjunto solución y equivalencia geométrica como cruce de hiperplanos." 
      />
    </div>
  );
};

export default DefinicionSolucion;
