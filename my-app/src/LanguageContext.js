import React, { createContext, useContext, useState } from 'react';

// Tạo context
const LanguageContext = createContext();

// Provider
export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en'); // 'en' hoặc 'vn'

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === 'en' ? 'vn' : 'en'));
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Custom hook
export const useLanguage = () => useContext(LanguageContext);
