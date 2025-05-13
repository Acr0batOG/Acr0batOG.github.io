import React, {useRef} from 'react';
import Header from '../components/Header';
import SideNavBar from '../components/SideNavBar';
import emailjs from '@emailjs/browser';

const ContactPage = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    try {
      emailjs
        .sendForm('service_ttauvks', 'template_zmctb2b', form.current, {
          publicKey: '2rCGgzdgJGlIk9T_0',
        })
        .then(
          () => {
            console.log('SUCCESS!');
            alert("Form has been sent");
            e.target.reset(); 
            setTimeout(() => {
              window.location.href = '/';
            }, 750);
          },
          (error) => {
            console.log('FAILED...', error.text);
            alert("There was an error sending the form");
            e.target.reset();
            setTimeout(() => {
              window.location.href = '/';
            }, 750);
          },
        );
    } catch (e) {
      console.log("Error");
    }
  };
  return (
    <div className="h-screen flex flex-col overflow-hidden overflow-y-auto">
      <Header />
      
      <div
        className="flex-grow bg-cover bg-center flex"
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
              Contact Me
            </h1>
            
            <form ref = {form} onSubmit = {sendEmail} className="form-control bg-gray-100 p-8 rounded-2xl shadow-md w-full max-w-xl">
              <div className="mb-4">
                <label className="block text-gray-700 font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-600"
                  placeholder="Your name"
                  name = "name"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-medium mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-600"
                  placeholder="Subject"
                  name = "subject"
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
                  name = "email"
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
                  name = "message"
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
    </div>
  );
};

export default ContactPage;
