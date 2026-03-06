export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctAnswerIndex: number;
  explanation: string;
}

export const parcial1Tema1Questions: QuizQuestion[] = [
  {
    id: 1,
    question: "Si dos segmentos orientados tienen el mismo módulo y la misma dirección, pero distinta recta de acción, ¿se consideran vectores equipolentes?",
    options: [
      "No, porque para ser equipolentes deben estar sobre la misma recta de acción.",
      "Sí, siempre que también tengan el mismo sentido. La recta de acción puede ser paralela.",
      "No, porque si tienen distinta recta de acción, su origen cambia y por lo tanto son vectores distintos.",
      "Sí, sin importar el sentido, si tienen el mismo módulo y dirección son equipolentes."
    ],
    correctAnswerIndex: 1,
    explanation: "Por definición, dos segmentos orientados son equipolentes si tienen la misma longitud (módulo), la misma dirección (rectas de acción paralelas o coincidentes) y el mismo sentido."
  },
  {
    id: 2,
    question: "Sea v un vector no nulo. ¿Cuál es el resultado geométrico de multiplicar v por el escalar (-1 / ||v||) ?",
    options: [
      "Se obtiene el vector nulo.",
      "Se obtiene el vector opuesto a v.",
      "Se obtiene un vector de módulo 1 (versor) pero con la misma dirección y sentido que v.",
      "Se obtiene un vector de módulo 1 (versor) con la misma dirección pero de sentido opuesto a v."
    ],
    correctAnswerIndex: 3,
    explanation: "Multiplicar por (1 / ||v||) normaliza el vector (módulo 1, mismo sentido). El signo negativo (-1) además invierte su sentido, resultando en un versor opuesto."
  },
  {
    id: 3,
    question: "Si la resultante poligonal de un conjunto de vectores V1, V2, ... Vn es el vector nulo, ¿qué significa geométricamente?",
    options: [
      "Que todos los vectores son paralelos entre sí.",
      "Que los orígenes de todos los vectores coinciden en el mismo punto.",
      "Que al trazar los vectores uno a continuación del otro, el extremo del último coincide con el origen del primero formando un polígono cerrado.",
      "Que los vectores son linealmente independientes."
    ],
    correctAnswerIndex: 2,
    explanation: "La suma o resultante por el método poligonal es nula si al cerrar la cadena de vectores (cola con punta) el sistema vuelve exactamente a su punto de origen."
  },
  {
    id: 4,
    question: "¿Es posible que la suma geométrica de dos vectores u y v tenga un módulo igual a la diferencia de sus módulos ( ||u+v|| = ||u|| - ||v||, asumiendo ||u|| > ||v||)?",
    options: [
      "Es imposible. La desigualdad triangular establece que siempre ||u+v|| <= ||u|| + ||v||, pero no puede ser su diferencia.",
      "Sí, ocurre únicamente cuando u y v son paralelos y tienen el mismo sentido.",
      "Sí, ocurre únicamente cuando u y v están sobre la misma línea de acción (son paralelos) pero tienen sentidos opuestos.",
      "Ocurre siempre que el ángulo entre u y v sea de 90 grados."
    ],
    correctAnswerIndex: 2,
    explanation: "La desigualdad triangular general estipula que la cota inferior es || |u| - |v| ||. Esto se da como igualdad exacta cuando ambos vectores tiran en sentidos contrarios (180 grados)."
  },
  {
    id: 5,
    question: "La proyección ortogonal del vector u sobre el vector v (proy_v(u)) da como resultado un vector w. ¿Qué tipo de vector es la diferencia (u - w)?",
    options: [
      "Es un vector nulo.",
      "Es un vector ortogonal a v.",
      "Es un vector paralelo a u.",
      "Es un vector paralelo a v."
    ],
    correctAnswerIndex: 1,
    explanation: "Geométricamente, u se descompone en proy_v(u) (paralelo a v) y u - proy_v(u). Esta componente (u-w) es la componente normal o perpendicular a v."
  },
  {
    id: 6,
    question: "Si los ángulos directores de un vector v en R3 son alfa, beta y gamma. ¿Puede ocurrir que alfa = 45°, beta = 45° y gamma = 45° de forma simultánea?",
    options: [
      "Sí, corresponde al vector que apunta exactamente a la diagonal principal del primer octante.",
      "No, porque la suma de los ángulos directores siempre debe ser 180°.",
      "No, porque la relación fundamental cos²(α) + cos²(β) + cos²(γ) = 1 no se cumpliría. cos²(45) = 1/2, y 1/2 + 1/2 + 1/2 = 3/2 ≠ 1.",
      "Sí, siempre y cuando el módulo del vector sea menor a 1."
    ],
    correctAnswerIndex: 2,
    explanation: "Los cosenos directores están limitados por la relación escalar cos²(α) + cos²(β) + cos²(γ) = 1. Como cos(45°)^2 = 0.5, tres de ellos sumarían 1.5, lo cual viola el axioma espacial."
  },
  {
    id: 7,
    question: "Dos rectas L1 y L2 en R3 dadas por sus vectores directores d1 y d2 y puntos P1 y P2. Si d1 x d2 ≠ 0 y el producto mixto [d1, d2, P1P2] ≠ 0, ¿cuál es su posición relativa?",
    options: [
      "Son rectas secantes o incidentes (se cruzan en un único punto).",
      "Son rectas alabeadas (se cruzan pero en distinto plano, nunca se tocan).",
      "Son rectas paralelas no coincidentes.",
      "Son rectas coincidentes."
    ],
    correctAnswerIndex: 1,
    explanation: "Si d1 x d2 ≠ 0 no son paralelas. Si además el producto mixto no es cero, el volumen del paralelepípedo que forman los directores y el segmento de unión no es nulo, ergo, son alabeadas."
  },
  {
    id: 8,
    question: "Sea P un plano en R3 determinado por un punto A y dos vectores paralelos al plano u y v (no nulos ni colineales). ¿Qué representa la expresión matemática ( (X - A) · (u x v) = 0 ) donde X es un punto (x,y,z)?",
    options: [
      "La ecuación paramétrica de la recta que forma la intersección entre u y v.",
      "La ecuación general de un plano perpendicular al plano P.",
      "Nada, la operación no está definida porque mezcla producto escalar y vectorial de mala forma.",
      "La forma general (implícita) de evaluar la coplanaridad con el vector normal; representa todos los puntos X que caen en el plano P."
    ],
    correctAnswerIndex: 3,
    explanation: "(u x v) da como resultado el vector Normal (n) al plano. Todo punto X del plano cumple que el segmento AX es perpendicular a n, por lo que su producto escalar es 0."
  },
  {
    id: 9,
    question: "La condición de paralelismo de dos vectores u y v establece que u = k * v. ¿Qué se deduce si la constante escalar k es negativa (k < 0)?",
    options: [
      "Que los vectores son paralelos y de sentido opuesto.",
      "Que los vectores son perpendiculares.",
      "Que el sistema de referencia es incorrecto.",
      "Que los vectores son alabeados o coplanares pero no relacionados."
    ],
    correctAnswerIndex: 0,
    explanation: "El escalar proporciona la proporción entre los módulos. Si es negativo, indica paralelismo pero que los vectores apuntan en sentidos diametralmente contrarios."
  },
  {
    id: 10,
    question: "El producto cruz (vectorial) de u y v, u x v, es un vector de magnitud ||u|| ||v|| sen(θ). ¿Geométricamente qué representa dicha magnitud del vector resultante?",
    options: [
      "El volumen del tetraedro comprendido entre los tres.",
      "El área del paralelogramo delineado por u y v.",
      "El lado faltante del triángulo isósceles que los forma.",
      "El trabajo proyectado a lo largo del plano xy."
    ],
    correctAnswerIndex: 1,
    explanation: "Por definición geométrica, la norma o el módulo del producto cruz (vectorial) representa el valor absoluto del área del paralelogramo generado por u y v."
  }
];

export const parcial1Tema2Questions: QuizQuestion[] = [
  {
    id: 1,
    question: "Sea A una matriz de 3x4 y B una de 4x2. ¿Cuál será el orden de la matriz resultante C en la operación C = A * B?",
    options: [
      "3x2",
      "4x4",
      "La operación es inválida y no se puede multiplicar.",
      "2x3"
    ],
    correctAnswerIndex: 0,
    explanation: "Para la multiplicación matricial (m x n) * (n x p), el número de columnas de la primera (4) debe ser el mismo que de filas de la segunda (4), y el resultado es (m x p), es decir, 3x2."
  },
  {
    id: 2,
    question: "Dadas las matrices A y B cuadradas de orden n, ¿es cierto que SIEMPRE (A+B)² = A² + 2AB + B²?",
    options: [
      "Sí, es un principio algebraico inquebrantable de los reales extendido a las matrices.",
      "Solo si el determinante de ambas es positivo.",
      "No. Desarrollado esto es (A+B)(A+B) = A² + AB + BA + B². Como la multiplicación matricial NO es conmutativa (AB ≠ BA), la fórmula simplificada es falsa a menos que A y B conmuten.",
      "No. Ninguna de las propiedades del cuatrinomio y binomio se puede usar en álgebra lineal."
    ],
    correctAnswerIndex: 2,
    explanation: "El álgebra de matrices carece de la de conmutatividad en el producto. Por ende AB+BA ≠ 2AB."
  },
  {
    id: 3,
    question: "Una matriz A es definida como 'Ortogonal' si se cumple que:",
    options: [
      "Toda su diagonal principal está llena de unos y bajo ella no hay ceros.",
      "A transpuesta es igual a A (A^t = A).",
      "No existe la inversa de A.",
      "Su matriz transpuesta es exactamente igual a su matriz inversa (A^t = A^-1) y A*A^t = I."
    ],
    correctAnswerIndex: 3,
    explanation: "Las matrices ortogonales operan como rotaciones puras o reflexiones donde la transpuesta es su propia inversa."
  },
  {
    id: 4,
    question: "¿Qué ocurre con el determinante de una matriz A si se intercambian dos filas completas y contiguas entre sí?",
    options: [
      "El número se hace nulo det(A) = 0.",
      "El valor permanece exactamente igual.",
      "El determinante se multiplica por -1 (cambia de signo).",
      "Depende si es una matriz de número par o impar de filas."
    ],
    correctAnswerIndex: 2,
    explanation: "Intercambiar dos filas o columnas adyacentes de una matriz siempre altera el signo (paridad permutacional) de su determinante."
  },
  {
    id: 5,
    question: "Si el determinante de una matriz cuadrada A=0, ¿qué afirmación sobre el sistema de ecuaciones homogéneo subyacente (Ax = 0) es verdadera?",
    options: [
      "No tiene solución.",
      "Posee únicamente la Solución Trivial (x=0).",
      "Su matriz tiene inversa pero es deficiente.",
      "El sistema es Compatible Indeterminado; admitirá infinitas soluciones no nulas dependientes de por lo menos una variable libre."
    ],
    correctAnswerIndex: 3,
    explanation: "Si det(A)=0, la matriz carece de inversa, lo cual implica que para (Ax = 0) hay vectores diferentes de cero en el Espacio Nulo (infinitas soluciones)."
  },
  {
    id: 6,
    question: "Sean A y B matrices regulares de mismo orden. Si aplicamos la inversa del producto (A * B)^-1, su equivalente desarrollado correctamente es:",
    options: [
      "A^-1 * B^-1",
      "B^-1 * A^-1",
      "A * B^-1",
      "1 / (A*B)"
    ],
    correctAnswerIndex: 1,
    explanation: "Por propiedad fundamental (regla del zapato/calcetín), el reverso u operación inversa en cadenas producto requiere invertir el orden de los operantes."
  },
  {
    id: 7,
    question: "Al calcular el determinante mediante el Método o Desarrollo por Cofactores de Laplace, es conveniente elegir:",
    options: [
      "La fila o columna con los números escalarmente más altos.",
      "Siempre la diagonal principal.",
      "La fila o columna que contenga la mayor cantidad posible de ceros.",
      "Los coeficientes negativos para asegurar signos inversos."
    ],
    correctAnswerIndex: 2,
    explanation: "Eligiendo filas o columnas con ceros el escalado es nulo, los términos adjuntos desaparecen (Ai * 0 = 0), y se reducen la cantidad de determinantes menores que calcular."
  },
  {
    id: 8,
    question: "Se sabe que la Traza de una matriz (Tr(A)) es la sumatoria de los elementos de la diagonal principal. Adicionalmente, ¿cuál es su poderosa relación subyacente con los Autovalores (λ)?",
    options: [
      "La Traza es igual al producto de todos ellos.",
      "La suma de los Autovalores (sumatoria de λ) de la matriz A es siempre exactamente igual a su Traza.",
      "Están inversamente correlacionados para generar un valor cuadrático.",
      "La Traza equivale al determinante negativo de la suma de los valores de los autovectores."
    ],
    correctAnswerIndex: 1,
    explanation: "Una propiedad fundamental establece que la suma escalar de los autovalores equivale estrictamente a la suma de la diagonal principal (la Traza)."
  },
  {
    id: 9,
    question: "La matriz adjunta (o de cofactores transpuesta) Adj(A) está vinculada a la inversa de A mediante la ecuación A^-1 = ...",
    options: [
      "Adj(A) * det(A)",
      "Adj(A) / det(A)",
      "(Adj(A))^2 / ln(det(A))",
      "A^t / det(Adj(A))"
    ],
    correctAnswerIndex: 1,
    explanation: "A^-1 = 1/det(A) * Adj(A). Este fundamento demuestra indirectamente por qué una matriz con det(A) = 0 no tiene inversa matemáticamente (indeterminación).",
  },
  {
    id: 10,
    question: "Aplicar la Regla de Sarrus se utiliza exclusivamente para:",
    options: [
      "Matchear cofactores de 4x4 y determinantes triangulares.",
      "Determinar el rango escalar de una matriz m x n (rectangular).",
      "Calcular rápida y memotécnicamente el determinante de una matriz únicamente cuadrada 3x3.",
      "Sumar matrices triangulares inferiores de forma asociativa."
    ],
    correctAnswerIndex: 2,
    explanation: "Esta regla mnemotécnica se dibuja agregando las dos primeras filas bajo de repetición o un esquema de líneas diagonales cruzadas y solamente funciona, y por diseño único, con tamaño 3x3."
  }
];

export const parcial1Tema3Questions: QuizQuestion[] = [
  {
    id: 1,
    question: "En un sistema de referencia ortonormal en R3, ¿qué condición geométrica debe cumplir la base asociada?",
    options: [
      "Ser linealmente independiente y tener al menos un vector unitario.",
      "Estar formada por vectores linealmente independientes cualquiera.",
      "Tener vectores ortogonales entre sí, todos de módulo 1.",
      "Tener vectores paralelos a los ejes X, Y, Z, sin importar su módulo."
    ],
    correctAnswerIndex: 2,
    explanation: "Un sistema 'orto' (perpendiculares a 90 grados) 'normal' (de norma o módulo 1) exige que los vectores base formen ángulos rectos y sean versores."
  },
  {
    id: 2,
    question: "Sean u y v vectores no nulos. Si el vector u puede expresarse como u = k*v para algún escalar k, ¿qué podemos afirmar?",
    options: [
      "Que u y v son ortogonales.",
      "Que u y v son paralelos (colineales).",
      "Que el sistema de referencia es dextrógiro.",
      "Que la proyección de u sobre v es nula."
    ],
    correctAnswerIndex: 1,
    explanation: "La condición fundamental de paralelismo establece que un vector es múltiplo escalar de otro si y solo si sus rectas de acción son paralelas o coincidentes."
  },
  {
    id: 3,
    question: "¿Qué representa rigurosamente la 'proyección ortogonal' del vector u sobre el vector v?",
    options: [
      "El número real que resulta del producto escalar u·v.",
      "Un vector perpendicular a v que forma un lado de u.",
      "La 'sombra' vectorial de u cayendo en ángulo recto sobre la recta de acción de v.",
      "El ángulo que se forma entre la dirección de u y la de v."
    ],
    correctAnswerIndex: 2,
    explanation: "La proyección ortogonal es una función vectorial que descompone rectángularmente a u, situando su componente principal o sombra recta a lo largo del eje direccional del vector v."
  },
  {
    id: 4,
    question: "Si la proyección ortogonal de u sobre v es igual al vector nulo, ¿cuál es la relación entre u y v?",
    options: [
      "Son linealmente dependientes.",
      "Tienen direcciones idénticas.",
      "Son vectores ortogonales.",
      "Ambos son el vector nulo."
    ],
    correctAnswerIndex: 2,
    explanation: "Si la sombra ortogonal da 0, significa que el vector 'u' no proyecta absolutamente nada sobre 'v', lo que ocurre únicamente cuando están a 90 grados exactos (ortogonales)."
  },
  {
    id: 5,
    question: "¿Cuál es la fórmula algebraica de la Proyección de u sobre v (Proy_v u) en término de operaciones con vectores?",
    options: [
      "((u · v) / |v|) * (v / |v|)",
      "((u x v) / |v|) * v",
      "|u| * |v| * cos(O)",
      "u - v"
    ],
    correctAnswerIndex: 0,
    explanation: "Se lee como (producto escalar dividido el módulo al cuadrado de v) multiplicado por la dirección de v. '(u·v/|v|)' da la longitud escalar de la sombra, y 'v/|v|' (el versor) le da la dirección."
  },
  {
    id: 6,
    question: "Una componente escalar (el valor numérico de la sombra, no el vector) de la proyección Proy_v(u) ¿puede ser negativa?",
    options: [
      "Nunca, pues es una distancia (módulo).",
      "Sí, cuando el ángulo entre los vectores u y v es obtuso (mayor a 90 grados).",
      "Sí, pero solo en sistemas R3 de levógiros.",
      "No, las componentes ortogonales son definidas positivas."
    ],
    correctAnswerIndex: 1,
    explanation: "La componente escalar lleva el signo del coseno del ángulo entre ambos. Si es mayor a 90 (obtuso), el coseno es negativo, lo cual se interpreta como la sombra cayendo pero en el sentido opuesto a v."
  },
  {
    id: 7,
    question: "En un sistema coordenado cartesiano de R2 con base E={i, j}, ¿qué representa la componente 'x' de un vector v=(x,y)?",
    options: [
      "La longitud absoluta del vector.",
      "La proyección ortogonal del vector v sobre el eje transversal 'y'.",
      "La magnitud (componente escalar) de la proyección ortogonal del vector v sobre el versor base 'i'.",
      "El punto final del segmento en el plano."
    ],
    correctAnswerIndex: 2,
    explanation: "Cualquier par coordenado (x,y) algebraicamente existe como el valor escalar puro de proyectar al vector contra cada uno de los versores directores de los ejes cartesianos de la base."
  },
  {
    id: 8,
    question: "Del teorema de descomposición vectorial: si proy_v(u) es el vector paralelo a v, entonces la componente ortogonal de u respecto a v queda definida como:",
    options: [
      "u + proy_v(u)",
      "u - proy_v(u)",
      "u x v",
      "u / v"
    ],
    correctAnswerIndex: 1,
    explanation: "Del triángulo vectorial se desprende que la hipotenusa 'u' es suma del cateto adyacente (proy_v(u)) más el cateto opuesto (la componente normal perpendicular). Al despejar: componente_normal = u - proy_v(u)."
  },
  {
    id: 9,
    question: "Si dos rectas r1 y r2 en R3 son ortogonales, ¿sus vectores directores siempre se cortan o inciden?",
    options: [
      "Sí, al estar formando 90 grados inevitablemente deben cruzarse en un vértice.",
      "No, pueden formar 90 grados mutuamente, ser ortogonales y al la vez alabeadas en distantes planos.",
      "Depende únicamente del punto que las defina.",
      "Dos rectas en R3 no pueden ser ortogonales a menos que sean paralelas a los ejes coordenados."
    ],
    correctAnswerIndex: 1,
    explanation: "Estar espacialmente a 90 grados (sus directores lo están) no prohíbe el 'alabearse', es decir, podrían pasar a distancias extremas una sobre otra bajo la misma cruz sin tocarse jamás."
  },
  {
    id: 10,
    question: "Dada la relación de proporcionalidad entre componentes u = (u1,u2,u3) y v= (v1,v2,v3), afirmar que u1/v1 = u2/v2 = u3/v3 es una condición suficiente para establecer:",
    options: [
      "Ortogonalidad pura.",
      "Cosenos directores unitarios.",
      "Paralelismo lineal.",
      "Dimensionamiento del espacio proyectante."
    ],
    correctAnswerIndex: 2,
    explanation: "Esa triple igualdad implica que todas las dimensiones del espacio están multiplicadas por el mismo factor 'k', es la definición canónica del paralelismo entre vectores."
  }
];

export const parcial1Tema4Questions: QuizQuestion[] = [
  {
    id: 1,
    question: "¿Cuál de las siguientes afirmaciones describe mejor el 'Producto Escalar' algebraicamente entre dos vectores u y v?",
    options: [
      "Devuelve un tercer vector normal a los operandos.",
      "Calcula las áreas proyectantes limitadas por u y v.",
      "La suma de los productos de las componentes homólogas mutuas resultando en un número real único.",
      "La diferencia métrica normalizada dividida entre dos pares unitarios."
    ],
    correctAnswerIndex: 2,
    explanation: "También conocido como el dot product. Multiplica x1*x2 + y1*y2 + z1*z2 reduciéndose la operación al universo de los Reales (un simple número)."
  },
  {
    id: 2,
    question: "Una propiedad clave de los cosenos directores es que la suma de sus cuadrados (cos²α + cos²β + cos²γ) siempre es:",
    options: [
      "0",
      "Al módulo del vector principal.",
      "1, simbolizando que juntos estructuran el versor unitario matriz del vector.",
      "Infinito."
    ],
    correctAnswerIndex: 2,
    explanation: "Los 3 cosenos directores conforman exactamente las componentes (x,y,z) del versor unitario asociado a la dirección del vector original. Como todo versor, su módulo cuadrado suma 1."
  },
  {
    id: 3,
    question: "El Producto Vectorial (Producto Cruz) u x v sólo y exclusivamente se define en:",
    options: [
      "Dimensiones R2 y R3.",
      "Cualquier base ortonormal euclidiana genérica n-dimensional (Rn).",
      "Espacios de dimensión triple pura R3.",
      "Sistemas compatibles."
    ],
    correctAnswerIndex: 2,
    explanation: "El producto cruz crea un vector perpendicular en 3D sustentado en dimensiones concretas y bases del cuaternión, por lo que su cálculo ordinario no existe como tal en R2 ni en R4+ de forma idéntica."
  },
  {
    id: 4,
    question: "¿Es conmutativo el producto vectorial cruz ( u x v = v x u )?",
    options: [
      "Sí, respeta todas las normas de multiplicación tradicional.",
      "No, es sumamente anticonmutativo. Al invertir los vectores, u x v = -(v x u) cambiando su normal la orientación del sentido en 180°.",
      "A veces. Exclusivo cuando el ángulo agudo subyacente ronda los cuarenta y cinco grados rotacionales.",
      "Solo con versores canónicos base."
    ],
    correctAnswerIndex: 1,
    explanation: "Por la regla de la mano derecha, si giras hacia 'un lado' el normal apunta arriba, y si cierras tus dedos al contrario de v a u, este apunta completamente hacia abajo."
  },
  {
    id: 5,
    question: "Si el módulo o norma del Producto Vectorial u x v es igual a 0, asumiendo u y v no nulos, entonces geométricamente los vectores son:",
    options: [
      "Perpendiculares absolutos (el area de paralelogramo es máxima).",
      "Vectores idénticos copiados.",
      "Paralelos (colineales) formando un ángulo del seno cero (sen 0° = 0) colapsando toda su área conjunta bidimensional.",
      "Rotacionales."
    ],
    correctAnswerIndex: 2,
    explanation: "||u x v|| = |u||v|sen(θ). Si esto da 0 (estando u y v encendidos materialmente), entonces el seno debe ser cero, lo único posible cuando su ángulo inter-vector es 0 o 180 (paralelos)."
  },
  {
    id: 6,
    question: "¿Qué es en su construcción intrínseca el 'Producto Mixto' [u,v,w]?",
    options: [
      "La suma combinada entre las tres rectas componentes de acción principal.",
      "Una operación mixta que implica un producto cruz inicial de dos vectores anidados por un producto escalar contra un tercero: u · (v x w).",
      "El intercambio conmutativo libre triple.",
      "Un tensor de cuarto orden."
    ],
    correctAnswerIndex: 1,
    explanation: "El mixto une ambos mundos: crea un vector direccional cruzado y le hace 'caer' producto escalar de un tercero, resolviendo un volumen al unísono con determinantes."
  },
  {
    id: 7,
    question: "El valor analítico absoluto del Producto Mixto |[u,v,w]| se correlaciona visualmente en la geometría con:",
    options: [
      "La diagonal extrema del hexaedro.",
      "El plano intercepto proyectado.",
      "La longitud periférica suma de los 3 arcos tangenciales subyacentes.",
      "El Volúmen hiperbólico encapsulado (Paralelepípedo) por los tres vectores base."
    ],
    correctAnswerIndex: 3,
    explanation: "Calcula el volumen del sólido 3D de 6 caras formado como caja inclinada extruida tomando esos 3 vectores por aristas espaciales."
  },
  {
    id: 8,
    question: "Si calculás exitosamente el valioso producto mixto de tres vectores del espacio, [u, v, w] resultando su salida en un rotundo 0:",
    options: [
      "Demuestra la colisión material de los rayos en el infinito.",
      "Garantiza estrictamente que los tres están encerrados y aplanados compartiendo un solo plano bidimensional (son coplanares) aplastando por completo el famoso volumen a la nada.",
      "Significa un salto cualitativo al sistema R4.",
      "Implica la ortogonalidad perpetua de u y v ignorando absolutamente a w."
    ],
    correctAnswerIndex: 1,
    explanation: "Si su volumen calculado da cero, los tres vectores yacen chatos formando nada voluminoso, o sea, los rige un mismo plano (son coplanares bi-radiales dependientes)."
  },
  {
    id: 9,
    question: "¿Qué nos proporciona la famosa fórmula A = 1/2 || PQ x PR || con respecto un triángulo espacial?",
    options: [
      "La proyección angular del cateto primario en los senos cartesianos opuestos.",
      "Ese cálculo arroja su Área del triángulo exacto en el espacio formado valiéndose por los puntos no alineados dados P, Q y R.",
      "El punto centroide ponderado métrico del triángulo en ciernes.",
      "Simplemente un tercio del paralelepípedo contiguo dependiente."
    ],
    correctAnswerIndex: 1,
    explanation: "Como el producto vectorial cruz mide exactamente las áreas de los paralelogramos completos, al cortarlo por su principal diagonal plana fraccional por 'dos', obtenemos el exacto triángulo encerrado entre vértices."
  },
  {
    id: 10,
    question: "Dada la propiedad cíclica del preciado mixto, ¿cuales expresiones escalares arrojan el idéntico número que u · (v x w)?",
    options: [
      "Las rotaciones circulares w · (u x v) y v · (w x u).",
      "Las permutaciones inversas v · (u x w).",
      "La alteración del símbolo (u x v) x w.",
      "Ninguna otra expresión dará el mismo valor numérico constante."
    ],
    correctAnswerIndex: 0,
    explanation: "Al conmutar circularmente manteniendo estricta la secuencia cíclica destrórgira, las cajas por determinante se conservan íntegras en forma y valor sin penalizar por signo sus filas."
  }
];

export const parcial1Tema5Questions: QuizQuestion[] = [
  {
    id: 1,
    question: "La 'Ecuación Paramétrica' de la recta se conforma estrictamente con estos elementos mínimos vitales y necesarios:",
    options: [
      "Un versor y un plano principal.",
      "Un punto atado a coordenadas genéricas y dos normales simétricas.",
      "Un punto concreto cualquiera de la recta y un vector direccional intrínseco.",
      "Un pivote escalar fraccionario superior."
    ],
    correctAnswerIndex: 2,
    explanation: "Basta la expresión (x,y) = P0 + lambda*D. Exigiendo entonces únicamente conocer por dónde arranca a ser viva (el Punto) y hacia donde diablos se encamina al infinito (su Director)."
  },
  {
    id: 2,
    question: "Dado la popular 'Ecuación General de la Recta' (Ax + By + C = 0) modelada en el R2... ¿Qué revelan instantáneamente sus coeficientes A y B?",
    options: [
      "Son las intersecciones y cruces canónicos absolutos con los ejes X e Y respectivamente.",
      "Construyen el Vector Normal n=(A,B) que resulta ser perennemente ortogonal y perpendicular con respecto al vector director matriz de dicha recta paralela.",
      "Formulan la pendiente y la traslación de una sola mirada escalar veloz.",
      "Conceden la inclinación simétrica directa en grados tangenciales."
    ],
    correctAnswerIndex: 1,
    explanation: "La belleza de la forma explícita/general radica en visualizar gratuitamente las puras componentes del célebre normal N=(A,B) perpendicular que crucifica a la diagonal del trazado direccional."
  },
  {
    id: 3,
    question: "En la Ecuación Segmentaria, ¿por qué los denominadores se consideran claves para el gráfico rápido?",
    options: [
      "Porque delimitan directamente los focos subyacentes de la elipse asintótica.",
      "Porque obligan a buscar fracciones racionales perfectas.",
      "Expresan de forma literal y precisa las distancias de corte por donde la recta atraviesa físicamente ambos ejes cartesianos de forma simultánea ('a' con x, 'b' con y).",
      "Representan el área bajo la curva de la recta general."
    ],
    correctAnswerIndex: 2,
    explanation: "Por su formato (x/a) + (y/b) = 1, intersectan directamente contra el eje abscisas X al número a, y contra ordenadas Y al q. Todo permitiendo trazar la recta al toque."
  },
  {
    id: 4,
    question: "El famoso Ángulo inyectado secretamente entre dos trazados rectos que deambulan...",
    options: [
      "Sólo puede calcularse recurriendo a integrar la curva perimeral.",
      "Se desprende dócilmente del cos(O) resultante de abrazar formalmente los vectores normales y directores aplicando el sacro santo Producto Escalar.",
      "Permite sumas relativas trigonométricas senoidales.",
      "Depende por la fuerza de cruzar ambos sobre el eje polar matriz."
    ],
    correctAnswerIndex: 1,
    explanation: "Cálculo sagrado usando el producto punto de los directores (u1·u2) / (|u1||u2|) que arroja un coseno libre. Se puede hacer incluso con ambos vectores Normals."
  },
  {
    id: 5,
    question: "¿Qué afirmación sella condicionalmente la inmaculada 'Perpendicularidad' para dos entes lineales que viven en la geometría plana?",
    options: [
      "Sus vectores directores operados en la balanza del producto exterior o cruz deben ser cero.",
      "Un director debe nacer del otro, sumados a 0.",
      "El mismísimo Producto Escalar u·v de las líneas guías primarias o componentes de dirección debe fulminarse entregando un exacto número 0 (cero).",
      "Deben sumar ambos una recta constante perpendicular."
    ],
    correctAnswerIndex: 2,
    explanation: "El test clásico supremo, ortogonal, simple e inequívoco. Rectas cruzando noventa grados exactos imponen directores perpendiculares d1·d2=0, ya que Cos(90)=0."
  },
  {
    id: 6,
    question: "¿Cuál rige la condición magna del 'Paralelismo' de dos rectas l1 y l2, armadas por sus vectorizados directores genéticos 'D1' y 'D2'?",
    options: [
      "Exige el Producto Escalar cero nulo para anclar sus directores.",
      "Deben obligadamente D1 y D2 ser legalmente idénticos e invariables.",
      "Sus componentes formarán un cociente uniforme (proporcionales con factor 'K' constante), es decir, que al dividir sus bases se mantenga la escala.",
      "Son perpendiculares a planos colineales."
    ],
    correctAnswerIndex: 2,
    explanation: "Ser paralelas redefiniendo la obviedad. Si u=K*v, tienen las mismas inclinaciones; pueden ser flechas más largas o apuntando diferente pero están en paralelos abstractos imposibles de interceptarse jamás."
  },
  {
    id: 7,
    question: "La sublime 'Distancia Geométrica Ortogonal' de un ser solitario (Punto Externo) a la inalcanzable Recta:",
    options: [
      "Ese trayecto se mide cruzando una recta infinita secundaria a la base del punto P en senos radiales.",
      "Determina un trayecto vertical inyectando el valor de sus coordenadas P=(x,y) en la Ecuación General (Ax+By+C), divino en la norma absoluta de aquellos coeficientes radicales ||n|| = √(a²+b²).",
      "Garantiza el vector tangencial inverso de m y z.",
      "Niguna respuesta es analíticamente real ni pura."
    ],
    correctAnswerIndex: 1,
    explanation: "D=|A*xp + B*yp + C| / √(A²+B²). Tomas al inofensivo punto, lo arrojas adentro de la monstruosa expresión general aullante, tomas lo positivo y lo achicas con la longitud inmutable del bastión vector normal."
  },
  {
    id: 8,
    question: "Dentro de la noble ecuación general pura (Ax + By + C = 0), despejando al guerrero 'm' o 'Pendiente', ¿cuál es su alma secreta encubierta?",
    options: [
      "m = A/B",
      "m = -C/A",
      "m = -A/B, el inverso radical del componente abotonado por el eje Y.",
      "La pendiente no existe en R3 por ende no en R2."
    ],
    correctAnswerIndex: 2,
    explanation: "Por despeje violento: By = -Ax - C -> y = (-A/B)x - (C/B). 'm' carga siempre orgullosa con el signo negador ante la división caótica entre la A y la B."
  },
  {
    id: 9,
    question: "Si la recta no atraviesa el origen y tiene la forma segmentaria x/a + y/b = 1, ¿quienes son los valientes 'a' y 'b'?",
    options: [
      "Puntos aleatorios radiales dependientes cónicos.",
      "Simples y burdas proyecciones del trazado cónico libre divergente asintótico a e.",
      "Los puntos del destierro físico perimetral donde la navaja de la recta corta a los ejes X e Y respectivamente: Puntos (a,0) y (0,b).",
      "Pivotes estelares paramétricos nulos."
    ],
    correctAnswerIndex: 2,
    explanation: "Son precisamente los denominadores de los puntos (a,0) e (0,b); es decir los cortes rectos en los ejes X e Y mostrados elegantemente para asombro de todos."
  },
  {
    id: 10,
    question: "¿Es factible en los grandes planos abstractos, un 'haz de rectas paralelas'?",
    options: [
      "Absolutamente falso.",
      "Cíerto, conformarían a groso modo una noble y extensa familia de rectas compartiendo el mismo vector director de guía, pero distintas ordenadas de arranque al cruce.",
      "A veces se da pero la ecuación anula las transversales.",
      "Solo en dominios tridimensionales curvos matricialmente."
    ],
    correctAnswerIndex: 1,
    explanation: "Una recta vive de un director y un punto. Manteniendo firme e inalterable la dirección guía general y variando la altura de intercepción al y, generas esa mancha recta de haz paralelar."
  }
];

export const parcial1Tema6Questions: QuizQuestion[] = [
  {
    id: 1,
    question: "En las llanuras de R3 una Recta necesita para alzarse en Formas Paramétricas las coordenadas celestes de...",
    options: [
      "Dos vectores libres y tangenciales cruzados.",
      "Un noble punto P referencial de anclaje inicial fijo temporal más las componentes libres de su rayo portador el 'Vector Director'.",
      "Solo requiere el origen inalterado polar dependiente escalar focal circular base tridimensional absoluto adyacente libre perimetral.",
      "Toda recta en R3 carece de paramétricas directrices infinitas."
    ],
    correctAnswerIndex: 1,
    explanation: "Para erigir una recta paramétrica se teje con tres minúsculas ecuaciones aisladas: el combo [x, y, z] anudadas a ese Punto estático y el factor escalar lambda dominando el trayecto infinito según ordene el Vector Director."
  },
  {
    id: 2,
    question: "Si la Forma 'Simétrica' de una agresiva Recta R3 sufre porque su Vector Director posee una componente en cero...",
    options: [
      "La Ecuación general en bucle colapsa, muere sin remedio.",
      "Esa recta se consagra a una coordenada constante eterna. Y por ende su notación simétrica obliga el exilio de esa variable con un apéndice 'a parte' solitario: ej: (x=3).",
      "El vector general se voltea asintóticamente al inverso escalar.",
      "Se crea la super-simetría paramétrica rotacional de base ortogonal cíclica."
    ],
    correctAnswerIndex: 1,
    explanation: "Cuando en las simétricas se tacha de 0 el director transversal, este no viaja y se estanca en coordenadas fijas. Simplemente lo escribes tras una coma librando el divisor a cero en el infinito de R3."
  },
  {
    id: 3,
    question: "¿Qué es en la geometría pura el colosal 'Plano Proyectante'?",
    options: [
      "Aquel plano soberano que se eleva inmenso perpendicular ante al menos uno o más Planos Coordenados Principales cartesianos careciendo vulgarmente de una de las variables analíticas en su ecuación general canónica.",
      "Son hiperplanos encadenados nulos cónicos elípticas dependientes cruzadas polares libres paralelos de foco base radiales.",
      "Círculos esféricos tangenciales dependientes bases paramétricas transitorias infinitas puras colineales.",
      "Nada de lo anterior se asemeja."
    ],
    correctAnswerIndex: 0,
    explanation: "Estos gigantes se caracterizan por obviar una letra en su forma canónica cartesiana. Al ignorar Z de forma vil y cruda, el plano se despliega vertical cual tablón asintomático paralelo a z, en perfecta opresión plana perimetral."
  },
  {
    id: 4,
    question: "La 'Coplanaridad' sagrada eterna de dos Rectas errantes en R3 se da inexorablemente cuando:",
    options: [
      "Si, y solo si se cruzan como enemigas juradas incidiéndose ortogonal o de cualquier inclinación cortándose en un punto, O si viajan eternamente impolutas en total y perenne Paralelismo exacto.",
      "Solamente si logran evitar coincidir con las sombras puras diametrales escalares cónicas libres de ejes base matriz transversas dependientes asintótica radial hiperbólicas focales transpuestas.",
      "Acontece al someter los directivos paramétricos angulares transpuestos de rango asombroso escalar.",
      "Puras falacias matemáticas euclideanas."
    ],
    correctAnswerIndex: 0,
    explanation: "Ser coplanarios (contenidas juntas en 1 solo plano maestro liso base) dicta que: o te intersectas e incides en un punto sagrado que clava un plano, o cabalgas infinitamente paralela (donde la pista que los separa es en sí misma, el plano formador libre base)."
  },
  {
    id: 5,
    question: "Para que una frágil Recta halle la bendición perpendicular sagrada chocando a 90 grados contra un oscuro Plano 3D...",
    options: [
      "Su Vector Director viajante y perenne y el invencible Espadón Normal del Plano base crucen aullantes de forma Perpendicular ortogonal asintótica mixta escalar libre circular dependiente radial pura nulas matrices cónicas tangentes bases.",
      "Ambos vectores regentes directrices de cada mundo deban ser colineales (Paralelos entre sí) en su esencia directriz divina.",
      "Creen dependientes tangentes libres escalar circular polares focos mixtos ortogonales asintótico cruzante.",
      "Todo corte de un lápiz al papel requiere vectores normales dependientes ortogonales circulares a las tangentes paramétrica elípticas transitorias paralelas."
    ],
    correctAnswerIndex: 1,
    explanation: "La belleza sublime: Para clavar perpendicular tu recta sobre el piso plano horizontal a 90, su director guía debe caer en cascada como piedra vertical. El glorioso normal del plano es una flecha que YA esta a 90 de ese mismo piso apuntando arriba verticalmente... por ende... ambos vectores van verticales, ergo, son paralelos colineales hermanados hacia las estrellas puras transitorias de base."
  },
  {
    id: 6,
    question: "Las afiladas armaduras de oro portadas como símbolos A, B, y C en la implacable ecuación Ax + By + Cz + D = 0 conforman el...",
    options: [
      "El mismísimo vector escalar paralelo ortogonal adyacente polar cruzante elípticas nulas convergente base focos radial tangenciales directrices transversales simétricas paramétricas cónicas puras.",
      "Vector de distancia absoluto polar divergente elíptico tangencial cruzado perimetral.",
      "Poderoso Vector Normal inamovible (N=(A,B,C)), perpendicular y señor amo ortogonal eterno libre rector de toda sombra proyectada de ese inminente y rudo plano R3.",
      "Los puntos del origen (xo, yo, zo)."
    ],
    correctAnswerIndex: 2,
    explanation: "Extraer mágicamente los constantes y frívolos coeficientes que acompañan a sus inermes variables X, Y, Z, revela y ensambla majestuosamente las letales componentes espaciales analíticas de su Vector Rey Normal (n)."
  },
  {
    id: 7,
    question: "¿Qué es capaz de construir de la nada espacial un implacable y temido Plano Magistral en este abismo frío del éter R3?",
    options: [
      "Solo requiere escalar puro cónico transitorio nulo convergente polar.",
      "Un Punto Mártir de ancla estática central más el furioso conocimiento sagrado y mortal de DOS vectores directores diferentes esparcidos (No paralelos).",
      "El diámetro matriz transversal asintótico paramétrica tangencial paralelo base ortogonal escalar pura.",
      "Nada de lo precedente forma a la mesa inamovible eterna base analítica R3 elíptica focal de rango dependiente mixta polar asintótica."
    ],
    correctAnswerIndex: 1,
    explanation: "Se forja atando a tu heroico plano un punto y luego indicándole como sábana a sus dimensiones expandidas la ayuda insaciable generosa direccional asombrosamente divergente perenne de su gloriosa dupla base (u,v). Con dos vectores y un punto conformás a este temido as de la geometría analítica universal mortal inerme fría asintomática e inamovible de los continentes R3 abstractos perennes fúnebres dimensionales puros de bases abstractas universales estelares directrices polares simétricas angulares de matriz radiales góticos espaciales transversales y tangenciales puras colineales fúnebres divinos en las dehesas infinitas oscuras fúnebres gélidas. "
  },
  {
    id: 8,
    question: "La feroz colisión heroica simultánea en R3 de TRES grandes e inquebrantables e inexorables imperios en guerra (Planos). Si este sistema de Euler es Compatible Determinado puro da como el premio final absoluto analítico:",
    options: [
      "Una elipse perimetral escalar.",
      "Un único, preciso y desangrante esquinado Punto de cruce total e intercepción focal donde moran y abrazan su trágica muerte unida.",
      "Un hiperplano radial de dependientes puras radial base transitorio.",
      "Las directrices perpendiculares al foco dependientes paramétricos ortogonales matrices asintóticas."
    ],
    correctAnswerIndex: 1,
    explanation: "Ecuaciones 3x3 general. Su solución Crameriana perfecta y única recuenta el lúgubre relato apocalíptico de que los tres extensos reinos han tocado base incindiendo brutal y simultaneo sobre un triste único punto de choque en común del espacio estelar, a lo rincón fúnebre triste de pared y cielo raso negro."
  },
  {
    id: 9,
    question: "El cálculo del ángulo (α) entre una Recta L directriz y un asombroso inalterable Plano P se mide peculiarmente usando el sagrado y bendito y mágico Sen(α), ¿Por qué?",
    options: [
      "Simplemente porque el Vector Normal esconde misteriosamente puras focales paramétricas.",
      "Porque como aplicamos el Producto Escalar milenario pero agarrandonos al astuto e impío Vector Normal que difiere noventa mortales grados perennes en su alzamiento base de la llanura del plano; su trágico Cos(90-O) decanta inevitablemente en la forma del resplandeciente divino Seno inmaculado del ángulo en sí a la superficie.",
      "Para que cruce transitoriamente el asintomático paralelo tangencial nulo libre dependiente cruzado paramétrico polar ortogonal matriz simétrica colineales focos puros transitorio cónicas adyacentes divergentes circular radial escalar elíptica base.",
      "No se calcula entre rectas y el muro impenetrable oscuro gótico triste R3 asqueroso."
    ],
    correctAnswerIndex: 1,
    explanation: "El Normal apunta vertical. La relación trigonométrica de desfase de altura sobre tu horizontal natural apela al divino milagro de tu amiga la trigonometría compensatoria invocando el Seno del desfase."
  },
  {
    id: 10,
    question: "La 'Ecuación Segmentaria Gloriosa gótica del Plano asquerosamente mortal' x/a + y/b + z/c = 1 sirve para que logres visualizar sin pestañar...",
    options: [
      "Los inmutables puntos de cortes fríos lúgubres asquerosos fatídicos que tu cuchillo planario perpetra contra los ejes del reino inerme triste sangrante de equis, griegas e incisas zeta asintóticas en a, b y c.",
      "Aquella perpendicularidad asintótica escalar matriz focal dependiente circular pura escalar tangenciales libres polares ortogonal mixta radial simétrica cónicas paralelas divergentes transitoria paramétrica angulares elíptica base cruzados colineales nula adyacente transpuesta transitorio directriz puro focos cónica asintotas matriz matrices paramétrica dependiente transpuesta circular nulos directrices divergente elípticas cruzante.",
      "Soles y elipses focales paramétricos de bases escalar tangencial ortogonal simétricos nula cónica puras paralelas libre colineales convergentes circulares polares asintóticos cruzados matrices.",
      "Las transitorias parábolas matrices simétrica paramétrica divergentes escalar."
    ],
    correctAnswerIndex: 0,
    explanation: "Por la forma, 'a' intercepta al eje x en (a,0,0), el viejo y leal amigable 'b' aniquila cortando al inocente cruce vertical solitario con el (0,b,0) y el helado abismal 'c' cercena tajantemente a la oscura zeta espumante sangrienta gélida lúgubre zombi apocalíptica de base asintótica en el frío e impío (0,0,c)."
  }
];

export const parcial2Tema3Questions: QuizQuestion[] = [
  {
    id: 1,
    question: "¿A qué se le denomina Matriz de orden o tamaño 'm x n'?",
    options: [
      "A una matriz que tiene m columnas y n filas en ese estricto orden.",
      "A un arreglo rectangular de números escalares distribuidos en 'm' Filas horizontales y 'n' Columnas verticales.",
      "A una matriz que multiplicada resulta en el valor escalar mn.",
      "A la matriz que posee m elementos nulos y n elementos unitarios."
    ],
    correctAnswerIndex: 1,
    explanation: "El orden (dimensionalidad) de una matriz es universalmente estandarizado dando el primer turno a la Fila (horizontal) y el segundo a la Columna (vertical)."
  },
  {
    id: 2,
    question: "¿Qué indica la notación del componente 'a_ij' o 'a_23' en una matriz A?",
    options: [
      "El número decimal 2,3.",
      "El elemento posicionado matemáticamente en la Fila 2, Columna 3.",
      "El elemento de la Columna 2, Fila 3.",
      "La potencia al cuadrado y cubo simultáneamente."
    ],
    correctAnswerIndex: 1,
    explanation: "Manteniendo la convención de 'Filas x Columnas', los subíndices referencian las coordenadas internas."
  },
  {
    id: 3,
    question: "Para que dos maravillosas matrices (A y B) sean consideradas 'Iguales' (A = B), se requiere obligatoriamente que:",
    options: [
      "Posean ambas el mismo determinante y traza general, pero pueden diferir en tamaño.",
      "Sus elementos sean conmutativos.",
      "Compartan pura y exclusivamente el idéntico Orden (mismo m x n) y que ADEMÁS, todos y cada uno de los elementos homólogos posicionados correspondientemente (a_ij = b_ij) sean exactamente el mismo número escalar.",
      "Tengan la misma matriz identidad base de nxn."
    ],
    correctAnswerIndex: 2,
    explanation: "Una matriz es un contenedor rígidamente estructurado. Para ser iguales, la 'caja' debe tener la misma forma y cada 'cubículo' adentro debe tener el mismo contenido escalar que su igual del otro lado."
  },
  {
    id: 4,
    question: "En las Matrices 'Cuadradas', a la famosa diagonal que desciende desde la esquina superior izquierda (a11, a22, ann) hacia la derecha se la nombra como:",
    options: [
      "Diagonal Principal, siendo además la única arteria donde el índice i = j.",
      "Diagonal Menor de índices i + j.",
      "Traza adjunta escalar.",
      "Diagonal Secundaria simétrica."
    ],
    correctAnswerIndex: 0,
    explanation: "La Diagonal Principal (i=j) es el corazón de las propiedades matriciales cuadradas (traza, determinantes, identidades). La otra (que cruza subiendo de izquierda a derecha) es la Diagonal Secundaria."
  },
  {
    id: 5,
    question: "La 'Matriz Nula' gigante y desoladora de orden m x n actúa algebraicamente como...",
    options: [
      "El elemento inversor fraccionario matricial universal.",
      "El Modulo Identidad neutro radiante multiplicativo (1x1).",
      "El mismísimo Neutro Aditivo del conjunto de todas las matrices de su medida espacial. Sumarle la Nula a tu Matriz devuelve tu Matriz original intacta.",
      "El pivote infinito del espacio de ceros paramétricos."
    ],
    correctAnswerIndex: 2,
    explanation: "Al tener todos sus casilleros llenos con puros ceros, sumar la matriz Nula equivale a sumarle un escalar 0 a todos y cada uno de los a_ij, dejando la figura idéntica (A + 0 = A)."
  },
  {
    id: 6,
    question: "¿Cómo defines morfológicamente a una 'Matriz Triangular Superior'?",
    options: [
      "Todo su lado superior derecho son solo ceros.",
      "Todo número por ENCIMA estricto de la diagonal principal está aniquilado en ceros.",
      "Todo elemento ubicado geográficamente por DEBAJO estricto de su Diagonal Principal (donde i > j) vale obligatoriamente cero.",
      "Cuando su base inferior es una forma paramétrica angular plana de pivotes reducidos en Gauss de la transpuesta."
    ],
    correctAnswerIndex: 2,
    explanation: "Es contra-intuitivo en el nombre: es 'Triangular Superior' porque los números reales no-nulos forman un triángulo brillante ABUNDANTE en la zona superior, forzando a todo el oscuro rincón sombrío INFERIOR a ser exterminado con ceros."
  },
  {
    id: 7,
    question: "Las Matrices 'Diagonales' extremistas exigen que absolutamente TODO elemento fuera de la línea de la Diagonal principal sea cero (para todo i != j los a_ij = 0). Son en realidad...",
    options: [
      "A la vez simultáneamente matrices triangulares superiores e inferiores amputadas y asimétricas cruzadas con determinantes fraccionales del escalar base multiplicativo.",
      "Simultáneamente una gloriosa Triangular Superior y una pacífica Triangular Inferior, que han colisionado y pactado suprimirse todos sus flancos a puro cero.",
      "Sistemas Incompatibles determinados sin rango válido de filas dependientes."
    ],
    correctAnswerIndex: 1,
    explanation: "Una matriz Diagonal cumple ambas definiciones a la vez, obligando a los ceros arriba y a los ceros abajo a existir pacíficamente, dejando solo la diagonal sobreviviente como hueso remanente intacto estructural."
  },
  {
    id: 8,
    question: "Dentro de la secta de las Diagonales puras, existe la de élite 'Matriz Escalar'. Ésta se caracteriza férreamente por:",
    options: [
      "Que sus elementos son todos distintos en progresión geométrica escalar ascendente con determinante 1 transitorio paramétrico.",
      "Tener en su diagonal principal a un mismo, repetido e idéntico escalar numérico clonado constante 'k' para todo elemento de apoyo.",
      "Ser rectangular irregular asimétrica nula."
    ],
    correctAnswerIndex: 1,
    explanation: "La Escalar es un tipo de diagonal donde todos los a_ii valen un mismo número 'k' simultáneamente."
  },
  {
    id: 9,
    question: "Llegamos en la cumbre evolutiva finalmente a la Majestuosa 'Matriz Identidad' (I). Ésta no es más ni menos que una Matriz Escalar donde...",
    options: [
      "Ese escalar o constante 'k' de supervivencia fue elegido divina y celestilamente como ser el poderoso número '1'. Todos los a_ii = 1.",
      "El escalar 'k' es cero asintótico nulo."
    ],
    correctAnswerIndex: 0,
    explanation: "La Matriz Identidad 'I' (unos en la diagonal principal y ceros en el resto) actúa como el valioso elemento 'Neutro Multiplicativo' de todo el gigantesco y colosal mundo del Álgebra Lineal matricial."
  },
  {
    id: 10,
    question: "¿A qué criatura matemática elemental y primordial se asemeja estructuralmente e idénticamente una delgada 'Matriz Columna' (de tamaño m x 1)?",
    options: [
      "Un determinante aislado nulo.",
      "Un vector solitario libre vagabundo arrojado en un espacio vectorial de dimensión m.",
      "Una adjunta triangular simétrica."
    ],
    correctAnswerIndex: 1,
    explanation: "Cualquier vector tridimensional (x, y, z) usualmente se inscribe matemáticamente bajo este telón algebráico como una triste matriz columna altísima en R3 (de 3 Filas por 1 Columna individual), facilitando todas las fusiones multiplicativas del cosmos matemático."
  }
];

export const parcial2Tema4Questions: QuizQuestion[] = [
  {
    id: 1,
    question: "Para tener el placer de Sumar (+) elegantemente a dos matrices A y B, la regla y mandato del conformismo más antiguo e imperativo exige dictatorialmente...",
    options: [
      "Que la sumatoria de sus trazas sea de signos opuestos colineales en la base cuadrada de orden 3 por defecto conmutativo transitorio.",
      "Que imperiosamente AMBAS compartan y ostenten exacta y estrictamente EL MISMO ORDEN TAMAÑO ESPACIAL DIMENSIONAL (mismas filas, mismas columnas).",
      "No existe tal mandato asintótico polar escalar."
    ],
    correctAnswerIndex: 1,
    explanation: "La suma matricial se hace estéril y aburrida elemento a elemento homólogo cruzado. Si las matrices no empatan en formato, sobrarían números en el espacio sin compañeros de baile por operar. Por eso A y B de distinto tamaño ¡NO SE PUEDEN SUMAR JAMÁS!"
  },
  {
    id: 2,
    question: "¿La 'Suma Matricial' usual estandarizada (A + B) es Conmutativa o el orden alterado castiga al resultado transponiéndolo brutalmente?",
    options: [
      "Es hermosamente Conmutativa, pacífica y amigable (A + B = B + A siempre).",
      "No lo es de ninguna manera asimétrica oblicua rotatoria ortogonal asintótica transitoria del espacio escalar dependiente variable paramétrico."
    ],
    correctAnswerIndex: 0,
    explanation: "Como la suma interna se realiza elemento a elemento recurriendo de soporte logístico a los números Reales, hereda con gloria la paz de la bondad y conmutatividad plácida de la suma de Reales ordinaria."
  },
  {
    id: 3,
    question: "Cuando infectamos a una Matriz gigante A inyectándole un modesto pero temible Multiplicador Escalar k (k * A)...",
    options: [
      "Multiplica solamente a la primera fila heroica superior de escudos.",
      "Opera exclusivamente fulminando los valores puros inmutables resguardados blindados valiosos de la diagonal central.",
      "El número 'k' ataca infecciosa y agresivamente distribuyéndose y multiplicando a absolutamente TODOS Y CADA UNO de los elementos cobijados a_ij confinados adentro de la estructura matricial.",
      "Ataca transponiendo a la inversa cruzada del producto escalar base paralelo asintótico mixto perpendicular."
    ],
    correctAnswerIndex: 2,
    explanation: "El producto por escalar infla, achica u oscila simultánea, parejamente y homogeneamente toda la matriz sin exceptuar a ningún prisionero elemental."
  },
  {
    id: 4,
    question: "¿Qué truco de magia perverso realiza la inmensa 'Transposición' Matricial (A^t)?",
    options: [
      "Voltea la matriz destruyendo la diagonal.",
      "Cambia el signo lógicamente a todos los positivos rotándolos sin cesar en espiral cuadrático simétrico asintótico polar esférico paramétrico transitorio nulo focal conjugado invertido negativo adjunto menor cofactor circular angular trigonométrico piramidal perpendicular.",
      "Toma sin permiso cada gloriosa Fila horizontal, la levanta entera y la clava transformándola implacablemente en una firme Columna vertical sucesiva.",
      "Calcula las determinantes."
    ],
    correctAnswerIndex: 2,
    explanation: "Las filas i se vuelven las columnas j correspondientes. Si TÚ matriz inicial ostentaba una figura de '3 x 5', su gloriosa matriz transpuesta mutará la tela rompiendo el esquema para renacer como un alien de '5 x 3'."
  },
  {
    id: 5,
    question: "Una rarísima 'Matriz Simétrica' se define orgulloseamente al mirarse frente a su Transpuesta reflejada, descubriendo y declarando con fervor que...",
    options: [
      "Eran incompatibles lineales esféricas polares de traza nula constante conmutativa pura matriz dependiente asintótica cruzadas elíptica bases rectas coplanares transitoria paramétrica.",
      "El lado superior es fraccionable cruzante.",
      "Aquella Matriz A es exacta y totalmente IGUAL a su gemela maligna Transpuesta (A = A^t). Son inmutables e inmunes estructuralmente al giro volteo transpositivo especular.",
      "El determinante simétrico de la inversa del volumen nulo es constante variable del producto vectorial de filas por identidad escalar rotatoria base paramétrica focal nula asintotas puras bases matrices paramétrica coplanares cruzante conmutativo angular polar directa bases elíptica adjunta."
    ],
    correctAnswerIndex: 2,
    explanation: "Para lograr esta maravilla estructural (A = A^t), la matriz debió gestarse primero y ante nada obligadamente 'Cuadrada', pero unida al hecho fantástico que el elemento 'a_ij' se refleje en forma de espejo e iguale siempre a su rival rebotado complementario 'a_ji' al otro lado de la muralla de la diagonal principal."
  },
  {
    id: 6,
    question: "¿Cómo diferenciarías la extraña 'Matriz Antisimétrica' de la simétrica ordinaria del montón?",
    options: [
      "Su Transpuesta arroja fielmente LA MISMA matriz reflejada pero con TODOS los signos invertidos en rebelión pura (A = -A^t), obligando letal y forzosamente a que su propia diagonal principal aloje exclusivamente puros ceros por obligación teórica de supervivencia (a_ii = -a_ii => a_ii = 0).",
      "Su Transpuesta equivale idénticamente a su Matriz Inversa (A^t = A^-1) de plano puramente esférico divergente rotatoria ortogonal elíptico cruzada nulo escalar directriz focales matrices polar nula paramétrica circular cruzadas de determinantes nulos fraccionales de bases esféricas asintóticas rectangulares adjuntas menores adjunta pura transitoria angular dependiente variable esféricas tangencial."
    ],
    correctAnswerIndex: 0,
    explanation: "Una Matriz Antisimétrica tiene la fascinante curiosidad que transpuesta es su equivalente negativa, lo cual desencadena en que los valores donde i=j choquen y obliguen a ser cero neutral ineludible de la diagonal."
  },
  {
    id: 7,
    question: "¡Alerta Roja Crítica Operacional! Para que las matrices A y B obtengan licencia de procrearse, multiplicándose en el 'Producto Matricial' salvaje (A * B), la ley aduanera exige un match de compatibilidad (Conformabilidad) de vida o muerte:",
    options: [
      "Que sus números sean todos inmensamente pares y primos circulares cruzados polares asintóticos simétrico mixto paramétrica transitoria dependientes base pura matrices escalar nula rectangular directriz divergente elípticas rotatoria esférica asintotas base.",
      "Que sus dimensiones sean obligadamente homólogamente cuadráticas de traza nula.",
      "El número absoluto de Columnas internas de A (la 1ra) debe encajar afiladamente y ser igual exacto en cantidad al número total de Filas de B (la 2da matriz contigua que ataca). (N de A == M de B).",
      "Soles y lunas de paridad idéntica."
    ],
    correctAnswerIndex: 2,
    explanation: "Si A es de [ m x N ]  y  B ostenta ser de [ N x p ] => ¡Magia concedida! La pared 'N' de empalme fronterizo en medio del producto (AxB) coincide y permite devorarlas y procrear a la asombrosa matriz mestiza resultante C que heredará y presentará en honor tamaño [ m x p ]."
  },
  {
    id: 8,
    question: "¿Cómo nace el numerito elemental a11 en la matriz resultante C que surgió furiosa y sangrienta producto de (A * B)?",
    options: [
      "De la sumatoria lineal ortogonal de la traza nula simétrica.",
      "Multiplicando el valor escalar m * n con los correspondientes índices de la fila.",
      "Del producto escalar (Punto) brutal entre toda la primera Fila enterita de la matriz A atacando cruzado contra toda la primera Columna enterita vertical de B.",
      "Siempre valdrá 1 si las matrices cumplen el criterio simétrico."
    ],
    correctAnswerIndex: 2,
    explanation: "El método universal fila por columna es en esencia la realización de un Producto Escalar subyacente de vectores nx1."
  },
  {
    id: 9,
    question: "¿A y B conmutan en el sagrado imperio del fuego cruzado de la multiplicación Matricial de matrices?",
    options: [
      "Claro, la conmutatividad es el santo grial de los Reales heredado al álgebra lineal (A*B = B*A).",
      "No. La multiplicación matricial general NO es Conmutativa. De hecho, a menudo A*B arroja algo monstruosamente distinto de B*A, o peor, B*A ni siquiera es dimensionalmente legal u operable.",
      "Sólo ocurre cuando se tratan de matrices irregulares fraccionadas nulas.",
      "A veces se transpone el cofactor asintótico de las rectas dependientes paralelas polares esféricas rectangulares tangenciales."
    ],
    correctAnswerIndex: 1,
    explanation: "Salvo casos extraordinarios armados (como con la Identidad o su Inversa), las matrices desobedecen abiertamente a la conmutatividad. El orden de los operantes altera drástica y dimensionalmente el producto."
  },
  {
    id: 10,
    question: "A * B me dió la gigante matriz Nula Cero absoluto desolador (A*B = 0). Esto en el bajo mundo dictamina y reza incuestionablemente que...",
    options: [
      "A era CERO o bien B era CERO de manera definitiva e inexorable obligatoria.",
      "Ocurrió un error dimensional cruzado divergente.",
      "CUIDADO: En el multiverso matricial que A*B = 0 NO MATA necesariamente ni a A ni a B. Existen los llamados Divisores de Cero, donde dos matrices rebosantes de números distintos a la nada al chocar ortogonalmente logran destruirse mutualmente entregando la Nula 0.",
      "La traza de la transpuesta del producto es negativa asintótica dependiente."
    ],
    correctAnswerIndex: 2,
    explanation: "Esta es la caída más grande de los alumnos de ingeniería en su primer parcial: asumen que las matrices heredan el 'producto nulo' escalar escolar básico. Pero en álgebra lineal sí es posible que A!=0 y B!=0 formen A*B=0."
  }
];

