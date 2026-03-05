import React from 'react';
import CoursePageLayout, { type TopicType } from '../components/CoursePageLayout';

const Parcial1: React.FC = () => {
  const topics: TopicType[] = [
    {
      title: "1. Vectores",
      subtopics: [
        { name: "1.1. Segmento orientado", path: "/parcial1/vectores/segmento-orientado" },
        { name: "1.2. Módulo, Dirección y Sentido", path: "/parcial1/vectores/modulo-direccion-sentido" },
        { name: "1.3. Igualdad de vectores", path: "/parcial1/vectores/igualdad-vectores" },
        { name: "1.4. Versor y módulo 1 (i, j, k)", path: "/parcial1/vectores/versor" },
        { name: "1.5. Vector opuesto", path: "/parcial1/vectores/vector-opuesto" }
      ]
    },
    {
      title: "2. Operaciones con Vectores",
      subtopics: [
        { name: "2.1. Suma y Resultante poligonal (método paralelogramo)", path: "/parcial1/operaciones/suma-vectores" },
        { name: "2.2. Propiedades de la adición", path: "/parcial1/operaciones/propiedades-adicion" },
        { name: "2.3. Resta de vectores", path: "/parcial1/operaciones/resta-vectores" },
        { name: "2.4. Módulo de un vector determinado por dos puntos", path: "/parcial1/operaciones/modulo-dos-puntos" },
        { name: "2.5. Producto de un vector por un escalar y sus propiedades", path: "/parcial1/operaciones/producto-por-escalar" }
      ]
    },
    {
      title: "3. Sistemas y Referencias",
      subtopics: [
        { name: "3.1. Sistema de referencia unidimensional, bidimensional y tridimensional", path: "/parcial1/sistemas/referencias-dimensiones" },
        { name: "3.2. Condición de paralelismo", path: "/parcial1/sistemas/condicion-paralelismo" },
        { name: "3.3. Proyección ortogonal de un vector sobre la dirección de otro", path: "/parcial1/sistemas/proyeccion-ortogonal" }
      ]
    },
    {
      title: "4. Productos Vectoriales",
      subtopics: [
        { name: "4.1. Producto Escalar y sus propiedades", path: "/parcial1/productos/producto-escalar" },
        { name: "4.2. Descomposición canónica, Ángulos y cosenos directores", path: "/parcial1/productos/cosenos-directores" },
        { name: "4.3. Producto Vectorial e interpretación del módulo", path: "/parcial1/productos/producto-vectorial" },
        { name: "4.4. Producto Mixto", path: "/parcial1/productos/producto-mixto" }
      ]
    },
    {
      title: "5. Recta en el Plano",
      subtopics: [
        { name: "5.1. Ecuaciones vectorial, paramétricas, general, segmentaria, y explícita", path: "/parcial1/recta-plano/ecuaciones-recta" },
        { name: "5.2. Ángulo entre dos rectas", path: "/parcial1/recta-plano/angulo-rectas" },
        { name: "5.3. Condiciones de perpendicularidad y paralelismo", path: "/parcial1/recta-plano/perpendicularidad-paralelismo" },
        { name: "5.4. Distancia de un punto a la recta", path: "/parcial1/recta-plano/distancia-punto-recta" }
      ]
    },
    {
      title: "6. Recta en el Espacio y Planos",
      subtopics: [
        { name: "6.1. Forma paramétrica, simétrica/segmentaria", path: "/parcial1/espacio-planos/formas-espaciales" },
        { name: "6.2. Planos proyectantes", path: "/parcial1/espacio-planos/planos-proyectantes" },
        { name: "6.3. Coplanaridad de dos rectas", path: "/parcial1/espacio-planos/coplanaridad-rectas" },
        { name: "6.4. Ecuación del plano que contiene una recta y un punto", path: "/parcial1/espacio-planos/plano-recta-punto" }
      ]
    }
  ];

  return (
    <CoursePageLayout 
      title="Parcial 1: Vectores y Rectas"
      subtitle="Fundamentos de geometría analítica en R2 y R3. Explora el temario detallado."
      topics={topics}
      themeDecoration="vector"
      headerDecorationText="→ v"
    />
  );
};

export default Parcial1;
