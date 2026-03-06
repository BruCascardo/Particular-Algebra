import React, { useState } from 'react';
import type { QuizQuestion } from '../data/quizzes';
import './TrainingQuiz.css';

interface TrainingQuizProps {
  questions: QuizQuestion[];
  onPass: () => void;
  topicName: string;
}

const TrainingQuiz: React.FC<TrainingQuizProps> = ({ questions, onPass, topicName }) => {
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, number>>({});
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [score, setScore] = useState<number>(0);

  const handleSelect = (questionId: number, optionIndex: number) => {
    if (isSubmitted) return; // Disallow changes after submission
    setSelectedAnswers(prev => ({
      ...prev,
      [questionId]: optionIndex
    }));
  };

  const handleSubmit = () => {
    let currentScore = 0;
    questions.forEach(q => {
      if (selectedAnswers[q.id] === q.correctAnswerIndex) {
        currentScore++;
      }
    });
    setScore(currentScore);
    setIsSubmitted(true);

    // Condición de aprobación: 7/10 o más
    if (currentScore >= 7) {
      onPass();
    }
  };

  const handleRetry = () => {
    setIsSubmitted(false);
    setSelectedAnswers({});
    setScore(0);
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
  };

  const hasAnsweredAll = Object.keys(selectedAnswers).length === questions.length;
  const passed = score >= 7;

  return (
    <div className="quiz-container">
      <div className="quiz-header">
        <h3>Mini-Examen de Entrenamiento</h3>
        <p>Tema: {topicName}</p>
        <p style={{ fontSize: '0.9rem', marginTop: '0.5rem', color: '#cbd5e1' }}>
          Para continuar al siguiente tema necesitas obtener al menos <strong>7 respuestas correctas sobre 10</strong>.
        </p>
      </div>

      <div className="quiz-questions">
        {questions.map((q, idx) => (
          <div key={q.id} className="question-card">
            <span className="question-number">Pregunta {idx + 1} de {questions.length}</span>
            <p className="question-text">{q.question}</p>
            
            <div className="options-grid">
              {q.options.map((opt, optIdx) => {
                const isSelected = selectedAnswers[q.id] === optIdx;
                const isCorrect = isSubmitted && optIdx === q.correctAnswerIndex;
                const isWrongSelection = isSubmitted && isSelected && optIdx !== q.correctAnswerIndex;
                
                let btnClass = "option-btn";
                if (isSelected && !isSubmitted) btnClass += " selected";
                if (isCorrect) btnClass += " correct";
                if (isWrongSelection) btnClass += " incorrect";

                return (
                  <button
                    key={optIdx}
                    className={btnClass}
                    onClick={() => handleSelect(q.id, optIdx)}
                    disabled={isSubmitted}
                  >
                    {opt}
                  </button>
                );
              })}
            </div>

            {isSubmitted && (
              <div className="explanation-box">
                <strong>Análisis: </strong> {q.explanation}
              </div>
            )}
          </div>
        ))}
      </div>

      {!isSubmitted ? (
        <button 
          className="submit-quiz-btn" 
          onClick={handleSubmit}
          disabled={!hasAnsweredAll}
        >
          {hasAnsweredAll ? "Entregar Simulacro" : "Responde todas las preguntas"}
        </button>
      ) : (
        <div className="quiz-results">
          <span className={`results-score ${passed ? 'passed' : 'failed'}`}>
            {score} / {questions.length}
          </span>
          <p className="results-message">
            {passed 
              ? "¡Excelente! Demostraste un dominio sólido del tema. Ya puedes avanzar." 
              : "No has alcanzado la calificación mínima de 7. Revisa tus errores teóricos e inténtalo de nuevo."}
          </p>
          {!passed && (
            <button className="retry-btn" onClick={handleRetry}>
              Reintentar Simulacro
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default TrainingQuiz;
