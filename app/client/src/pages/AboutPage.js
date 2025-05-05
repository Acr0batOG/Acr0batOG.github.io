import React from 'react';
import Header from '../components/Header';
import SideNavBar from '../components/SideNavBar';

const AboutPage = () => {
  return (
    <div className="h-screen flex flex-col overflow-hidden overflow-y-auto">
      <Header />
      <SideNavBar />
      <div
        className="flex-grow bg-cover bg-center flex flex-col items-center px-4"
        style={{
          backgroundImage: "url('/images/background.svg')",
        }}
      >
        <h1 className="text-4xl font-bold text-indigo-600 mt-24 mb-10 text-center">
          About Me
        </h1>

        {/* Filler Images */}
        <div className="flex gap-6 mb-10 flex-wrap justify-center">
          <img
            src="https://via.placeholder.com/150"
            alt="profile"
            className="rounded-2xl shadow-md w-36 h-36 object-cover"
          />
          <img
            src="https://via.placeholder.com/150"
            alt="coding"
            className="rounded-2xl shadow-md w-36 h-36 object-cover"
          />
          <img
            src="https://via.placeholder.com/150"
            alt="design"
            className="rounded-2xl shadow-md w-36 h-36 object-cover"
          />
        </div>

        {/* Bio Section */}
        <div className="bg-gray-100 p-8 rounded-2xl shadow-md w-full max-w-3xl text-gray-800 text-lg leading-relaxed">
          <p className="mb-6">
            Hey there! I’m a full-stack developer who lives and breathes code, design, and the magic that happens in between. Whether it’s crafting sleek user interfaces or building robust backend systems, I love transforming ideas into digital experiences that are fast, functional, and beautiful.
          </p>
          <p className="mb-6">
            I thrive on challenges—figuring out how to make things not just work, but feel great to use. I'm particularly drawn to the intersection of design and technology, where I can blend logic with creativity and deliver thoughtful, user-centered solutions.
          </p>
          <p className="mb-6">
            My toolkit includes React, Node.js, Tailwind CSS, and a whole stack of web technologies, but I’m always exploring new frameworks and techniques to level up my craft.
          </p>
          <p>
            When I’m not coding, you’ll probably find me sketching ideas, testing out indie games, or chasing inspiration for the next big thing. Let’s build something awesome together!
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
