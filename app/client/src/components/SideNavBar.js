import React from 'react';
import { useNavigate } from 'react-router-dom';

const SideNavBar = () => {
  const navigate = useNavigate();
  return (
    <div className="fixed top-1/2 left-0 transform -translate-y-1/2 group z-50">
      <div className="relative bg-indigo-600 text-white rounded-r-lg w-10 h-24 flex items-center justify-center transition-all duration-300 group-hover:w-32 group-hover:h-80 overflow-visible">

        {/* Arrow Icon */}
        <div className="z-10 transition-transform duration-500 group-hover:hidden">
          <img
            src="/images/arrow.svg"
            alt="hover"
            className="w-8 h-8 object-cover"
          />
        </div>

        {/* Social Icons container - absolutely positioned to avoid layout shift */}
        <div className="absolute inset-0  opacity-0 pointer-events-none transition-opacity duration-0 ease-in group-hover:opacity-100 group-hover:pointer-events-auto group-hover:duration-500 flex flex-col items-start pl-6 pt-8 pb-8 text-sm"> 
        <img
          src="/images/linkedin.svg"
          alt="LinkedIn"
          className="w-14 h-14 object-cover mb-10 ml-2 transition-transform duration-300 hover:scale-110"
          onClick={() => window.open("https://www.linkedin.com/in/rhys-smith-3197482a3/", "_blank")}
        />

          <img
            src="/images/indeed.svg"
            alt="Indeed"
            className="w-14 h-14 object-cover mb-10 ml-2 transition-transform duration-300 hover:scale-110"
            onClick={() => window.open("https://profile.indeed.com/p/rhyss-7p6f6hy", "_blank")}
          />
          <img
            src="/images/github.svg"
            alt="GitHub"
            className="w-14 h-14 object-cover ml-2 transition-transform duration-300 hover:scale-110"
            onClick={() => window.open("https://github.com/Acr0batOG", "_blank")}
          />
        </div>
      </div>
    </div>
  );
};

export default SideNavBar;
