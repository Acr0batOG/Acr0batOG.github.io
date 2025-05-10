import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { HashRouter, Routes, Route } from 'react-router-dom';

import HomePage from './pages/HomePage';
import Projects from './pages/ProjectPage';
import Contact from './pages/ContactPage';
import About from './pages/AboutPage';
import NotFoundPage from './pages/NotFoundPage';

export const LANGUAGES = [
  { label: "French", code: "fr" },
  { label: "English", code: "en" },
];

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <HashRouter>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/about" element={<About />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  </HashRouter>
);

reportWebVitals();
