import React from 'react';
import { useLanguage } from '../LanguageContext';

const Contact = () => {
  const { language, toggleLanguage } = useLanguage();
  return (
    <div>
      {language === 'en' ? 'Contact' : 'Liên hệ'}
      <button onClick={toggleLanguage} style={{marginLeft: 10}}>
        {language === 'en' ? 'Change to VN' : 'Chuyển sang EN'}
      </button>
    </div>
  );
};

export default Contact;