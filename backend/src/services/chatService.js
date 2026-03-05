import { GoogleGenerativeAI } from '@google/generative-ai';
// Instanciar la gema de Gemini usando la clave levantada de ENV
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || '');
export const processChat = async (message, topicContext, history) => {
    if (!process.env.GEMINI_API_KEY) {
        throw new Error('GEMINI_API_KEY no detectada en el .env');
    }
    // Estableciendo las instrucciones doradas contextuales
    const model = genAI.getGenerativeModel({
        model: 'gemini-1.5-flash',
        systemInstruction: `Eres un profesor experto y ultra detallista en Álgebra Vectorial y Geometría Analítica.\nEl alumno te está preguntando dudas específicas sobre el subtema exacto de: "${topicContext}".\nResponde de forma clara interactuando directamente con su duda. Usa la sintaxis matemática de KaTeX ($...$ para inline o $$...$$ para bloques grandes) cuando incluyas fórmulas. Trata de ser educado, y no repitas cosas muy obvias que ya se ven en pantalla a menos que el alumno lo pida.`
    });
    // Configurar el hilo de conversación si se provee historial
    const chatSessions = model.startChat({
        history: history.map((msg) => ({
            role: msg.role === 'ai' ? 'model' : 'user',
            parts: [{ text: msg.text }],
        })),
    });
    const result = await chatSessions.sendMessage(message);
    return result.response.text();
};
//# sourceMappingURL=chatService.js.map