# Particular Algebra: Plataforma Interactiva de Álgebra y Geometría Analítica

Particular Algebra es una plataforma web educativa diseñada para facilitar el aprendizaje interactivo de las matemáticas universitarias (Álgebra y Geometría Analítica). Esta aplicación tipo *Full-Stack* proporciona un temario guiado que abarca desde la geometría del espacio (Parcial 1) hasta el cálculo avanzado de matrices, determinantes y sistemas de ecuaciones lineales (Parcial 2), acompañados de una interfaz limpia con renderizado de fórmulas LaTeX (`React-KaTeX`), un bot asistente impulsado por inteligencia artificial y un motor de búsqueda global de texto integrado (Text Fragments).

---

## 🚀 Arquitectura del Proyecto

El proyecto se divide en dos grandes módulos, cada uno contenido en su respectiva carpeta:

1. **`frontend/`**: Aplicación web construida en React + Vite con TypeScript. Maneja todas las vistas de los Parciales, enrutamiento, renderizado matemático y el Chatbot en el navegador de los estudiantes.
2. **`backend/`**: Servidor Node.js + Express + TypeScript. Responsable de procesar las peticiones del Chatbot hacia el proveedor de Inteligencia Artificial (Google Gemini) y, opcionalmente, de persistir historiales en base de datos gracias a MikroORM.

---

## 🛠️ Requisitos Previos

Asegúrate de tener instalados los siguientes programas en tu computadora antes de comenzar:
- **Node.js**: Versión 18 o superior recomendada.
- **NPM**: Gestor de paquetes de Node.

---

## 🔑 Configuración de las Variables de Entorno (`.env`) y la IA

Para que el asistente virtual **AiChatBot** del frontend funcione y razone matemáticamente, el backend necesita conectarse a la nube de una IA. La aplicación está diseñada actualmente para utilizar los veloces modelos de de **Google Gemini**.

1. **Obtener una API Key Gratuita**: 
   - Dirígete a **[Google AI Studio (aistudio.google.com)](https://aistudio.google.com/app/apikey)**.
   - Inicia sesión con tu cuenta de Google, entra en "Get API key" y genera una nueva clave secreta.
2. **Configurar el archivo `.env`**:
   - Navega al directorio del servidor: `cd backend`
   - Localiza el archivo de plantilla llamado `.env.example`.
   - Crea un archivo nuevo en esta misma carpeta llamado estrictamente **`.env`** (con el punto incluido).
   - Escribe el siguiente contenido reemplazando el valor con tu clave real:
     ```env
     GEMINI_API_KEY=AIzaSyTuClaveSecretaGenerada123456789
     ```
3. **¿Qué Modelos utiliza la plataforma?**
   El código en el backend (`backend/src/services/chatService.ts`) está configurado para aprovechar los modelos de inferencia instantánea. Específicamente, solicitará automáticamente el modelo **`gemini-2.5-flash`** como primera opción. Si este modelo llegara a sufrir recortes de cuota temporal, el sistema cuenta con un mecanismo *"Fallback"* automático que cambiará instantáneamente al modelo más ligero **`gemini-1.5-flash-8b`**, asegurando que los usuarios nunca se queden sin chatear.

---

## 💻 Instrucciones para Desplegar el Entorno Local (Paso a Paso)

Para arrancar el proyecto en tu computadora, debes inicializar ambos entornos de manera independiente (usualmente abriendo dos ventanas de terminal separadas).

### 1. Iniciar el Backend (Servidor Node)
Abre tu consola o terminal y ejecuta los siguientes comandos:

```bash
# Ingresar al directorio del servidor
cd backend

# Instalar todas las dependencias vitales la primera vez
npm install

# Iniciar el servidor de desarrollo (con recarga automática)
npm run dev
# (Nota: Algunas versiones usan el comando `npx tsx src/index.ts`. Ambas opciones inician el servidor puerto 3001)
```
Si el archivo `.env` está bien configurado, la consola indicará un mensaje de que la API de Chat está funcionando y conectada.

### 2. Iniciar el Frontend (Interfaz React)
Abre **otra ventana nueva** de terminal y ejecuta:

```bash
# Ingresar al directorio de la aplicación web
cd frontend

# Instalar los paquetes React, React-KaTex, y Router
npm install

# Compilar en caliente y levantar la web localmente con Vite
npm run dev
```

El terminal te proveerá un enlace local (usualmente `http://localhost:5173/`). Solo tienes que hacer *Ctrl + Click* sobre el enlace o escribirlo en tu navegador favorito como Google Chrome o Edge. 

¡Listo! Ya tienes la Plataforma Educativa andando completamente en tu propia máquina.

---

## 🔎 Notas Especiales sobre el Buscador Global
Si en algún momento el autor añade nuevos párrafos, páginas de temas nuevos o modifica textos, recuerda actualizar el **Motor de Búsqueda Global**. Para que el Autocompletado registre y aprenda los nuevos textos del Frontend, debes correr el script indexador en la terminal posicionado en el directorio `frontend`:

```bash
cd frontend
npx tsx scripts/build-search-index.ts
```
*(Esto actualizará silenciosamente y en un segundo la base de datos `searchIndex.json` interna que potencia a la barra `<SearchBar>`).*
