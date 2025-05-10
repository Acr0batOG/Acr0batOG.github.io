import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import HomePage from './pages/HomePage';
import Projects from './pages/ProjectPage';
import Contact from './pages/ContactPage';
import About from './pages/AboutPage';
import NotFoundPage from './pages/NotFoundPage'


var basepath = "/policy/group1/app";
if (process.env.NODE_ENV === 'development') {
  basepath = "/";
}

const router = createBrowserRouter([
  {
    // '/' path is the homepage/landingpage, TempHomePage should be replaced with the landing page
    path : '/',
    element : <HomePage />
  },
  {
    
    path : '/projects',
    element : <Projects />
  },
  {
    
    path : '/contact',
    element : <Contact />
  },
  {
    
    path : '/about',
    element : <About />
  },
  {
    //'*' routes to any invalid/unavailable routes
    path : '*',
    element : <NotFoundPage />
  },
  
], {basename: basepath})
export const LANGUAGES = [
  { label: "French", code: "fr" },
  { label: "English", code: "en" },
];
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={router}/>)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

