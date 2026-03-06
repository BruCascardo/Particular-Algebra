import React, { createContext, useContext, useState, useEffect } from 'react';

interface ConfigContextProps {
  isTrainingMode: boolean;
  toggleTrainingMode: () => void;
}

const ConfigContext = createContext<ConfigContextProps | undefined>(undefined);

export const ConfigProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isTrainingMode, setIsTrainingMode] = useState<boolean>(() => {
    // Intentar leer la persistencia desde localStorage al inicializar
    const saved = localStorage.getItem('trainingMode');
    return saved === 'true';
  });

  // Cada vez que cambie, lo guardamos para que persista
  useEffect(() => {
    localStorage.setItem('trainingMode', String(isTrainingMode));
  }, [isTrainingMode]);

  const toggleTrainingMode = () => {
    setIsTrainingMode(prev => !prev);
  };

  return (
    <ConfigContext.Provider value={{ isTrainingMode, toggleTrainingMode }}>
      {children}
    </ConfigContext.Provider>
  );
};

export const useConfig = () => {
  const context = useContext(ConfigContext);
  if (context === undefined) {
    throw new Error('useConfig must be used within a ConfigProvider');
  }
  return context;
};
