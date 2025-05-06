import React from 'react';
import Header from '../components/Header';
import SideNavBar from '../components/SideNavBar';

const ContactPage = () => {
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
        <h1 className="text-4xl font-bold text-indigo-600 mt-36 mb-16 text-center">
          Contact Me
        </h1>
        <form className="bg-gray-100 p-8 rounded-2xl shadow-md w-full max-w-xl">
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">
              Name
            </label>
            <input
              type="text"
              className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-600"
              placeholder="Your name"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-600"
              placeholder="example@email.com"
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 font-medium mb-2">
              Message
            </label>
            <textarea
              rows="5"
              className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-600"
              placeholder="Your message"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-indigo-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-indigo-500 transition hover:scale-105"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
