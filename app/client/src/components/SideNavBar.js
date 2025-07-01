import React from 'react';
import { useNavigate } from 'react-router-dom';

const SideNavBar = () => {
  const navigate = useNavigate();
  return (
    <div className="flex items-center h-full">
      <div className="group z-50">
        <div className="relative bg-indigo-600 text-white rounded-r-lg md:w-10 sm:w-8 w-6 max-w-10 md:h-24 sm:h-16 h-14 max-h-24 flex items-center justify-center transition-all duration-300 md:group-hover:w-32 md:group-hover:max-w-32 md:group-hover:h-80 md:group-hover:max-h-80 sm:group-hover:w-20 sm:group-hover:max-w-20 sm:group-hover:h-60 sm:group-hover:max-h-60 group-hover:w-16 group-hover:max-w-16 group-hover:h-48 group-hover:max-h-48 overflow-visible">

          {/* Arrow Icon */}
          <div className="z-10 transition-transform duration-500 group-hover:hidden">
            <img
              src="/images/arrow.svg"
              alt="hover"
              className="md:w-8 sm:w-6 w-6 max-w-8 md:h-8 sm:h-6 h-6 max-h-8 object-cover"
            />
          </div>

          {/* Social Icons container - absolutely positioned to avoid layout shift */}
          <div className="absolute inset-0 opacity-0 pointer-events-none transition-opacity duration-0 ease-in group-hover:opacity-100 group-hover:pointer-events-auto group-hover:duration-500 flex flex-col items-start md:pl-6 md:pt-8 md:pb-8 sm:pl-2 sm:pt-4 sm:pb-4 pt-3 pb-3 pl-1 text-sm"> 
            <img
              src="/images/linkedin.svg"
              alt="LinkedIn"
              className="md:w-14 md:max-w-14 md:h-14 md:max-h-14 sm:w-12 sm:max-w-12 sm:h-12 sm:max-h-12 h-10 w-10 object-cover md:mb-10 sm:mb-8 mb-6 ml-2 transition-transform duration-300 hover:scale-110"
              onClick={() => window.open("https://www.linkedin.com/in/rhys-smith-3197482a3/", "_blank")}
            />

            <img
              src="/images/indeed.svg"
              alt="Indeed"
              className="md:w-14 md:max-w-14 md:h-14 md:max-h-14 sm:w-12 sm:max-w-12 sm:h-12 sm:max-h-12 h-10 w-10 object-cover md:mb-10 sm:mb-8 mb-6 ml-2 transition-transform duration-300 hover:scale-110"
              onClick={() => window.open("https://profile.indeed.com/p/rhyss-7p6f6hy", "_blank")}
            />
            
            <img
              src="/images/github.svg"
              alt="GitHub"
              className="md:w-14 md:max-w-14 md:h-14 md:max-h-14 sm:w-12 sm:max-w-12 sm:h-12 sm:max-h-12 h-10 w-10 object-cover ml-2 transition-transform duration-300 hover:scale-110"
              onClick={() => window.open("https://github.com/Acr0batOG", "_blank")}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideNavBar;