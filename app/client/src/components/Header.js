import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      {/* Top Header Bar */}
      <header className="flex justify-between items-center p-6 md:pl-12 sm:pl-6 bg-white shadow-md border-b-[4.8px] border-gray-400">
        {/* Left Side: Profile Image + Name */}
        <div className="flex items-center space-x-8">
          <div className="w-16 h-16 rounded-full border-[2px] border-indigo-600 bg-gray-300 overflow-hidden transition-transform duration-300 hover:scale-[1.2]">
            <img
              src="/images/rhys_cartoon.png"
              alt="Profile"
              className="w-full h-full object-cover"
              onClick={() => navigate("/about")}
              style={{ imageRendering: 'optimize-contrast', backfaceVisibility: 'hidden' }}
            />
          </div>
          <span className="text-xl font-semibold text-gray-800">Rhys Smith</span>
        </div>

        {/* Right Side: Desktop Nav Buttons */}
        <nav className="hidden md:flex space-x-8">
          <button
            className="text-gray-900 text-xl hover:text-indigo-600 transition-transform duration-300 hover:scale-[1.2] pr-12"
            onClick={() => navigate("/")}
          >
            Home
          </button>
          <button
            className="text-gray-900 text-xl hover:text-indigo-600 transition-transform duration-300 hover:scale-[1.2] pr-12"
            onClick={() => navigate("/about")}
          >
            About
          </button>
          <button
            className="text-gray-900 text-xl hover:text-indigo-600 transition-transform duration-300 hover:scale-[1.2] pr-12"
            onClick={() => navigate("/projects")}
          >
            Projects
          </button>
          <button
            className="text-gray-900 text-xl hover:text-indigo-600 transition-transform duration-300 hover:scale-[1.2] pr-12"
            onClick={() => navigate("/contact")}
          >
            Contact
          </button>
        </nav>

        {/* Mobile Hamburger Button */}
        <button
          className="md:hidden flex flex-col space-y-1.5"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <div className="w-6 h-[2.5px] rounded-md bg-gray-900"></div>
          <div className="w-6 h-[2.5px] rounded-md bg-gray-900"></div>
          <div className="w-6 h-[2.5px] rounded-md bg-gray-900"></div>
        </button>
      </header>

      {/* Mobile Menu Dropdown (Outside Header) */}
      {isMenuOpen && (
        <div className="md:hidden flex flex-col items-end px-6 py-4 bg-white shadow-md border-b-[4.8px] border-gray-400 space-y-4">
          <button
            className="font-medium text-lg text-gray-900 hover:text-indigo-600"
            onClick={() => {
              navigate("/");
              setIsMenuOpen(false);
            }}
          >
            Home
          </button>
          <button
            className="font-medium text-lg text-gray-900 hover:text-indigo-600"
            onClick={() => {
              navigate("/about");
              setIsMenuOpen(false);
            }}
          >
            About
          </button>
          <button
            className="font-medium text-lg text-gray-900 hover:text-indigo-600"
            onClick={() => {
              navigate("/projects");
              setIsMenuOpen(false);
            }}
          >
            Projects
          </button>
          <button
            className="font-medium text-lg text-gray-900 hover:text-indigo-600"
            onClick={() => {
              navigate("/contact");
              setIsMenuOpen(false);
            }}
          >
            Contact
          </button>
        </div>
      )}
    </>
  );
};

export default Header;
