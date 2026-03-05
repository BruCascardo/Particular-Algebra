import React, { useState, useRef, useEffect } from 'react';
import { InlineMath, BlockMath } from 'react-katex';
import './AiChatBot.css'; // Añadiremos los estilos a continuación

interface Message {
  role: 'user' | 'ai';
  text: string;
}

interface AiChatBotProps {
  topicContext: string;
  topicTitle: string;
}

const renderMarkdownElement = (text: string, keyPrefix: string) => {
  // Expresión regular para separar **negritas**, *cursivas* y `codigo`
  const parts = text.split(/(\*\*[\s\S]*?\*\*|\*[\s\S]*?\*|`[\s\S]*?`)/g);
  
  return parts.map((p, idx) => {
    const key = `${keyPrefix}-${idx}`;
    
    if (p.startsWith('**') && p.endsWith('**')) {
      return <strong key={key}>{p.slice(2, -2)}</strong>;
    }
    if (p.startsWith('*') && p.endsWith('*') && p.length > 2) {
      return <em key={key}>{p.slice(1, -1)}</em>;
    }
    if (p.startsWith('`') && p.endsWith('`')) {
      return <code key={key} className="chat-inline-code">{p.slice(1, -1)}</code>;
    }
    
    // Procesar texto normal preservando saltos de línea reales
    return (
      <span key={key}>
        {p.split('\n').map((line, i, arr) => (
          <React.Fragment key={`${key}-line-${i}`}>
            {line}
            {i < arr.length - 1 && <br />}
          </React.Fragment>
        ))}
      </span>
    );
  });
};

// Convertidor que primero separa bloques KaTeX y luego envía el resto al de Markdown
const renderTextWithKaTeX = (text: string) => {
  // Dividimos el texto detectando los dólares ($$ para bloques, $ para inlines)
  const parts = text.split(/(\$\$[\s\S]*?\$\$|\$[\s\S]*?\$)/g);
  return parts.map((part, index) => {
    if (part.startsWith('$$') && part.endsWith('$$')) {
      const math = part.slice(2, -2);
      return <BlockMath key={index} math={math} />;
    } else if (part.startsWith('$') && part.endsWith('$')) {
      const math = part.slice(1, -1);
      return <InlineMath key={index} math={math} />;
    }
    // Si no es matemática, lo mandamos al renderizador de negritas y cursivas
    return renderMarkdownElement(part, `text-${index}`);
  });
};

const AiChatBot: React.FC<AiChatBotProps> = ({ topicContext, topicTitle }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputVal, setInputVal] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const toggleChat = () => setIsOpen(!isOpen);

  // Auto-scroll estético hacia abajo al recibir un nuevo mensaje
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!inputVal.trim()) return;
    
    const userMsg = inputVal.trim();
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setInputVal('');
    setIsLoading(true);

    try {
      // Recordá que process.env.VITE_BACKEND_URL generalmente es el localhost del backend (ej: http://localhost:3000)
      const res = await fetch('http://localhost:3000/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': 'mi-secreto' // Usamos esto por el middlewareSecurity que vimos del Backend
        },
        body: JSON.stringify({
          message: userMsg,
          topicContext: topicContext,
          // Gemini requiere SOLO el historial previo, NO el mensaje que estamos enviando ahora
          history: messages 
        })
      });

      const data = await res.json();
      
      if (data.success) {
        setMessages(prev => [...prev, { role: 'ai', text: data.response }]);
      } else {
        setMessages(prev => [...prev, { role: 'ai', text: `⚠️ Error de conexión: ${data.error}` }]);
      }

    } catch (err: any) {
      setMessages(prev => [...prev, { role: 'ai', text: `⚠️ Error de servidor: No se pudo atrapar el servicio.` }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };

  return (
    <div className={`ai-chatbot-container ${isOpen ? 'open' : ''}`}>
      {!isOpen && (
        <button className="chat-fab-button" onClick={toggleChat}>
          <span className="fab-icon">✨</span> Tutor IA
        </button>
      )}

      {isOpen && (
        <div className="chat-window">
          <div className="chat-header">
            <h4>🧠 Gemini Tutor</h4>
            <span className="topic-badge">{topicTitle}</span>
            <button className="close-btn" onClick={toggleChat}>&times;</button>
          </div>

          <div className="chat-messages">
            {messages.length === 0 && (
              <div className="empty-state">
                <p>¡Hola! Soy tu asistente de IA especialista en este tema.</p>
                <p>¿Qué duda trigonométrica o analítica tenés sobre <strong>{topicTitle}</strong>?</p>
              </div>
            )}
            
            {messages.map((msg, idx) => (
              <div key={idx} className={`message-bubble ${msg.role}`}>
                {renderTextWithKaTeX(msg.text)}
              </div>
            ))}
            
            {isLoading && (
              <div className="message-bubble ai loading">
                 <div className="dot-typing"></div>
                 <span style={{marginLeft: '20px', fontSize:'0.8rem', color: '#666'}}>Gemini está pensando...</span>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <div className="chat-input-area">
            <input 
              type="text" 
              placeholder="Escribí tu pregunta sobre el tema..."
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              onKeyDown={handleKeyDown}
              disabled={isLoading}
            />
            <button onClick={handleSend} disabled={isLoading || !inputVal.trim()}>
              ➤
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AiChatBot;
