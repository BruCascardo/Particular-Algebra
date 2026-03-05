import React from 'react';
import CoursePageLayout, { type TopicType } from '../components/CoursePageLayout';

const Parcial2: React.FC = () => {
  const topics: TopicType[] = [
    {
      title: "1. Sistemas de Ecuaciones Lineales (SEL)",
      subtopics: [
        { name: "Definición y Conjunto Solución", path: "/parcial2/sistemas/definicion-solucion" },
        { name: "Sistemas compatibles determinados e indeterminados", path: "/parcial2/sistemas/compatibles" },
        { name: "Sistemas incompatibles (conjunto vacío)", path: "/parcial2/sistemas/incompatibles" },
        { name: "Matriz Ampliada y Transformaciones Elementales", path: "/parcial2/sistemas/matriz-ampliada" },
        { name: "Pivote, Columna Pivote y Variable Delantera", path: "/parcial2/sistemas/pivote" },
        { name: "Variables Libres y Rango", path: "/parcial2/sistemas/variables-libres-rango" }
      ]
    },
    {
      title: "2. Matriz Escalonada y Teoremas",
      subtopics: [
        { name: "Matriz Escalonada", path: "/parcial2/escalonada/matriz-escalonada" },
        { name: "Teoremas: SEL compatible determinado e indeterminado", path: "/parcial2/escalonada/teoremas-sel" },
        { name: "Sistemas Homogéneos (SELH) y soluciones (trivial, no trivial)", path: "/parcial2/escalonada/sistemas-homogeneos" },
        { name: "Interpretación Geométrica y Algebraica", path: "/parcial2/escalonada/interpretacion" }
      ]
    },
    {
      title: "3. Matrices y Clasificación",
      subtopics: [
        { name: "Definición de Matriz y Submatrices", path: "/parcial2/matrices/definicion" },
        { name: "Matrices Iguales, Filas y Columnas", path: "/parcial2/matrices/iguales-filas-columnas" },
        { name: "Matrices Cuadradas y Nulas", path: "/parcial2/matrices/cuadradas-nulas" },
        { name: "Matrices Triangular Superior, Inferior y Diagonal", path: "/parcial2/matrices/triangulares-diagonales" },
        { name: "Matriz Escalar", path: "/parcial2/matrices/escalar" }
      ]
    },
    {
      title: "4. Operaciones con Matrices",
      subtopics: [
        { name: "Adición de Matrices y suma por un escalar", path: "/parcial2/operaciones/adicion-escalar" },
        { name: "Transposición de Matrices (Simétrica y Antisimétrica)", path: "/parcial2/operaciones/transposicion" },
        { name: "Producto Matricial", path: "/parcial2/operaciones/producto-matricial" }
      ]
    },
    {
      title: "5. Propiedades Matriciales",
      subtopics: [
        { name: "Inversa (AB = BA = I) e Identidad", path: "/parcial2/propiedades/inversa-identidad" },
        { name: "Teorema de Solución Única en Ax=b", path: "/parcial2/propiedades/solucion-unica" },
        { name: "Traza de una Matriz", path: "/parcial2/propiedades/traza" },
        { name: "Más propiedades: aditividad, homogeneidad, involución, transpuestas", path: "/parcial2/propiedades/adicionales" }
      ]
    },
    {
      title: "6. Determinantes",
      subtopics: [
        { name: "Concepto de Determinante, Menor y Adjunto", path: "/parcial2/determinantes/concepto" },
        { name: "Regla de Sarrus y de Chio", path: "/parcial2/determinantes/sarrus-chio" },
        { name: "Definiciones Preliminares (Regular, Singular y Adjunta)", path: "/parcial2/determinantes/preliminares" },
        { name: "Expresión para la matriz inversa y teoremas", path: "/parcial2/determinantes/inversa" },
        { name: "Relación entre Traza y Determinante", path: "/parcial2/determinantes/relacion-traza-determinante" }
      ]
    }
  ];

  return (
    <CoursePageLayout 
      title="Parcial 2: Matrices y Sistemas"
      subtitle="Resolución de sistemas lineales, operaciones matriciales y determinantes."
      topics={topics}
      themeDecoration="matrix"
      headerDecorationText="[A]"
    />
  );
};

export default Parcial2;
