// Centralized Topic Data Source for Navigation and Search Indexing

export interface CourseRoute {
  path: string;
  parcial: number;
  temaTitle: string;
  topicTitle: string;
}

export const courseRoutes: CourseRoute[] = [
  // Parcial 1
  { path: '/parcial1/vectores/segmento-orientado', parcial: 1, temaTitle: '1. Vectores Geométricos', topicTitle: 'Segmento Orientado' },
  { path: '/parcial1/vectores/modulo-direccion-sentido', parcial: 1, temaTitle: '1. Vectores Geométricos', topicTitle: 'Módulo, Dirección y Sentido' },
  { path: '/parcial1/vectores/igualdad-vectores', parcial: 1, temaTitle: '1. Vectores Geométricos', topicTitle: 'Igualdad de Vectores' },
  { path: '/parcial1/vectores/versor', parcial: 1, temaTitle: '1. Vectores Geométricos', topicTitle: 'Versor y módulo 1' },
  { path: '/parcial1/vectores/vector-opuesto', parcial: 1, temaTitle: '1. Vectores Geométricos', topicTitle: 'Vector Opuesto' },

  { path: '/parcial1/operaciones/suma-vectores', parcial: 1, temaTitle: '2. Operaciones con Vectores', topicTitle: 'Suma y Resultante Poligonal' },
  { path: '/parcial1/operaciones/propiedades-adicion', parcial: 1, temaTitle: '2. Operaciones con Vectores', topicTitle: 'Propiedades de la Adición' },
  { path: '/parcial1/operaciones/resta-vectores', parcial: 1, temaTitle: '2. Operaciones con Vectores', topicTitle: 'Resta de Vectores' },
  { path: '/parcial1/operaciones/modulo-dos-puntos', parcial: 1, temaTitle: '2. Operaciones con Vectores', topicTitle: 'Módulo determinado por dos puntos' },
  { path: '/parcial1/operaciones/producto-por-escalar', parcial: 1, temaTitle: '2. Operaciones con Vectores', topicTitle: 'Producto por un Escalar' },

  { path: '/parcial1/sistemas/referencias-dimensiones', parcial: 1, temaTitle: '3. Sistemas y Referencias', topicTitle: 'Sistemas de referencia' },
  { path: '/parcial1/sistemas/condicion-paralelismo', parcial: 1, temaTitle: '3. Sistemas y Referencias', topicTitle: 'Condición de paralelismo' },
  { path: '/parcial1/sistemas/proyeccion-ortogonal', parcial: 1, temaTitle: '3. Sistemas y Referencias', topicTitle: 'Proyección ortogonal' },

  { path: '/parcial1/productos/producto-escalar', parcial: 1, temaTitle: '4. Productos Vectoriales', topicTitle: 'Producto Escalar' },
  { path: '/parcial1/productos/cosenos-directores', parcial: 1, temaTitle: '4. Productos Vectoriales', topicTitle: 'Cosenos Directores' },
  { path: '/parcial1/productos/producto-vectorial', parcial: 1, temaTitle: '4. Productos Vectoriales', topicTitle: 'Producto Vectorial' },
  { path: '/parcial1/productos/producto-mixto', parcial: 1, temaTitle: '4. Productos Vectoriales', topicTitle: 'Producto Mixto' },

  { path: '/parcial1/recta-plano/ecuaciones-recta', parcial: 1, temaTitle: '5. Recta en el Plano', topicTitle: 'Ecuaciones de la Recta' },
  { path: '/parcial1/recta-plano/angulo-rectas', parcial: 1, temaTitle: '5. Recta en el Plano', topicTitle: 'Ángulo entre rectas' },
  { path: '/parcial1/recta-plano/perpendicularidad-paralelismo', parcial: 1, temaTitle: '5. Recta en el Plano', topicTitle: 'Perpendicularidad y Paralelismo' },
  { path: '/parcial1/recta-plano/distancia-punto-recta', parcial: 1, temaTitle: '5. Recta en el Plano', topicTitle: 'Distancia de punto a recta' },

  { path: '/parcial1/espacio-planos/formas-espaciales', parcial: 1, temaTitle: '6. Recta en el Espacio y Planos', topicTitle: 'Formas de la recta en R3' },
  { path: '/parcial1/espacio-planos/planos-proyectantes', parcial: 1, temaTitle: '6. Recta en el Espacio y Planos', topicTitle: 'Planos proyectantes' },
  { path: '/parcial1/espacio-planos/coplanaridad-rectas', parcial: 1, temaTitle: '6. Recta en el Espacio y Planos', topicTitle: 'Coplanaridad de rectas' },
  { path: '/parcial1/espacio-planos/plano-recta-punto', parcial: 1, temaTitle: '6. Recta en el Espacio y Planos', topicTitle: 'Plano, recta y punto' },

  // Parcial 2
  { path: '/parcial2/sistemas/definicion-solucion', parcial: 2, temaTitle: '1. Sistemas de Ecuaciones Lineales', topicTitle: 'Definición y Conjunto Solución' },
  { path: '/parcial2/sistemas/compatibles', parcial: 2, temaTitle: '1. Sistemas de Ecuaciones Lineales', topicTitle: 'Sistemas Compatibles' },
  { path: '/parcial2/sistemas/incompatibles', parcial: 2, temaTitle: '1. Sistemas de Ecuaciones Lineales', topicTitle: 'Sistemas Incompatibles' },
  { path: '/parcial2/sistemas/matriz-ampliada', parcial: 2, temaTitle: '1. Sistemas de Ecuaciones Lineales', topicTitle: 'Matriz Ampliada y Transformaciones' },
  { path: '/parcial2/sistemas/pivote', parcial: 2, temaTitle: '1. Sistemas de Ecuaciones Lineales', topicTitle: 'Pivote y Variable Delantera' },
  { path: '/parcial2/sistemas/variables-libres', parcial: 2, temaTitle: '1. Sistemas de Ecuaciones Lineales', topicTitle: 'Variables Libres y Rango' },

  { path: '/parcial2/escalonada/matriz-escalonada', parcial: 2, temaTitle: '2. Matriz Escalonada y Teoremas', topicTitle: 'Matriz Escalonada' },
  { path: '/parcial2/escalonada/teoremas-sel', parcial: 2, temaTitle: '2. Matriz Escalonada y Teoremas', topicTitle: 'Teoremas: SEL compatible determinado e indeterminado' },
  { path: '/parcial2/escalonada/sistemas-homogeneos', parcial: 2, temaTitle: '2. Matriz Escalonada y Teoremas', topicTitle: 'Sistemas Homogéneos (SELH)' },
  { path: '/parcial2/escalonada/interpretacion', parcial: 2, temaTitle: '2. Matriz Escalonada y Teoremas', topicTitle: 'Interpretación Geométrica y Algebraica' },

  { path: '/parcial2/matrices/definicion', parcial: 2, temaTitle: '3. Matrices y Clasificación', topicTitle: 'Definición de Matriz y Submatrices' },
  { path: '/parcial2/matrices/iguales-filas-columnas', parcial: 2, temaTitle: '3. Matrices y Clasificación', topicTitle: 'Matrices Iguales, Filas y Columnas' },
  { path: '/parcial2/matrices/cuadradas-nulas', parcial: 2, temaTitle: '3. Matrices y Clasificación', topicTitle: 'Matrices Cuadradas y Nulas' },
  { path: '/parcial2/matrices/triangulares-diagonales', parcial: 2, temaTitle: '3. Matrices y Clasificación', topicTitle: 'Matrices Triangular Superior, Inferior y Diagonal' },
  { path: '/parcial2/matrices/escalar', parcial: 2, temaTitle: '3. Matrices y Clasificación', topicTitle: 'Matriz Escalar' },

  { path: '/parcial2/operaciones/adicion-escalar', parcial: 2, temaTitle: '4. Operaciones con Matrices', topicTitle: 'Adición de Matrices y suma por un escalar' },
  { path: '/parcial2/operaciones/transposicion', parcial: 2, temaTitle: '4. Operaciones con Matrices', topicTitle: 'Transposición de Matrices' },
  { path: '/parcial2/operaciones/producto-matricial', parcial: 2, temaTitle: '4. Operaciones con Matrices', topicTitle: 'Producto Matricial' },

  { path: '/parcial2/propiedades/inversa-identidad', parcial: 2, temaTitle: '5. Propiedades Matriciales', topicTitle: 'Inversa e Identidad' },
  { path: '/parcial2/propiedades/solucion-unica', parcial: 2, temaTitle: '5. Propiedades Matriciales', topicTitle: 'Teorema de Solución Única' },
  { path: '/parcial2/propiedades/traza', parcial: 2, temaTitle: '5. Propiedades Matriciales', topicTitle: 'Traza de una Matriz' },
  { path: '/parcial2/propiedades/adicionales', parcial: 2, temaTitle: '5. Propiedades Matriciales', topicTitle: 'Más propiedades: aditividad, homogeneidad, etc.' },

  { path: '/parcial2/determinantes/concepto', parcial: 2, temaTitle: '6. Determinantes', topicTitle: 'Concepto de Determinante, Menor y Adjunto' },
  { path: '/parcial2/determinantes/sarrus-chio', parcial: 2, temaTitle: '6. Determinantes', topicTitle: 'Regla de Sarrus y de Chío' },
  { path: '/parcial2/determinantes/preliminares', parcial: 2, temaTitle: '6. Determinantes', topicTitle: 'Definiciones Preliminares y Adjunta' },
  { path: '/parcial2/determinantes/inversa', parcial: 2, temaTitle: '6. Determinantes', topicTitle: 'Expresión para la matriz inversa y teoremas' },
  { path: '/parcial2/determinantes/relacion-traza-determinante', parcial: 2, temaTitle: '6. Determinantes', topicTitle: 'Relación entre Traza y Determinante' },
];
