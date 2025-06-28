import React from 'react';
import { useLanguage } from '../LanguageContext';
import { Link } from 'react-router-dom';

import PostList from './PostList';
const Home = () => {
  const { language, toggleLanguage } = useLanguage();
  return (
    <>
      <div>
        {language === "en" ? "Home" : "Trang chủ"}
        <button onClick={toggleLanguage} style={{ marginLeft: 10 }}>
          {language === "en" ? "Change to VN" : "Chuyển sang EN"}
        </button>
      </div>

      <Link to="/about">{language === "en" ? "About" : "Giới thiệu"}</Link>
      <PostList></PostList>
    </>
  );
};

export default Home;