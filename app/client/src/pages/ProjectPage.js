import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import SideNavBar from '../components/SideNavBar';
import { useTranslation } from "react-i18next";

const projects = [
  {
    title: "IRIS",
    description: "An insurance policy review system developed for BFL Canada. Allowing users to compare, annotate and review policy documents.",
    gifRef: "/gifs/iris.gif",
    staticRef: "/images/iris.png",
    alt: "Iris",
    link: "",
  },
  {
    title: "Cancer Pathology Report Annotation",
    gifRef: "/gifs/annotation.gif",
    staticRef: "/images/annotation.png",
    alt: "Cancer Annotation",
    description: "Annotating Breast Cancer Pathology Reports from BC Cancer data to faciliate the training of an NLP model.",
    link: "https://github.com/Acr0batOG/BC_Cancer_Honours_Project",
  },
  {
    title: "On-Body Scrolling in VR",
    gifRef: "/gifs/onbody.gif",
    staticRef: "/images/onbody.jpg",
    alt: "On-Body Scrolling",
    description: "A Unity-based VR application that allows users to scroll through content using on-body gestures.",
    link: "https://github.com/Acr0batOG/VRScrollingHand",
  },
  {
    title: "eduQuest",
    description: "An interactive e-learning platform designed to make education more engaging.",
    gifRef: "/gifs/eduquest.gif",
    staticRef: "/images/eduquest.png",
    alt: "eduQuest",
    link: "https://github.com/chpsmstr/eduQuest",
  },
];

const ProjectPage = () => {
  const [hoveredProject, setHoveredProject] = useState(null);
  const [startIndex, setStartIndex] = useState(0);

  const canGoNext = startIndex + 2 < projects.length;
  const canGoPrev = startIndex > 0;

  const handleNext = () => {
    if (canGoNext) {
      setStartIndex(startIndex + 1);
    }
  };

  const handlePrev = () => {
    if (canGoPrev) {
      setStartIndex(startIndex - 1);
    }
  };

  const visibleProjects = projects.slice(startIndex, startIndex + 2);

  return (
    <div className="h-screen flex flex-col overflow-hidden overflow-y-auto">
      <Header />
      <SideNavBar />
      <div
        className="flex-grow bg-cover bg-center flex flex-col items-center px-4"
        style={{ backgroundImage: "url('/images/background.svg')" }}
      >
        <h1 className="text-4xl font-bold text-indigo-600 mt-12 mb-12 text-center">
          My Projects
        </h1>

        <div className="flex items-center gap-4">
          
        <button
          onClick={handlePrev}
          disabled={!canGoPrev}
          className={`w-12 h-12 flex items-center justify-center rounded-xl  
            ${canGoPrev ? 'bg-indigo-600 hover:bg-indigo-800 opacity-97 transition duration-300' : 'bg-gray-400'}`}
          aria-label="Previous"
        >
          <img
            src="/images/arrow_left.svg"
            alt="Arrow"
            className="w-10 h-10"
          />
        </button>
         
         

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-8 max-w-[76rem] pl-8 pr-8">
            {visibleProjects.map((project, index) => (
              <div
                key={startIndex + index}
                className="bg-gray-100 rounded-2xl shadow-md hover:shadow-lg hover:scale-[1.02] transition duration-300 pl-6 pr-6 pb-4 pt-4"
                onMouseEnter={() => setHoveredProject(index)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                <h2 className="text-xl font-semibold text-indigo-600 mb-2">
                  {project.title}
                </h2>
                <p className="text-gray-700 mb-4">{project.description}</p>
                <div className="overflow-hidden rounded-md">
                  <img
                    src={hoveredProject === index ? project.gifRef : project.staticRef}
                    alt={project.alt}
                    className="rounded-md w-auto h-[16.5rem]"
                  />
                </div>
                {project.link ? (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-indigo-600 hover:underline font-medium mt-4 block"
                  >
                    Project Repository →
                  </a>
                ) : (
                  <span className="text-indigo-600 hover:text-gray-500 font-medium mt-4 block">
                    Private Repository
                  </span>
                )}
              </div>
            ))}
          </div>

        <button
          onClick={handleNext}
          disabled={!canGoNext}
          className={`w-12 h-12 flex items-center justify-center rounded-xl  
            ${canGoNext ? 'bg-indigo-600 opacity-97 hover:bg-indigo-800 transition' : 'bg-gray-400'}`}
          aria-label="Previous"
        >
          <img
            src="/images/arrow_right.svg"
            alt="Arrow"
            className="w-10 h-10"
            onClick={handleNext}
          disabled={!canGoNext}
          />
        </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;