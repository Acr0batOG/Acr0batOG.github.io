import React from 'react';
import { useNavigate }  from 'react-router-dom';


const Header = () => {
    const navigate = useNavigate();
  return (
    <header className="flex justify-between items-center p-6 pl-12 bg-white shadow-md border-b-[4.8px] border-gray-400">
      {/* Left Side: Profile Image + Name */}
      <div className="flex items-center space-x-8">
        {/* Circle Image Placeholder */}
        <div className="w-12 h-12 rounded-full bg-gray-300 overflow-hidden transition-transform duration-300 hover:scale-[1.2]">
        <img
            src="/images/rhys_2.jpg"
            alt="Profile"
            className="w-full h-full object-cover"
            onClick={() => navigate("/about")}
        />
        </div>

        <span className="text-xl font-semibold text-gray-800">Rhys Smith</span>
      </div>

      {/* Right Side: Nav Buttons */}
      <nav className="flex space-x-6">
        <button className="text-gray-900 text-lg hover:text-indigo-700 transition-transform duration-300 hover:scale-[1.2] pr-12" onClick={() => navigate("/")}>Home</button>
        <button className="text-gray-900 text-lg hover:text-indigo-700 transition-transform duration-300 hover:scale-[1.2] pr-12" onClick={() => navigate("/about")}>About</button>
        <button className="text-gray-900 text-lg hover:text-indigo-700 transition-transform duration-300 hover:scale-[1.2] pr-12" onClick={() => navigate("/project")}>Projects</button>
        <button className="text-gray-900 text-lg hover:text-indigo-700 transition-transform duration-300 hover:scale-[1.2] pr-12" onClick={() => navigate("/contact")}>Contact</button>
      </nav>
    </header>
  );
};

export default Header;
