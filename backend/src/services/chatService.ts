import { GoogleGenerativeAI } from '@google/generative-ai';

// Instanciar la gema de Gemini usando la clave levantada de ENV
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || '');

export const processChat = async (message: string, topicContext: string, history: any[]) => {
  if (!process.env.GEMINI_API_KEY) {
    throw new Error('GEMINI_API_KEY no detectada en el .env');
  }

  // Instrucciones doradas contextuales (actualizadas para ser concisas)
  const systemInstruction = `Eres un profesor experto en Álgebra Vectorial y Geometría Analítica.\nEl alumno te pregunta sobre el subtema: "${topicContext}".\nREGLA ESTRICTA: Tus respuestas deben ser EXTREMADAMENTE concisas, concretas y directas al grano. NO des explicaciones teóricas largas salvo que el alumno te lo pida explícitamente. Usa sintaxis de KaTeX ($...$ o $$...$$) para fórmulas.`;

  const formattedHistory = history.map((msg) => ({
    role: msg.role === 'ai' ? 'model' : 'user',
    parts: [{ text: msg.text }],
  }));

  try {
    // Intento 1: Proveer calidad con el modelo principal
    const model = genAI.getGenerativeModel({
      model: 'gemini-2.5-flash',
      systemInstruction
    });

    const chatSession = model.startChat({ history: formattedHistory });
    const result = await chatSession.sendMessage(message);
    return result.response.text();
  } catch (error: any) {
    // Si la cuota (429) o el límite de modelo es superado, pasar al plan B
    if (error.status === 429 || (error.message && error.message.includes('429'))) {
      console.warn("⚠️ Cuota excedida en gemini-2.5-flash. Cambiando al modelo fallback (gemini-1.5-flash-8b)...");
      try {
        const fallbackModel = genAI.getGenerativeModel({
          model: 'gemini-1.5-flash-8b',
          systemInstruction
        });
        
        const fallbackSession = fallbackModel.startChat({ history: formattedHistory });
        const fallbackResult = await fallbackSession.sendMessage(message);
        return fallbackResult.response.text();
      } catch (fallbackError: any) {
        throw new Error("Ambos modelos fallaron por límite de API: " + fallbackError.message);
      }
    }
    // Si es otro error (autenticación o de red general) lanzarlo normal
    throw error;
  }
};
