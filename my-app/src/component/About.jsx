import React from 'react';
import { useLanguage } from '../LanguageContext';
import { Link } from 'react-router-dom';
const About = () => {
  const { language, toggleLanguage } = useLanguage();
  return (
    <>
      <div>
        {language === "en" ? "About" : "Giới thiệu"}
        <button onClick={toggleLanguage} style={{ marginLeft: 10 }}>
          {language === "en" ? "Change to VN" : "Chuyển sang EN"}
        </button>
      </div>

      <Link to="/">{language === "en" ? "Home" : "Trang chủ"}</Link>
    </>
  );
};

export default About;