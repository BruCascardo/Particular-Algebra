import { processChat } from '../services/chatService.js';
export const handleChat = async (req, res) => {
    try {
        const { message, topicContext, history } = req.body;
        if (!message || !topicContext) {
            res.status(400).json({ success: false, error: 'Faltan parámetros requeridos (message, topicContext)' });
            return;
        }
        const aiResponse = await processChat(message, topicContext, history || []);
        res.json({ success: true, response: aiResponse });
    }
    catch (error) {
        console.error('Error en handleChat:', error);
        res.status(500).json({ success: false, error: error.message || 'Error interno del servidor resolviendo la IA' });
    }
};
//# sourceMappingURL=chatController.js.map