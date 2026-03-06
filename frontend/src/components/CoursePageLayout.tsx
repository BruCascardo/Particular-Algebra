import React from 'react';
import { useNavigate } from 'react-router-dom';
import './CoursePageLayout.css';

export type SubtopicType = string | { name: string, path: string | null };

export interface TopicType {
  title: string;
  subtopics: SubtopicType[];
}

interface CoursePageLayoutProps {
  title: string;
  subtitle: string;
  topics: TopicType[];
  themeDecoration: 'vector' | 'matrix' | 'transform';
  headerDecorationText?: string;
}

const CoursePageLayout: React.FC<CoursePageLayoutProps> = ({ 
  title, 
  subtitle, 
  topics, 
  themeDecoration,
  headerDecorationText 
}) => {
  const navigate = useNavigate();

  return (
    <div className={`parcial-container theme-${themeDecoration}`}>
      <nav className="back-nav">
        <button className="back-btn" onClick={() => navigate('/')}>
          <span className="arrow">←</span> Volver al inicio
        </button>
      </nav>

      <header className="parcial-header">
        <h1>{title}</h1>
        <p className="subtitle">{subtitle}</p>
        {headerDecorationText && (
          <div className="header-decoration" data-content={headerDecorationText}></div>
        )}
      </header>

      <main className="topics-list">
        {topics.map((topic, index) => (
          <div key={index} className="topic-card">
            <h2 className="topic-title">{topic.title}</h2>
            <ul className="subtopics-list">
              {topic.subtopics.map((subtopic, subIndex) => {
                let name = "";
                let path = null;
                
                if (typeof subtopic === 'string') {
                  name = subtopic;
                } else if (subtopic && typeof subtopic === 'object') {
                  name = subtopic.name || "";
                  path = subtopic.path || null;
                }

                return (
                  <li 
                    key={subIndex} 
                    className={`subtopic-item ${path ? 'clickable' : ''}`}
                    onClick={() => path && navigate(path)}
                  >
                    <span className="bullet-point"></span>
                    {String(name)}
                  </li>
                );
              })}
            </ul>
            <div className="topic-decoration-line"></div>
          </div>
        ))}
      </main>
    </div>
  );
};

export default CoursePageLayout;
