import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import SideNavBar from '../components/SideNavBar';
import { useTranslation } from "react-i18next";

const HomePage = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
 
  return (
    <div className="h-screen flex flex-col overflow-hidden overflow-y-auto overflow-x-auto">
      <Header />
      
      <div
        className="md:flex-auto sm:flex-grow flex-grow bg-cover bg-top flex"
        style={{
          backgroundImage: "url('/images/background.svg')",
        }}
      >
        {/* Side navigation column */}
        <div className="w-0 h-full">
          <SideNavBar />
        </div>
        
        {/* Main content column */}
        <div className="flex-1 flex flex-col items-center text-black md:pt-48 sm:pt-24 pt-24 space-y-20 md:pb-36 sm:pb-24 pb-24 md:pl-0 md:pr-0 sm:pr-24 sm:pl-24 pr-10 pl-10">
          <h1 className="md:text-5xl sm:text-3xl text-3xl font-bold text-center uppercase tracking-wide">
            Hey, I'm Rhys Smith
          </h1>

          <p className="md:text-xl sm:text-lg text-lg max-w-3xl text-center leading-relaxed">
            I'm a full-stack developer with a passion for design, coding, and everything in between. I enjoy building web applications and creating games—bringing ideas to life through code and design is what helps me strive.
          </p>

          <div className="flex md:gap-6 sm:gap-4 gap-4 mt-4">
            <button
              onClick={() => navigate("/projects")}
              className="bg-indigo-600 hover:bg-indigo-500 text-white text-xl font-semibold md:px-12 md:py-4 sm:px-6 sm:py-2 px-6 py-2 rounded-lg transition-transform transform hover:scale-105"
            >
              Projects
            </button>
            <button
              onClick={() => navigate("/contact")}
              className="bg-indigo-600 hover:bg-indigo-500 text-white text-xl font-semibold md:px-12 md:py-4 sm:px-6 sm:py-2 px-6 py-2 rounded-lg transition-transform transform hover:scale-105"
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