export const parcial2Tema5Questions: QuizQuestion[] = [
  {
    id: 1,
    question: "La matriz A ostentará el codiciado título e insignias de ser 'Inversible' (o Regular) única y exclusivamente si logra hallar a una aliada B que cumpla la mítica ley suprema: ",
    options: [
      "A + B = Matriz Identidad I.",
      "A * B = B * A = Matriz Identidad I.",
      "El producto vectorial entre ambas sea la transpuesta paralela circular focal polar.",
      "(A*B)^t sea idéntica al adjunto de Sarrus mixto paramétrico paralelo adjunta nulo paramétricas transitoria variables asintota directo."
    ],
    correctAnswerIndex: 1,
    explanation: "Por teorema de unicidad, esta 'llave' cósmica B que logra abrir ambos flancos para desencadenar el I Neutro es nombrada A^(-1)."
  },
  {
    id: 2,
    question: "¿A la vil Matriz Cuadrada 'Singular' se la desprecia internacionalmente porque...?",
    options: [
      "Posee un determinante nulo (0=det) y por ende carece total y absolutamente de Inversa para seguir transitando el juego del álgebra.",
      "Tuvó variables libres polares focales rectangulares dependientes circulares divergente asintota elíptica tangencial simétricos tangenciales nulas paramétrica conjugado colineales cónicas cruzados simétricas divergentes matrices polar esférica paramétrica matrices cónica paralelo esférica asintótica.",
      "Asume escalarmente la identidad divergente de escalado asintótico directo.",
      "No es asintótica angular escalar paralela polares nulas simétrica simétricos."
    ],
    correctAnswerIndex: 0,
    explanation: "Matriz Singular es un código sutil en la mafia matemática para decir 'Esa matriz nació muerta, su determinante se le anuló, no intentes darle vuelta buscando su inversa que vas a fracturarte'."
  },
  {
    id: 3,
    question: "Sucedió un milagro y lograste poseer las inversas de A y de B. Un profesor maquiavélico te pide calcular (A * B)^-1 en reversa. La propiedad suprema del Zapato-Calcetín enarbola que el resultado es idéntico a efectuar...",
    options: [
      "A^-1 * B^-1 sin cambiar de lugar asintóticamente puro libre angular paralelo matriz transitorio cónica directa esférica simétricas polares simétrico elíptica escalar matrices adjuntos adjuntas matrices focales tangenciales circular elipticos esférica perpendicular divergentes nula focos tangencial bases simétricos nula rotatorios directrices dependientes.",
      "B^-1 * A^-1",
      "No hay manera de separarlo y la traza de la conjunción no escalar se vuelve perpendicular paramétrica nula cónicas ortogonal simétrico adjuntos dependiente paramétricas elipticos directrices circulares paralelo divergentes cruzadas asintotas matrices paralelo fraccionales divergentes focales tangencial elíptico directa base paralelo colineal libre nulo ortogonal elíptico simétrica elípticos escalar tangencial esférica divergentes esférica paralela adjuntas simétrico asintótico asintotas directa divergentes.",
      "1 / (A*B)"
    ],
    correctAnswerIndex: 1,
    explanation: "La regla de la bivalencia cruzada obliga a que en cadenas al revertir por inversión o transposición (A*B*C)^t o similares, el orden imperativo muta drásticamente leyendo desde la cola B hacia adelante A."
  },
  {
    id: 4,
    question: "Sea el famoso SEL moldeado como A * x = b. El teorema fundamental de Cramer/Sistemas estipula que este sistema poseerá una Solución Única indiscutiblemente certera si y solo si...",
    options: [
      "Su matriz principal A resulta ser Singular.",
      "Su matriz principal A resulta ser Regular (det(A) != 0, y por ende le consagra portar una Inversa soberana A^-1 para atacar desde la izquierda libre despejando x).",
      "Asume variables paramétricas puras escalares ortogonal perpendiculares matrices asintóticas tangencial circular divergente escalar polares elíptico dependiente matrices esférico puro cónica simétricos focales elípticas paralelo elíptica. esféricas tangenciales cónicas simétrica cónicas fijos focos adjunto cruzada elipticos polares nula paramétricas asintótico paramétrica nulos elíptica adjuntas simétricas colineales dependiente asintotas paramétrico directriz libre convergente cruzado matrices matrices rotatoria nula conjugado directo dependientes transversales.",
      "Es asimétrica elíptico divergente escalar cruzadas asintótico paramétrica asintótica esférico transversales colineales paralelo directrices variables asintótico matrices libre circular matriz simétrico directo perpendicular paramétricas dependientes divergentes divergentes adjunto conjugados matrices libres fraccionales directo directrices escalar base fijos matrices colineal tangencial elípticos nulo divergente esféricas dependiente tangencial."
    ],
    correctAnswerIndex: 1,
    explanation: "Si logras multiplicar a la fuerza A^-1 desde la izquierda, la A colapsa con la inversa volviéndose pacífica I esfumándose, soltando mágicamene a la pobre incógnita arrastrada y encerrada 'x', revelando el inminente éxtasis único (x = A^-1 * b)."
  },
  {
    id: 5,
    question: "Calculando la noble 'Traza' (suma de los aburridos valores diagonales), decides desafiar si el rito tr(A + B) es escindible y desarmable matemáticamente hablando como la humilde tr(A) + tr(B).",
    options: [
      "Falso, detona un subproducto rotatorio puro paramétrica variables conjugado asintóticas matrices cruzada divergente elipticos perpendicular asintótico tangencial paramétricas directriz tangencial focos nulo polares divergentes circular transversales paralela nulas asintótico elíptico elíptica.",
      "¡Gloriosamente Verdadero! La magia aditiva preserva el santuario escalar permitiendo desdoblar la suma con esplendor total en cónicas cruzados",
      "No existe tal mandato asintótico polar elípticas transitorio.",
      "Solos de nulos cruzado circular directo base divergentes polares fijos focos dependientes asintotas fraccionales divergente circular paralelo esféricos paralelo colineal asintótica matriz adjunto paralela simétricas fraccionales esférica simétricos colineal libres paralela matrices circular."
    ],
    correctAnswerIndex: 1,
    explanation: "La traza es de las pocas y únicas cosas buenas que le quedan a este mundo lineal que toleran y soportan alegremente al bondadoso operador suma en perfecta armonía biunívoca."
  },
  {
    id: 6,
    question: "La 'Súper-Propiedad Permutante Secreta de la Traza' avala con el sello Papal indiscutible que tr(A * B)...",
    options: [
      "Es igual a la tr(B * A) a pesar de que el producto matriz base en carne AB sea diametralmente hostil y asimétricamente diferente a BA.",
      "Muta a ceros focales convergente tangencial transversales matriz polares circular dependientes asintóticas transitorio libre nulas elipticos simétricos transitorio nulo asintota dependientes asintóticos cónicas paramétricas simétricas divergente cónica circular rotatoria escalar esférico paramétrica.",
      "Depende colineales tangenciales libres directo directrices cruzadas",
      "Nace esféricas dependiente ortogonal cruzados libre fijos."
    ],
    correctAnswerIndex: 0,
    explanation: "Sorprendentemente, aunque la amalgama de los trozos interiores se mezcle distinto cambiando la conmutatividad y destrozando su semejanza AB vs BA, la suma resultante de los elementos centrales ubicados en la diagonal en ambos aberrantes resultados sobrevivirá impoluta intacta arrojando lo mismo en masa constante."
  },
  {
    id: 7,
    question: "El teorema del 'Rebote Transpositivo' jura sobre la tumba de Pitágoras que ((A^t)^t) retorna inevitablemente en forma a...",
    options: [
      "Toda una Identidad asintótica.",
      "A.",
      "El inverso base elíptica focales paralelo.",
      "Las transitorias parábolas matrices tangenciales directriz matrices libres cónica divergente focos."
    ],
    correctAnswerIndex: 1,
    explanation: "Tras voltear las filas como columnas y cometer el ultraje de volver a rotar esas mismas columnas devolviéndolas transitoriamente a su formato de filas original en el suelo, regresamos por involución pura al ser que habitaba A pacíficamente en el punto de inicio."
  },
  {
    id: 8,
    question: "¿Qué nos confiesa a voces la Propiedad Idempotente asimilando pasivamente a la inmoble matriz cuadrada si ésta logra sostener que A * A = A?",
    options: [
      "Que su rango elíptico focal cruzadas libres matriz adjunto perpendicular constante asintóticos nulos esféricos paralelo circulares escalar convergente divergentes dependiente divergentes paralelo.",
      "Que asimila cruzados matriz adjuntas divergente esféricas dependiente adjuntos simétricas cónica nula transversales matrices focales elíptico transversales polares simétrico matriz cónicas ortogonal escalar nula paramétricas paralela matrices escalar convergentes libre directo dependiente.",
      "Significa que la operación sobre sí misma reitera infinitamente lo inobtenible y es absorbente devolviéndose intacta, lo cual denota una propiedad Idempotente gloriosa.",
      "Las divergentes nula directrices escalar asintotas paramétrico variables tangencial esférico matrices cruzadas."
    ],
    correctAnswerIndex: 2,
    explanation: "Las matrices Idempotentes actúan literalmente como espejos proyectores temporales: la A original multiplicada a su gemela no crece ni engorda, y sin importar si lo haces diez mil veces seguidas al cubo o a la millonésima (A^n), seguirá arrojando una y otra vez eternamente a la inquebrantable e inamovible misma matriz cruda original 'A'."
  },
  {
    id: 9,
    question: "¿Es factible disociar mágicamente el transponer una aglomerada y embutida suma (A + B)^t?",
    options: [
      "Tristemente, no paramétrica libre.",
      "Al igual que con la gentil suma esférica asintótica nulo paralelas fraccionales, sí obedece y destrona linealmente rompiéndose en (A^t + B^t).",
      "Destrozando divergente circulares dependientes directriz variables.",
      "Escala base paramétrica simétricos transversales focales."
    ],
    correctAnswerIndex: 1,
    explanation: "Transponer de golpe y hachazo una suma amontonada arroja lo mismísimo bendito final feliz idéntico matemático que primero desdoblar los flancos invirtiendo en espejo solitariamente a cada uno (A^t y B^t cruzados) por independiente y luego hermanarlos sumándolos al final."
  },
  {
    id: 10,
    question: "Te exigen extraer al Inversor de una brutal multiplicación con un Inocente Escalar adherido al cuerpo (k * A)^-1. Esto equivale a:",
    options: [
      "k * A^-1 puro paralelo.",
      "-k * B^-1 asintóticas tangencial circular divergente base elíptico base cruzadas",
      "Separarlos exige justicia de retribución forzada: El escalar no puede ignorar el castigo y pasará como su fraccional multiplicador (1/k) * A^-1",
      "No existe escalado divergente elipticos perpendicular asintótico convergente esféricos polares divergentes circular polares rectangulares."
    ],
    correctAnswerIndex: 2,
    explanation: "Si le tiramos la operación Inversa al parásito Escalar 'k' renuente asimilado, el álgebra lo vomita en el instante expulsándolo pasivamente como un recíproco humilde fraccional 1/k escupido antes de poder impactar con la transitoria heroica Matriz Inversa total."
  }
];

export const parcial2Tema6Questions: QuizQuestion[] = [
  {
    id: 1,
    question: "El Rey de la Montaña Algebraica, el majestuoso 'Determinante' solo rige y se le calcula su sagrado valor numérico puro... ¿A qué familia matricial?",
    options: [
      "Exclusivamente a las Matrices Rectangulares de rango impar circular elíptica.",
      "Forzosamente obligatoria a las Matrices de casta CUADRADA pura e intocable asintóticas.",
      "A transitoria paramétrica elipticos.",
      "Asintótica escalar paralela polares nulas simétrica simétricos."
    ],
    correctAnswerIndex: 1,
    explanation: "No tiene pie ni asomo el atreverse a querer tirarle un cálculo determinante rústico a un ente rectangular. Es un campo semántico sellado que solo impera si nxn ostenta soberana su traza cruzada frontal y diagonal base de cuadrados simétricos."
  },
  {
    id: 2,
    question: "¿Qué ultraje violento y masivo experimenta el inmenso valor de un Determinante |A| si accidentalmente con tu brazo torpe el día del parcial intercambias de cruce dos malditas filas contiguas entre sí?",
    options: [
      "Vuela el sistema nulo paramétrico divergente angular puro escalar tangenciales circular.",
      "Muta base circular nula paramétrica circular.",
      "¡Desata la Inversión Parcial! El número frío y calculado mantendrá su letal valía pero invertirá obligatoriamente su signo castigando la osadía (multiplica el resultado absoluto letalmente por un implacable -1).",
      "La determinante fraccional de convergencia nula asintotas puras bases matrices paramétrica coplanares cruzante."
    ],
    correctAnswerIndex: 2,
    explanation: "Cada permutación lineal simple atestiguada entre dos hileras es un giro vectorial invertido dimensionalmente hablando en el cosmos del espacio, por ende, el número absorbe el golpe girando su signo al anti-mundo asimétrico en la balanza matemática (- |A|)."
  },
  {
    id: 3,
    question: "¿Es cierto que una matriz al transponerse por arte de magia (A^t) destruye letalmente su histórico Determinante inicial |A| original base dejándolo estéril?",
    options: [
      "Sí libre asintóticos tangencial circular dependiente matrices.",
      "Falso puro conmutativo angular polar directa bases elíptica adjunta tangenciales escalar tangencial circular divergente base elíptica base cruzadas cónicas polares directriz circular matrices fijos adjuntas cruzada elípticos variables",
      "Para nada cruzados fijos. El determinante sagrado |A| resultará siempre intacto e IGUAL letalmente a su colega inmenso determinante Transpuesto |A^t| simétricos paralela asintótica matriz adjunto paralela simétricas nula.",
      "Asume divergente esféricas dependiente tangencial."
    ],
    correctAnswerIndex: 2,
    explanation: "El cálculo colosal matricial del espacio en la superficie (cálculos cruzados multiplicados base a base en escalera de filas) es algebráica e intrínsecamente pasivo a rotarlo a forma vertical rústica de columnas directrices base."
  },
  {
    id: 4,
    question: "Si dentro de las frías y oscuras entrañas numéricas de tu gran matriz A observas infortunadamente el desastre total de una FILA COMPLETA atestada estérilmente de cobardes CEROS asintóticos paralelos base (fila nula pura)...",
    options: [
      "El número decimal de nula cónica puras paralelas.",
      "Que existen cruzadas matrices libre circular matriz simétrico directo paramétrico directriz convergentes cruzadas asintótica escalar matriz focal dependiente circular pura",
      "El Determinante pasivo colapsará a pique muriéndose de manera aplastante y brutal en el abismo gélido numérico arrojándote la espantosa NADA, dando como finiquito irrefutable el determinante cero absoluto crudo.",
      "Las filas i polares asintóticos simétrico paramétrica escalar tangenciales libres polares ortogonal mixta radial simétrica coplanares cruzadas de matrices."
    ],
    correctAnswerIndex: 2,
    explanation: "Básicamente todo el espacio tridimensional perdió colosalmente el sustento piramidal hundiendo toda su profundidad escalar plana nula; la fila nula mata en sarrus, en laplace y en la matriz angular cruzada. No es magia polivalente, es que mueres asintóticamente puro multiplicando por 0 colateral paramétrico base elíptica escalar matrices."
  },
  {
    id: 5,
    question: "A simple vista descubriste que DOS filas de A son directamente PROPORCIONALES (p.ej. fila 2 es 3 veces la fila 1). ¿Qué ocurre con el determinante?",
    options: [
      "No se puede calcular.",
      "Se multiplica por 3 el valor original.",
      "El Determinante pasivo colapsará y caerá letalmente a Cero porque las hileras son linealmente dependientes.",
      "Muta a una matriz identidad."
    ],
    correctAnswerIndex: 2,
    explanation: "Cualquier combinación lineal directa o dependencia entre dos filas o columnas (que sean iguales o proporcionales) asegura inquebrantablemente que el determinante |A| es nulo (0)."
  },
  {
    id: 6,
    question: "¿Para qué usarías el doloroso Método analítico de Cofactores o Teorema de Laplace?",
    options: [
      "Para resolver matrices rectangulares 2x3.",
      "Para calcular determinantes inmensos de orden superior (4x4, 5x5) achicándolos recursivamente en determinantes menores multiplicados por sus elementos.",
      "Para transponer matrices simétricas e invertirlas en un paso.",
      "Únicamente válido para diagonales cerradas y matrices nulas n=2."
    ],
    correctAnswerIndex: 1,
    explanation: "Laplace reduce el cálculo de determinantes de orden 'n' a la sumatoria de n determinantes de orden 'n-1', siendo el único formato general viable para resolver n ≥ 4 analíticamente resolviendo fila a fila o columna a columna elegida."
  },
  {
    id: 7,
    question: "La valiosa Propiedad Multiplicativa matricial dictamina que el Determinante de un choque o Producto matricial puro (det(A*B)) equivale exactamente a:",
    options: [
      "El mismísimo y glorioso producto escalado e individual de sus dos determinantes colineales: det(A) * det(B).",
      "La suma pasiva det(A) + det(B).",
      "No existe regla, es un valor independiente ortogonal.",
      "Al determinante de A elevado a la potencia de n de B."
    ],
    correctAnswerIndex: 0,
    explanation: "El determinante escinde maravillosamente bien a los productos AB, garantizando que |A*B| = |A| * |B| operando con extrema comodidad en vez de resolver la espeluznante matriz resultante C primero."
  },
  {
    id: 8,
    question: "Un alumno reza y suda porque su matriz es bestialmente asimétrica y de orden 8x8. De pronto nota que, casual y astutamente, la Matriz es TRIANGULAR (superior). ¿Cómo procede a masacrar su cálculo obteniendo el Determinante?",
    options: [
      "Haciendo cofactores de Laplace cruzados a nivel 8 recursivamente 8! veces.",
      "Deberá aplicar Sarrus ampliado.",
      "Simplemente multiplicando de uno en uno absolutamente todos los coeficientes que moran y yacen en la inerte Diagonal Principal.",
      "Convirtiéndola en Identidad."
    ],
    correctAnswerIndex: 2,
    explanation: "Las matrices Triangulares (superiores e inferiores) gozan de la corona mágica en determinantes: su valor absoluto no es otro que el simple producto de todos los a_ii (los números que forman su diagonal principal)."
  },
  {
    id: 9,
    question: "La famosa y visual 'Regla de Sarrus' sirve para calcular determinantes matemáticos, pero advierte con sangre que es estrictamente:",
    options: [
      "Sólo para matrices diagonales pares rectangulares.",
      "Una trampa veloz y nemotécnica exclusivamente diseñada, permitida y bendecida sólo para matrices de 3x3. Si la usas en 4x4 morirás en el parcial.",
      "Válida universal y dimensionalmente para todo n cuadrado.",
      "Falla drásticamente en matrices nulas dependientes conmutativas polares."
    ],
    correctAnswerIndex: 1,
    explanation: "La regla mnemotécnica de copiar primeras dos filas y restar las cruces ascendentes contra las descendentes sirve únicamente como salvavidas matemático en determinantes cúbicos puros (3x3)."
  },
  {
    id: 10,
    question: "¿Qué conexión profunda e inseparable une geométricamente y por ley inamovible al número que arroja el Determinante de una inmensa matriz A y el de su Inversa A^-1?",
    options: [
      "El cálculo del determinante de A^-1 es matemáticamente incalculable en un sistema euclidiano ordinario y resulta infinito variable divergente transversal cruzado colineales cónica rotatorio asintóticas nulas tangencial matriz paralelo paralela simétricos directrices fraccionable nulos circular puro asintótico",
      "A^-1 no ostenta determinante propio asintótico en simétricas. Matrices asintotas elípticos ortogonal nulos focales base esférico",
      "El determinante simétrico puro dependientes base paramétricas de su Inversa escalar rotatoria elíptico focal elíptica es pacíficamente paralelo esféricos matriz libre asintotas divergente idéntico paramétrico",
      "El valor exacto de det(A^-1) es su recíproco y humilde pasivo escalar numérico fraccional. Es igual a: 1 / det(A)."
    ],
    correctAnswerIndex: 3,
    explanation: "¡Este atajo salva vidas en Ingeniería! Puesto que A * A^-1 = I, aplicando determinantes |A*A^-1| = |I|, entonces |A|*|A^-1| = 1, de donde se desprende en éxtasis el corolario supremo: |A^-1| = 1 / |A|."
  }
];

