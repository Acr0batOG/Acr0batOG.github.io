import React, { useState } from 'react';
import Header from '../components/Header';
import SideNavBar from '../components/SideNavBar';

const AboutPage = () => {
  const [fullscreenImg, setFullscreenImg] = useState(null);

  const openImage = (src) => {
    const fullSrc = src.replace('_small', '');
    setFullscreenImg(fullSrc);
  };

  const closeImage = () => setFullscreenImg(null);

  return (
    <div className="h-screen flex flex-col overflow-hidden overflow-y-auto">
      <Header />
      <SideNavBar />
      <div
        className="flex-grow bg-cover bg-center flex flex-col items-center px-4 pb-36"
        style={{
          backgroundImage: "url('/images/background.svg')",
        }}
      >
        <h1 className="text-4xl font-bold text-indigo-600 mt-24 mb-10 text-center">
          About Me
        </h1>

        {/* Filler Images */}
        <div className="flex gap-8 mb-10 flex-wrap justify-center">
          {['Skiing', 'Golf', 'VR'].map((activity) => (
            <img
              key={activity}
              src={`/images/rhys_${activity}_small.jpg`}
              alt={activity}
              onClick={() => openImage(`/images/rhys_${activity}_small.jpg`)}
              className="cursor-pointer rounded-2xl shadow-md w-72 h-72 object-cover hover:scale-[1.1] hover:shadow-xl border-[1px] border-indigo-600 transition-transform"
              style={{ imageRendering: 'optimize-contrast' }}
              title = {`${activity}`}
            />
          ))}
        </div>

        {/* Bio Section */}
        <div className="bg-gray-100 p-8 rounded-2xl shadow-md w-full max-w-3xl text-gray-800 text-lg leading-relaxed">
          <p className="mb-6">
            Hey there! I’m a full-stack developer who lives and breathes code, design, and the magic that happens in between...
          </p>
          {/* (rest of bio content) */}
        </div>
      </div>

      {/* Fullscreen Modal */}
      {fullscreenImg && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          onClick={closeImage}
        >
          <img
            src={fullscreenImg}
            alt="Fullscreen"
            className="max-w-[42rem] max-h-[42rem] object-contain rounded-lg"
          />
        </div>
      )}
    </div>
  );
};

export default AboutPage;

