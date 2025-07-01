import React from 'react';
import { useNavigate } from 'react-router-dom';

const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <div className="h-screen flex flex-col overflow-hidden">
      
      <div
        className="flex-grow bg-cover bg-top flex flex-col items-center justify-center px-4 md:pb-28 md:pt-28 pt-12 pb-12"
        style={{
          backgroundImage: "url('/images/background.svg')",
        }}
      >
        <div className="text-center bg-white bg-opacity-80 md:px-32 md:py-20 px-12 py-12 rounded-2xl shadow-lg">
          <h1 className="md:text-5xl text-3xl md:p-6 p-4 font-bold text-indigo-600 mb-4">404 Error</h1>
          <p className="md:text-3xl text-xl text-gray-800 md:mb-6 mb-4 p-4">Page not found</p>
          <button
            onClick={() => navigate('/')}
            className="md:px-8 md:py-4 px-6 py-3 md:pt-4 bg-indigo-600 text-white rounded-xl md:text-xl text-lg hover:bg-indigo-700 transition"
          >
            Back to Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
