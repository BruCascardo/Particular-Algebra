import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import Parcial1 from './pages/Parcial1';
import Parcial2 from './pages/Parcial2';

// Theme 1: Vectores
import SegmentoOrientado from './pages/vectores/SegmentoOrientado';
import ModuloDireccionSentido from './pages/vectores/ModuloDireccionSentido';
import IgualdadVectores from './pages/vectores/IgualdadVectores';
import VersorModulo1 from './pages/vectores/VersorModulo1';
import VectorOpuesto from './pages/vectores/VectorOpuesto';

// Theme 2: Operaciones con Vectores
import SumaVectores from './pages/vectores/SumaVectores';
import PropiedadesAdicion from './pages/vectores/PropiedadesAdicion';
import RestaVectores from './pages/vectores/RestaVectores';
import ModuloDosPuntos from './pages/vectores/ModuloDosPuntos';
import ProductoPorEscalar from './pages/vectores/ProductoPorEscalar';

// Theme 3: Sistemas y Referencias
import ReferenciasDimensiones from './pages/sistemas/ReferenciasDimensiones';
import CondicionParalelismo from './pages/sistemas/CondicionParalelismo';
import ProyeccionOrtogonal from './pages/sistemas/ProyeccionOrtogonal';

// Theme 4: Productos Vectoriales
import ProductoEscalar from './pages/productos/ProductoEscalar';
import CosenosDirectores from './pages/productos/CosenosDirectores';
import ProductoVectorial from './pages/productos/ProductoVectorial';
import ProductoMixto from './pages/productos/ProductoMixto';

// Theme 5: Recta en el Plano
import EcuacionesRecta from './pages/recta-plano/EcuacionesRecta';
import AnguloRectas from './pages/recta-plano/AnguloRectas';
import PerpendicularidadParalelismoRectas from './pages/recta-plano/PerpendicularidadParalelismoRectas';
import DistanciaPuntoRecta from './pages/recta-plano/DistanciaPuntoRecta';

// Theme 6: Recta en el Espacio y Planos
import FormasEspaciales from './pages/espacio-planos/FormasEspaciales';
import PlanosProyectantes from './pages/espacio-planos/PlanosProyectantes';
import CoplanaridadRectas from './pages/espacio-planos/CoplanaridadRectas';
import PlanoRectaPunto from './pages/espacio-planos/PlanoRectaPunto';

// Route Theme Parcial 2 - Tema 1
import DefinicionSolucion from './pages/parcial2/sistemas/DefinicionSolucion';
import Compatibles from './pages/parcial2/sistemas/Compatibles';
import Incompatibles from './pages/parcial2/sistemas/Incompatibles';
import MatrizAmpliada from './pages/parcial2/sistemas/MatrizAmpliada';
import Pivote from './pages/parcial2/sistemas/Pivote';
import VariablesLibres from './pages/parcial2/sistemas/VariablesLibres';

// Route Theme Parcial 2 - Tema 2
import MatrizEscalonada from './pages/parcial2/escalonada/MatrizEscalonada';
import TeoremasSel from './pages/parcial2/escalonada/TeoremasSel';
import SistemasHomogeneos from './pages/parcial2/escalonada/SistemasHomogeneos';
import Interpretacion from './pages/parcial2/escalonada/Interpretacion';

// Route Theme Parcial 2 - Tema 3
import Definicion from './pages/parcial2/matrices/Definicion';
import IgualesFilasColumnas from './pages/parcial2/matrices/IgualesFilasColumnas';
import CuadradasNulas from './pages/parcial2/matrices/CuadradasNulas';
import TriangularesDiagonales from './pages/parcial2/matrices/TriangularesDiagonales';
import Escalar from './pages/parcial2/matrices/Escalar';

// Route Theme Parcial 2 - Tema 4
import AdicionEscalar from './pages/parcial2/operaciones/AdicionEscalar';
import Transposicion from './pages/parcial2/operaciones/Transposicion';
import ProductoMatricial from './pages/parcial2/operaciones/ProductoMatricial';

// Route Theme Parcial 2 - Tema 5
import InversaIdentidad from './pages/parcial2/propiedades/InversaIdentidad';
import SolucionUnica from './pages/parcial2/propiedades/SolucionUnica';
import Traza from './pages/parcial2/propiedades/Traza';
import Adicionales from './pages/parcial2/propiedades/Adicionales';

// Route Theme Parcial 2 - Tema 6
import Concepto from './pages/parcial2/determinantes/Concepto';
import SarrusChio from './pages/parcial2/determinantes/SarrusChio';
import Preliminares from './pages/parcial2/determinantes/Preliminares';
import Inversa from './pages/parcial2/determinantes/Inversa';
import RelacionTrazaDeterminante from './pages/parcial2/determinantes/RelacionTrazaDeterminante';