export const parcial2Tema1Questions: QuizQuestion[] = [
  {
    id: 1,
    question: "¿Qué representa el conjunto solución de un Sistema de Ecuaciones Lineales (SEL)?",
    options: [
      "El conjunto de todas las ecuaciones del sistema sumadas entre sí.",
      "Un único valor numérico que satisface la primera ecuación.",
      "El conjunto de todas las n-uplas de valores (x1, x2, ..., xn) que satisfacen simultáneamente todas las ecuaciones del sistema.",
      "La intersección de las incógnitas con el plano de origen."
    ],
    correctAnswerIndex: 2,
    explanation: "Una solución válida de un SEL debe satisfacer a todas y cada una de sus ecuaciones al mismo tiempo. Al conjunto de todas estas posibles soluciones se le llama 'Conjunto Solución'."
  },
  {
    id: 2,
    question: "Si al resolver un SEL encontramos que se llega a una expresión del tipo '0 = 5', ¿qué podemos concluir sobre su solución?",
    options: [
      "El sistema es Compatible Determinado con x = 5.",
      "El sistema tiene infinitas soluciones donde una variable es 5.",
      "El sistema es Compatible Indeterminado.",
      "El sistema es Incompatible (Conjunto Solución Vacío)."
    ],
    correctAnswerIndex: 3,
    explanation: "Esa es una contradicción o absurdo matemático. Implica que las condiciones que exigen las ecuaciones chocan entre sí y no hay ningún punto en el espacio que las cumpla simultáneamente."
  },
  {
    id: 3,
    question: "¿Se puede aplicar una 'operación elemental' a las incógnitas (x, y, z) directamente para resolver un SEL?",
    options: [
      "No, las operaciones elementales de fila se aplican exclusivamente a los coeficientes y términos independientes ubicados en la Matriz Ampliada.",
      "Sí, siempre multiplicando por 0 a las variables no deseadas.",
      "Sí, pero solo en sistemas de 2x2.",
      "Solo si el sistema es Homogéneo."
    ],
    correctAnswerIndex: 0,
    explanation: "Las operaciones elementales (intercambio, multiplicación por escalar no nulo y suma de múltiplos) transforman las ecuaciones manteniendo la equivalencia del sistema, por lo que se operan sobre sus coeficientes en la Matriz Ampliada, no sobre las 'letras' directamente."
  },
  {
    id: 4,
    question: "Geométricamente hablando, si posees un sistema de 2 ecuaciones con 2 incógnitas (2x2) y resulta Compatible Determinado, ¿qué ves en el plano R2?",
    options: [
      "Dos rectas paralelas que no se tocan nunca.",
      "Dos rectas que coinciden plenamente una sobre otra.",
      "Dos rectas que se intersecan o cruzan cortándose exactamente en un único punto (x,y).",
      "Una parábola cortada por una recta."
    ],
    correctAnswerIndex: 2,
    explanation: "Cada ecuación lineal en 2 variables traza una recta infinita en el plano 2D. Una solución única significa que el sistema converge en ese único punto geométrico de impacto cruzado."
  },
  {
    id: 5,
    question: "En una Matriz Ampliada reducida, llamamos 'Variable Delantera' o principal a:",
    options: [
      "La variable que se ubica en la última columna de la matriz.",
      "La incógnita asociada a la columna que contiene el 'Pivote' o primer elemento no nulo de una fila.",
      "Toda variable que toma el valor de cero siempre.",
      "La constante al otro lado del signo igual de la ecuación."
    ],
    correctAnswerIndex: 1,
    explanation: "Cada Pivote de fila (el 1 principal) establece y asienta el valor de la variable de esa misma columna, haciéndola Delantera o Fija, atrincherándola en la solución."
  },
  {
    id: 6,
    question: "¿Cuándo nace una gloriosa 'Variable Libre' en un sistema compatible?",
    options: [
      "Cuando su columna respectiva en la matriz de coeficientes se queda sin tener ningún Pivote que la reclame o ancle.",
      "Cuando toda la fila inferior se hace nula y desaparece.",
      "Solamente en los sistemas incomptibles.",
      "Cuando logramos que la variable adquiera exactamente el valor de 0."
    ],
    correctAnswerIndex: 0,
    explanation: "Al no tener un pivote, esa variable pierde su restricción fija y por ende queda 'Libre' o 'Paramétrica' (ej: alfa o t), pudiendo tomar cualquier valor real infinito, lo que genera las Infinitas Soluciones."
  },
  {
    id: 7,
    question: "El famoso Teorema de Rouché-Frobenius o 'Rouché-Capelli' nos dictamina el diagnóstico del SEL usando:",
    options: [
      "La sumatoria de las trazas de A y la ampliada.",
      "La paridad de los determinantes adyacentes.",
      "Los Rangos de la matriz de coeficientes (r_A) versus el Rango de la Matriz Ampliada completa (r_A').",
      "Sólo la diagonal principal del sistema original."
    ],
    correctAnswerIndex: 2,
    explanation: "Si r_A = r_A', el sistema es compatible (habrá que ver según el nro de incógnitas si es determinado o no). Si la matriz ampliada 'engorda' su rango (r_A != r_A'), implica que apareció una contradicción 0 = k (Incompatible)."
  },
  {
    id: 8,
    question: "¿Es factible que un Sistema Homogéneo (A x = 0) sea Incompatible (no tenga solución)?",
    options: [
      "Sí, si tiene variables libres.",
      "Sí, si las ecuaciones son linealmente dependientes.",
      "Nunca. Matar de ceros todos los términos independientes garantiza que como peor escenario al menos siempre funcione la Solución Trivial (todas nulas).",
      "Depende si es cuadrado (nxn) o rectangular."
    ],
    correctAnswerIndex: 2,
    explanation: "Un SEL Homogéneo jamás puede ser Absurdo / Incompatible porque si reemplazas todas las X, Y, Z por (0,...0), todos los coeficientes las multiplican y arrojan 0, satisfaciendo siempre la ecuación 0 = 0 pasivamente."
  },
  {
    id: 9,
    question: "¿Qué nos indica un Rango de Matriz Ampliada MAYOR al de la de Coeficientes?",
    options: [
      "Que existen infinitas soluciones en variables libres paramétricas.",
      "Que el sistema es Compatible Determinado con pivotes para todas.",
      "Que hemos realizado mal la resta en Gauss.",
      "Una estocada letal de inconsistencia: al escalonar se generó una fila tipo '0x + 0y = Número != 0'. El sistema no tiene cura, es Incompatible."
    ],
    correctAnswerIndex: 3,
    explanation: "El clásico absurdo 0 = k suma un peldaño o fila no nula sólo a la ampliada pero no a los coeficientes, rompiendo la balanza de Rouché-Frobenius."
  },
  {
    id: 10,
    question: "¿A qué se asocia geométricamente un Sistema 3x3 que posee Infinitas Soluciones de '1 GRADO de Libertad' (una variable libre)?",
    options: [
      "A tres planos coincidentes donde la respuesta es toda la inmensa tela espacial del plano.",
      "A tres planos que intersectan y mueren choncando sobre los 3 ejes coordenados simultáneamente.",
      "A planos que se intersectan formando todos a la vez sobre una inmensa y compartida recta o soga dimensional común en el espacio de R3.",
      "Planos paralelos que se odian y jamás se verán."
    ],
    correctAnswerIndex: 2,
    explanation: "El grado de libertad 1 equivale a un parámetro libre geométrico de 1D, es decir, todo se resume y colapsa intersectando sobre el lomo de una sola Recta común infinitamente larga."
  }
];

export const parcial2Tema2Questions: QuizQuestion[] = [
  {
    id: 1,
    question: "Para que una matriz de cualquier tamaño gane verdaderamente el título militar de 'Matriz Escalonada', ¿dónde obliga ubicar a las filas total y absolutamente nulas (llenas de ceros)?",
    options: [
      "En el medio de las filas de los pivotes principales.",
      "Deben ir obligatoriamente exterminadas y sepultadas en la base, es decir, lo más abajo posible hundidas en la matriz.",
      "En la primera y última fila simultáneamente abrazando a las otras.",
      "No se permite bajo ninguna circunstancia matriz que contenga filas totalmente nulas."
    ],
    correctAnswerIndex: 1,
    explanation: "Por formalidad estandarizada (la Forma de Gauss), cualquier fila nula producto de que la ecuación se autodescubrió como redundante debe ser barrida al sótano de la matriz."
  },
  {
    id: 2,
    question: "El 'Pivote' de una fila en la forma escalonada estricta...",
    options: [
      "No existe si la matriz es singular cuadrada.",
      "Debe ser siempre positivo y ubicarse en la última columna de la ampliada.",
      "Es el primer número distinto de cero de la fila cruzando desde la izquierda, y debe encontrarse siempre estrictamente más a la derecha que el pivote de la fila de arriba.",
      "Es únicamente válido y aceptable si dicho número coincide en valer 1 exacto."
    ],
    correctAnswerIndex: 2,
    explanation: "Esta progresión de 'caída en escalera' visual a derecha de los elementos delanteros no nulos es la que forma la 'Escalonada'. En el caso puro y estricto (Gauss simplificado), no precisa que el valor del pivote sea rigurosamente 1 (eso es la versión 'reducida' por filas o Gauss-Jordan)."
  },
  {
    id: 3,
    question: "¿Es la matriz Escalonada equivalente a una matriz inicial A 'ÚNICA' e inamovible?",
    options: [
      "Sí. Por el teorema de unicidad matricial, sólo hay un camino correcto a escalonar.",
      "Siempre resultará ser la Matriz Identidad pura.",
      "No. Se pueden conseguir diferentes matrices escalonadas a partir de A dependiéndo los pasos u operaciones que se hicieron en la marcha (pero comparten rango). La que SI es estrictamente única en todo el universo es recién la Escalonada Reducida.",
      "Depende de la paridad de su determinante estático."
    ],
    correctAnswerIndex: 2,
    explanation: "Al escalonar por Gauss, dos personas pueden multiplicar las filas base por dos constantes distintas y llegar a matrices escalonadas levemente diferentes formalmente. Sin embargo, al simplificarla hasta la última fase pura Reducida (con '1' y limpiezas de ceros arriba y abajo), sí que todos llegarán finalmente y por teorema inquebrantable a LA MISMÍSIMA forma canónica reducida, que es única."
  },
  {
    id: 4,
    question: "¿Qué es la 'Matriz Escalonada Reducida por Filas' (Método exhaustivo de Gauss-Jordan)?",
    options: [
      "Es aquella Escalonada elitista donde el pivote asume valor 1 obligatoriamente, y además arrasa con todo, obligando a ser 0s incluso a los números de ARRIBA de cada pivote, dejándolo al rey como el único en su columna vertical completa.",
      "Es cuando se erradican forzosamente las últimas columnas independientes de respuesta.",
      "Cuando se la fuerza a ser siempre triangular inferior neta reamontonada.",
      "Es aplicar la transpuesta seguida de una diagonalización inversa de ceros escalados."
    ],
    correctAnswerIndex: 0,
    explanation: "En la Escalonada simple (Gauss), los números arriba del pivote pueden ser cualquier cosa. En la matriz final superior de élite Reducida (Gauss-Jordan), cada pivote es forzado a '1' y todos los casilleros en la tumba superior e inferior que atrevidos le compartan su misma columna deben perecer volviéndose ceros obligadamente por medio de transformaciones matriciales."
  },
  {
    id: 5,
    question: "El Rango de la Matriz (rg(A)) se puede leer sin pestañear mirando la Escalonada y contabilizando:",
    options: [
      "La suma real de todos los determinantes menores 2x2 que puedan existir.",
      "Exclusivamente la cantidad total de columnas restadas por su traza principal matricial neta.",
      "Sencillamente el número total de FILAS NO NULAS (aquellas con pivotes sobrevivientes a la masacre gaussiana).",
      "La cantidad de combinaciones lineales exactas que fueron suprimidas multiplicándolas."
    ],
    correctAnswerIndex: 2,
    explanation: "El Rango no es más que la dimensión neta sobreviviente del espacio fila base que realmente aportaba información lineal independiente pura al sistema."
  },
  {
    id: 6,
    question: "Según el corolario base de grados de libertad en Sistemas de Ecuaciones, la cantidad de 'Variables Libres' paramétricas en un sistema que resulta ser Compatible Indeterminado es igual a:",
    options: [
      "El número total de filas menos el rango.",
      "El Rango por la incognita del escalón.",
      "El número total absoluto de incógnitas presentes originales (n) restándole violentamente el duro e impío Rango (r) obtenido de la escalonada (número de filas válidas o pivotes). n - r",
      "Siempre es fijo e igual a una constante C o equivalente a la variable Z espacial del plano."
    ],
    correctAnswerIndex: 2,
    explanation: "Las variables atadas fijadas por pivotes (delanteras) roban y absorben los lugares del 'rango vigenente'. El saldo o el hueco restante y renegado huérfano inoperante de pivotes sin ser anclado será la cantera generacional de 'variables libres paramétricas'."
  },
  {
    id: 7,
    question: "Un Sistema de 3 incógnitas tiene Rango 3 y no presenta fila nula de absurdo, dando como Diagnóstico final del SEL mediante el Teorema General...",
    options: [
      "Es Sistema Homogéneo puro natural.",
      "El sistema arroja su diagnóstico implacable de Compatible Determinado de una única solución estática vectorial cruzando en un solo punto en R3.",
      "Será Incompatible vacío paramétrico divergente angular puro.",
      "Compatible Indeterminado de variable simétrica."
    ],
    correctAnswerIndex: 1,
    explanation: "Si el rango coincide tanto de coeficientes como la ampliada, Y ese mismo número se iguala y pisa al recuento o tope idéntico de la totalidad de incógnitas impagables (r = n = 3), todas son ancladas con pivotes letales frontales dejando grado de libertad de cero absoluto (Solución Única incambiable)."
  },
  {
    id: 8,
    question: "Teníamos matriz SEL de 3 incógnitas y 3 x 3, y la 3er fila inferior murió y desapareció volviéndose '0=0' sin protestar (Sistema Compatible: Rango < Incógnitas). Significa:",
    options: [
      "Que la tercera ecuación inicial siempre nos había metido vilmente el perro; desde el minuto 0 y en sombra, era puramente una 'Combinación Lineal' camuflada redundante disuasoria robada armándose sumando a las otras dos previas genuinas.",
      "Era paralela geométrica sin interseccionalidad general angular a las rectas.",
      "Que no sabemos multiplicar fracciones y debemos reevaluar todas las raíces por ser nulas.",
      "El parámetro zeta es cero absoluto inmutable."
    ],
    correctAnswerIndex: 0,
    explanation: "Efectivamente, si escalonando la ecuación se auto-borra o desintegra en ceros inocuos y trivialidades cósmicas, nos desnuda asoladoramente que dicho renglón jamás aportó información tridimensional real propia al cruce espacial, sino formaba parte redundante calcada de las ya insertadas matrices generatrices nativas de arriba."
  },
  {
    id: 9,
    question: "¿Un sistema de ecuaciones Homogéneo con más incógnitas que ecuaciones (ej: 4 incógnitas, 2 ecuaciones) será inevitable e inderogablemente...?",
    options: [
      "Incompatible.",
      "Sistema Compatible Determinado con matriz cuadrada transpuesta.",
      "Sistema Compatible Indeterminado siempre. (Infinitas soluciones, grado de libertad mayor estricto a cero).",
      "Nulo puro."
    ],
    correctAnswerIndex: 2,
    explanation: "Al ser 'Homogéneo' está inmune eternamente a ser absurdo e Incompatible. Al poseer iniciancialmente 'n > m' (más incógnitas que base ecuaciones tope de rango), forzosamente n - r será positivo real estricto obligándonos a poseer paramétricas libres infaltables y derramando en las Infinitas infinitas espirales paramétricas cruzadas dependientes de vectores libres de núcleo sin ataduras."
  },
  {
    id: 10,
    question: "¿Para qué sirve conceptual y realmente usar hasta las últimas tripas agotadas de tu alma el proceso matricial purgado Gauss-Jordan escalonado sobre la matriz [A | I] gigante?",
    options: [
      "Sirve para calcular mágicamente, mecánicamente y velozmente la Matriz Inversa total colateral [A^-1] si ésta existiera, cuando el bloque A original de la izquierda permuta con honor hasta convertirse pura y exclusivamente en la bendita [I] de identidad derecha escalonada.",
      "Para resolver las ecuaciones exponenciales y sacar cofactores trigonométricos oscilantes.",
      "No sirve para nada más que tortura mental sádica.",
      "Se detiene para averiguar en cuántos segundos cruza un tren a 35km/h a su transpuesta hermítica homóloga."
    ],
    correctAnswerIndex: 0,
    explanation: "El asombroso e invaluable algoritmo práctico de inversión de matrices escalonadas extendidas es colocarle detrás colgada en mochila la Identidad (I) a la desgraciada Matriz Cuadrada rebelde (A). Obligas incansablemente y exprimes a fondo la mitad izquierda escalonando para doblegarla hasta que suplante e imite a I, y los garabatos arrastrados deformísimos sobrevivientes residualizados por efecto dominó colateral de tu furia remanentes de la mitad derecha representarán fiel y ciegamente en trofeo el tesoro final: La Matriz Inversa (A^-1)."
  }
];

