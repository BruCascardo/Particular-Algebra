import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import chatRoutes from './routes/chatRoutes.js';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
// Habilitar peticiones desde el front (Vite típicamente corre en 5173 o puertos hermanos)
app.use(cors({ origin: true })); 

// Enrutar endpoints de chat bajo /api/chat
app.use('/api', chatRoutes);

app.listen(PORT, () => {
  console.log(`Servidor Express levantado en el puerto ${PORT}`);
});
