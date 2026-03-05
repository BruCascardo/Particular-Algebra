import { Router } from 'express';
import { handleChat } from '../controllers/chatController.js';
import { middlewareSecurity } from '../middlewares/security.js';

const router = Router();

// Definición de los endpoints
router.post('/chat', middlewareSecurity, handleChat);

export default router;
