import React from 'react';
import { useNavigate } from 'react-router-dom';

const SideNavBar = () => {
  const navigate = useNavigate();
  return (
    <div className="flex items-center h-full">
      <div className="group z-50">
        <div className="relative bg-indigo-600 text-white rounded-r-lg md:w-10 sm:w-8 max-w-10 md:h-24 sm:h-16 max-h-24 flex items-center justify-center transition-all duration-300 group-hover:w-32 group-hover:max-w-32 group-hover:h-80 group-hover:max-h-80 overflow-visible">

          {/* Arrow Icon */}
          <div className="z-10 transition-transform duration-500 group-hover:hidden">
            <img
              src="/images/arrow.svg"
              alt="hover"
              className="md:w-8 sm:w-6 max-w-8 md:h-8 sm:h-6 max-h-8 object-cover"
            />
          </div>

          {/* Social Icons container - absolutely positioned to avoid layout shift */}
          <div className="absolute inset-0 opacity-0 pointer-events-none transition-opacity duration-0 ease-in group-hover:opacity-100 group-hover:pointer-events-auto group-hover:duration-500 flex flex-col items-start md:pl-6 md:pt-8 md:pb-8 sm:pl-2 sm:pt-4 sm:pb-4 text-sm"> 
            <img
              src="/images/linkedin.svg"
              alt="LinkedIn"
              className="w-14 max-w-14 h-14 max-h-14 object-cover mb-10 ml-2 transition-transform duration-300 hover:scale-110"
              onClick={() => window.open("https://www.linkedin.com/in/rhys-smith-3197482a3/", "_blank")}
            />

            <img
              src="/images/indeed.svg"
              alt="Indeed"
              className="w-14 max-w-14 h-14 max-h-14 object-cover mb-10 ml-2 transition-transform duration-300 hover:scale-110"
              onClick={() => window.open("https://profile.indeed.com/p/rhyss-7p6f6hy", "_blank")}
            />
            
            <img
              src="/images/github.svg"
              alt="GitHub"
              className="w-14 max-w-14 h-14 max-h-14 object-cover ml-2 transition-transform duration-300 hover:scale-110"
              onClick={() => window.open("https://github.com/Acr0batOG", "_blank")}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideNavBar;