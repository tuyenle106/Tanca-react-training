// import logo from './logo.svg';
import './App.css';

// component 
import CardName from './component/CardName';
import Clock from './component/Clock';
import ShowName from './component/ShowName';
import TodoList from './component/TodoList';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './component/Home';
import About from './component/About';
import Contact from './component/Contact';
import { LanguageProvider } from './LanguageContext';

function App() {
  return (
    <LanguageProvider>
      {/* <CardName></CardName>
      <ShowName></ShowName>
      <TodoList></TodoList>
      <Clock></Clock> */}

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </LanguageProvider>
  );
}

export default App;
