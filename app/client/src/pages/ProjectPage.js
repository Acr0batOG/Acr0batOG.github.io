import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import SideNavBar from '../components/SideNavBar';
import { useTranslation } from "react-i18next";

const projects = [
  {
    title: "IRIS",
    description: "A React and Python, insurance policy review system designed for BFL Canada.",
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
    staticRef: "/images/on-body.png",
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

  const canGoNext = startIndex + 3 < projects.length;
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

  const visibleProjects = projects.slice(startIndex, startIndex + 3);

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
          {canGoPrev && (
            <button
              onClick={handlePrev}
              className="text-3xl text-indigo-600 hover:text-indigo-800 transition"
              aria-label="Previous"
            >
              ←
            </button>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-[92rem]">
            {visibleProjects.map((project, index) => (
              <div
                key={startIndex + index}
                className="bg-gray-100 rounded-2xl shadow-md hover:shadow-xl hover:scale-[1.02] transition duration-300 pl-6 pr-6 pb-4 pt-4"
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
                    className="rounded-md w-auto h-[14rem]"
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

          {canGoNext && (
            <button
              onClick={handleNext}
              className="text-3xl text-indigo-600 hover:text-indigo-800 transition"
              aria-label="Next"
            >
              →
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;