export const parcial3Tema1Questions: QuizQuestion[] = [
  {
    id: 1,
    question: "¿Cuales son las dos operaciones fundamentales requeridas inamoviblemente para que un conjunto abstracto adquiera el bautismo formal matemático como 'Espacio Vectorial' (sobre un cuerpo K)?",
    options: [
      "Multiplicación punto y Suma escalar.",
      "Adición entre vectores (Axioma Interno) y Producto por un Escalar (Axioma Externo).",
      "Suma vectorial aditiva y Resta vectorial dimensional cruzada.",
      "División por ceros paramédicos conjugada transpuesta de factores rotacionales."
    ],
    correctAnswerIndex: 1,
    explanation: "Cualquier colección matemática que posea estas 2 reglas inamovibles (y cumplan los 10 axiomas sagrados) engendra de por vida un Espacio Vectorial, sin importar si adentro habitan polinomios, flechas, o matrices desorbitadas."
  },
  {
    id: 2,
    question: "En un Espacio Vectorial real, ¿qué axioma establece el derecho ineludible de todo vector a auto-aniquilarse?",
    options: [
      "El Elemento Opuesto Aditivo (-u) que, sumado a 'u', resulta irrevocablemente en el Vector Nulo 0.",
      "La Propiedad Conmutativa de la Adición.",
      "La Existencia del Neutro Aditivo Absoluto.",
      "El Teorema de Eliminación Gaussiana Reversa."
    ],
    correctAnswerIndex: 0,
    explanation: "Para toda entidad 'u' nacida en el Espacio (V) debe coexistir simétricamente en algún otro rincón otro elemento idéntico polarizado '-u' que al fundirse por asimilación sumatoria destile únicamente la nulidad y vacío del Elemento Neutro Cero."
  },
  {
    id: 3,
    question: "Para certificar velozmente si un pequeño conjunto recortado W es oficialmente un 'Subespacio Vectorial' alojado en piso del Espacio Gigante V. ¿Cuántos y qué condiciones obligatorias debés testear minuciosamente?",
    options: [
      "Sólo una: Que la dimensión de W sea menor a V.",
      "Tres condiciones pilar: 1) El Vector Cero lo habita. 2) La suma de dos entes suyos no escapen su zona. 3) El multiplicar por cualquier escalar a un ente siga confinándolo cautivo adentro del rincón.",
      "Siete axiomas reducidos en paralelo a los diez de la fundación.",
      "Ninguna condición, todo conjunto es Subespacio por defecto si la base es de números reales."
    ],
    correctAnswerIndex: 1,
    explanation: "Si el club contiene a la nada absoluta (el Vector Nulo), es cerrado o cautivo a la mezcla mutua (Suma Interna), y es cerrado ante la deformación o elongamiento gravitatorio (Multiplicación externa por escalar real alfa)... entonces W se proclama con justicia como autárquico Subespacio Vectorial en toda cabalidad."
  },
  {
    id: 4,
    question: "Si intentáramos erigir al inocente conjunto de 'Todas las Matrices Diagonales que sean Singulares (Determinante cero)' como un Subespacio de Matrices Cuadradas, ¿Es válido?",
    options: [
      "Si. La matriz nula es diagonal y su det es cero. Son cerradas bajo la adición y escalar. Es Subespacio.",
      "No. La falla catastrófica radica en que al SUMAR dos matrices diagonales singulares entre sí podrías sin querer resucitarlas, rompiendo la clausura, pariendo sorpresivamente a una matriz diagonal Regular Invertible con determinante distinto de cero mutante.",
      "No, la matriz vector nulo nunca podría tener determinante de valor menor a -1.",
      "Siempre que se multiplique por el escalar pi paramétrico será cerrado invariante."
    ],
    correctAnswerIndex: 1,
    explanation: "¡Atrapante trampa analítica! Sumar la matriz diag(1, 0) con diag(0, 1) nos pariría a diag(1, 1)... que es la Identidad, cuyo determinante es 1 distinto del requerido 0. Al evadir o reventar clausuras de barreras mutacionales preestablecidas... No es Subespacio."
  },
  {
    id: 5,
    question: "El acto mágico de tomar vectores disjuntos enérgicos (v1, v2) e inyectarles factores exógenos numéricos c1, c2 cruzados aleatorios sumándolos (c1.v1 + c2.v2)... se denomina universalmente:",
    options: [
      "Operación de Cohesión Binaria Transatlántica.",
      "Combinación Lineal Pura.",
      "Restauración Hiperbólica Ortogonal Inversa.",
      "Independencia Algorítmica Geométrica Base."
    ],
    correctAnswerIndex: 1,
    explanation: "Una 'Combinación Lineal' no es más que una ensalada abstracta ponderada asignándole balanzas o multiplicadores reales distintos pesos escalares y mezclando a todos los portadores o vectores bases para dar a luz a un super-vector hijo."
  },
  {
    id: 6,
    question: "¿Qué nos afirma matemáticamente con dureza el apelativo 'Dependencia Lineal' (Linealmente Dependiente L.D.) respecto a una familia reunida de vectores?",
    options: [
      "Nos afirma que al menos uno de tales vectores del conjunto juega inútilmente, ya que se le podría extirpar, pudiendo ser fabricado un clon igual en base combinando a los demás restantes que laburaron para armarlo.",
      "Nos grita que el determinante general del espacio es matemáticamente incalculable.",
      "Son vectores insalvables incompatibles al interactuar multiplicándolos entre sí de manera directa.",
      "Expone la base paralela nítida por producto constante igual superior."
    ],
    correctAnswerIndex: 0,
    explanation: "Toda 'Dependencia' acusa sin tapujos redundancia paramétrica general. Alguien es copión de las acciones acumuladas ponderadas del resto. Si formamos con ellos una matriz, nos botará al fondo el fatídico vector cero en el escalonamiento por eliminación Gaussiana inminente implacable."
  },
  {
    id: 7,
    question: "Para poder investir coronada formalmente a una familia o sub-colección de vectores con el título máximo de honorífico de 'Base de un Espacio', deben dominar estos dos estatutos invulnerables:",
    options: [
      "Ser totalmente Ortogonales entre sí y cruzar el plano nulo obligadamente vertical.",
      "Tener en sus filas a la identidad prearmada en matriz simétrica.",
      "Tienen que ser linealmente independientes puros C.L.I. e innegablemente simultáneamente deben lograr 'Generar' a brazo libre combinativo a TODOS y cada uno de los elementos integrales que morarán en el Espacio analizado.",
      "Compartir autovalores puros imaginarios conjugados y dimensión par no nula estricta iterativa."
    ],
    correctAnswerIndex: 2,
    explanation: "La BASE es el lote bi-factorial de genes supremos. Al ser L.I. carecen de copiadas redundancias de control; siendo puros genios únicos y de ser Generadores, tienen el increíble poder combinado real para alcanzar cada confín dimensional requerido sin fallar nunca ni pasarse incontroladamente."
  },
  {
    id: 8,
    question: "El sagrado número de la Dimensión (Dim(V)) de un Espacio Vectorial, lo determina irrevocablemente:",
    options: [
      "El número fijo atómico de elementos vectores L.I. puros e irreductibles que logran poblar e integrar cualquier 'Base' legal existente en ese vasto Espacio Vectorial finito analizado.",
      "El parámetro máximo inabarcable límite en un plano rotacional.",
      "El grado del polinomio divisor matricial adjunto invertido dimensional final.",
      "Si V son polinomios, la dimensión obligatoriamente equivale al doble paramétrico general sumado la traza central cuadrática."
    ],
    correctAnswerIndex: 0,
    explanation: "El Teorema Invariable dimensional de Bases decreta milagrosamente que si hallastes una base con 3 benditos vectores, TODA otra infinidad abismal inabarcable de distintas bases funcionales que se puedan armar o pensar para el mismo recinto exigirán férrea e inevitablemente albergar idénticamente los mismos tres elementos rectores de base. Esa cifra invariable inalterable, pasa a tatuarse como Dimensión del habitáculo real universal (ej: R^3 dim=3; Matrices 2x2 dim=4)."
  },
  {
    id: 9,
    question: "¿Qué rol juega la 'Matriz de Cambio de Base' (o Matriz de Transición) al pivotar entre coordenadas analíticas?",
    options: [
      "Su función destructiva busca aniquilar espacios no triviales asumiendo rangos cruzados.",
      "Cambia la Base espacial por rotación esférica neta alterando distancias.",
      "Traductor fiel lingüístico paramétrico universal: Transmuta las coordenadas abstractas [V]_A escritas en la familia del idioma de una Base A subyugada para reconvertirlas en las coordenadas de medida nativa puras [V]_B expresables descifradas ante la nueva Base B adoptada del otro país.",
      "Sirve para convertir los vectores ortogonales en vectores obtusos nulos dependientes paramétricos diagonales."
    ],
    correctAnswerIndex: 2,
    explanation: "Una Matriz de Pasaje es la 'Piedra Rosetta' universal del Álgebra espacial. Funciona engullendo representaciones de multiplicadores puros escritos en lengua vieja transcordiéndolas algorítmica-lineal y limpiamente en la combinatoria multiplicativa precisa calibrada y requerida si quisiéramos armar al mismo clon o vector usando los ladrillos constructores estipulados provistos en la Base nueva destino dictada."
  },
  {
    id: 10,
    question: "Si la Dimensión de un Subespacio W escondido secretamente adentro de ℝ^3 arroja '2', sabemos fehacientemente y visualizaremos la sombra de que geométrica y físicamente este refugio W se manifiesta encarnando a:",
    options: [
      "Una mosca estática y minúscula incrustada suspendida clavada unísona en Origen universal (0,0,0).",
      "Una cuerda o Recta de hilo recto punzante trazada pasando en vuelo atravesando rasante el centro de Origen tridimensional.",
      "Toda una llanura o Plano hiperbólico ancho chato flotando fijamente en contorsion atravesando riguroso por centro (0,0,0) surcando ℝ^3.",
      "Una parábola infinita de traslación divergente o una cuádrica incontrolable hiperboloide rotatoria de tres mantos cruzados inversos."
    ],
    correctAnswerIndex: 2,
    explanation: "Dimensionalmente puro... R3 en 0=Punto, dim 1=Recta libre, dim 2=Plano general, dim 3=El bloque sólido íntegro de todo el R^3 inexpugnable. Al tratar estrictamente sobre Subespacios (cumpliendo las sagradas clausuras) todos deben clavar anclas de control pasando inequívocamente sobre el origen inmaculado céntrico paramétrico nulo (Vector Cero)."
  }
];

export const parcial3Tema2Questions: QuizQuestion[] = [
  {
    id: 1,
    question: "¿Qué superpoder cósmico algebraico supremo adquiere un mero y triste Espacio Vectorial genérico puro cuando finalmente se le incorpora equipándolo con una función de 'Producto Interior' admisible legal (como el producto punto)?",
    options: [
      "Permite dividir matrices en R^n incontrolablemente.",
      "Gana la formidable percepción visual euclidiana profunda al dotar de manera mágica a sus habitantes asincronos la facultad de poseer longitudes medibles absolutas y ángulos cerrados interceptables e interrelacionados.",
      "Logra derivar los límites asintóticos de la función característica continua iterativa abstracta sin usar bases.",
      "Extingue la transposición rotando todas sus inversas simétricas hacia el infinito."
    ],
    correctAnswerIndex: 1,
    explanation: "Un Espacio Vectorial liso primitivo en su inicio no conoce la geometría, ni comprende cuan lejos o cerca yacen los componentes intrínsecos entre sí matemáticamente. El Producto Interior ilumina su mundo prestando e instaurando las reglas milimétricas sagradas para la medición distancias ('Norma') o para el control de incidencia esfero-axial (el 'Ángulo')."
  },
  {
    id: 2,
    question: "¿Qué afirma indiscutible y taxativamente desde los estratos básicos primitivos la implacable e inalterable 'Desigualdad de Cauchy-Schwarz' como dictamen soberano en Producto Interno?",
    options: [
      "Que los productos internos sumatorios son equívocamente negativos.",
      "Que el Producto Punto Absoluto |⟨u,v⟩| al colisionar será férrea e invariablemente Menor o Igual a la multi-consecución y agrupamiento producto cruzado multiplicativo general puro de las inamovibles longitudes de onda base esférica dadas de la Norma separada: ||u|| * ||v||.",
      "El vector cero multiplicador destruye subespacios nulos paralelos asintóticos inversos de Rnxn.",
      "La desigualdad asume inoperatividad entre cuádricas espaciales tridimensionales de ejes."
    ],
    correctAnswerIndex: 1,
    explanation: "La piedra fundacional analítica Cauchy-Schwarz (|⟨u,v⟩| ≤ ||u|| ||v||) garantiza la solidez entera y consistencia absoluta para el cálculo y proyección del coseno subyacente de ángulo intermedio entre cualquier cuerpo en universos de infinitas dimensiones matemáticamente indibujables que la mente no avizora concientemente."
  },
  {
    id: 3,
    question: "La 'Norma' o Módulo absoluto vectorial inducido (||v||) que define su longitud se calcúlase universalmente...",
    options: [
      "Sumando a viva voz todos y cada uno de los valores absolutos primordiales subyacentes dimensionales.",
      "Mediante el logaritmo hiperbólico puro tangencial de la Base A del subespacio generador mutuo y simétrico adjunto.",
      "Aplicando despiadadamente la Raíz Cuadrada salvaje directamente abocada sin filtros al mismísimo Producto Interno repetitivo incestuoso encimado entre el ente subyacente consigo mismo al cuadrado puro v contra v: √(⟨v,v⟩).",
      "Extrayendo radicalmente por matriz de traza combinativa la función escalar matricial asintótica general diagonalizada cruzada."
    ],
    correctAnswerIndex: 2,
    explanation: "El teorema geométrico elemental universal subyace indicando en piedra y mármol puro Pitagórico extendiendo que elevar al cuadrado el cruce dimensional escalar de x con x... parirá irremediablemente la fuerza longitudinal neta o 'largo' de dicho cuerpo abstractamente considerado. √(x,x)"
  },
  {
    id: 4,
    question: "En Espacios con Producto Interior general, dos Vectores decláranse y auto-titúlanse como 'Ortogonales' en paz inmaculada si y sólo si...",
    options: [
      "Poseen ambos ineludiblemente idénticas Normas paralelas convergentes idénticas de base neta paramétrica idónea natural.",
      "Su Producto Interior (la sumatoria de arrastre general de variables colisionantes) arroja exactamente Cero Redondo. ⟨u,v⟩ = 0.",
      "Forman inevitablemente un ángulo agudo de traslación escalar matricial estático de noventa y tres grados aproximado por izquierda y transpuesta general.",
      "Un vector proyecta de traslación geométrica puramente un clon nítido diagonal sobre el otro transponiendo bases simétricas L.I."
    ],
    correctAnswerIndex: 1,
    explanation: "La Ortogonalidad es el epítome supremo en donde dos ejes o cuerpos se apartan y desligan limpiamente uno del otro. Sin sombra cruzada proyectada, no habiendo intersección recíproca empujante causal en su destino vectorial (ej: Angulo de 90° en vida real R^3 normal = cos 90° = 0)."
  },
  {
    id: 5,
    question: "Un 'Conjunto Ortonormal' destila a fuego vivo e incorruptible estas exigentísimas dos cualidades sublimes para los vectores seleccionados en el selecto grupo:",
    options: [
      "Deben ser todos inquebrantablemente Ortogonales mutuamente cruzados a plomo implacablemente a 90, MÁS simultánea y excepcionalmente poseer religiosamente sin tregua longitud estandarizada de Norma unitaria absoluta o equivalente férreo calcado a UNO (||v||=1).",
      "Tienen que lograr diagonalizarse de escalón puro iterativo de forma tal que sus bases y determinantes de adyacencia matricial superpongan nulo.",
      "Deben componer obligatoriamente una matriz nula genérica L.I.",
      "Deberán no generar jamás espacios de base infinita y converger cerradamente paramétricos invertibles puros al espacio adjunto escalar general infinito adyacente natural general lineal simétrico transversal mutante."
    ],
    correctAnswerIndex: 0,
    explanation: "La Ortonormalidad encarna a Dios bajado del panteón de las bases: Son puramente entes desalineados e independientes totalmente unos de otros (ortogonales = 'Orto') pero adicional e irónicamente... ya vienen escalados y pulidos limpios dimensionalmente midiendo una y escupiendo exacta pulgada unitaria sin estirar ni encoger dimensiones de la realidad espacial medible matemática pura iterativa genérica ('Normalizados' o unitarios)."
  },
  {
    id: 6,
    question: "Uno de los poderes ocultos irrefutables que ostentan todos los conjuntos abstractos que ya gozan de certificación 'Ortonoromal' consiste intrínsecamente en...",
    options: [
      "Ser totalmente prescindibles dimensionalmente puros.",
      "Que irremediablemente todos los entes en un conjunto con ortogonalidad no nula devienen ser pura, forzosa e indiscutiblemente Linealmente Independientes (L.I) a tajo rajatabla por su naturaleza incorruptible dimensional ajena en ejes disociados mutuamente divergentes en paz.",
      "Constituyen invariante nulo el espacio nexo adyaconal.",
      "Tener traza paramétrica escalonada genérica invertible p=0 transversal inexpugnable matriz."
    ],
    correctAnswerIndex: 1,
    explanation: "Si nadie interfiere a nadie por estar cruzados rígidamente en escuadras aisladas cósmicas nulas entre ellos, es inviable a nivel analítico tratar de reproducir o 'generar' por clonación redundante dependiente cruzada de C.L.A a otro componente adyacente asimilable. Jamas será L.D, siempre son Bases puras absolutas libres formidables irrenunciablemente."
  },
  {
    id: 7,
    question: "¿Para qué cruzada algorítmica y dolorosa se alistó e invocó históricamente al Proceso salvador de Gram-Schmidt universal?",
    options: [
      "Traspasar las conmutativas a asociativas genéricas en variables estáticas nulas.",
      "Reciclar una base cruda indeseable común L.I deforme y transformarla mutándola ortogonalizando paso por tajo y proyección iterativa a todos sus adentros vectores para conseguir e incubar desde esa semilla original a una pulcra Base Ortogonal genuina radiante equivalente purificante sagrada sin mancha dimensional paramétrica mutante residual de empuje indeseable para el mismo subespacio general original dado.",
      "Encontrar la matriz transpuesta mágica hermítica general conjugada p=b en sistemas homogéneos tridimensionales asintóticos no nulos puros.",
      "Evadir a Sarrus de Chio trasponiendo cofactores simétricos determinantes L.D puros invertibles de simetría impar convergentes al espacio N en determinantes."
    ],
    correctAnswerIndex: 1,
    explanation: "Gram-Schmidt rectifica lo enderezable triturando las malas proyecciones. Empieza guardando el primero virgen, y al segundo ente lo rebana quirúrgicamente restándole la 'sombra' impura diagonal indeseada en paralelo que este arrojaba sobre el primero, dejándole solo y exclusivo la parte totalmente disjunta pura resecada ortogonal erecta; iterandolo masivamente."
  },
  {
    id: 8,
    question: "La 'Proyección Ortogonal' Proy_W(v) de un flechazo inadaptado vector general v inyectado desproporcionadamente al piso subespacio generalizado W... representa formalmente analítica en Álgebra a:",
    options: [
      "La sombra más larga y distante al objeto v que rebote y caiga lejanamente divergente de núcleo en W del espacio nulo V de R3 general paramétrico nulo transversal estricto escalar tridimensional nulo p=0 asintótico transitorio.",
      "El mismísimo vector que anula a todo W restando el parámetro general adjunto.",
      "Geométrica y analíticamente a aquel prodigioso vector milagroso de W que constituye y ostenta sin titubear ser 'La Mejor Aproximación Matemática' alcanzable para el vector original v, minimizando sin igual la distancia residual de fuga en error o perpendicularidad nula.",
      "La suma conmutativa general neta de paramétricos p=0 del determinante cruzado genérico base dimensional iterativa simétrica paramétrica L.I impar paralela rotacional de norma pura igual."
    ],
    correctAnswerIndex: 2,
    explanation: "El Teorema de Aproximación dicta suprema e incorruptiblemente que, si deseas la versión más fiel, cercana y asimilable a v contenida legalmente subyacente bajo el recinto W o plano subyacente de restricción... esa corona de honor y gracia se destila recayendo inalterablemente sobre la proyección matemática o caída perpendicular ortogonal exacta arrojada limpiamente. Menor error en R^N posible."
  },
  {
    id: 9,
    question: "¿A qué congregación o club llama el Álgebra 'Complemento Ortogonal' ($W^\\perp$) de un rincón Subespacial W dado base inicial genérico R^n?",
    options: [
      "Al escuadrón oscuro o subespacio gemelo que aglomera o colecciona universalmente por ley en su redil a tajo a todo aquel ser viviente de cuerpo o vector en V que declare rebeldía rotunda y decida acoplarse con vida perjurando ortogonalidad tajante nula intransigente hacia TODOS y a cada uno de los malditos elementos nativos originarios de la W inicial.",
      "A lo que sobra y no alcanza dimensionalmente a sumarse p=n generador paramétrico puro base mutante iterativa genérico transpuesta invertible L.D c=0 asintótico transitorio de tajo nulo p=b a R3 estricto escalar puro paramétrico estelar.",
      "A la transpuesta genérica paramétrica pura transcurrida en iteración convergente de la matriz escalar general rotatoria tridimensional de base genérica de tajo L.I cruzado asintótico divergente purificado.",
      "Al mismo plano W repetido dos veces de identidad de escalón y autovalor paramétrico absoluto b general."
    ],
    correctAnswerIndex: 0,
    explanation: "$W^\\perp$ se posiciona irónicamente abarcador del recíproco cruzado de cruzada eterna ortogonal inyectiva contra todas las sombras de W. (Todo ente que pise y cruce perpendicular sin fallar es enlista y engrosa a este cuartel general Complementario adyacente)."
  },
  {
    id: 10,
    question: "Si tu subespacio W en ℝ^3 dimensiona maravillosamente midiendo un volumen de espacio Dimensión(W)=2 (es el mítico plano al desnudo). ¡A las armas matemáticas!, obligatoriamente tu adorado 'Complemento Ortogonal' adjunto ($W^\\perp$) dimensionará rigiendo e imponiendo a tu vida Dim=1, lo cual dibuja una...",
    options: [
      "Pintoresca Cuádrica hiperbólica rotacional paramétrica mutante parabólica.",
      "Vibrante esfera genérica hueca de 3 x 3 neta en el vacío cósmico universal transversal.",
      "Sencilla Recta paramétrica afilada L.I enlazada a un vector Base direccional genérico Director (es la recta normal atravesando tajantemente la cara al tajo el plano al centro ortogonal p=0 L.I idéntico cruzada tridimensional genérica escalar pura iterativa simétrica rotacional.",
      "Amasijo de planos adjuntos puros determinantes."
    ],
    correctAnswerIndex: 2,
    explanation: "Por Teoría de Dimensiones general (Dim W + Dim $W^\\perp$ = Dim V del Espacio Total R^N real absoluto). Si la V central pesa nivel=3 y la W general arroja un pesaje gordo=2, irreconciliablemente a su complemento oscuro polar rotativo no le resta opción que valer la pena un mísero estricto nivel de dimensión 1 en compensación; lo que en ℝ3 plasma una infame flecha trazadora y Recta perpendicular Normal y punzante cortando transversal el tajo y vida de W transversal cruzada pura."
  }
];

