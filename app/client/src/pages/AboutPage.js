import React, { useState } from 'react';
import Header from '../components/Header';
import SideNavBar from '../components/SideNavBar';
import { useNavigate } from 'react-router-dom';

const AboutPage = () => {
  const [fullscreenImg, setFullscreenImg] = useState(null);
  const navigate = useNavigate();
  const openImage = (src) => {
    const fullSrc = src.replace('_small', '');
    setFullscreenImg(fullSrc);
  };

  const closeImage = () => setFullscreenImg(null);

  return (
    <div className="h-screen flex flex-col overflow-hidden overflow-y-auto">
      <Header />
      
      <div className="flex-grow bg-cover bg-top flex"
        style={{
          backgroundImage: "url('/images/background.svg')",
        }}
      >
        {/* Side navigation column */}
        <div className="w-0 h-full">
          <SideNavBar />
        </div>
        <div className="flex-1 flex flex-col items-center text-black space-y-20 pb-36">
        <h1 className="text-4xl font-bold text-indigo-600 mt-20 mb-6 text-center">
          About Me
        </h1>

        {/* Filler Images */}
        <div className="flex gap-8 mb-10 flex-wrap justify-center">
          {['skiing', 'golf', 'vr'].map((activity) => (
            <img
              key={activity}
              src={`/images/rhys${activity}small.jpg`}
              alt={activity}
              onClick={() => openImage(`/images/rhys${activity}small.jpg`)}
              className="cursor-pointer rounded-2xl shadow-md w-72 h-72 object-cover hover:scale-[1.1] hover:shadow-xl border-[1px] border-indigo-600 transition-transform"
              style={{ imageRendering: 'optimize-contrast' }}
              title = {`${activity}`}
            />
          ))}
        </div>

        {/* Bio Section */}
        <div className="bg-gray-100 p-8 rounded-2xl shadow-md w-full max-w-3xl text-gray-800 text-lg leading-relaxed">
          <p>
            Hey! I'm Rhys Smith. </p>
            <p className='mt-4'> A full-stack developer with expertise in React, C# and Python. I recently graduated from UBCO with a Bachelor of Science (Honours) in Computer Science. You can check out some of my past projects on the{' '}
            <span
              onClick={() => navigate("/projects")}
              className="text-indigo-600 cursor-pointer hover:text-indigo-800"
            >
              projects
            </span>{' '}
            page.
            </p>
            
          <p className="mt-4">
            In my free time, I enjoy playing guitar and creating music. I also quite enjoy gaming with friends, my current favourite is Counter-Strike 2.
          </p>
          <p className="mt-4">
            When the weather’s warm, you’ll often find me out on the golf course. And during the winter, I’m usually up at the ski hill enjoying the snow.
          </p>
          <p className='mt-4'>
            I’m currently seeking opportunities to kick off my professional career as a developer and contribute to meaningful projects. If you think I’d be a great fit, feel free to <span
              onClick={() => navigate("/contact")}
              className="text-indigo-600 cursor-pointer hover:text-indigo-800"
            >
              contact
            </span>{' '} me. I’d love to connect.
          </p>
          
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
    </div>
  );
};

export default AboutPage;

