import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import SideNavBar from '../components/SideNavBar';


const projects = [
  {
    title: "IRIS",
    description: "An insurance policy review system developed for BFL Canada. Allowing users to annotate and review policy documents.",
    shortDescription: "An insurance policy review system.",
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
    shortDescription: "Annotating Breast Cancer Pathology Reports.",
    link: "https://github.com/Acr0batOG/BC_Cancer_Honours_Project",
  },
  {
    title: "On-Body Scrolling in VR",
    gifRef: "/gifs/onbody.gif",
    staticRef: "/images/onbody.jpg",
    alt: "On-Body Scrolling",
    description: "A Unity-based VR application that allows users to scroll through content using on-body gestures.",
    shortDescription: "Using on-body gestures for scrolling.",
    link: "https://github.com/Acr0batOG/VRScrollingHand",
  },
  {
    title: "eduQuest",
    description: "An interactive e-learning platform designed to make education more engaging.",
    shortDescription: "An interactive e-learning platform.",
    gifRef: "/gifs/eduquest.gif",
    staticRef: "/images/eduquest.png",
    alt: "eduQuest",
    link: "https://github.com/chpsmstr/eduQuest",
  },
];

const ProjectPage = () => {
  const [hoveredProject, setHoveredProject] = useState(null);
  const [startIndex, setStartIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(2);

  useEffect(() => {
    const handleResize = () => {
      setItemsPerPage(window.innerWidth < 768 ? 1 : 2);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const canGoNext = startIndex + itemsPerPage < projects.length;
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

  const visibleProjects = projects.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="h-screen flex flex-col overflow-hidden overflow-y-auto">
      <Header />
      
      <div
        className="md:flex-auto sm:flex-grow flex-grow bg-cover bg-top flex"
        style={{ backgroundImage: "url('/images/background.svg')" }}
      >
        {/* Side navigation column */}
        <div className="w-0 h-full">
          <SideNavBar />
        </div>
        <div className="flex-1 flex flex-col items-center text-black space-y-20 pb-8">
        <h1 className="md:text-4xl text-3xl font-bold text-indigo-600 mt-20 mb-6 text-center">
          My Projects
        </h1>

        <div className="flex items-center gap-4 md:pb-36 pb-12 md:pr-0 pr-8 md:pl-0 pl-8">
          
        <button
          onClick={handlePrev}
          disabled={!canGoPrev}
          className={`md:w-12 md:h-12 sm:w-24 sm:h-16 w-8 h-12 flex items-center justify-center rounded-xl
            ${canGoPrev ? 'bg-indigo-600 hover:bg-indigo-800 opacity-97 transition duration-300' : 'bg-gray-400'}`}
          aria-label="Previous"
        >
          <img
            src="/images/arrow_left.svg"
            alt="Arrow"
            className="w-10 h-10"
          />
        </button>
         
         

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-[68rem] md:pl-8 md:pr-8 pr-2 pl-2">
            {visibleProjects.map((project, index) => (
              <div
                key={startIndex + index}
                className="bg-gray-100 rounded-2xl shadow-md hover:shadow-lg md:hover:scale-[1.02] hover:scale-[1.12] transition duration-300 md:pl-6 md:pr-6 pl-2 pr-2 pb-4 pt-4 md:w-auto md:h-auto w-48 "
                onMouseEnter={() => setHoveredProject(index)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                <h2 className="text-xl text-center font-semibold text-indigo-600 mb-2">
                  {project.title}
                </h2>
                <p className="text-gray-700 mb-4">{itemsPerPage === 1 ? project.shortDescription : project.description}</p>
                <div className="overflow-hidden rounded-md">
                  <img
                    src={hoveredProject === index ? project.gifRef : project.staticRef}
                    alt={project.alt}
                    className="rounded-md text-center md:w-auto md:h-[15rem] h-36 w-auto"
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
          className={`md:w-12 md:h-12 sm:w-24 sm:h-16 w-8 h-12 flex items-center justify-center rounded-xl  
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
    </div>
  );
};

export default ProjectPage;