export const parcial3Tema3Questions: QuizQuestion[] = [
  {
    id: 1,
    question: "La verdadera esencia incuestionable matemática de una 'Transformación Lineal' (T: V -> W) entre dos Espacios Vectoriales es dictaminar siempre qué comportamiento intocable al cruzar el puente dimensional:",
    options: [
      "Debe mutar rotando a todos los vectores ortogonales en nulos paralelos.",
      "Comportarse como un ente conservador que MANTIENE y respeta íntegramente de origen a destino las sumas de vectores (T(u+v) = T(u) + T(v)) y extrae escupiendo limpiamente a factor fuera cualquier escalar multiplicativo (T(k.u) = k.T(u)).",
      "Ser una función exponencial derivada constante asintótica paramétrica base uno cruzado.",
      "Anular toda matriz diagonal y volverla hermitica transcurrida general rotacional conjugada plana de grado nulo inferior."
    ],
    correctAnswerIndex: 1,
    explanation: "Una T.L es un enchufe o puente entre mundos vectoriales que no destruye el orden inicial original: Garantiza la misma estructura algebraica intacta. Trata e impacta la suma global idéntica que sus miembros sumados separados por el paso."
  },
  {
    id: 2,
    question: "Toda Transformación Lineal que se precie de ser real y formal en este vasto cosmos obedece a un dictamen sagrado inmediato al evaluar siempre a 'La Nada' o Elemento Nulo de su dominio base: T(0_v) =",
    options: [
      "Resultará e irrumpirá dando la Identidad Matricial [I] pura general L.I estática.",
      "Emerge siendo siempre el mismísimo y único vector cero de llegada destino absolútamente. 0_w",
      "Termina escupiendo infinitos transversales de error divididos sobre cero absoluto paramétrico divergente p=0 tridimensional rotacional infinito nulo base c=0 adyacente.",
      "Desemboca cayéndose siendo 1 real puro escalar idéntico paralelo asintótico cruzado tangencial transitorio neta unitaria."
    ],
    correctAnswerIndex: 1,
    explanation: "Por definición base (k=0 T(k.v)=k.T(v)), empujar 'la Nada' cruda y meterla en la trituradora lineal mágica siempre te devolverá infaliblemente sólo 'La Nada' del nuevo idioma habitáculo mundo destino: T(0) = 0."
  },
  {
    id: 3,
    question: "¿Qué es el enigmático 'Núcleo' (Ker(T)) de una Transformación Lineal al desnudo?",
    options: [
      "Es el subespacio origen valiente y suicida que aglomera a la pandilla inadaptada de TODOS los vectores que T aplasta aniquilándolos intencionalmente convirtiéndolos e igualándolos trágicamente en el oscuro Vector NULO 0_w del espacio dimensional de llegada.",
      "Es todo aquel espacio ortogonal transpuesto hermético asintótico divergente transversal al tajo de la hipérbola rotatoria mutante.",
      "El mismísimo espacio total del plano proyectado al cielo cósmico general transitorio puro escalar del codominio adyacente invertido L.D L.I transversal escalar general de matriz adyacente constante p=0 de traza infinita cruzada transversal general mutante transcurrida de 0.",
      "Es el autovalor central y unitario de la diagonal principal restada a su paramétrica idéntica nula transversal unitaria nula de R4 general estática plana."
    ],
    correctAnswerIndex: 0,
    explanation: "El Kernel o Núcleo abarca al conjunto fatal de orígenes en partida V que caen desgraciadamente hundidos en el punto Nulo destino W. Si el subespacio Ker(T) sólo aglomera solitariamente al triste vector cero (sin nadie más), se dirá gloriosamente que dicha T es Monomorfismo inyectivo absoluto blindado L.I cruzado."
  },
  {
    id: 4,
    question: "La Imagen (Im(T)) alza la cabeza ostentando englobar estrictamente y abarcando en destino como Recorrido a:",
    options: [
      "Todo ente y espécimen vector origen T=(x,y,z)=c cruzado m asintótico transversal rotatoria dimensional pura transcurrida L.D.",
      "A aquella pequeña porción y recinto exclusivo sobreviviente constituida enteramente por todos los vectores afortunados tocados o generados que pudieron ser 'alcanzados' y pisados por la mano flecha trasmutada de la Transformación Lineal naciendo vivos en el Dominio W.",
      "El subespacio origen nulo transversal neta cruzada genérica identidad mutante L.I general divergente.",
      "Subconjunto asintótico idéntico base cruzada tridimensional escalar idóneo matricial nulo dependiente transitoria c."
    ],
    correctAnswerIndex: 1,
    explanation: "La Im(T) es lo que logró ser iluminado realmente y empapado de la W universal entera de llegada luego de cruzar. Y ojo, importantísimo: Im(T) es siempre indefectiblemente generada usando solamente como materia prima a los vectores trasmutados directos resultantes que escupía la divina Base inicial T(v1, v2, ...)."
  },
  {
    id: 5,
    question: "El Santo Grial que entrelaza y sella en pacto de fuego la convivencia universal es el Teorema General Inquebrantable de la Dimensión:",
    options: [
      "Dimensión Universal Cruzada nula de plano paramétrico transitorio L.D transversal a su subespacio W asintótico general c=0.",
      "Que el Kernel sumado la Imagen da el espacio origen adyacente p=b rotatorio L.I mutante tridimensional.",
      "Que siempre e inapelablemente Dim(Núcleo) sumada más (+) la Dim(Imagen) es y deberá resultar IGUAL al pesaje exacto de la Dimensión total de 'V' originaria del Espacio de Partida puro y de arranque.",
      "Resta Dim(Ker) a su multiplicidad cruzada L.I p=0 escalar pura nula base generadora m asintótica general tridimensional de 3.2 grados de escalón idéntica transpuesta hermítica generadora tangencial."
    ],
    correctAnswerIndex: 2,
    explanation: "Lo que parte íntegro desde el origen (Dim V)... una porción muta sobreviviendo y es arrojada triunfante formándose materia en el nuevo universo como Im(T) viva, y la otra materia restante inadaptada es barrida cruelmente hundiéndola aniquilada en el abismo oscuro del Núcleo Ker(T)... el total de almas debe prevalecer emparejado."
  },
  {
    id: 6,
    question: "Una Transformación se autotitulará ganándose ser 'Epimorfismo' (Sobreyectiva) en todo su honorío absoluto únicamente cuando demuestre de sobra que...",
    options: [
      "No existe el origen L.D transversal rotativo m=2 L.I mutante asintótico paramétrico transversal c=0 neta.",
      "Dimensiona nula base cruzada idéntica paramétrica generadora espacial tridimensional iterativa nula p=b.",
      "Su Imagen Im(T) inundó sin dejar rastro el lugar llegando exitosamente invadiendo y abarcando renegando al total supremo estricto e íntegro del vastísimo Espacio Vectorial 'W' de Llegada entero (Dim(Im) = Dim(W) absoluto).",
      "Pudo despejar su determinante adjunto genérico nulo base rotatoria m=b matriz idéntica mutante r=n de 0 nula asintótica."
    ],
    correctAnswerIndex: 2,
    explanation: "Un Epimorfismo se devora todo lo que yace frente a sí, no dejando lugar libre y vacío adyacente huérfano para nadie inalcanzable. Absolutamente cada entidad nacida de la dimensión de Destino se encuentra atada exitosamente siendo imagen reflejo inyectivo retroactivo alcanzado real e íntegro proveniente desde un vector del espacio de Origen atracado."
  },
  {
    id: 7,
    question: "Si invocas tu poder y ensamblas a la mismísima 'Matriz Asociada M_B(T)' de una Transformación Lineal evaluando minuciosamente todo. Las Columnas erguidas de vida de esta super matriz colosal esconden guardando ser forjada secretamente usando íntegramente a:",
    options: [
      "La transpuesta rotatoria mutante idónea invertida paridad.",
      "Las coordenadas calculadas base a base de las T(vl_i) imágenes ya proyectadas y traducidas escupidas puristas atadas al enérgico cordel desglosadas en puros términos de la Base abstracta adoptada 'B' del universo nuevo de llegada.",
      "El plano liso ortogonal nulo asintótico c=0 de su escalón identidad invertida tangencial p=b paramétrica.",
      "Base generadora transversal conjugada transitoria hermética asintótica m=c idéntica."
    ],
    correctAnswerIndex: 1,
    explanation: "Toda Matriz Asociada T encierra ser el mapeo codificador colosal total por excelencia: Agarras los vectores base origen puros uno en uno, los arrojás transformándolos usando la función T... y a su cadáver escupido final, lo despiezás traduciendo implacable armándolo vector coordenada desglosado sobre la base de llegada. Pum: Lo acomodas colgado como columna constructora 1, luego 2, etc de la matriz T."
  },
  {
    id: 8,
    question: "El prodigio que ejerce gloriosa y velozmente la susodicha todopoderosa 'Matriz Asociada T' para evitarte calcular todo a mano una y otra vez radica en...",
    options: [
      "Rotar paralela convergente conjugada L.I.",
      "En funcionar idéntica a máquina expenedora: Tú sólo multiplicando M por [vector viejo]_B1 coordenadas crudas en base origen; ella instantánea escupe al otro extremo purísima ya destilada fabricada suplicante la [Imagen Nueva]_B2 ya transformada codificada coordenada inmaculada sin transpirar.",
      "Hallar ceros tangenciales bases generadoras adjuntas divergentes paramétricas c=0 nulos asintóticos m.",
      "Resta identidad simétrica."
    ],
    correctAnswerIndex: 1,
    explanation: "Multiplicando la Matriz x Coordenadas-vías logras cruzar mundos enteros de Álgebra operativamente abstrayendo funciones locas en simple matemática matricial calculada lineal base de matriz contra vector limpio y seguro."
  },
  {
    id: 9,
    question: "¿Para componer puramente en serie dos transformaciones T1 y T2 juntas y formar T = T1 o T2 velozmente sin error usando el poder absoluto de sus entrañas, sólo debés y basta con...",
    options: [
      "Sumarlas base N ortogonal de transpuesta mutante escalar c=0 tangencial paramétrica neta rotacional nulo.",
      "Trazar diagonal escalar pura rotativa matriz L.I p=0.",
      "Basta con Multiplicar ferozmente de frente sus dos Matrices Asociadas en orden equivalente cruzado correcto: [T1 * T2].",
      "No se pueden, se deben dividir transversales L.D."
    ],
    correctAnswerIndex: 2,
    explanation: "El Álgebra brilla exponiéndose suprema en su belleza intrínseca demostrando que conformaciones intrincadas laberínticas T(U(v)) de mundos funcionales paralelos se sintetiza resumiéndose sencillamente a nivel computacional operando el mismísimo producto estricto escalonado crudo simple [M_T1] . [M_T2] multiplicando matrices."
  },
  {
    id: 10,
    question: "Si una Transformación dictamina milagrosamente coronarse siendo Isomorfismo (Biyección: Epi + Mono a la vez): Su ansiada 'Matriz Asociada' revelará destilando obligatoriamente siempre ser una:",
    options: [
      "Matriz Nula genérica adyacente escalar.",
      "Matriz Rectangular de n≠m convergente asintótica.",
      "Formará y encarnará férreamente ser una Matriz Cuadrada total que además goce y proclame Determinante distinto a Cero puro lográndose de manera ineludible coronarse siendo Invertible logrando regresar y curvar el espacio ida y vuelta.",
      "Desemboca cayéndose transversal c=0."
    ],
    correctAnswerIndex: 2,
    explanation: "Coronar al Isomorfismo T es lograr conectar mundos de igual Dimensión ida y vuelta sin pérdidas ni fugas de información muerta, T^{-1} vivirá para contarlo deshaciendo el paso al invertir la Matriz operando a la inversa universal."
  }
];

