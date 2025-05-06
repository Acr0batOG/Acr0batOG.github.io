import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import SideNavBar from '../components/SideNavBar';
import { useTranslation } from "react-i18next";
const HomePage = () => {
  const navigate = useNavigate();
  const t = useTranslation();
 
  return (
    <div className="h-screen flex flex-col overflow-hidden overflow-y-auto overflow-x-auto">
      <Header />
      <SideNavBar />
      <div
        className="flex-grow bg-cover bg-center flex flex-col items-center px-4"
        style={{
          backgroundImage: "url('/images/background.svg')",
        }}
      >
        <div className="flex flex-col items-center text-black pt-48 space-y-20 pb-36">
          <h1 className="text-5xl font-bold uppercase tracking-wide">
            Hey, I'm Rhys Smith
          </h1>

          <p className="text-xl max-w-3xl text-center leading-relaxed">
          I'm a full-stack developer with a passion for design, coding, and everything in between. I enjoy building web applications and creating games—bringing ideas to life through code and design is what helps me strive.
          </p>

          <div className="flex gap-6 mt-4">
            <button
              onClick={() => navigate("/projects")}
              className="bg-indigo-600 hover:bg-indigo-500 text-white text-xl font-semibold px-12 py-4 rounded-lg transition-transform transform hover:scale-105"
            >
              Projects
            </button>
            <button
              onClick={() => navigate("/contact")}
              className="bg-indigo-600 hover:bg-indigo-500 text-white text-xl font-semibold px-12 py-4 rounded-lg transition-transform transform hover:scale-105"
            >
              Contact
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;


