import React from 'react';
import { useNavigate } from 'react-router-dom';

const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <div className="h-screen flex flex-col overflow-hidden overflow-y-auto">
      
      <div
        className="flex-grow bg-cover bg-center flex flex-col items-center justify-center px-4 pb-28 pt-28"
        style={{
          backgroundImage: "url('/images/background.svg')",
        }}
      >
        <div className="text-center bg-white bg-opacity-80 px-32 py-20 rounded-2xl shadow-lg">
          <h1 className="text-5xl p-6 font-bold text-indigo-600 mb-4">404 Error</h1>
          <p className="text-3xl text-gray-800 mb-6 p-4">Page not found</p>
          <button
            onClick={() => navigate('/')}
            className="px-8 py-4 pt-4 bg-indigo-600 text-white rounded-xl text-xl hover:bg-indigo-700 transition"
          >
            Back to Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