const App: React.FC = () => {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/parcial1" element={<Parcial1 />} />
        <Route path="/parcial2" element={<Parcial2 />} />
        
        {/* ======================= PARCIAL 1 ======================= */}
        
        {/* P1 Tema 1: Vectores */}
        <Route path="/parcial1/vectores/segmento-orientado" element={<SegmentoOrientado />} />
        <Route path="/parcial1/vectores/modulo-direccion-sentido" element={<ModuloDireccionSentido />} />
        <Route path="/parcial1/vectores/igualdad-vectores" element={<IgualdadVectores />} />
        <Route path="/parcial1/vectores/versor" element={<VersorModulo1 />} />
        <Route path="/parcial1/vectores/vector-opuesto" element={<VectorOpuesto />} />

        {/* P1 Tema 2: Operaciones con Vectores */}
        <Route path="/parcial1/operaciones/suma-vectores" element={<SumaVectores />} />
        <Route path="/parcial1/operaciones/propiedades-adicion" element={<PropiedadesAdicion />} />
        <Route path="/parcial1/operaciones/resta-vectores" element={<RestaVectores />} />
        <Route path="/parcial1/operaciones/modulo-dos-puntos" element={<ModuloDosPuntos />} />
        <Route path="/parcial1/operaciones/producto-por-escalar" element={<ProductoPorEscalar />} />

        {/* P1 Tema 3: Sistemas y Referencias */}
        <Route path="/parcial1/sistemas/referencias-dimensiones" element={<ReferenciasDimensiones />} />
        <Route path="/parcial1/sistemas/condicion-paralelismo" element={<CondicionParalelismo />} />
        <Route path="/parcial1/sistemas/proyeccion-ortogonal" element={<ProyeccionOrtogonal />} />

        {/* P1 Tema 4: Productos Vectoriales */}
        <Route path="/parcial1/productos/producto-escalar" element={<ProductoEscalar />} />
        <Route path="/parcial1/productos/cosenos-directores" element={<CosenosDirectores />} />
        <Route path="/parcial1/productos/producto-vectorial" element={<ProductoVectorial />} />
        <Route path="/parcial1/productos/producto-mixto" element={<ProductoMixto />} />

        {/* P1 Tema 5: Recta en el Plano */}
        <Route path="/parcial1/recta-plano/ecuaciones-recta" element={<EcuacionesRecta />} />
        <Route path="/parcial1/recta-plano/angulo-rectas" element={<AnguloRectas />} />
        <Route path="/parcial1/recta-plano/perpendicularidad-paralelismo" element={<PerpendicularidadParalelismoRectas />} />
        <Route path="/parcial1/recta-plano/distancia-punto-recta" element={<DistanciaPuntoRecta />} />

        {/* P1 Tema 6: Recta en el Espacio y Planos */}
        <Route path="/parcial1/espacio-planos/formas-espaciales" element={<FormasEspaciales />} />
        <Route path="/parcial1/espacio-planos/planos-proyectantes" element={<PlanosProyectantes />} />
        <Route path="/parcial1/espacio-planos/coplanaridad-rectas" element={<CoplanaridadRectas />} />
        <Route path="/parcial1/espacio-planos/plano-recta-punto" element={<PlanoRectaPunto />} />

        {/* ======================= PARCIAL 2 ======================= */}
        
        {/* P2 Tema 1: Sistemas de Ecuaciones Lineales (SEL) */}
        <Route path="/parcial2/sistemas/definicion-solucion" element={<DefinicionSolucion />} />
        <Route path="/parcial2/sistemas/compatibles" element={<Compatibles />} />
        <Route path="/parcial2/sistemas/incompatibles" element={<Incompatibles />} />
        <Route path="/parcial2/sistemas/matriz-ampliada" element={<MatrizAmpliada />} />
        <Route path="/parcial2/sistemas/pivote" element={<Pivote />} />
        <Route path="/parcial2/sistemas/variables-libres-rango" element={<VariablesLibres />} />

        {/* P2 Tema 2: Matriz Escalonada y Teoremas */}
        <Route path="/parcial2/escalonada/matriz-escalonada" element={<MatrizEscalonada />} />
        <Route path="/parcial2/escalonada/teoremas-sel" element={<TeoremasSel />} />
        <Route path="/parcial2/escalonada/sistemas-homogeneos" element={<SistemasHomogeneos />} />
        <Route path="/parcial2/escalonada/interpretacion" element={<Interpretacion />} />

        {/* P2 Tema 3: Matrices y Clasificación */}
        <Route path="/parcial2/matrices/definicion" element={<Definicion />} />
        <Route path="/parcial2/matrices/iguales-filas-columnas" element={<IgualesFilasColumnas />} />
        <Route path="/parcial2/matrices/cuadradas-nulas" element={<CuadradasNulas />} />
        <Route path="/parcial2/matrices/triangulares-diagonales" element={<TriangularesDiagonales />} />
        <Route path="/parcial2/matrices/escalar" element={<Escalar />} />

        {/* P2 Tema 4: Operaciones con Matrices */}
        <Route path="/parcial2/operaciones/adicion-escalar" element={<AdicionEscalar />} />
        <Route path="/parcial2/operaciones/transposicion" element={<Transposicion />} />
        <Route path="/parcial2/operaciones/producto-matricial" element={<ProductoMatricial />} />

        {/* P2 Tema 5: Propiedades Matriciales */}
        <Route path="/parcial2/propiedades/inversa-identidad" element={<InversaIdentidad />} />
        <Route path="/parcial2/propiedades/solucion-unica" element={<SolucionUnica />} />
        <Route path="/parcial2/propiedades/traza" element={<Traza />} />
        <Route path="/parcial2/propiedades/adicionales" element={<Adicionales />} />

        {/* P2 Tema 6: Determinantes */}
        <Route path="/parcial2/determinantes/concepto" element={<Concepto />} />
        <Route path="/parcial2/determinantes/sarrus-chio" element={<SarrusChio />} />
        <Route path="/parcial2/determinantes/preliminares" element={<Preliminares />} />
        <Route path="/parcial2/determinantes/inversa" element={<Inversa />} />
        <Route path="/parcial2/determinantes/relacion-traza-determinante" element={<RelacionTrazaDeterminante />} />
      </Routes>
    </>
  );
};

export default App;
