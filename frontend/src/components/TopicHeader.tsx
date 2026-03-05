import React from 'react';
import { useNavigate } from 'react-router-dom';

interface TopicHeaderProps {
  title: string;
  subtitle: string;
  backPath?: string;
  backLabel?: string;
}

const TopicHeader: React.FC<TopicHeaderProps> = ({ 
  title, 
  subtitle, 
  backPath = '/parcial1',
  backLabel = 'Volver al Temario'
}) => {
  const navigate = useNavigate();

  return (
    <>
      <nav className="back-nav">
        <button className="back-btn" onClick={() => navigate(backPath)}>
          <span className="arrow">←</span> {backLabel}
        </button>
      </nav>
      <header className="topic-header">
        <h1>{title}</h1>
        <p className="subtitle">{subtitle}</p>
      </header>
    </>
  );
};

export default TopicHeader;