export const parcial3Tema4Questions: QuizQuestion[] = [
  {
    id: 1,
    question: "¿Quiénes demonios son los legendarios entes inmortales 'Autovectores' (Vectores Propios) para una endomorfínica matriz inexpugnable A?",
    options: [
      "Sencillamente vectores perezosos de un cruce escalar que apuntan siempre transversales nulos paramétricos a la rotatoria c=0. Son la nada misma base L.D de tajo.",
      "Son aquellos asombrosos portadores valiosos vigías no nulos (v≠0) espartanos puros, tal que al ser masacrados aplicando brutalmente A contra ellos, milagrosamente los muy pillos NO pierden el rumbo de su eje ni se retuercen en su dirección real recta... sólo consienten ser mágicamente estirados, comprimidos o dados vuelta puramente (escalados) por un dócil múltiplo real k (Autovalor lambda λ). A.v = λ .v",
      "Seres mitológicos idénticamente convergentes asintóticos al transcurrido invertido rotacional paramétrico tangente a su base conjugada n=1 de forma adyacente escalar mutante pura generadora.",
      "Todo vector que diagonalice tridimensional nulo p=0 estático simétrico iterativo."
    ],
    correctAnswerIndex: 1,
    explanation: "El 'Vector Propio' es la recta fiel invariante pura genérica adyacente al sistema; son un faro incorruptible. No se deja torcer espacialmente la direccionalidad de su flecha ni un centímetro rotado angular de origen al ser intervenidos por su matriz... sencillamente de manera asombrosa se deforman obedeciendo creciendo/achicando absorbiendo el multiplicador escalar de auto-rango único llamado Autovalor Lambda puro."
  },
  {
    id: 2,
    question: "El susurrante 'Polinomio Característico' mítico P(λ) es forjado inquebrantable desde el mismisimo infierno de la matriz A al resolver a garra cruenta la inecuación del solemne Determinante puro exacto de:",
    options: [
      "El trazo conjugado nulo base escalar asintótico transversal de cero absoluto.",
      "Calcular a destajo y fuerza bruta el Determinante general inexpugnable restando: Det[ A  -  (λ * I) ].",
      "Dividiendo todo por su matriz nula L.D conjugada paridad.",
      "Generando producto iterativo tangencial rotacional mutante plano."
    ],
    correctAnswerIndex: 1,
    explanation: "Plasmando y clavándole restado puro a la diagonal inexpugnable un factor constante variable invasor oscuro -Lambda (-λ) en las tripas de la diagonal originaria viva de esa susodicha matriz gigante pura para luego exprimir un det()... estallaremos pariendo incontrolablemente todo un Polinomio de grado absoluto que contendra incrustadas forzosamente en sus raices algebraicas puras esparcidas en sangre a todos los verdaderos Autovalores latentes cósmicos."
  },
  {
    id: 3,
    question: "¿Dónde deambula errante al unísono el origen base oscuro formándose encubado todo el Autovector? Residen atrincherados acoplados formando al temible Recinto Sagrado inmaculado del...",
    options: [
      "Plano mutante p=b escalar idéntica inversora iterativa cruzada.",
      "Ortogonal puro nulo de traza infinita cruzada asintótica L.D rotacional genérico de 0.",
      "Espacio Nulo, núcleo o Kernel inyectable del bloque triturador [ A - λ.I ]. Todos los sub-hijos de este Nucleo paridos se titulan Subespacio Propio o Autoespacio de ese λ.",
      "Espacio transversal L.I de Sarrus dependiente paramétrico."
    ],
    correctAnswerIndex: 2,
    explanation: "Una vez arrimado o develado el bendito y codiciado Auto-escalar (λ); se inserta remplazándolo fijo real en la brutal matriz rebanada [A - λ.i]. Todo ese maldito monstruoso nuevo sistema devora obligadamente y arroja pidiendo un Rango desplomado deficiente inminente... pidiendo auxilio nulo, liberando e infestando variables n=libres infinitas de salvoconducto L.I, dando a luz un Autoespacio V_λ con infinita manada de vectores todos Autovectores de ese lambda puro cruzando su plano eterno idóneo."
  },
  {
    id: 4,
    question: "¿Cuándo grita el álgebra purista suprema que lograste con honor que tu Matriz inmanente Cuadrada sea bendecidamente al fin 'Diagonalizable'?",
    options: [
      "Cuando su determinante transversal sea L.D base N convergente escalonado adjunto a b=0 rotatorio neta pura cruzada nula.",
      "Única y puramente cuando logres milagrosamente hurgar rescatar vivitos y coleando encontrar e incubar en la sala neta a 'N' puros y aguerridos genéticos Autovectores que además posean el poder implacable de ser absolutamente Independientes (L.I) permitiendo forjar con gran hazaña armando la bendita Base Propia completa de vectores alienados al R^N de partida.",
      "Cuandos sus espacios rotativos tridimensionales asuman bases adjuntas simétricas escalares p=n general de traslación inversa escalar idéntica.",
      "Jamás lo son, mueren nulas."
    ],
    correctAnswerIndex: 1,
    explanation: "Sin suficientes soldados puros o Bases propias recias alienadas para soportar la construcción del universo tridimensional R^N, la diagonalización se desploma truncada y fracasa abismalmente ahogada y deprimida; (Debes pescar en N dimensiones 3 Autovectores puristas L.I)."
  },
  {
    id: 5,
    question: "Si tu Matriz parió autovalores reales purificados que a simple vista son TODOS totalmente 'Distintos y diferentes' sin repetir ni una mosca... puedes asegurar de pie jactándote que:",
    options: [
      "El espacio transversal L.D asintótico paramétrico divergen en nulo.",
      "Que no tiene matriz inversa constante.",
      "La matriz está destinada desde su inicio implacable y directamente a Sí ser totalmente DIAGONALIZABLE de calle. (Ya que disímiles eigenvalores gestan pariendo en sus vientres Autovectores que obligadamente por ley de sangre forzosa colateral divina devienen intrínsecamente independientes ajenos y Ortogonales en paz).",
      "Será paramétricamente de tajo c=0 mutante cruzado estático."
    ],
    correctAnswerIndex: 2,
    explanation: "Son purasangres cruzados disjuntos enérgicos. Autovalores distintos engendran Autovectores insobornables incompatibles de depender (Son todos L.I automáticos). Si es R3 y hay lambda (3, 7, -1)... pum: la Matriz es purista Diagonalizable directa sin chistar ni revisar dimensiones."
  },
  {
    id: 6,
    question: "¿Cuál es el drama analítico fatal cuando un puñetero Autovalor deviene naciendo de una semilla raíz repetida 'Doble o Triple' rebotando engendrado (Multiplicidad Algebraica = 2, Ej: (x-3)^2 )?",
    options: [
      "La matriz morirá siendo nula cruzada asintótica iterativa base.",
      "Se detiene y no se diagonaliza p=0 c=0 transversal escalonada L.D L.I simétrico idéntico rotatorio paramétrico tridimensional.",
      "Que obliga sudar frío, forzando rezos a que logremos sacar e incubar en su Núcleo a la MISMA idéntica y precisa maldita cantidad equitativa pura de Autovectores L.I (M. Geométrica debe lograr igualar a rajatabla arrojando ser = 2 también). Si su núcleo defectivo aborta escupiendo rindiendo y perdiendo fuerza solo un mísero Autovector (M.G=1)... la matriz fracasa pudriéndose fallida in-diagonalizable (no armaste base en la silla).",
      "Jamás se repetirá, su determinante es impar L.D."
    ],
    correctAnswerIndex: 2,
    explanation: "El fracaso fatal y drama recide que ante raíces múltiples repetidas (M.Alfa > 1), la M.Geométrica suele quedarse corta rezagada perdiendo escaños libres de pivote (Mg < Ma). Si no extraemos los suficientes ladrillos autovectores equivalentes idénticamente pesados requeridos de esa falla para armar la base propia global (Mg=Ma iterativa)... todo el edificio de la Diagonalización P se desploma inerte."
  },
  {
    id: 7,
    question: "La relación celestial diagonal dictaminada en fórmula entre P (Bases prop), D (Diagonal pura central escalar de raíces), y A (la bestial original base general), clama incuestionable transcurrida:",
    options: [
      "D es asintótica L.D rotacional p=b tajo M.",
      "La Matriz Diagonal D destilada es = A. P^-1 de tajo matricial paramétrica divergente P=0 neta conjugada L.I.",
      "La original resucita encarnada A = P . D . P^(-1)  (Matriz cambio Base * Diagonal puros de lambda * la Inversa de base adjunta destronada al reves).",
      "A no existe asumiéndose 0 transitoria general impar de Sarrus de Chío estática mutante transversal genérica matriz base a tajo."
    ],
    correctAnswerIndex: 2,
    explanation: "La Factorización base de poder colosal matricial absoluto (A = P.D.P^-1) abstrae el engorro general del caos encajonándolo e infiriendo todo el peso inexpugnable brutal ruidoso originario recayendo suave y limpiamente en tan solo una triste e insignificante pero pura matriz Diagonal hueca de poder latente destilando raíces limpias."
  },
  {
    id: 8,
    question: "La bestial y mágica 'Matriz Simétrica' (A^T = A)... qué super-poder celestial asintótico supremo irreprochable incontrolable escupe obligadamente de fábrica al diagonalizarse base autovalores...",
    options: [
      "Todo autovector cruzado muelle hermítica base p=b L.D es asintótico genérico constante escalar puro matriz adjunta divergente generalizada rotatoria mutante.",
      "Garantiza blindada de acero ser TODA SU VIDA inevitablemente DIAGONALIZABLE siempre existiendo en Reales incuestionable puros. Y de yapa regalada: sus Autovectores emanados provenientes desde Autovalores distintos emergen naciendo de pie portando ser férreamente ORTOGONALES cortados a 90 grados exactos en un paraíso esférico limpio perfecto (formando si queremos una base Ortonormal perfecta alienada diagonal pura).",
      "Ser asintótica idéntica L.I matriz de Chio general conjugada inversa tangencial transversal."
    ],
    correctAnswerIndex: 1,
    explanation: "Es el Teorema Espectral supremo absoluto: Toda Matriz Simétrica desborda perfección inexpugnable. Es la reina coronada. No sólo garantiza diagonalizar infalible con CUALQUIER raíz real atómica múltiple sin errar de multiplicidad, sino que todos los ejes portadores generadores escupidos se auto-cortarán perpendicular puramente limpios en paz permitiéndonos formar [P] directamente con una matriz transpuesta base Ortogonal suprema sin usar la Inversa dura [P^-1 = P^T]."
  },
  {
    id: 9,
    question: "Si una inmensa y titánica Matriz A, se ha domado y diagonalizado exitosamente como D= (1, -1, 0). ¿Cuál superpoder monstruoso algorítmico matemático ganarás irreprochable?",
    options: [
      "Multiplicarla de Sarrus n=1 cruzada conjugada L.D asintótica p=n.",
      "Que podrás calcular su trituradora Potenciacion Gigante ruidosa inalcanzable (ej: Calcular A elevado a la potencia mil A^1000) en apenas dos miseros segundos puros operando: A^k = P . (D^k) . P^-1; ya que potenciar una pobre matriz diagonal perezosa D recae trivial purista sencillamente en tan solo elevar las tristes raíces esparcidas del medio principal sin transpirar combinadas.",
      "Convergente iterativa L.I transversal escalar cruzada general asintótica m mutante de tajo rotacional idónea c=0.",
      "Anular toda matriz nula base constante simétrica iterativa."
    ],
    correctAnswerIndex: 1,
    explanation: "La Diagonalización pura D exhibe el gen codificado del motor matricial constante limpio absoluto destilado despojado del espiral del caos. Exponenciar una matriz diagonal inexpugnable es ridículamente un jugo simple tonto de niños multiplicando el bloque cruzado destilado sin fallas. P_D_P-1"
  },
  {
    id: 10,
    question: "El Autovalor o 'Eigen' escalar $\\lambda=0$ cruzando escondido entre las raíces de la Diagonal D... ¿Tiene permitido existir puristamente acaparando trono vivo?",
    options: [
      "Sí señor. Lambda de 0 indica crudo que todo ese Autovector cruzando generador subespacial anida purísimo arrastrado ciego e intocable asomando devorado directamente a caer y hundirse al mismísimo abismo del 'Núcleo' oscuro (Ker A). De existir $\\lambda=0$, la Matriz se descubre traicionera e irreversible al tajo Invertible no trivial Singular de Muerte (Det = 0).",
      "Es inadmisible, lambda base cruzada no puede ser nulo iterativo conjugado asintótico.",
      "Paramétrica general divergente adyacente L.D Sarrus rotatoria m idéntico escalar cruzado tangencial p=n unitario transcurrido iterativa.",
      "La traza es nula transitoria cruzada neta L.I transversal paramétrica idónea."
    ],
    correctAnswerIndex: 0,
    explanation: "El Eigenvalor $\\lambda=0$ destapa la caja de Pandora cósmica real purista inexpugnable informando del vacío paramétrico fatal intrínseco de base: Existe un V no nulo que, al meterlo en la transformación trituradora de la Matriz madre viva general rotatoria constante... nos engulle y lanza al nulo $A.v = 0.v = 0$. ¡Eso mismo es la pura definición inmutable intachable general escalar absoluta dictaminada de pertenecer despojado base cruda encallado en pie sobre el Kernel núcleo del fin!"
  }
];

export const parcial3Tema5Questions: QuizQuestion[] = [
  {
    id: 1,
    question: "¿Qué figura cónica sublime se devela geométricamente al tajear puramente recto y horizontal a 90 grados exactos un Cono doble infinito?",
    options: [
      "Parábola aberrante lateral de foco excéntrico p>1 asintótica divergente iterativa cruzada.",
      "Elipse oblicua aplastada tangencial pura.",
      "Esfera hiperbólica matriz L.D genérica cruzada paramétrica asintótica.",
      "Circunferencia perfecta simétrica cruzada equilibrada originaria en sus excentricidades nulas puras e=0."
    ],
    correctAnswerIndex: 3,
    explanation: "Una Circunferencia no es más que el tajo transversal limpio ortogonal recto c=0 de un haz cónico: Geométricamente ostenta inexpugnable ser el mágico y único 'Lugar Geométrico' real paramétrico dictaminado donde TODOS los puntos de su aro equidistan puristamente calcados y parejos al centro inamovible (Radio Constante Puro)."
  },
  {
    id: 2,
    question: "¿Cuál es el rol algebraico rector y vital que ostenta dictaminando majestuoso el 'Foco y la Directriz' en la constitución genética pura de la Parábola cósmica?",
    options: [
      "La Parábola es el lugar geométrico místico donde la distancia abismal trazada viva desde CUALQUIER punto de su manto infinito errante hacia el sacro 'Foco' interior debe chocar obligadamente y empatar midiendo exactamente calcada lo mismo que la distancia ortogonal en tajo arrojada hacia la infinita recta 'Directriz' de retablo externa de atrás. (d(P,F) = d(P,Directriz)).",
      "Ser p=0 asintótica mutante transversal.",
      "Multiplicidad iterativa cruzada m nula adyacente divergente constante P genérica simétrica neta cruzada escalar base tangencial paridad invertida conjugable.",
      "Sumar sus focos internos generando dos radios."
    ],
    correctAnswerIndex: 0,
    explanation: "La esencia misma paramétrica intrínseca matriz de la parábola carece de 'centro' como tal; en su lugar late por obediencia inexpugnable regida por la santa equidad de mantener eterno equilibrio de tajo de distancia rebotando renegado huyendo parejo entre su Foco tractor devorador y la cortina rectora de espalda Directriz inmanente cruzada."
  },
  {
    id: 3,
    question: "La Elipse, como lugar geométrico estelar, destila la maravilla inmanente y dictamina suprema que la sumatoria de...",
    options: [
      "Radios polares tangenciales L.D iterativos es igual asintótico parámetro de 2 nulo cruzado p=b divergente de su matriz constante de 0 transitoria escalar puro cruzada infinita mutante m.",
      "Transcurrido hermético rotatorio adjunto genérico liso de m=2 L.I escalar transversal asintótica pura tangencial a su foco simétrico conjugado L.D conjugante c=0 de base neta.",
      "La 'Suma Mágica de Distancias' tendidas o trazadas desde un punto cualquiera P de la curva atada a sus benditos DOS FOCOS F1 y F2 interiores; se clava eterna inamovible arrojando religiosamente y manteniéndose siempre una Constante Real Invariable y Pura inexpugnable equivalente a '2a' el vasto Eje Mayor cruzador céntrico tridimensional constante.",
      "La resta paramétrica transitoria de cero general idónea."
    ],
    correctAnswerIndex: 2,
    explanation: "El método universal analógico del 'hilo jardinero' anclado (dos chinches de los dos focos unidos por un hilo flojo tensado de longitud 2a)... al trazar rodando traccionando vivo el manto, parirá inequívocamente la forma ovalada ovoide elíptica al mantener intacta la constancia e inmodificabilidad matemática absoluta paramétrica constante de la sumatoria d(P,F1) + d(P,F2) = Constante."
  },
  {
    id: 4,
    question: "En la despiadada e implacable 'Hipérbola' rebelde divergente infinita... ¿Qué lazo dictamina su existencia de nacimiento general distanciando a sus dos focos?",
    options: [
      "Ser inmanente neta de conjugada matriz.",
      "Aquí, a diferencia de la dócil Elipse sumatoria abocada al centro... La Hipérbola grita rebeldía divergente exigiéndole inexpugnable a la vida que el Valor Absoluto de la cruda DIFERENCIA o 'Resta' mutua inamovible de las asimétricas distancias tendidas desde P a ambos focos sea inalterablemente constante férrea e invariada (2a).",
      "Sumando sus rotaciones iterativas nulas transversal p=b m adjunto transversal constante L.I a conjugada paridad transpuesta idéntica cruzada escalar pura tangencial paramétrica de Sarrus Chio mutante base transitoria idónea L.D de 0 nula.",
      "Tangente de raíz conjugada paramétrica iterativa divergente cruzada tridimensional escalar idóneo de R3 paramétrica adyacente escalar asintótica."
    ],
    correctAnswerIndex: 1,
    explanation: "Símbolo total del tajo infinito divergente abierto. Al ser Diferencia (la resta absoluta de d(P,F1) - d(P,F2) = constante pura), los puntos huyen destrozando el cerco céntrico mutante generando y dibujando paramétrica viva las dos majestuosas ramas o mantos asintóticos opuestos curvos de huida indeseable repeliendo al trópico nulo."
  },
  {
    id: 5,
    question: "¿Qué esconde delatando furtivamente la inmanente 'Ecuación General Generalizada Plana de 2do Grado': Ax² + Bxy + Cy² + Dx + Ey + F = 0 ?",
    options: [
      "Sencillamente transposición c=0 rotacional.",
      "Es el genoma matemático maestro base. Dependiendo inmanente de quien sea y asuma vivificador el Bxy (si hay o no Rotación transversal viva escalar) y del discriminante genético inexpugnable matriz b² - 4ac, esta misma madre de ecuaciones es capaz mutante de encerrar engendrar, codificar esconder cruda abarcadora pariendo asintótica y encarnar a todas y cualquier sublime Cónica existente tridimensional paramétrica.",
      "Matriz inversa base L.D de tajo simétrico a conjugable L.I estricta cruzada nula.",
      "Tangente rotacional unitaria asintótica transversal idónea."
    ],
    correctAnswerIndex: 1,
    explanation: "La ecuación general pura es como un molde o célula madre. Según sus 6 parámetros fijos escalares... al resolverla o moldearla cruzada iterativa te descubrirás crudo destilando desbarrancando que dentro dormía una dulce elipse rotada, una vil parábola desplazada o bien un caso mutante degenerado extinto en asintótica."
  },
  {
    id: 6,
    question: "El temible término cruzado 'Bxy' infiltrado dentro de la Ecuación General en ℝ² destila acaparando inmanente gritar... ¿Qué aberración geométrica?",
    options: [
      "Informa y denuncia indiscutible e implacable que la figura Cónica naciente, si bien existe real... no se halla sumisamente derecha parada a los ejes nativos X e Y; sino que se retorció estática en una 'ROTACIÓN' paramétrica viva asintótica pura en ángulos inclinados del plano.",
      "Multiplicidad algebraica repetida degenerando el espacio núcleo a L.I vacío divergente genérico de 0 paramétrico cruzada base idéntico tridimensional rotatoria de Sarrus.",
      "Cruce escalar inminente de autovalores unitarios L.D asintótico paramétrico transcurrido mutante de 0 y traza 3 conjugada neta adjunta matriz invertible idónea tangencial m transversal p=b escalada",
      "Jamás existe"
    ],
    correctAnswerIndex: 0,
    explanation: "El término 'Bxy' es el gen rotacional desquiciado. Si B es cero, tu curva vive derecha y mansa (elipses o parábolas comunes rectas a ejes). Pero si B es distinto de Cero asomando... agárrate fuerte, la cónica sufrió un tajo de Rotación, deformándose y obligando irreconciliable dolorosamente a aplicar Transformaciones Lineales de Autovalores Diagonalizando Autovectores Simétricos cruzados para destripar hurgar sacándola a la luz domándola enderezándola."
  },
  {
    id: 7,
    question: "¿Para qué sirve el algoritmo purificador salvador de Completar Cuadrados base viva (Ej: (x-a)^2 y (y-b)^2) en las Cónicas inmanentes?",
    options: [
      "Generar L.I c=0 ortogonal divergente iterativo mutante paramétrico iterativa.",
      "Transposición de bases cruzadas nulas tangencial hermética inversa.",
      "Su tarea excelsa rotatoria asintótica paramétrica es la de desenmascarar revelando limpia neta de un hachazo crudo al Centro Oculto sagrado de la vida subyacente de la cónica, dictaminando exiliándola purgando y arrastrando la 'Traslación' paralela cruzada general purista a los ejes hacia un origen relativo estático.",
      "Cruzar L.I."
    ],
    correctAnswerIndex: 2,
    explanation: "Cuando los términos lineales Dx o Ey asoman (sin Rotación), denuncian puro tajo desplazamiento genérico. Al forzar 'completar los Trinomios Cuadrados Perfectos' embolsamos el caos devolviendo comprimido destilando revelando los susodichos focos y centros encriptados mutantes de la elipse, circunferencia o parábola cruda cruzada viva paramétrica base idónea genérica."
  },
  {
    id: 8,
    question: "En las soberanas 'Cuádricas' 3D de infinito poder... el imponente y aterrador 'Paraboloide Hiperbólico' mutante (apodado mística e irónicamente Silla de Montar paramétrica)... presenta al ser tajado por los planos del espacio universal R3 puros en su anatomía:",
    options: [
      "Circunferencias perfectas idénticas L.I L.D asintóticas neta iterativas conjugada c=0.",
      "Combinaciones L.I asintóticas L.D tangencial cruzada simetría Sarrus.",
      "Sus infinitas cortaduras transversas revelan pariendo formidables Parábolas y cruentas incesables Hipérbolas; no logrando engendrar acorralando conteniendo jamás pariendo en sus adentros tajados una forma cerrada cruda o elipse base p=n nula iterativa viva.",
      "Matrices transitorias adjuntas L.D rotacional c=b conjugada transversal asintótica escalar idónea paramétrica n=3.2"
    ],
    correctAnswerIndex: 2,
    explanation: "En la silla del caballo (z = y²/b² - x²/a²), si tajás a una altura Z constante, asoman Hipérbolas inmanentes divergentes; si la rebanás con X fijo y cruzás Y, brotan Parábolas sonrientes hacia arriba... si rebanás fijo en Y cruzado emergiendo en X cruda... saltan pariendo tristes Parábolas asintóticas concavidad llorosas puras hacia abajo."
  },
  {
    id: 9,
    question: "El Elipsoide 3D sagrado de centro cero rige inamovible (x²/a² + y²/b² + z²/c² = 1), Si por un milagro o castigo inabarcable matemático asintótico cósmico resulta pariendo puramente escalonado a=b=c idéntico a un constante mismo Rayo inmanente... nace purísima encarnando deviniendo y contrayendo en:",
    options: [
      "Paraboloide elíptico base pura tangencial.",
      "La inexpugnable Esfera sagrada pura divina tridimensional perfecta rotatoria paramétrica infinita.",
      "Cuádrica hiperboloide tangencial rotatoria p=0 cruzada paramétrica de Sarrus de Chío hermético adjunta base transversal escalar c=0 mutante neta infinita iterativa nula p=b de transcurrido L.D simétrica.",
      "Hipérbola neta paramétrica c=b"
    ],
    correctAnswerIndex: 1,
    explanation: "El elipsoide general de tres radios a, b, c divergentes aplastados es como una pelota de rugby tridimensional aplacerada gorda. Si las fuerzas de sus 3 ejes logran calcarse idénticas emparejando paramétricamente de un hachazo midiendo 'r' al unísono, se purifica asumiendo de una la simetría esférica invulnerable sagrada base tridimensional perfecta (x² + y² + z² = r²)."
  },
  {
    id: 10,
    question: "¿A qué responde en vida el nombre sagrado de 'Superficies de Revolución' tridimensionales Cuádricas base asintóticas inmanentes de cruzada matemática iterativa m?",
    options: [
      "Asintótica transitoria pura matriz adjunta m iterativo 0 cruzada hermética de nulo paramétrica c=b conjugada.",
      "Son aquellos engendros formidables mágicos puros cuerpos 3D abismales gigantescos nacidos creados paramétricos inexpugnables de obligar puristamente arrojando e incrustando girar rotar arrastrando violenta e imparablemente inmanente los trazos de 360 grados sobre el infinito a cualquier pobre Cónica plana (una recta plana, o parábola, o elipse lisa muerta 2D) haciéndola orbitar feroz amarrada en estricto y riguroso giro arrastrada sobre entorno a uno de cualquiera de sus dos ejes centrales coordenados.",
      "Puro producto L.I asintótico genérico simétrica escalada transversal nulo matriz adjunto.",
      "Asumen 0 conjugada divergente asintótico tridimensional de transcurrido idóneo."
    ],
    correctAnswerIndex: 1,
    explanation: "Al hacer girar aullando como calesita paramétrica tridimensional pura a una Elipse lisa de 2D clavada en un palo anclada a su eje principal... engendrás llenando rotando pariendo la tripa y bulto volumétrico tridimensional espacial arrastrado estelar sagrado liso de un Elipsoide de Revolución."
  }
];

