import React from 'react';
import CoursePageLayout, { type TopicType } from '../components/CoursePageLayout';

const Parcial3: React.FC = () => {
  const topics: TopicType[] = [
    {
      title: "1. Espacios Vectoriales",
      subtopics: [
        { name: "Definición y propiedades fundamentales", path: "/parcial3/espacios/definicion" },
        { name: "Subespacios vectoriales (condiciones)", path: "/parcial3/espacios/subespacios" },
        { name: "Combinación lineal y Espacio generado", path: "/parcial3/espacios/combinacion-lineal" },
        { name: "Dependencia e Independencia Lineal", path: "/parcial3/espacios/dependencia-lineal" },
        { name: "Bases y Dimensión", path: "/parcial3/espacios/base-dimension" },
        { name: "Coordenadas y Matriz de Cambio de Base", path: "/parcial3/espacios/cambio-base" }
      ]
    },
    {
      title: "2. Espacios con Producto Interior",
      subtopics: [
        { name: "Producto interior (Definición y axiomas)", path: "/parcial3/producto-interior/definicion" },
        { name: "Norma, distancia y ángulo entre vectores", path: "/parcial3/producto-interior/norma-distancia-angulo" },
        { name: "Ortogonalidad y conjuntos ortonormales", path: "/parcial3/producto-interior/ortogonalidad" },
        { name: "Proceso de Gram-Schmidt", path: "/parcial3/producto-interior/gram-schmidt" },
        { name: "Complemento Ortogonal y Proyección Ortogonal", path: "/parcial3/producto-interior/proyeccion" }
      ]
    },
    {
      title: "3. Transformaciones Lineales",
      subtopics: [
        { name: "Definición de Transformación Lineal (TL)", path: "/parcial3/transformaciones/definicion" },
        { name: "Núcleo e Imagen de una TL", path: "/parcial3/transformaciones/nucleo-imagen" },
        { name: "Teorema de las Dimensiones", path: "/parcial3/transformaciones/teorema-dimensiones" },
        { name: "Matriz asociada a una TL", path: "/parcial3/transformaciones/matriz-asociada" },
        { name: "Composición e Inversa de Transformaciones", path: "/parcial3/transformaciones/composicion-inversa" }
      ]
    },
    {
      title: "4. Autovalores y Autovectores",
      subtopics: [
        { name: "Autovalores y Autovectores (Valores y Vectores Propios)", path: "/parcial3/autovalores/definicion" },
        { name: "Polinomio Característico", path: "/parcial3/autovalores/polinomio-caracteristico" },
        { name: "Espacios Propios y Multiplicidad", path: "/parcial3/autovalores/multiplicidad" },
        { name: "Diagonalización de Matrices", path: "/parcial3/autovalores/diagonalizacion" },
        { name: "Diagonalización Ortogonal (Matrices Simétricas)", path: "/parcial3/autovalores/diagonalizacion-ortogonal" }
      ]
    },
    {
      title: "5. Cónicas y Cuádricas",
      subtopics: [
        { name: "Circunferencia y Parábola", path: "/parcial3/conicas/parabola-circunferencia" },
        { name: "Elipse e Hipérbola", path: "/parcial3/conicas/elipse-hiperbola" },
        { name: "Ecuación General de 2do Grado", path: "/parcial3/conicas/ecuacion-general" },
        { name: "Rotación y Traslación de Ejes", path: "/parcial3/conicas/rotacion-traslacion" },
        { name: "Superficies Cuádricas", path: "/parcial3/conicas/cuadricas" }
      ]
    }
  ];

  return (
    <CoursePageLayout 
      title="Parcial 3: Transformaciones y Cónicas"
      subtitle="Espacios vectoriales, el mundo de las transformaciones lineales y la clasificación de las cónicas."
      topics={topics}
      themeDecoration="transform"
      headerDecorationText="T(v)"
    />
  );
};

export default Parcial3;
